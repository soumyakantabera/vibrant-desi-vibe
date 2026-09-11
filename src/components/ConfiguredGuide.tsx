import { createElement } from "react";

import { GuidePage } from "@/components/GuidePage";
import { NEW_GUIDE_VIEWS } from "@/content/pages/new-guides";
import { PAGES, abs, pageHead } from "@/lib/seo";

export function guideHead(path: string) {
  const page = PAGES[path];
  const view = NEW_GUIDE_VIEWS[path];
  const head = pageHead(path);
  if (!page || !view) return head;
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
        "@id": `${abs("/founder")}#person`,
        name: "Sunanda Dey",
        url: abs("/founder"),
      },
      publisher: { "@id": `${abs("/")}#organization` },
    }),
  });
  if (page.dateModified) {
    head.meta.push({ property: "article:modified_time", content: page.dateModified });
  }
  return head;
}

export function ConfiguredGuide({ path }: { path: string }) {
  const page = PAGES[path];
  const view = NEW_GUIDE_VIEWS[path];
  if (!page || !view) return createElement("p", null, "Guide missing.");
  return (
    <GuidePage
      eyebrow={view.eyebrow}
      breadcrumb={view.breadcrumb}
      h1={
        <>
          {view.h1} — <span className="text-sunshine">{view.h1Accent}</span>
        </>
      }
      standfirst={view.standfirst}
      shortAnswer={view.shortAnswer}
      heroImage={view.image}
      heroAlt={view.alt}
      lastUpdated={page.dateModified}
      body={view.body}
      faqs={page.faqs ?? []}
      faqTitle={view.faqTitle}
      waMessage={view.waMessage}
      ctaTitle={view.ctaTitle}
      ctaBody={view.ctaBody}
    />
  );
}