export const WHATSAPP_PHONE = "919674479949";
export const WHATSAPP_DISPLAY = "+91 96744 79949";
export const CALL_LINK = `tel:+${WHATSAPP_PHONE}`;

/**
 * Primary conversion labels.
 *
 * Two different actions, two different first messages:
 *  - "Chat on WhatsApp" asks a question, sent as written.
 *  - "Get Free Consultation" asks for the booking link to a free group
 *    consultation slot (advice, not a class).
 * The paid ₹199 Demo Class has its own page and message — use waDirect.
 *
 * Until October 2026 every message was rewritten into a consultation request,
 * so both buttons opened the same chat and some prefills came out garbled.
 *
 * Constant names stay DEMO_* so existing imports do not churn.
 */
export const DEMO_CTA = "Get Free Consultation";
/** Same SVG on every Get Free Consultation button — never a letter or ligature. */
export const CONSULT_ICON = "compass" as const;
export const CHAT_CTA = "Chat on WhatsApp";
/** The consultation request: a free group slot, booked through a link we send. */
export const DEMO_MSG =
  "Hi, I'd like to book a free group consultation for spoken English. Please send me the booking link.";
/** A plain question — the chat button. */
export const CHAT_MSG = "Hi, I have a question about your spoken English classes.";

function sentence(message: string): string {
  const t = message.trim().replace(/\s+/g, " ");
  return /[.?!)]$/.test(t) ? t : `${t}.`;
}

/** Page-specific consultation request, e.g. waConsult("Business English"). */
export function waConsult(forWhat?: string): string {
  if (!forWhat?.trim()) return DEMO_MSG;
  return `Hi, I'd like to book a free group consultation for ${forWhat.trim()}. Please send me the booking link.`;
}

/**
 * Turns any page message into a consultation request. A message that already
 * talks about a consultation keeps its own words (it usually names the course
 * or city) and gains the booking-link ask; anything else becomes DEMO_MSG.
 */
export function consultRequest(message: string): string {
  const t = sentence(message);
  if (/booking link/i.test(t)) return t;
  if (/consultation/i.test(t)) return `${t} Please send me the booking link.`;
  return DEMO_MSG;
}

/**
 * Generic first messages carry the page they were sent from, so every chat
 * shows its source on the first line — no tracking code, no lead ID.
 */
export function withPageTag(message: string, pageLabel?: string): string {
  const t = sentence(message);
  if (!pageLabel) return t;
  if (t !== sentence(CHAT_MSG) && t !== sentence(DEMO_MSG)) return t;
  return `${t} (From the ${pageLabel} page.)`;
}

/** A plain WhatsApp deep link. The message is sent as written. */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(sentence(message))}`;
}

/** Kept for the paid Demo Class enrol link; identical to waLink now. */
export function waDirect(message: string) {
  return waLink(message);
}
