import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/how-long";

const PATH = "/how-long-to-learn-spoken-english";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/how-long-to-learn-spoken-english")({
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
      eyebrow="Time to fluency · 6 / 9 / 12 months"
      breadcrumb="How Long to Learn Spoken English"
      h1={
        <>
          How Long to Learn Spoken English —{" "}
          <span className="text-sunshine">6 Months from Zero, Not 30 Days</span>
        </>
      }
      standfirst="Everyday chat ~6 months live. Workplace ~3 months. IELTS Band 7+ 9–12 months. Speaking minutes, not brochure months. ₹999/mo, max 8, ₹0 demo."
      heroImage={IMG.spokenEnglish}
      heroAlt="Indian adult practising spoken English in a live online class"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="How long does spoken English take — straight answers"
      waMessage="Hi, I want to know how long spoken English will take for me. I can currently ___."
      ctaTitle="Count your minutes in a real class"
      ctaBody="The demo is a live batch of 8, not a sales call. See the clock before you buy 6 months."
    />
  );
}
