import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Lazy, scroll-triggered visuals.
 *
 * Same contract as <Reveal>: the hidden ("out") state is only ever applied by
 * JavaScript, and only to blocks that are still below the fold when the page
 * hydrates. The prerendered HTML — what Google, AI crawlers and no-JS readers
 * get — always carries the final numbers, full bars and drawn lines.
 *
 * CSS in styles.css (search "lazy visuals") animates any child with
 * .viz-bar, .viz-col, .viz-pop, .viz-fade, .viz-ring, .viz-dot or .viz-draw
 * when the container flips from data-viz="out" to data-viz="in". Children set
 * their own start delay with the --d custom property.
 */

function prefersReducedMotion(): boolean {
  return Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
}

/**
 * Calls `onEnter` once the element scrolls into view. Returns false (and calls
 * nothing) when the element is already on screen, motion is reduced or
 * IntersectionObserver is missing — the caller should then show final state.
 */
function observeOnce(el: HTMLElement, onEnter: () => void): (() => void) | false {
  if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") return false;
  if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return false;
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        onEnter();
        io.disconnect();
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
  );
  io.observe(el);
  return () => io.disconnect();
}

export function VizIn({
  as: Tag = "div" as ElementType,
  className = "",
  eager = false,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  /** Animate on load even when already on screen (first-screen visuals). */
  eager?: boolean;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (eager) {
      if (prefersReducedMotion()) {
        el.dataset.viz = "in";
        return;
      }
      el.dataset.viz = "out";
      const t = window.setTimeout(() => {
        el.dataset.viz = "in";
      }, 120);
      return () => window.clearTimeout(t);
    }
    const stop = observeOnce(el, () => {
      el.dataset.viz = "in";
    });
    if (stop === false) {
      el.dataset.viz = "in";
      return;
    }
    el.dataset.viz = "out";
    return stop;
  }, [eager]);
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * A number that counts up when it scrolls into view. Server HTML and the first
 * client render both show the final value, so hydration matches and crawlers
 * read the real figure.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setShown(Math.round(value * easeOut(t)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const stop = observeOnce(el, run);
    if (stop === false) return;
    setShown(0);
    return () => {
      stop();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {shown.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/**
 * Two-series line chart that draws itself on scroll. Points are 0..1 of the
 * plot height. Labels are plain text so the figure reads without the drawing.
 */
export function LineDuo({
  a,
  b,
  labels,
  aLabel,
  bLabel,
  aEnd,
  bEnd,
  title,
}: {
  a: number[];
  b: number[];
  labels: string[];
  aLabel: string;
  bLabel: string;
  aEnd: string;
  bEnd: string;
  title: string;
}) {
  const W = 560;
  const H = 240;
  const padL = 12;
  const padR = 12;
  const padT = 16;
  const padB = 28;
  const x = (i: number) => padL + (i * (W - padL - padR)) / (labels.length - 1);
  const y = (v: number) => padT + (1 - v) * (H - padT - padB);
  const path = (s: number[]) => s.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const area = (s: number[]) => `${path(s)} L${x(s.length - 1)},${y(0)} L${x(0)},${y(0)} Z`;
  return (
    <VizIn as="figure" className="m-0">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={title}>
        {[0.25, 0.5, 0.75, 1].map((g) => (
          <line
            key={g}
            x1={padL}
            x2={W - padR}
            y1={y(g)}
            y2={y(g)}
            stroke="var(--border)"
            strokeDasharray="3 5"
          />
        ))}
        <path d={area(a)} fill="var(--brand)" opacity="0.08" className="viz-fade" />
        <path
          d={path(b)}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          pathLength={1}
          className="viz-draw"
          style={{ "--d": "200ms" } as React.CSSProperties}
        />
        <path
          d={path(a)}
          fill="none"
          stroke="var(--brand)"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength={1}
          className="viz-draw"
        />
        <circle
          cx={x(a.length - 1)}
          cy={y(a[a.length - 1])}
          r="6"
          fill="var(--brand)"
          className="viz-dot"
          style={{ "--d": "1300ms" } as React.CSSProperties}
        />
        <circle
          cx={x(b.length - 1)}
          cy={y(b[b.length - 1])}
          r="5"
          fill="var(--gold)"
          className="viz-dot"
          style={{ "--d": "1500ms" } as React.CSSProperties}
        />
        {labels.map((l, i) => (
          <text
            key={l}
            x={x(i)}
            y={H - 6}
            textAnchor={i === 0 ? "start" : i === labels.length - 1 ? "end" : "middle"}
            fontSize="12"
            fill="var(--muted-foreground)"
          >
            {l}
          </text>
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/85">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-brand" aria-hidden="true" />
          {aLabel}: <strong className="text-ink">{aEnd}</strong>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-gold" aria-hidden="true" />
          {bLabel}: <strong className="text-ink">{bEnd}</strong>
        </span>
      </figcaption>
    </VizIn>
  );
}
