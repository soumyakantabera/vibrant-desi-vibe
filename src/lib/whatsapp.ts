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
  "Hi, I'm serious about my spoken English and can do two live classes a week. Please send the free consultation booking link.";
/**
 * The chat button. Worded as intent, not a vague question (Nov 2026): the
 * learner says they are ready, and the teacher replies with course and batch.
 */
export const CHAT_MSG =
  "Hi, I'm serious about my spoken English. Which course fits me, and when does the next batch start?";

/**
 * The line under the WhatsApp buttons: who replies, what they send, and what
 * we do not do. Shows we are serious, so the people who message are too.
 */
export const TEACHER_PROMISE = "A teacher replies on WhatsApp within 24 hours. No sales calls.";

function sentence(message: string): string {
  const t = message.trim().replace(/\s+/g, " ");
  return /[.?!)]$/.test(t) ? t : `${t}.`;
}

/** Page-specific consultation request, e.g. waConsult("Business English"). */
export function waConsult(forWhat?: string): string {
  if (!forWhat?.trim()) return DEMO_MSG;
  return `Hi, I'm serious about my ${forWhat.trim()} and can do two live classes a week. Please send the free consultation booking link.`;
}

/**
 * Turns any page message into a consultation request. A message that already
 * talks about a consultation keeps its own words (it usually names the course
 * or city) and gains the booking-link ask; anything else becomes DEMO_MSG.
 */
export function consultRequest(message: string): string {
  const t = sentence(message);
  if (/booking link/i.test(t)) return t;
  if (/consultation/i.test(t)) {
    return `${t} I can do two live classes a week. Please send the booking link.`;
  }
  return DEMO_MSG;
}

/**
 * Chat-button messages keep the page's own words (course, city) and gain the
 * commitment line, so every first chat opens on intent. Messages that already
 * say it are left alone.
 */
export function chatRequest(message: string): string {
  const t = sentence(message);
  if (/serious|ready for|booking link|I'm in\b/i.test(t)) return t;
  return `${t} I'm serious about this.`;
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

/** Identical to waLink; kept for existing imports. */
export function waDirect(message: string) {
  return waLink(message);
}
