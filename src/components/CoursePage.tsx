import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon, type IconName } from "@/components/Icon";
import { TestimonialSlider, type Testimonial } from "@/components/TestimonialSlider";
import { SnapshotCard, SnapIcons } from "@/components/SnapshotCard";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/Reveal";
import {
  COURSE_SEO,
  SITE_NAME,
  SITE_URL,
  abs,
  breadcrumbLd,
  buildHead,
  faqLd,
  webPageLd,
} from "@/lib/seo";

export type Module = { title: string; items: string[] };
export type Project = { title: string; brief: string; deliverable: string };

export type CourseData = {
  slug: string;
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
  format: string;
  price: string;
  outcomes: string[];
  modules: Module[];
  projects?: Project[];
  faqs?: { q: string; a: string }[];
  testimonials?: Testimonial[];
  metaDescription: string;
};

const RELATED_GUIDES: Record<string, { href: string; title: string; description: string }[]> = {
  "spoken-english": [
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
  "business-english": [
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
      description: "Morning, evening and weekend IST. Live class; recording is revision.",
    },
    {
      href: "/workplace-english-course-online-india",
      title: "Workplace English course guide",
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
      description: "Clearer workplace English without inflated or outdated wording.",
    },
    {
      href: "/blog/bpo-to-client-facing-role-roadmap",
      title: "BPO to client-facing role roadmap",
      description: "A practical communication and career progression plan.",
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
  ],
  ielts: [
    {
      href: "/blog/band-7-writing-4-paragraph-template",
      title: "IELTS Band 7 four-paragraph writing template",
      description: "A reusable structure for clearer Task 2 essays.",
    },
  ],
  "interview-prep": [
    {
      href: "/blog/tell-me-about-yourself-in-60-seconds",
      title: "Answer ‘Tell me about yourself’ in 60 seconds",
      description: "Build an interview introduction that is specific and easy to remember.",
    },
  ],
  "career-counselling": [
    {
      href: "/blog/bpo-to-client-facing-role-roadmap",
      title: "BPO to client-facing role roadmap",
      description: "A concrete example of turning communication growth into a career plan.",
    },
  ],
};

const TEACHER_NOTE: Record<string, string> = {
  "spoken-english": "Same teacher every class. They hear you speak — and they remember your words.",
  "business-english":
    "The same teacher on every workplace hour. They learn how you sound on a client call.",
  "interactive-speaking": "You talk every hour. Your teacher tracks hesitation week by week.",
  "interview-prep": "Mocks with a teacher who already knows your story before the board does.",
  ielts: "Speaking labs with a teacher who marks your actual mistakes.",
  "career-counselling": "Three 1:1 sessions after they have read your background.",
};

export function CoursePage({ data }: { data: CourseData }) {
  const isCareerCounselling = data.slug === "career-counselling";
  const teacherNote = TEACHER_NOTE[data.slug];
  const waPrimary = `Hi, I am interested in the ${data.title} course. Please share batch details and a free demo slot.`;
  const waSyllabus = `Hi, can you send me the full syllabus and pricing for ${data.title}?`;
  const priceMatch = data.price.match(/(₹[\d,]+)\s*(.*)/);
  const faqs = courseFaqs(data);
  const snapshot = (
    <SnapshotCard
      badge={`Live · ${data.format}`}
      eyebrow="Course fee starts at"
      headline={
        priceMatch
          ? { big: priceMatch[1], suffix: priceMatch[2] ? ` ${priceMatch[2]}` : undefined }
          : { big: data.price }
      }
      subnote={`${data.duration} · GST included`}
      rows={[
        { tone: "brand", icon: SnapIcons.cap, big: "500+", small: "Learners taught across India" },
        {
          tone: "indigo",
          icon: SnapIcons.calendar,
          big: "7 yrs",
          small: "Live teaching experience",
        },
        {
          tone: "coral",
          icon: SnapIcons.people,
          big: isCareerCounselling ? "1:1" : "Approx. 6 learners",
          small: isCareerCounselling ? "Career guidance sessions" : "In this live course batch",
        },
      ]}
      footer="Message Anytime · Replies 09:00–12:00 IST"
    />
  );
  return (
    <Layout waMessage={waPrimary} footerImage={data.footerImage}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage src={data.heroImage} alt={data.title} fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-brand-deep/75 to-indigo-pop/55" />
        </div>
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="text-cream">
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
            <p className="mt-4 text-lg text-white max-w-2xl">{data.tagline}</p>
            {teacherNote && <p className="mt-2 text-base text-white/90">{teacherNote}</p>}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunshine text-ink font-bold">
                  <Icon name="rupee" size={14} />
                  {data.price}
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
              {data.durationQualifier && (
                <div className="flex flex-wrap">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">
                    <Icon name="compass" size={14} className="text-sage" />
                    {data.durationQualifier}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-3 text-sm text-white/90">
              ✓ 100% online live · ✓ Flexible morning · evening · weekend slots · ✓ Customised
              curriculum · ✓ Pan-India · Based in Kolkata
            </p>
            <div className="mt-7 flex flex-wrap gap-3" data-cta-location="hero">
              <WaButton message={waPrimary} variant="sun" size="lg">
                Book a Free Demo
              </WaButton>
              <WaButton message={waSyllabus} variant="wa" size="lg">
                Get Full Syllabus
              </WaButton>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sunshine/30 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-coral/30 blur-3xl" />
            {snapshot}
          </div>
        </div>
      </section>

      {/* Mobile snapshot card */}
      <section className="lg:hidden bg-brand-deep/95 py-8">
        <div className="container-x flex justify-center">
          <div className="relative w-full max-w-[320px]">
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sunshine/30 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-coral/30 blur-3xl" />
            {snapshot}
          </div>
        </div>
      </section>

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
              <WaButton message={waPrimary} size="lg">
                Reserve My Free Demo Slot
              </WaButton>
            </div>
          </div>
        </div>
      </section>

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
            <WaButton message={waSyllabus} variant="white">
              Send Me the Syllabus
            </WaButton>
          </div>
        </div>
      </section>

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
                  className="card-soft bg-gradient-to-br from-white to-sunshine/10 border-sunshine/30"
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
              subtitle="Use these practical lessons before your demo or between live sessions."
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
                subtitle="Anything else? Message anytime — WhatsApp replies during 09:00–12:00 IST."
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

      {/* FINAL CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden" data-cta-location="final_cta">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x text-center text-cream">
          <h2 className="text-cream text-3xl md:text-4xl">Ready to start {data.title}?</h2>
          <p className="mt-3 text-white max-w-xl mx-auto">
            Tell us your goal — we'll set up your free live demo on the next available slot.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <WaButton message={waPrimary} variant="sun" size="lg">
              🎓 Book Free Demo
            </WaButton>
            <WaButton message={waSyllabus} variant="white" size="lg">
              Get Pricing on WhatsApp
            </WaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function parsePrice(p: string): number | null {
  const m = p.replace(/[, ]/g, "").match(/\u20b9(\d+)/);
  return m ? Number(m[1]) : null;
}

function workloadISO(d: string): string | undefined {
  // Rough mapping to Google's courseWorkload (ISO 8601 duration).
  const months = d.match(/(\d+)\s*month/i);
  const weeks = d.match(/(\d+)\s*week/i);
  if (months) return `P${months[1]}M`;
  if (weeks) return `P${weeks[1]}W`;
  if (/session/i.test(d)) return "PT3H";
  return undefined;
}

/**
 * FAQs shown on the page and fed to FAQPage schema: the course author's own
 * questions plus the AI-assistant-phrased ones from src/lib/seo.ts. Both the
 * visible accordion and the JSON-LD must render the same list, or Google flags
 * the structured data as not matching the page.
 */
export function courseFaqs(d: CourseData) {
  return [...(d.faqs ?? []), ...(COURSE_SEO[d.slug]?.extraFaqs ?? [])];
}

export function courseSeo(d: CourseData) {
  const path = `/course-${d.slug}`;
  const url = abs(path);
  const extra = COURSE_SEO[d.slug];
  const price = parsePrice(d.price);
  const workload = workloadISO(d.duration);
  const faqs = courseFaqs(d);
  const ogImage = extra?.ogImage ?? "/og/default.jpg";

  // Batch days and total sessions vary. Do not turn the visible maximum of two
  // classes per week into an exact repeatCount or invent a future batch date.
  // Course list markup does not require a made-up recurring schedule.
  const courseInstance: Record<string, unknown> = {
    "@type": "CourseInstance",
    courseMode: "Online",
    inLanguage: "en-IN",
    location: { "@type": "VirtualLocation", url },
    maximumAttendeeCapacity: d.slug === "career-counselling" ? 1 : 6,
    instructor: {
      "@type": "Person",
      "@id": `${abs("/founder")}#person`,
      name: "Sunanda Dey",
      // Links to the Person entity described on /founder, rather than leaving a
      // bare name string that resolves to nothing.
      url: abs("/founder"),
      worksFor: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
      },
    },
  };

  const offers: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    category: d.format.includes("1:1") ? "Online 1:1 course" : "Online batch course",
    url,
    validFrom: "2026-01-01",
  };
  if (price !== null) offers.price = price;

  const jsonLd: unknown[] = [
    webPageLd({
      path,
      title: extra?.title ?? d.title,
      description: extra?.description ?? d.metaDescription,
    }),
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${url}#course`,
      name: d.title,
      alternateName: extra?.title,
      description: extra?.description ?? d.metaDescription,
      url,
      image: [abs(ogImage)],
      inLanguage: "en-IN",
      educationalLevel: d.slug === "spoken-english" ? "Beginner" : "Intermediate",
      teaches: d.outcomes,
      timeRequired: workload,
      isAccessibleForFree: false,
      provider: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      offers,
      hasCourseInstance: courseInstance,
      syllabusSections: d.modules.map((m, i) => ({
        "@type": "Syllabus",
        position: i + 1,
        name: m.title,
        description: m.items.join(". "),
      })),
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "English & Career Courses", path: "/english-career" },
      { name: extra?.shortTitle ?? d.title, path },
    ]),
  ];

  if (faqs.length) jsonLd.push(faqLd(faqs));

  return buildHead({
    path,
    // Hand-written in COURSE_SEO rather than assembled here: the generated
    // "<title> Online \u2014 <price>, Approx. 6 Learners per Batch | Learn With Smile" form ran
    // to 70\u201387 characters and truncated in the SERP on all six courses.
    title: extra?.title ?? d.title,
    description: extra?.description ?? d.metaDescription,
    ogImage,
    jsonLd,
  });
}
