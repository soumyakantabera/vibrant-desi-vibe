import { createFileRoute } from "@tanstack/react-router";

import { GuidePage } from "@/components/GuidePage";
import { LevelTest } from "@/components/LevelTest";
import { body } from "@/content/pages/level-test";
import { IMG } from "@/lib/images";
import { LEVEL_TEST_PATH as PATH } from "@/lib/level-test";
import { PAGES, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/english-speaking-level-test")({
  component: Page,
  head: () => pageHead(PATH),
});

function Page() {
  const page = PAGES[PATH];
  return (
    <GuidePage
      eyebrow="Free self-check · 2 minutes · no sign-up"
      breadcrumb="Speaking level test"
      h1={
        <>
          Free English speaking level test —{" "}
          <span className="text-sunshine">find your level in 2 minutes</span>
        </>
      }
      standfirst="Ten honest questions about what you can actually say, from introducing yourself to an unexpected interview question. Get your level (around A1–B2) and the one course that fits."
      shortAnswer="Score each of 10 can-do questions 2, 1 or 0. 0–12: start with Basic Spoken English (₹1,199/month). 13–16: Intermediate Spoken English (₹1,999/month). 17–20: Interactive Speaking (₹1,599/month), or Interview Preparation (₹2,499/month) if interviews are the goal. A teacher confirms it free on WhatsApp."
      heroImage={IMG.studentLaptop2}
      heroAlt="Adult learner checking their English speaking level on a laptop"
      lastUpdated={page.dateModified}
      body={body}
      levelTestPromo={false}
      heroCta={{ href: "#level-test", label: "Start the test" }}
      beforeBody={<LevelTest />}
      faqs={page.faqs ?? []}
      faqTitle="English speaking level test — questions"
      waMessage="Hi, I'd like to book a free group consultation to check my English speaking level. Please send me the booking link."
      ctaTitle="Not sure about your score?"
      ctaBody="A teacher confirms your level in a free group consultation on WhatsApp — advice, not a class."
    />
  );
}
