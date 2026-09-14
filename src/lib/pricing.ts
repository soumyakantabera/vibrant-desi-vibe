/**
 * Single source of truth for published course fees.
 *
 * India (INR) stays the current on-site fee. Outside India, four rooms have
 * agreed USD monthly fees; everything else asks the visitor to contact us.
 * Kids English is discontinued worldwide — it is not in this table as a
 * sellable offer.
 *
 * Displayed prices are inclusive of applicable taxes. A browser country
 * toggle is not enrolment eligibility; admissions confirms country, currency
 * and fee on WhatsApp before payment.
 */

export type CourseSlug =
  | "spoken-english"
  | "interactive-speaking"
  | "teen-english"
  | "business-english"
  | "ielts"
  | "interview-prep"
  | "career-counselling"
  | "kids-english";

export type Market = "IN" | "INTL";
export type BillingPeriod = "month" | "total";

export type CourseFee = {
  slug: CourseSlug;
  title: string;
  discontinued?: boolean;
  inr: { amount: number; period: BillingPeriod } | null;
  usd: { amount: number; period: BillingPeriod } | null;
};

export const COURSE_FEES: Record<CourseSlug, CourseFee> = {
  "spoken-english": {
    slug: "spoken-english",
    title: "Basic Spoken English",
    inr: { amount: 999, period: "month" },
    usd: { amount: 59, period: "month" },
  },
  "interactive-speaking": {
    slug: "interactive-speaking",
    title: "Interactive Speaking",
    inr: { amount: 1499, period: "month" },
    usd: { amount: 99, period: "month" },
  },
  "teen-english": {
    slug: "teen-english",
    title: "Spoken English for Teens",
    inr: { amount: 999, period: "month" },
    usd: { amount: 79, period: "month" },
  },
  "business-english": {
    slug: "business-english",
    title: "Workplace English",
    inr: { amount: 1999, period: "month" },
    usd: { amount: 129, period: "month" },
  },
  ielts: {
    slug: "ielts",
    title: "IELTS Preparation",
    inr: { amount: 2499, period: "month" },
    usd: null,
  },
  "interview-prep": {
    slug: "interview-prep",
    title: "Interview Preparation in English",
    inr: { amount: 1499, period: "month" },
    usd: null,
  },
  "career-counselling": {
    slug: "career-counselling",
    title: "Career Counselling",
    inr: { amount: 1999, period: "total" },
    usd: null,
  },
  "kids-english": {
    slug: "kids-english",
    title: "Spoken English for Kids",
    discontinued: true,
    inr: null,
    usd: null,
  },
};

export const ACTIVE_COURSE_SLUGS = (
  Object.keys(COURSE_FEES) as CourseSlug[]
).filter((slug) => !COURSE_FEES[slug].discontinued);

export const PRICING_NOTICE =
  "India pricing in INR is valid only for learners enrolling from India. Learners enrolling from outside India are charged the applicable international fees in USD. If your country or region is incorrect, update it using the Country/Region selector. All prices are inclusive of applicable taxes.";

export const INDIA_PRICING_LABEL = "India pricing";
export const INTL_PRICING_LABEL = "International pricing";
export const CONTACT_INTL = "Contact us for international pricing";

export type FormattedFee = {
  slug: CourseSlug;
  title: string;
  discontinued: boolean;
  market: Market;
  confirmed: boolean;
  currency: "INR" | "USD" | null;
  amount: number | null;
  period: BillingPeriod | null;
  /** e.g. "₹999/month" or "US$59/month" or "Contact us for international pricing" */
  label: string;
  /** Big figure for snapshot cards: "₹999" / "US$59" / "Contact us" */
  big: string;
  suffix: string;
  short: string;
};

function inrLabel(amount: number, period: BillingPeriod): string {
  const n = `₹${amount.toLocaleString("en-IN")}`;
  return period === "month" ? `${n}/month` : `${n} total`;
}

function usdLabel(amount: number, period: BillingPeriod): string {
  const n = `US$${amount}`;
  return period === "month" ? `${n}/month` : `${n} total`;
}

export function formatFee(
  slug: CourseSlug,
  market: Market,
  opts?: { confirmed?: boolean },
): FormattedFee {
  const row = COURSE_FEES[slug];
  const confirmed = opts?.confirmed ?? true;
  if (row.discontinued) {
    return {
      slug,
      title: row.title,
      discontinued: true,
      market,
      confirmed: false,
      currency: null,
      amount: null,
      period: null,
      label: "Enrolment discontinued",
      big: "Closed",
      suffix: "",
      short: "Discontinued",
    };
  }
  if (market === "IN" && row.inr) {
    const label = inrLabel(row.inr.amount, row.inr.period);
    return {
      slug,
      title: row.title,
      discontinued: false,
      market,
      confirmed,
      currency: "INR",
      amount: row.inr.amount,
      period: row.inr.period,
      label,
      big: `₹${row.inr.amount.toLocaleString("en-IN")}`,
      suffix: row.inr.period === "month" ? "/month" : " total",
      short: label,
    };
  }
  if (market === "INTL" && row.usd) {
    const label = usdLabel(row.usd.amount, row.usd.period);
    return {
      slug,
      title: row.title,
      discontinued: false,
      market,
      confirmed,
      currency: "USD",
      amount: row.usd.amount,
      period: row.usd.period,
      label,
      big: `US$${row.usd.amount}`,
      suffix: row.usd.period === "month" ? "/month" : " total",
      short: label,
    };
  }
  if (market === "INTL" && !row.usd) {
    return {
      slug,
      title: row.title,
      discontinued: false,
      market,
      confirmed,
      currency: null,
      amount: null,
      period: row.inr?.period ?? null,
      label: CONTACT_INTL,
      big: "Contact us",
      suffix: "",
      short: CONTACT_INTL,
    };
  }
  // Fallback: India fee as indicative if we somehow have no row.
  const inr = row.inr;
  const label = inr ? inrLabel(inr.amount, inr.period) : CONTACT_INTL;
  return {
    slug,
    title: row.title,
    discontinued: false,
    market: "IN",
    confirmed,
    currency: inr ? "INR" : null,
    amount: inr?.amount ?? null,
    period: inr?.period ?? null,
    label,
    big: inr ? `₹${inr.amount.toLocaleString("en-IN")}` : "Contact us",
    suffix: inr ? (inr.period === "month" ? "/month" : " total") : "",
    short: label,
  };
}

/** Lowest published monthly starting fee for a market (active rooms only). */
export function startingFee(market: Market): FormattedFee {
  const monthly = ACTIVE_COURSE_SLUGS.map((slug) => formatFee(slug, market)).filter(
    (f) => f.amount !== null && f.period === "month",
  );
  monthly.sort((a, b) => (a.amount ?? 0) - (b.amount ?? 0));
  return monthly[0] ?? formatFee("spoken-english", market);
}

export function indiaFeeLine(slug: CourseSlug): string {
  return formatFee(slug, "IN").label;
}

export function intlFeeLine(slug: CourseSlug): string {
  return formatFee(slug, "INTL").label;
}

export function bothMarketsLine(slug: CourseSlug): string {
  const inr = formatFee(slug, "IN");
  const usd = formatFee(slug, "INTL");
  if (inr.discontinued) return `${inr.title}: enrolment discontinued worldwide.`;
  return `${inr.title}: India ${inr.label}; outside India ${usd.label}. Inclusive of applicable taxes.`;
}

export function catalogueLines(market: Market): string {
  return ACTIVE_COURSE_SLUGS.map((slug) => {
    const f = formatFee(slug, market);
    return `${f.title} ${f.label}`;
  }).join(" · ");
}

export const REFUND_SUMMARY =
  "Free demo first. Cancel at least 48 hours before the agreed start for a refund of that enrolment. After a paid month has started, unused classes are not refunded. Duplicate or erroneous charges, and teaching we cannot deliver, are refunded. Applicable consumer law — including a 14-day withdrawal right for qualifying EU distance contracts — still applies.";
