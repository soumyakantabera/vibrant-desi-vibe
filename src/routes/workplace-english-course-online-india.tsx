import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/workplace";

const PATH = "/workplace-english-course-online-india";
const UPDATED = "2026-10-08";

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
          "@id": `${abs("/educator")}#person`,
          name: "Sunanda Dey",
          url: abs("/educator"),
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
      breadcrumb="Workplace English guide"
      h1={
        <>
          English at work:{" "}
          <span className="text-sunshine">meetings, calls, updates and emails</span>
        </>
      }
      standfirst="What to say in the moments that decide how you come across at work — and how to tell whether you need a course or just practice. If you need a course, Business English is ₹1,999/mo, inclusive of taxes."
      heroImage={IMG.businessEnglish}
      heroAlt="Indian professional practising English for an online workplace meeting"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Workplace English — Straight Answers"
      waMessage="Hi, I want a free consultation for Business English."
      ctaTitle="Bring one real workplace problem"
      ctaBody="Tell us the meeting, call, email or presentation situation that is difficult. We will tell you honestly whether Business English or another course is the better fit."
    />
  );
}
