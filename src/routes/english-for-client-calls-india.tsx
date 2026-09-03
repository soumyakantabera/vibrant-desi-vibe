import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/client-calls";

const PATH = "/english-for-client-calls-india";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/english-for-client-calls-india")({
  component: Page,
  head: () => {
    const head = pageHead(PATH);
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${abs(PATH)}#article`,
        headline: PAGES[PATH].title,
        description: PAGES[PATH].description,
        url: abs(PATH),
        mainEntityOfPage: { "@type": "WebPage", "@id": abs(PATH) },
        inLanguage: "en-IN",
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: {
          "@type": "Person",
          "@id": `${abs("/founder")}#person`,
          name: "Sunanda Dey",
          url: abs("/founder"),
        },
        publisher: { "@id": `${abs("/")}#organization` },
      }),
    });
    head.meta.push({ property: "article:modified_time", content: UPDATED });
    return head;
  },
});

function Page() {
  const page = PAGES[PATH];
  return (
    <GuidePage
      eyebrow="Business communication · client calls"
      breadcrumb="Client-call English"
      h1={
        <>
          Client-call English. <span className="text-sunshine">Clarity, not accent.</span>
        </>
      }
      standfirst="Names, numbers, next step. Four-line updates. 3 months Workplace English, ₹1,999/mo, approx. 6 learners. ₹0 demo."
      heroImage={IMG.businessEnglish}
      heroAlt="Indian professional on a live client call in English"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Client calls — clear answers"
      waMessage="Hi, I need English for client calls. Workplace English demo please."
      ctaTitle="Bring a real call from this week"
      ctaBody="We will practise it in a live batch of around 6. ₹0 demo."
    />
  );
}
