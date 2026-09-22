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
  tone: "us" | "indigo" | "coral" | "sun" | "ink" | "play";
};

/**
 * Online 2026 comparison. Public bands only — confirm on their site.
 * PlanetSpark is kids 4–13. We are adults 15+.
 */
export const MARKET_COMPARE: readonly MarketRow[] = [
  {
    name: "Learn With Smile",
    us: true,
    fee: "From ₹999/mo, tax incl.",
    extra: "Named teacher. No material fee.",
    batch: "≈6 live · adults 15+",
    session: "Free consultation. Not a class.",
    tone: "us",
  },
  {
    name: "EngVarta",
    fee: "₹2,700 / 25 × 15-min",
    extra: "No 6-month syllabus",
    batch: "1:1 audio, on demand",
    session: "No counselling — you talk",
    tone: "indigo",
  },
  {
    name: "Cambly",
    fee: "₹8,000–₹15,000/mo if daily",
    extra: "Tutor lottery",
    batch: "1:1 native video",
    session: "Tutor lottery. No map.",
    tone: "coral",
  },
  {
    name: "italki / Preply",
    fee: "₹250–₹4,000 / lesson",
    extra: "You pick the tutor",
    batch: "1:1 marketplace",
    session: "Trial lesson with that tutor",
    tone: "sun",
  },
  {
    name: "PlanetSpark",
    fee: "₹13,000–₹65,000 / course",
    extra: "Kids 4–13. Public speaking.",
    batch: "1:1 kids online",
    session: "Free demo class for the child",
    tone: "play",
  },
  {
    name: "British Council Online",
    fee: "₹8,800–₹16,000 / module",
    extra: "CEFR classroom / badge",
    batch: "Often 8–12",
    session: "Counsellor pitches a module",
    tone: "ink",
  },
  {
    name: "ELSA / Duolingo / Speak",
    fee: "₹300–₹1,200/mo",
    extra: "AI. No named teacher.",
    batch: "Solo app",
    session: "None — you tap Start",
    tone: "indigo",
  },
  {
    name: "IELTS / Leap-style shops",
    fee: "₹8,000–₹35,000 / course",
    extra: "Exam paper. Not fluency.",
    batch: "Exam batch",
    session: "Pitch for IELTS/PTE",
    tone: "coral",
  },
] as const;

export const COMPARE_BLURB = `Updated ${COMPARE_REVISED_LABEL}. Online 2026 fee bands — confirm on their site before you pay. We sell one of the rows. PlanetSpark is for children. We are adults 15+.`;
