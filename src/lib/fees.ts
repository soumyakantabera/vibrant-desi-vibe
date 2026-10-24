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
    "Learners in India, Indian Rupees, inclusive of taxes: Basic Spoken English ₹1,499/month; Interactive Speaking ₹1,799/month; Business English ₹2,499/month; Interview Preparation ₹2,499/month; Demo Class ₹199. " +
    `Learners outside India, ${unit}: Basic Spoken English ${spoken}; Interactive Speaking ${interactive}; Business English ${business}; Interview Preparation ${interview}; Demo Class ${demo}. ` +
    "The India list applies to learners in India and the outside-India list applies to learners elsewhere. They are two separate price lists, not currency conversions of each other."
  );
}

export function admissionVersus(): string {
  return "No material fee. Confirm the full fee in writing in the free consultation before you pay.";
}

/**
 * Monthly course fees, India list, in one place for the package sections,
 * the per-day figure and structured data. Prose elsewhere states the same
 * rupee strings; FeeText swaps them for the outside-India list.
 */
export type FeeSlug =
  | "spoken-english"
  | "interactive-speaking"
  | "business-english"
  | "interview-preparation";

export const COURSE_FEE: Record<
  FeeSlug,
  { name: string; inr: number; display: string; monthly: string; months: number }
> = {
  "spoken-english": {
    name: "Basic Spoken English",
    inr: 1499,
    display: "₹1,499",
    monthly: "₹1,499/month",
    months: 6,
  },
  "interactive-speaking": {
    name: "Interactive Speaking",
    inr: 1799,
    display: "₹1,799",
    monthly: "₹1,799/month",
    months: 3,
  },
  "business-english": {
    name: "Business English",
    inr: 2499,
    display: "₹2,499",
    monthly: "₹2,499/month",
    months: 3,
  },
  "interview-preparation": {
    name: "Interview Preparation",
    inr: 2499,
    display: "₹2,499",
    monthly: "₹2,499/month",
    months: 2,
  },
};

export const DEMO_FEE = { inr: 199, display: "₹199" } as const;

/**
 * Launch offer for new learners. Shown until the end of the last day, IST.
 * The build hides it once the date has passed, and the browser hides it too,
 * so a stale prerender never shows an expired offer to a visitor.
 */
export const LAUNCH_OFFER = {
  endsAt: "2026-11-30T23:59:59+05:30",
  endsLabel: "30 November 2026",
  headline: "Launch offer: one extra month of portal + videos, free",
  short: "+1 month of portal & videos free",
  detail:
    "New learners who enrol by 30 November 2026 get one extra month of learner-portal and video-library access after their course, at no cost. The course fee does not change.",
} as const;

export function launchOfferActive(now: number = Date.now()): boolean {
  return now <= new Date(LAUNCH_OFFER.endsAt).getTime();
}

export function launchOfferDaysLeft(now: number = Date.now()): number {
  return Math.max(0, Math.ceil((new Date(LAUNCH_OFFER.endsAt).getTime() - now) / 86_400_000));
}
