import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/spoken-english-in-hindi";

const PATH = "/spoken-english-in-hindi";
const UPDATED = "2026-10-08";

export const Route = createFileRoute("/spoken-english-in-hindi")({
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
        inLanguage: "hi-IN",
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
      lang="hi-IN"
      eyebrow="हिंदी में गाइड · Spoken English in Hindi"
      breadcrumb="Spoken English in Hindi"
      h1={
        <>
          English बोलना कैसे सीखें <span className="text-sunshine">— हिंदी में पूरा प्लान</span>
        </>
      }
      standfirst="आप English समझते हैं, पर बोलते वक्त अटक जाते हैं? रोज़ क्या करें, कौन-सी गलतियाँ छोड़ें, और कब क्लास की ज़रूरत है — सब इस गाइड में।"
      shortAnswer="English बोलना 30 दिन में नहीं आता। शून्य से रोज़मर्रा की बातचीत तक आम तौर पर करीब 6 महीने का नियमित, ज़ोर से बोलने का अभ्यास लगता है। रोज़ 10–15 मिनट बोलिए, छोटे वाक्य बनाइए, और किसी से अपनी गलतियाँ ठीक करवाइए।"
      heroImage={IMG.speaking}
      heroAlt="Indian adult learner practising spoken English in a live online class"
      lastUpdated={UPDATED}
      body={body}
      faqs={page.faqs ?? []}
      faqTitle="अक्सर पूछे जाने वाले सवाल"
      waMessage="Hi, I want a free consultation for spoken English. Main Hindi mein baat kar sakta/sakti hoon."
      ctaTitle="WhatsApp पर हिंदी में बात कीजिए"
      ctaBody="हम आपकी दिक्कत समझकर सही कोर्स और फ़ीस लिखकर बताएँगे। ₹999/माह से, टैक्स सहित।"
    />
  );
}
