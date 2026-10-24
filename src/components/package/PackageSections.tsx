import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { FeePair, FeeText, MarketCopy } from "@/components/FeeText";
import { CountUp, LineDuo, VizIn } from "@/components/viz/Viz";
import { INTL_FEE, intlUnit } from "@/lib/intl-fees";
import {
  COURSE_FEE,
  DEMO_FEE,
  LAUNCH_OFFER,
  launchOfferActive,
  launchOfferDaysLeft,
  type FeeSlug,
} from "@/lib/fees";
import {
  BEFORE_NOW,
  COURSE_PACKAGE,
  MARKET_COLUMNS,
  MARKET_PRICE,
  MARKET_ROWS,
  PART_TONE,
  PORTAL_MODULES,
  TALK_TIME,
  VIDEO_TOPICS,
  WEEK,
  type Mark,
  type PartKey,
  type VideoCourse,
} from "@/lib/package";

/* ------------------------------------------------------------ tokens */

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Six serious tile colours. `solid` carries white text except amber and terra. */
type Tone = "green" | "blue" | "amber" | "plum" | "teal" | "terra";
const T: Record<
  Tone,
  { soft: string; solid: string; deep: string; text: string; icon: string; bar: string }
> = {
  green: {
    soft: "bg-brand-soft",
    deep: "bg-tile-green",
    solid: "bg-brand",
    text: "text-brand-deep",
    icon: "text-white",
    bar: "bg-tile-green",
  },
  blue: {
    soft: "bg-slate-soft",
    deep: "bg-tile-blue",
    solid: "bg-indigo-pop",
    text: "text-[#1F3D63]",
    icon: "text-white",
    bar: "bg-tile-blue",
  },
  amber: {
    soft: "bg-amber-soft",
    deep: "bg-tile-saffron",
    solid: "bg-sunshine",
    text: "text-[#6A4A10]",
    icon: "text-ink",
    bar: "bg-tile-saffron",
  },
  plum: {
    soft: "bg-plum-soft",
    deep: "bg-tile-violet",
    solid: "bg-plum",
    text: "text-[#4E3470]",
    icon: "text-white",
    bar: "bg-tile-violet",
  },
  teal: {
    soft: "bg-teal-soft",
    deep: "bg-tile-teal",
    solid: "bg-teal",
    text: "text-[#145A5F]",
    icon: "text-white",
    bar: "bg-tile-teal",
  },
  terra: {
    soft: "bg-terra-soft",
    deep: "bg-tile-red",
    solid: "bg-coral",
    text: "text-[#8A3626]",
    icon: "text-ink",
    bar: "bg-tile-red",
  },
};

const PART: Record<PartKey, { tone: Tone; icon: IconName }> = {
  live: { tone: "green", icon: "users" },
  portal: { tone: "blue", icon: "pen" },
  videos: { tone: "amber", icon: "video" },
  review: { tone: "plum", icon: "review" },
  teacher: { tone: "terra", icon: "teacher" },
};

function Chip({
  tone,
  icon,
  size = "md",
}: {
  tone: Tone;
  icon: IconName;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg"
      ? "h-14 w-14 rounded-2xl"
      : size === "sm"
        ? "h-9 w-9 rounded-xl"
        : "h-11 w-11 rounded-2xl";
  const px = size === "lg" ? 28 : size === "sm" ? 18 : 22;
  return (
    <span
      className={`grid shrink-0 place-items-center text-white ring-1 ring-white/25 ${box} ${T[tone].deep}`}
    >
      <Icon name={icon} size={px} />
    </span>
  );
}

function Eyebrow({ children, tone = "green" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] ${T[tone].soft} ${T[tone].text}`}
    >
      {children}
    </span>
  );
}

function Head({
  eyebrow,
  tone,
  title,
  sub,
  align = "left",
  aside,
}: {
  eyebrow: ReactNode;
  tone?: Tone;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  aside?: ReactNode;
}) {
  return (
    <div
      className={`mb-8 flex flex-col gap-5 md:mb-10 ${align === "center" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"}`}
    >
      <div
        className={`flex max-w-3xl flex-col gap-3 ${align === "center" ? "items-center" : "items-start"}`}
      >
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 className="text-[1.65rem] font-bold leading-[1.12] text-ink md:text-[2.35rem]">
          {title}
        </h2>
        {sub && <p className="text-base text-ink/75 md:text-lg">{sub}</p>}
      </div>
      {aside}
    </div>
  );
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches));
  }, []);
  return reduced;
}

/* ------------------------------------------------------------- offer band */

export function LaunchOfferBand() {
  const [visible, setVisible] = useState(() => launchOfferActive());
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    if (!launchOfferActive()) {
      setVisible(false);
      return;
    }
    setDays(launchOfferDaysLeft());
  }, []);
  if (!visible) return null;
  return (
    <section className="bg-white py-4" aria-label="Launch offer">
      <div className="container-x">
        <div className="flex flex-col gap-4 rounded-3xl border border-[#EAD9B6] bg-amber-soft p-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-start gap-4">
            <Chip tone="amber" icon="spark" />
            <p className="text-sm text-ink/80 md:text-base">
              <strong className="block text-base font-bold text-ink md:text-lg">
                {LAUNCH_OFFER.headline}
              </strong>
              For new learners who enrol by {LAUNCH_OFFER.endsLabel}. The course fee stays the same.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex min-w-[5.5rem] flex-col items-center rounded-2xl bg-ink px-3 py-1.5">
              <span className="text-xl font-extrabold leading-tight">
                {days === null ? "30 Nov" : days}
              </span>
              <span className="text-[0.65rem] font-bold uppercase tracking-wider">
                {days === null ? "last day" : days === 1 ? "day left" : "days left"}
              </span>
            </span>
            <WaButton
              message="Hi, I want to join with the launch offer (extra month of portal and videos). Please share the next batch."
              variant="primary"
              size="sm"
              goal="launch_offer"
            >
              Claim on WhatsApp
            </WaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ five-part strip */

/**
 * The package strip with its own heading, for pages that do not carry the
 * homepage story above it: guides, city pages and blog articles.
 */
export function PackageBand({ title }: { title?: string }) {
  return (
    <section className="border-y border-border bg-paper pt-12 md:pt-14" data-package="band">
      <div className="container-x mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-deep">
            One fee · the complete package
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-ink md:text-[2rem]">
            {title ?? (
              <>
                Every course includes all five, from <FeeText text="₹1,499/month" />.
              </>
            )}
          </h2>
        </div>
        <Link
          to="/english-class-fees-india"
          className="inline-flex items-center gap-2 font-bold text-brand-deep hover:underline"
        >
          See every fee <Icon name="arrow-right" size={18} />
        </Link>
      </div>
      <PackageStrip bare />
    </section>
  );
}

export function PackageStrip({ bare = false }: { bare?: boolean }) {
  const items: { key: PartKey; body: string }[] = [
    { key: "live", body: "Up to 2 a week · 90 min · approx. 6 learners." },
    { key: "portal", body: "Daily grammar, vocabulary, reading and speaking." },
    { key: "videos", body: "Tips to start speaking, grammar, fluency." },
    { key: "review", body: "Your reading and speaking, checked every week." },
    { key: "teacher", body: "Real teachers. One teacher for your batch." },
  ];
  return (
    <section className={bare ? "pb-12 md:pb-14" : "bg-white pb-8"}>
      <VizIn className="container-x grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(({ key, body }, i) => {
          const tone = PART[key].tone;
          return (
            <div
              key={key}
              className={`viz-pop flex items-start gap-3 rounded-2xl p-4 text-white shadow-[0_16px_34px_-24px_rgba(19,33,47,.6)] ${T[tone].deep}`}
              style={d(i * 80)}
            >
              <Chip tone={tone} icon={PART[key].icon} size="sm" />
              <p className="text-sm">
                <strong className="block font-bold text-white">
                  {key === "portal" ? "Daily exercises" : PART_TONE[key].label}
                </strong>
                <span className="text-white/85">{body}</span>
              </p>
            </div>
          );
        })}
      </VizIn>
    </section>
  );
}

/* --------------------------------------------------- the week + matrix */

const KIND: Record<(typeof WEEK)[number]["kind"], Tone> = {
  "Live class": "green",
  Portal: "blue",
  Review: "plum",
};

const MATRIX: { label: string; tone: Tone; days: number[] }[] = [
  { label: "Live class", tone: "green", days: [1, 4] },
  { label: "Grammar", tone: "blue", days: [0, 1, 2, 3, 4, 5, 6] },
  { label: "Vocabulary", tone: "teal", days: [0, 1, 2, 3, 4, 5, 6] },
  { label: "Reading", tone: "amber", days: [2, 6] },
  { label: "Speaking", tone: "terra", days: [3, 6] },
  { label: "Teacher review", tone: "plum", days: [5] },
];

export function WeekStrip() {
  const [picked, setPicked] = useState(1);
  const sel = WEEK[picked];
  return (
    <section className="section bg-paper" id="week">
      <div className="container-x">
        <Head
          eyebrow="A week with Learn With Smile"
          title={
            <>
              Not “just 2 classes”. <span className="text-brand">English every day.</span>
            </>
          }
          sub="Two live classes build the habit. Daily exercises keep it going, and every week your teacher reviews your reading and speaking — so nothing fades between classes."
        />
        <VizIn
          className="grid gap-2.5 lg:grid-cols-7 lg:gap-3"
          role="group"
          aria-label="Example week"
        >
          {WEEK.map((day, i) => {
            const tone = KIND[day.kind];
            const on = picked === i;
            return (
              <button
                key={day.day}
                type="button"
                onClick={() => setPicked(i)}
                aria-pressed={on}
                style={d(i * 70)}
                className={`viz-pop flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition lg:min-h-[12.5rem] lg:flex-col lg:items-start lg:p-5 ${on ? `${T[tone].soft} border-current ${T[tone].text} -translate-y-1 shadow-[0_18px_40px_-28px_rgba(19,33,47,.45)]` : "border-border bg-white hover:border-ink/25"}`}
              >
                <span className="w-10 shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink/60 lg:w-auto">
                  {day.day}
                </span>
                <span className="hidden lg:block">
                  <Chip
                    tone={tone}
                    icon={tone === "green" ? "users" : tone === "plum" ? "review" : "pen"}
                    size="sm"
                  />
                </span>
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-sm lg:hidden ${T[tone].solid}`}
                  aria-hidden="true"
                />
                <span className="text-[0.95rem] font-bold leading-snug text-ink lg:text-base">
                  {day.title}
                </span>
                <span className="ml-auto flex gap-1.5 lg:ml-0 lg:mt-auto" aria-hidden="true">
                  {day.kind === "Live class" && (
                    <span className="viz-live h-2 w-2 rounded-full bg-brand" />
                  )}
                  {day.video && <span className="h-1.5 w-6 rounded-full bg-sunshine" />}
                </span>
              </button>
            );
          })}
        </VizIn>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-3xl border border-border bg-white p-6 md:p-7" aria-live="polite">
            <span
              className={`text-xs font-bold uppercase tracking-[0.14em] ${T[KIND[sel.kind]].text}`}
            >
              {sel.day} · {sel.kind}
            </span>
            <h3 className="mt-2 text-xl font-bold md:text-2xl">{sel.title}</h3>
            <p className="mt-2 text-ink/80 md:text-lg">{sel.detail}</p>
            <p className="mt-3 text-sm text-ink/60">
              Example week. Live days follow your batch slot — afternoon, evening or night.
            </p>
          </div>

          <VizIn className="rounded-3xl border border-border bg-white p-5 md:p-6">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="text-base font-bold md:text-lg">Your practice, day by day</h3>
              <span className="text-xs font-semibold text-ink/60">Example week</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[26rem] table-fixed border-separate border-spacing-1.5 text-xs">
                <caption className="sr-only">Which practice happens on which day</caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-28">
                      <span className="sr-only">Practice</span>
                    </th>
                    {WEEK.map((w) => (
                      <th key={w.day} scope="col" className="font-semibold text-ink/60">
                        {w.day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((row, ri) => (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className="whitespace-nowrap pr-2 text-left font-semibold text-ink/80"
                      >
                        {row.label}
                      </th>
                      {WEEK.map((w, ci) => {
                        const on = row.days.includes(ci);
                        return (
                          <td key={w.day} className="p-0">
                            <span
                              style={d(ri * 90 + ci * 35)}
                              className={`viz-dot block h-6 rounded-md ${on ? T[row.tone].deep : "bg-muted"}`}
                            >
                              <span className="sr-only">{on ? "Yes" : "No"}</span>
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
              {[
                { n: 2, l: "live classes", c: "text-brand-deep" },
                { n: 4, l: "daily exercise types", c: "text-[#1F3D63]" },
                { n: 1, l: "teacher review", c: "text-[#4E3470]" },
              ].map((s) => (
                <p key={s.l}>
                  <CountUp value={s.n} className={`block text-3xl font-extrabold ${s.c}`} />
                  <span className="text-xs text-ink/70 md:text-sm">{s.l}</span>
                </p>
              ))}
            </div>
          </VizIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- package slides */

const SLIDES: {
  key: PartKey;
  label: string;
  big: string;
  bigLabel: string;
  title: string;
  points: string[];
}[] = [
  {
    key: "live",
    label: "Live classes",
    big: "~6",
    bigLabel: "learners in your batch",
    title: "Live classes where you actually speak",
    points: [
      "Up to 2 live classes a week, 90 minutes each",
      "You speak in every round and get corrected on the spot",
      "Afternoon, evening and night slots, IST",
    ],
  },
  {
    key: "portal",
    label: "Daily exercises",
    big: "4",
    bigLabel: "exercise types, every day",
    title: "Daily exercises in the learner portal",
    points: [
      "Grammar and vocabulary exercises every day",
      "Reading practice: read aloud, find the grammar in the text",
      "Speaking practice: whole conversations, recorded",
    ],
  },
  {
    key: "videos",
    label: "Video library",
    big: "24/7",
    bigLabel: "recorded lessons, any time",
    title: "A video library to revise anytime",
    points: [
      "Tips and tricks to start speaking English",
      "Grammar, fluency and thinking in English",
      "What to say when your mind goes blank",
    ],
  },
  {
    key: "review",
    label: "Weekly review",
    big: "Weekly",
    bigLabel: "feedback from your teacher",
    title: "Your teacher reviews your reading and speaking",
    points: [
      "Submit your reading and speaking practice in the portal",
      "Your teacher reviews it every week",
      "The next live class picks up from that feedback",
    ],
  },
  {
    key: "teacher",
    label: "Same teacher",
    big: "1",
    bigLabel: "teacher for your whole course",
    title: "The same teacher, start to finish",
    points: [
      "Your batch keeps one teacher for the whole course",
      "The same teacher runs your classes and your weekly review",
      "A trained team led by lead educator Sunanda Dey",
    ],
  },
];

const SLIDE_MS = 6500;

export function PackageSlides() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const auto = !reduced && !paused;

  useEffect(() => {
    if (!auto) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % SLIDES.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [i, auto]);

  const go = (n: number) => setI((n + SLIDES.length) % SLIDES.length);

  return (
    <section className="section bg-white" id="package">
      <div className="container-x">
        <Head
          align="center"
          tone="blue"
          eyebrow="The complete package"
          title="Everything you need to speak — in one monthly fee"
          sub="Live classes, daily exercises, a video library and a weekly teacher review. Every course includes all of it."
        />
        <div
          className="mx-auto max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="What the package includes"
        >
          <div className="mb-4 grid grid-cols-5 gap-2" role="tablist" aria-label="Choose a part">
            {SLIDES.map((s, n) => {
              const tone = PART[s.key].tone;
              return (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  aria-controls={`pkg-slide-${s.key}`}
                  aria-label={s.label}
                  onClick={() => go(n)}
                  className="group flex min-h-11 flex-col justify-center gap-2 text-left"
                >
                  <span className="relative block h-1.5 overflow-hidden rounded-full bg-muted">
                    <span
                      key={n === i ? `${i}-${auto}` : "idle"}
                      className={`absolute inset-y-0 left-0 rounded-full ${T[tone].bar} ${n < i ? "w-full" : n === i ? (auto ? "slide-progress" : "w-full") : "w-0"}`}
                      style={{ "--slide-ms": `${SLIDE_MS}ms` } as CSSProperties}
                    />
                  </span>
                  <span
                    className={`hidden text-xs font-bold sm:block ${n === i ? T[tone].text : "text-ink/55 group-hover:text-ink/80"}`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid">
            {SLIDES.map((s, n) => {
              const tone = PART[s.key].tone;
              const on = n === i;
              return (
                <article
                  key={s.key}
                  id={`pkg-slide-${s.key}`}
                  role="tabpanel"
                  aria-hidden={!on}
                  className={`[grid-area:1/1] grid overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_30px_60px_-45px_rgba(19,33,47,.5)] transition-all duration-500 md:grid-cols-[0.9fr_1.1fr] ${on ? "visible translate-x-0 opacity-100" : "invisible translate-x-6 opacity-0"}`}
                >
                  <div
                    className={`relative flex flex-col justify-between gap-6 overflow-hidden p-7 text-white md:p-9 ${T[tone].deep}`}
                  >
                    <Chip tone={tone} icon={PART[s.key].icon} size="lg" />
                    <div className="relative">
                      <p className="text-6xl font-extrabold leading-none tracking-tight text-white md:text-7xl">
                        {s.big}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white/90">{s.bigLabel}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-7 md:p-9">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/55">
                      {n + 1} / {SLIDES.length} · {s.label}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl">{s.title}</h3>
                    <ul className="flex flex-col gap-3">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-ink/85 md:text-lg">
                          <Icon name="check" size={22} className={`mt-0.5 ${T[tone].text}`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => go(i - 1)}
                        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-ink transition hover:bg-paper"
                        aria-label="Previous"
                        tabIndex={on ? 0 : -1}
                      >
                        <Icon name="caret-left" size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(i + 1)}
                        className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition hover:bg-ink/85"
                        aria-label="Next"
                        tabIndex={on ? 0 : -1}
                      >
                        <Icon name="caret-right" size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <ul className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink">
          <li className="text-brand-deep">Also in every fee:</li>
          {[
            "Inclusive of taxes",
            "No material fee",
            "Free consultation",
            "WhatsApp 10am–midnight IST",
            "Monthly billing · UPI",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-brand" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- daily exercises */

const MODULE_TONE: Record<(typeof PORTAL_MODULES)[number]["icon"], Tone> = {
  grammar: "blue",
  vocab: "teal",
  read: "amber",
  speak: "terra",
  review: "plum",
};

const QUIZ = { q: "She ____ to the office every day.", opts: ["go", "goes", "going"], a: "goes" };

export function PortalShowcase() {
  const [picked, setPicked] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const mod = PORTAL_MODULES[picked];
  const tone = MODULE_TONE[mod.icon];
  const isQuiz = mod.icon === "grammar";
  return (
    <section className="section grid-texture-light bg-paper" id="portal">
      <div className="container-x">
        <Head
          tone="blue"
          eyebrow="Daily exercises · learner portal"
          title={
            <>
              Grammar, vocabulary, reading, speaking.{" "}
              <span className="text-indigo-pop">Every day.</span>
            </>
          }
          sub="Short daily exercises that match your course — and every week your teacher reviews the reading and speaking you submit."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,25rem)_1fr]">
          <div className="flex flex-col gap-2.5" role="group" aria-label="Exercise types">
            {PORTAL_MODULES.map((m, i) => {
              const on = picked === i;
              const t = MODULE_TONE[m.icon];
              return (
                <button
                  key={m.title}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setPicked(i);
                    setAnswer(null);
                  }}
                  className={`flex min-h-[4.5rem] items-center gap-4 rounded-2xl border-2 bg-white px-4 py-3 text-left transition ${on ? `border-current ${T[t].text} shadow-[0_16px_34px_-24px_rgba(19,33,47,.5)]` : "border-transparent hover:border-border"}`}
                >
                  <Chip tone={t} icon={m.icon} size="sm" />
                  <span>
                    <span className="block font-bold text-ink">{m.title}</span>
                    <span className="text-sm text-ink/65">{m.sub}</span>
                  </span>
                  <Icon
                    name="caret-right"
                    size={16}
                    className={`ml-auto ${on ? "" : "text-ink/30"}`}
                  />
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_30px_60px_-45px_rgba(19,33,47,.55)]">
            <div className={`flex items-center gap-3 px-6 py-4 ${T[tone].soft}`}>
              <Chip tone={tone} icon={mod.icon} size="sm" />
              <span className={`font-bold ${T[tone].text}`}>{mod.title}</span>
              <span className="ml-auto rounded-full bg-white px-2.5 py-1 text-xs font-bold text-ink/70">
                Learner portal
              </span>
            </div>
            <div
              key={picked}
              className="slide-in flex min-h-[22rem] flex-col gap-4 p-6 md:p-8"
              aria-live="polite"
            >
              {isQuiz ? (
                <>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/55">
                    Try one
                  </p>
                  <p className="text-xl font-semibold text-ink md:text-2xl">{QUIZ.q}</p>
                  <div className="flex flex-wrap gap-3">
                    {QUIZ.opts.map((o) => {
                      const chosen = answer === o;
                      const right = o === QUIZ.a;
                      const cls = chosen
                        ? right
                          ? "border-brand bg-brand-soft text-brand-deep"
                          : "border-coral-deep bg-terra-soft text-coral-deep"
                        : "border-border bg-white text-ink hover:border-indigo-pop";
                      return (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setAnswer(o)}
                          className={`min-h-12 min-w-28 rounded-2xl border-2 px-5 text-lg font-bold transition ${cls}`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  {answer && (
                    <p
                      className={`slide-in rounded-2xl px-4 py-3 font-semibold ${answer === QUIZ.a ? "bg-brand-soft text-brand-deep" : "bg-terra-soft text-coral-deep"}`}
                    >
                      {answer === QUIZ.a
                        ? "Correct — with “she”, the present simple takes goes."
                        : "Not quite — with she, he or it, add -s: “She goes”."}
                    </p>
                  )}
                </>
              ) : (
                <ol className="flex flex-col gap-3">
                  {mod.sample.map((line, i) => (
                    <li
                      key={line}
                      className={`flex items-start gap-3 rounded-2xl px-4 py-3.5 text-ink ${T[tone].soft}`}
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-sm font-bold ${T[tone].text}`}
                      >
                        {i + 1}
                      </span>
                      {line}
                    </li>
                  ))}
                </ol>
              )}
              <div className="mt-auto grid grid-cols-4 gap-2" aria-hidden="true">
                {(["grammar", "vocab", "read", "speak"] as const).map((k) => (
                  <span key={k} className="flex flex-col gap-1.5">
                    <span className="viz-sweep h-2 rounded-full bg-muted">
                      <span
                        className={`block h-full rounded-full ${T[MODULE_TONE[k]].bar}`}
                        style={{ width: k === "grammar" || k === "vocab" ? "85%" : "45%" }}
                      />
                    </span>
                    <span className="text-[0.7rem] font-semibold text-ink/60">
                      {k === "vocab"
                        ? "Vocabulary"
                        : k === "read"
                          ? "Reading"
                          : k === "speak"
                            ? "Speaking"
                            : "Grammar"}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink/60">
          Sample exercises for illustration. Enrolled learners get portal login details after
          admission; access runs while you are enrolled.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- review loop */

const LOOP: { tone: Tone; icon: IconName; title: string; body: string }[] = [
  {
    tone: "green",
    icon: "users",
    title: "Learn it live",
    body: "Your teacher introduces and drills it in a live class of about 6.",
  },
  {
    tone: "blue",
    icon: "pen",
    title: "Practise daily",
    body: "Grammar and vocabulary exercises every day in the portal.",
  },
  {
    tone: "amber",
    icon: "speak",
    title: "Submit reading & speaking",
    body: "Read aloud and record a conversation — submitted in the portal.",
  },
  {
    tone: "plum",
    icon: "review",
    title: "Teacher reviews weekly",
    body: "Every week your teacher reviews it, and the next class starts from that feedback.",
  },
];

export function ReviewLoop() {
  const [step, setStep] = useState(0);
  const [hold, setHold] = useState(false);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced || hold) return;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % LOOP.length), 2600);
    return () => window.clearTimeout(t);
  }, [step, reduced, hold]);
  const cur = LOOP[step];
  const POS = [
    "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
    "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
    "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  ];
  return (
    <section className="section bg-white" id="review">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Head
            tone="plum"
            eyebrow="The weekly review loop"
            title={
              <>
                Practice that a teacher <span className="text-plum">actually checks.</span>
              </>
            }
            sub="Apps give you exercises. Here, every week your teacher reviews your reading and speaking, so practice turns into progress."
          />
          <ol className="flex flex-col gap-2.5">
            {LOOP.map((s, n) => (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => {
                    setStep(n);
                    setHold(true);
                  }}
                  aria-pressed={n === step}
                  className={`flex w-full items-start gap-4 rounded-2xl border-2 p-4 text-left transition ${n === step ? `${T[s.tone].soft} border-current ${T[s.tone].text}` : "border-border bg-white hover:border-ink/20"}`}
                >
                  <Chip tone={s.tone} icon={s.icon} size="sm" />
                  <span>
                    <span className="block font-bold text-ink">
                      {n + 1}. {s.title}
                    </span>
                    <span className="text-sm text-ink/70">{s.body}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto hidden w-full max-w-[26rem] p-8 sm:block" aria-hidden="true">
          <div className="relative aspect-square">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
              <circle cx="100" cy="100" r="88" fill="none" stroke="var(--border)" strokeWidth="2" />
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="var(--plum)"
                strokeWidth="2.5"
                strokeDasharray="6 10"
                className="loop-spin"
              />
            </svg>
            <span className="loop-orbit absolute inset-0">
              <span className="absolute left-1/2 top-[6%] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum shadow-[0_0_0_6px_rgba(106,76,140,.18)]" />
            </span>
            {LOOP.map((s, n) => (
              <span
                key={s.title}
                className={`absolute ${POS[n]} transition-all duration-500 ${n === step ? "scale-110" : "scale-90 opacity-60"}`}
              >
                <Chip tone={s.tone} icon={s.icon} size="lg" />
              </span>
            ))}
            <div className="absolute inset-[22%] grid place-items-center rounded-full bg-paper p-6 text-center">
              <div key={step} className="slide-in">
                <p className={`text-xs font-bold uppercase tracking-[0.14em] ${T[cur.tone].text}`}>
                  Step {step + 1} of 4
                </p>
                <p className="mt-1 text-lg font-bold leading-tight text-ink md:text-xl">
                  {cur.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- tips tiles */

const TIPS: { tone: Tone; icon: IconName; title: string; trick: string }[] = [
  {
    tone: "green",
    icon: "speak",
    title: "Start with 3-word sentences",
    trick:
      "Short and correct beats long and stuck. “I need help.” “Can you repeat?” Then build up.",
  },
  {
    tone: "blue",
    icon: "clock",
    title: "Use a starter phrase",
    trick:
      "“Let me think…” or “That’s a good question” gives you three seconds — without a silence.",
  },
  {
    tone: "amber",
    icon: "brain",
    title: "Think in English labels",
    trick:
      "Name things around you in English — door, laptop, late — so words come without translating.",
  },
  {
    tone: "plum",
    icon: "wave",
    title: "Shadow 30 seconds a day",
    trick: "Play a short clip, pause, and repeat it aloud with the same rhythm and stress.",
  },
  {
    tone: "teal",
    icon: "vocab",
    title: "Keep a pocket list of 10",
    trick:
      "Ten phrases you use every day. Swap in new ones each week from your vocabulary exercises.",
  },
  {
    tone: "terra",
    icon: "mic",
    title: "Record once a week",
    trick: "Listen back once and you will hear what to fix — your teacher reviews it too.",
  },
];

export function TipsTiles() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section bg-paper" id="tips">
      <div className="container-x">
        <Head
          tone="amber"
          eyebrow="Tips & tricks to start speaking"
          title="Small tricks that get you talking"
          sub="The video library includes tips and tricks to start speaking English. Here is a taste — tap a tile to flip it."
        />
        <VizIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((tip, n) => {
            const flipped = open === n;
            return (
              <button
                key={tip.title}
                type="button"
                aria-pressed={flipped}
                onClick={() => setOpen(flipped ? null : n)}
                className="viz-pop flip-tile h-52 text-left"
                style={d(n * 80)}
              >
                <span
                  className={`flip-inner relative block h-full w-full ${flipped ? "is-flipped" : ""}`}
                >
                  <span
                    className={`flip-face absolute inset-0 flex flex-col justify-between rounded-3xl p-6 text-white ${T[tip.tone].deep}`}
                  >
                    <span className="flex items-center justify-between">
                      <Chip tone={tip.tone} icon={tip.icon} />
                      <span className="text-4xl font-extrabold text-white/35">0{n + 1}</span>
                    </span>
                    <span>
                      <span className="block text-xl font-bold leading-snug text-white">
                        {tip.title}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-white/80">
                        Tap for the trick <Icon name="arrow-right" size={14} />
                      </span>
                    </span>
                  </span>
                  <span className="flip-face flip-back absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-white p-6">
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.14em] ${T[tip.tone].text}`}
                    >
                      {tip.title}
                    </span>
                    <span className="text-lg leading-snug text-ink">{tip.trick}</span>
                    <span
                      className={`h-1.5 w-12 rounded-full ${T[tip.tone].bar}`}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </button>
            );
          })}
        </VizIn>
      </div>
    </section>
  );
}

/* --------------------------------------------------- video carousel */

const VIDEO_TABS: ("All" | VideoCourse)[] = [
  "All",
  "Spoken English",
  "Interactive Speaking",
  "Business English",
  "Interview Prep",
];
const CAT_TONE: Tone[] = ["amber", "blue", "teal", "plum", "green", "terra"];

export function VideoLibrary({ initial = "All" }: { initial?: "All" | VideoCourse }) {
  const [course, setCourse] = useState<"All" | VideoCourse>(initial);
  const [progress, setProgress] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const shown = VIDEO_TOPICS.filter((v) => course === "All" || v.tags.includes(course));

  const measure = () => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  };
  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
    measure();
  }, [course]);
  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 640), behavior: "smooth" });
  };

  return (
    <section className="section bg-white" id="videos">
      <div className="container-x">
        <Head
          tone="amber"
          eyebrow="Recorded video library"
          title="Watch it again whenever you need it"
          sub="Tips and tricks to start speaking, grammar, fluency, thinking in English and what to do when your mind goes blank — chosen for your course."
          aside={
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Scroll videos left"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white transition hover:bg-paper"
              >
                <Icon name="caret-left" size={18} />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="Scroll videos right"
                className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition hover:bg-ink/85"
              >
                <Icon name="caret-right" size={18} />
              </button>
            </div>
          }
        />
        <div
          className="mb-5 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter videos by course"
        >
          {VIDEO_TABS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={course === t}
              onClick={() => setCourse(t)}
              className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${course === t ? "border-ink bg-ink text-white" : "border-border bg-white text-ink hover:border-ink/30"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div
          ref={track}
          onScroll={measure}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-7 sm:px-7 lg:-mx-10 lg:px-10"
        >
          {shown.map((v, n) => {
            const tone = CAT_TONE[n % CAT_TONE.length];
            return (
              <article
                key={`${course}-${v.title}`}
                className="slide-in flex w-[17.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-[0_22px_44px_-32px_rgba(19,33,47,.5)] sm:w-[19rem]"
                style={{ animationDelay: `${n * 50}ms` }}
              >
                <div className={`relative grid h-36 place-items-center ${T[tone].deep}`}>
                  <span
                    className={`absolute left-4 top-4 rounded-full bg-white px-2.5 py-1 text-xs font-bold ${T[tone].text}`}
                  >
                    {v.cat}
                  </span>
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full bg-white shadow-[0_12px_28px_-14px_rgba(0,0,0,.6)] ${T[tone].text}`}
                  >
                    <Icon name="play" size={28} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-lg font-bold leading-snug">{v.title}</h3>
                  <p className="text-sm text-ink/75">{v.blurb}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {v.tags.map((g) => (
                      <li
                        key={g}
                        className="rounded-full bg-paper px-2.5 py-1 text-xs font-semibold text-ink/75"
                      >
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
          <div
            className="h-full rounded-full bg-sunshine transition-[width] duration-200"
            style={{ width: `${Math.max(12, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ market compare */

function MarkIcon({ m }: { m: Mark }) {
  if (m === "yes")
    return (
      <span className="inline-flex items-center text-brand">
        <Icon name="check" size={24} />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (m === "part")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6A4A10]">
        <span className="h-5 w-5 rounded-full border-2 border-sunshine bg-[linear-gradient(90deg,var(--sunshine)_50%,transparent_50%)]" />
        Partly
      </span>
    );
  return (
    <span className="inline-flex items-center text-ink/35">
      <Icon name="x-circle" size={22} />
      <span className="sr-only">No</span>
    </span>
  );
}

export function MarketCompare() {
  return (
    <section className="section bg-paper" id="compare">
      <div className="container-x">
        <Head
          tone="teal"
          eyebrow="How the options compare"
          title="An app, a tutor, a big batch — or all of it together"
          sub="AI apps give practice without people. Tutor apps give a person without a course. Big classrooms give a course without speaking time. Our package joins the parts that work."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <VizIn className="rounded-3xl border border-border bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <Chip tone="green" icon="speak" size="sm" />
              <h3 className="text-lg font-bold md:text-xl">
                Your speaking minutes per hour of class
              </h3>
            </div>
            <p className="mt-2 text-sm text-ink/70">
              Our published estimate: 40–45 minutes of each hour go to learners, shared by the
              batch.
            </p>
            <div className="mt-6 flex flex-col gap-5">
              {TALK_TIME.map((t, i) => (
                <div key={t.label}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                    <span className={t.ours ? "font-bold text-ink" : "text-ink/75"}>{t.label}</span>
                    <strong className={t.ours ? "text-brand-deep" : "text-ink/75"}>
                      {t.range}
                    </strong>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`viz-bar h-full rounded-full ${t.ours ? "bg-brand" : i === 1 ? "bg-indigo-pop/60" : "bg-coral/70"}`}
                      style={{ width: `${(t.max / 10) * 100}%`, ...d(i * 180) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </VizIn>

          <div className="rounded-3xl border border-border bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <Chip tone="blue" icon="trend" size="sm" />
              <h3 className="text-lg font-bold md:text-xl">
                Hours you actually speak, over 6 months
              </h3>
            </div>
            <p className="mb-4 mt-2 text-sm text-ink/70">
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

        <VizIn className="mt-5 overflow-x-auto rounded-3xl border border-border bg-white">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
            <caption className="sr-only">Learning options compared by category</caption>
            <thead>
              <tr>
                <th scope="col" className="p-4 font-semibold text-ink/60">
                  What you get
                </th>
                {MARKET_COLUMNS.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`p-4 font-bold ${i === 3 ? "bg-brand text-white" : "text-ink"}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MARKET_ROWS.map((r, ri) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="p-4 font-semibold text-ink">
                    {r.label}
                  </th>
                  {r.marks.map((m, ci) => (
                    <td key={ci} className={`p-4 ${ci === 3 ? "bg-brand-soft/70" : ""}`}>
                      <span className="viz-pop inline-block" style={d(ri * 60 + ci * 40)}>
                        <MarkIcon m={m} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-border">
                <th scope="row" className="p-4 font-semibold text-ink">
                  Typical cost
                </th>
                {MARKET_PRICE.map((p, ci) => (
                  <td
                    key={ci}
                    className={`p-4 font-semibold ${ci === 3 ? "bg-brand-soft/70 text-brand-deep" : "text-ink/80"}`}
                  >
                    {ci === 3 ? (
                      <MarketCopy
                        inr={<FeeText text={p} />}
                        usd={`From ${INTL_FEE["spoken-english"].display}`}
                      />
                    ) : (
                      <MarketCopy inr={p} usd="Varies" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </VizIn>
        <p className="mt-3 text-xs text-ink/60">
          Compared by category, not by brand. Costs are typical ranges from public 2026 price pages
          in India and differ by provider and plan — check each one before you decide.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ before/now */

export function BeforeNow() {
  return (
    <section className="section bg-white" id="what-changed">
      <div className="container-x">
        <Head
          eyebrow="What changed"
          title={
            <>
              You asked for more practice. <span className="text-brand">We built it in.</span>
            </>
          }
          aside={
            <VizIn className="flex items-center gap-5 rounded-2xl border border-border bg-paper px-5 py-4">
              <div className="flex flex-col gap-1.5" aria-hidden="true">
                <div className="flex gap-1">
                  {[1, 0, 0, 1, 0, 0, 0].map((on, i) => (
                    <span key={i} className={`h-4 w-4 rounded ${on ? "bg-brand" : "bg-muted"}`} />
                  ))}
                </div>
                <div className="flex gap-1">
                  {["p", "l", "p", "p", "l", "r", "p"].map((k, i) => (
                    <span
                      key={i}
                      style={d(200 + i * 90)}
                      className={`viz-dot h-4 w-4 rounded ${k === "l" ? "bg-brand" : k === "r" ? "bg-plum" : "bg-indigo-pop"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="font-extrabold text-ink">
                <span className="text-3xl text-ink/45">2</span>
                <Icon name="arrow-right" size={18} className="mx-2 inline text-brand" />
                <span className="text-4xl text-brand">7</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-ink/60">
                  days a week with English
                </span>
              </p>
            </VizIn>
          }
        />
        <div className="overflow-x-auto rounded-3xl border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">
              What each course included before and what it includes now
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-48 p-4" />
                <th scope="col" className="p-4 font-semibold text-ink/60">
                  Before
                </th>
                <th scope="col" className="bg-brand p-4 font-bold text-white">
                  Now · the complete package
                </th>
              </tr>
            </thead>
            <tbody>
              {BEFORE_NOW.map((r) => (
                <tr key={r.row} className="border-t border-border">
                  <th scope="row" className="p-4 text-sm font-bold text-ink">
                    {r.row}
                  </th>
                  <td className="p-4 text-ink/65">{r.before}</td>
                  <td className="bg-brand-soft/60 p-4 font-semibold text-ink">{r.now}</td>
                </tr>
              ))}
              <tr className="border-t border-border">
                <th scope="row" className="p-4 text-sm font-bold text-ink">
                  What the fee covers
                </th>
                <td className="p-4 text-ink/65">Classes and worksheets</td>
                <td className="bg-brand-soft/60 p-4 font-bold text-brand-deep">
                  <MarketCopy
                    inr={`Everything above — from ${COURSE_FEE["spoken-english"].display}/month, inclusive of taxes`}
                    usd={`Everything above — from ${INTL_FEE["spoken-english"].display}`}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- pricing */

const PLAN_ORDER: FeeSlug[] = [
  "spoken-english",
  "interactive-speaking",
  "business-english",
  "interview-preparation",
];

const PLAN_COPY: Record<
  FeeSlug,
  { for: string; focus: string; path: string; popular?: boolean; tone: Tone }
> = {
  "spoken-english": {
    for: "Speak from zero — daily talk and interview English.",
    focus: "Builds sentences from zero",
    path: "/course-spoken-english",
    tone: "green",
  },
  "interactive-speaking": {
    for: "You know English but freeze when you talk.",
    focus: "Games, debates, role-plays",
    path: "/course-interactive-speaking",
    tone: "teal",
  },
  "business-english": {
    for: "Meetings, client calls, emails, presentations.",
    focus: "Live workplace role-plays",
    path: "/course-business-english",
    popular: true,
    tone: "blue",
  },
  "interview-preparation": {
    for: "You can talk — the interview is the gap.",
    focus: "Recorded mock interviews",
    path: "/course-interview-preparation",
    tone: "plum",
  },
};

const PLAN_INCLUDES: { tone: Tone; icon: IconName; text: string }[] = [
  { tone: "green", icon: "users", text: "Live classes · approx. 6 learners" },
  { tone: "blue", icon: "pen", text: "Daily grammar, vocab, reading & speaking" },
  { tone: "amber", icon: "video", text: "Video library incl. speaking tips" },
  { tone: "plum", icon: "review", text: "Weekly teacher review" },
  { tone: "terra", icon: "teacher", text: "Same teacher, all course" },
];

export function PricingGrid({ showOffer = true }: { showOffer?: boolean }) {
  const [offer, setOffer] = useState(() => showOffer && launchOfferActive());
  useEffect(() => {
    if (!launchOfferActive()) setOffer(false);
  }, []);
  return (
    <VizIn className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {PLAN_ORDER.map((slug, i) => {
        const fee = COURSE_FEE[slug];
        const copy = PLAN_COPY[slug];
        return (
          <article
            key={slug}
            style={d(i * 90)}
            className={`viz-pop flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-1 ${copy.popular ? "border-2 border-indigo-pop shadow-[0_22px_50px_-30px_rgba(47,90,138,.55)]" : "border-border shadow-[0_16px_40px_-32px_rgba(19,33,47,.45)]"}`}
          >
            <div
              className={`flex min-h-12 items-center justify-between gap-2 px-5 py-3 text-white sm:px-6 ${T[copy.tone].deep}`}
            >
              <span className="text-xs font-bold text-white">
                {fee.months} months · up to 2 classes/week
              </span>
              {copy.popular && (
                <span className="whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-xs font-bold text-[#1F3D63]">
                  Most popular
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <h3 className="text-xl font-bold leading-tight">
                <Link to={copy.path} className="hover:underline">
                  {fee.name}
                </Link>
              </h3>
              <p className="min-h-10 text-sm text-ink/70">{copy.for}</p>
              <p className="text-4xl font-extrabold tracking-tight text-ink">
                <FeePair inr={fee.display} usd={INTL_FEE[slug].big} />
                <span className="text-base font-semibold text-ink/60">
                  <FeePair inr="/month" usd={INTL_FEE[slug].suffix} />
                </span>
              </p>
              <p className="-mt-1 text-xs text-ink/60">
                <MarketCopy
                  inr="Inclusive of taxes · billed monthly"
                  usd={`${intlUnit()} · billed monthly`}
                />
              </p>
              <ul className="mt-1 flex flex-col gap-2.5 border-t border-border pt-4 text-sm text-ink/85">
                {PLAN_INCLUDES.map((p) => (
                  <li key={p.text} className="flex items-center gap-2.5">
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${T[p.tone].soft} ${T[p.tone].text}`}
                    >
                      <Icon name={p.icon} size={16} />
                    </span>
                    {p.text}
                  </li>
                ))}
                <li className="flex items-center gap-2.5 font-bold text-ink">
                  <Icon name="check" size={20} className="ml-1 shrink-0 text-brand" />
                  {copy.focus}
                </li>
              </ul>
              {offer && (
                <span className="rounded-xl bg-amber-soft px-3 py-2 text-xs font-bold text-[#6A4A10]">
                  {LAUNCH_OFFER.short} · enrol by 30 Nov
                </span>
              )}
              <WaButton
                message={`Hi, I want to join ${fee.name}. Please share the next batch and fee.`}
                variant={copy.popular ? "primary" : "outline"}
                size="sm"
                className="mt-auto w-full justify-center"
                goal="pricing_card"
              >
                Ask on WhatsApp
              </WaButton>
            </div>
          </article>
        );
      })}
    </VizIn>
  );
}

export function DemoStrip() {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-3xl border border-border bg-terra-soft p-6 md:flex-row md:items-center md:justify-between md:p-7">
      <div className="flex items-start gap-4">
        <Chip tone="terra" icon="compass" />
        <p className="text-ink/80">
          <strong className="block text-lg font-bold text-ink md:text-xl">
            Not sure yet? Sit in a real class first.
          </strong>
          <FeeText
            text={`90-minute Demo Class in a live batch — ${DEMO_FEE.display}, inclusive of taxes. Adjusted in your fee if you enrol within 48 hours.`}
          />
        </p>
      </div>
      <Link to="/course-demo-session" className="btn btn-primary shrink-0">
        <FeeText text={`Book the ${DEMO_FEE.display} Demo Class`} />
      </Link>
    </div>
  );
}

/* ----------------------------------------------------- course included */

function CourseGuideLink({ slug }: { slug: FeeSlug }) {
  const cls = "font-bold text-brand-deep underline underline-offset-4 hover:text-brand";
  if (slug === "spoken-english")
    return (
      <Link to="/how-to-speak-english-fluently" className={cls}>
        How to speak English fluently — the guide
      </Link>
    );
  if (slug === "interactive-speaking")
    return (
      <Link to="/interactive-english-class-hesitation" className={cls}>
        Why you freeze when you speak — the guide
      </Link>
    );
  if (slug === "business-english")
    return (
      <Link to="/workplace-english-course-online-india" className={cls}>
        Workplace English guide: meetings, calls, emails
      </Link>
    );
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: "tell-me-about-yourself-in-60-seconds" }}
      className={cls}
    >
      Tell me about yourself in 60 seconds — the guide
    </Link>
  );
}

export function CourseIncluded({ slug }: { slug: FeeSlug }) {
  const pkg = COURSE_PACKAGE[slug];
  const fee = COURSE_FEE[slug];
  const topics = VIDEO_TOPICS.filter((v) => v.tags.includes(pkg.videoTag)).slice(0, 4);
  const tiles: { key: PartKey; label: string; body: string }[] = [
    { key: "live", label: "Live classes", body: pkg.live },
    { key: "portal", label: "Daily exercises", body: pkg.portal },
    { key: "videos", label: "Video library", body: pkg.videos },
    { key: "review", label: "Weekly teacher review", body: pkg.review },
    { key: "teacher", label: "Same teacher", body: pkg.teacher },
  ];
  return (
    <section className="section bg-paper" id="included">
      <div className="container-x">
        <Head
          eyebrow="Included in your course"
          title={`${fee.name}: the complete package`}
          sub={
            <MarketCopy
              inr={`${fee.monthly}, inclusive of taxes — live classes, daily exercises, the video library and a weekly teacher review, all included.`}
              usd={`${INTL_FEE[slug].display} for live classes, daily exercises, the video library and a weekly teacher review.`}
            />
          }
        />
        <ul className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-ink">
          {[
            `${fee.months} months · up to 2 classes/week`,
            "1 hr 30 min per class",
            "Approx. 6 learners",
            "Daily exercises + weekly review",
          ].map((f) => (
            <li key={f} className="rounded-full border border-border bg-white px-3 py-1.5">
              {f}
            </li>
          ))}
        </ul>
        <VizIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {tiles.map(({ key, label, body }, i) => {
            const tone = PART[key].tone;
            return (
              <article
                key={key}
                style={d(i * 90)}
                className={`viz-pop flex flex-col gap-3 rounded-3xl p-6 ${i < 2 ? `${T[tone].deep} text-white lg:col-span-3` : `${T[tone].soft} lg:col-span-2`}`}
              >
                <div className="flex items-center gap-3">
                  <Chip tone={tone} icon={PART[key].icon} />
                  <h3 className={`text-lg font-bold ${i < 2 ? "text-white" : T[tone].text}`}>
                    {label}
                  </h3>
                </div>
                <p className={i < 2 ? "text-white/90" : "text-ink/85"}>{body}</p>
              </article>
            );
          })}
        </VizIn>
        <p className="mt-5 text-sm text-ink/75">
          Before you join, read: <CourseGuideLink slug={slug} />
        </p>
        <div className="mt-5 rounded-3xl border border-border bg-white p-5 md:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#6A4A10]">
            Videos picked for this course
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t, n) => {
              const tone = CAT_TONE[n % CAT_TONE.length];
              return (
                <li
                  key={t.title}
                  className={`flex items-start gap-3 rounded-2xl p-3.5 ${T[tone].soft}`}
                >
                  <Chip tone={tone} icon="play" size="sm" />
                  <span>
                    <strong className="block text-sm text-ink">{t.title}</strong>
                    <span className={`text-xs font-semibold ${T[tone].text}`}>{t.cat}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
