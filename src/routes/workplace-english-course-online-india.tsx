import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/workplace";

const PATH = "/workplace-english-course-online-india";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/workplace-english-course-online-india")({
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
    return head;
  },
});

function Page() {
  const page = PAGES[PATH];
  return (
    <GuidePage
      eyebrow="Workplace English Guide"
      breadcrumb="Workplace English Course Online India"
      h1={
        <>
          Workplace English in India — ₹1,499/mo,{" "}
          <span className="text-sunshine">Max 8, 3 Months</span>
        </>
      }
      standfirst="Meetings, client calls, updates, emails, presentations. 3 months, max 8, up to 2 live classes/week, ₹1,499/mo GST included. Who should join — and who should self-study."
      heroImage={IMG.businessEnglish}
      heroAlt="Indian professional practising English for an online workplace meeting"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Workplace English — Straight Answers"
      waMessage="Hi, I need better English for work. My role is ___ and the situations I struggle with are ___. Is Workplace English the right course?"
      ctaTitle="Bring one real workplace problem"
      ctaBody="Tell us the meeting, call, email or presentation situation that is difficult. We will tell you honestly whether Workplace English or another course is the better fit."
    />
  );
}
