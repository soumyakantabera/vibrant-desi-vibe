import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import {
  SectionHeader,
  FeatureCard,
  WaButton,
  Stat,
  MottoBand,
  GuidesStrip,
  CoverageStrip,
} from "@/components/ui-bits";
import { Icon, type IconName } from "@/components/Icon";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/Reveal";
import { IMG, imageSources } from "@/lib/images";
import { RATING, RATING_DISPLAY, pageHead, PAGES } from "@/lib/seo";
import {
  COURSE_CATEGORIES,
  type CategoryTone,
  type CourseCategory,
  type CourseSlug,
} from "@/lib/course-categories";
import { COURSES } from "@/lib/courses";
import { waLink } from "@/lib/whatsapp";

const heroSources = imageSources(IMG.heroClass);

const DIFFERENTIATORS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "play",
    title: "Real teachers",
    body: "A teacher who knows your name. Live, every hour.",
  },
  {
    icon: "users",
    title: "Small batches",
    body: "Every learner gets the mic. Approx. 6 learners. From ₹999/mo.",
  },
  {
    icon: "gamepad",
    title: "Gamified live classes",
    body: "Polls, debates, games — designed for the demands of today's market.",
  },
];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => {
    const head = pageHead("/");
    return {
      ...head,
      links: [
        ...head.links,
        // The hero photo is the largest thing in the first screen, so start it
        // downloading from the HTML rather than waiting for the bundle to
        // render the <img> that asks for it.
        //
        // Preloads the AVIF, with `type`, because that is what <picture> in
        // SmartImage will actually choose — preloading the JPEG would fetch
        // 141 kB the page then never displays. A browser without AVIF support
        // ignores a preload whose `type` it cannot decode and loads the WebP or
        // JPEG through the normal path, so the fallback is a missed
        // optimisation rather than a double download.
        ...(heroSources.avif
          ? [
              {
                rel: "preload",
                as: "image",
                href: heroSources.avif,
                type: "image/avif",
                fetchPriority: "high",
              },
            ]
          : [{ rel: "preload", as: "image", href: IMG.heroClass, fetchPriority: "high" }]),
      ],
    };
  },
});

function Home() {
  const TESTIMONIALS = [
    {
      quote:
        "Quarter-close used to mean I typed in the chat while someone else spoke. Now I take the Mumbai call myself — names, numbers, next step.",
      name: "Neha Patel",
      detail: "Workplace English · Tax Analyst, Ahmedabad",
      waMessage:
        "Hi, I saw Neha's tax-analyst story. I want the same result. Workplace English demo please.",
    },
    {
      quote:
        "I knew the argument in Telugu. Bengaluru clients wanted it in English. Three months later I brief in both.",
      name: "Kavya Reddy",
      detail: "Spoken English · Advocate, Hyderabad",
      waMessage:
        "Hi, I saw Kavya's story. I want the same result. Can I get a free demo for Spoken English?",
    },
    {
      quote:
        "The promotion board was in English. Mock interviews, live, around six learners. I got the Assistant Manager seat.",
      name: "Vikram Singh",
      detail: "Interview Prep · Bank Asst. Manager, Delhi",
      waMessage:
        "Hi, I saw Vikram's promotion story. I want the same career move. Interview Prep demo please.",
    },
  ];

  return (
    <Layout
      waMessage="Hi, I am interested in a free demo. Please guide me."
      footerImage={IMG.graduation}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* The one image that is part of the first screen — fetched at high
              priority; everything else on the page loads lazily. */}
          <SmartImage
            src={IMG.heroClass}
            alt="Indian students in a live online class"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/70 to-indigo-pop/60" />
        </div>
        <div className="container-x py-8 md:py-16 lg:py-20 flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] gap-7 lg:gap-8 items-stretch lg:items-center">
          <div className="text-cream min-w-0 w-full">
            <span className="eyebrow eyebrow-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>{" "}
              7 Years · Kolkata & Pan-India
            </span>
            <h1 className="mt-3 text-[28px] md:text-5xl font-extrabold leading-[1.1] text-cream">
              Speak Better English.
              <br />
              <span className="text-sunshine">Master In-Demand Skills.</span>
              <br />
              Build Future Together.
            </h1>
            <p className="mt-3 max-w-xl text-base text-white md:text-lg">
              Real teachers. Small batches. Gamified, interactive live English classes — designed
              for the demands of today's market. From{" "}
              <strong className="text-sunshine">₹999/mo</strong>. A full{" "}
              <strong className="text-sunshine">₹0 live demo</strong> before you pay.
            </p>
            <div
              className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3"
              data-cta-location="hero"
            >
              <WaButton
                message="Hi, I want to improve my English. Please help me choose the right live course and ₹0 demo slot."
                size="lg"
                className="w-full sm:w-auto justify-center"
                goal="whatsapp_chat"
              >
                Chat on WhatsApp
              </WaButton>
              <WaButton
                message="Hi, I'd like a ₹0 live demo. Please share the next slot."
                variant="white"
                size="lg"
                className="w-full sm:w-auto justify-center"
                goal="free_demo"
              >
                Book ₹0 Live Demo
              </WaButton>
            </div>
            <p className="mt-3 text-sm font-semibold text-white/95">
              Message anytime. We reply 09:00–12:00 IST.
            </p>
            <div className="mt-5 -mx-4 sm:mx-0 px-4 sm:px-0 flex sm:flex-wrap flex-nowrap overflow-x-auto sm:overflow-visible snap-x gap-2 sm:gap-3 text-sm text-white/95 no-scrollbar">
              {[
                "7 Years · Kolkata & Pan-India",
                "From ₹999/month",
                "500+ Learners",
                "₹0 real demo",
                "Small batches — approx. 6 learners",
              ].map((s) => (
                <span
                  key={s}
                  className="snap-start shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20 whitespace-nowrap"
                >
                  <Icon name="check" size={14} className="text-sage" />
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full min-w-0 flex justify-center lg:block">
            <div className="relative w-full max-w-[320px] lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sunshine/30 blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-coral/30 blur-3xl" />
              <SnapshotCard
                eyebrow="Course fees start at"
                headline={{ big: "₹999", suffix: "/month" }}
                subnote="Monthly billing · GST included · UPI accepted"
                rows={[
                  {
                    tone: "brand",
                    icon: SnapIcons.cap,
                    big: "500+",
                    small: "Learners who actually spoke",
                  },
                  {
                    tone: "indigo",
                    icon: SnapIcons.calendar,
                    big: "7 yrs",
                    small: "Same teacher, still live",
                  },
                  {
                    tone: "coral",
                    icon: SnapIcons.people,
                    big: "You speak",
                    small: "A group of around 6 — not the back row",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sunshine text-ink border-y border-ink/10">
        <div className="container-x py-5 grid sm:grid-cols-3 gap-3 sm:gap-6 text-sm">
          {DIFFERENTIATORS.map(({ icon, title, body }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-full bg-ink text-sunshine grid place-items-center shrink-0">
                <Icon name={icon} size={17} />
              </span>
              <p>
                <strong className="font-display block">{title}</strong>
                <span className="text-ink/80">{body}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <CoverageStrip />

      {/* STORY BAND */}
      <section className="bg-brand-deep py-10 md:py-14">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunshine/15 text-sunshine font-display font-bold text-xs uppercase tracking-wider">
              <Icon name="book" size={14} /> Our Story
            </span>
            <h2 className="mt-4 text-cream text-3xl md:text-5xl leading-[1.1]">
              We Noticed a Gap.
              <br />
              <span className="text-sage">We Built the Bridge.</span>
            </h2>
            <div className="mt-6 space-y-4 text-white leading-relaxed">
              <p>
                For the past seven years, we have been teaching students and helping them build
                confidence in learning. During this journey, we noticed a common gap — many students
                struggle to understand concepts because learning is often made{" "}
                <strong className="text-cream">too complex</strong>.
              </p>
              <p>
                Our mission has always been to bridge this gap through simple teaching methods and
                by understanding each student's learning needs. We believe education should be{" "}
                <strong className="text-cream">easy to understand, practical, and enjoyable</strong>
                .
              </p>
              <p>
                With the rapid growth of AI and technology, we have designed live classes with small
                batch sizes to ensure better attention, better interaction, and better learning
                outcomes.
              </p>
            </div>
            <Link to="/about-us" className="btn btn-ghost-white mt-6">
              <Icon name="arrow-right" size={16} /> Read Our Full Story
            </Link>
          </div>
          <Reveal stagger className="grid grid-cols-2 gap-3">
            <StoryTile icon="gamepad" tone="sun" title="Gamified Learning">
              Flashcards, matching games & live quizzes every session.
            </StoryTile>
            <StoryTile icon="users" tone="glass" title="Batch of Around 6">
              Named teacher. Small batches of approximately 6 learners. You still speak.
            </StoryTile>
            <StoryTile icon="heart" tone="glass" title="Collaborative">
              Group discussions and community building every class.
            </StoryTile>
            <StoryTile icon="target" tone="sun" title="Live Polls & Quizzes">
              Real-time interactive activities every session.
            </StoryTile>
          </Reveal>
        </div>
      </section>

      {/* COURSE CATEGORIES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="What We Teach"
            title="Choose the Goal You Need Now"
            subtitle="Spoken English, Workplace, IELTS and 1:1 Career Guidance. Start with the result you need — not a confusing course name."
          />
          <Reveal stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {COURSE_CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </Reveal>
          <div className="mt-5 bg-brand rounded-2xl p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <strong className="text-cream block text-lg">
                Not sure which course is right for you?
              </strong>
              <p className="text-white text-sm mt-1">
                Message your goal anytime — we recommend the best-fit course when admissions replies
                during 09:00–12:00 IST.
              </p>
            </div>
            <WaButton
              message="Hi, I am not sure which course is right for me. Can you recommend one based on my goal?"
              variant="white"
              size="md"
            >
              <Icon name="whatsapp" size={16} /> Get a Recommendation
            </WaButton>
          </div>
        </div>
      </section>

      <GuidesStrip />

      {/* HOW IT WORKS */}
      <section className="relative section overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage src={IMG.liveClass} alt="Live online class in India" fill sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 to-brand-deep/85" />
        </div>
        <div className="container-x">
          <SectionHeader
            eyebrowTone="white"
            eyebrow="The Process"
            title={<span className="text-cream">How Live Classes Work</span>}
            invert
            subtitle={
              <span className="text-white/90">
                One named teacher. Up to 2 classes a week. Every session live — never a recording as
                the class. Batches of approximately 6 learners mean you still get the mic.
              </span>
            }
          />
          <Reveal stagger className="grid md:grid-cols-2 gap-5 mb-12">
            <GlassCard
              icon="users"
              title="Small Live Batches"
              pricing="Approx. 6 learners · From ₹999/mo"
            >
              Scheduled English cohorts usually have around 6 learners. You practise with
              classmates, speak in every class and receive corrections during the lesson.
            </GlassCard>
            <GlassCard icon="user" title="Direct Teacher Support" pricing="When Genuinely Needed">
              Questions are answered during class. Outside class, a learner can contact the teacher
              directly when genuine help is needed; this is not a scheduled 1:1 feedback session.
            </GlassCard>
          </Reveal>
          <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: 1, lbl: "Choose Course", sub: "6 programmes · from ₹999/mo", c: "sunshine" },
              { n: 2, lbl: "Share Your Goal", sub: "We match you in 1 message", c: "coral" },
              { n: 3, lbl: "WhatsApp Us", sub: "Replies 09:00–12:00 IST", c: "wa" },
              { n: 4, lbl: "Join Live Class", sub: "₹0 demo · approx. 6 per batch", c: "sage" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div
                  className={`mx-auto h-12 w-12 rounded-full flex items-center justify-center font-display font-extrabold text-lg ${
                    s.c === "wa"
                      ? "bg-wa text-ink"
                      : s.c === "sunshine"
                        ? "bg-sunshine text-ink"
                        : s.c === "coral"
                          ? "bg-coral text-ink"
                          : "bg-sage text-ink"
                  }`}
                >
                  {s.n}
                </div>
                <div className="text-cream font-display font-bold mt-3">{s.lbl}</div>
                <div className="text-white/85 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </Reveal>
          <div className="text-center mt-10">
            <WaButton message="Hi, I am interested in a free demo. Please guide me." size="lg">
              Chat With Us on WhatsApp
            </WaButton>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section bg-brand-soft/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="What We Offer"
            title="Why Our Teaching Works"
            subtitle="Spoken, business and interactive English — live, practical, from ₹999/mo. 7 years, 500+ learners."
          />
          <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard icon="play" color="brand" title="Interactive Live Classes">
              Engaging live sessions with direct teacher support — real interaction every class.
            </FeatureCard>
            <FeatureCard icon="gamepad" color="sunshine" title="Gamified Learning">
              Flashcards, matching games, live polls & quizzes — learning that actually sticks.
            </FeatureCard>
            <FeatureCard icon="heart" color="coral" title="Collaborative Learning">
              Group discussions, debates, and teamwork that build confidence together.
            </FeatureCard>
            <FeatureCard icon="target" color="indigo" title="Student-Centred Design">
              Classes designed around each student's needs, goals, and learning style.
            </FeatureCard>
            <FeatureCard icon="trend" color="sage" title="Live Polls & Quizzes">
              Real-time activities that improve participation and check understanding.
            </FeatureCard>
            <FeatureCard icon="clock" color="brand" title="Flexible & Adaptable">
              Morning, evening, weekend batches — we fit around your life, not the other way round.
            </FeatureCard>
          </Reveal>
          <div className="text-center mt-10">
            <Link to="/about-us" className="btn btn-outline">
              See All 11 Learning Features <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <MottoBand>
        "Speak Better English. <em className="text-sunshine">Build Future Together.</em>"
      </MottoBand>

      {/* NUMBERS */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 z-0">
          <SmartImage src={IMG.graduation} alt="Indian graduates" fill sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-brand-deep/90 to-ink/85" />
        </div>
        <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 divide-y divide-cream/10 md:divide-y-0 md:divide-x">
          <div className="md:pr-4">
            <Stat num="7" label="Years, same teacher" />
          </div>
          <div className="md:px-4">
            <Stat num="500+" label="People who spoke here" />
          </div>
          <div className="md:px-4 pt-8 md:pt-0">
            <Stat num="8" label="In the room. You speak." />
          </div>
          {/* One rating, one source. This tile used to read 4.9★ while the
              location card below read 5.0★ — the same page stating two numbers.
              That matters more here than on most sites: llms.txt and the .md
              twins make this site unusually easy for an assistant to quote
              verbatim, so an inconsistency propagates straight into AI answers.
              The Google Business Profile figure is the one that wins.
              Deliberately NOT mirrored into JSON-LD as aggregateRating —
              self-serving review markup on LocalBusiness is disregarded by
              Google and carries a manual-action risk. */}
          <div className="md:pl-4 pt-8 md:pt-0">
            <Stat
              num={RATING_DISPLAY}
              label={`${RATING.source} Rating · ${RATING.count} Reviews`}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrowTone="coral"
            eyebrow="Student Stories"
            title="Real Results from Real Learners"
            subtitle="Selected named outcomes. Progress depends on attendance and practice — no score, job or salary is guaranteed."
          />
          <TestimonialSlider items={TESTIMONIALS} />
          <p className="text-center text-sm text-ink/75 mt-5 max-w-2xl mx-auto">
            These are selected individual learner outcomes. Progress depends on starting level,
            attendance and practice; no score, job or salary result is guaranteed.
          </p>
          <div className="text-center mt-10">
            <Link to="/success-stories" className="btn btn-outline">
              Read All Success Stories <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING — placed next to the WhatsApp CTA so cost stays crystal clear */}
      <section id="pricing" className="section bg-cream scroll-mt-20" data-cta-location="pricing">
        <div className="container-x">
          <SectionHeader
            eyebrow="Simple, India-Friendly Pricing"
            eyebrowTone="indigo"
            title="From ₹999/mo · GST Included · ₹0 Demo"
            subtitle="Pay per month. Up to 2 live classes/week. Same-week reschedule if a slot is free. Attend a ₹0 live demo before you enrol. Batches have approximately 6 learners."
          />
          <Reveal stagger className="grid gap-5 lg:grid-cols-3">
            <article className="order-2 flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDE6DF] border-t-4 border-t-brand bg-white p-5 shadow-[0_16px_40px_-30px_rgba(8,70,51,.45)] transition hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(8,70,51,.5)] sm:p-6 lg:order-none">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                  <BatchIcon />
                </span>
                <h3 className="font-display text-lg font-extrabold text-ink">
                  Small Batch (Approx. 6 learners)
                </h3>
              </div>
              <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                ₹999<span className="text-base font-bold text-ink/75">/month</span>
              </p>
              <p className="mt-1 text-sm text-ink/75">GST included · billed monthly</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink/85">
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                  Live, interactive online classes
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                  Flexible morning · evening · weekend slots
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                  Recordings & worksheets included
                </li>
              </ul>
            </article>

            <article className="order-1 flex h-full flex-col overflow-hidden rounded-3xl border-2 border-indigo-pop bg-gradient-to-b from-[#F5F5FF] to-white p-5 shadow-[0_18px_48px_-28px_rgba(91,91,214,.5)] transition hover:-translate-y-1 hover:shadow-[0_24px_54px_-26px_rgba(91,91,214,.55)] sm:p-6 lg:order-none">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7E7FF] text-indigo-pop">
                    <WorkplaceIcon />
                  </span>
                  <h3 className="font-display text-lg font-extrabold text-ink">
                    Workplace English
                  </h3>
                </div>
                <span className="pill border-none bg-indigo-pop text-white">Most Popular</span>
              </div>
              <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                ₹1,999<span className="text-base font-bold text-ink/75">/month</span>
              </p>
              <p className="mt-1 text-sm text-ink/75">3 months · up to 2 classes/week</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink/85">
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-indigo-pop" />
                  Meetings, client calls and status updates
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-indigo-pop" />
                  Emails, workplace messages and presentations
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-indigo-pop" />
                  Live batch of approximately 6 learners
                </li>
              </ul>
            </article>

            <article className="order-3 flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8DFDC] border-t-4 border-t-[#C84D3F] bg-white p-5 shadow-[0_16px_40px_-30px_rgba(165,61,50,.4)] transition hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(165,61,50,.45)] sm:p-6 lg:order-none">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0ED] text-[#A53D32]">
                  <FreeDemoIcon />
                </span>
                <h3 className="font-display text-lg font-extrabold text-ink">Free Demo</h3>
              </div>
              <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">₹0</p>
              <p className="mt-1 text-sm text-ink/75">First live class — zero commitment</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink/85">
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-[#A53D32]" />
                  Meet your teacher live
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-[#A53D32]" />
                  Ask questions before deciding
                </li>
                <li className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-[#A53D32]" />
                  No card or payment needed
                </li>
              </ul>
            </article>
          </Reveal>
          <div className="mt-7 text-center">
            <p className="text-sm text-ink/75">
              All prices are in INR. GST is included where applicable.
            </p>
            <div className="mt-3">
              <WaButton
                message="Hi, please send me the exact pricing and next available demo slot for my course."
                size="sm"
              >
                Ask for Course Pricing
              </WaButton>
            </div>
          </div>
        </div>
      </section>

      {/* START TODAY */}
      <section className="section bg-gradient-to-b from-cream to-brand-soft/40">
        <div className="container-x">
          <SectionHeader eyebrow="Enroll Today" title="Two Ways to Begin" />

          <Reveal stagger className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 md:p-10 bg-brand-deep text-cream relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-wa/20 rounded-full blur-3xl" />
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-wa text-white mb-4">
                <Icon name="whatsapp" size={28} />
              </div>
              <h3 className="text-cream text-2xl font-display font-extrabold mb-3">
                Chat on WhatsApp
              </h3>
              <p className="text-white/95 leading-relaxed mb-6">
                Tell us your goal in one message at any time. We will guide you to the right course
                and demo slot when admissions replies during 09:00–12:00 IST. No checkout, no
                obligation and no surprise sales call.
              </p>
              <WaButton message="Hi, I am interested in a free demo. Please guide me." size="lg">
                Open WhatsApp Now
              </WaButton>
              <p className="text-xs text-white/80 mt-4">
                Message anytime · Replies 09:00–12:00 IST · Phone is a fallback
              </p>
            </div>
            <a
              href={waLink("Hi, I'd like a ₹0 live demo. Please share the next slot.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-end group"
              data-cta-goal="free_demo"
            >
              <SmartImage
                src={IMG.womanLaptop}
                alt="Indian woman booking a class"
                fill
                imgClassName="transition duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/20" />
              <div className="relative p-7 text-cream">
                <h3 className="text-cream text-2xl font-display font-extrabold mb-2 flex items-center gap-2">
                  <Icon name="calendar" size={22} /> Book a Free Demo Class
                </h3>
                <p className="text-cream/95 mb-4">
                  One WhatsApp message. A real live class. No form, no card, no sales call.
                </p>
                <span className="btn btn-sun btn-sm">
                  Open WhatsApp <Icon name="arrow-right" size={14} />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <FaqSection
        faqs={PAGES["/"].faqs ?? []}
        eyebrow="Common Questions"
        title="Your Questions, Answered Plainly"
        subtitle="Fees, batch sizes, timelines and whether this actually works — answered plainly."
        waMessage="Hi, I have a question before booking a demo."
      />

      {/* GOOGLE MAPS — KOLKATA OUTLET (compact) */}
      <section className="py-12 pb-24 sm:pb-12 bg-white">
        <div className="container-x max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white grid md:grid-cols-[1fr_1.1fr]">
            <div className="relative h-56 md:h-auto min-h-[220px] bg-brand-soft">
              <iframe
                title="Learn With Smile — Kolkata Center map"
                src="https://www.google.com/maps?q=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col justify-center">
              <span className="eyebrow eyebrow-indigo w-fit">
                <Icon name="globe" size={12} /> 11 States · Office in Kolkata
              </span>
              <div className="font-display font-extrabold text-ink text-base mt-2 flex items-center gap-2">
                LEARN WITH SMILE
              </div>
              <p className="text-ink/85 text-sm mt-1">
                75/2/4, Raja Ram Mohan Roy Road, Kolkata — 700008
                <br />
                <span className="text-sunshine font-bold">
                  {RATING_DISPLAY} ({RATING.count} {RATING.source} reviews)
                </span>{" "}
                · By appointment only
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <Icon name="target" size={14} /> Directions
                </a>
                <a
                  href="https://g.page/r/CY5ptQJYQVPVEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sun btn-sm"
                >
                  <Icon name="star" size={14} /> Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function StoryTile({
  icon,
  title,
  tone,
  children,
}: {
  icon: IconName;
  title: string;
  tone: "sun" | "glass";
  children: React.ReactNode;
}) {
  if (tone === "sun") {
    return (
      <div className="rounded-2xl p-5 bg-sunshine">
        <div className="h-10 w-10 rounded-xl bg-ink/10 text-ink flex items-center justify-center mb-2">
          <Icon name={icon} size={20} />
        </div>
        <strong className="text-ink font-display block">{title}</strong>
        <p className="text-ink/90 text-sm mt-1">{children}</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl p-5 bg-white/10 border border-cream/15 backdrop-blur">
      <div className="h-10 w-10 rounded-xl bg-cream/15 text-sunshine flex items-center justify-center mb-2">
        <Icon name={icon} size={20} />
      </div>
      <strong className="text-cream font-display block">{title}</strong>
      <p className="text-white/90 text-sm mt-1">{children}</p>
    </div>
  );
}

const CATEGORY_TONES: Record<CategoryTone, { bar: string; icon: string; badge: string }> = {
  brand: {
    bar: "bg-brand",
    icon: "bg-brand-soft text-brand-deep",
    badge: "border-brand/25 bg-brand-soft text-brand-deep",
  },
  indigo: {
    bar: "bg-indigo-pop",
    icon: "bg-[#E7E7FF] text-indigo-pop",
    badge: "border-indigo-pop/25 bg-[#F1F1FF] text-[#4141A8]",
  },
  sun: {
    bar: "bg-[#D39A00]",
    icon: "bg-[#FFF3C4] text-[#6B4A00]",
    badge: "border-sunshine/45 bg-[#FFF8DE] text-[#6B4A00]",
  },
  coral: {
    bar: "bg-[#C84D3F]",
    icon: "bg-[#FFF0ED] text-[#A53D32]",
    badge: "border-coral/35 bg-[#FFF4F1] text-[#8B321F]",
  },
};

function coursePath(slug: CourseSlug): `/course-${CourseSlug}` {
  return `/course-${slug}`;
}

function CategoryCard({ category }: { category: CourseCategory }) {
  const visual = COURSES[category.featuredSlug];
  const tone = CATEGORY_TONES[category.tone];
  const onlySlug = category.slugs.length === 1 ? category.slugs[0] : undefined;
  const onlyCourse = onlySlug ? COURSES[onlySlug] : undefined;
  const destination = onlySlug ? coursePath(onlySlug) : "/english-career";

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-[#DDE5DF] bg-white shadow-[0_14px_40px_-32px_rgba(8,70,51,.5)] transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_-30px_rgba(8,70,51,.55)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={visual.heroImage}
          alt={`${category.title} online courses in India`}
          fill
          position="center 22%"
          imgClassName="transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <span className="pill absolute left-3 top-3 border-white/80 bg-white/95 text-ink shadow-md backdrop-blur">
          {onlySlug ? "1 programme" : `${category.slugs.length} programmes`}
        </span>
      </div>
      <div className={`h-1 ${tone.bar}`} />

      <div className="flex min-w-0 flex-col p-3 sm:p-3.5">
        <div className="flex items-center gap-2">
          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${tone.icon}`}>
            <Icon name={category.icon} size={16} />
          </span>
          <h3 className="font-display text-base font-extrabold leading-tight text-ink sm:text-lg">
            {category.title}
          </h3>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-snug text-ink/80">{category.description}</p>

        {onlyCourse ? (
          <div className="mt-3 flex min-w-0 flex-wrap gap-1.5 text-xs font-display font-bold">
            <span
              className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1.5 leading-tight ${tone.badge}`}
            >
              <Icon name={onlyCourse.icon} size={13} /> {onlyCourse.title}
            </span>
            <span
              className={`max-w-full whitespace-normal rounded-full border px-2.5 py-1.5 leading-tight ${tone.badge}`}
            >
              {onlyCourse.duration.split(" · ")[0]} · {onlyCourse.price}
            </span>
          </div>
        ) : (
          <div className="mt-3 flex min-w-0 flex-wrap gap-1.5">
            {category.slugs.map((slug) => {
              const course = COURSES[slug];
              return (
                <Link
                  key={slug}
                  to={coursePath(slug)}
                  className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-display font-bold leading-tight transition hover:-translate-y-0.5 hover:shadow-sm ${tone.badge}`}
                >
                  <Icon name={course.icon} size={13} /> {course.title}
                </Link>
              );
            })}
          </div>
        )}

        <Link
          to={destination}
          hash={onlySlug ? undefined : category.id}
          className="mt-3.5 inline-flex min-h-10 w-full max-w-full items-center justify-center gap-1.5 rounded-full bg-brand-deep px-3 py-2 text-center text-sm font-display font-extrabold leading-tight text-white shadow-[0_10px_24px_-14px_rgba(8,70,51,.8)] transition hover:-translate-y-0.5 hover:bg-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
        >
          {onlyCourse ? `View ${onlyCourse.title}` : "Explore both programmes"}
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </article>
  );
}

function GlassCard({
  icon,
  title,
  pricing,
  children,
}: {
  icon: IconName;
  title: string;
  pricing: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl p-6 bg-white/10 backdrop-blur border border-cream/20">
      <div className="h-12 w-12 rounded-xl bg-cream/15 text-sunshine flex items-center justify-center mb-3">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="text-cream text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-white/95 text-[15px] leading-relaxed">{children}</p>
      <p className="text-sunshine font-display font-bold mt-3">{pricing}</p>
    </div>
  );
}

/* ---------- Hand-drawn pricing-card icons (consistent set) ----------
   24x24 viewBox, currentColor strokes, stroke-width 1.75, rounded caps.
   Built from scratch — no icon library used here. */

function IconFrame({ children, size = 24 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Small Batch — three figures clustered together
function BatchIcon() {
  return (
    <IconFrame>
      <circle cx="8" cy="8" r="2.4" />
      <circle cx="16" cy="8" r="2.4" />
      <circle cx="12" cy="6.5" r="2.4" />
      <path d="M3.5 18c.6-2.6 2.7-4 4.5-4s2.6.7 3.2 1.8" />
      <path d="M20.5 18c-.6-2.6-2.7-4-4.5-4s-2.6.7-3.2 1.8" />
      <path d="M7.5 19.5c.7-2.6 2.5-4 4.5-4s3.8 1.4 4.5 4" />
    </IconFrame>
  );
}

// Workplace English — one speaker presenting an idea clearly
function WorkplaceIcon() {
  return (
    <IconFrame>
      <circle cx="12" cy="8.5" r="2.8" />
      <path d="M6.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
      <path d="M12 2.5v1.6M4.4 5.4l1.1 1.1M19.6 5.4l-1.1 1.1M2.5 11.5h1.6M19.9 11.5h1.6" />
    </IconFrame>
  );
}

// Free Demo — ticket with a play button
function FreeDemoIcon() {
  return (
    <IconFrame>
      <path d="M3.5 8.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v2a2 2 0 0 0 0 3v2a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 15.5v-2a2 2 0 0 0 0-3z" />
      <path d="M10.5 9.5v5l4-2.5z" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

// Small check used in feature lists
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12.5l4.2 4.2L19 7" />
    </svg>
  );
}
