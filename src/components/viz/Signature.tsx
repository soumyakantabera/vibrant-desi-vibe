import type { CSSProperties, ReactNode } from "react";
import { VizIn } from "@/components/viz/Viz";

/**
 * Learn With Smile visual language (October 2026). Three styles, each with a job:
 *
 *  A · Smile arcs     — personal outcomes: your week, your speaking minutes,
 *                       the rating. Half-ring gauges echo the "smile" in the name.
 *  B · Jewel blocks   — structure and scores: package parts, practice grids,
 *                       feature scores as rows of blocks.
 *  C · Editorial      — market evidence: big numbers, thin lines, annotations.
 *
 * All of them follow the VizIn contract: final values in the prerendered HTML,
 * animation only for blocks that scroll into view, none under reduced motion.
 */

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* ---------------------------------------------------------------- A */

/** Point on a half-ring centred at (cx, cy); t = 0 is the left end, 1 the right. */
function arcPoint(cx: number, cy: number, r: number, t: number) {
  const a = Math.PI * (1 - t);
  return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) };
}
function arcPath(cx: number, cy: number, r: number, t0: number, t1: number) {
  const p0 = arcPoint(cx, cy, r, t0);
  const p1 = arcPoint(cx, cy, r, t1);
  return `M${p0.x.toFixed(2)},${p0.y.toFixed(2)} A${r},${r} 0 0 1 ${p1.x.toFixed(2)},${p1.y.toFixed(2)}`;
}

/** A · half-ring gauge. `value`/`max` sets the fill; the label sits in the smile. */
export function SmileGauge({
  value,
  max,
  big,
  label,
  color,
  delay = 0,
}: {
  value: number;
  max: number;
  big: string;
  label: string;
  color: string;
  delay?: number;
}) {
  const f = Math.max(0.02, Math.min(1, value / max));
  return (
    <svg viewBox="0 0 220 128" className="h-auto w-full" role="img" aria-label={`${big} ${label}`}>
      <path
        d={arcPath(110, 112, 90, 0, 1)}
        fill="none"
        stroke="var(--muted)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d={arcPath(110, 112, 90, 0, f)}
        fill="none"
        stroke={color}
        strokeWidth="18"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="100 100"
        className="viz-arc"
        style={d(delay)}
      />
      <text x="110" y="96" textAnchor="middle" fontSize="34" fontWeight="800" fill="var(--ink)">
        {big}
      </text>
      <text
        x="110"
        y="120"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill="var(--muted-foreground)"
      >
        {label}
      </text>
    </svg>
  );
}

export type WeekSeg = { day: string; color: string; what: string };

/** A · the signature: a week drawn as a smile, one segment per day. */
export function WeekArc({
  days,
  title,
  sub,
  legend,
}: {
  days: WeekSeg[];
  title: string;
  sub: string;
  legend: { color: string; label: string }[];
}) {
  const gap = 0.012;
  const n = days.length;
  return (
    <VizIn
      eager
      className="rounded-[1.75rem] border border-border bg-white p-5 shadow-[0_24px_48px_-36px_rgba(20,33,61,.45)]"
    >
      <svg
        viewBox="0 0 340 188"
        className="h-auto w-full"
        role="img"
        aria-label={`${title}. ${days.map((x) => `${x.day}: ${x.what}`).join(", ")}.`}
      >
        {days.map((day, i) => {
          const t0 = i / n + gap;
          const t1 = (i + 1) / n - gap;
          const mid = arcPoint(170, 174, 140, (t0 + t1) / 2);
          return (
            <g key={i}>
              <path
                d={arcPath(170, 174, 140, t0, t1)}
                fill="none"
                stroke={day.color}
                strokeWidth="24"
                strokeLinecap="butt"
                pathLength={100}
                strokeDasharray="100 100"
                className="viz-arc"
                style={d(120 + i * 110)}
              />
              <text
                x={mid.x}
                y={mid.y + 4.5}
                textAnchor="middle"
                fontSize="12"
                fontWeight="800"
                fill="#fff"
                className="viz-fade"
                style={d(400 + i * 110)}
              >
                {day.day}
              </text>
            </g>
          );
        })}
        <text x="170" y="158" textAnchor="middle" fontSize="76" fontWeight="800" fill="var(--ink)">
          {days.length}
        </text>
        <text
          x="170"
          y="182"
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="var(--muted-foreground)"
        >
          days a week
        </text>
      </svg>
      <p className="mt-2 text-center text-xl font-extrabold text-ink">{title}</p>
      <p className="text-center text-sm font-semibold text-ink/65">{sub}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-sm font-semibold text-ink/80">
        {legend.map((l) => (
          <li key={l.label} className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: l.color }}
              aria-hidden="true"
            />
            {l.label}
          </li>
        ))}
      </ul>
    </VizIn>
  );
}

/* ---------------------------------------------------------------- B */

/** B · a score as a row of blocks: full, half or empty. */
export function BlockMeter({
  score,
  max = 8,
  color,
  onDark = false,
  delay = 0,
}: {
  score: number;
  max?: number;
  color: string;
  onDark?: boolean;
  delay?: number;
}) {
  const empty = onDark ? "rgba(255,255,255,.25)" : "var(--muted)";
  return (
    <span className="flex gap-1" aria-hidden="true">
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.max(0, Math.min(1, score - i));
        const bg =
          fill >= 1
            ? color
            : fill > 0
              ? `linear-gradient(90deg, ${color} 50%, ${empty} 50%)`
              : empty;
        return (
          <span
            key={i}
            className="viz-dot block h-3.5 flex-1 rounded-[4px]"
            style={{ background: bg, ...d(delay + i * 45) }}
          />
        );
      })}
    </span>
  );
}

/* ---------------------------------------------------------------- C */

/** C · editorial stat: one big number, a hairline, a caption. */
export function EditorialStat({
  value,
  unit,
  caption,
  share,
  color,
  children,
}: {
  value: ReactNode;
  unit?: ReactNode;
  caption: ReactNode;
  share: number;
  color: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-5xl font-extrabold leading-none tracking-tight text-ink md:text-6xl">
        {value}
        {unit && <span className="ml-1 text-lg font-semibold text-ink/60">{unit}</span>}
      </p>
      <span className="block h-[3px] w-full overflow-hidden rounded-full bg-muted">
        <span
          className="viz-bar block h-full rounded-full"
          style={{ width: `${Math.round(share * 100)}%`, background: color }}
        />
      </span>
      <p className="text-sm font-semibold text-ink/70">{caption}</p>
      {children}
    </div>
  );
}
