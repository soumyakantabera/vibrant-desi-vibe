import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Icon, type IconName } from "@/components/Icon";
import { BoloParrot, type BoloPose } from "@/components/mascots/BoloParrot";
import { WaButton } from "@/components/ui-bits";
import {
  LEVEL_BANDS,
  LEVEL_MAX,
  LEVEL_QUESTIONS,
  bandFor,
  roomFor,
  type LevelBand,
  type LevelGoal,
} from "@/lib/level-test";
import { TEST_COPY, TEST_LANGS, type TestLang } from "@/lib/level-test-i18n";
import { tone } from "@/lib/tones";

/**
 * The speaking level test in the Bolo theme: Bolo the parrot (the practice
 * app's mascot) asks each question in a speech bubble, the answers are chunky
 * full-width buttons with an icon each, and progress is a row of stars.
 * 4 questions + a goal, one per screen; the result opens WhatsApp with the
 * score, level, goal and course already written.
 *
 * Chosen in November 2026 over a "colour tiles" design. Icons only, no emoji.
 * Nothing loops or floats: Bolo changes pose between steps; he does not
 * animate.
 *
 * Scoring and copy live in src/lib/level-test.ts and level-test-i18n.ts, so
 * all three languages always agree.
 */

const QUESTION_COUNT = LEVEL_QUESTIONS.length; // 4
const GOAL_STEP = QUESTION_COUNT; // step 4
const RESULT_STEP = QUESTION_COUNT + 1; // step 5
const TOTAL_TAPS = QUESTION_COUNT + 1; // 4 answers + 1 goal
const ADVANCE_MS = 260;

/** Answers, best first. `tone` indexes src/lib/tones.ts. */
const ANSWERS: { points: 0 | 1 | 2; icon: IconName; tone: number }[] = [
  { points: 2, icon: "smile", tone: 0 },
  { points: 1, icon: "puzzle", tone: 1 },
  { points: 0, icon: "rocket", tone: 3 },
];

const GOALS: { id: LevelGoal; icon: IconName; tone: number }[] = [
  { id: "everyday", icon: "messages", tone: 0 },
  { id: "work", icon: "computer", tone: 2 },
  { id: "interview", icon: "user", tone: 4 },
];

/** Bolo's pose for each question, then the goal step. */
const QUESTION_POSES: BoloPose[] = ["wave", "think", "mic", "listen", "think"];

const BAND_STYLE: Record<LevelBand["id"], { tone: number; icon: IconName; bolo: BoloPose }> = {
  starting: { tone: 3, icon: "spark", bolo: "wave" },
  building: { tone: 1, icon: "trend", bolo: "talk" },
  connecting: { tone: 2, icon: "rocket", bolo: "cheer" },
  performing: { tone: 0, icon: "trophy", bolo: "cheer" },
};

/* ------------------------------------------------------------------ state */

function useTest(initialLang: TestLang) {
  const [lang, setLang] = useState<TestLang>(initialLang);
  const [answers, setAnswers] = useState<(number | null)[]>(() => LEVEL_QUESTIONS.map(() => null));
  const [goal, setGoal] = useState<LevelGoal | null>(null);
  const [step, setStep] = useState(0);
  const [moving, setMoving] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // After every step: focus the new question (screen readers announce it) and
  // bring the test back into view if the page scrolled away.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
    const top = sectionRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) sectionRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step]);

  const advance = (next: number) => {
    setMoving(true);
    window.setTimeout(() => {
      setStep(next);
      setMoving(false);
    }, ADVANCE_MS);
  };

  return {
    lang,
    setLang,
    answers,
    goal,
    step,
    moving,
    sectionRef,
    headingRef,
    done: answers.filter((a) => a !== null).length + (goal ? 1 : 0),
    score: answers.reduce<number>((sum, a) => sum + (a ?? 0), 0),
    answer(i: number, points: number) {
      if (moving) return;
      setAnswers((prev) => prev.map((a, j) => (j === i ? points : a)));
      advance(i + 1);
    },
    chooseGoal(g: LevelGoal) {
      if (moving) return;
      setGoal(g);
      advance(RESULT_STEP);
    },
    back() {
      if (!moving && step > 0) setStep(step - 1);
    },
    restart() {
      setAnswers(LEVEL_QUESTIONS.map(() => null));
      setGoal(null);
      setStep(0);
    },
  };
}
type TestState = ReturnType<typeof useTest>;

/* ------------------------------------------------------------------ view */

export function LevelTest({ lang = "en" }: { lang?: TestLang }) {
  const s = useTest(lang);
  const t = TEST_COPY[s.lang];
  const htmlLang = TEST_LANGS.find((l) => l.id === s.lang)?.htmlLang ?? "en-IN";
  const onQuestion = s.step < GOAL_STEP;
  const prompt = onQuestion ? t.questions[s.step] : t.goalQuestion;

  return (
    <section
      ref={s.sectionRef}
      id="level-test"
      data-level-test=""
      lang={htmlLang}
      aria-labelledby="level-test-title"
      className="mb-10 scroll-mt-20 overflow-hidden rounded-[2rem] border-2 border-sunshine/50 bg-gradient-to-b from-amber-soft via-white to-slate-soft shadow-lg"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 px-4 pt-5 md:px-6">
        <div>
          <h2
            id="level-test-title"
            className="text-lg font-extrabold leading-tight text-ink md:text-xl"
          >
            {t.title}
          </h2>
          <p className="mt-1.5 inline-flex rounded-full bg-tile-green px-3 py-1 text-xs font-display font-bold text-white">
            {t.sub}
          </p>
        </div>
        <LangSwitch s={s} />
      </div>

      <StarProgress s={s} />

      <div className="px-4 pb-5 md:px-6 md:pb-7" aria-live="polite">
        <div key={`${s.step}-${s.lang}`} className="slide-in">
          {s.step < RESULT_STEP ? (
            <>
              <div className="flex items-end gap-2">
                <BoloParrot
                  pose={QUESTION_POSES[s.step]}
                  size={78}
                  perch={false}
                  decorative
                  className="shrink-0"
                />
                <div className="relative mb-3 flex-1 rounded-2xl border-2 border-[#D5E7E4] bg-white px-4 py-3 shadow-sm">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[8px] bottom-4 h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-[#D5E7E4] bg-white"
                  />
                  <p className="relative text-xs font-display font-bold text-ink/55">
                    {t.stepOf(s.step + 1, TOTAL_TAPS)}
                  </p>
                  <h3
                    ref={s.headingRef}
                    tabIndex={-1}
                    className="relative mt-0.5 text-base font-display font-bold leading-snug text-ink outline-none"
                  >
                    {prompt}
                  </h3>
                </div>
              </div>
              {onQuestion && <p className="mt-1 text-xs text-ink/60">{t.hint}</p>}

              <div className="mt-4 grid gap-3">
                {onQuestion
                  ? ANSWERS.map((a) => (
                      <ChunkyButton
                        key={a.points}
                        icon={a.icon}
                        tone={a.tone}
                        on={s.answers[s.step] === a.points}
                        disabled={s.moving}
                        onClick={() => s.answer(s.step, a.points)}
                      >
                        {t.options[a.points]}
                      </ChunkyButton>
                    ))
                  : GOALS.map((g) => (
                      <ChunkyButton
                        key={g.id}
                        icon={g.icon}
                        tone={g.tone}
                        on={s.goal === g.id}
                        disabled={s.moving}
                        onClick={() => s.chooseGoal(g.id)}
                      >
                        {t.goals[g.id]}
                      </ChunkyButton>
                    ))}
              </div>
              {s.step > 0 && (
                <button
                  type="button"
                  onClick={s.back}
                  disabled={s.moving}
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-display font-bold text-ink/65 hover:bg-white hover:text-ink"
                >
                  <Icon name="arrow-right" size={16} className="rotate-180" /> {t.back}
                </button>
              )}
            </>
          ) : (
            s.goal && <Result s={s} />
          )}
        </div>
      </div>
    </section>
  );
}

function ChunkyButton({
  icon,
  tone: n,
  on,
  disabled,
  onClick,
  children,
}: {
  icon: IconName;
  tone: number;
  on: boolean;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  const t = tone(n);
  return (
    <button
      type="button"
      aria-pressed={on}
      disabled={disabled}
      onClick={onClick}
      className={`flex min-h-[56px] w-full items-center gap-3 rounded-2xl border-2 border-b-[5px] px-3 py-2.5 text-left text-sm font-display font-bold text-ink transition-[transform,border-width] active:translate-y-[3px] active:border-b-2 ${
        on ? `${t.soft} ${t.border} ring-2 ring-sunshine ring-offset-1` : `bg-white ${t.border}`
      }`}
    >
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${t.solid}`}
      >
        <Icon name={icon} size={20} />
      </span>
      <span className="flex-1">{children}</span>
      {on && <Icon name="check" size={20} className={t.text} />}
    </button>
  );
}

function StarProgress({ s }: { s: TestState }) {
  const t = TEST_COPY[s.lang];
  return (
    <div className="px-4 pt-4 pb-3 md:px-6">
      <ol
        className="flex items-center gap-1.5"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={TOTAL_TAPS}
        aria-valuenow={s.done}
        aria-label={t.stepOf(Math.min(s.step + 1, TOTAL_TAPS), TOTAL_TAPS)}
      >
        {Array.from({ length: TOTAL_TAPS }, (_, i) => {
          const filled = i < QUESTION_COUNT ? s.answers[i] !== null : s.goal !== null;
          const current = i === s.step;
          return (
            <li key={i} className="flex flex-1 items-center gap-1.5 last:flex-none">
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                  filled
                    ? "border-sunshine bg-sunshine text-ink"
                    : current
                      ? "border-tile-green bg-white text-tile-green"
                      : "border-ink/15 bg-white text-ink/30"
                }`}
              >
                <Icon name="star" size={16} filled={filled} />
              </span>
              {i < TOTAL_TAPS - 1 && (
                <span
                  className={`h-1 flex-1 rounded-full ${filled ? "bg-sunshine" : "bg-ink/10"}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function LangSwitch({ s }: { s: TestState }) {
  const t = TEST_COPY[s.lang];
  return (
    <div
      role="group"
      aria-label={t.languageLabel}
      className="inline-flex rounded-full border-2 border-ink/10 bg-white p-1"
    >
      {TEST_LANGS.map((l) => {
        const on = l.id === s.lang;
        return (
          <button
            key={l.id}
            type="button"
            lang={l.htmlLang}
            aria-pressed={on}
            onClick={() => s.setLang(l.id)}
            className={`min-h-[36px] rounded-full px-3 text-sm font-display font-bold transition ${
              on ? "bg-tile-green text-white" : "text-ink/70 hover:bg-paper"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

const MEDIUM_ROOM: Partial<Record<TestLang, { path: string; title: string }>> = {
  hi: { path: "/course-spoken-english-hindi", title: "Basic Spoken English — Hindi to English" },
  bn: {
    path: "/course-spoken-english-bengali",
    title: "Basic Spoken English — Bengali to English",
  },
};

function Result({ s }: { s: TestState }) {
  const t = TEST_COPY[s.lang];
  const goal = s.goal as LevelGoal;
  const band = bandFor(s.score);
  const base = roomFor(s.score, goal);
  // Someone taking the test in Hindi or Bengali who needs the basics is
  // pointed at the same course taught through that language (same fee,
  // a teacher who speaks it).
  const medium = base.id === "basic" ? MEDIUM_ROOM[s.lang] : undefined;
  const room = medium ? { ...base, ...medium } : base;
  const bs = BAND_STYLE[band.id];
  const bt = tone(bs.tone);
  const copy = t.bands[band.id];
  // Letter-spacing splits Devanagari and Bengali clusters: English only.
  const label = s.lang === "en" ? "uppercase tracking-[0.14em] text-xs" : "text-sm";
  const message = t.message({
    score: s.score,
    band: copy.name,
    goal: t.goals[goal],
    course: room.title,
  });

  return (
    <div className={`rounded-3xl border-2 p-4 md:p-6 ${bt.soft} ${bt.border}`}>
      <div className="flex items-end gap-3">
        <BoloParrot pose={bs.bolo} size={84} perch={false} decorative className="shrink-0" />
        <div className="pb-1">
          <p className={`font-display font-bold ${label} ${bt.text}`}>{t.resultLabel}</p>
          <h3
            ref={s.headingRef}
            tabIndex={-1}
            className="mt-0.5 text-lg font-display font-extrabold leading-tight text-ink outline-none md:text-xl"
          >
            {s.score}/{LEVEL_MAX} · {copy.name}
          </h3>
          <p className="text-sm text-ink/70">({copy.cefr})</p>
        </div>
      </div>

      <ol className="mt-4 grid grid-cols-4 gap-1.5" aria-label={t.scaleLabel}>
        {LEVEL_BANDS.map((b) => {
          const on = b.id === band.id;
          const t2 = tone(BAND_STYLE[b.id].tone);
          return (
            <li key={b.id} className="text-center">
              <div
                className={`grid h-7 place-items-center rounded-lg ${
                  on ? t2.solid : "bg-white text-ink/25"
                }`}
              >
                <Icon name={BAND_STYLE[b.id].icon} size={15} />
              </div>
              <span
                className={`mt-1 block text-[11px] leading-tight font-display ${
                  on ? `font-bold ${t2.text}` : "text-ink/55"
                }`}
              >
                {t.bands[b.id].name}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 text-ink/85">{copy.meaning}</p>

      <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
        <p className={`font-display font-bold ${label} ${bt.text}`}>{t.suggested}</p>
        <p className="mt-1 flex items-center gap-2 font-display font-extrabold text-ink">
          <span
            aria-hidden="true"
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${bt.solid}`}
          >
            <Icon name="school" size={17} />
          </span>
          <Link to={room.path} className="underline decoration-2 underline-offset-4">
            {room.title}
          </Link>
        </p>
        <p className="mt-2 font-display font-bold text-ink">
          {t.rooms[room.id].fee}{" "}
          <span className="font-sans text-sm font-normal text-ink/70">· {t.feeNote}</span>
        </p>
        <p className="mt-1 text-sm text-ink/80">{t.rooms[room.id].why}</p>
      </div>

      <WaButton
        message={message}
        verbatim
        goal="level_test_result"
        size="lg"
        className="mt-5 w-full justify-center"
      >
        {t.send}
      </WaButton>
      <p className="mt-3 text-sm text-ink/70">{t.freeNote}</p>
      <button
        type="button"
        onClick={s.restart}
        className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-display font-bold text-ink/65 hover:bg-white hover:text-ink"
      >
        <Icon name="refresh" size={16} /> {t.retake}
      </button>
    </div>
  );
}
