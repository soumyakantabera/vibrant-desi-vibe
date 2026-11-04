import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon, type IconName } from "@/components/Icon";
import { TestimonialSlider, type Testimonial } from "@/components/TestimonialSlider";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/Reveal";
import { CourseIncluded } from "@/components/package/PackageSections";
import { WhyDifferent } from "@/components/WhyDifferent";
import { levelForCourse } from "@/lib/bolo-levels";
import { COURSE_FEE, type FeeSlug } from "@/lib/fees";

const isPackageSlug = (slug: string): slug is FeeSlug => slug in COURSE_FEE;
import { PaymentTrust } from "@/components/PaymentTrust";
import {
  ClassSplit,
  CourseLadder,
  CoverageMap,
  Roadmap,
  type CourseVisuals,
} from "@/components/CourseVisuals";
import { intlUnit, isIntlSlug } from "@/lib/intl-fees";
import { FeePair, FeeText, feeHeadline } from "@/components/FeeText";
import { DEMO_CTA, CHAT_CTA } from "@/lib/whatsapp";
import { CONSULTATION } from "@/lib/consultation";
import { courseFaqs } from "@/lib/course-seo";

export type Module = { title: string; items: string[] };
export type Project = { title: string; brief: string; deliverable: string };

/** A short block in the learner's own language (Hindi / Marathi courses). */
export type NativeSection = {
  lang: "hi" | "mr";
  label: string;
  heading: string;
  intro: string;
  points: string[];
  faqs: { q: string; a: string }[];
  cta: string;
  waMessage: string;
};

export type CourseData = {
  slug: string;
  /** Fee and package this course shares, when it is a variant of another course. */
  feeSlug?: FeeSlug;
  /** Native-language block; the page stays English-primary. */
  native?: NativeSection;
  title: string;
  tagline: string;
  category: string;
  categoryColor: "brand" | "indigo";
  icon: IconName;
  heroImage: string;
  midImage: string;
  footerImage: string;
  duration: string;
  durationQualifier?: string;
  continueNote?: string;
  format: string;
  price: string;
  liveNote?: string;
  snapshotBatchBig?: string;
  snapshotBatchSmall?: string;
  waDemo?: string;
  outcomes: string[];
  modules: Module[];
  projects?: Project[];
  faqs?: { q: string; a: string }[];
  testimonials?: Testimonial[];
  /** Class split, month-by-month roadmap and coverage map. */
  visuals?: CourseVisuals;
  /** Who should already be able to do what before joining (Course.coursePrerequisites). */
  prerequisites?: string;
  metaDescription: string;
};

const RELATED_GUIDES: Record<string, { href: string; title: string; description: string }[]> = {
  "spoken-english-hindi": [
    {
      href: "/spoken-english-in-hindi",
      title: "हिंदी में स्पोकन इंग्लिश गाइड",
      description: "Hindi-language guide: fees, batch, how classes work.",
    },
    {
      href: "/english-hindi-bengali-medium",
      title: "Hindi- or Bengali-medium? You still belong here",
      description: "Explain in your language when a concept stalls, then back to English.",
    },
    {
      href: "/spoken-english-for-homemakers-india",
      title: "Spoken English for homemakers",
      description: "Learn from home around family time: slots, fee and what a class looks like.",
    },
    {
      href: "/online-vs-offline-spoken-english-classes",
      title: "Online vs offline spoken English classes",
      description: "Commute, batch size and speaking time compared, with fees.",
    },
    {
      href: "/bolo",
      title: "Bolo — daily practice app",
      description: "Practice, Watch, Review: the daily part of every course.",
    },
  ],
  "spoken-english-marathi": [
    {
      href: "/english-hindi-bengali-medium",
      title: "From a regional-medium school? You still belong here",
      description: "Explain in your language when a concept stalls, then back to English.",
    },
    {
      href: "/spoken-english-classes-maharashtra",
      title: "Spoken English in Maharashtra",
      description: "Pune, Mumbai, Nagpur, Nashik — live online, Marathi-speaking teacher.",
    },
    {
      href: "/spoken-english-for-homemakers-india",
      title: "Spoken English for homemakers",
      description: "Learn from home around family time: slots, fee and what a class looks like.",
    },
    {
      href: "/online-vs-offline-spoken-english-classes",
      title: "Online vs offline spoken English classes",
      description: "Commute, batch size and speaking time compared, with fees.",
    },
    {
      href: "/bolo",
      title: "Bolo — daily practice app",
      description: "Practice, Watch, Review: the daily part of every course.",
    },
  ],
  "spoken-english": [
    {
      href: "/spoken-english-for-beginners-india",
      title: "Spoken English for beginners",
      description: "Zero to a 2-minute turn. 6 months, ₹999/mo, around 6 learners.",
    },
    {
      href: "/how-to-speak-english-fluently",
      title: "How to speak English fluently",
      description: "Minutes, not 30-day ads. Free drills plus when a paid seat helps.",
    },
    {
      href: "/spoken-business-or-interactive-english",
      title: "Which English class do I need?",
      description: "Spoken, Interactive or Business — pick the bottleneck, not all three.",
    },
    {
      href: "/english-hindi-bengali-medium",
      title: "Hindi- or Bengali-medium? You still belong here",
      description: "Explain in your language when a concept stalls, then back to English.",
    },
    {
      href: "/blog/5-speaking-habits-that-killed-my-hesitation",
      title: "5 speaking habits that reduce hesitation",
      description: "Practical exercises for building retrieval speed and speaking confidence.",
    },
  ],
  "intermediate-english": [
    {
      href: "/intermediate-spoken-english-course-india",
      title: "Intermediate spoken English, explained",
      description:
        "Basic sentences work, flow does not. What the 4 months fix — and what they do not.",
    },
    {
      href: "/spoken-business-or-interactive-english",
      title: "Basic, Intermediate or Interactive?",
      description: "One test: can you finish a sentence, and does it come out right?",
    },
    {
      href: "/how-to-speak-english-fluently",
      title: "How to speak English fluently",
      description:
        "Free drills for the days between classes — shadowing, recordings, 60-second turns.",
    },
    {
      href: "/blog/5-speaking-habits-that-killed-my-hesitation",
      title: "5 speaking habits that reduce hesitation",
      description: "Cut the um, ah, like — the same filler drills used in the Foundation phase.",
    },
  ],
  "interactive-speaking": [
    {
      href: "/interactive-english-class-hesitation",
      title: "Interactive English when you freeze",
      description: "You know the words. You go silent. Talk every hour, on purpose.",
    },
    {
      href: "/spoken-business-or-interactive-english",
      title: "Which class — Spoken or Interactive?",
      description: "Interactive assumes there is language to retrieve. Spoken first if not.",
    },
    {
      href: "/blog/5-speaking-habits-that-killed-my-hesitation",
      title: "5 speaking habits that reduce hesitation",
      description: "Low-stakes practice ideas you can use between live classes.",
    },
    {
      href: "/english-for-client-calls-india",
      title: "English for client calls",
      description: "Names, numbers, next step — clarity, not a fake accent.",
    },
    {
      href: "/english-for-presentations-india",
      title: "Explain your work in 3 minutes",
      description: "One outcome, three beats, one ask. Standups and client decks.",
    },
    {
      href: "/english-for-working-professionals-india",
      title: "English while you work",
      description: "Afternoon, evening and night IST. Live class; recording is revision.",
    },
    {
      href: "/workplace-english-course-online-india",
      title: "Workplace English guide",
      description: "Who needs workplace training, what to practise and when not to buy a course.",
    },
    {
      href: "/blog/english-for-office-meetings",
      title: "English for office meetings",
      description: "Practical phrases for updates, clarification, disagreement and decisions.",
    },
    {
      href: "/blog/english-for-bpo-customer-support",
      title: "English for BPO and customer support",
      description: "Call handling, complaint language, recovery phrases and clear next steps.",
    },
    {
      href: "/blog/5-email-phrases-that-sound-more-professional",
      title: "5 email phrases that sound more professional",
      description: "Clearer business English without inflated or outdated wording.",
    },
    {
      href: "/blog/bpo-to-client-facing-role-roadmap",
      title: "BPO to client-facing role roadmap",
      description: "A practical communication and career progression plan.",
    },
  ],
  "interview-preparation": [
    {
      href: "/blog/tell-me-about-yourself-in-60-seconds",
      title: "Tell me about yourself in 60 seconds",
      description: "Present → past → future. Cut the life story. Keep the job thread.",
    },
    {
      href: "/spoken-business-or-interactive-english",
      title: "Which English class do I need?",
      description: "If you cannot form a sentence yet, Interview Preparation is the wrong room.",
    },
    {
      href: "/english-for-presentations-india",
      title: "Explain your work in 3 minutes",
      description: "The same muscle as a technical round — numbers, names, next step.",
    },
  ],
};

const TEACHER_NOTE: Record<string, string> = {
  "spoken-english": "Same teacher every class. They hear you speak — and they remember your words.",
  "intermediate-english":
    "Same teacher for all 4 months. They hear your tense slip in month 1 and check it is gone by month 4.",
  "interactive-speaking": "You talk every hour. Your teacher tracks hesitation week by week.",
  "interview-preparation":
    "The same teacher on every mock. They hear the freeze on the 60-second intro — and they mark it until it stops.",
};

/** The learner's-language block: short, real text, marked with its own lang. */
function NativeBlock({ native }: { native: NativeSection }) {
  return (
    <section
      className="section bg-bolo-mint/50"
      lang={native.lang}
      aria-labelledby="native-heading"
      id={native.lang === "hi" ? "hindi" : "marathi"}
    >
      <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-bolo-teal">
            {native.label}
          </span>
          <h2 id="native-heading" className="mt-3 font-bold text-ink section-title">
            {native.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">{native.intro}</p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {native.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-ink/85">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bolo-teal" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <WaButton
              message={native.waMessage}
              variant="wa"
              size="lg"
              goal={`native_${native.lang}`}
            >
              {native.cta}
            </WaButton>
          </div>
        </div>
        <dl className="flex flex-col gap-3">
          {native.faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-[#BFE6E0] bg-white p-5">
              <dt className="font-bold text-ink">{f.q}</dt>
              <dd className="mt-1.5 text-ink/80">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function CoursePage({ data }: { data: CourseData }) {
  const shownTagline = <FeeText text={data.tagline} />;
  const shownLive = data.liveNote != null ? <FeeText text={data.liveNote} /> : null;
  const feeKey = data.feeSlug ?? data.slug;
  const teacherNote = TEACHER_NOTE[data.slug] ?? TEACHER_NOTE[feeKey];
  const waPrimary = data.waDemo ?? `Hi, I want a free consultation for ${data.title}.`;
  const waSyllabus = `Hi, I want a free consultation for ${data.title} and the fees.`;
  const faqs = courseFaqs(data);
  const snapshot = (
    <SnapshotCard
      // Same one-line badge as the homepage; the batch detail is the first row.
      badge="Live · Enrolling Now"
      eyebrow="Course fee starts at"
      headline={isIntlSlug(feeKey) ? feeHeadline(data.price, feeKey) : { big: data.price }}
      subnote={
        <>
          {data.duration} ·{" "}
          {isIntlSlug(feeKey) ? (
            <FeePair inr="inclusive of taxes" usd={intlUnit()} />
          ) : (
            "inclusive of taxes"
          )}
        </>
      }
      rows={[
        {
          tone: "brand",
          icon: SnapIcons.people,
          big: data.snapshotBatchBig ?? "Approx. 6 learners",
          small: "in a live batch · up to 2 classes a week, 90 min",
        },
        {
          tone: "indigo",
          icon: SnapIcons.calendar,
          big: "Daily",
          small: "practice in the Bolo app, with a streak",
        },
        {
          tone: "violet",
          icon: SnapIcons.cap,
          big: "Weekly",
          small: "teacher review of your reading & speaking",
        },
      ]}
      footer="Message Anytime · Replies 10am–midnight IST every day"
    />
  );
  return (
    <Layout waMessage={waPrimary} footerImage={data.footerImage}>
      {/* HERO */}
      <section className="hero-teal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage src={data.heroImage} alt={data.title} fill priority sizes="100vw" />
          <div className="absolute inset-0 hero-veil" />
        </div>
        <div className="container-x pt-6 pb-14 md:pt-8 md:pb-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div className="hero-bob text-cream">
            <Link
              to="/english-career"
              className="text-sunshine font-display font-semibold text-sm inline-flex items-center gap-1 hover:underline"
            >
              <Icon name="arrow-right" size={14} className="rotate-180" /> {data.category}
            </Link>
            <div className="mt-3 flex items-start gap-2">
              <Icon name={data.icon} size={36} className="mt-1 shrink-0 text-sunshine" />
              <h1 className="text-4xl md:text-6xl font-extrabold text-cream leading-[1.05]">
                {data.title}
              </h1>
            </div>
            <p className="mt-4 text-lg text-white max-w-2xl">{shownTagline}</p>
            {teacherNote && <p className="mt-2 text-base text-white/90">{teacherNote}</p>}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunshine text-ink font-bold">
                  <Icon name="rupee" size={14} className="lws-inr" />
                  <FeeText text={data.price} />
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">
                  <Icon name="clock" size={14} className="text-sage" />
                  {data.duration}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">
                  <Icon name="users" size={14} className="text-sage" />
                  {data.format}
                </span>
              </div>
              {(data.durationQualifier || data.continueNote) && (
                <div className="flex flex-wrap gap-3">
                  {data.durationQualifier && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">
                      <Icon name="compass" size={14} className="text-sage" />
                      {data.durationQualifier}
                    </span>
                  )}
                  {data.continueNote && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">
                      <Icon name="refresh" size={14} className="text-sage" />
                      {data.continueNote}
                    </span>
                  )}
                </div>
              )}
            </div>
            <p className="mt-3 text-sm text-white/90">
              {shownLive ??
                "✓ 100% online live · ✓ About 6 in a batch · ✓ Flexible afternoon · evening · night slots · ✓ Kolkata, pan-India, now worldwide"}
            </p>
            <div className="mt-7 flex flex-wrap gap-3" data-cta-location="hero">
              <WaButton message={waPrimary} variant="wa" size="lg">
                {CHAT_CTA}
              </WaButton>
              <WaButton message={waPrimary} variant="sun" size="lg">
                {DEMO_CTA}
              </WaButton>
            </div>
            <p className="mt-3 text-sm font-semibold text-sunshine">
              <FeeText text={CONSULTATION.hook} />
            </p>
            <PaymentTrust tone="dark" className="mt-4" />
          </div>
          <div className="hidden lg:block relative">{snapshot}</div>
        </div>
      </section>

      {/* Mobile snapshot card */}
      <section className="hero-light lg:hidden bg-paper py-8">
        <div className="container-x flex justify-center">
          <div className="relative w-full max-w-[28rem]">{snapshot}</div>
        </div>
      </section>

      {data.native && <NativeBlock native={data.native} />}

      {data.slug === "spoken-english" && (
        <section
          className="border-b border-border bg-bolo-mint/40 py-5"
          aria-label="Also taught in Hindi or Marathi"
        >
          <div className="container-x flex flex-wrap items-center gap-3 text-sm md:text-base">
            <span className="font-bold text-ink">Prefer help in your own language?</span>
            <Link
              to="/course-spoken-english-hindi"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-bold text-bolo-teal shadow-sm hover:underline"
            >
              Hindi to English <Icon name="arrow-right" size={16} />
            </Link>
            <Link
              to="/course-spoken-english-marathi"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-bold text-bolo-teal shadow-sm hover:underline"
            >
              Marathi to English <Icon name="arrow-right" size={16} />
            </Link>
            <span className="text-ink/70">
              Same course and fee — a teacher who speaks your language.
            </span>
          </div>
        </section>
      )}

      {/* WHY WE'RE DIFFERENT — all-in-one at a low cost */}
      <WhyDifferent compact level={levelForCourse(feeKey)} />

      {/* OUTCOMES */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <SmartImage
            src={data.midImage}
            alt={`${data.title} outcomes`}
            className="rounded-3xl shadow-lg h-[360px] w-full"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div>
            <SectionHeader
              align="left"
              eyebrow="What You'll Achieve"
              eyebrowTone="sun"
              title={<>By the end, you'll be able to…</>}
              subtitle="Real, measurable outcomes — not just lecture hours."
            />
            <ul className="grid sm:grid-cols-2 gap-3">
              {data.outcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border"
                >
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-ink/85 text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <WaButton message={waPrimary} variant="sun" size="lg">
                {DEMO_CTA}
              </WaButton>
            </div>
          </div>
        </div>
      </section>

      {data.visuals && (
        <>
          <ClassSplit title={data.title} visuals={data.visuals} />
          <Roadmap title={data.title} visuals={data.visuals} />
          <CoverageMap title={data.title} visuals={data.visuals} />
        </>
      )}

      {/* COMPLETE PACKAGE — live classes + Bolo + same teacher */}
      {isPackageSlug(feeKey) && <CourseIncluded slug={feeKey} />}

      {/* CURRICULUM */}
      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Curriculum"
            eyebrowTone="indigo"
            title={`Full ${data.title} Syllabus`}
            subtitle="Every module is taught live, with hands-on activities, quizzes and feedback."
          />
          <Reveal stagger className="grid md:grid-cols-2 gap-5">
            {data.modules.map((m, i) => (
              <article key={m.title} className="card-soft">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-9 w-9 rounded-xl bg-indigo-pop/10 text-indigo-pop font-display font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-ink text-lg font-display font-bold">{m.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-ink/90">
                  {m.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="check" size={14} className="text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
          <div
            className="mt-8 bg-brand rounded-2xl p-6 md:p-7 flex flex-wrap items-center justify-between gap-4"
            data-cta-location="syllabus"
          >
            <div>
              <strong className="text-cream block text-lg">Want a printable syllabus PDF?</strong>
              <p className="text-white text-sm mt-1">
                We'll reply on WhatsApp with current batch timings and pricing.
              </p>
            </div>
            <WaButton message={waSyllabus} variant="wa">
              Send Me the Syllabus
            </WaButton>
          </div>
        </div>
      </section>

      <CourseLadder highlight={feeKey} />

      {data.projects && data.projects.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeader
              eyebrow="Capstone Projects"
              eyebrowTone="sun"
              title="Two India-Context Projects in This Course"
              subtitle="You don't just learn — you ship. Every learner builds these two portfolio-grade projects with direct teacher feedback during class or outside class when genuinely needed."
            />
            <Reveal stagger className="grid md:grid-cols-2 gap-5">
              {data.projects.map((p, i) => (
                <article
                  key={p.title}
                  className="card-soft bg-gradient-to-br from-white to-brand-soft border-brand/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-10 w-10 rounded-xl bg-sunshine text-ink font-display font-extrabold flex items-center justify-center">
                      P{i + 1}
                    </span>
                    <h3 className="text-ink text-lg font-display font-bold">{p.title}</h3>
                  </div>
                  <p className="text-ink/85 text-sm leading-relaxed">{p.brief}</p>
                  <p className="mt-3 text-sm text-ink/90">
                    <strong className="text-brand">Deliverable:</strong> {p.deliverable}
                  </p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {data.testimonials && data.testimonials.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeader
              eyebrow="Student Stories"
              eyebrowTone="coral"
              title="Real Results from Real Learners"
            />
            <TestimonialSlider items={data.testimonials} />
          </div>
        </section>
      )}

      {(RELATED_GUIDES[data.slug]?.length ?? 0) > 0 && (
        <section className="section bg-brand-soft/30">
          <div className="container-x">
            <SectionHeader
              eyebrow="Free Learning Guides"
              eyebrowTone="indigo"
              title={`Practise ${data.title} Between Classes`}
              subtitle="Use these practical lessons before your consultation or between live sessions."
            />
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {RELATED_GUIDES[data.slug].map((guide) => (
                <a key={guide.href} href={guide.href} className="card-soft group">
                  <h3 className="font-display font-bold text-ink group-hover:text-brand">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/85">{guide.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand">
                    Read the guide <Icon name="arrow-right" size={15} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section bg-cream" id="faq">
          <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10">
            <div>
              <SectionHeader
                align="left"
                eyebrow="FAQs"
                title={`${data.title} — Questions & Answers`}
                subtitle="Anything else? Message anytime — WhatsApp replies during 10am–midnight IST every day."
              />
              <SmartImage
                src={data.footerImage}
                alt={`${data.title} live online class`}
                className="rounded-2xl shadow-md h-60 w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="space-y-3">
              {/* Open by default: the answers stay in the DOM either way, but an
                  expanded first answer is what search and AI snippets quote. */}
              {faqs.map((f, i) => (
                <details key={f.q} className="card-soft group" open={i === 0}>
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                    <h3 className="font-display font-bold text-ink text-base">{f.q}</h3>
                    <Icon
                      name="arrow-right"
                      size={16}
                      className="text-brand rotate-90 group-open:rotate-[-90deg] transition"
                    />
                  </summary>
                  <p className="mt-3 text-ink/90 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
