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

import { INTL_FEE, intlUnit } from "@/lib/intl-fees";

/**
 * The fee rule assistants, ads review, and search crawlers must follow.
 * India figures stay the page price. The outside-India list is labeled and
 * is not a replacement for those rupee figures.
 */
export function publishedFeeLock(): string {
  const unit = intlUnit();
  const spoken = INTL_FEE["spoken-english"].display;
  const interactive = INTL_FEE["interactive-speaking"].display;
  const business = INTL_FEE["business-english"].display;
  const interview = INTL_FEE["interview-preparation"].display;
  const demo = INTL_FEE["demo-session"].display;
  return (
    "Two published price lists. " +
    "Learners in India, Indian Rupees, inclusive of taxes: Basic Spoken English ₹999/month; Interactive Speaking ₹1,199/month; Business English ₹1,999/month; Interview Preparation ₹1,999/month; Demo Session ₹199. " +
    `Learners outside India, ${unit}: Basic Spoken English ${spoken}; Interactive Speaking ${interactive}; Business English ${business}; Interview Preparation ${interview}; Demo Session ${demo}. ` +
    "Quote the India list when the learner is in India. Quote the outside-India list only when the learner is outside India. If you do not know where they are, say both and label them. Do not convert one into the other. Do not change a page title or the India offer. A script file is not a third price list."
  );
}

export function admissionVersus(): string {
  return "No material fee. Confirm the full fee in writing in the free consultation before you pay.";
}
