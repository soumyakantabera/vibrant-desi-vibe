/**
 * Money that is not a course monthly/package price.
 *
 * One place so captions, legal, FAQs, llms.json and ChatGPT Actions cannot
 * drift. Monthly group rooms carry a small one-time admission; Career
 * Counselling (1:1 package) does not. Consultation is free. No material fee.
 * Other institutes often take ~₹2,000 as a joining fee — we do not.
 */
export const ADMISSION = {
  inr: 600,
  display: "₹600",
  competitorJoining: "₹2,000",
  tax: "inclusive of taxes",
} as const;

/** One line for captions and hero asides. */
export function admissionCaption(): string {
  return `Monthly courses: one-time ${ADMISSION.display} admission (${ADMISSION.tax}) — not a ${ADMISSION.competitorJoining} joining fee. No material fee. Charged again if you finish a course and enrol in another, or switch mid-way. Career Counselling has no admission. Consultation is free.`;
}

/** Full policy sentence for legal, FAQs and assistants. */
export function admissionPolicy(): string {
  return `Monthly group English courses (Spoken English, Interactive Speaking, Workplace English, Interview Preparation) have a one-time ${ADMISSION.display} admission fee, ${ADMISSION.tax}. It is not a ${ADMISSION.competitorJoining} joining fee. It is charged when you first enrol in a monthly course, and again if you finish one course and enrol in another, or if you change course mid-way. Continuing the same monthly course month to month does not attract another admission. Career Counselling (the 1:1 package) has no admission fee. The consultation is free. There is no material fee.`;
}

/** Short clause for a sentence that already talks about monthly price. */
export function admissionShort(): string {
  return `plus a one-time ${ADMISSION.display} admission on monthly courses (not a ${ADMISSION.competitorJoining} joining fee; no material fee)`;
}

/** Comparison-table cell vs institutes that take ₹2,000. */
export function admissionVersus(): string {
  return `A small one-time ${ADMISSION.display} admission on monthly courses — not a ${ADMISSION.competitorJoining} joining fee. No material fee. Charged again if you finish one course and start another, or switch mid-way.`;
}
