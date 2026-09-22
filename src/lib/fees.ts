/**
 * Money that is not a course monthly/package price.
 *
 * Admission is not published on the website, in meta, llms or ChatGPT.
 * Confirm any extra fee only on WhatsApp after the consultation, never on a page.
 */
export const ADMISSION = {
  inr: 0,
  display: "",
  competitorJoining: "",
  tax: "inclusive of taxes",
  published: false,
} as const;

export function admissionCaption(): string {
  return "Fees are inclusive of taxes. No material fee. Consultation is free.";
}

export function admissionPolicy(): string {
  return "Course fees are inclusive of taxes. There is no material fee. The consultation is free.";
}

export function admissionShort(): string {
  return "inclusive of taxes, no material fee";
}

export function admissionVersus(): string {
  return "No material fee. Confirm the full fee in writing in the free consultation before you pay.";
}
