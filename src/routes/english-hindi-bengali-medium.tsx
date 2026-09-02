import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/hindi-bengali-medium";

const PATH = "/english-hindi-bengali-medium";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/english-hindi-bengali-medium")({
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
      eyebrow="Hindi-medium · Bengali-medium"
      breadcrumb="Hindi & Bengali medium"
      h1={
        <>
          Hindi- or Bengali-medium. <span className="text-sunshine">You can still speak.</span>
        </>
      }
      standfirst="Live batch of 8. Explain in Hindi or Bengali when a concept stalls, then back to English. 6 months from ₹999/mo. ₹0 demo."
      heroImage={IMG.speaking}
      heroAlt="Indian adult learner speaking English in a live online class"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Medium of school, medium of career"
      waMessage="Hi, I studied in Hindi / Bengali medium. I want Spoken English demo."
      ctaTitle="Message in Hindi, Bengali or English"
      ctaBody="We will place you in a live Spoken batch. ₹0 demo. From ₹999/mo."
    />
  );
}
