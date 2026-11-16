import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { LevelTest } from "@/components/LevelTest";
import { levelTestBody } from "@/content/pages/level-test-lang";
import { IMG } from "@/lib/images";
import { LEVEL_TEST_LANG_PATHS } from "@/lib/level-test-i18n";
import { PAGES, pageHead } from "@/lib/seo";

const PATH = LEVEL_TEST_LANG_PATHS.bn;

export const Route = createFileRoute("/english-speaking-test-bengali")({
  component: Page,
  head: () => pageHead(PATH),
});

function Page() {
  const page = PAGES[PATH];
  return (
    <GuidePage
      lang="bn-IN"
      eyebrow="ফ্রি সেল্ফ-চেক · 2 মিনিট · কোনো সাইন-আপ নেই"
      breadcrumb="English speaking test (বাংলা)"
      h1={
        <>
          ইংরেজি বলার লেভেল টেস্ট — <span className="text-sunshine">বাংলায়, 2 মিনিটে</span>
        </>
      }
      standfirst="10টা সহজ প্রশ্ন, প্রতি স্ক্রিনে একটা। আপনি আসলে কতটা বলতে পারেন তার সৎ উত্তর দিন — জেনে নিন আপনার লেভেল (প্রায় A1–B2) আর কোন কোর্সটা ঠিক।"
      shortAnswer="প্রতিটি প্রশ্নে 2, 1 বা 0। 0–12: Basic Spoken English (₹1,199/মাস)। 13–16: Intermediate Spoken English (₹1,999/মাস)। 17–20: Interactive Speaking (₹1,599/মাস), বা ইন্টারভিউ লক্ষ্য হলে Interview Preparation (₹2,499/মাস)। টিচার WhatsApp-এ ফ্রিতে লেভেল কনফার্ম করেন।"
      heroImage={IMG.studentLaptop2}
      heroAlt="Adult learner checking their English speaking level on a laptop"
      lastUpdated={page.dateModified}
      body={levelTestBody("bn")}
      levelTestPromo={false}
      heroCta={{ href: "#level-test", label: "টেস্ট শুরু করুন" }}
      beforeBody={<LevelTest lang="bn" />}
      faqs={page.faqs ?? []}
      faqTitle="লেভেল টেস্ট — প্রায়ই জিজ্ঞাসিত প্রশ্ন"
      waMessage="Hi, I'd like to book a free group consultation to check my English speaking level. Please send me the booking link. Ami Banglay kotha bolte pari."
      ctaTitle="স্কোর নিয়ে নিশ্চিত নন?"
      ctaBody="টিচার WhatsApp-এ ফ্রি গ্রুপ কনসালটেশনে আপনার লেভেল কনফার্ম করেন — এটা পরামর্শ, ক্লাস নয়।"
    />
  );
}
