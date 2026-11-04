import { headingId } from "@/content/blog/blocks";

/**
 * Stable deep-link ids, so search engines and AI answers can link to the
 * exact answer instead of the top of a page (e.g. /course-interview-preparation#q-…).
 *
 * - Every FAQ question: `q-` + the question slug (FaqSection, CoursePage).
 * - Every article heading: its slug (ArticleBody, via headingId).
 * - The guide "Short answer" box: `short-answer`.
 *
 * The ids come from the visible text, so changing a question's wording
 * changes its link — scripts/check-answer-anchors.py fails the build if an
 * anchor listed in the answer index no longer exists.
 */
export function faqAnchor(question: string): string {
  return `q-${headingId(question)}`.slice(0, 72).replace(/-+$/g, "");
}

/** Roadmap phase card on a course page: `month-1`, `month-3`… (the phase's first month). */
export function monthAnchor(fromMonth: number): string {
  return `month-${fromMonth}`;
}

/** Syllabus module card on a course page: `syllabus-` + the module title slug. */
export function moduleAnchor(title: string): string {
  return `syllabus-${headingId(title)}`.slice(0, 72).replace(/-+$/g, "");
}

/** Fixed section anchors every course page carries (when the section exists). */
export const COURSE_SECTIONS = [
  { id: "overview", label: "Overview, fee and duration" },
  { id: "outcomes", label: "What you will be able to do" },
  { id: "class-split", label: "What one class looks like" },
  { id: "roadmap", label: "Month-by-month roadmap" },
  { id: "skills", label: "Skills coverage map" },
  { id: "included", label: "What the monthly fee includes" },
  { id: "syllabus", label: "Full syllabus" },
  { id: "faq", label: "Questions and answers" },
] as const;
