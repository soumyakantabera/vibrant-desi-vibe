export const COURSE_SLUGS = [
  "spoken-english",
  "interactive-speaking",
  "kids-english",
  "teen-english",
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
    id: "kids-and-teens",
    title: "Kids & Teens · from ₹999/month, inclusive of taxes",
    description:
      "Kids 6–11 and Teens 12–17 at ₹999/month, inclusive of taxes. 1 hr 30 min live classes. Parent on WhatsApp. Rooms never mixed with adults.",
    icon: "smile",
    tone: "play",
    featuredSlug: "kids-english",
    slugs: ["kids-english", "teen-english"],
    theme: "kids",
    badge: "For parents",
    cta: "Explore both programmes",
  },
  {
    id: "work-and-career",
    title: "Work & Career · from ₹1,999/month, inclusive of taxes",
    description:
      "Workplace English ₹1,999/month, inclusive of taxes. Meetings, calls, emails, presentations. Live quality teaching, 1 hr 30 min, up to 2 classes/week. Batches of approximately 6 learners.",
    icon: "headset",
    tone: "indigo",
    featuredSlug: "business-english",
    slugs: ["business-english"],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  icon: string;
  tone: CategoryTone;
  featuredSlug: CourseSlug;
  slugs: readonly CourseSlug[];
  theme?: "kids";
  badge?: string;
  cta?: string;
}>;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];
