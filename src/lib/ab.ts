/**
 * Client-side A/B testing for a fully static site.
 *
 * Design constraints this has to satisfy
 * --------------------------------------
 * 1. **No cloaking.** The prerendered HTML that Googlebot and GPTBot fetch must
 *    always contain the control variant. `useVariant` therefore returns the
 *    control on the server and on first paint, and only swaps after mount. A
 *    crawler that never runs JS sees one stable version of the page; a crawler
 *    that does run JS sees a variant that says the same thing in different
 *    words, which is exactly what Google's guidance on A/B testing permits.
 * 2. **Sticky assignment.** A returning visitor must see the same variant, or
 *    the results are noise. Assignment is stored in localStorage and keyed by
 *    experiment id, so adding an experiment never reshuffles existing ones.
 * 3. **No backend.** Events go to `dataLayer` (GTM) and `gtag` (GA4) if either
 *    is present, and are otherwise dropped. Nothing here blocks rendering or
 *    fails if analytics is absent. Whether either global exists is decided by
 *    `src/lib/analytics.ts` — until a GA4 measurement ID is configured there,
 *    every event below is still dropped and these experiments still run blind.
 *
 * Reading the results: in GA4, `ab_exposure` and `ab_conversion` both carry
 * `experiment_id` and `variant_id`. Conversion rate per variant is
 * count(ab_conversion) / count(ab_exposure) grouped by those two params.
 */

import { useEffect, useState } from "react";

import { track } from "@/lib/analytics";

const STORAGE_KEY = "lws_ab_v1";

export type Experiment = {
  id: string;
  /** variants[0] is the control — it is what non-JS crawlers and first paint see. */
  variants: readonly string[];
  /** What this test is trying to move, for whoever reads the results later. */
  hypothesis: string;
};

/**
 * Live experiments.
 *
 * Both of these target the same funnel step — the click that opens WhatsApp —
 * because that click is the only conversion this site has. Keep the list short:
 * with the traffic a new education site gets, running more than two tests at
 * once means neither reaches significance this decade.
 */
export const EXPERIMENTS = {
  heroHeadline: {
    id: "hero_headline",
    variants: ["control", "price_anchor", "outcome"],
    hypothesis:
      "Leading with the ₹999 price or with a concrete outcome converts better than the brand-led headline, because Indian learners comparison-shop on price and on 'will this actually work for me'.",
  },
  primaryCta: {
    id: "primary_cta",
    variants: ["control", "free_slot", "no_card"],
    hypothesis:
      "Naming the objection in the button ('No Card Needed') lifts clicks more than a generic 'Enroll' label, because the main hesitation is fear of a sales trap rather than price.",
  },
} as const satisfies Record<string, Experiment>;

type Assignments = Record<string, string>;

function readAssignments(): Assignments {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Assignments) : {};
  } catch {
    // Private mode, disabled storage, or corrupt JSON — fall back to control.
    return {};
  }
}

function writeAssignments(next: Assignments) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* non-fatal */
  }
}

/** Assigns (and persists) a variant for an experiment. Even split. */
function assign(experiment: Experiment): string {
  const stored = readAssignments();
  const existing = stored[experiment.id];
  if (existing && experiment.variants.includes(existing)) return existing;

  const picked = experiment.variants[Math.floor(Math.random() * experiment.variants.length)];
  writeAssignments({ ...stored, [experiment.id]: picked });
  return picked;
}

/** Exposures are logged once per page view, not once per render. */
const loggedExposures = new Set<string>();

/**
 * Returns the active variant for an experiment.
 *
 * Always `variants[0]` during SSR/prerender and on the first client render, so
 * the static HTML and the hydrated DOM agree and no crawler ever sees a variant
 * the HTML did not contain.
 */
export function useVariant(experiment: Experiment): string {
  const [variant, setVariant] = useState<string>(experiment.variants[0]);

  useEffect(() => {
    const assigned = assign(experiment);
    setVariant(assigned);

    const key = `${experiment.id}:${assigned}`;
    if (!loggedExposures.has(key)) {
      loggedExposures.add(key);
      track("ab_exposure", { experiment_id: experiment.id, variant_id: assigned });
    }
  }, [experiment]);

  return variant;
}

/**
 * Records the conversion. Called from every WhatsApp click, which is the single
 * goal every experiment on this site is measured against.
 */
export function trackConversion(goal: string, detail?: string) {
  if (typeof window === "undefined") return;

  const assignments = readAssignments();
  track("ab_conversion", {
    goal,
    ...(detail ? { detail } : {}),
    // Stamp every live assignment onto the conversion so results can be
    // segmented per experiment without a join.
    ...Object.fromEntries(
      Object.entries(assignments).map(([id, variant]) => [`ab_${id}`, variant]),
    ),
  });

  for (const [id, variant] of Object.entries(assignments)) {
    track("ab_conversion_variant", { experiment_id: id, variant_id: variant, goal });
  }
}
