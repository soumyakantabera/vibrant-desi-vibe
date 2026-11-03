/*
 * <head> builders for the city pages and the configured guides. Kept out of
 * the page-component files: route head() runs in the main bundle, so anything
 * imported next to it ships to every page on first load.
 */
import { getCity } from "@/lib/cities";
import { PAGES, SITE_URL, abs, pageHead } from "@/lib/seo";

export function cityHead(slug: string) {
  const city = getCity(slug);
  const head = pageHead(city.path);
  head.meta.push(
    { name: "geo.region", content: city.geoRegion },
    { name: "geo.placename", content: city.name },
    { name: "geo.position", content: `${city.lat};${city.lng}` },
    { name: "ICBM", content: `${city.lat}, ${city.lng}` },
  );
  head.scripts.push({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${abs(city.path)}#service`,
      serviceType: "Spoken English Classes",
      name: `Live Spoken English for ${city.name} — Approx. 6 learners, ₹999/mo, inclusive of taxes`,
      url: abs(city.path),
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: city.name },
        { "@type": "State", name: city.state },
        { "@type": "Country", name: "India" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: abs("/free-consultation"),
        availableLanguage: ["en-IN", "hi", "bn"],
      },
    }),
  });
  return head;
}

export function guideHead(path: string) {
  const page = PAGES[path];
  const head = pageHead(path);
  if (!page) return head;
  head.scripts.push({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${abs(path)}#article`,
      headline: page.title,
      description: page.description,
      url: abs(path),
      mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
      inLanguage: "en-IN",
      dateModified: page.dateModified ?? "2026-09-11",
      author: {
        "@type": "Person",
        "@id": `${abs("/educator")}#person`,
        name: "Sunanda Dey",
        url: abs("/educator"),
      },
      publisher: { "@id": `${abs("/")}#organization` },
    }),
  });
  if (page.dateModified) {
    head.meta.push({ property: "article:modified_time", content: page.dateModified });
  }
  return head;
}
