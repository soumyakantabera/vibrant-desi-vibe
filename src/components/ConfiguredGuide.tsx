import { createElement } from "react";

import { GuidePage } from "@/components/GuidePage";
import { NEW_GUIDE_VIEWS } from "@/content/pages/new-guides";
import { PAGES } from "@/lib/seo";

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
