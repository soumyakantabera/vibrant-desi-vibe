import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Deferred } from "@/components/Deferred";
import { FaqSection } from "@/components/FaqSection";
import {
  SectionHeader,
  WaButton,
  MottoBand,
  GuidesStrip,
  CoverageStrip,
} from "@/components/ui-bits";
import { Icon, type IconName } from "@/components/Icon";
import { BrandIcon } from "@/components/BrandIcon";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/Reveal";
import { PaymentTrust } from "@/components/PaymentTrust";
import { CourseLadder } from "@/components/CourseVisuals";
import { BoloSection } from "@/components/bolo/BoloSections";
import { WhyDifferent } from "@/components/WhyDifferent";
import { IMG, imageSources } from "@/lib/images";
import { RATING, RATING_DISPLAY, pageHead, PAGES } from "@/lib/seo";
import {
  COURSE_CATEGORIES,
  type CategoryTone,
  type CourseCategory,
  type CourseSlug,
} from "@/lib/course-categories";
import { COURSES } from "@/lib/courses";
import { waLink, withPageTag, DEMO_CTA, DEMO_MSG, CHAT_CTA, CHAT_MSG } from "@/lib/whatsapp";
import { FeeText, MarketCopy, feeHeadline } from "@/components/FeeText";
import { intlUnit } from "@/lib/intl-fees";
import {
  DemoStrip,
  LaunchOfferBand,
  PackageStrip,
  PricingGrid,
} from "@/components/package/PackageSections";
import { GoogleProof, MarketGap } from "@/components/package/MarketSections";

const heroSources = imageSources(IMG.heroClass);

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
  return (
    <Layout
      waMessage="Hi, I'd like to book a free group consultation for spoken English. Please send me the booking link."
      footerImage={IMG.graduation}
    >
      {/* HERO */}
      <section className="hero-teal relative overflow-hidden">
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
          <div className="absolute inset-0 hero-veil" />
        </div>
        {/*
          Three grid items in reading order: headline, the rest of the copy,
          then the pricing card. Phones show them in that order (card below
          the copy, as before); on desktop the copy shares the left column and
          the card is lifted to the top of the right one.
        */}
        <div className="container-x grid grid-cols-1 items-start pt-6 pb-10 md:pt-8 md:pb-12 lg:grid-cols-[1.3fr_1fr] lg:gap-x-10 lg:pt-7 lg:pb-14">
          <div className="hero-bob min-w-0 text-cream lg:col-start-1 lg:row-start-1">
            <span className="eyebrow eyebrow-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>{" "}
              Live online spoken English classes · about 6 a batch · 7 years
            </span>
            <h1 className="mt-3 font-extrabold text-cream">
              Speak Better English.
              <br />
              <span className="text-sunshine">Live Twice a Week.</span>
              <br />
              Practise Every Day.
            </h1>
          </div>
          <div className="hero-bob min-w-0 text-cream lg:col-start-1 lg:row-start-2">
            <p className="mt-3 max-w-xl text-base text-white md:text-lg">
              Real teachers. Small batches. The complete package from{" "}
              <strong className="text-sunshine">
                <FeeText text="₹999/mo" />
              </strong>
              <MarketCopy inr=", inclusive of taxes." usd={`. ${intlUnit()}.`} /> For everyone:
              adults, professionals and graduates.
            </p>
            <div
              className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3"
              data-cta-location="hero"
            >
              <WaButton
                message={CHAT_MSG}
                size="lg"
                className="w-full sm:w-auto justify-center"
                goal="whatsapp_chat"
              >
                {CHAT_CTA}
              </WaButton>
              <WaButton
                message={DEMO_MSG}
                variant="sun"
                size="lg"
                className="w-full sm:w-auto justify-center"
                goal="free_consultation"
              >
                {DEMO_CTA}
              </WaButton>
            </div>
            <p className="mt-3 text-sm font-semibold text-sunshine">
              Tell us your goal. We reply with the right course and the fee — no pressure, no
              payment to book.
            </p>
            <p className="mt-2 text-sm text-white">
              Want to sit in a real class first?{" "}
              <Link to="/course-demo-session" className="font-bold underline">
                <FeeText text="Book the ₹199 Demo Class" />
              </Link>{" "}
              — adjusted in your fee if you enrol.
            </p>
            <PaymentTrust tone="dark" className="mt-4" />
            <p className="mt-3 text-sm font-semibold text-white/95">
              Message anytime. We reply 10am–midnight IST every day.
            </p>
            <div className="mt-5 -mx-4 sm:mx-0 px-4 sm:px-0 flex sm:flex-wrap flex-nowrap overflow-x-auto sm:overflow-visible snap-x gap-2 sm:gap-3 text-sm text-white/95 no-scrollbar">
              {[
                "7 years · about 6 a batch · pan-India & now worldwide",
                "From ₹999/month, inclusive of taxes",
                "500+ Learners",
                "Bolo app: daily practice + weekly teacher review",
              ].map((s) => (
                <span
                  key={s}
                  className="snap-start shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20 whitespace-nowrap"
                >
                  <Icon name="check" size={14} className="text-sage" />
                  <FeeText text={s} />
                </span>
              ))}
            </div>
          </div>
          <div className="mt-7 w-full min-w-0 flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:block lg:self-start">
            <div className="relative w-full max-w-[28rem] lg:max-w-none">
              <SnapshotCard
                eyebrow="Complete package from"
                headline={feeHeadline("₹999/month", "spoken-english")}
                subnote={
                  <MarketCopy
                    inr="Billed monthly · inclusive of taxes · no auto-debit"
                    usd={`${intlUnit()} · billed monthly`}
                  />
                }
                rows={[
                  {
                    tone: "brand",
                    icon: SnapIcons.cap,
                    big: "Up to 8",
                    small: "Live classes a month, 90 min each",
                  },
                  {
                    tone: "indigo",
                    icon: SnapIcons.calendar,
                    big: "Daily",
                    small: "Practice in the Bolo app, with a streak",
                  },
                  {
                    tone: "violet",
                    icon: SnapIcons.people,
                    big: "Weekly",
                    small: "Teacher review of your reading & speaking",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <LaunchOfferBand />
      <PackageStrip />

      <CoverageStrip />

      <Deferred id="home-courses">
        {/* COURSE CATEGORIES */}
        <section className="section">
          <div className="container-x">
            <SectionHeader
              eyebrow="What We Teach"
              title="Choose the Goal You Need Now"
              subtitle="Basic Spoken, Intermediate Spoken, Interactive Speaking, Business English and Interview Preparation. Start with the result you need — not a confusing course name."
            />
            <Reveal
              stagger
              className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:max-w-3xl lg:gap-4"
            >
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
                  Message your goal anytime — we recommend the best-fit course when admissions
                  replies during 10am–midnight IST every day.
                </p>
              </div>
              <WaButton
                message="Hi, I want a free consultation to choose my spoken English course."
                variant="wa"
                size="md"
              >
                {CHAT_CTA}
              </WaButton>
            </div>
          </div>
        </section>

        <CourseLadder />
      </Deferred>
      <Deferred id="home-bolo">
        {/* THE BOLO APP — practice, video lessons, weekly review */}
        <BoloSection />
      </Deferred>

      <Deferred id="home-different">
        {/* WHY WE'RE DIFFERENT — live class + app reel + all-in-one at ₹999 */}
        {/* The scored matrix in MarketGap below is the homepage comparison. */}
        <WhyDifferent table={false} />

        <GuidesStrip />
      </Deferred>

      <Deferred id="home-how">
        {/* HOW IT WORKS */}
        <section className="hero-light relative section overflow-hidden">
          <div className="absolute inset-0 z-0">
            <SmartImage src={IMG.liveClass} alt="Live online class in India" fill sizes="100vw" />
            <div className="absolute inset-0 hero-veil" />
          </div>
          <div className="container-x">
            <SectionHeader
              eyebrowTone="white"
              eyebrow="The Process"
              title={<span className="text-cream">How Live Classes Work</span>}
              invert
              subtitle={
                <span className="text-white/90">
                  One named teacher. Up to 2 classes a week. Every session live — never a recording
                  as the class. Batches of approximately 6 learners mean you still get the mic.
                </span>
              }
            />
            <Reveal stagger className="grid md:grid-cols-2 gap-5 mb-12">
              <GlassCard
                icon="users"
                title="Small Live Batches"
                pricing={<FeeText text="Approx. 6 learners · From ₹999/mo, inclusive of taxes" />}
              >
                Scheduled English cohorts usually have around 6 learners. You practise with
                classmates, speak in every class and receive corrections during the lesson.
              </GlassCard>
              <GlassCard icon="user" title="Direct Teacher Support" pricing="When Genuinely Needed">
                Questions are answered during class. Outside class, a learner can contact the
                teacher directly when genuine help is needed; this is not a scheduled 1:1 feedback
                session.
              </GlassCard>
            </Reveal>
            <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  n: 1,
                  lbl: "Choose Course",
                  sub: "5 programmes · from ₹999/mo, inclusive of taxes",
                  c: "sunshine",
                },
                { n: 2, lbl: "Share Your Goal", sub: "We match you in 1 message", c: "coral" },
                { n: 3, lbl: "WhatsApp Us", sub: "Replies 10am–midnight IST every day", c: "wa" },
                { n: 4, lbl: "Join a Class", sub: "Approx. 6 per batch", c: "sage" },
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
                  <div className="text-white/85 text-xs mt-1">
                    <FeeText text={s.sub} />
                  </div>
                </div>
              ))}
            </Reveal>
            <div className="text-center mt-10">
              <WaButton
                message="Hi, I'd like to book a free group consultation for spoken English. Please send me the booking link."
                variant="sun"
                size="lg"
              >
                {DEMO_CTA}
              </WaButton>
            </div>
          </div>
        </section>

        <MottoBand>
          "Speak Better English. <em className="text-sunshine">Build Future Together.</em>"
        </MottoBand>
      </Deferred>

      <Deferred id="home-market">
        {/* GOOGLE RATING + PROOF */}
        <GoogleProof />

        {/* MARKET */}
        <MarketGap />
      </Deferred>

      <Deferred id="home-pricing">
        {/* PRICING — placed next to the WhatsApp CTA so cost stays crystal clear */}
        <section id="pricing" className="section bg-cream scroll-mt-20" data-cta-location="pricing">
          <div className="container-x">
            <SectionHeader
              eyebrow={
                <MarketCopy inr="Affordable. Premium. Everything included." usd="Simple pricing" />
              }
              eyebrowTone="indigo"
              title={<FeeText text="From ₹999/mo · live classes and the Bolo app included" />}
              subtitle="Pay per month, inclusive of taxes. Up to 2 live classes/week in a batch of approximately 6, plus Bolo, the practice app with daily exercises, video lessons and a weekly teacher review. Same-week reschedule if a slot is free."
            />
            <PricingGrid />
            <DemoStrip />
            <div className="mt-7 text-center">
              <p className="text-sm text-ink/75">
                <MarketCopy
                  inr="All prices are in INR and inclusive of taxes."
                  usd={`These published figures are the international fee, in ${intlUnit()}, for learners outside India. They are the labeled fee, not a conversion of the India price.`}
                />
              </p>
              <div className="mt-3">
                <WaButton
                  message="Hi, I want a free consultation for spoken English, the fees and the next slot."
                  variant="wa"
                  size="sm"
                >
                  {CHAT_CTA}
                </WaButton>
              </div>
              <PaymentTrust tone="light" align="center" className="mt-5" />
            </div>
          </div>
        </section>
      </Deferred>

      <Deferred id="home-end">
        {/* START TODAY */}
        <section className="section bg-gradient-to-b from-cream to-brand-soft/40">
          <div className="container-x">
            <SectionHeader eyebrow="Enroll Today" title="Two Ways to Begin" />

            <Reveal stagger className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl p-8 md:p-10 bg-brand-deep text-cream relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-wa/20 rounded-full blur-3xl" />
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white mb-4 shadow-md overflow-hidden">
                  <BrandIcon name="whatsapp" size={36} />
                </div>
                <h3 className="text-cream text-2xl font-display font-extrabold mb-3">
                  Chat on WhatsApp
                </h3>
                <p className="text-white/95 leading-relaxed mb-6">
                  Tell us your goal in one message. We reply 10am–midnight IST every day and help
                  you pick a course.
                </p>
                <WaButton message={CHAT_MSG} size="lg">
                  {CHAT_CTA}
                </WaButton>
                <p className="text-xs text-white/80 mt-4">
                  Message anytime · Replies 10am–midnight IST every day · Phone is a fallback
                </p>
              </div>
              <a
                href={waLink(withPageTag(DEMO_MSG, "home"))}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-end group"
                data-cta-goal="free_consultation"
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
                    <Icon name="compass" size={22} /> {DEMO_CTA}
                  </h3>
                  <p className="text-cream/95 mb-4">
                    Ready when you are. Message us your goal — we reply 10am–midnight IST every day
                    with the course and fee that actually fit.
                  </p>
                  <span className="btn btn-sun btn-sm">
                    <Icon name="compass" size={14} /> {DEMO_CTA}{" "}
                    <Icon name="arrow-right" size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
            <PaymentTrust tone="light" align="center" className="mt-8" />
          </div>
        </section>

        <FaqSection
          faqs={PAGES["/"].faqs ?? []}
          eyebrow="Common Questions"
          title="Your Questions, Answered Plainly"
          subtitle="Fees, batch sizes, timelines and whether this actually works — answered plainly."
          waMessage="Hi, I'd like to book a free group consultation for spoken English. Please send me the booking link."
        />

        {/* GOOGLE MAPS — KOLKATA OUTLET (compact) */}
        <section className="py-12 pb-24 sm:pb-12 bg-white">
          <div className="container-x max-w-4xl">
            <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white grid md:grid-cols-[1fr_1.1fr]">
              <div className="relative h-56 md:h-auto min-h-[220px] bg-brand-soft">
                <iframe
                  title="Learn With Smile — registered office, Kolkata"
                  src="https://www.google.com/maps?q=75%2F2%2F4+Raja+Ram+Mohan+Roy+Road+Kolkata+700008&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col justify-center">
                <span className="eyebrow eyebrow-indigo w-fit">
                  <Icon name="globe" size={12} /> Live online across India · Office in Kolkata
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
                  · Registered office
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
                    href={RATING.readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sun btn-sm"
                  >
                    <Icon name="star" size={14} /> Read our Google reviews
                  </a>
                  <a
                    href={RATING.writeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Write a review
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Deferred>
    </Layout>
  );
}

const STORY_TONE = {
  amber: { box: "bg-amber-soft", chip: "bg-sunshine text-ink", title: "text-[#6A4A10]" },
  green: { box: "bg-brand-soft", chip: "bg-brand text-white", title: "text-brand-deep" },
  plum: { box: "bg-plum-soft", chip: "bg-plum text-white", title: "text-[#4E3470]" },
  blue: { box: "bg-slate-soft", chip: "bg-indigo-pop text-white", title: "text-[#1F3D63]" },
} as const;

const CATEGORY_TONES: Record<CategoryTone, { bar: string; icon: string; badge: string }> = {
  brand: {
    bar: "bg-brand",
    icon: "bg-brand-soft text-brand-deep",
    badge: "border-brand/25 bg-brand-soft text-brand-deep",
  },
  indigo: {
    bar: "bg-indigo-pop",
    icon: "bg-[#E3E9F1] text-indigo-pop",
    badge: "border-indigo-pop/25 bg-[#F2F5F9] text-[#4141A8]",
  },
  sun: {
    bar: "bg-[#B98A2E]",
    icon: "bg-[#F5ECD6] text-[#6A4A10]",
    badge: "border-sunshine/45 bg-[#FBF5E6] text-[#6A4A10]",
  },
  coral: {
    bar: "bg-[#A9503D]",
    icon: "bg-[#F8EEEA] text-[#8E3B2A]",
    badge: "border-coral/35 bg-[#FAF2EF] text-[#8B321F]",
  },
  play: {
    bar: "bg-gradient-to-r from-sunshine via-[#DDB061] to-coral",
    icon: "bg-[#F5ECD6] text-[#6A4A10]",
    badge: "border-sunshine/50 bg-[#FBF5E6] text-[#6A4A10]",
  },
};

function coursePath(slug: CourseSlug): `/course-${CourseSlug}` {
  return `/course-${slug}`;
}

function CategoryCard({ category }: { category: CourseCategory }) {
  const visual = COURSES[category.featuredSlug];
  const tone = CATEGORY_TONES[category.tone];
  const destination = "/english-career" as const;
  const cta =
    category.slugs.length === 2
      ? "Explore both programmes"
      : `Explore ${category.slugs.length} programmes`;
  const pill = `${category.slugs.length} programmes`;

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-[#DDE5DF] bg-white shadow-[0_14px_40px_-32px_rgba(8,70,51,.5)] transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_-30px_rgba(8,70,51,.55)]">
      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/9]">
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
          {pill}
        </span>
      </div>
      <div className={`h-1 ${tone.bar}`} />

      <div className="flex min-w-0 flex-col p-3 sm:p-3.5">
        <div className="flex items-center gap-2">
          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${tone.icon}`}>
            <Icon name={category.icon as IconName} size={16} />
          </span>
          <h3 className="font-display text-sm font-extrabold leading-tight text-ink lg:text-[15px]">
            {category.title}
          </h3>
        </div>

        <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-ink/80">
          {category.description}
        </p>

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

        <Link
          to={destination}
          hash={category.id}
          className="mt-3 inline-flex min-h-9 w-full max-w-full items-center justify-center gap-1.5 rounded-full bg-brand-deep px-3 py-1.5 text-center text-[13px] font-display font-extrabold leading-tight text-white shadow-[0_10px_24px_-14px_rgba(8,70,51,.8)] transition hover:-translate-y-0.5 hover:bg-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
        >
          {cta}
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
  pricing: React.ReactNode;
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

// Business English — one speaker presenting an idea clearly

// Small check used in feature lists
