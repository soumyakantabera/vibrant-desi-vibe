import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { CHAT_CTA } from "@/lib/whatsapp";
import { courseSeo } from "@/components/CoursePage";
import { COURSES } from "@/lib/courses";
import { PriceNotice } from "@/components/PriceNotice";

const d = COURSES["kids-english"];

export const Route = createFileRoute("/course-kids-english")({
  component: DiscontinuedKids,
  head: () => courseSeo(d),
});

function DiscontinuedKids() {
  const wa =
    "Hi, I opened Spoken English for Kids. I understand enrolment is discontinued worldwide. Please help me choose an available course (Teens 12–17 or adult Spoken English 15+).";
  return (
    <Layout waMessage={wa} footerImage={IMG.kidsEnglishFooter}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage src={IMG.kidsEnglish} alt="" fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-brand-deep/80 to-ink/70" />
        </div>
        <div className="container-x py-16 md:py-24 text-cream max-w-3xl">
          <span className="eyebrow eyebrow-white">Enrolment discontinued</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Spoken English for Kids is no longer open for enrolment.
          </h1>
          <p className="mt-5 text-lg text-white">
            We have stopped enrolling ages 6–11 in India and internationally. Existing paid
            commitments already accepted for this room are honoured. New learners should choose an
            available course below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/course-teen-english" className="btn btn-sun">
              Spoken English for Teens (12–17)
            </Link>
            <Link to="/course-spoken-english" className="btn btn-ghost-white">
              Basic Spoken English (15+)
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <article className="card-soft">
            <h2 className="text-2xl">If your child is 12–17</h2>
            <p className="mt-3 text-ink/85">
              Spoken English for Teens is still open. Parent on WhatsApp. Never mixed with adult
              rooms.
            </p>
            <Link to="/course-teen-english" className="btn btn-brand mt-5">
              View Teens
            </Link>
          </article>
          <article className="card-soft">
            <h2 className="text-2xl">If the learner is 15+</h2>
            <p className="mt-3 text-ink/85">
              Basic Spoken English and Interactive Speaking are the adult rooms. A 15–17-year-old
              who wants work English can take an adult room with the parent on WhatsApp.
            </p>
            <Link to="/english-career" className="btn btn-brand mt-5">
              View available courses
            </Link>
          </article>
        </div>
        <div className="container-x mt-8 max-w-3xl">
          <PriceNotice />
          <div className="mt-6">
            <WaButton message={wa} variant="wa">
              {CHAT_CTA}
            </WaButton>
          </div>
          <p className="mt-4 text-sm text-ink/70 inline-flex items-start gap-2">
            <Icon name="info" size={16} className="mt-0.5 shrink-0" />
            This page stays published so old links and search results do not 404. It is not an
            enrolment offer.
          </p>
        </div>
      </section>
    </Layout>
  );
}
