export const COURSE_SLUGS = [
  "spoken-english",
  "interactive-speaking",
  "business-english",
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
    title: "Work & Career · from ₹1,999/month, inclusive of taxes",
    description:
      "Workplace English ₹1,999/month, inclusive of taxes, and 1:1 Career Counselling ₹1,999 total for three 60-minute sessions. Meetings, calls, emails, presentations and a named counsellor. Live quality teaching. Batches of approximately 6 learners; counselling is 1:1.",
    icon: "headset",
    tone: "indigo",
    featuredSlug: "business-english",
    slugs: ["business-english", "career-counselling"],
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
