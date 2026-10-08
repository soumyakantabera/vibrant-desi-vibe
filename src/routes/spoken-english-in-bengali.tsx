import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/spoken-english-in-bengali";

const PATH = "/spoken-english-in-bengali";
const UPDATED = "2026-10-08";

export const Route = createFileRoute("/spoken-english-in-bengali")({
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
        inLanguage: "bn-IN",
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
      lang="bn-IN"
      eyebrow="বাংলায় গাইড · Spoken English in Bengali"
      breadcrumb="Spoken English in Bengali"
      h1={
        <>
          ইংরেজি বলতে শিখুন <span className="text-sunshine">— বাংলায় পুরো পরিকল্পনা</span>
        </>
      }
      standfirst="ইংরেজি বোঝেন, কিন্তু বলতে গেলে আটকে যান? রোজ কী করবেন, কোন ভুলগুলো ছাড়বেন, আর কখন ক্লাস দরকার — সব এই গাইডে।"
      shortAnswer="30 দিনে ইংরেজি বলা শেখা যায় না। শূন্য থেকে রোজকার কথাবার্তা পর্যন্ত সাধারণত প্রায় 6 মাস নিয়মিত, জোরে বলার অভ্যাস লাগে। রোজ 10–15 মিনিট বলুন, ছোট বাক্য বানান, আর কাউকে দিয়ে নিজের ভুল শুধরে নিন।"
      heroImage={IMG.speaking}
      heroAlt="Bengali adult learner practising spoken English in a live online class"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="প্রায়ই জিজ্ঞাসা করা প্রশ্ন"
      waMessage="Hi, I want a free consultation for spoken English. Ami Banglay kotha bolte pari."
      ctaTitle="WhatsApp-এ বাংলায় কথা বলুন"
      ctaBody="আমরা আপনার সমস্যা বুঝে সঠিক কোর্স আর ফি লিখে জানাব। ₹999/মাস থেকে, ট্যাক্স সহ।"
    />
  );
}
