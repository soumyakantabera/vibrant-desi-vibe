import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/institutes";

const PATH = "/english-institute-comparison-india";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/english-institute-comparison-india")({
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
      eyebrow="Institutes · 2026 fees & fit"
      breadcrumb="English Institutes in India, Compared"
      h1={
        <>
          English Institutes in India 2026 —{" "}
          <span className="text-sunshine">₹999/mo vs ₹8,000 Modules</span>
        </>
      }
      standfirst="Cambly, EngVarta, British Council, Veta-style rooms, EEC exam shops, kids platforms — who each fits. We sell one row. 7 years, 500+ learners, approximately 6 per batch."
      heroImage={IMG.speaking}
      heroAlt="Indian professionals comparing live English class options"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Institutes — questions people actually ask"
      waMessage="Hi, I'm comparing English institutes. Can you tell me if a live batch of around 6 fits me?"
      ctaTitle="Use us as one of three trials this week"
      ctaBody="₹0 live class. Count your speaking minutes. Then compare GST and the cap."
    />
  );
}
