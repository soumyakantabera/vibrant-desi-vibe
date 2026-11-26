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

/** A course page's slug as a fit slug; Hindi and Bengali editions are Basic. */
export function fitSlugForCourse(slug: string): FitCourseSlug | null {
  const base = slug.replace(/-(hindi|bengali)$/, "");
  return (FIT_COURSE_SLUGS as readonly string[]).includes(base) ? (base as FitCourseSlug) : null;
}

/** Keep only the four rooms from a list of course paths (blog relatedCourses). */
export function fitSlugsFromCoursePaths(paths: string[]): FitCourseSlug[] {
  const slugs = paths
    .map((p) => p.replace(/^\/course-/, ""))
    .filter((s): s is FitCourseSlug => (FIT_COURSE_SLUGS as readonly string[]).includes(s));
  return slugs.length ? slugs : [...FIT_COURSE_SLUGS];
}

/* ------------------------------------------------------------ set your goal */

/**
 * "Set your goal": the reader picks a goal, where they are today, a deadline,
 * an IST slot and an explanation language, and ticks that they can keep two
 * live slots a week. One course comes back, and the WhatsApp message carries
 * the answers instead of blanks. Goals mirror the level test (LEVEL_GOALS) so a
 * learner who did both sees the same words.
 */
export type FitGoal = "everyday" | "work" | "interview";
export type FitToday = "build" | "errors" | "freeze" | "judged";
export type FitDeadline = "none" | "1m" | "3m" | "later";
export type FitSlot = "afternoon" | "evening" | "night";
export type FitLang = "english" | "hindi" | "bengali";

export const FIT_GOALS: { id: FitGoal; label: string }[] = [
  { id: "everyday", label: "Everyday conversation and confidence" },
  { id: "work", label: "Meetings, client calls and office English" },
  { id: "interview", label: "Job interviews and HR rounds" },
];

export const FIT_TODAY: { id: FitToday; label: string }[] = [
  { id: "build", label: "I cannot build sentences yet" },
  { id: "errors", label: "I speak, with tense errors and fillers" },
  { id: "freeze", label: "I know the English and freeze" },
  { id: "judged", label: "I am fine until someone is judging me" },
];

export const FIT_DEADLINES: { id: FitDeadline; label: string; months: number | null }[] = [
  { id: "none", label: "No fixed date", months: null },
  { id: "1m", label: "Within a month", months: 1 },
  { id: "3m", label: "In 1–3 months", months: 3 },
  { id: "later", label: "3+ months away", months: null },
];

export const FIT_SLOTS: { id: FitSlot; label: string }[] = [
  { id: "afternoon", label: "Afternoon IST" },
  { id: "evening", label: "Evening IST" },
  { id: "night", label: "Night IST" },
];

export const FIT_LANGS: { id: FitLang; label: string }[] = [
  { id: "english", label: "English only" },
  { id: "hindi", label: "Hindi explanations" },
  { id: "bengali", label: "Bengali explanations" },
];

export type FitAnswers = {
  goal?: FitGoal;
  today?: FitToday;
  deadline?: FitDeadline;
  slot?: FitSlot;
  lang?: FitLang;
  committed?: boolean;
};

/** Same rules as the level test's roomFor(), expressed in the reader's words. */
export function courseForGoal(goal: FitGoal, today: FitToday): FitCourseSlug {
  if (today === "build") return "spoken-english";
  if (today === "errors") return goal === "work" ? "interactive-speaking" : "intermediate-english";
  return goal === "interview" ? "interview-preparation" : "interactive-speaking";
}

/** Basic Spoken English has Hindi and Bengali editions at the same fee. */
export function coursePathFor(slug: FitCourseSlug, lang?: FitLang): string {
  if (slug === "spoken-english" && (lang === "hindi" || lang === "bengali")) {
    return `/course-spoken-english-${lang}`;
  }
  return `/course-${slug}`;
}

/**
 * An honest note when the deadline is shorter than the course: we say what is
 * realistic instead of letting the reader assume the whole course fits.
 */
export function deadlineNote(slug: FitCourseSlug, deadline?: FitDeadline): string | null {
  const months = FIT_DEADLINES.find((d) => d.id === deadline)?.months;
  if (!months || months >= fitRow(slug).months) return null;
  return `Your deadline is shorter than this ${fitRow(slug).months}-month course. Say so in your message: the teacher will tell you honestly what can change by then, usually hesitation and your prepared answers, not full fluency.`;
}

const labelOf = <T extends string>(list: { id: T; label: string }[], id?: T) =>
  list.find((x) => x.id === id)?.label;

/** The first WhatsApp message, filled with the reader's own answers. */
export function goalMessage(a: FitAnswers): string {
  const slug = a.goal && a.today ? courseForGoal(a.goal, a.today) : null;
  const parts = [
    "Hi, I set my goal on your website.",
    a.goal && `Goal: ${labelOf(FIT_GOALS, a.goal)}.`,
    a.today && `Today: ${labelOf(FIT_TODAY, a.today)}.`,
    a.deadline && `Deadline: ${labelOf(FIT_DEADLINES, a.deadline)}.`,
    a.slot && `Slot: ${labelOf(FIT_SLOTS, a.slot)}.`,
    a.lang && `${labelOf(FIT_LANGS, a.lang)}.`,
    a.committed && "I can attend two live classes a week and practise daily.",
    slug && `Suggested: ${fitRow(slug).title}.`,
    "Please confirm the course and send the free group consultation link.",
  ];
  return parts.filter(Boolean).join(" ");
}

export const FIT_GOAL_STORAGE_KEY = "lws.goal.v1";
