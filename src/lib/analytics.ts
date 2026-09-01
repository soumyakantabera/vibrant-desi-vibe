/**
 * Analytics and webmaster verification — the one file to edit when you get the
 * IDs.
 *
 * Why this exists
 * ---------------
 * The A/B code in `src/lib/ab.ts` has always pushed to `window.dataLayer` and
 * called `window.gtag`, both through optional chaining. No analytics tag was
 * ever loaded on the site, so neither global existed and every call silently
 * did nothing: two live experiments were assigning real visitors to variants
 * and three events (`ab_exposure`, `ab_conversion`, `ab_conversion_variant`)
 * were firing into a vacuum on every pageview. The experiments were running
 * blind, and so was everything else.
 *
 * GA4 is the zero-refactor fix because the existing calls already target
 * `gtag`/`dataLayer`.
 *
 * Filling these in
 * ----------------
 * Every constant below is intentionally empty. An empty value emits nothing at
 * all — no script tag, no meta tag — so the site is correct today and becomes
 * measured the moment a value is filled in. Nothing here is invented: a wrong
 * GA4 property silently collects into someone else's account, and a wrong
 * verification token just fails to verify.
 *
 *   GA4_MEASUREMENT_ID   analytics.google.com → Admin → Data Streams → Web.
 *                        Looks like "G-XXXXXXXXXX".
 *   GOOGLE_SITE_VERIFICATION
 *                        search.google.com/search-console → add the
 *                        https://www.learnwithsmile.app property → HTML tag
 *                        method → copy the `content` value only.
 *   BING_SITE_VERIFICATION
 *                        bing.com/webmasters → add site → Meta tag → copy the
 *                        `content` value only. Worth doing: Bing's index is
 *                        what ChatGPT search reads, and this site's whole AI
 *                        strategy depends on being retrievable there.
 */

import { createLeadId, getCampaignAttribution, leadContext } from "@/lib/whatsapp";

/** GA4 measurement ID, e.g. "G-XXXXXXXXXX". Empty = no tag is loaded. */
export const GA4_MEASUREMENT_ID = "";

/** `content` value of the google-site-verification meta tag. */
export const GOOGLE_SITE_VERIFICATION = "";

/** `content` value of the msvalidate.01 meta tag (Bing Webmaster Tools). */
export const BING_SITE_VERIFICATION = "";

/** Only a well-formed GA4 ID is ever written into the page. */
const GA4_ID_PATTERN = /^G-[A-Z0-9]{6,}$/;

export function hasAnalytics(): boolean {
  return GA4_ID_PATTERN.test(GA4_MEASUREMENT_ID);
}

/** URL of the gtag.js loader for the configured property. */
export function ga4LoaderSrc(): string {
  return `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
}

/**
 * The inline half of the GA4 tag: create `dataLayer`, define `gtag`, and
 * configure the property. This is what makes `window.gtag` exist, which is what
 * every event in this file and in `src/lib/ab.ts` has always been calling.
 */
export function ga4InlineScript(): string {
  return (
    "window.dataLayer=window.dataLayer||[];" +
    "function gtag(){dataLayer.push(arguments)}" +
    "gtag('js',new Date());" +
    `gtag('config','${GA4_MEASUREMENT_ID}',{send_page_view:true});`
  );
}

/**
 * Both halves as raw HTML, for the static build.
 *
 * Stamped into `index.html` at build time by `vite/analytics-plugin.ts`, which
 * is also how the boot gate gets there. That placement matters: the prerender
 * step uses the built `index.html` as its template, so one insertion point
 * gives every prerendered page the tag, and — because it is not rendered
 * through TanStack's head pipeline — React never renders a second copy of it
 * after hydration.
 *
 * Returns "" when unconfigured, so the build simply omits the block.
 */
export function ga4Snippet(): string {
  if (!hasAnalytics()) return "";
  return (
    `<script async src="${ga4LoaderSrc()}"></script>` + `<script>${ga4InlineScript()}</script>`
  );
}

/**
 * Sitewide verification meta tags, for `siteHead()`. Empty values produce no
 * tags — an empty `content` would fail verification and look like a broken
 * setup to anyone reading the source.
 */
export function verificationMeta(): Array<Record<string, string>> {
  const meta: Array<Record<string, string>> = [];
  if (GOOGLE_SITE_VERIFICATION) {
    meta.push({ name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION });
  }
  if (BING_SITE_VERIFICATION) {
    meta.push({ name: "msvalidate.01", content: BING_SITE_VERIFICATION });
  }
  return meta;
}

/* -------------------------------------------------------------- event layer */

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/**
 * Sends one event to whichever tag is present — GTM's `dataLayer`, GA4's
 * `gtag`, or neither.
 *
 * Still optional-chained, and that is correct now rather than a bug: with the
 * loader above configured the globals exist, and without it the site must keep
 * working rather than throwing on every click.
 */
export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  w.dataLayer?.push({ event, ...params });
  w.gtag?.("event", event, params);
}

/** Where on the page a WhatsApp CTA sits. Read from `data-cta-location`. */
export type CtaLocation =
  | "hero"
  | "pricing"
  | "faq"
  | "footer"
  | "testimonial"
  | "syllabus"
  | "final_cta"
  | "sticky"
  | "fab"
  | "blog"
  | "unknown";

/**
 * The site's real conversion.
 *
 * Every call to action on every page opens WhatsApp — there is no checkout, no
 * signup and no form submission that stays on the site. That click is the exit
 * from the funnel and therefore the only outcome worth counting; without it
 * the A/B experiments have exposures and no conversions.
 */
export function trackWhatsAppClick(params: {
  ctaLocation: CtaLocation | string;
  course?: string;
  goal?: string;
  leadId?: string;
}) {
  if (typeof window === "undefined") return;
  track("whatsapp_click", {
    source_page: window.location.pathname,
    cta_location: params.ctaLocation,
    ...(params.course ? { course: params.course } : {}),
    ...(params.goal ? { cta_goal: params.goal } : {}),
    ...(params.leadId ? { lead_id: params.leadId } : {}),
  });
}

export function trackCallClick(params: { ctaLocation: CtaLocation | string; course?: string }) {
  if (typeof window === "undefined") return;
  track("phone_call_click", {
    source_page: window.location.pathname,
    cta_location: params.ctaLocation,
    ...(params.course ? { course: params.course } : {}),
  });
}

/**
 * Course slug for the current page, so a WhatsApp click from `/course-ielts`
 * is attributable to IELTS without every call site having to pass it.
 */
export function courseFromPath(pathname: string): string | undefined {
  const m = /^\/course-([a-z-]+)\/?$/.exec(pathname);
  return m?.[1];
}

/**
 * Catches every WhatsApp click on the page from one listener on the document.
 *
 * A per-component `onClick` would need adding to ~60 call sites and would be
 * missed by the next one somebody writes — and several of these links are
 * plain `<a>` elements rather than the shared button (the sticky mobile bar,
 * the floating action button, the testimonial cards). Delegation catches all
 * of them, including any added later, and cannot drift.
 *
 * Capture phase, so it still records the click if something downstream stops
 * propagation. Returns its own teardown.
 */
export function installWhatsAppClickTracking(): () => void {
  if (typeof document === "undefined") return () => {};

  const onClick = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
    if (!link) return;

    const located = link.closest<HTMLElement>("[data-cta-location]");
    const leadId = createLeadId();

    // Put first-party campaign details in the actual enquiry. This is useful
    // even while GA4 is unconfigured: the admissions team can see which page
    // and campaign produced every WhatsApp conversation.
    try {
      const url = new URL(link.href);
      const message = url.searchParams.get("text") ?? "Hi, I am interested in Learn With Smile.";
      if (!message.includes("Lead ref:")) {
        url.searchParams.set("text", `${message}\n\n${leadContext(leadId, getCampaignAttribution())}`);
        link.href = url.toString();
      }
    } catch {
      // Never block the visitor from opening WhatsApp because attribution failed.
    }

    trackWhatsAppClick({
      ctaLocation: located?.dataset.ctaLocation ?? "unknown",
      course: courseFromPath(window.location.pathname),
      goal: link.dataset.ctaGoal,
      leadId,
    });
  };

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}

/** Delegated tracking for every click-to-call link, including future CTAs. */
export function installCallClickTracking(): () => void {
  if (typeof document === "undefined") return () => {};

  const onClick = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
    if (!link) return;

    const located = link.closest<HTMLElement>("[data-cta-location]");
    trackCallClick({
      ctaLocation: located?.dataset.ctaLocation ?? "unknown",
      course: courseFromPath(window.location.pathname),
    });
  };

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
