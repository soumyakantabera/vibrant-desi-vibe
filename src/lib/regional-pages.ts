/**
 * Page bodies + SEO entries for the state pages and the needs guides.
 * Kept apart from needs.ts / states.ts so each data file stays import-free
 * of the other (the two cross-link only here).
 */
import type { ArticleBody } from "@/content/blog/blocks";
import type { PageSeo } from "@/lib/seo";
import { NEEDS, NEED_KEYS, type Need } from "@/lib/needs";
import { STATES, type StateInfo } from "@/lib/states";
import { ALL_IN_ONE, WHY_WE_WIN_FAQ } from "@/lib/positioning";

const UPDATED = "2026-11-03";

const MEDIUM_COURSE: Record<StateInfo["medium"], { path: string; label: string; line: string }> = {
  hindi: {
    path: "/course-spoken-english-hindi",
    label: "Basic Spoken English — Hindi to English",
    line: "a Hindi-speaking teacher explains what does not land in Hindi, and you speak English in every class",
  },
  marathi: {
    path: "/course-spoken-english-marathi",
    label: "Basic Spoken English — Marathi to English",
    line: "a Marathi-speaking teacher explains what does not land in Marathi, and you speak English in every class",
  },
  english: {
    path: "/course-spoken-english",
    label: "Basic Spoken English",
    line: "English-to-English teaching, with a Hindi-medium batch available if you think in Hindi",
  },
};

export function stateBody(st: StateInfo): ArticleBody {
  const mc = MEDIUM_COURSE[st.medium];
  return [
    {
      t: "p",
      text: `**Short answer.** ${st.intro} Learn With Smile teaches live online in batches of about 6 — [${mc.label}](${mc.path}) is ₹999/month inclusive of taxes, with daily practice in the [Bolo app](/bolo) and a weekly teacher review.`,
    },
    { t: "h2", text: `Where English matters in ${st.name}` },
    {
      t: "table",
      caption: `Jobs and studies in ${st.name} where spoken English is tested, and the guide for each.`,
      head: ["Your next step", `Where in ${st.name}`, "Guide"],
      rows: st.hubs.map((h) => [
        NEEDS[h.need].label,
        h.where,
        `[${NEEDS[h.need].h1.replace(/^English for /, "")}](${NEEDS[h.need].path})`,
      ]),
    },
    { t: "h2", text: `What spoken English costs in ${st.name}` },
    {
      t: "table",
      caption:
        "Typical options and prices from public listings checked in November 2026. Check each provider's current fee.",
      head: ["Option", "Typical price"],
      rows: [
        ...st.prices.map((p) => [p.what, p.range]),
        [
          "**Learn With Smile** — live batch of about 6 + Bolo app + weekly review + same teacher",
          "**₹999/month** (Basic Spoken English)",
        ],
      ],
    },
    { t: "p", text: ALL_IN_ONE },
    { t: "h2", text: "Taught in your language" },
    {
      t: "p",
      text: `For learners in ${st.name}, we lead with [${mc.label}](${mc.path}): ${mc.line}. Same course, same fee, same Bolo app as everyone else.`,
    },
    {
      t: "cta",
      text: `Start with ${mc.label} — ₹999/month, about 6 learners, live online.`,
      course: mc.path,
      label: mc.label,
    },
    { t: "h2", text: `${st.name} — facts that shape how you learn` },
    { t: "ul", items: st.facts },
    { t: "h2", text: `Searching for "spoken English classes near me" in ${st.name}?` },
    {
      t: "p",
      text: `If you are in ${st.localities.flatMap((l) => l.areas.slice(0, 2).map((a) => `${a} (${l.city})`)).join(", ")} or nearby, you do not need a classroom down the road. We have **no branch** in ${st.name} — classes are live online, so the time you would spend travelling becomes speaking time, and the teacher stays the same even if you move.`,
    },
    {
      t: "table",
      caption: `Areas in ${st.name} our learners join from — online, no travel.`,
      head: ["City", "Areas"],
      rows: st.localities.map((l) => [l.city, l.areas.join(", ")]),
    },
    {
      t: "ul",
      items: [
        "No commute and no parking: join from home, hostel or office.",
        "Afternoon, evening and night IST slots — fits shifts and college timings.",
        "Batch of about 6, so you speak more than in a 25–40 seat classroom.",
        "Daily practice in the Bolo app and a weekly teacher review — classrooms send worksheets.",
      ],
    },
    { t: "h2", text: "Cities our learners join from" },
    {
      t: "p",
      text: `${st.cities.join(", ")} — and anywhere else in ${st.name}. Classes are live online in afternoon, evening and night IST slots; there is no classroom to travel to (our only office is in Kolkata). Languages you will hear in ${st.name}: ${st.languages}.`,
    },
  ];
}

export function needBody(n: Need): ArticleBody {
  const where = STATES.filter((s) => s.hubs.some((h) => h.need === n.key));
  return [
    ...n.body,
    { t: "h2", text: "Where these jobs and studies are" },
    {
      t: "table",
      caption: "States where this need is common, and the page for each.",
      head: ["State", "Where", "Page"],
      rows: where.map((s) => [
        s.name,
        s.hubs.find((h) => h.need === n.key)?.where ?? "",
        `[Spoken English in ${s.name}](${s.path})`,
      ]),
    },
    { t: "p", text: ALL_IN_ONE },
  ];
}

function stateSeo(st: StateInfo): PageSeo {
  const mc = MEDIUM_COURSE[st.medium];
  return {
    path: st.path,
    title: st.title,
    description: st.description,
    shortTitle: `Spoken English in ${st.name}`,
    keywords: [
      ...st.keywords,
      ...st.localities
        .flatMap((l) =>
          l.areas
            .slice(0, 2)
            .map((a) => `spoken english classes near ${a.toLowerCase()} ${l.city.toLowerCase()}`),
        )
        .slice(0, 10),
      `spoken english classes near me ${st.name.toLowerCase()}`,
      `online spoken english class ${st.name.toLowerCase()}`,
    ],
    ogImage: "/og/default.jpg",
    priority: 0.7,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: `Spoken English in ${st.name}`, path: st.path },
    ],
    summary: `Spoken English for ${st.name} (${st.cities.slice(0, 4).join(", ")}): live online, about 6 learners per batch, ${mc.label} at ₹999/month inclusive of taxes, Bolo practice app and weekly teacher review included. Local needs: ${st.hubs.map((h) => NEEDS[h.need].label).join(", ")}. Local options seen Nov 2026: ${st.prices.map((p) => `${p.what} ${p.range}`).join("; ")}. Learners join online from ${st.localities.map((l) => `${l.city} (${l.areas.join(", ")})`).join("; ")} — no branch or classroom there; live online instead. ${ALL_IN_ONE}`,
    faqs: [...st.faqs, WHY_WE_WIN_FAQ[0]],
  };
}

function needSeo(n: Need): PageSeo {
  return {
    path: n.path,
    title: n.title,
    description: n.description,
    shortTitle: n.h1,
    keywords: n.keywords,
    ogImage: "/og/default.jpg",
    priority: 0.7,
    changefreq: "monthly",
    dateModified: UPDATED,
    breadcrumb: [
      { name: "Guides", path: "/guides" },
      { name: n.h1, path: n.path },
    ],
    summary: n.summary,
    faqs: [...n.faqs, WHY_WE_WIN_FAQ[1]],
  };
}

export const REGIONAL_PAGES: Record<string, PageSeo> = Object.fromEntries([
  ...STATES.map((s) => [s.path, stateSeo(s)] as const),
  ...NEED_KEYS.map((k) => [NEEDS[k].path, needSeo(NEEDS[k])] as const),
]);
