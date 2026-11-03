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
