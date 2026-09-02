import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/working-professionals";

const PATH = "/english-for-working-professionals-india";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/english-for-working-professionals-india")({
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
      eyebrow="Working professionals · IST"
      breadcrumb="Working professionals"
      h1={
        <>
          Office by day. <span className="text-sunshine">Live English at night.</span>
        </>
      }
      standfirst="Morning, evening and weekend IST batches. Live class; recording is revision. From ₹999/mo. Message anytime. We reply 09:00–12:00 IST."
      heroImage={IMG.studentLaptop}
      heroAlt="Working professional in an evening live English class"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="English while you work"
      waMessage="Hi, I work full time. I want morning / evening / weekend English. Free demo please."
      ctaTitle="Tell us your shift"
      ctaBody="We suggest morning, evening or weekend — and Spoken, Interactive or Business."
    />
  );
}
