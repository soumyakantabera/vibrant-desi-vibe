import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/interactive-freeze";

const PATH = "/interactive-english-class-hesitation";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/interactive-english-class-hesitation")({
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
      eyebrow="Interactive English · 3 months"
      breadcrumb="Interactive English"
      h1={
        <>
          You freeze. That is a habit.{" "}
          <span className="text-sunshine">Interactive English, live</span>
        </>
      }
      standfirst="Games, debates, 1-minute prompts. You talk every class. 3 months, ₹1,199/mo, max 8. ₹0 demo."
      heroImage={IMG.interactiveSpeaking}
      heroAlt="Small live interactive English class where every learner speaks"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Freeze and interactive class"
      waMessage="Hi, I freeze when I speak English. I want Interactive Speaking demo."
      ctaTitle="Count how many times you speak"
      ctaBody="One Interactive hour. Then decide. ₹0. Max 8."
    />
  );
}
