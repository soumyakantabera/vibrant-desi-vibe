export const COURSE_SLUGS = [
  "spoken-english",
  "interactive-speaking",
  "business-english",
  "ielts",
  "interview-prep",
  "career-counselling",
] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];
export type CategoryTone = "brand" | "indigo" | "sun" | "coral" | "play";

export const COURSE_CATEGORIES = [
  {
    id: "speak-confidently",
    title: "Speak Confidently · From ₹999/month, inclusive of taxes",
    description:
      "Quality live English from ₹999/month, inclusive of taxes. 6-month Spoken English or 3-month Interactive Speaking — 1 hr 30 min, up to 2 classes/week. Interview English (HR, tell-me-about-yourself, STAR) is practised in these rooms. Batches of approximately 6 learners.",
    icon: "mic",
    tone: "brand",
    featuredSlug: "spoken-english",
    slugs: ["spoken-english", "interactive-speaking"],
  },
  {
    id: "work-and-career",
    title: "Work & Career · from ₹1,499/month, inclusive of taxes",
    description:
      "Workplace English ₹1,999/month and Interview Prep ₹1,499/month, inclusive of taxes. Meetings, calls, emails, presentations and the interview chair. Live quality teaching, 1 hr 30 min, up to 2 classes/week. Batches of approximately 6 learners.",
    icon: "headset",
    tone: "indigo",
    featuredSlug: "business-english",
    slugs: ["business-english", "interview-prep"],
  },
  {
    id: "tests-and-guidance",
    title: "Tests & Guidance · IELTS and 1:1 counselling",
    description:
      "Live IELTS preparation ₹2,499/month, inclusive of taxes. 1:1 Career Counselling ₹1,999 total for three 60-minute sessions. Named teacher. No band or job guarantee.",
    icon: "award",
    tone: "sun",
    featuredSlug: "ielts",
    slugs: ["ielts", "career-counselling"],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  icon: string;
  tone: CategoryTone;
  featuredSlug: CourseSlug;
  slugs: readonly CourseSlug[];
  badge?: string;
  cta?: string;
}>;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];
