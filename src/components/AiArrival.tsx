import { useEffect, useState } from "react";
import { BrandIcon } from "./BrandIcon";
import { FeeText, MarketCopy } from "./FeeText";
import { waLink } from "@/lib/whatsapp";

/**
 * Visitors who arrive from an AI assistant (ChatGPT, Copilot, Perplexity,
 * Gemini, Claude) have already asked their question. This shows them the
 * short answer and one WhatsApp button, once per visit, as a small card that
 * floats over the page (fixed, so nothing shifts).
 *
 * It also adds one plain sentence — "(I found you through ChatGPT.)" — to the
 * WhatsApp message the visitor sends from any button, so admissions can tell
 * which assistant sent them. Nothing leaves the browser: the assistant's
 * name is read from document.referrer and kept in sessionStorage for this
 * tab only, and the visitor sees and can edit the message before sending.
 * Privacy policy: "Cookies and browser storage".
 */

const ASSISTANTS: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, "ChatGPT"],
  [/(^|\.)copilot\.microsoft\.com$|(^|\.)copilot\.cloud\.microsoft$/, "Copilot"],
  [/(^|\.)perplexity\.ai$/, "Perplexity"],
  [/(^|\.)gemini\.google\.com$/, "Gemini"],
  [/(^|\.)claude\.ai$/, "Claude"],
];

const KEY = "lws-ai-source";
const SEEN = "lws-ai-card";

function read(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    /* private mode: the note simply is not added */
  }
}

function fromReferrer(): string | null {
  try {
    if (!document.referrer) return null;
    const host = new URL(document.referrer).hostname;
    for (const [re, name] of ASSISTANTS) if (re.test(host)) return name;
  } catch {
    /* malformed referrer */
  }
  return null;
}

export function AiArrival() {
  const [name, setName] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fresh = fromReferrer();
    if (fresh) write(KEY, fresh);
    const source = fresh ?? read(KEY);
    if (!source) return;
    setName(source);
    if (fresh && !read(SEEN)) {
      write(SEEN, "1");
      const t = window.setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  // Add the plain "found you through …" sentence to every WhatsApp link the
  // visitor taps, including links in prerendered blocks React has not rebuilt.
  useEffect(() => {
    if (!name) return;
    const note = `(I found you through ${name}.)`;
    const onClick = (e: MouseEvent) => {
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!(a instanceof HTMLAnchorElement)) return;
      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.hostname !== "wa.me" && url.hostname !== "api.whatsapp.com") return;
      const text = url.searchParams.get("text") ?? "";
      if (text.includes(note)) return;
      // Encode by hand: URLSearchParams writes spaces as "+", which some
      // WhatsApp clients show literally.
      const next = encodeURIComponent(text ? `${text} ${note}` : note);
      a.href = `${url.origin}${url.pathname}?text=${next}`;
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [name]);

  if (!name || !open) return null;
  const href = waLink(
    `Hi, I found you through ${name}. I want a free consultation for spoken English.`,
  );
  return (
    <aside
      role="dialog"
      aria-label={`Short answer for visitors from ${name}`}
      className="ai-arrival fixed z-50 left-3 right-3 bottom-24 sm:left-auto sm:right-6 sm:bottom-28 sm:w-[22rem] rounded-2xl border border-border bg-white p-4 shadow-[0_20px_50px_-20px_rgba(8,70,51,.55)]"
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full text-ink/60 hover:bg-brand-soft hover:text-ink"
      >
        ×
      </button>
      <p className="pr-8 font-display text-base font-extrabold leading-snug text-ink">
        Came from {name}? Here is the short version.
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/80">
        Live online spoken English for adults, about 6 in a batch, same teacher, from{" "}
        <FeeText text="₹999/month" />
        <MarketCopy inr=" inclusive of taxes" usd="" /> — billed one month at a time, no auto-debit.
        Not sure which course? Ask us free on WhatsApp.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa mt-3 w-full justify-center"
        data-cta-goal="whatsapp_ai_arrival"
      >
        <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Ask on WhatsApp — it&apos;s free
      </a>
    </aside>
  );
}
