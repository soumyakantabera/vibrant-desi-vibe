import { COURSES } from "@/lib/courses";
import { courseFaqs } from "@/lib/course-seo";
import { COURSE_FEE } from "@/lib/fees";
import { faqAnchor, moduleAnchor, monthAnchor } from "@/lib/anchors";

/**
 * Deep links into every course page — one link per section, roadmap month,
 * syllabus module and FAQ question — built from the same data the page
 * renders, so every link lands on a real anchor. Used by /answers, llms.txt
 * and llms.json. The full site-wide list (every guide heading too) is
 * generated from the rendered HTML into /llms-anchors.txt at build time.
 */

export const DEEP_LINK_COURSES = [
  "spoken-english",
  "spoken-english-hindi",
  "spoken-english-marathi",
  "intermediate-english",
  "interactive-speaking",
  "interview-preparation",
] as const;

export type DeepLink = {
  label: string;
  href: string;
  kind: "section" | "month" | "module" | "faq";
};

export function courseDeepLinks(slug: string): {
  slug: string;
  title: string;
  path: string;
  price: string;
  links: DeepLink[];
} | null {
  const d = COURSES[slug];
  if (!d) return null;
  const path = `/course-${slug}`;
  const at = (id: string) => `${path}#${id}`;
  const feeKey = d.feeSlug ?? d.slug;
  const links: DeepLink[] = [
    { label: "Overview", href: at("overview"), kind: "section" },
    { label: `Fee: ${d.price}, ${d.duration}`, href: at("fees"), kind: "section" },
  ];
  if (d.native) {
    links.push({
      label: d.native.lang === "hi" ? "In Hindi (हिंदी में)" : "In Marathi (मराठीत)",
      href: at(d.native.lang === "hi" ? "hindi" : "marathi"),
      kind: "section",
    });
  }
  links.push({ label: "What you will be able to do", href: at("outcomes"), kind: "section" });
  if (d.visuals) {
    links.push({ label: "What one class looks like", href: at("class-split"), kind: "section" });
    links.push({ label: "Month-by-month roadmap", href: at("roadmap"), kind: "section" });
    for (const p of d.visuals.roadmap) {
      const when = p.from === p.to ? `Month ${p.from}` : `Months ${p.from}–${p.to}`;
      links.push({ label: `${when}: ${p.title}`, href: at(monthAnchor(p.from)), kind: "month" });
    }
    links.push({ label: "Skills coverage map", href: at("skills"), kind: "section" });
  }
  if (feeKey in COURSE_FEE) {
    links.push({ label: "What the monthly fee includes", href: at("included"), kind: "section" });
  }
  links.push({ label: "Full syllabus", href: at("syllabus"), kind: "section" });
  for (const m of d.modules) {
    links.push({ label: `Syllabus: ${m.title}`, href: at(moduleAnchor(m.title)), kind: "module" });
  }
  if (d.testimonials?.length) {
    links.push({ label: "Learner stories", href: at("stories"), kind: "section" });
  }
  links.push({ label: "Questions and answers", href: at("faq"), kind: "section" });
  for (const f of courseFaqs(d)) {
    links.push({ label: f.q, href: at(faqAnchor(f.q)), kind: "faq" });
  }
  return { slug, title: d.title, path, price: d.price, links };
}

export function allCourseDeepLinks() {
  return DEEP_LINK_COURSES.map(courseDeepLinks).filter(
    (c): c is NonNullable<ReturnType<typeof courseDeepLinks>> => c !== null,
  );
}

/** Answer pages and language guides, linked by their short-answer box. */
export const ANSWER_PAGES: { label: string; href: string }[] = [
  { label: "Is Learn With Smile genuine?", href: "/is-learn-with-smile-genuine#short-answer" },
  { label: "How do I join Learn With Smile?", href: "/how-to-join-learn-with-smile#short-answer" },
  {
    label: "What happens in one live class?",
    href: "/what-happens-in-a-live-english-class#short-answer",
  },
  { label: "Spoken English in Hindi (हिंदी)", href: "/spoken-english-in-hindi" },
  { label: "Spoken English in Bengali (বাংলা)", href: "/spoken-english-in-bengali" },
  {
    label: "Spoken English for beginners, from zero",
    href: "/spoken-english-for-beginners-india#short-answer",
  },
  { label: "Which class do I need?", href: "/spoken-business-or-interactive-english" },
  { label: "Fees, compared", href: "/english-class-fees-india#our-fees-in-full" },
  {
    label: "Before you pay any institute: 10 checks",
    href: "/before-you-pay-spoken-english-course#the-10-checks-before-you-pay",
  },
  { label: "Free consultation — what it is", href: "/free-consultation#faq" },
];
