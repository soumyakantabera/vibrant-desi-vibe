export const COURSE_SLUGS = [
  "spoken-english",
  "business-english",
  "interactive-speaking",
  "ielts",
  "interview-prep",
  "career-counselling",
] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];
export type CategoryTone = "brand" | "indigo" | "sun" | "coral";

export const COURSE_CATEGORIES = [
  {
    id: "speak-confidently",
    title: "Speak Confidently · From ₹999/mo",
    description:
      "Quality live English from ₹999/mo. 6-month Spoken English or 3-month Interactive Speaking — up to 2 classes/week. Batches of approximately 6 learners.",
    icon: "mic",
    tone: "brand",
    featuredSlug: "spoken-english",
    slugs: ["spoken-english", "interactive-speaking"],
  },
  {
    id: "work-and-career",
    title: "Work & Career · from ₹1,499/mo",
    description:
      "Workplace English ₹1,999/mo and Interview Prep ₹1,499/mo. Live quality teaching, up to 2 classes/week. Batches of approximately 6 learners.",
    icon: "headset",
    tone: "indigo",
    featuredSlug: "business-english",
    slugs: ["business-english", "interview-prep"],
  },
  {
    id: "ielts-preparation",
    title: "IELTS Prep · ₹2,499/mo",
    description:
      "Target Band 7+ in 3 months. ₹2,499/mo. All 4 skills, 6+ live mocks, Academic or General Training. Batches of approximately 6 learners.",
    icon: "trophy",
    tone: "sun",
    featuredSlug: "ielts",
    slugs: ["ielts"],
  },
  {
    id: "career-guidance",
    title: "Career Guidance · ₹1,999 total",
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
}>;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];
