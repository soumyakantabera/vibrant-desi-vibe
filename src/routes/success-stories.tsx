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
      "I used to freeze in client presentations. Six months later I was leading them. Live speaking, gamified — not a lecture.",
    name: "Priya Sharma",
    detail: "Spoken English · Marketing Executive, Kolkata",
    waMessage: "Hi, I saw Priya's story. Free demo for Spoken English please.",
  },
  {
    quote:
      "I switched from BPO to a client-facing role. The salary moved. Mock calls did the work.",
    name: "Siddharth Nair",
    detail: "Workplace English · Customer Success, Pune",
    waMessage: "Hi, I saw Siddharth's story. Free demo for Workplace English please.",
  },
  {
    quote:
      "I cleared the interview round I used to fail. The mocks showed me exactly what to change.",
    name: "Sneha Das",
    detail: "Interview Prep · IT Engineer, Hyderabad",
    waMessage: "Hi, I saw Sneha's story. Interview Prep demo please.",
  },
  {
    quote: "I couldn't speak two lines without freezing. Now I run Monday team standups.",
    name: "Anjali Roy",
    detail: "Spoken English · Teacher, Howrah",
    waMessage: "Hi, I saw Anjali's story. Spoken English demo please.",
  },
  {
    quote:
      "Career counselling helped me drop a wrong course and pick a B.Tech specialisation I actually love.",
    name: "Aarav Pandey",
    detail: "Career Counselling · Student, Delhi",
    waMessage: "Hi, I want Aarav's career clarity. Book me a session please.",
  },
  {
    quote: "I already spoke. Then the exam score moved — 5.5 to 7.5 overall.",
    name: "Harshit Singh",
    detail: "IELTS · Now in Toronto",
    waMessage: "Hi, I saw Harshit's story. I want to talk about the right course first.",
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
            Career switches. Client meetings. BI Analyst jobs. Salary jumps. Named people. Named
            cities. Every story below is a verified Learn With Smile learner.
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
