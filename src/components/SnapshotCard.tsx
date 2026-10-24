import type { CSSProperties, ReactNode } from "react";
import { VizIn } from "@/components/viz/Viz";
import { MiniWeekArc, PACKAGE_WEEK_LEGEND } from "@/components/viz/Signature";
import { RATING_DISPLAY } from "@/lib/seo";

export type SnapshotTone = "brand" | "indigo" | "coral" | "sage" | "violet";

export type SnapshotRow = {
  tone: SnapshotTone;
  icon: ReactNode;
  big: string;
  small: string;
};

export type SnapshotCardProps = {
  badge?: string;
  eyebrow?: string;
  headline?: { big: ReactNode; suffix?: ReactNode };
  subnote?: ReactNode;
  rows: SnapshotRow[];
  footer?: string;
  sticker?: { top: string; bottom: string };
  /** Show the package week as a smile beside the price (default on). */
  week?: boolean;
  className?: string;
};

/** Solid, vibrant icon tiles — same colours as the rest of the visual system. */
const TONE: Record<SnapshotTone, string> = {
  brand: "bg-tile-green text-white",
  indigo: "bg-tile-blue text-white",
  coral: "bg-tile-red text-white",
  sage: "bg-tile-teal text-white",
  violet: "bg-tile-violet text-white",
};

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

/**
 * The one snapshot card used in every hero (home, course pages, English &
 * Career, Why Us). Price, the week drawn as a smile, the package rows and the
 * rating live in a single card. Motion on load: the card rises, the rating
 * pops, the week arc draws day by day, rows slide in one after another.
 * Everything is in the prerendered HTML; motion stops under reduced motion.
 */
export function SnapshotCard({
  badge = "Live · Enrolling Now",
  eyebrow,
  headline,
  subnote,
  rows,
  footer = "Message Anytime · Replies 10am–midnight IST every day",
  // One rating, one source, sitewide — see RATING in src/lib/seo.ts.
  sticker = { top: RATING_DISPLAY, bottom: "Google" },
  week = true,
  className = "",
}: SnapshotCardProps) {
  return (
    <div className={`snap-rise relative ${className}`}>
      <VizIn
        eager
        className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_34px_70px_-40px_rgba(20,33,61,.55)]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-soft"
        />
        <div className="relative p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-deep">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
                </span>
                {badge}
              </span>
            )}
            {sticker && (
              <span
                className="snap-pop inline-flex items-center gap-1.5 rounded-full bg-sunshine px-3 py-1.5 text-sm font-extrabold text-ink shadow-[0_10px_22px_-12px_rgba(242,164,15,.9)]"
                style={delay(500)}
              >
                {sticker.top}
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {sticker.bottom}
                </span>
              </span>
            )}
          </div>

          <div className={`mt-4 grid items-center gap-4 ${week ? "sm:grid-cols-[1fr_auto]" : ""}`}>
            {(eyebrow || headline || subnote) && (
              <div className="snap-rise" style={delay(150)}>
                {eyebrow && (
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/70">
                    {eyebrow}
                  </p>
                )}
                {headline && (
                  <p className="mt-1 whitespace-nowrap font-extrabold leading-none text-ink">
                    <span className="text-[2.6rem] tracking-tight sm:text-5xl">{headline.big}</span>
                    {headline.suffix && (
                      <span className="text-lg text-ink/70">{headline.suffix}</span>
                    )}
                  </p>
                )}
                {subnote && <p className="mt-2 text-sm text-ink/70">{subnote}</p>}
              </div>
            )}
            {week && (
              <div className="mx-auto w-48 sm:w-44 lg:w-52">
                <MiniWeekArc delay={350} />
              </div>
            )}
          </div>

          <ul className="mt-5 grid gap-2.5 border-t border-border pt-4">
            {rows.map((r, i) => (
              <li
                key={i}
                className="snap-slide flex items-center gap-3"
                style={delay(450 + i * 140)}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${TONE[r.tone]}`}
                >
                  {r.icon}
                </span>
                <p className="min-w-0 font-extrabold leading-tight text-ink">
                  {r.big} <span className="text-sm font-semibold text-ink/75">{r.small}</span>
                </p>
              </li>
            ))}
          </ul>

          {week && (
            <ul className="mt-4 flex flex-wrap gap-x-3.5 gap-y-1.5 text-xs font-semibold text-ink/70">
              {PACKAGE_WEEK_LEGEND.map((l, i) => (
                <li
                  key={l.label}
                  className="snap-slide inline-flex items-center gap-1.5"
                  style={delay(900 + i * 90)}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: l.color }}
                    aria-hidden="true"
                  />
                  {l.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {footer && (
          <div className="relative bg-brand px-5 py-2.5 text-center text-[12px] font-bold tracking-wide text-white">
            {footer}
          </div>
        )}
      </VizIn>
    </div>
  );
}

/* ---------- Inline SVG icons used in snapshot rows ---------- */

const ico = (path: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

export const SnapIcons = {
  cap: ico(
    <>
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" />
    </>,
  ),
  calendar: ico(
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </>,
  ),
  people: ico(
    <>
      <circle cx="9" cy="9" r="2.5" />
      <circle cx="16.5" cy="10" r="2" />
      <path d="M3.5 18c.7-2.8 3-4.2 5.5-4.2s4.8 1.4 5.5 4.2" />
      <path d="M14.5 17.5c.4-1.8 2-3 3.5-3s2.5.8 3 2.2" />
    </>,
  ),
  book: ico(
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5A1.5 1.5 0 0 0 20 17.5z" />
    </>,
  ),
  spark: ico(
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
      <circle cx="12" cy="12" r="2" />
    </>,
  ),
  shield: ico(
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>,
  ),
  refresh: ico(
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>,
  ),
  chart: ico(
    <>
      <path d="M4 19h16" />
      <path d="M6 16V9" />
      <path d="M11 16V5" />
      <path d="M16 16v-8" />
    </>,
  ),
  rupee: ico(
    <>
      <path d="M7 6h10M7 10h10M9 6c4 0 4 6 0 6H7l7 7" />
    </>,
  ),
  whatsapp: ico(
    <>
      <path d="M4 20l1.6-4A8 8 0 1 1 8 18.4z" />
      <path d="M9 10.5c.4 1.4 1.6 2.6 3 3l1-1.2 2 1c-.3 1.2-1.5 1.8-2.7 1.5-2.2-.4-4-2.2-4.4-4.4-.3-1.2.3-2.4 1.5-2.7l1 2z" />
    </>,
  ),
};
