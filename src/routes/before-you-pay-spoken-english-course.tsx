import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { BEFORE_YOU_PAY_PATH as PATH } from "@/lib/fair-fees";
import { body } from "@/content/pages/before-you-pay";

const UPDATED = "2026-11-03";

export const Route = createFileRoute("/before-you-pay-spoken-english-course")({
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
          "@id": `${abs("/educator")}#person`,
          name: "Sunanda Dey",
          url: abs("/educator"),
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
      eyebrow="Buyer's checklist · any provider, us included"
      breadcrumb="Before you pay"
      h1={
        <>
          Before you pay for a spoken English course:{" "}
          <span className="text-sunshine">10 checks</span>
        </>
      }
      standfirst="Refunds, loans, EMIs, auto-renewal and hidden charges cause most complaints about English courses in India. Ask these ten questions first — of anyone."
      shortAnswer="Pay for one month at a time, never a year. Refuse loans, EMIs and saved-card auto-debits. Get the refund rule, the batch size and the full tax-inclusive price in writing before you pay. Learn With Smile bills one month at a time with no auto-debit, and starts a refund within 2 working days."
      heroImage={IMG.manOffice}
      heroAlt="Working adult checking a course fee on a phone before paying"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Paying for an English course — questions"
      waMessage="Hi, before I pay I'd like the course, the fee and the refund rule in writing. Please send me the free consultation link."
      ctaTitle="Ask us all ten before you pay"
      ctaBody="Free consultation on WhatsApp: the course, the fee and the refund rule in writing. One month at a time, no auto-debit, no loans."
    />
  );
}
