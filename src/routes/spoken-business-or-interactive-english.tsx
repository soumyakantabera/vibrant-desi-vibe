import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/which-class";

const PATH = "/spoken-business-or-interactive-english";
const UPDATED = "2026-09-02";

export const Route = createFileRoute("/spoken-business-or-interactive-english")({
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
      eyebrow="Spoken · Business · Interactive"
      breadcrumb="Which English class"
      h1={
        <>
          Which English class do I need?{" "}
          <span className="text-sunshine">Spoken, Business or Interactive</span>
        </>
      }
      standfirst="Conversation → Spoken. Freeze → Interactive. Meetings and calls → Business. An exam course only if a form asks. From ₹999/mo. ₹0 demo."
      heroImage={IMG.spokenEnglish}
      heroAlt="Indian adult choosing a live English class on a laptop"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="Which class — straight answers"
      waMessage="Hi, I am not sure if I need Spoken, Interactive or Business English. Please help me choose."
      ctaTitle="Sit in a live room. Then pick."
      ctaBody="₹0 demo. We place you in Spoken, Interactive or Business — not all three."
    />
  );
}
