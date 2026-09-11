export const COURSE_SLUGS = [
  "spoken-english",
  "business-english",
  "interactive-speaking",
  "ielts",
  "interview-prep",
  "career-counselling",
  "kids-english",
  "teen-english",
] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];
export type CategoryTone = "brand" | "indigo" | "sun" | "coral" | "play";

export const COURSE_CATEGORIES = [
  {
    id: "speak-confidently",
    title: "Speak Confidently · From ₹999/mo, inclusive of taxes",
    description:
      "Quality live English from ₹999/mo, inclusive of taxes. 6-month Spoken English or 3-month Interactive Speaking — up to 2 classes/week. Batches of approximately 6 learners.",
    icon: "mic",
    tone: "brand",
    featuredSlug: "spoken-english",
    slugs: ["spoken-english", "interactive-speaking"],
  },
  {
    id: "kids-and-teens",
    title: "Kids & Teens · from ₹1,499/mo, inclusive of taxes",
    description:
      "Kids 6–11 at ₹1,499/mo and Teens 12–17 at ₹1,799/mo, inclusive of taxes. Parent on WhatsApp. Rooms never mixed with adults.",
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
    title: "Work & Career · from ₹1,499/mo, inclusive of taxes",
    description:
      "Workplace English ₹1,999/mo and Interview Prep ₹1,499/mo, inclusive of taxes. Live quality teaching, up to 2 classes/week. Batches of approximately 6 learners.",
    icon: "headset",
    tone: "indigo",
    featuredSlug: "business-english",
    slugs: ["business-english", "interview-prep"],
  },
  {
    id: "ielts-preparation",
    title: "IELTS Prep · ₹2,499/mo, inclusive of taxes",
    description:
      "3 months live toward Band 7. ₹2,499/mo, inclusive of taxes. All 4 skills, 6+ live mocks, Academic or General Training. Typical start Band 5.5–6. Batches of approximately 6 learners.",
    icon: "trophy",
    tone: "sun",
    featuredSlug: "ielts",
    slugs: ["ielts"],
  },
  {
    id: "career-guidance",
    title: "Career Guidance · ₹1,999 total, inclusive of taxes",
    description:
      "1:1 counselling. 3 sessions × 60 minutes. Three shortlisted paths and a 6-month action plan.",
    icon: "compass",
    tone: "coral",
    featuredSlug: "career-counselling",
    slugs: ["career-counselling"],
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
