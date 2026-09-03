import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGES, RATING, RATING_DISPLAY, pageHead } from "@/lib/seo";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import {
  SectionHeader,
  FeatureCard,
  WaButton,
  GuidesStrip,
  CoverageStrip,
} from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";

export const Route = createFileRoute("/why-us")({
  component: Page,
  head: () => {
    const head = pageHead("/why-us");
    return {
      ...head,
      scripts: [
        ...head.scripts,
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Why learners pick Learn With Smile over typical English classes in India",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "₹999/month live teaching, GST included",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "7 years online, 500+ learners, 5.0 Google rating from 125 reviews",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "₹0 live demo in a real class — no sales call, no card",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "500+ learners across 11 Indian states from ₹999/month",
              },
            ],
          }),
        },
      ],
    };
  },
});

const MARKET = [
  {
    color: "coral" as const,
    icon: "users" as const,
    tag: "Typical offline room",
    title: "25–40 students. You listen.",
    body: "Kolkata and city coaching rooms usually pack 25–40 learners. Google reviews praise energy, then complain that speaking time is a round-robin once a week. 3-month packages run ₹1,500–₹6,000. Commute eats the hour you needed to practise.",
    stat: "₹1,500–₹6,000 / 3 mo",
  },
  {
    color: "indigo" as const,
    icon: "globe" as const,
    tag: "Native-speaker apps",
    title: "1:1. Pricey. Quality varies.",
    body: "Cambly-style apps: ₹8,000–₹15,000/month if you practise daily. Beginners freeze at native speed. Tutor training is uneven — a consistent complaint on reviews. No syllabus, no named teacher who remembers your errors next week.",
    stat: "₹8k–₹15k / month",
  },
  {
    color: "sunshine" as const,
    icon: "trophy" as const,
    tag: "Brand-name groups",
    title: "Curriculum. Limited talking.",
    body: "British Council English Online rates ~4.5★ and teaches a real CEFR syllabus. Group rooms of 8–12 still leave a few minutes of speaking each. Modules often land ₹8,800–₹16,000. Excellent if you need the badge. Heavy if you need reps.",
    stat: "₹8,800–₹16,000 / module",
  },
  {
    color: "brand" as const,
    icon: "smile" as const,
    tag: "Learn With Smile",
    title: "₹999/mo. 7 years. 500+.",
    body: `${RATING_DISPLAY} on ${RATING.source} (${RATING.count} reviews). Named teacher, 7 years, 500+ learners. GST included. ₹0 demo in a real class. Batches have approximately 6 learners so you actually speak — secondary to the teaching, not a slogan we hide behind.`,
    stat: "From ₹999/mo · GST in",
  },
];

function Page() {
  return (
    <Layout
      waMessage="Hi, I'd like to know why Learn With Smile fits me. Free demo please."
      footerImage={IMG.liveClass}
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.liveClass}
            alt="Live online English class with a teacher and Indian learners"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/80 to-coral/40" />
        </div>
        <div className="container-x grid items-center gap-10 py-14 md:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div className="min-w-0 w-full text-cream">
            <span className="eyebrow eyebrow-white">
              <Icon name="shield" size={14} /> Why Us · Quality + Proof
            </span>
            <h1 className="mt-4 text-3xl leading-[1.05] text-cream md:text-6xl">
              Built for <span className="text-sunshine">Indian Learners</span>. Run by Real
              Teachers.
            </h1>
            <p className="mt-5 text-base text-white md:text-lg">
              A teacher who knows your name. 500+ learners, 7 years. You speak every class. From
              ₹999/mo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WaButton
                message="Hi, I want a free demo to see Learn With Smile in action."
                variant="sun"
                size="lg"
              >
                Free Demo on WhatsApp
              </WaButton>
              <Link to="/best-online-spoken-english-classes-india" className="btn btn-white btn-lg">
                Compare the market
              </Link>
            </div>
          </div>
          <div className="flex w-full min-w-0 justify-center lg:block">
            <div className="relative w-full max-w-[320px] lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-sunshine/30 blur-3xl" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-coral/30 blur-3xl" />
              <SnapshotCard
                badge={`Why ${RATING.count} Google reviews`}
                eyebrow="What you actually get"
                headline={{ big: "₹999", suffix: "/mo" }}
                subnote="GST included · Kolkata-born · heard across India"
                rows={[
                  {
                    tone: "brand",
                    icon: SnapIcons.cap,
                    big: "100%",
                    small: "Live teacher. Knows your name.",
                  },
                  {
                    tone: "indigo",
                    icon: SnapIcons.refresh,
                    big: "₹0",
                    small: "Full demo class. No sales call.",
                  },
                  {
                    tone: "coral",
                    icon: SnapIcons.people,
                    big: "You speak",
                    small: "A group of around 6 — not the back row",
                  },
                ]}
                footer={`${RATING_DISPLAY} ${RATING.source} · 11 states · 09:00–12:00 IST`}
              />
            </div>
          </div>
        </div>
      </section>

      <CoverageStrip />

      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeader
            eyebrow="The honest market"
            title="What Indian learners actually walk into"
            subtitle="Offline rooms, native apps and brand groups — pulled from public fees, formats and review patterns. Then what we do differently."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {MARKET.map((m) => (
              <article
                key={m.tag}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl"
              >
                <FeatureCard icon={m.icon} color={m.color} title={m.title}>
                  <span className="mb-2 block text-[11px] font-display font-bold uppercase tracking-wider text-ink/55">
                    {m.tag}
                  </span>
                  {m.body}
                  <span className="mt-3 block font-display text-sm font-extrabold text-ink">
                    {m.stat}
                  </span>
                </FeatureCard>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-ink/70">
            Figures are typical public ranges in 2026, not a ranking. Brand scores are their own
            published ratings. Ours is the Google Business Profile figure we actually have:{" "}
            {RATING_DISPLAY} from {RATING.count} reviews.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="play" color="brand" title="100% Live, Always">
            Real teacher, real time, real Q&A. No passive video sold as a class.
          </FeatureCard>
          <FeatureCard icon="rupee" color="sunshine" title="From ₹999/mo">
            GST included. No registration fee. No material fee. Monthly UPI.
          </FeatureCard>
          <FeatureCard icon="star" color="coral" title={`${RATING_DISPLAY} ${RATING.source}`}>
            {RATING.count} reviews. Named outcomes on Success Stories — not a guaranteed job.
          </FeatureCard>
          <FeatureCard icon="clock" color="indigo" title="Working-India slots">
            Morning, evening, weekend IST. Same-week move if a seat is free.
          </FeatureCard>
          <FeatureCard icon="gamepad" color="sage" title="Gamified every class">
            Flashcards, polls, quizzes, debates — so you speak, not spectate.
          </FeatureCard>
          <FeatureCard icon="users" color="brand" title="Approximately 6 learners per batch">
            Secondary to quality: enough peers to practise with, few enough that you still talk.
          </FeatureCard>
          <FeatureCard icon="shield" color="coral" title="Demo before you pay">
            Sit in a full live class. If it is not for you, you do not pay a rupee.
          </FeatureCard>
          <FeatureCard icon="user" color="indigo" title="Direct teacher support">
            1:1 outside class when you genuinely need it — not a ticket bot.
          </FeatureCard>
          <FeatureCard icon="globe" color="sunshine" title="Kolkata-born. Heard across India.">
            Same teacher. Same fee. Join from a metro or a town — the pincode does not change the
            room.
          </FeatureCard>
        </div>
      </section>

      <GuidesStrip
        eyebrow="Guides"
        title="Read these before you pay anyone"
        subtitle="Fees, Kolkata classrooms, workplace English and an honest 2026 comparison — written to be useful even if you never join us."
      />

      <FaqSection
        faqs={PAGES["/why-us"].faqs ?? []}
        eyebrow="Why Us FAQs"
        title="How We Teach — Questions Answered"
        subtitle="₹999/mo, 7 years, 500+ learners, live vs recorded, batch of around 6, and the ₹0 demo."
        waMessage="Hi, I want to understand how your classes work."
      />

      <section className="section bg-brand-deep">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SmartImage
            src={IMG.womanLaptop}
            alt="Teacher giving live feedback during an online English class"
            className="h-[280px] w-full rounded-3xl shadow-2xl md:h-[360px]"
            sizes="(min-width: 1024px) 45vw, 100vw"
            position="center 22%"
          />
          <div className="text-cream">
            <h2 className="text-3xl text-cream md:text-4xl">The First Class Is Free. Always.</h2>
            <p className="mt-3 text-white/95">
              Walk into a real live class — same teacher, same energy. 7 years, 500+ learners, from
              ₹999/mo. If it is not for you, you do not pay a rupee.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <WaButton
                message="Hi, I want a free demo to see Learn With Smile in action."
                variant="sun"
                size="lg"
              >
                Book My Free Demo
              </WaButton>
              <Link to="/english-class-fees-india" className="btn btn-ghost-white">
                See fees in India
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
