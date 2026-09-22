import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/presentations";

const PATH = "/english-for-presentations-india";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/english-for-presentations-india")({
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
      eyebrow="Explain your work · 3 minutes"
      breadcrumb="Presentation English"
      h1={
        <>
          Explain your work <span className="text-sunshine">in 3 minutes.</span>
        </>
      }
      standfirst="One outcome, three beats, one ask. Standups, reviews, client decks. Live practice. From ₹1,199/mo, inclusive of taxes."
      heroImage={IMG.presentation}
      heroAlt="Indian professional presenting work in a live English class"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Presentations and standups"
      waMessage="Hi, I want a free consultation to explain my work in English."
      ctaTitle="Bring one real update"
      ctaBody="We will run it in a live group of around 6."
    />
  );
}
