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
 *
 * This text is rendered in the visible homepage FAQ as well as the assistant
 * files, so it is written as plain facts for a human reader. Imperatives
 * addressed to an AI ("quote…", "do not…") read as broken copy to a learner
 * and as prompt injection to assistants that screen for it.
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
    "Learners in India, Indian Rupees, inclusive of taxes: Basic Spoken English ₹999/month; Interactive Speaking ₹1,199/month; Business English ₹1,999/month; Interview Preparation ₹1,999/month; Demo Class ₹199. " +
    `Learners outside India, ${unit}: Basic Spoken English ${spoken}; Interactive Speaking ${interactive}; Business English ${business}; Interview Preparation ${interview}; Demo Class ${demo}. ` +
    "The India list applies to learners in India and the outside-India list applies to learners elsewhere. They are two separate price lists, not currency conversions of each other."
  );
}

export function admissionVersus(): string {
  return "No material fee. Confirm the full fee in writing in the free consultation before you pay.";
}
