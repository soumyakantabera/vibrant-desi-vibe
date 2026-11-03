import { NEEDS, type NeedKey } from "@/lib/needs";
import { STATE_BY_SLUG } from "@/lib/states";
import { SITE_URL, abs, pageHead } from "@/lib/seo";

/*
 * <head> builders for the state and need pages. Kept apart from
 * RegionalPages.tsx: route head() runs in the main bundle, and importing the
 * page components from there would pull every guide body into it.
 */

/** <head> for a state page: page SEO + a Service entity scoped to the state. */
export function stateHead(slug: string) {
  const st = STATE_BY_SLUG[slug];
  const head = pageHead(st.path);
  head.meta.push({ name: "geo.region", content: st.geoRegion });
  head.scripts.push({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${abs(st.path)}#service`,
      serviceType: "Spoken English Classes (live online)",
      name: `Live online spoken English for ${st.name} — about 6 learners, from ₹999/month, inclusive of taxes`,
      url: abs(st.path),
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "State", name: st.name },
        ...st.cities.map((c) => ({ "@type": "City", name: c })),
        ...st.localities.flatMap((l) =>
          l.areas.map((a) => ({ "@type": "Place", name: `${a}, ${l.city}` })),
        ),
        { "@type": "Country", name: "India" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: abs("/free-consultation"),
        availableLanguage: ["en-IN", "hi-IN", "mr-IN"],
      },
      offers: {
        "@type": "Offer",
        price: 999,
        priceCurrency: "INR",
        valueAddedTaxIncluded: true,
        url: abs("/course-spoken-english"),
      },
    }),
  });
  return head;
}

export function needHead(key: NeedKey) {
  const n = NEEDS[key];
  const head = pageHead(n.path);
  head.scripts.push({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${abs(n.path)}#article`,
      headline: n.title,
      description: n.description,
      url: abs(n.path),
      mainEntityOfPage: { "@type": "WebPage", "@id": abs(n.path) },
      inLanguage: "en-IN",
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      author: {
        "@type": "Person",
        "@id": `${abs("/educator")}#person`,
        name: "Sunanda Dey",
        url: abs("/educator"),
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    }),
  });
  return head;
}
