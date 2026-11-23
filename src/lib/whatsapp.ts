import { COURSE_FEE, type FeeSlug } from "@/lib/fees";

export const WHATSAPP_PHONE = "919674479949";
export const WHATSAPP_DISPLAY = "+91 96744 79949";
export const CALL_LINK = `tel:+${WHATSAPP_PHONE}`;

/** Every live batch runs inside this window. Stated on the site, in schema and in messages. */
export const BATCH_HOURS = "3pm–10pm IST";

/** The paid seat in a live class. ₹99, adjusted in the course fee on admission. */
export const DEMO_PRICE = "₹99";

/**
 * Three WhatsApp actions, three first messages (November 2026 lead-quality fix).
 *
 *  - "Book ₹99 Demo Class" — the main action. A small payment is the filter:
 *    from 4 Nov to 23 Nov 2026, when every button offered something free,
 *    chats were mostly "price?" and requests for free material.
 *  - "Chat on WhatsApp" — a question. The message already states the course,
 *    its fee and the 3pm–10pm IST batch window, so the person has seen the
 *    price before they write and the reply can move straight to the next step.
 *  - "Get Free Consultation" — secondary; advice, not a class. Its message
 *    also carries the fee.
 *
 * Every message ends with a short prompt ("My goal and preferred batch time:")
 * and WhatsApp puts the cursor after it, so the learner adds the one detail
 * the team needs. The page the chat came from is tagged before the prompt.
 */
export const DEMO_CTA = `Book ${DEMO_PRICE} Demo Class`;
export const CONSULT_CTA = "Get Free Consultation";
export const CHAT_CTA = "Chat on WhatsApp";
/** Same SVG on every Get Free Consultation button — never a letter or ligature. */
export const CONSULT_ICON = "compass" as const;

const FROM = COURSE_FEE["spoken-english"].monthly;

/** A course the message can name, with its India fee. */
type Topic = { name: string; fee: string };

const topic = (slug: FeeSlug, name?: string): Topic => ({
  name: name ?? COURSE_FEE[slug].name,
  fee: COURSE_FEE[slug].monthly,
});

/** Course names as they appear in page messages, most specific first. */
const TOPICS: [RegExp, Topic][] = [
  [/hindi to english/i, topic("spoken-english", "Basic Spoken English — Hindi to English")],
  [/bengali to english/i, topic("spoken-english", "Basic Spoken English — Bengali to English")],
  [/\bchoose\b|\bwhich course\b/i, { name: "", fee: "" }],
  [/intermediate/i, topic("intermediate-english")],
  [/interview/i, topic("interview-preparation")],
  [
    /interactive speaking|business english|client.call|\bfreeze\b|explain my work/i,
    topic("interactive-speaking"),
  ],
  [/basic spoken english/i, topic("spoken-english")],
];

/** The course a page message is about, if it names one. */
export function topicFor(pageMessage?: string): Topic | undefined {
  if (!pageMessage) return undefined;
  for (const [re, t] of TOPICS) if (re.test(pageMessage)) return t.name ? t : undefined;
  return undefined;
}

/** Hindi / Bengali "I can talk in …" lines on the medium pages travel with every message. */
function languageLine(pageMessage?: string): string {
  const m = pageMessage?.match(/(Main Hindi mein[^.]*\.|Ami Banglay[^.]*\.)/);
  return m ? ` ${m[1]}` : "";
}

/**
 * A message written for one purpose (a level-test score, the Bolo app, a
 * question) is sent as written by the chat button. Template messages — the
 * page's "free consultation for X" line or the generic question — are rebuilt.
 */
function isTemplate(message: string): boolean {
  return (
    /free (group )?consultation|free consultation chah|^Hi, I read |^Hi, I'm interested in |question about your spoken English classes|Demo Class/i.test(
      message,
    ) || message.trim() === ""
  );
}

function tag(pageLabel?: string): string {
  return pageLabel ? ` (From the ${pageLabel} page.)` : "";
}

export type WaKind = "demo" | "consult" | "chat";

/** The first WhatsApp message for one of the three actions on a page. */
export function waMessageFor(kind: WaKind, pageMessage?: string, pageLabel?: string): string {
  const t = topicFor(pageMessage);
  const lang = languageLine(pageMessage);
  if (kind === "chat" && pageMessage && !isTemplate(pageMessage)) {
    return `${sentence(pageMessage)}${tag(pageLabel)}`;
  }
  if (kind === "demo") {
    return `Hi, I want to book the ${DEMO_PRICE} Demo Class${t ? ` for ${t.name}` : ""} — a 90-minute live class, adjusted in my course fee if I join.${lang}${tag(pageLabel)} My goal and preferred batch time (${BATCH_HOURS}):`;
  }
  if (kind === "consult") {
    const what = t ? `${t.name} (${t.fee})` : `a paid spoken English course (from ${FROM})`;
    return `Hi, I'd like a free group consultation before I join ${what}. Please send me the booking link.${lang}${tag(pageLabel)} My goal:`;
  }
  const what = t
    ? `${t.name} (${t.fee}, live online, batches ${BATCH_HOURS})`
    : `your live online spoken English classes (from ${FROM}, batches ${BATCH_HOURS})`;
  return `Hi, I'm interested in ${what}.${lang}${tag(pageLabel)} My question:`;
}

/** Defaults, used where no page context exists (AI files, 404). */
export const DEMO_MSG = waMessageFor("demo");
export const CONSULT_MSG = waMessageFor("consult");
export const CHAT_MSG = waMessageFor("chat");

/** Page-specific demo request, e.g. waDemo("Interview Preparation"). */
export function waDemo(forWhat?: string): string {
  return waMessageFor("demo", forWhat);
}

/** Page-specific consultation request, e.g. waConsult("Interactive Speaking"). */
export function waConsult(forWhat?: string): string {
  return waMessageFor("consult", forWhat ? `free consultation for ${forWhat}` : undefined);
}

function sentence(message: string): string {
  const t = message.trim().replace(/\s+/g, " ");
  return /[.?!):]$/.test(t) ? t : `${t}.`;
}

/**
 * Generic first messages carry the page they were sent from, so every chat
 * shows its source on the first line — no tracking code, no lead ID.
 * Kept for callers that still build their own message.
 */
export function withPageTag(message: string, pageLabel?: string): string {
  const t = sentence(message);
  if (!pageLabel) return t;
  if (t === DEMO_MSG) return waMessageFor("demo", undefined, pageLabel);
  if (t === CONSULT_MSG) return waMessageFor("consult", undefined, pageLabel);
  if (t === CHAT_MSG) return waMessageFor("chat", undefined, pageLabel);
  return t;
}

/** A plain WhatsApp deep link. The message is sent as written. */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(sentence(message))}`;
}

/** Identical to waLink; kept for existing imports. */
export function waDirect(message: string) {
  return waLink(message);
}
