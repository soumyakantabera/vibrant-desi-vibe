import { useEffect, useRef, useState, type RefObject } from "react";
import { Link } from "@tanstack/react-router";

import { Icon, type IconName } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import {
  LEVEL_BANDS,
  LEVEL_QUESTIONS,
  bandFor,
  roomFor,
  type LevelBand,
  type LevelGoal,
} from "@/lib/level-test";
import { TEST_COPY, TEST_LANGS, type TestLang } from "@/lib/level-test-i18n";
import { tone } from "@/lib/tones";

/**
 * The speaking level test, one question per screen.
 *
 * Why a wizard: on a phone, eleven questions with three answers each is a long
 * scroll and people stop halfway. One big question, three big colour-coded
 * buttons and an automatic move to the next question keeps it to eleven taps.
 *
 * Language: English, Hindi and Bengali are switched in place — answers are
 * kept — and the WhatsApp message goes out in the chosen language. Scoring
 * lives in src/lib/level-test.ts, so all three always agree.
 *
 * Without JavaScript the page still works: the article below the test lists
 * every question and the scoring key.
 */

const QUESTION_COUNT = LEVEL_QUESTIONS.length; // 10
const GOAL_STEP = QUESTION_COUNT; // step 10
const RESULT_STEP = QUESTION_COUNT + 1; // step 11
const TOTAL_TAPS = QUESTION_COUNT + 1; // 10 answers + 1 goal

/** Answers, best first: points → icon and colours. */
const ANSWERS: {
  points: 0 | 1 | 2;
  icon: IconName;
  idle: string;
  badge: string;
  picked: string;
}[] = [
  {
    points: 2,
    icon: "check",
    idle: "border-brand/30 bg-brand-soft text-brand-deep hover:border-tile-green",
    badge: "bg-tile-green text-white",
    picked: "border-tile-green bg-tile-green text-white",
  },
  {
    points: 1,
    icon: "pause",
    idle: "border-sunshine/50 bg-amber-soft text-[#8a4800] hover:border-tile-saffron",
    badge: "bg-tile-saffron text-white",
    picked: "border-tile-saffron bg-tile-saffron text-white",
  },
  {
    points: 0,
    icon: "clock",
    idle: "border-coral/40 bg-terra-soft text-coral-deep hover:border-coral-deep",
    badge: "bg-coral-deep text-white",
    picked: "border-coral-deep bg-coral-deep text-white",
  },
];

const GOALS: { id: LevelGoal; icon: IconName; tone: number }[] = [
  { id: "everyday", icon: "smile", tone: 0 },
  { id: "work", icon: "computer", tone: 2 },
  { id: "interview", icon: "user", tone: 4 },
];

/** Band → tone index in src/lib/tones.ts and an icon. */
const BAND_STYLE: Record<LevelBand["id"], { tone: number; icon: IconName }> = {
  starting: { tone: 3, icon: "spark" },
  building: { tone: 1, icon: "trend" },
  connecting: { tone: 2, icon: "rocket" },
  performing: { tone: 0, icon: "trophy" },
};

/** Delay before moving on, so the tap is visibly confirmed. */
const ADVANCE_MS = 260;

export function LevelTest({ lang: initialLang = "en" }: { lang?: TestLang }) {
  const [lang, setLang] = useState<TestLang>(initialLang);
  const [answers, setAnswers] = useState<(number | null)[]>(() => LEVEL_QUESTIONS.map(() => null));
  const [goal, setGoal] = useState<LevelGoal | null>(null);
  const [step, setStep] = useState(0);
  const [moving, setMoving] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const t = TEST_COPY[lang];
  const htmlLang = TEST_LANGS.find((l) => l.id === lang)?.htmlLang ?? "en-IN";

  // After every step change: move focus to the new question (screen readers
  // announce it) and bring the test back into view if the page scrolled away.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
    const top = sectionRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) sectionRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step]);

  const done = answers.filter((a) => a !== null).length + (goal ? 1 : 0);
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);

  function advance(next: number) {
    setMoving(true);
    window.setTimeout(() => {
      setStep(next);
      setMoving(false);
    }, ADVANCE_MS);
  }

  function answer(i: number, points: number) {
    if (moving) return;
    setAnswers((prev) => prev.map((a, j) => (j === i ? points : a)));
    advance(i + 1);
  }

  function chooseGoal(g: LevelGoal) {
    if (moving) return;
    setGoal(g);
    advance(RESULT_STEP);
  }

  function restart() {
    setAnswers(LEVEL_QUESTIONS.map(() => null));
    setGoal(null);
    setStep(0);
  }

  return (
    <section
      ref={sectionRef}
      id="level-test"
      data-level-test=""
      lang={htmlLang}
      aria-labelledby="level-test-title"
      className="mb-10 scroll-mt-20 overflow-hidden rounded-3xl border border-brand/20 bg-white shadow-lg"
    >
      {/* Header: title, language switch, progress */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-teal p-5 text-white md:p-7">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-sunshine/25"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 left-1/3 h-28 w-28 rounded-full bg-white/10"
        />
        <div className="relative flex items-start gap-4">
          <span
            aria-hidden="true"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sunshine text-ink shadow md:h-14 md:w-14"
          >
            <Icon name="target" size={28} />
          </span>
          <div>
            <h2 id="level-test-title" className="text-2xl leading-tight text-white md:text-3xl">
              {t.title}
            </h2>
            <p className="mt-2 inline-flex rounded-full bg-sunshine px-3 py-1 text-sm font-display font-bold text-ink">
              {t.sub}
            </p>
          </div>
        </div>

        <div
          role="group"
          aria-label={t.languageLabel}
          className="relative mt-5 inline-flex rounded-full bg-white/15 p-1"
        >
          {TEST_LANGS.map((l) => {
            const on = l.id === lang;
            return (
              <button
                key={l.id}
                type="button"
                lang={l.htmlLang}
                aria-pressed={on}
                onClick={() => setLang(l.id)}
                className={`min-h-[40px] rounded-full px-4 text-sm font-display font-bold transition ${
                  on ? "bg-white text-brand-deep shadow" : "text-white hover:bg-white/15"
                }`}
              >
                {l.label}
              </button>
            );
          })}
        </div>

        <div className="relative mt-5">
          <div className="flex justify-between text-xs font-display font-bold text-white/90">
            <span>{step < RESULT_STEP ? t.stepOf(step + 1, TOTAL_TAPS) : t.resultLabel}</span>
            <span>{Math.round((done / TOTAL_TAPS) * 100)}%</span>
          </div>
          <div
            className="mt-2 grid gap-1"
            style={{ gridTemplateColumns: `repeat(${TOTAL_TAPS}, minmax(0, 1fr))` }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={TOTAL_TAPS}
            aria-valuenow={done}
            aria-label={t.stepOf(Math.min(step + 1, TOTAL_TAPS), TOTAL_TAPS)}
          >
            {Array.from({ length: TOTAL_TAPS }, (_, i) => {
              const filled = i < QUESTION_COUNT ? answers[i] !== null : goal !== null;
              const current = i === step;
              return (
                <span
                  key={i}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    filled
                      ? "bg-sunshine"
                      : current
                        ? "bg-white ring-2 ring-sunshine/60"
                        : "bg-white/25"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Body: one step at a time */}
      <div className="p-4 md:p-7" aria-live="polite">
        <div key={`${step}-${lang}`} className="slide-in">
          {step < GOAL_STEP && (
            <QuestionStep
              n={step}
              text={t.questions[step]}
              hint={t.hint}
              labels={t.options}
              selected={answers[step]}
              onPick={(points) => answer(step, points)}
              headingRef={headingRef}
              disabled={moving}
            />
          )}

          {step === GOAL_STEP && (
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tile-blue text-white shadow"
                >
                  <Icon name="target" size={24} />
                </span>
                <h3
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-xl font-display font-bold leading-snug text-ink outline-none md:text-2xl"
                >
                  {t.goalQuestion}
                </h3>
              </div>
              <div className="mt-5 grid gap-3">
                {GOALS.map((g) => {
                  const gt = tone(g.tone);
                  const on = goal === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      aria-pressed={on}
                      disabled={moving}
                      onClick={() => chooseGoal(g.id)}
                      className={`flex min-h-[64px] w-full items-center gap-4 rounded-2xl border-2 p-3.5 text-left text-base font-display font-bold transition active:scale-[0.98] md:text-lg ${
                        on
                          ? `${gt.solid} border-transparent shadow-md`
                          : `${gt.soft} ${gt.border} ${gt.text}`
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                          on ? "bg-white/20" : gt.solid
                        }`}
                      >
                        <Icon name={g.icon} size={22} />
                      </span>
                      <span className="flex-1">{t.goals[g.id]}</span>
                      <Icon name="arrow-right" size={18} className="opacity-60" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === RESULT_STEP && goal && (
            <Result
              score={score}
              goal={goal}
              lang={lang}
              headingRef={headingRef}
              onRestart={restart}
            />
          )}
        </div>

        {step > 0 && step < RESULT_STEP && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            disabled={moving}
            className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-display font-bold text-ink/70 hover:bg-paper hover:text-ink"
          >
            <Icon name="arrow-right" size={16} className="rotate-180" /> {t.back}
          </button>
        )}
      </div>
    </section>
  );
}

function QuestionStep({
  n,
  text,
  hint,
  labels,
  selected,
  onPick,
  headingRef,
  disabled,
}: {
  n: number;
  text: string;
  hint: string;
  labels: [string, string, string];
  selected: number | null;
  onPick: (points: number) => void;
  headingRef: RefObject<HTMLHeadingElement | null>;
  disabled: boolean;
}) {
  const qt = tone(n);
  return (
    <div>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-extrabold shadow ${qt.solid}`}
        >
          {n + 1}
        </span>
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="pt-1 text-xl font-display font-bold leading-snug text-ink outline-none md:text-2xl"
        >
          {text}
        </h3>
      </div>
      <p className="mt-2 text-sm text-ink/65 sm:pl-[60px]">{hint}</p>
      <div className="mt-5 grid gap-3 sm:pl-[60px]">
        {ANSWERS.map((a) => {
          const on = selected === a.points;
          return (
            <button
              key={a.points}
              type="button"
              aria-pressed={on}
              disabled={disabled}
              onClick={() => onPick(a.points)}
              className={`flex min-h-[60px] w-full items-center gap-4 rounded-2xl border-2 p-3 text-left text-lg font-display font-bold transition active:scale-[0.98] ${
                on ? `${a.picked} shadow-md` : a.idle
              }`}
            >
              <span
                aria-hidden="true"
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                  on ? "bg-white/25 text-white" : a.badge
                }`}
              >
                <Icon name={a.icon} size={22} />
              </span>
              <span className="flex-1">{labels[a.points]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Result({
  score,
  goal,
  lang,
  headingRef,
  onRestart,
}: {
  score: number;
  goal: LevelGoal;
  lang: TestLang;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onRestart: () => void;
}) {
  const t = TEST_COPY[lang];
  // Letter-spacing splits Devanagari and Bengali clusters: English only.
  const label = lang === "en" ? "uppercase tracking-[0.14em]" : "text-sm";
  const band = bandFor(score);
  const base = roomFor(score, goal);
  // Someone taking the test in Hindi who needs the basics is pointed at the
  // same course taught through Hindi (same fee, Hindi-speaking teacher).
  const room =
    lang === "hi" && base.id === "basic"
      ? {
          ...base,
          path: "/course-spoken-english-hindi",
          title: "Basic Spoken English — Hindi to English",
        }
      : base;
  const bs = BAND_STYLE[band.id];
  const bt = tone(bs.tone);
  const copy = t.bands[band.id];
  const message = t.message({
    score,
    band: copy.name,
    goal: t.goals[goal],
    course: room.title,
  });

  return (
    <div className={`rounded-2xl border-2 p-5 md:p-6 ${bt.soft} ${bt.border}`}>
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl shadow-md ${bt.solid}`}
        >
          <Icon name={bs.icon} size={34} />
        </span>
        <div>
          <p className={`text-xs font-display font-bold ${label} ${bt.text}`}>{t.resultLabel}</p>
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="mt-1 text-2xl font-display font-extrabold leading-tight text-ink outline-none md:text-3xl"
          >
            {score}/20 · {copy.name}
          </h3>
          <p className="text-sm text-ink/70">({copy.cefr})</p>
        </div>
      </div>

      <ol className="mt-5 grid grid-cols-4 gap-1.5" aria-label={t.scaleLabel}>
        {LEVEL_BANDS.map((b) => {
          const on = b.id === band.id;
          const bt2 = tone(BAND_STYLE[b.id].tone);
          return (
            <li key={b.id} className="text-center">
              <div className={`h-2.5 rounded-full ${on ? bt2.solid : "bg-ink/10"}`} />
              <span
                className={`mt-1 block text-[11px] leading-tight font-display ${
                  on ? `font-bold ${bt2.text}` : "text-ink/55"
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
        <p className={`text-xs font-display font-bold ${label} ${bt.text}`}>{t.suggested}</p>
        <p className="mt-1 flex items-center gap-2 text-lg font-display font-extrabold text-ink">
          <Icon name="school" size={20} className={bt.text} />
          <Link to={room.path} className="underline decoration-2 underline-offset-4">
            {room.title}
          </Link>
        </p>
        <p className="mt-1 font-display font-bold text-ink">
          {t.rooms[room.id].fee}{" "}
          <span className="font-sans text-sm font-normal text-ink/70">· {t.feeNote}</span>
        </p>
        <p className="mt-2 text-sm text-ink/80">{t.rooms[room.id].why}</p>
      </div>

      <WaButton
        message={message}
        goal="level_test_result"
        size="lg"
        className="mt-5 w-full justify-center"
      >
        {t.send}
      </WaButton>
      <p className="mt-3 text-sm text-ink/70">{t.freeNote}</p>
      <button
        type="button"
        onClick={onRestart}
        className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-display font-bold text-ink/70 hover:bg-white hover:text-ink"
      >
        <Icon name="refresh" size={16} /> {t.retake}
      </button>
    </div>
  );
}
