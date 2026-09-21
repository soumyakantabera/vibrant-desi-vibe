export const WHATSAPP_PHONE = "919674479949";
export const WHATSAPP_DISPLAY = "+91 96744 79949";
export const CALL_LINK = `tel:+${WHATSAPP_PHONE}`;

/**
 * Primary conversion labels.
 *
 * Visible site copy never says "demo" or "free demo class" — people hear
 * "full class for free". The offer is a one-to-one counselling session:
 * courses, curriculum, and each learner's requirements, one by one.
 *
 * Constant names stay DEMO_* so existing imports do not churn. The strings
 * they hold are the public CTA.
 */
export const DEMO_CTA = "Get Free Consultation";
/** Same SVG on every Get Free Consultation button — never a letter or ligature. */
export const CONSULT_ICON = "compass" as const;
export const CHAT_CTA = "Chat on WhatsApp";
export const DEMO_MSG =
  "Hi, I'd like a free consultation to understand my requirements. Please share a slot so we can diagnose my bottleneck and choose one course.";
export const CHAT_MSG = "Hi, I want to improve my English. Please help me choose the right course.";

/**
 * A plain WhatsApp deep link. No lead ID, campaign code, referrer or landing
 * page is appended to the learner's message.
 */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
