export const WHATSAPP_PHONE = "919674479949";
export const WHATSAPP_DISPLAY = "+91 96744 79949";
export const CALL_LINK = `tel:+${WHATSAPP_PHONE}`;

/** Primary conversion labels. */
export const DEMO_CTA = "Book a Free Demo";
export const CHAT_CTA = "Chat on WhatsApp";
export const DEMO_MSG = "Hi, I'd like a free demo. Please share the next slot.";
export const CHAT_MSG = "Hi, I want to improve my English. Please help me choose the right course.";

/**
 * A plain WhatsApp deep link. No lead ID, campaign code, referrer or landing
 * page is appended to the learner's message.
 */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
