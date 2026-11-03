/**
 * SEO entries for the state pages and the needs guides. Loaded by seo.ts on
 * every page, so it holds only what <head>, the sitemap and the llms files
 * need — the page bodies live in regional-pages.ts (route chunks only).
 */
import type { PageSeo } from "@/lib/seo";
import { NEEDS, NEED_KEYS, type Need } from "@/lib/needs";
import { STATES, type StateInfo } from "@/lib/states";
import { ALL_IN_ONE, WHY_WE_WIN_FAQ } from "@/lib/positioning";

const UPDATED = "2026-11-03";

export const MEDIUM_COURSE: Record<
  StateInfo["medium"],
  { path: string; label: string; line: string }
> = {
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

/** Cities with their own page; local FAQs on state pages lead with the others. */
const OWN_CITY_PAGE = new Set(["Mumbai", "Delhi", "Bengaluru", "Hyderabad"]);

/**
 * Four questions people in the state actually ask, answered from that state's
 * own data (localities, local prices, medium), so no two state pages carry the
 * same answers. Shown on the page and in FAQPage schema from the same list.
 */
export function stateLocalFaqs(st: StateInfo): { q: string; a: string }[] {
  const mc = MEDIUM_COURSE[st.medium];
  const loc = st.localities.find((l) => !OWN_CITY_PAGE.has(l.city)) ?? st.localities[0];
  const others = st.cities.filter((c) => c !== loc.city).slice(0, 4);
  return [
    {
      q: `Is there a spoken English class near ${loc.areas[0]}, ${loc.city}?`,
      a: `Learn With Smile has no classroom in ${loc.city}; our only office is in Kolkata. Learners from ${loc.areas.join(", ")} join the live online batch instead: about 6 learners, a real teacher, ₹999/month inclusive of taxes. No commute, and you keep the same teacher if you move.`,
    },
    {
      q: `How much do spoken English classes cost in ${st.name}?`,
      a: `Public listings in ${st.name} (November 2026): ${st.prices.map((x) => `${x.what}: ${x.range}`).join("; ")}. Learn With Smile's ${mc.label} is ₹999/month inclusive of taxes, with live classes, the Bolo practice app, video lessons and a weekly teacher review in the same fee.`,
    },
    {
      q: `What are the class timings for learners in ${st.name}?`,
      a: `Batches run in afternoon, evening and night slots (IST), so you can join after college or work from ${others.join(", ")} or anywhere else in ${st.name}. Basic Spoken English is 6 months, 1 hr 30 min a class, up to 2 classes a week, with daily practice in the Bolo app between classes.`,
    },
    {
      q: `Which language does the teacher explain in, for ${st.name}?`,
      a:
        st.medium === "english"
          ? `${mc.label}: ${mc.line}. Explanations are in English or Hindi only. Tell us on WhatsApp which language you think in and we will say honestly whether a batch fits.`
          : `Yes. ${mc.label}: ${mc.line}. The ${st.medium === "hindi" ? "Hindi" : "Marathi"} explanations are short and only where something does not land; the speaking is in English.`,
    },
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
    faqs: [...st.faqs, ...stateLocalFaqs(st), WHY_WE_WIN_FAQ[0], WHY_WE_WIN_FAQ[2]],
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
    faqs: [...n.faqs, WHY_WE_WIN_FAQ[1], WHY_WE_WIN_FAQ[2]],
  };
}

export const REGIONAL_PAGES: Record<string, PageSeo> = Object.fromEntries([
  ...STATES.map((s) => [s.path, stateSeo(s)] as const),
  ...NEED_KEYS.map((k) => [NEEDS[k].path, needSeo(NEEDS[k])] as const),
]);
