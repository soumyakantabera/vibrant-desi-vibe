import { useEffect, useState } from "react";

import { BrandIcon } from "./BrandIcon";
import { FeeText, MarketCopy } from "./FeeText";
import { Icon } from "./Icon";
import { BoloParrot } from "./mascots/BoloParrot";
import { waLink } from "@/lib/whatsapp";

/**
 * Visitors who arrive from an AI assistant or Google have already asked their
 * question. This shows them the short answer and one WhatsApp button, once
 * per visit, as a small Bolo card (one action: WhatsApp) fixed to the bottom of the screen (nothing
 * on the page shifts).
 *
 * Where they came from is read from document.referrer only. Campaign URL
 * parameters are deliberately not read: the build forbids tracking and
 * campaign identifiers (see "Verify search and AI outputs" in
 * .github/workflows/quality.yml). Google covers AI Overviews and AI Mode,
 * which arrive from google.* like ordinary results and cannot be told apart.
 *
 * Timing: AI-assistant visitors see the card after 1.2 s. Google visitors see
 * it only once they scroll a little, so nothing covers the page on landing
 * from search (Google's intrusive-interstitial guidance).
 *
 * It also adds one plain sentence — "(I found you through ChatGPT.)" — to the
 * WhatsApp message the visitor sends from any button, so admissions can tell
 * which assistant sent them. Nothing leaves the browser: the source is kept in
 * sessionStorage for this tab only, and the visitor sees and can edit the
 * message before sending. Privacy policy: "Cookies and browser storage".
 */

type Source = { name: string; kind: "ai" | "search" };

/** Referrer host → source. */
const HOSTS: [RegExp, Source][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, { name: "ChatGPT", kind: "ai" }],
  [
    /(^|\.)copilot\.microsoft\.com$|(^|\.)copilot\.cloud\.microsoft$/,
    { name: "Copilot", kind: "ai" },
  ],
  [/(^|\.)perplexity\.ai$/, { name: "Perplexity", kind: "ai" }],
  [/(^|\.)gemini\.google\.com$/, { name: "Gemini", kind: "ai" }],
  [/(^|\.)claude\.ai$/, { name: "Claude", kind: "ai" }],
  [/(^|\.)deepseek\.com$/, { name: "DeepSeek", kind: "ai" }],
  [/(^|\.)meta\.ai$/, { name: "Meta AI", kind: "ai" }],
  [/(^|\.)grok\.com$|(^|\.)x\.ai$/, { name: "Grok", kind: "ai" }],
  [/(^|\.)you\.com$/, { name: "You.com", kind: "ai" }],
  [/(^|\.)phind\.com$/, { name: "Phind", kind: "ai" }],
  [/(^|\.)bing\.com$/, { name: "Bing", kind: "search" }],
  // Google: ordinary results, AI Overviews and AI Mode all arrive from google.*
  [/(^|\.)google\.[a-z.]+$/, { name: "Google", kind: "search" }],
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

function detect(): Source | null {
  try {
    if (!document.referrer) return null;
    const host = new URL(document.referrer).hostname;
    if (host === window.location.hostname) return null;
    for (const [re, s] of HOSTS) if (re.test(host)) return s;
  } catch {
    /* malformed referrer */
  }
  return null;
}

export function AiArrival() {
  const [source, setSource] = useState<Source | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fresh = detect();
    if (fresh) write(KEY, JSON.stringify(fresh));
    let stored: Source | null = null;
    try {
      const raw = read(KEY);
      stored = raw ? (JSON.parse(raw) as Source) : null;
    } catch {
      stored = null;
    }
    const s = fresh ?? stored;
    if (!s) return;
    setSource(s);
    if (!fresh || read(SEEN)) return;

    const show = () => {
      write(SEEN, "1");
      setOpen(true);
    };
    if (s.kind === "ai") {
      const t = window.setTimeout(show, 1200);
      return () => clearTimeout(t);
    }
    // Search visitors: only after they start reading (scrolled ~40% of a screen).
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        window.removeEventListener("scroll", onScroll);
        show();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Add the plain "found you through …" sentence to every WhatsApp link the
  // visitor taps, including links in prerendered blocks React has not rebuilt.
  useEffect(() => {
    if (!source) return;
    const note = `(I found you through ${source.name}.)`;
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
  }, [source]);

  if (!source || !open) return null;
  const href = waLink(
    `Hi, I found you through ${source.name}. I want a free consultation for spoken English.`,
  );
  const headline =
    source.kind === "ai" ? `Came from ${source.name}?` : `Found us on ${source.name}?`;
  return (
    <aside
      role="dialog"
      aria-label={`Short answer for visitors from ${source.name}`}
      data-ai-source={source.name}
      className="ai-arrival fixed z-50 left-3 right-3 bottom-24 sm:left-auto sm:right-6 sm:bottom-28 sm:w-[23rem] rounded-[1.5rem] border-2 border-sunshine/60 bg-gradient-to-b from-amber-soft via-white to-slate-soft p-3.5 shadow-[0_20px_50px_-20px_rgba(8,70,51,.55)]"
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink/60 hover:bg-white hover:text-ink"
      >
        <Icon name="close" size={16} />
      </button>
      <div className="flex items-end gap-2 pr-8">
        <BoloParrot pose="wave" size={52} perch={false} decorative className="shrink-0" />
        <div className="relative mb-1 min-w-0 flex-1 rounded-2xl border-2 border-[#D5E7E4] bg-white px-3 py-2 shadow-sm">
          <span
            aria-hidden="true"
            className="absolute -left-[7px] bottom-3 h-3 w-3 rotate-45 border-b-2 border-l-2 border-[#D5E7E4] bg-white"
          />
          <p className="relative font-display text-sm font-extrabold leading-snug text-ink">
            {headline} Here is the short version.
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">
        Live online spoken English for adults, about 6 in a batch, same teacher, from{" "}
        <FeeText text="₹1,199/month" />
        <MarketCopy inr=" inclusive of taxes" usd="" /> — billed monthly, no auto-debit. Not sure
        which course? Ask a person free on WhatsApp.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa btn-chunky mt-3 w-full justify-center"
        data-cta-goal="whatsapp_ai_arrival"
      >
        <BrandIcon name="whatsapp" size={18} color="#053b1e" /> Ask on WhatsApp — it&apos;s free
      </a>
    </aside>
  );
}
