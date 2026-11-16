import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { LevelTest } from "@/components/LevelTest";
import { levelTestBody } from "@/content/pages/level-test-lang";
import { IMG } from "@/lib/images";
import { LEVEL_TEST_LANG_PATHS } from "@/lib/level-test-i18n";
import { PAGES, pageHead } from "@/lib/seo";

const PATH = LEVEL_TEST_LANG_PATHS.hi;

export const Route = createFileRoute("/english-speaking-test-hindi")({
  component: Page,
  head: () => pageHead(PATH),
});

function Page() {
  const page = PAGES[PATH];
  return (
    <GuidePage
      lang="hi-IN"
      eyebrow="फ़्री सेल्फ़-चेक · 1 मिनट · कोई साइन-अप नहीं"
      breadcrumb="English speaking test (हिंदी)"
      h1={
        <>
          English बोलने का लेवल टेस्ट — <span className="text-sunshine">हिंदी में, 1 मिनट में</span>
        </>
      }
      standfirst="4 आसान सवाल, हर स्क्रीन पर एक। आप असल में कितना बोल पाते हैं, उसका ईमानदार जवाब दीजिए — और जानिए आपका लेवल (लगभग A1–B2) और कौन-सा कोर्स सही है।"
      shortAnswer="हर सवाल पर 2, 1 या 0 नंबर (कुल 8)। 0–4: Basic Spoken English — Hindi to English (₹1,199/माह)। 5–6: Intermediate Spoken English (₹1,999/माह)। 7–8: Interactive Speaking (₹1,599/माह), या इंटरव्यू लक्ष्य हो तो Interview Preparation (₹2,499/माह)। टीचर WhatsApp पर फ़्री में लेवल कन्फ़र्म करती हैं।"
      heroImage={IMG.studentLaptop2}
      heroAlt="Adult learner checking their English speaking level on a laptop"
      lastUpdated={page.dateModified}
      body={levelTestBody("hi")}
      heroCta={{ href: "#level-test", label: "टेस्ट शुरू करें" }}
      beforeBody={<LevelTest lang="hi" />}
      faqs={page.faqs ?? []}
      faqTitle="लेवल टेस्ट — अक्सर पूछे जाने वाले सवाल"
      waMessage="Hi, I'd like to book a free group consultation to check my English speaking level. Please send me the booking link. Main Hindi mein baat kar sakta/sakti hoon."
      ctaTitle="अपने स्कोर पर पक्का नहीं?"
      ctaBody="टीचर WhatsApp पर फ़्री ग्रुप कंसल्टेशन में आपका लेवल कन्फ़र्म करती हैं — यह सलाह है, क्लास नहीं।"
    />
  );
}
