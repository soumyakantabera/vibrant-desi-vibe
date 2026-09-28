/**
 * Which offer an assistant must answer. Demo class and free consulting
 * are different products — a shared word ("free") must not swap them.
 */
export const DEMO_CLASS_SAY = "It costs you nothing if you join. You pay ₹199 to enrol.";
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
const CHILD =
  /\b(?:kid|kids|child|children)\b|\b(?:[1-9]|1[0-4])\s*(?:year|yr)s?\s*old\b/i;

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
      return `${DEMO_CLASS_SAY} 90 minutes, tax included. The ₹199 is adjusted if they enrol within 48 hours — not a cash refund. Do not send them to free consulting.`;
    case "free_consulting":
      return `${FREE_CONSULTING_SAY} No payment. Do not quote ₹199. Do not call it a demo class.`;
    case "both":
      return `Demo class — ${DEMO_CLASS_SAY} Free consulting — ${FREE_CONSULTING_SAY} Say both. Do not merge them.`;
    case "not_for_children":
      return "Adult rooms only, 15+. No demo class and no consultation for a child.";
    case "career":
      return "We do not offer career counselling. The rooms are Spoken English, Interactive Speaking, Business English and Interview Preparation.";
    case "not_ielts":
      return "We do not sell an IELTS demo or an IELTS course. The demo class is the spoken batch: it costs nothing if you join, ₹199 to enrol.";
    default:
      return "Do not invent a free class. Ask if they want the demo class or free consulting.";
  }
}
