import { createFileRoute } from "@tanstack/react-router";
import { PAGES, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";

export const Route = createFileRoute("/success-stories")({
  component: Page,
  head: () => pageHead("/success-stories"),
});

const STORIES = [
  {
    quote:
      "Quarter-close used to mean I typed in the chat while someone else spoke. Now I take the Mumbai call myself — names, numbers, next step.",
    name: "Neha Patel",
    detail: "Workplace English · Tax Analyst, Ahmedabad",
    waMessage: "Hi, I saw Neha's tax-analyst story. Workplace English demo please.",
  },
  {
    quote:
      "Partners asked me to walk the working papers in English. A batch of around six meant I rehearsed every week. I present now.",
    name: "Rohan Deshpande",
    detail: "Workplace English · Chartered Accountant, Mumbai",
    waMessage: "Hi, I saw Rohan's CA story. Workplace English demo please.",
  },
  {
    quote:
      "I knew the argument in Telugu. Bengaluru clients wanted it in English. Three months later I brief in both.",
    name: "Kavya Reddy",
    detail: "Spoken English · Advocate, Hyderabad",
    waMessage: "Hi, I saw Kavya's story. Spoken English demo please.",
  },
  {
    quote:
      "SQL was easy. The Monday standup was not. I speak the dashboard now — no translating in my head.",
    name: "Ananya Iyer",
    detail: "Interactive Speaking · Data Analyst, Bengaluru",
    waMessage: "Hi, I saw Ananya's standup story. Interactive Speaking demo please.",
  },
  {
    quote:
      "The promotion board was in English. Mock interviews, live, around six learners. I got the Assistant Manager seat.",
    name: "Vikram Singh",
    detail: "Interview Prep · Bank Asst. Manager, Delhi",
    waMessage: "Hi, I saw Vikram's promotion story. Interview Prep demo please.",
  },
  {
    quote:
      "Back office to BI Analyst. Salary moved. The English I use is client reviews and Monday standups — this room is built for that.",
    name: "Aditya Nair",
    detail: "Workplace English · BI Analyst, Pune",
    waMessage: "Hi, I saw Aditya's career switch. Workplace English demo please.",
  },
];

function Page() {
  return (
    <Layout
      waMessage="Hi, I read the success stories. I want the same result — free demo please."
      footerImage={IMG.graduation}
    >
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.graduation}
            alt="Indian graduates celebrating after completing their course"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/75 to-sunshine/40" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">★ Real Outcomes</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Real Indian Learners. <span className="text-sunshine">Real Results.</span>
          </h1>
          <p className="mt-5 text-lg text-white">
            Career switches. Client meetings. Tax desks. Court briefs. Bank promotions. Named
            people. Named cities. Every story below is a verified Learn With Smile learner.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrowTone="coral"
            eyebrow="Verified Stories"
            title="6 Stories — Swipe or Scroll"
            subtitle="Spoken, business, interviews, standups. Named learners. On mobile, swipe. On desktop, a grid."
          />
          <TestimonialSlider items={STORIES} />
        </div>
      </section>

      <FaqSection
        faqs={PAGES["/success-stories"].faqs ?? []}
        eyebrow="Results FAQs"
        title="Do Online English Classes Actually Change Careers?"
        subtitle="What our learners achieved, and what English can and cannot do for you."
        waMessage="Hi, I read the success stories. I want the same result."
      />

      <section className="section bg-brand-soft/40">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl">Want to be the next story?</h2>
          <p className="mt-3 text-ink/85 max-w-xl mx-auto">
            Tell us your goal — we'll match you to the right course and a free demo slot, same day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton
              message="Hi, I want to be the next success story. Free demo please."
              variant="primary"
              size="lg"
            >
              🎓 Book Free Demo
            </WaButton>
            <WaButton
              message="Hi, please recommend a course based on my goal."
              variant="wa"
              size="lg"
            >
              Get a Recommendation
            </WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
