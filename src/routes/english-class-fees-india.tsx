import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/fees";

const PATH = "/english-class-fees-india";

/**
 * Prices go stale, and this page's whole value is that its numbers are real.
 * This is a content revision date, not the build date: rebuilding unchanged
 * code must not claim that the research was reviewed again.
 */
const UPDATED = "2026-09-01";

// The literal, not PATH: @tanstack/router-plugin statically analyses this
// call to generate the route tree and cannot follow a constant. With a
// variable here the route silently does not register, and the page ships with
// no canonical and no metadata -- which is what the prerender guard caught.
export const Route = createFileRoute("/english-class-fees-india")({
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
      eyebrow="Fees Guide"
      breadcrumb="Online English Class Fees in India"
      h1={
        <>
          Online English Class Fees in India 2026 — From{" "}
          <span className="text-sunshine">₹999/mo, Max 6</span>
        </>
      }
      standfirst="Group classes ₹800–₹3,000/mo, 1:1 ₹100–₹2,000/session, apps ₹300–₹800/mo — priced honestly. Learn With Smile Spoken English: ₹999/mo, max 6, GST included."
      heroImage={IMG.studentLaptop}
      heroAlt="Indian learner comparing online English class fees on a laptop"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="English Class Fees in India — Questions & Answers"
      waMessage="Hi, I have a question about your fees and which course fits my budget."
      ctaTitle="Want a quote for your specific goal?"
      ctaBody="Tell us what you need on WhatsApp and we'll tell you which course fits and what it costs — including when the answer is that you don't need us."
    />
  );
}
