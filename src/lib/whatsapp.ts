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
export const DEMO_MSG = "Hi, I want a free consultation for spoken English.";
export const CHAT_MSG = DEMO_MSG;

/** Page-specific one-liner. Always includes “free consultation” and English. */
export function waConsult(forWhat?: string): string {
  if (!forWhat?.trim()) return DEMO_MSG;
  return withConsultAsk(`Hi, I want a free consultation for ${forWhat.trim()}`);
}

function ensureSpokenEnglish(sentence: string): string {
  const t = sentence.replace(/[.?!]+$/, "");
  if (/english/i.test(t)) return `${t}.`;
  // Only tack it on when the line still ends on “free consultation”.
  if (/free consultation$/i.test(t)) return `${t} for spoken English.`;
  return `${t}.`;
}

/** Safety net: every WhatsApp prefill has “free consultation” and “spoken English”. */
export function withConsultAsk(message: string): string {
  let t = message.trim().replace(/\s*Free consultation please\.?$/i, "").replace(/[.?!]+$/, "");
  if (!/free consultation/i.test(t)) {
    const rest = t.replace(/^Hi,?\s*/i, "");
    t = rest ? `Hi, I want a free consultation for ${rest}` : "Hi, I want a free consultation";
  }
  return ensureSpokenEnglish(t);
}

/**
 * A plain WhatsApp deep link. No lead ID, campaign code, referrer or landing
 * page is appended to the learner's message.
 */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(withConsultAsk(message))}`;
}
