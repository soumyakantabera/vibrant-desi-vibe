import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
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
  perDay,
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

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const PART_ICON: Record<PartKey, IconName> = {
  live: "users",
  portal: "computer",
  videos: "play",
  teacher: "user",
};

function Eyebrow({ children, tone = "live" }: { children: ReactNode; tone?: PartKey | "ink" }) {
  const cls =
    tone === "ink" ? "bg-ink text-white" : `${PART_TONE[tone].soft} ${PART_TONE[tone].text}`;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] ${cls}`}
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
  tone?: PartKey | "ink";
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
        <h2 className="text-2xl leading-[1.12] md:text-[2.25rem]">{title}</h2>
        {sub && <p className="text-base text-ink/80 md:text-lg">{sub}</p>}
      </div>
      {aside}
    </div>
  );
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
    <section className="bg-ink grid-texture" aria-label="Launch offer">
      <div className="container-x flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sunshine text-ink">
            <Icon name="spark" size={20} />
          </span>
          <p className="text-sm md:text-base">
            <strong className="block font-display text-base md:text-lg">
              {LAUNCH_OFFER.headline}
            </strong>
            For new learners who enrol by {LAUNCH_OFFER.endsLabel}. The course fee stays the same.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex min-w-[5.5rem] flex-col items-center rounded-2xl bg-sunshine px-3 py-1.5 text-ink">
            <span className="font-display text-xl font-extrabold leading-tight !text-ink">
              {days === null ? "30 Nov" : days}
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-wider !text-ink">
              {days === null ? "last day" : days === 1 ? "day left" : "days left"}
            </span>
          </span>
          <WaButton
            message="Hi, I want to join with the launch offer (extra month of portal and videos). Please share the next batch."
            variant="sun"
            size="sm"
            goal="launch_offer"
          >
            Claim on WhatsApp
          </WaButton>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- four-part strip */

export function PackageStrip() {
  const items: { key: PartKey; body: ReactNode }[] = [
    {
      key: "live",
      body: "Up to 2 a week · 90 min · approx. 6 learners. Every learner gets the mic.",
    },
    {
      key: "portal",
      body: "Conversation, phrases, reading fluency and grammar — every other day.",
    },
    { key: "videos", body: "Grammar, fluency, thinking in English and mind-blank fixes." },
    { key: "teacher", body: "Real teachers. One teacher for your batch, all course." },
  ];
  return (
    <section className="border-y border-border bg-paper">
      <VizIn className="container-x grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {items.map(({ key, body }, i) => (
          <div key={key} className="viz-pop flex items-start gap-3" style={d(i * 90)}>
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white ${PART_TONE[key].fill} ${key === "videos" ? "!text-ink" : ""}`}
            >
              <Icon name={PART_ICON[key]} size={18} />
            </span>
            <p className="text-sm">
              <strong className="block font-display text-ink">{PART_TONE[key].label}</strong>
              <span className="text-ink/80">{body}</span>
            </p>
          </div>
        ))}
      </VizIn>
    </section>
  );
}

/* -------------------------------------------------------------- the week */

const KIND_TONE = { "Live class": "live", Portal: "portal", Videos: "videos" } as const;

export function WeekStrip() {
  const [picked, setPicked] = useState(1);
  const sel = WEEK[picked];
  return (
    <section className="section" id="week">
      <div className="container-x">
        <Head
          eyebrow="A week with Learn With Smile"
          title={
            <>
              Not “just 2 classes”. <span className="text-brand">English 7 days a week.</span>
            </>
          }
          sub="Two live classes build the habit. The learner portal and the video library keep it going on every other day, so nothing fades between classes."
          aside={
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              {(["live", "portal", "videos"] as PartKey[]).map((k) => (
                <span key={k} className="inline-flex items-center gap-2">
                  <span className={`h-3 w-3 rounded ${PART_TONE[k].fill}`} aria-hidden="true" />
                  {PART_TONE[k].label}
                </span>
              ))}
            </div>
          }
        />
        <VizIn
          className="grid gap-2.5 lg:grid-cols-7 lg:gap-3"
          role="group"
          aria-label="Example week"
        >
          {WEEK.map((day, i) => {
            const tone = PART_TONE[KIND_TONE[day.kind]];
            const on = picked === i;
            return (
              <button
                key={day.day}
                type="button"
                onClick={() => setPicked(i)}
                aria-pressed={on}
                style={d(i * 70)}
                className={`viz-pop group flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition lg:min-h-[13rem] lg:flex-col lg:items-start lg:gap-3 lg:p-5 ${on ? `${tone.soft} ${tone.ring} -translate-y-1 shadow-[0_18px_40px_-28px_rgba(11,31,20,.5)]` : "border-border bg-white hover:border-ink/25"}`}
              >
                <span className="w-10 shrink-0 font-display text-xs font-bold uppercase tracking-[0.12em] text-ink/70 lg:w-auto">
                  {day.day}
                </span>
                <span
                  className={`hidden rounded-full px-2.5 py-1 text-xs font-bold lg:inline-flex ${tone.fill} ${day.kind === "Videos" ? "text-ink" : "text-white"}`}
                >
                  {day.kind}
                </span>
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-sm lg:hidden ${tone.fill}`}
                  aria-hidden="true"
                />
                <span className="font-display text-[0.95rem] font-bold leading-snug text-ink lg:text-base">
                  {day.title}
                </span>
                <span className="ml-auto flex gap-1.5 lg:ml-0 lg:mt-auto" aria-hidden="true">
                  {day.kind === "Live class" && (
                    <span className="viz-live h-2 w-2 rounded-full bg-brand" />
                  )}
                  {day.kind === "Portal" && (
                    <span className="h-1.5 w-6 rounded-full bg-indigo-pop" />
                  )}
                  {day.video && <span className="h-1.5 w-6 rounded-full bg-sunshine" />}
                </span>
              </button>
            );
          })}
        </VizIn>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-paper p-6 md:p-7" aria-live="polite">
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-deep">
              {sel.day} · {sel.kind}
            </span>
            <h3 className="mt-2 text-xl md:text-2xl">{sel.title}</h3>
            <p className="mt-2 text-ink/85 md:text-lg">{sel.detail}</p>
            <p className="mt-3 text-sm text-ink/70">
              Example week. Live days follow your batch slot — afternoon, evening or night.
            </p>
          </div>
          <VizIn className="rounded-3xl bg-brand-deep p-6 md:p-7">
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] !text-sage">
              Every week, in one line
            </span>
            <div className="mt-4 flex h-4 gap-1 overflow-hidden rounded-full" aria-hidden="true">
              {WEEK.map((day, i) => (
                <span
                  key={day.day}
                  style={d(i * 110)}
                  className={`viz-col flex-1 ${day.kind === "Live class" ? "bg-sage" : day.kind === "Videos" ? "bg-sunshine" : "bg-[#9FB4D1]"}`}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { n: 2, l: "live classes" },
                { n: 5, l: "practice days" },
                { n: 7, l: "days of English" },
              ].map((s) => (
                <p key={s.l}>
                  <CountUp
                    value={s.n}
                    className={`block font-display text-3xl font-extrabold md:text-4xl ${s.n === 7 ? "!text-sunshine" : "text-white"}`}
                  />
                  <span className="text-sm">{s.l}</span>
                </p>
              ))}
            </div>
          </VizIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- bento grid */

export function PackageBento() {
  return (
    <section className="section bg-paper" id="package">
      <div className="container-x">
        <Head
          align="center"
          tone="portal"
          eyebrow="The complete package"
          title="Everything you need to speak — in one monthly fee"
          sub="Live classes to speak, a portal to practise, videos to revise, and a teacher who knows your name. Every course includes all four."
        />
        <VizIn className="grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
          <article
            className="viz-pop flex flex-col gap-4 rounded-3xl bg-brand p-6 text-white md:col-span-3 md:row-span-2 md:p-8"
            style={d(0)}
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
              <Icon name="users" size={24} />
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#CFE6DA]">
              Live classes
            </span>
            <p className="font-display text-2xl font-extrabold leading-tight text-white md:text-3xl">
              Speak in every class. Get corrected live.
            </p>
            <p className="text-white/90">
              Small batches mean you are heard — not hidden in the back row of a big classroom.
            </p>
            <div className="mt-auto grid grid-cols-3 gap-3">
              {[
                { v: 2, s: "", l: "classes a week (up to)" },
                { v: 90, s: "", l: "minutes each" },
                { v: 6, s: "", l: "learners, approx." },
              ].map((x) => (
                <p key={x.l} className="rounded-2xl bg-white/12 p-3.5">
                  <CountUp
                    value={x.v}
                    suffix={x.s}
                    className="block font-display text-2xl font-extrabold text-white md:text-3xl"
                  />
                  <span className="text-xs text-white/85 md:text-sm">{x.l}</span>
                </p>
              ))}
            </div>
          </article>

          <article
            className="viz-pop flex flex-col gap-3 rounded-3xl bg-slate-soft p-6 md:col-span-3 md:p-7"
            style={d(120)}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-pop text-white">
                <Icon name="computer" size={20} />
              </span>
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#263F63]">
                  Learner portal
                </span>
                <p className="font-display text-lg font-extrabold text-ink">
                  Practice for the days between classes
                </p>
              </div>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2">
              {PORTAL_MODULES.map((m) => (
                <li
                  key={m.title}
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink"
                >
                  {m.title}
                </li>
              ))}
            </ul>
          </article>

          <article
            className="viz-pop flex flex-col gap-3 rounded-3xl bg-amber-soft p-6 md:col-span-2"
            style={d(220)}
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sunshine text-ink">
              <Icon name="play" size={20} />
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#6A4A10]">
              Video library
            </span>
            <p className="font-display text-lg font-extrabold leading-snug text-ink">
              Grammar, fluency, thinking in English, mind-blank fixes
            </p>
          </article>

          <article
            className="viz-pop flex flex-col gap-3 rounded-3xl bg-terra-soft p-6 md:col-span-1"
            style={d(300)}
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral text-ink">
              <Icon name="user" size={20} />
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#8A3626]">
              Teacher
            </span>
            <p className="font-display text-base font-extrabold leading-snug text-ink">
              Same teacher, all course
            </p>
          </article>
        </VizIn>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-ink">
          <li className="font-display text-brand-deep">Also in every fee:</li>
          {[
            "Inclusive of taxes",
            "No material fee",
            "Free consultation",
            "WhatsApp replies 10am–midnight IST",
            "Monthly billing · UPI",
          ].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Icon name="check" size={14} className="text-brand" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- portal */

const QUIZ = { q: "She ____ to the office every day.", opts: ["go", "goes", "going"], a: "goes" };

export function PortalShowcase() {
  const [picked, setPicked] = useState(4);
  const [answer, setAnswer] = useState<string | null>(null);
  const mod = PORTAL_MODULES[picked];
  const isQuiz = picked === PORTAL_MODULES.length - 1;
  return (
    <section className="section grid-texture-light bg-[#F4F6FA]" id="portal">
      <div className="container-x">
        <Head
          tone="portal"
          eyebrow="Inside the learner portal"
          title={
            <>
              Five kinds of practice. <span className="text-indigo-pop">One login.</span>
            </>
          }
          sub="Short daily tasks that match your course — so what you learn in class is still there next week."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div className="flex flex-col gap-2.5" role="group" aria-label="Portal practice types">
            {PORTAL_MODULES.map((m, i) => {
              const on = picked === i;
              return (
                <button
                  key={m.title}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setPicked(i);
                    setAnswer(null);
                  }}
                  className={`flex min-h-[4.25rem] items-center gap-4 rounded-2xl border-2 px-4 py-3 text-left transition ${on ? "border-indigo-pop bg-white shadow-[0_16px_34px_-24px_rgba(38,63,99,.6)]" : "border-[#D6DEE9] hover:border-indigo-pop/60"}`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display font-extrabold ${on ? "bg-indigo-pop text-white" : "bg-slate-soft text-[#263F63]"}`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-display font-bold text-ink">{m.title}</span>
                    <span className="text-sm text-ink/75">{m.sub}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#D6DEE9] bg-white shadow-[0_30px_60px_-40px_rgba(38,63,99,.55)]">
            <div className="flex items-center gap-2 bg-slate-soft px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-pop" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#9FB4D1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#9FB4D1]" />
              <span className="ml-3 text-sm font-bold text-[#263F63]">
                Learner portal · {mod.title}
              </span>
            </div>
            <div className="flex min-h-[22rem] flex-col gap-4 p-6 md:p-8" aria-live="polite">
              {isQuiz ? (
                <>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#263F63]">
                    Try it — grammar quiz
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
                        : "border-[#D6DEE9] bg-white text-ink hover:border-indigo-pop";
                      return (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setAnswer(o)}
                          className={`min-h-12 min-w-28 rounded-2xl border-2 px-5 font-display text-lg font-bold transition ${cls}`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  {answer && (
                    <p
                      className={`rounded-2xl px-4 py-3 font-semibold ${answer === QUIZ.a ? "bg-brand-soft text-brand-deep" : "bg-terra-soft text-coral-deep"}`}
                    >
                      {answer === QUIZ.a
                        ? "Correct — with “she”, the present simple takes goes."
                        : "Not quite — with she, he or it, add -s: “She goes”."}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#263F63]">
                    {mod.sub}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {mod.sample.map((line, i) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3.5 text-ink"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-slate-soft text-sm font-bold text-[#263F63]">
                          {i + 1}
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="mt-auto flex items-center gap-3">
                <span className="viz-sweep h-2.5 flex-1 rounded-full bg-slate-soft">
                  <span className="block h-full w-3/5 rounded-full bg-indigo-pop" />
                </span>
                <span className="text-sm font-semibold text-[#263F63]">Your week’s practice</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink/70">
          Sample tasks for illustration. Enrolled learners get login details for the portal after
          admission; access runs while you are enrolled.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- video library */

const VIDEO_TABS: ("All" | VideoCourse)[] = [
  "All",
  "Spoken English",
  "Interactive Speaking",
  "Business English",
  "Interview Prep",
];

export function VideoLibrary({ initial = "All" }: { initial?: "All" | VideoCourse }) {
  const [course, setCourse] = useState<"All" | VideoCourse>(initial);
  const shown = VIDEO_TOPICS.filter((v) => course === "All" || v.tags.includes(course));
  return (
    <section className="section" id="videos">
      <div className="container-x">
        <Head
          tone="videos"
          eyebrow="Recorded video library"
          title="Watch it again whenever you need it"
          sub="Short recorded lessons on grammar, fluency, thinking in English and what to do when your mind goes blank — chosen for your course."
        />
        <div
          className="mb-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter videos by course"
        >
          {VIDEO_TABS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={course === t}
              onClick={() => setCourse(t)}
              className={`min-h-11 rounded-full border-2 px-4 text-sm font-bold transition ${course === t ? "border-ink bg-ink text-white" : "border-border bg-white text-ink hover:border-ink/30"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <VizIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v, i) => (
            <article
              key={v.title}
              className="viz-pop flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(11,31,20,.45)]"
              style={d(i * 60)}
            >
              <div className="relative grid h-32 place-items-center bg-amber-soft">
                <span className="absolute left-4 top-4 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-[#6A4A10]">
                  {v.cat}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-sunshine text-ink shadow-[0_10px_24px_-12px_rgba(106,74,16,.6)]">
                  <Icon name="play" size={22} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-lg leading-snug">{v.title}</h3>
                <p className="text-sm text-ink/80">{v.blurb}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {v.tags.map((g) => (
                    <li
                      key={g}
                      className="rounded-full bg-paper px-2.5 py-1 text-xs font-bold text-brand-deep"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </VizIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ market compare */

function MarkIcon({ m }: { m: Mark }) {
  if (m === "yes")
    return (
      <span className="inline-flex items-center gap-1.5 text-brand-deep">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
          <Icon name="check" size={13} />
        </span>
        <span className="sr-only">Yes</span>
      </span>
    );
  if (m === "part")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6A4A10]">
        <span className="h-6 w-6 rounded-full border-2 border-sunshine bg-[linear-gradient(90deg,var(--sunshine)_50%,transparent_50%)]" />
        Partly
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/60">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-muted text-ink/60">—</span>
      <span className="sr-only">No</span>
    </span>
  );
}

export function MarketCompare() {
  return (
    <section className="section bg-paper" id="compare">
      <div className="container-x">
        <Head
          tone="ink"
          eyebrow="How the options compare"
          title="An app, a tutor, a big batch — or all of it together"
          sub="AI apps give practice without people. Tutor apps give a person without a course. Big classrooms give a course without speaking time. Our package joins the parts that work."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <VizIn className="rounded-3xl border border-border bg-white p-6 md:p-7">
            <h3 className="text-lg md:text-xl">Your speaking minutes per hour of class</h3>
            <p className="mt-1 text-sm text-ink/75">
              Our published estimate: 40–45 minutes of each hour go to learners, shared by the
              batch.
            </p>
            <div className="mt-6 flex flex-col gap-5">
              {TALK_TIME.map((t, i) => (
                <div key={t.label}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                    <span className={t.ours ? "font-bold text-ink" : "text-ink/80"}>{t.label}</span>
                    <strong
                      className={
                        t.ours ? "font-display text-brand-deep" : "font-display text-ink/80"
                      }
                    >
                      {t.range}
                    </strong>
                  </div>
                  <div className="h-3.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`viz-bar h-full rounded-full ${t.ours ? "bg-brand" : "bg-[#9FB4D1]"}`}
                      style={{ width: `${(t.max / 10) * 100}%`, ...d(i * 180) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </VizIn>

          <div className="rounded-3xl border border-border bg-white p-6 md:p-7">
            <h3 className="text-lg md:text-xl">Hours you actually speak, over 6 months</h3>
            <p className="mt-1 mb-4 text-sm text-ink/75">
              Up to 2 classes a week. Portal practice comes on top of this.
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
                <th scope="col" className="p-4 font-display text-ink/70">
                  What you get
                </th>
                {MARKET_COLUMNS.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`p-4 font-display ${i === 3 ? "bg-brand text-white" : "text-ink"}`}
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
                    <td key={ci} className={`p-4 ${ci === 3 ? "bg-brand-soft/60" : ""}`}>
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
                    className={`p-4 font-semibold ${ci === 3 ? "bg-brand-soft/60 font-display text-brand-deep" : "text-ink/85"}`}
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
        <p className="mt-3 text-xs text-ink/70">
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
    <section className="section" id="what-changed">
      <div className="container-x">
        <Head
          eyebrow="What changed"
          title={
            <>
              You asked for more practice. <span className="text-brand">We built it in.</span>
            </>
          }
          aside={
            <VizIn className="flex items-center gap-5 rounded-2xl border border-border bg-white px-5 py-4">
              <div className="flex flex-col gap-1.5" aria-hidden="true">
                <div className="flex gap-1">
                  {[1, 0, 0, 1, 0, 0, 0].map((on, i) => (
                    <span key={i} className={`h-4 w-4 rounded ${on ? "bg-brand" : "bg-muted"}`} />
                  ))}
                </div>
                <div className="flex gap-1">
                  {["p", "l", "p", "p", "l", "p", "v"].map((k, i) => (
                    <span
                      key={i}
                      style={d(200 + i * 90)}
                      className={`viz-dot h-4 w-4 rounded ${k === "l" ? "bg-brand" : k === "v" ? "bg-sunshine" : "bg-indigo-pop"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="font-display font-extrabold text-ink">
                <span className="text-3xl text-ink/60">2</span>
                <Icon name="arrow-right" size={18} className="mx-2 inline text-brand" />
                <span className="text-4xl text-brand">7</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-ink/70">
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
                <th scope="col" className="p-4 font-display text-ink/70">
                  Before
                </th>
                <th scope="col" className="bg-brand p-4 font-display text-white">
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
                  <td className="p-4 text-ink/75">{r.before}</td>
                  <td className="bg-brand-soft/50 p-4 font-semibold text-ink">{r.now}</td>
                </tr>
              ))}
              <tr className="border-t border-border">
                <th scope="row" className="p-4 text-sm font-bold text-ink">
                  What the fee covers
                </th>
                <td className="p-4 text-ink/75">Classes and worksheets</td>
                <td className="bg-brand-soft/50 p-4 font-display font-extrabold text-brand-deep">
                  <MarketCopy
                    inr={`Live classes, portal, videos and teacher — from ${COURSE_FEE["spoken-english"].display}, about ${perDay("spoken-english")} a day`}
                    usd={`Live classes, portal, videos and teacher — from ${INTL_FEE["spoken-english"].display}`}
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

const PLAN_COPY: Record<FeeSlug, { for: string; focus: string; path: string; popular?: boolean }> =
  {
    "spoken-english": {
      for: "Speak from zero — daily talk and interview English.",
      focus: "Builds sentences from zero",
      path: "/course-spoken-english",
    },
    "interactive-speaking": {
      for: "You know English but freeze when you talk.",
      focus: "Games, debates, role-plays",
      path: "/course-interactive-speaking",
    },
    "business-english": {
      for: "Meetings, client calls, emails, presentations.",
      focus: "Live workplace role-plays",
      path: "/course-business-english",
      popular: true,
    },
    "interview-preparation": {
      for: "You can talk — the interview is the gap.",
      focus: "Recorded mock interviews",
      path: "/course-interview-preparation",
    },
  };

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
            className={`viz-pop flex h-full flex-col gap-3 rounded-3xl border bg-white p-5 transition hover:-translate-y-1 sm:p-6 ${copy.popular ? "border-2 border-indigo-pop border-t-4 bg-[#F6F8FB] shadow-[0_18px_48px_-28px_rgba(38,63,99,.5)]" : "border-[#DDE5DF] border-t-4 border-t-brand shadow-[0_16px_40px_-30px_rgba(8,61,46,.45)]"}`}
          >
            <div className="flex min-h-7 items-center justify-between gap-2">
              <span className="text-xs font-semibold text-ink/70">
                {fee.months} months · up to 2 classes/week
              </span>
              {copy.popular && (
                <span className="rounded-full bg-indigo-pop px-2.5 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}
            </div>
            <h3 className="text-xl leading-tight">
              <Link to={copy.path} className="hover:underline">
                {fee.name}
              </Link>
            </h3>
            <p className="min-h-10 text-sm text-ink/80">{copy.for}</p>
            <p className="font-display text-4xl font-extrabold text-ink">
              <FeePair inr={fee.display} usd={INTL_FEE[slug].big} />
              <span className="text-base font-bold text-ink/70">
                <FeePair inr="/month" usd={INTL_FEE[slug].suffix} />
              </span>
            </p>
            <p className="-mt-1 text-xs text-ink/70">
              <MarketCopy
                inr="Inclusive of taxes · billed monthly"
                usd={`${intlUnit()} · billed monthly`}
              />
            </p>
            <span className="lws-inr self-start rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-deep">
              ≈ {perDay(slug)} a day for everything
            </span>
            <ul className="mt-1 flex flex-col gap-2.5 border-t border-border pt-4 text-sm text-ink/90">
              <li className="flex gap-2.5">
                <span className="mt-1 h-3 w-3 shrink-0 rounded bg-brand" aria-hidden="true" />
                Live classes · approx. 6 learners
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-3 w-3 shrink-0 rounded bg-indigo-pop" aria-hidden="true" />
                Learner portal practice
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-3 w-3 shrink-0 rounded bg-sunshine" aria-hidden="true" />
                Video library picked for this course
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 h-3 w-3 shrink-0 rounded bg-coral" aria-hidden="true" />
                Same teacher, all course
              </li>
              <li className="flex gap-2.5 font-bold">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-brand" />
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
          </article>
        );
      })}
    </VizIn>
  );
}

export function DemoStrip() {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-3xl bg-brand-deep p-6 md:flex-row md:items-center md:justify-between md:p-7">
      <p>
        <strong className="block font-display text-lg md:text-xl">
          Not sure yet? Sit in a real class first.
        </strong>
        <FeeText
          text={`90-minute Demo Class in a live batch — ${DEMO_FEE.display}, inclusive of taxes. Adjusted in your fee if you enrol within 48 hours.`}
        />
      </p>
      <Link to="/course-demo-session" className="btn btn-sun shrink-0">
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
  const tiles: { key: PartKey; body: string }[] = [
    { key: "live", body: pkg.live },
    { key: "portal", body: pkg.portal },
    { key: "videos", body: pkg.videos },
    { key: "teacher", body: pkg.teacher },
  ];
  return (
    <section className="section bg-paper" id="included">
      <div className="container-x">
        <Head
          eyebrow="Included in your course"
          title={`${fee.name}: four parts, one fee`}
          sub={
            <MarketCopy
              inr={`${fee.monthly}, inclusive of taxes — about ${perDay(slug)} a day for live classes, the learner portal and the video library together.`}
              usd={`${INTL_FEE[slug].display} for live classes, the learner portal and the video library together.`}
            />
          }
        />
        <ul className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-ink">
          {[
            `${fee.months} months · up to 2 classes/week`,
            "1 hr 30 min per class",
            "Approx. 6 learners",
            "Portal + video library included",
          ].map((f) => (
            <li key={f} className="rounded-full border border-border bg-white px-3 py-1.5">
              {f}
            </li>
          ))}
        </ul>
        <VizIn className="grid gap-4 sm:grid-cols-2">
          {tiles.map(({ key, body }, i) => (
            <article
              key={key}
              style={d(i * 90)}
              className={`viz-pop flex flex-col gap-3 rounded-3xl p-6 ${PART_TONE[key].soft}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-2xl ${PART_TONE[key].fill} ${key === "videos" || key === "teacher" ? "text-ink" : "text-white"}`}
                >
                  <Icon name={PART_ICON[key]} size={20} />
                </span>
                <h3 className={`text-lg ${PART_TONE[key].text}`}>{PART_TONE[key].label}</h3>
              </div>
              <p className="text-ink/90">{body}</p>
            </article>
          ))}
        </VizIn>
        <p className="mt-5 text-sm text-ink/80">
          Before you join, read: <CourseGuideLink slug={slug} />
        </p>
        <div className="mt-5 rounded-3xl border border-border bg-white p-5 md:p-6">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#6A4A10]">
            Videos picked for this course
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <li
                key={t.title}
                className="flex items-start gap-3 rounded-2xl bg-amber-soft/60 p-3.5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sunshine text-ink">
                  <Icon name="play" size={14} />
                </span>
                <span>
                  <strong className="block text-sm text-ink">{t.title}</strong>
                  <span className="text-xs text-ink/75">{t.cat}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
