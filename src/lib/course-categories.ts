export const COURSE_SLUGS = [
  "spoken-english",
  "interactive-speaking",
  "teen-english",
  "business-english",
  "ielts",
  "interview-prep",
  "career-counselling",
  "kids-english",
] as const;

export type CourseSlug = (typeof COURSE_SLUGS)[number];
export type CategoryTone = "brand" | "indigo" | "sun" | "coral" | "play";

/** Catalogue cards — Kids is discontinued and is not listed here. */
export const COURSE_CATEGORIES = [
  {
    id: "speak-confidently",
    title: "Speak Confidently",
    description:
      "Quality live English. 6-month Spoken English or 3-month Interactive Speaking — 1 hr 30 min, up to 2 classes/week. Interview English (HR, tell-me-about-yourself, STAR) is practised in these rooms. Batches of approximately 6 learners.",
    icon: "mic",
    tone: "brand",
    featuredSlug: "spoken-english",
    slugs: ["spoken-english", "interactive-speaking"],
  },
  {
    id: "teens",
    title: "Spoken English for Teens",
    description:
      "Ages 12–17. 1 hr 30 min live classes. Parent on WhatsApp. Never mixed with adult rooms. Spoken English for Kids (6–11) is discontinued.",
    icon: "mic",
    tone: "play",
    featuredSlug: "teen-english",
    slugs: ["teen-english"],
    badge: "For parents",
    cta: "Explore the teen room",
  },
  {
    id: "work-and-career",
    title: "Work & Career",
    description:
      "Workplace English: meetings, calls, emails, presentations. Live quality teaching, 1 hr 30 min, up to 2 classes/week. Batches of approximately 6 learners.",
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
