import { type CSSProperties, type ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { FeeText, MarketCopy } from "@/components/FeeText";
import { CountUp, LineDuo, VizIn } from "@/components/viz/Viz";
import { INTL_FEE } from "@/lib/intl-fees";
import { COMPARE_REVISED_LABEL } from "@/lib/compare";
import { RATING } from "@/lib/seo";
import { TALK_TIME } from "@/lib/package";
import { BlockMeter, SmileGauge, WeekArc } from "@/components/viz/Signature";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

type Deep = "green" | "blue" | "saffron" | "violet" | "teal" | "red" | "slate";
const DEEP: Record<Deep, { bg: string; text: string; hex: string }> = {
  green: { bg: "bg-tile-green", text: "text-tile-green", hex: "var(--tile-green)" },
  blue: { bg: "bg-tile-blue", text: "text-tile-blue", hex: "var(--tile-blue)" },
  saffron: { bg: "bg-tile-saffron", text: "text-tile-saffron", hex: "var(--tile-saffron)" },
  violet: { bg: "bg-tile-violet", text: "text-tile-violet", hex: "var(--tile-violet)" },
  teal: { bg: "bg-tile-teal", text: "text-tile-teal", hex: "var(--tile-teal)" },
  red: { bg: "bg-tile-red", text: "text-tile-red", hex: "var(--tile-red)" },
  slate: { bg: "bg-[#475569]", text: "text-[#475569]", hex: "#475569" },
};

function Eyebrow({ children, tone }: { children: ReactNode; tone: Deep }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white ${DEEP[tone].bg}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------- hero visual */

const HERO_TILES: { tone: Deep; icon: IconName; big: string; label: string }[] = [
  { tone: "green", icon: "users", big: "2×", label: "live classes a week" },
  { tone: "blue", icon: "pen", big: "4", label: "daily exercises" },
  { tone: "saffron", icon: "video", big: "▶", label: "video library + tips" },
  { tone: "violet", icon: "review", big: "1×", label: "teacher review a week" },
];
const HERO_WEEK: { d: string; tone: Deep; what: string }[] = [
  { d: "M", tone: "blue", what: "Exercises" },
  { d: "T", tone: "green", what: "Live class" },
  { d: "W", tone: "blue", what: "Reading" },
  { d: "T", tone: "blue", what: "Speaking" },
  { d: "F", tone: "green", what: "Live class" },
  { d: "S", tone: "violet", what: "Review" },
  { d: "S", tone: "saffron", what: "Videos" },
];

/** Hero signature: the week drawn as a smile (style A). */
export function HeroPackageViz() {
  const live = "var(--tile-green)";
  const ex = "var(--tile-blue)";
  const rev = "var(--tile-violet)";
  const vid = "var(--tile-saffron)";
  return (
    <div className="mt-4 w-full">
      <WeekArc
        title="English every day, not just class days"
        sub="2 live classes · daily exercises · a weekly teacher review"
        days={[
          { day: "M", color: ex, what: "Grammar and vocabulary exercises" },
          { day: "T", color: live, what: "Live class" },
          { day: "W", color: ex, what: "Reading practice" },
          { day: "T", color: ex, what: "Speaking practice" },
          { day: "F", color: live, what: "Live class" },
          { day: "S", color: rev, what: "Teacher review" },
          { day: "S", color: vid, what: "Video library" },
        ]}
        legend={[
          { color: live, label: "Live class" },
          { color: ex, label: "Daily exercises" },
          { color: rev, label: "Teacher review" },
          { color: vid, label: "Videos" },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------- market gap */

type M = "y" | "p" | "n";
type Brand = { name: string; short: string; tone: Deep; fee: string; us?: boolean };

/** Fee strings match MARKET_COMPARE in src/lib/compare.ts (dated public bands). */
const BRANDS: Brand[] = [
  {
    name: "Learn With Smile",
    short: "LWS",
    tone: "green",
    fee: "₹1,499–₹2,499/mo, tax incl.",
    us: true,
  },
  { name: "EngVarta", short: "EngVarta", tone: "blue", fee: "₹2,700 / 25 × 15-min" },
  { name: "Cambly", short: "Cambly", tone: "red", fee: "₹8,000–₹15,000/mo if daily" },
  { name: "italki / Preply", short: "italki/Preply", tone: "saffron", fee: "₹250–₹4,000 / lesson" },
  {
    name: "British Council Online",
    short: "British Council",
    tone: "violet",
    fee: "₹8,800–₹16,000 / module",
  },
  {
    name: "AI apps (ELSA, Duolingo, Speak)",
    short: "AI apps",
    tone: "slate",
    fee: "₹300–₹1,200/mo",
  },
];

const FEATURES: { label: string; marks: [M, M, M, M, M, M] }[] = [
  { label: "Live human teacher", marks: ["y", "y", "y", "y", "y", "n"] },
  { label: "Small live batch — you speak with peers", marks: ["y", "n", "n", "n", "p", "n"] },
  { label: "Fixed course map (syllabus)", marks: ["y", "n", "n", "p", "y", "p"] },
  { label: "Daily exercises included", marks: ["y", "n", "n", "n", "p", "y"] },
  { label: "Teacher reviews your practice every week", marks: ["y", "p", "n", "p", "p", "n"] },
  { label: "Recorded video lessons included", marks: ["y", "n", "n", "n", "p", "p"] },
  { label: "Same teacher from start to finish", marks: ["y", "p", "p", "y", "p", "n"] },
  { label: "Indian learner context, Hindi/Bengali help", marks: ["y", "y", "n", "p", "p", "p"] },
];

const SCORE = BRANDS.map((_, bi) =>
  FEATURES.reduce((sum, f) => sum + (f.marks[bi] === "y" ? 1 : f.marks[bi] === "p" ? 0.5 : 0), 0),
);

/** Typical monthly spend, ₹ (assumptions are printed under the chart). */
const SPEND: [number, number][] = [
  [1499, 2499],
  [2700, 2700],
  [8000, 15000],
  [2000, 32000],
  [8800, 16000],
  [300, 1200],
];

function MarkCell({ m, us }: { m: M; us?: boolean }) {
  if (m === "y")
    return (
      <span className={`inline-flex ${us ? "text-white" : "text-tile-green"}`}>
        <Icon name="check" size={26} variant="fill" />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (m === "p")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-tile-saffron">
        <span className="h-5 w-5 rounded-full border-2 border-tile-saffron bg-[linear-gradient(90deg,var(--tile-saffron)_50%,transparent_50%)]" />
        Partly
      </span>
    );
  return (
    <span className="inline-flex text-ink/30">
      <Icon name="x-circle" size={24} />
      <span className="sr-only">No</span>
    </span>
  );
}

function PositionChart() {
  const W = 760;
  const H = 400;
  const L = 56;
  const R = 170;
  const Tp = 24;
  const B = 48;
  const lo = Math.log10(200);
  const hi = Math.log10(20000);
  const x = (v: number) => L + ((Math.log10(Math.min(v, 20000)) - lo) / (hi - lo)) * (W - L - R);
  const y = (s: number) => Tp + (1 - s / 8) * (H - Tp - B);
  const ticks = [250, 500, 1000, 2500, 5000, 10000, 20000];
  const label = (v: number) => (v >= 1000 ? `₹${v / 1000}k` : `₹${v}`);
  return (
    <VizIn as="figure" className="m-0">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Monthly cost against how much of a complete package each option includes. Learn With Smile sits alone in the top-left: complete and affordable."
      >
        <rect
          x={L}
          y={y(8)}
          width={x(3000) - L}
          height={y(5.5) - y(8)}
          rx="14"
          fill="var(--tile-green)"
          opacity="0.1"
          className="viz-fade"
        />
        <text x={L + 12} y={y(8) + 22} fontSize="15" fontWeight="800" fill="var(--tile-green)">
          THE GAP · complete + affordable
        </text>
        {[0, 2, 4, 6, 8].map((s) => (
          <g key={s}>
            <line
              x1={L}
              x2={W - R}
              y1={y(s)}
              y2={y(s)}
              stroke="var(--border)"
              strokeDasharray="3 6"
            />
            <text
              x={L - 12}
              y={y(s) + 4}
              fontSize="14"
              textAnchor="end"
              fill="var(--muted-foreground)"
            >
              {s}/8
            </text>
          </g>
        ))}
        {ticks.map((t) => (
          <text
            key={t}
            x={x(t)}
            y={H - 18}
            fontSize="14"
            textAnchor="middle"
            fill="var(--muted-foreground)"
          >
            {label(t)}
          </text>
        ))}
        <text
          x={(W - R + L) / 2}
          y={H - 1}
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fill="var(--ink)"
        >
          Typical monthly spend (log scale)
        </text>
        {BRANDS.map((b, i) => {
          const [a, z] = SPEND[i];
          const cy = y(SCORE[i]);
          const color = DEEP[b.tone].hex;
          const x1 = x(a);
          const x2 = Math.max(x(z), x1 + 14);
          return (
            <g key={b.name} style={d(250 + i * 140)}>
              <rect
                x={x1 - 7}
                y={cy - 5}
                width={x2 - x1 + 14}
                height="10"
                rx="5"
                fill={color}
                opacity={b.us ? 1 : 0.85}
                className="viz-bar"
                style={{ transformBox: "fill-box", ...d(250 + i * 140) }}
              />
              {z > 20000 && (
                <path d={`M${x2 + 9},${cy - 7} l9,7 l-9,7 z`} fill={color} className="viz-fade" />
              )}
              <text
                x={Math.min(x2 + (z > 20000 ? 32 : 14), W - R + 34)}
                y={cy + 5}
                fontSize={b.us ? 17 : 15}
                fontWeight={b.us ? 800 : 700}
                fill={color}
                className="viz-fade"
                style={d(500 + i * 140)}
              >
                {b.short} · {SCORE[i]}/8
              </text>
            </g>
          );
        })}
        <circle
          cx={x(1900)}
          cy={y(8)}
          r="14"
          fill="none"
          stroke="var(--tile-green)"
          strokeWidth="3"
          className="viz-dot"
          style={d(1200)}
        />
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-ink/65">
        Score = features from the table below (yes = 1, partly = ½). Spend assumptions: EngVarta’s
        25 short calls ≈ one month of near-daily practice; Cambly if daily; italki/Preply at 8
        lessons a month; British Council one module. Public bands, updated {COMPARE_REVISED_LABEL}.
      </figcaption>
    </VizIn>
  );
}

function GapVenn() {
  const circles = [
    { cx: 150, cy: 160, c: "var(--tile-green)", o: 0.16, delay: 0 },
    { cx: 270, cy: 160, c: "var(--tile-blue)", o: 0.16, delay: 150 },
    { cx: 210, cy: 265, c: "var(--tile-saffron)", o: 0.18, delay: 300 },
  ];
  return (
    <VizIn as="figure" className="m-0">
      <svg
        viewBox="0 0 420 420"
        className="h-auto w-full"
        role="img"
        aria-label="Three circles: a live teacher, daily practice, and under ₹3,000 a month. Only Learn With Smile sits where all three overlap."
      >
        {circles.map((k) => (
          <circle
            key={k.c}
            cx={k.cx}
            cy={k.cy}
            r="112"
            fill={k.c}
            opacity={k.o}
            className="viz-fade"
            style={d(k.delay)}
          />
        ))}
        {circles.map((k) => (
          <circle
            key={`s${k.c}`}
            cx={k.cx}
            cy={k.cy}
            r="112"
            fill="none"
            stroke={k.c}
            strokeWidth="2.5"
          />
        ))}
        <text x="18" y="24" fontSize="17" fontWeight="800" fill="var(--tile-green)">
          A live teacher
        </text>
        <text
          x="402"
          y="24"
          textAnchor="end"
          fontSize="17"
          fontWeight="800"
          fill="var(--tile-blue)"
        >
          Daily practice
        </text>
        <text
          x="210"
          y="412"
          textAnchor="middle"
          fontSize="17"
          fontWeight="800"
          fill="var(--tile-saffron)"
        >
          Under ₹3,000/mo
        </text>
        <g fontSize="14" fontWeight="700" fill="var(--ink)" className="viz-fade" style={d(500)}>
          <text x="54" y="116">
            Cambly
          </text>
          <text x="46" y="136">
            British Council
          </text>
          <text x="50" y="156">
            italki/Preply
          </text>
          <text x="110" y="262">
            EngVarta
          </text>
          <text x="256" y="262">
            AI apps
          </text>
        </g>
        <g className="viz-dot" style={d(900)}>
          <rect x="128" y="172" width="164" height="44" rx="22" fill="var(--tile-green)" />
          <text x="210" y="200" fontSize="15" fontWeight="800" textAnchor="middle" fill="#fff">
            Learn With Smile
          </text>
        </g>
      </svg>
    </VizIn>
  );
}

const GAP_TILES: { tone: Deep; icon: IconName; who: string; gets: string; misses: string }[] = [
  {
    tone: "slate",
    icon: "computer",
    who: "AI apps",
    gets: "Cheap daily practice",
    misses: "No people, no pressure, no teacher review",
  },
  {
    tone: "blue",
    icon: "headset",
    who: "1:1 tutor apps",
    gets: "A real person to talk to",
    misses: "No course map, no classmates, pay per minute",
  },
  {
    tone: "violet",
    icon: "school",
    who: "Big-name classrooms",
    gets: "A syllabus and a badge",
    misses: "8–40 in a room, minutes of speaking, higher fees",
  },
  {
    tone: "green",
    icon: "trophy",
    who: "Learn With Smile",
    gets: "All of it, in one fee",
    misses: "Live batch of ~6 + daily exercises + weekly review + videos",
  },
];

export function MarketGap() {
  return (
    <section className="section bg-white" id="market">
      <div className="container-x">
        <div className="mb-10 flex max-w-3xl flex-col gap-3">
          <Eyebrow tone="teal">Market analysis · {COMPARE_REVISED_LABEL}</Eyebrow>
          <h2 className="text-3xl leading-[1.08] text-ink md:text-5xl">
            Everyone sells one piece. <span className="text-tile-green">We fill the gap.</span>
          </h2>
          <p className="text-lg text-ink/75">
            Apps sell practice. Tutors sell minutes. Classrooms sell a syllabus. Indian learners
            need all three — at a price that works every month.
          </p>
        </div>

        <VizIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GAP_TILES.map((t, i) => (
            <article
              key={t.who}
              className={`viz-pop flex flex-col gap-3 rounded-3xl p-6 text-white shadow-[0_22px_44px_-30px_rgba(19,33,47,.7)] ${DEEP[t.tone].bg} ${t.tone === "green" ? "ring-4 ring-tile-green/25" : ""}`}
              style={d(i * 110)}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Icon name={t.icon} size={26} />
              </span>
              <h3 className="text-xl font-extrabold text-white">{t.who}</h3>
              <p className="flex items-start gap-2 font-semibold text-white">
                <Icon name="check" size={20} className="mt-0.5 shrink-0" />
                {t.gets}
              </p>
              <p className="flex items-start gap-2 text-white/85">
                <Icon
                  name={t.tone === "green" ? "spark" : "x-circle"}
                  size={20}
                  className="mt-0.5 shrink-0"
                />
                {t.misses}
              </p>
            </article>
          ))}
        </VizIn>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          <div className="rounded-3xl border border-border bg-paper p-5 md:p-7">
            <h3 className="text-xl font-extrabold md:text-2xl">Price vs what you actually get</h3>
            <p className="mb-3 mt-1 text-ink/70">
              Higher is more complete. Further left costs less. The top-left corner was empty.
            </p>
            <PositionChart />
          </div>
          <div className="rounded-3xl border border-border bg-paper p-5 md:p-7">
            <h3 className="text-xl font-extrabold md:text-2xl">Where the gap is</h3>
            <p className="mb-3 mt-1 text-ink/70">
              Each option covers one or two circles. The middle is what learners keep asking for.
            </p>
            <GapVenn />
          </div>
        </div>

        <VizIn className="mt-6 overflow-x-auto rounded-3xl border border-border bg-white">
          <table className="w-full min-w-[60rem] border-collapse text-left">
            <caption className="sr-only">Learn With Smile compared with named providers</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[17rem] p-4 text-sm font-bold text-ink/60">
                  What you get
                </th>
                {BRANDS.map((b) => (
                  <th
                    key={b.name}
                    scope="col"
                    className={`p-4 text-sm font-extrabold ${b.us ? "bg-tile-green text-white" : "text-ink"}`}
                  >
                    {b.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f, ri) => (
                <tr key={f.label} className="border-t border-border">
                  <th scope="row" className="p-4 text-base font-semibold text-ink">
                    {f.label}
                  </th>
                  {f.marks.map((m, ci) => (
                    <td key={ci} className={`p-4 ${ci === 0 ? "bg-tile-green" : ""}`}>
                      <span className="viz-pop inline-block" style={d(ri * 55 + ci * 35)}>
                        <MarkCell m={m} us={ci === 0} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-border">
                <th scope="row" className="p-4 text-base font-semibold text-ink">
                  Package score
                </th>
                {BRANDS.map((b, bi) => (
                  <td key={b.name} className={`p-4 ${b.us ? "bg-tile-green" : ""}`}>
                    <span
                      className={`block text-lg font-extrabold ${b.us ? "text-white" : DEEP[b.tone].text}`}
                    >
                      {SCORE[bi]}/8
                    </span>
                    <span className="mt-2 block">
                      <BlockMeter
                        score={SCORE[bi]}
                        color={b.us ? "#ffffff" : DEEP[b.tone].hex}
                        onDark={b.us}
                        delay={300 + bi * 120}
                      />
                    </span>
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border">
                <th scope="row" className="p-4 text-base font-semibold text-ink">
                  Public price band
                </th>
                {BRANDS.map((b) => (
                  <td
                    key={b.name}
                    className={`p-4 text-sm font-bold ${b.us ? "bg-tile-green text-white" : "text-ink/80"}`}
                  >
                    {b.us ? (
                      <MarketCopy
                        inr={<FeeText text={b.fee} />}
                        usd={`From ${INTL_FEE["spoken-english"].display}/mo`}
                      />
                    ) : (
                      <MarketCopy inr={b.fee} usd="Varies" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </VizIn>
        <p className="mt-3 text-xs leading-relaxed text-ink/60">
          Our reading of each provider’s public pages and published price bands, updated{" "}
          {COMPARE_REVISED_LABEL}. “Partly” means it depends on the plan, tutor or level. Not
          affiliated with any provider; confirm on their site before you decide. PlanetSpark
          (children 4–13) and IELTS shops (exam prep) are left out because they solve a different
          problem.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <VizIn className="rounded-3xl border border-border bg-paper p-6 md:p-7">
            <h3 className="text-xl font-extrabold">Your speaking minutes per hour of class</h3>
            <p className="mt-1 text-ink/70">
              Our published estimate: 40–45 minutes of each hour go to learners, shared by the
              batch.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {TALK_TIME.map((t, i) => (
                <figure key={t.label} className="m-0 flex flex-col items-center text-center">
                  <SmileGauge
                    value={t.max}
                    max={10}
                    big={t.range.replace(" min", "")}
                    label="min / hour"
                    color={
                      t.ours
                        ? "var(--tile-green)"
                        : i === 1
                          ? "var(--tile-blue)"
                          : "var(--tile-red)"
                    }
                    delay={i * 220}
                  />
                  <figcaption
                    className={`mt-1 text-sm leading-snug ${t.ours ? "font-bold text-ink" : "font-semibold text-ink/70"}`}
                  >
                    {t.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </VizIn>
          <div className="rounded-3xl border border-border bg-paper p-6 md:p-7">
            <h3 className="text-xl font-extrabold">Hours you actually speak, over 6 months</h3>
            <p className="mb-4 mt-1 text-ink/70">
              Up to 2 classes a week. Daily exercises come on top of this.
            </p>
            <LineDuo
              title="Cumulative speaking hours over six months: about 7.5 in a batch of about 6, about 1.25 in a 30-learner room."
              labels={["M1", "M2", "M3", "M4", "M5", "M6"]}
              a={[0.16, 0.33, 0.5, 0.66, 0.83, 1]}
              b={[0.03, 0.06, 0.08, 0.11, 0.14, 0.17]}
              aLabel="Batch of about 6"
              bLabel="30-learner room"
              aEnd="≈ 7–8 hours"
              bEnd="≈ 1–1.5 hours"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- google proof */

const PROOF: { tone: Deep; icon: IconName; value: number; suffix: string; label: string }[] = [
  { tone: "blue", icon: "users", value: 500, suffix: "+", label: "learners taught live" },
  { tone: "violet", icon: "calendar", value: 7, suffix: " yrs", label: "of live teaching" },
  { tone: "teal", icon: "globe", value: 11, suffix: "", label: "Indian states, plus worldwide" },
  { tone: "red", icon: "speak", value: 6, suffix: "", label: "learners in a batch, approx." },
];

export function GoogleProof() {
  return (
    <section className="section bg-paper" id="reviews">
      <div className="container-x grid items-stretch gap-5 lg:grid-cols-[1fr_1.3fr]">
        <VizIn className="flex flex-col justify-between gap-6 rounded-[2rem] bg-white p-7 shadow-[0_30px_60px_-45px_rgba(19,33,47,.55)] md:p-9">
          <div className="flex flex-col gap-3">
            <Eyebrow tone="saffron">Google reviews</Eyebrow>
            <h2 className="text-3xl leading-tight text-ink md:text-4xl">
              What learners say on Google
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-56 shrink-0">
              <SmileGauge
                value={5}
                max={5}
                big={RATING.value}
                label="Google rating"
                color="var(--sunshine)"
              />
            </div>
            <div>
              <span className="flex gap-1 text-[#E8A317]" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={26} variant="fill" />
                ))}
              </span>
              <p className="mt-1.5 font-semibold text-ink/75">
                from <CountUp value={RATING.count} className="font-extrabold text-ink" /> reviews
              </p>
            </div>
          </div>
          <p className="text-ink/70">
            Rating as shown on our Google Business Profile. Read every review there — or leave yours
            after your first month.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={RATING.readUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon name="star" size={18} variant="fill" /> Read our Google reviews
            </a>
            <a
              href={RATING.writeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Write a review
            </a>
          </div>
        </VizIn>

        <VizIn className="grid grid-cols-2 gap-4">
          {PROOF.map((p, i) => (
            <div
              key={p.label}
              className={`viz-pop flex flex-col justify-between gap-4 rounded-[1.75rem] p-6 text-white shadow-[0_22px_44px_-30px_rgba(19,33,47,.7)] md:p-7 ${DEEP[p.tone].bg}`}
              style={d(i * 110)}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Icon name={p.icon} size={26} />
              </span>
              <p>
                <span className="block text-5xl font-extrabold leading-none text-white md:text-6xl">
                  {p.value === 6 ? "~" : ""}
                  <CountUp value={p.value} suffix={p.suffix} />
                </span>
                <span className="mt-2 block text-base font-semibold text-white/90">{p.label}</span>
              </p>
            </div>
          ))}
        </VizIn>
      </div>
    </section>
  );
}
