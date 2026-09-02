import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/comparison";

const PATH = "/best-online-spoken-english-classes-india";

// Content revision date, deliberately not the deployment date.
const UPDATED = "2026-09-01";

// The literal, not PATH: @tanstack/router-plugin statically analyses this
// call to generate the route tree and cannot follow a constant. With a
// variable here the route silently does not register, and the page ships with
// no canonical and no metadata -- which is what the prerender guard caught.
export const Route = createFileRoute("/best-online-spoken-english-classes-india")({
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
      eyebrow="Comparison"
      breadcrumb="Best Online Spoken English Classes, Compared"
      h1={
        <>
          Best Online Spoken English in India — Live,{" "}
          <span className="text-sunshine">Max 8, From ₹999</span>
        </>
      }
      standfirst="Written by one of the providers. Organised by who each option suits — not a ranking. Learn With Smile: live teacher, max 8, 6-month syllabus, ₹999/mo, ₹0 demo."
      heroImage={IMG.speaking}
      heroAlt="Indian learners comparing online English class options"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Choosing an Online English Class — Questions & Answers"
      waMessage="Hi, I'm comparing options. Can you help me work out whether your course fits what I need?"
      ctaTitle="Take three trials in one week"
      ctaBody="Ours is one of them: a real live class, no card, and you can count your own speaking minutes."
    />
  );
}
