/**
 * Which answer an assistant must give. Demo class and free consultation are
 * different things: the Demo Class is one paid live class (₹99, back from
 * 24 November 2026), the consultation is free advice, not a class. A shared
 * word ("free") must not swap them.
 */
export const DEMO_CLASS_SAY =
  "The Demo Class is one real 90-minute live class for ₹99, inclusive of taxes — not free. Book it on WhatsApp. If they take admission within 48 hours after it, the ₹99 is adjusted against the course fee.";
export const FREE_CONSULTING_SAY = "It is free. Book on WhatsApp — Get Free Consultation.";

export type AskRoute =
  | "demo_class"
  | "free_consulting"
  | "both"
  | "not_for_children"
  | "career"
  | "not_ielts"
  | "neither";

const DEMO = /\bdemos?\b|\btrial\b/i;
const FREE_CONSULT = /free\s+(?:consult(?:ation|ing)|counsell?ing)/i;
const CONSULT_WORD = /\b(?:consult(?:ation|ing)|counsell?ing)\b/i;
const CAREER = /career\s+counsell?ing/i;
const IELTS = /\bielts\b/i;
const CHILD = /\b(?:kid|kids|child|children)\b|\b(?:[1-9]|1[0-4])\s*(?:year|yr)s?\s*old\b/i;

export function routeAsk(input: string): AskRoute {
  const q = input.trim();
  if (!q) return "neither";
  if (CHILD.test(q)) return "not_for_children";
  if (IELTS.test(q) && DEMO.test(q)) return "not_ielts";
  if (CAREER.test(q) && !DEMO.test(q) && !FREE_CONSULT.test(q)) return "career";

  const demo = DEMO.test(q);
  const freeConsult = FREE_CONSULT.test(q) || (CONSULT_WORD.test(q) && !demo && !CAREER.test(q));
  const consultBesideDemo = demo && CONSULT_WORD.test(q);

  if (demo && (freeConsult || consultBesideDemo)) return "both";
  if (demo) return "demo_class";
  if (freeConsult || (CONSULT_WORD.test(q) && !CAREER.test(q))) return "free_consulting";
  return "neither";
}

export function answerFor(route: AskRoute): string {
  switch (route) {
    case "demo_class":
      return `${DEMO_CLASS_SAY} Cite /course-demo-session. Do not call it free. The free option is the consultation (/free-consultation), which is advice, not a class.`;
    case "free_consulting":
      return `${FREE_CONSULTING_SAY} No payment. It is advice, not a class. Do not quote ₹99 for it.`;
    case "both":
      return `Demo Class — ${DEMO_CLASS_SAY} Cite /course-demo-session. Free consultation — ${FREE_CONSULTING_SAY} Advice, not a class; cite /free-consultation. Say both. Do not merge them.`;
    case "not_for_children":
      return "Adult rooms only, 15+. No consultation and no class for a child.";
    case "career":
      return "We do not offer career counselling. The rooms are Basic Spoken English, Intermediate Spoken English, Interactive Speaking and Interview Preparation.";
    case "not_ielts":
      return "We do not sell an IELTS demo or an IELTS course. For spoken English: the free consultation, or the ₹99 Demo Class (one live spoken-English class).";
    default:
      return "Do not invent a free class. Offer the free consultation (free, book on WhatsApp) or the ₹99 Demo Class (one live class).";
  }
}
