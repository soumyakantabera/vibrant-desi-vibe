import type { ReactNode } from "react";

export type SnapshotTone = "brand" | "indigo" | "coral" | "sage";

export type SnapshotRow = {
  tone: SnapshotTone;
  icon: ReactNode;
  big: string;
  small: string;
};

export type SnapshotCardProps = {
  badge?: string;
  eyebrow?: string;
  headline?: { big: string; suffix?: string };
  subnote?: string;
  rows: SnapshotRow[];
  footer?: string;
  sticker?: { top: string; bottom: string };
  className?: string;
};

const TONE: Record<SnapshotTone, string> = {
  brand: "bg-brand/10 text-brand",
  indigo: "bg-indigo-pop/10 text-indigo-pop",
  coral: "bg-coral/15 text-coral",
  sage: "bg-sage/20 text-brand-deep",
};

export function SnapshotCard({
  badge = "Live · Enrolling Now",
  eyebrow,
  headline,
  subnote,
  rows,
  footer = "Free Demo · No Card Needed · WhatsApp in Minutes",
  sticker = { top: "4.9★", bottom: "Rated" },
  className = "",
}: SnapshotCardProps) {
  return (
    <div className={`relative animate-float ${className}`}>
      {sticker && (
        <div className="absolute -top-4 -right-4 z-20 rotate-12 bg-sunshine text-ink rounded-full h-14 w-14 sm:h-16 sm:w-16 flex flex-col items-center justify-center font-display font-extrabold shadow-xl border-4 border-cream">
          <span className="text-base sm:text-lg leading-none">{sticker.top}</span>
          <span className="text-[9px] uppercase tracking-wider mt-0.5">{sticker.bottom}</span>
        </div>
      )}

      <div className="relative -rotate-2 rounded-3xl bg-cream shadow-2xl border-4 border-cream/40 p-4 sm:p-5 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-sage/20"/>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-coral/15"/>

        <div className="relative">
          {badge && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wa/15 text-wa font-display font-bold text-[11px] uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-wa animate-pulse"/> {badge}
            </span>
          )}

          {(eyebrow || headline || subnote) && (
            <div className="mt-3">
              {eyebrow && <p className="text-ink/70 font-display font-bold text-xs uppercase tracking-wider">{eyebrow}</p>}
              {headline && (
                <p className="font-display font-extrabold text-ink leading-none mt-1">
                  <span className="text-4xl">{headline.big}</span>
                  {headline.suffix && <span className="text-lg text-ink/70">{headline.suffix}</span>}
                </p>
              )}
              {subnote && <p className="text-xs text-ink/70 mt-1">{subnote}</p>}
            </div>
          )}

          <div className="mt-4 space-y-2.5">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${TONE[r.tone]}`}>{r.icon}</span>
                <div className="min-w-0">
                  <p className="font-display font-extrabold text-ink leading-tight">
                    {r.big} <span className="font-bold text-ink/80 text-sm">{r.small}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {footer && (
            <div className="mt-4 -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 px-4 sm:px-5 py-2.5 bg-brand-deep text-cream text-center text-[12px] font-display font-bold tracking-wide">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Inline SVG icons used in snapshot rows ---------- */

const ico = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
);

export const SnapIcons = {
  cap: ico(<><path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/></>),
  calendar: ico(<><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"/></>),
  people: ico(<><circle cx="9" cy="9" r="2.5"/><circle cx="16.5" cy="10" r="2"/><path d="M3.5 18c.7-2.8 3-4.2 5.5-4.2s4.8 1.4 5.5 4.2"/><path d="M14.5 17.5c.4-1.8 2-3 3.5-3s2.5.8 3 2.2"/></>),
  book: ico(<><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5A1.5 1.5 0 0 0 20 17.5z"/></>),
  spark: ico(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/><circle cx="12" cy="12" r="2"/></>),
  shield: ico(<><path d="M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></>),
  refresh: ico(<><path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5"/><path d="M20 4v4.5h-4.5"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5"/><path d="M4 20v-4.5h4.5"/></>),
  chart: ico(<><path d="M4 19h16"/><path d="M6 16V9"/><path d="M11 16V5"/><path d="M16 16v-8"/></>),
  rupee: ico(<><path d="M7 6h10M7 10h10M9 6c4 0 4 6 0 6H7l7 7"/></>),
  whatsapp: ico(<><path d="M4 20l1.6-4A8 8 0 1 1 8 18.4z"/><path d="M9 10.5c.4 1.4 1.6 2.6 3 3l1-1.2 2 1c-.3 1.2-1.5 1.8-2.7 1.5-2.2-.4-4-2.2-4.4-4.4-.3-1.2.3-2.4 1.5-2.7l1 2z"/></>),
};
