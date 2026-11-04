import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LEVELS, type BoloLevel, type LevelContent } from "@/lib/bolo-levels";
import { Icon } from "@/components/Icon";
import { BoloParrot } from "@/components/mascots/BoloParrot";
import { MithuMacaw } from "@/components/mascots/MithuMacaw";
import { BoloAppIcon } from "@/components/mascots/BoloAppIcon";
import { useInView } from "@/components/mascots/useInView";
import { BOLO_LINES, type BoloTabKey } from "@/lib/bolo";

/**
 * A drawn, working mock-up of the Bolo app on a phone. Teal app chrome on
 * white, chunky "press" buttons, a streak and a lesson path — app-casual on
 * purpose, so a student reads it as an app at a glance.
 *
 * It is an illustration, not the product: the sample sentence, notes and
 * video titles are examples, and the caption under every use says so.
 */

const LevelCtx = createContext<LevelContent>(LEVELS.basic);

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

type Practice = "home" | "quiz";

export function BoloPhone({
  initial = "practice",
  tab: controlled,
  onTab,
  interactive = true,
  autoplay = false,
  level = "basic",
  className = "",
  label = "Bolo app preview",
}: {
  /** Play a scripted demo on a loop (the "app reel"): tap, answer, streak, tabs. */
  autoplay?: boolean;
  /** Course level the screens show (Basic, Intermediate, Interactive…). */
  level?: BoloLevel;
  initial?: BoloTabKey;
  /** Controlled tab, for sections that switch the phone from outside. */
  tab?: BoloTabKey;
  onTab?: (t: BoloTabKey) => void;
  interactive?: boolean;
  className?: string;
  label?: string;
}) {
  const [inner, setInner] = useState<BoloTabKey>(initial);
  const tab = controlled ?? inner;
  const setTab = (t: BoloTabKey) => {
    setInner(t);
    onTab?.(t);
  };
  const [view, setView] = useState<Practice>("home");
  const [streak, setStreak] = useState(12);
  const [grammarDone, setGrammarDone] = useState(false);
  const [ref, motion] = useInView<HTMLDivElement>();
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const [quizPick, setQuizPick] = useState<string | null>(null);
  const [quizChecked, setQuizChecked] = useState(false);
  const reel = autoplay && motion && !paused;

  // The reel: one state per step, then a pause before the next.
  useEffect(() => {
    if (!reel) return;
    const s = REEL[step];
    s.apply({
      answer: LEVELS[level].quiz.answer,
      setTab: setInner,
      setView,
      setStreak,
      setGrammarDone,
      setQuizPick,
      setQuizChecked,
    });
    const t = window.setTimeout(() => setStep((n) => (n + 1) % REEL.length), s.ms);
    return () => window.clearTimeout(t);
  }, [reel, step, level]);
  const finger = autoplay && motion ? REEL[step].finger : null;

  const finishQuiz = (correct: boolean) => {
    if (correct && !grammarDone) {
      setGrammarDone(true);
      setStreak((s) => s + 1);
    }
    setView("home");
  };

  return (
    <div
      ref={ref}
      data-motion={motion ? "on" : "off"}
      className={`relative mx-auto w-[300px] shrink-0 rounded-[2.75rem] bg-[#14213D] p-[10px] shadow-[0_40px_80px_-40px_rgba(10,124,115,.55),0_18px_40px_-24px_rgba(20,33,61,.6)] ${className}`}
      role="group"
      aria-label={label}
      onMouseEnter={autoplay ? () => setPaused(true) : undefined}
      onMouseLeave={autoplay ? () => setPaused(false) : undefined}
    >
      <div className="relative flex h-[610px] flex-col overflow-hidden rounded-[2.1rem] bg-white text-ink">
        {/* status bar + notch */}
        <div className="relative flex h-9 shrink-0 items-center justify-between px-6 text-[11px] font-bold text-ink">
          <span>9:41</span>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-2 h-[22px] w-24 -translate-x-1/2 rounded-full bg-[#14213D]"
          />
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="flex items-end gap-[2px]">
              <span className="h-1.5 w-[3px] rounded-sm bg-ink" />
              <span className="h-2 w-[3px] rounded-sm bg-ink" />
              <span className="h-2.5 w-[3px] rounded-sm bg-ink" />
            </span>
            <span className="ml-1 h-2.5 w-5 rounded-[3px] border-[1.5px] border-ink p-[1px]">
              <span className="block h-full w-3/4 rounded-[1px] bg-ink" />
            </span>
          </span>
        </div>

        {/* app header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[#E6EEF0] px-4">
          <span className="flex items-center gap-2">
            <BoloAppIcon size={28} />
            <span className="text-lg font-extrabold tracking-tight text-bolo-teal">Bolo</span>
            <span className="rounded-md bg-bolo-mint px-1.5 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider text-bolo-teal">
              {LEVELS[level].badge}
            </span>
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full bg-[#FFF4E0] px-2.5 py-1 text-sm font-extrabold text-[#9A4F00]"
            aria-label={`${streak}-day streak`}
          >
            <Flame size={16} />
            <span key={streak} className={streak > 12 ? "m-pop inline-block" : undefined}>
              {streak}
            </span>
          </span>
        </div>

        {/* screens */}
        <LevelCtx.Provider value={LEVELS[level]}>
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {tab === "practice" && view === "home" && (
              <PracticeHome
                streak={streak}
                grammarDone={grammarDone}
                onStart={() => interactive && setView("quiz")}
              />
            )}
            {tab === "practice" && view === "quiz" && (
              <QuizScreen
                onClose={() => setView("home")}
                onDone={finishQuiz}
                {...(autoplay ? { ctlPick: quizPick, ctlChecked: quizChecked } : {})}
              />
            )}
            {tab === "watch" && <WatchScreen />}
            {tab === "review" && <ReviewScreen />}
          </div>
        </LevelCtx.Provider>

        {/* reel finger: where the demo "taps" next */}
        {finger && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute z-20 h-9 w-9 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-500 ease-out"
            style={{ left: `${finger.x}%`, top: `${finger.y}%` }}
          >
            <span
              key={step}
              className="reel-tap relative block h-9 w-9 rounded-full border-[3px] border-white bg-ink/25 shadow-[0_6px_16px_-6px_rgba(0,0,0,.6)]"
            />
          </span>
        )}

        {/* tab bar */}
        <nav
          className="grid h-[64px] shrink-0 grid-cols-3 border-t border-[#E6EEF0] bg-white"
          aria-label="Bolo tabs"
        >
          {(
            [
              { k: "practice", label: "Practice", icon: "pen" },
              { k: "watch", label: "Watch", icon: "play" },
              { k: "review", label: "Review", icon: "review" },
            ] as const
          ).map((t) => {
            const on = tab === t.k;
            return (
              <button
                key={t.k}
                type="button"
                disabled={!interactive}
                onClick={() => {
                  setTab(t.k);
                  setView("home");
                }}
                aria-pressed={on}
                className={`relative flex flex-col items-center justify-center gap-0.5 text-[11px] font-extrabold transition ${on ? "text-bolo-teal" : "text-ink/55 hover:text-ink/80"}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0 h-[3px] w-10 rounded-b-full transition ${on ? "bg-bolo-teal" : "bg-transparent"}`}
                />
                <span
                  className={`grid h-8 w-12 place-items-center rounded-xl transition ${on ? "bg-bolo-mint" : ""}`}
                >
                  <Icon name={t.icon} size={20} />
                </span>
                {t.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ reel */

type ReelSetters = {
  answer: string;
  setTab: (t: BoloTabKey) => void;
  setView: (v: Practice) => void;
  setStreak: (n: number) => void;
  setGrammarDone: (b: boolean) => void;
  setQuizPick: (p: string | null) => void;
  setQuizChecked: (b: boolean) => void;
};

/**
 * The scripted demo. Each step sets the screen, then shows where the finger
 * goes next. Positions are percentages of the phone screen.
 */
const REEL: { ms: number; finger: { x: number; y: number }; apply: (s: ReelSetters) => void }[] = [
  {
    ms: 2200,
    finger: { x: 50, y: 85 },
    apply: (s) => {
      s.setTab("practice");
      s.setView("home");
      s.setStreak(12);
      s.setGrammarDone(false);
      s.setQuizPick(null);
      s.setQuizChecked(false);
    },
  },
  { ms: 1600, finger: { x: 50, y: 60 }, apply: (s) => s.setView("quiz") },
  { ms: 1300, finger: { x: 50, y: 86 }, apply: (s) => s.setQuizPick(s.answer) },
  { ms: 2000, finger: { x: 50, y: 90 }, apply: (s) => s.setQuizChecked(true) },
  {
    ms: 2400,
    finger: { x: 50, y: 95 },
    apply: (s) => {
      s.setView("home");
      s.setGrammarDone(true);
      s.setStreak(13);
      s.setQuizPick(null);
      s.setQuizChecked(false);
    },
  },
  { ms: 2800, finger: { x: 83, y: 95 }, apply: (s) => s.setTab("watch") },
  { ms: 3200, finger: { x: 17, y: 95 }, apply: (s) => s.setTab("review") },
];

/* --------------------------------------------------------------- pieces */

function Flame({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className="bolo-flame">
      <path
        d="M12 2 C13 6 18 8 18 14 C18 18 15.3 21 12 21 C8.7 21 6 18 6 14.5 C6 11.5 8 10 9 8 C9.5 10 10.5 11 11.5 11 C11 8 11 5 12 2 Z"
        fill="#F2A40F"
      />
      <path
        d="M12 11 C12.5 13 15 14 15 16.5 C15 18.4 13.7 19.5 12 19.5 C10.3 19.5 9 18.4 9 16.6 C9 15 10.4 14 11 13 C11.3 14 11.8 14.3 12.3 14.3 C12 13.2 11.8 12.2 12 11 Z"
        fill="#FFD27A"
      />
    </svg>
  );
}

function Screen({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bolo-screen absolute inset-0 flex flex-col gap-3 p-4 ${className}`}>
      {children}
    </div>
  );
}

function Bubble({ children, tone = "teal" }: { children: ReactNode; tone?: "teal" | "mithu" }) {
  return (
    <p
      className={`bubble-in relative rounded-2xl border-2 px-3 py-2 text-[12.5px] font-bold leading-snug ${tone === "teal" ? "border-[#BFE6E0] bg-bolo-mint text-[#0B4F49]" : "border-[#F2C2B6] bg-[#FFF3EF] text-[#7A1F14]"}`}
    >
      <span
        aria-hidden="true"
        className={`absolute -left-[7px] top-4 h-3 w-3 rotate-45 border-b-2 border-l-2 ${tone === "teal" ? "border-[#BFE6E0] bg-bolo-mint" : "border-[#F2C2B6] bg-[#FFF3EF]"}`}
      />
      <span className="relative">{children}</span>
    </p>
  );
}

/* ------------------------------------------------------------- practice */

function PracticeHome({
  streak,
  grammarDone,
  onStart,
}: {
  streak: number;
  grammarDone: boolean;
  onStart: () => void;
}) {
  const L = useContext(LevelCtx);
  const xs = [
    "translate-x-[-34px]",
    "translate-x-[20px]",
    "translate-x-[42px]",
    "translate-x-[-6px]",
  ];
  const nodes: { label: string; icon: string; state: "done" | "now" | "next"; x: string }[] =
    L.nodes.map((n, i) => ({
      ...n,
      x: xs[i],
      state:
        i === 0
          ? "done"
          : i === 1
            ? grammarDone
              ? "done"
              : "now"
            : i === 2 && grammarDone
              ? "now"
              : "next",
    }));

  const doneToday = grammarDone ? 6 : 5;
  return (
    <Screen>
      <div className="flex items-start gap-2">
        <BoloParrot
          pose={grammarDone ? "cheer" : "wave"}
          size={46}
          perch={false}
          decorative
          animated
        />
        <div className="pt-1">
          <Bubble>{grammarDone ? BOLO_LINES.streak : L.greet}</Bubble>
        </div>
      </div>

      <div className="rounded-2xl bg-bolo-teal px-3 py-2.5 text-white shadow-[0_4px_0_0_var(--bolo-teal-deep)]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[15px] font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15">
              <Flame size={20} />
            </span>
            {streak}-day streak
          </span>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10.5px] font-bold">
            This week
          </span>
        </div>
        <ol className="mt-2 grid grid-cols-7 gap-1" aria-label="Days practised this week">
          {DAYS.map((d, i) => {
            const done = i < doneToday;
            const today = i === 5;
            return (
              <li key={i} className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold text-white/80">{d}</span>
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-black ${done ? "bg-white text-bolo-teal" : today ? "border-2 border-dashed border-white/80" : "bg-white/15"}`}
                >
                  {done ? "✓" : ""}
                  <span className="sr-only">{done ? "practised" : "not yet"}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/55">
        Today's practice
      </p>
      <ol
        className="relative flex flex-col items-center gap-1.5"
        aria-label="Today's practice path"
      >
        {nodes.map((n) => (
          <li key={n.label} className={`relative flex items-center gap-2 ${n.x}`}>
            <span
              className={`grid h-[42px] w-[42px] place-items-center rounded-full ${
                n.state === "done"
                  ? "bg-bolo-teal text-white shadow-[0_4px_0_0_var(--bolo-teal-deep)]"
                  : n.state === "now"
                    ? "bolo-node-now bg-bolo-flame text-ink shadow-[0_4px_0_0_#B57400]"
                    : "bg-[#E9EFF1] text-ink/40 shadow-[0_4px_0_0_#CAD6DA]"
              }`}
            >
              {n.state === "done" ? (
                <Icon name="check" size={24} />
              ) : (
                <Icon name={n.icon} size={22} />
              )}
            </span>
            <span
              className={`text-[12px] font-extrabold ${n.state === "next" ? "text-ink/45" : "text-ink"}`}
            >
              {n.label}
              {n.state === "now" && (
                <span className="ml-1.5 rounded-md bg-ink px-1.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider text-white">
                  Start
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={onStart}
        className="bolo-press mt-auto w-full rounded-2xl bg-bolo-teal py-2.5 text-[15px] font-extrabold uppercase tracking-wide text-white"
      >
        {grammarDone ? "Practise again" : L.start}
      </button>
    </Screen>
  );
}

function QuizScreen({
  onClose,
  onDone,
  ctlPick,
  ctlChecked,
}: {
  onClose: () => void;
  onDone: (correct: boolean) => void;
  /** Driven by the reel instead of taps. */
  ctlPick?: string | null;
  ctlChecked?: boolean;
}) {
  const [ownPick, setPick] = useState<string | null>(null);
  const [ownChecked, setChecked] = useState(false);
  const pick = ctlPick !== undefined ? ctlPick : ownPick;
  const checked = ctlChecked !== undefined ? ctlChecked : ownChecked;
  const L = useContext(LevelCtx);
  const QUIZ = L.quiz;
  const correct = pick === QUIZ.answer;
  return (
    <Screen className="gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close practice"
          className="grid h-8 w-8 place-items-center rounded-full text-ink/50 hover:bg-[#F1F5F6]"
        >
          <Icon name="close" size={18} />
        </button>
        <span className="h-3.5 flex-1 overflow-hidden rounded-full bg-[#E9EFF1]">
          <span
            className="block h-full rounded-full bg-bolo-leaf transition-[width] duration-500"
            style={{ width: checked && correct ? "100%" : "60%" }}
          />
        </span>
      </div>

      <div className="flex items-end gap-2">
        <BoloParrot
          key={checked ? (correct ? "c" : "w") : "t"}
          pose={checked ? (correct ? "cheer" : "oops") : "think"}
          size={64}
          perch={false}
          decorative
          animated
        />
        <Bubble>{QUIZ.ask}</Bubble>
      </div>

      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/55">
        {QUIZ.kind}
      </p>
      {QUIZ.layout === "blank" ? (
        <p className="text-[19px] font-extrabold leading-snug text-ink">
          {QUIZ.before}{" "}
          <span
            className={`inline-block min-w-16 rounded-lg border-b-[3px] px-2 text-center ${pick ? "border-bolo-teal bg-bolo-mint text-bolo-teal" : "border-ink/30 text-transparent"}`}
          >
            {pick ?? "____"}
          </span>{" "}
          {QUIZ.after}
        </p>
      ) : (
        <p className="rounded-2xl bg-[#F4F7F8] px-3 py-2.5 text-[15px] font-extrabold leading-snug text-ink">
          {QUIZ.before}
        </p>
      )}

      <div
        className={`${QUIZ.layout === "blank" ? "grid grid-cols-3" : "flex flex-col"} gap-2 ${checked && !correct ? "bolo-shake" : ""}`}
      >
        {QUIZ.opts.map((o) => {
          const on = pick === o;
          return (
            <button
              key={o}
              type="button"
              disabled={checked}
              onClick={() => setPick(o)}
              aria-pressed={on}
              className={`bolo-press-soft rounded-2xl border-2 ${QUIZ.layout === "blank" ? "py-3 text-[15px]" : "px-3 py-2 text-left text-[12.5px] leading-snug"} font-extrabold transition ${on ? "border-bolo-teal bg-bolo-mint text-bolo-teal" : "border-[#D5E3E6] bg-white text-ink"}`}
            >
              {o}
            </button>
          );
        })}
      </div>

      {!checked ? (
        <button
          type="button"
          disabled={!pick}
          onClick={() => setChecked(true)}
          className={`mt-auto w-full rounded-2xl py-3 text-[15px] font-extrabold uppercase tracking-wide ${pick ? "bolo-press bg-bolo-teal text-white" : "bg-[#E9EFF1] text-ink/40"}`}
        >
          Check
        </button>
      ) : (
        <div
          className={`bolo-screen -mx-4 -mb-4 mt-auto flex flex-col gap-2 px-4 pb-4 pt-3 ${correct ? "bg-brand-soft" : "bg-terra-soft"}`}
          aria-live="polite"
        >
          <p
            className={`text-[16px] font-extrabold ${correct ? "text-brand-deep" : "text-coral-deep"}`}
          >
            {correct ? BOLO_LINES.correct : BOLO_LINES.wrong}
          </p>
          <p className="text-[12.5px] font-semibold text-ink/80">{QUIZ.why}</p>
          <button
            type="button"
            onClick={() => (correct ? onDone(true) : (setPick(null), setChecked(false)))}
            className={`mt-1 w-full rounded-2xl py-3 text-[15px] font-extrabold uppercase tracking-wide text-white ${correct ? "bg-brand shadow-[0_4px_0_0_#035e43]" : "bg-coral-deep shadow-[0_4px_0_0_#7f271f]"}`}
          >
            {correct ? "Continue" : "Try again"}
          </button>
        </div>
      )}
    </Screen>
  );
}

/* ---------------------------------------------------------------- watch */

const VIDEO_TONES = ["bg-bolo-teal", "bg-[#2F5BEA]", "bg-[#7A5AF0]", "bg-[#B35F00]"];

function WatchScreen() {
  const L = useContext(LevelCtx);
  const PHONE_VIDEOS = L.videos.map((v, i) => ({ ...v, tone: VIDEO_TONES[i] }));
  const [chip, setChip] = useState("For you");
  return (
    <Screen>
      <div className="flex items-start gap-2">
        <BoloParrot pose="listen" size={56} perch={false} decorative animated />
        <div className="pt-1">
          <Bubble>Headphones on — short videos, picked for your course.</Bubble>
        </div>
      </div>
      <div className="flex gap-1.5" role="group" aria-label="Video filters">
        {["For you", "Speaking", "Grammar"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setChip(c)}
            aria-pressed={chip === c}
            className={`rounded-full border-2 px-3 py-1 text-[11.5px] font-extrabold ${chip === c ? "border-bolo-teal bg-bolo-teal text-white" : "border-[#D5E3E6] text-ink/70"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <article className="overflow-hidden rounded-2xl border-2 border-[#E1ECEE] shadow-[0_4px_0_0_#E1ECEE]">
        <div className="relative grid h-28 place-items-center overflow-hidden bg-bolo-teal">
          <span
            aria-hidden="true"
            className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-white/10"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-10 right-4 h-24 w-24 rounded-full bg-white/10"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-bolo-teal">
            Continue watching
          </span>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-bolo-teal shadow-[0_8px_18px_-8px_rgba(0,0,0,.5)]">
            <Icon name="play" size={24} />
          </span>
        </div>
        <div className="p-3">
          <p className="text-[13.5px] font-extrabold leading-snug">{PHONE_VIDEOS[0].title}</p>
          <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-[#E9EFF1]">
            <span className="block h-full w-3/5 rounded-full bg-bolo-flame" />
          </span>
        </div>
      </article>

      <ul className="flex flex-col gap-2">
        {PHONE_VIDEOS.slice(1).map((v) => (
          <li
            key={v.title}
            className="flex items-center gap-3 rounded-2xl border-2 border-[#EEF3F4] p-2"
          >
            <span
              className={`grid h-11 w-14 shrink-0 place-items-center rounded-xl text-white ${v.tone}`}
            >
              <Icon name="play" size={18} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[12.5px] font-extrabold">{v.title}</span>
              <span className="text-[10.5px] font-bold text-ink/55">{v.cat}</span>
            </span>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

/* --------------------------------------------------------------- review */

const BARS = [6, 12, 18, 10, 22, 16, 8, 20, 26, 14, 9, 18, 24, 12, 7, 16, 21, 11, 6, 14, 19, 9];

function ReviewScreen() {
  const L = useContext(LevelCtx);
  return (
    <Screen>
      <div className="flex items-start gap-2">
        <MithuMacaw pose="review" size={62} perch={false} decorative animated />
        <div className="pt-1">
          <Bubble tone="mithu">{BOLO_LINES.review}</Bubble>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-[#EADFF8] bg-[#F7F3FF] p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#4E3470]">
            From your teacher · this week
          </span>
          <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-extrabold text-white">
            Reviewed
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#7A5AF0] text-white">
            <Icon name="play" size={16} />
          </span>
          <span className="flex h-8 flex-1 items-center gap-[3px]" aria-hidden="true">
            {BARS.map((h, i) => (
              <span
                key={i}
                className={`w-[4px] rounded-full ${i < 9 ? "bg-[#7A5AF0]" : "bg-[#CFC2F5]"}`}
                style={{ height: h }}
              />
            ))}
          </span>
        </div>
        <p className="mt-1.5 text-[11px] font-bold text-ink/60">
          Your speaking practice · Thursday
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        <li className="rounded-2xl border-2 border-[#EEF3F4] p-2.5">
          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-coral-deep">
            Fix this one
          </span>
          <p className="mt-1 text-[12.5px] font-semibold text-ink/55 line-through decoration-coral-deep/60">
            {L.review.wrong}
          </p>
          <p className="text-[13px] font-extrabold text-brand-deep">{L.review.right}</p>
        </li>
        <li className="rounded-2xl border-2 border-[#EEF3F4] p-2.5">
          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#4E3470]">
            {L.review.tipLabel}
          </span>
          <p className="mt-1 text-[12.5px] font-semibold text-ink/80">{L.review.tip}</p>
        </li>
      </ul>

      <p className="mt-auto flex items-center gap-2 rounded-xl bg-[#F4F7F8] px-3 py-2 text-[11px] font-bold text-ink/70">
        <Icon name="shield" size={16} className="text-bolo-teal" />
        Only our teachers hear your recordings.
      </p>
    </Screen>
  );
}
