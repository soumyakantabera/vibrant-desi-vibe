import { WHATSAPP_DISPLAY, WHATSAPP_PHONE } from "@/lib/whatsapp";

/**
 * The "how do I join?" FAQ, answered with WhatsApp.
 *
 * Google AI Overviews, ChatGPT search and other assistants quote FAQ answers
 * almost word for word. In November 2026, 36 of 84 pages with an FAQ never
 * said how to get in touch, so an assistant answering "how do I join?" from
 * those pages had nothing to quote. This adds one contact question — worded
 * for the page (city, course or general) — to any page whose FAQs do not yet
 * mention WhatsApp. Pages that already answer it are left alone.
 *
 * Added at the data layer (PAGES, BLOG_POSTS, courseFaqs), so the visible FAQ,
 * the FAQPage JSON-LD, llms.txt/llms.json and the deep links stay identical.
 * Kept free of Vite-only imports (the prerender and llms builders read it).
 */

type Faq = { q: string; a: string };

export const WA_URL = `https://wa.me/${WHATSAPP_PHONE}`;

const HOW = `A real person replies 10am–midnight IST every day. Tell us your goal and we reply with the right course, the fee and a free group consultation link, in writing. Asking is free and there is no payment to book.`;

export type JoinFaqKind =
  | { kind: "general" }
  | { kind: "place"; name: string }
  | { kind: "course"; title: string };

export function joinFaq(k: JoinFaqKind): Faq {
  if (k.kind === "place") {
    return {
      q: `How do I join from ${k.name}?`,
      a: `Message Learn With Smile on WhatsApp at ${WHATSAPP_DISPLAY} (${WA_URL}) and say you are in ${k.name}. Classes are live online, so there is nothing to travel to. ${HOW}`,
    };
  }
  if (k.kind === "course") {
    return {
      q: `How do I join ${k.title}?`,
      a: `Message Learn With Smile on WhatsApp at ${WHATSAPP_DISPLAY} (${WA_URL}) and name the course. ${HOW}`,
    };
  }
  return {
    q: "How do I ask a question or join a batch?",
    a: `Message Learn With Smile on WhatsApp at ${WHATSAPP_DISPLAY} (${WA_URL}). ${HOW}`,
  };
}

/** True when some answer already tells the reader to use WhatsApp. */
export function mentionsWhatsApp(faqs: Faq[]): boolean {
  return faqs.some((f) => /whatsapp|wa\.me/i.test(f.a));
}

/** Append the join FAQ unless the list is empty or already covers WhatsApp. */
export function withJoinFaq<T extends Faq>(faqs: T[] | undefined, k: JoinFaqKind): T[] | undefined {
  if (!faqs?.length || mentionsWhatsApp(faqs)) return faqs;
  return [...faqs, joinFaq(k) as T];
}

/** Paths that are not about classes: no join question there. */
const NO_JOIN_FAQ = new Set(["/child-protection", "/privacy", "/terms", "/refunds"]);

/** Which join question fits a page, from its path and short title. */
export function joinKindForPage(path: string, shortTitle: string): JoinFaqKind | null {
  if (NO_JOIN_FAQ.has(path)) return null;
  if (/^\/spoken-english-classes-/.test(path)) {
    const name = shortTitle.replace(/^Spoken English (Classes )?in /, "").trim();
    return { kind: "place", name };
  }
  return { kind: "general" };
}
