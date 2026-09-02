import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { COURSES } from "@/lib/courses";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/Reveal";
import { PAGES, abs, pageHead, COURSE_SEO } from "@/lib/seo";
import { COURSE_CATEGORIES, COURSE_SLUGS, type CourseSlug } from "@/lib/course-categories";

type CoursePath = `/course-${CourseSlug}`;

export const Route = createFileRoute("/english-career")({
  component: Page,
  head: () => {
    const page = PAGES["/english-career"];
    const head = pageHead("/english-career");
    // Course hub: an ItemList of the six courses gives Google (and AI answer
    // engines) the whole catalogue with prices from a single fetch.
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: page.title,
        description: page.description,
        numberOfItems: COURSE_SLUGS.length,
        itemListElement: COURSE_SLUGS.map((slug, i) => {
          const c = COURSES[slug];
          return {
            "@type": "ListItem",
            position: i + 1,
            url: abs(`/course-${slug}`),
            name: COURSE_SEO[slug]?.title ?? c.title,
            description: c.metaDescription,
          };
        }),
      }),
    });
    return head;
  },
});

function Page() {
  const wa =
    "Hi, I am interested in the English & Career track. Please help me choose the right course.";
  return (
    <Layout waMessage={wa} footerImage={IMG.groupClass}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage src={IMG.speaking} alt="English class India" fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-brand-deep/85 to-[#8F332A]/80" />
        </div>
        <div className="container-x py-14 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="text-cream min-w-0 w-full">
            <span className="eyebrow eyebrow-white">
              <Icon name="mic" size={14} /> 6 Programmes · ₹999/mo · 7 Years · 500+
            </span>
            <h1 className="mt-4 text-3xl md:text-6xl text-cream leading-[1.05]">
              6 Live Programmes · From ₹999/mo
              <br />
              <span className="text-sunshine">7 Years · 500+ Learners · 11 States</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white">
              4 tracks. Named teacher. Up to 2 sessions/week. Career Counselling 3 × 60-min 1:1 for
              ₹999 total. West Bengal, Delhi, Maharashtra, South India. ₹0 demo.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <WaButton message={wa} variant="sun" size="lg">
                Free Demo on WhatsApp
              </WaButton>
              <WaButton
                message="Hi, please send me pricing for all English & Career courses."
                variant="wa"
                size="lg"
              >
                Get All Pricing
              </WaButton>
            </div>
          </div>
          <div className="w-full min-w-0 flex justify-center lg:block">
            <div className="relative w-full max-w-[320px] lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sunshine/30 blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-coral/30 blur-3xl" />
              <SnapshotCard
                badge="Live · English Track"
                eyebrow="Whole track from"
                headline={{ big: "₹999", suffix: "/month" }}
                subnote="Monthly billing · GST included · UPI accepted"
                rows={[
                  {
                    tone: "brand",
                    icon: SnapIcons.book,
                    big: "6 courses",
                    small: "Speaking · Workplace · IELTS · Career",
                  },
                  {
                    tone: "indigo",
                    icon: SnapIcons.people,
                    big: "Max 8",
                    small: "In every English course batch",
                  },
                  {
                    tone: "coral",
                    icon: SnapIcons.spark,
                    big: "Gamified",
                    small: "Live polls · roleplays · debates",
                  },
                ]}
                footer="Message Anytime · Replies 09:00–12:00 IST"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Four Clear Categories"
            title="6 Programmes · Max 8 · From ₹999/mo"
            subtitle="Spoken English, Workplace, IELTS and 1:1 Career Guidance — pick the outcome, then the fee and duration."
          />
          <div className="space-y-10">
            {COURSE_CATEGORIES.map((group) => (
              <section
                key={group.title}
                id={group.id}
                aria-labelledby={`${group.id}-title`}
                className="scroll-mt-28"
              >
                <div className="mb-5 flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand-deep">
                    <Icon name={group.icon} size={22} />
                  </span>
                  <div>
                    <h2
                      id={`${group.id}-title`}
                      className="text-2xl font-display font-extrabold text-ink"
                    >
                      {group.title}
                    </h2>
                    <p className="mt-1 text-ink/80">{group.description}</p>
                  </div>
                </div>
                <Reveal stagger className="grid max-w-5xl items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-5">
                  {group.slugs.map((s) => {
                    const c = COURSES[s];
                    return (
                      <Link
                        key={s}
                        to={`/course-${s}` as CoursePath}
                        className="group card-soft flex h-full min-w-0 flex-col transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
                      >
                        <SmartImage
                          src={c.heroImage}
                          alt={c.title}
                          className="mb-3 w-full rounded-xl"
                          ratio="4/3"
                          imgClassName="group-hover:scale-105 transition duration-500"
                          position="center 22%"
                          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                        />
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="h-9 w-9 rounded-xl bg-brand-soft text-brand-deep flex items-center justify-center">
                            <Icon name={c.icon} size={20} />
                          </span>
                          <span className="pill bg-sunshine/15 text-[#6B4A00] border-sunshine/40">
                            {c.price}
                          </span>
                          <span className="pill bg-brand-soft text-brand-deep">{c.duration}</span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-ink">{c.title}</h3>
                        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink/85">
                          {c.tagline}
                        </p>
                        <span className="syllabus-cta mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 text-sm font-display font-bold text-brand-deep transition group-hover:bg-brand group-hover:text-white group-active:bg-brand group-active:text-white group-focus-within:bg-brand group-focus-within:text-white">
                          View Full Syllabus <Icon name="arrow-right" size={14} />
                        </span>
                      </Link>
                    );
                  })}
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={PAGES["/english-career"].faqs ?? []}
        eyebrow="Course FAQs"
        title="Choosing Between Our Six Courses"
        subtitle="Not sure which one fits? Start here."
        waMessage="Hi, I am not sure which course fits me. Can you help me choose?"
      />

      <section className="section bg-brand-deep">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <SmartImage
            src={IMG.womanOffice}
            alt="Indian professional"
            className="rounded-3xl shadow-2xl h-[360px] w-full"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="text-cream">
            <h2 className="text-cream text-3xl md:text-4xl">Not sure which course fits?</h2>
            <p className="mt-3 text-white/95">
              Tell us your goal — interview, abroad study, office promotion, daily confidence —
              we'll recommend the right course during 09:00–12:00 IST on WhatsApp.
            </p>
            <div className="mt-5">
              <WaButton message={wa} variant="sun" size="lg">
                Get My Recommendation
              </WaButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
