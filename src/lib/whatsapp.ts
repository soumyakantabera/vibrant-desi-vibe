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
 * Constant names stay DEMO_* so existing imports do not churn. The strings
 * they hold are the public CTA.
 */
export const DEMO_CTA = "Get Free Consultation";
/** Same SVG on every Get Free Consultation button — never a letter or ligature. */
export const CONSULT_ICON = "compass" as const;
export const CHAT_CTA = "Chat on WhatsApp";
export const DEMO_MSG = "Hi, I want free consultation.";
export const CHAT_MSG = "Hi, I want to improve my English. Free consultation please.";

/** Every WhatsApp prefill asks for the free consultation, including Chat. */
export function withConsultAsk(message: string): string {
  const t = message.trim();
  if (/free consultation/i.test(t)) return t;
  return `${t.replace(/[.?!]+$/, "")}. Free consultation please.`;
}

/**
 * A plain WhatsApp deep link. No lead ID, campaign code, referrer or landing
 * page is appended to the learner's message.
 */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(withConsultAsk(message))}`;
}
