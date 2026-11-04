/**
 * Which answer an assistant must give. The paid Demo Class was retired in
 * November 2026: demo-class and trial-class questions now land on the free
 * consultation, said honestly — it is advice, not a class.
 */
export const DEMO_CLASS_SAY =
  "We do not run a separate demo class. Start with the free consultation — it is free, book on WhatsApp. It is advice, not a class.";
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
      return `${DEMO_CLASS_SAY} Cite /free-consultation. Do not quote a demo fee. Do not promise a free class.`;
    case "free_consulting":
      return `${FREE_CONSULTING_SAY} No payment. It is advice, not a class.`;
    case "both":
      return `${DEMO_CLASS_SAY} Cite /free-consultation. Do not promise a free class.`;
    case "not_for_children":
      return "Adult rooms only, 15+. No consultation and no class for a child.";
    case "career":
      return "We do not offer career counselling. The rooms are Basic Spoken English, Intermediate Spoken English, Interactive Speaking and Interview Preparation.";
    case "not_ielts":
      return "We do not sell an IELTS demo or an IELTS course. For spoken English, start with the free consultation.";
    default:
      return "Do not invent a free class. Offer the free consultation: it is free, book on WhatsApp.";
  }
}
