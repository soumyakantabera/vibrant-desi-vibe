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
    title: "Speak Confidently",
    description:
      "Build practical English communication from the basics or improve fluency through repeated live conversation.",
    icon: "mic",
    tone: "brand",
    featuredSlug: "spoken-english",
    slugs: ["spoken-english", "interactive-speaking"],
  },
  {
    id: "work-and-career",
    title: "Work & Career",
    description:
      "Build clear workplace communication and prepare for interviews with practical English.",
    icon: "headset",
    tone: "indigo",
    featuredSlug: "business-english",
    slugs: ["business-english", "interview-prep"],
  },
  {
    id: "ielts-preparation",
    title: "IELTS Preparation",
    description: "Prepare all four skills for Academic or General Training in a live small batch.",
    icon: "trophy",
    tone: "sun",
    featuredSlug: "ielts",
    slugs: ["ielts"],
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description: "Choose a realistic education or career direction in a separate 1:1 service.",
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
