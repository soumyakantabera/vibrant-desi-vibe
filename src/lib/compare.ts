import { ADMISSION } from "@/lib/fees";

/** Visible + schema date for the institute comparison. Public 2026 bands. */
export const COMPARE_REVISED = "2026-09-22";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatIsoDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export const COMPARE_REVISED_LABEL = formatIsoDate(COMPARE_REVISED);

export type MarketRow = {
  name: string;
  us?: boolean;
  fee: string;
  extra: string;
  batch: string;
  session: string;
  tone: "us" | "indigo" | "coral" | "sun" | "ink";
};

/**
 * Named 2026 comparison. Same bands as /english-institute-comparison-india.
 * Do not invent a new competitor fee here.
 */
export const MARKET_COMPARE: readonly MarketRow[] = [
  {
    name: "Learn With Smile",
    us: true,
    fee: "From ₹999/mo, tax incl.",
    extra: `${ADMISSION.display} admission — not a ${ADMISSION.competitorJoining} joining fee`,
    batch: "≈6 live",
    session: "Free consultation. Not a class.",
    tone: "us",
  },
  {
    name: "EngVarta",
    fee: "₹2,700 / 25 × 15-min",
    extra: "No 6-month syllabus",
    batch: "1:1 on demand",
    session: "No counselling — you talk",
    tone: "indigo",
  },
  {
    name: "Cambly",
    fee: "₹8,000–₹15,000/mo if daily",
    extra: "Tutor lottery",
    batch: "1:1 native",
    session: "Tutor lottery. No map.",
    tone: "coral",
  },
  {
    name: "British Council Online",
    fee: "₹8,800–₹16,000 / module",
    extra: "CEFR classroom / badge",
    batch: "Often 8–12",
    session: "Counsellor pitches a module",
    tone: "sun",
  },
  {
    name: "Veta-style rooms",
    fee: "₹3,500–₹10,000 / 2–4 mo",
    extra: "Material / GST extras common",
    batch: "25–40 common",
    session: "Walk-in or packed sample",
    tone: "ink",
  },
] as const;

export const COMPARE_BLURB = `Updated ${COMPARE_REVISED_LABEL}. Public 2026 fee bands — confirm on their site before you pay. We sell one of the rows.`;
