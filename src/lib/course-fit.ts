/**
 * The course-fit check: what each course demands of the learner, who should not
 * join, and the five facts to send on WhatsApp.
 *
 * Why it exists
 * -------------
 * The site answered "what will I learn?" well and "what will this cost me in
 * time?" nowhere. The result was WhatsApp chats from people who had not
 * thought about two fixed slots a week, or who wanted a certificate, 1:1
 * lessons or fluency in 30 days. This block sits at the end of every blog post
 * and guide so the reader sees the commitment before the chat button, and the
 * first message arrives with the facts a teacher needs to place them.
 *
 * Numbers are read from COURSES (fees, durations) so they cannot drift from the
 * course pages. Research behind the time figures (Cambridge guided learning
 * hours, completion data): research_notes/market-research-serious-learners-nov-2026.md.
 *
 * Kept free of Vite-only imports: llms.ts and the prerender read it.
 */
import { COURSES } from "@/lib/courses";

export const FIT_COURSE_SLUGS = [
  "spoken-english",
  "intermediate-english",
  "interactive-speaking",
  "interview-preparation",
] as const;
export type FitCourseSlug = (typeof FIT_COURSE_SLUGS)[number];

/** Who each room is for, in one line the learner can test themselves against. */
const FIT_LINE: Record<FitCourseSlug, string> = {
  "spoken-english":
    "You cannot yet hold a basic conversation or introduce yourself for 30 seconds.",
  "intermediate-english":
    "You speak in simple sentences, with tense errors, fillers and broken flow.",
  "interactive-speaking": "You know the English and freeze in meetings, calls or debates.",
  "interview-preparation": "You can talk, and still lose HR rounds, STAR answers or your intro.",
};

function months(slug: FitCourseSlug): number {
  const m = COURSES[slug].duration.match(/(\d+)\s*month/i);
  return m ? Number(m[1]) : 0;
}

function monthlyInr(slug: FitCourseSlug): number {
  return Number(COURSES[slug].price.replace(/[^\d]/g, ""));
}

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export type FitRow = {
  slug: FitCourseSlug;
  path: string;
  title: string;
  forLine: string;
  months: number;
  monthly: string;
  total: string;
};

export function fitRow(slug: FitCourseSlug): FitRow {
  const m = months(slug);
  return {
    slug,
    path: `/course-${slug}`,
    title: COURSES[slug].title,
    forLine: FIT_LINE[slug],
    months: m,
    monthly: inr(monthlyInr(slug)),
    total: inr(monthlyInr(slug) * m),
  };
}

/** What every room asks of the learner. Same for all four. */
export const FIT_DEMANDS = [
  "Up to two 90-minute live classes a week, in a fixed afternoon, evening or night IST slot.",
  "15–20 minutes of speaking practice on the days between classes. Live classes give about 12 hours a month; the rest of the progress happens in between.",
  "Speaking out loud in front of about 5 other adults in every class, mistakes included.",
  "The whole course length. You pay one month at a time, but the plan needs the months.",
];

/** Who should not message us for a course. */
export const FIT_NOT_FOR = [
  "Children under 15. Batches are adults only.",
  "Anyone who needs an IELTS, PTE or TOEFL score, or a certificate.",
  "Anyone who wants 1:1 private lessons or a walk-in classroom.",
  "Anyone expecting fluency in 30 days, or a promised job, salary or band.",
];

/** The five facts that let a teacher answer the first message with one course. */
export const FIT_SEND = [
  "Your level-test score, or one line on what you can and cannot say today",
  "The one situation you want to handle in English",
  "Your deadline, if any",
  "Your IST slot: afternoon, evening or night",
  "English only, or Hindi or Bengali explanations",
];

/**
 * The first WhatsApp message: one tap, no blanks to fill. It says the learner
 * has read what the course asks and is ready, so the chat opens on commitment
 * and the teacher asks the rest.
 */
export const FIT_WA_MESSAGE =
  "Hi, I've read what it takes: two live classes a week, daily practice. I'm in. Which course and batch fit me?";

/**
 * Which rooms a page is about, from its path. Course and blog pages are passed
 * in explicitly; for guides the path is a reliable signal because every guide
 * URL names its audience or situation.
 */
export function fitSlugsForPath(path: string): FitCourseSlug[] {
  const p = path.toLowerCase();
  if (/interview|placement|bank-po|government-job/.test(p)) {
    return ["interview-preparation", "interactive-speaking"];
  }
  if (/freshers/.test(p)) return ["spoken-english", "interview-preparation"];
  if (/intermediate/.test(p)) return ["intermediate-english", "interactive-speaking"];
  if (
    /presentation|client-call|it-professional|software|data-analyst|hesitation|interactive|business/.test(
      p,
    )
  ) {
    return ["interactive-speaking", "intermediate-english"];
  }
  if (/workplace|working-professional/.test(p)) {
    return ["intermediate-english", "interactive-speaking"];
  }
  if (/beginner|homemaker|hindi|bengali|bpo/.test(p)) {
    return ["spoken-english", "interactive-speaking"];
  }
  return [...FIT_COURSE_SLUGS];
}

/** Keep only the four rooms from a list of course paths (blog relatedCourses). */
export function fitSlugsFromCoursePaths(paths: string[]): FitCourseSlug[] {
  const slugs = paths
    .map((p) => p.replace(/^\/course-/, ""))
    .filter((s): s is FitCourseSlug => (FIT_COURSE_SLUGS as readonly string[]).includes(s));
  return slugs.length ? slugs : [...FIT_COURSE_SLUGS];
}
