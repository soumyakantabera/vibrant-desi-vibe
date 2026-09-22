export const WHATSAPP_PHONE = "919674479949";
export const WHATSAPP_DISPLAY = "+91 96744 79949";
export const CALL_LINK = `tel:+${WHATSAPP_PHONE}`;

/**
 * Primary conversion labels.
 *
 * Visible site copy never says "demo" or "free demo class" — people hear
 * "full class for free". The offer is a small-batch counselling session with
 * personalised advice: courses, curriculum, and each learner's requirements,
 * one by one.
 *
 * Constant names stay DEMO_* so existing imports do not churn.
 */
export const DEMO_CTA = "Get Free Consultation";
/** Same SVG on every Get Free Consultation button — never a letter or ligature. */
export const CONSULT_ICON = "compass" as const;
export const CHAT_CTA = "Chat on WhatsApp";
/** One sentence. Chat and Consult share this when the page has no extra context. */
export const DEMO_MSG = "Hi, I want a free consultation.";
export const CHAT_MSG = DEMO_MSG;

/** Page-specific one-liner. Always includes “free consultation”. */
export function waConsult(forWhat?: string): string {
  if (!forWhat?.trim()) return DEMO_MSG;
  const topic = forWhat.trim().replace(/[.?!]+$/, "");
  if (/free consultation/i.test(topic)) return `${topic}.`;
  return `Hi, I want a free consultation for ${topic}.`;
}

/** Safety net: never send a WhatsApp text that omits “free consultation”. */
export function withConsultAsk(message: string): string {
  const t = message.trim();
  if (/free consultation/i.test(t)) {
    return t.replace(/\s*Free consultation please\.?$/i, "").replace(/[.?!]+$/, "") + ".";
  }
  const rest = t.replace(/^Hi,?\s*/i, "").replace(/[.?!]+$/, "");
  return rest ? `Hi, I want a free consultation for ${rest}.` : DEMO_MSG;
}

/**
 * A plain WhatsApp deep link. No lead ID, campaign code, referrer or landing
 * page is appended to the learner's message.
 */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(withConsultAsk(message))}`;
}
