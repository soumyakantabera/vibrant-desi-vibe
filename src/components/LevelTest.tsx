import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Icon, type IconName } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import {
  LEVEL_BANDS,
  LEVEL_GOALS,
  LEVEL_OPTIONS,
  LEVEL_QUESTIONS,
  bandFor,
  levelMessage,
  roomFor,
  type LevelBand,
  type LevelGoal,
} from "@/lib/level-test";
import { tone } from "@/lib/tones";

/**
 * The interactive self-check. The questions are real <fieldset>s in the
 * prerendered HTML, so the page reads correctly without JavaScript (the
 * scoring key in the article below lets anyone add it up by hand); hydration
 * only adds the live score and the prefilled WhatsApp message.
 */

/** Answer chips: points → icon and colours (idle / picked). */
const OPTION_STYLE: Record<number, { icon: IconName; idle: string; picked: string }> = {
  2: {
    icon: "check",
    idle: "border-brand/30 bg-brand-soft text-brand-deep hover:border-brand",
    picked: "border-tile-green bg-tile-green text-white shadow-md",
  },
  1: {
    icon: "pause",
    idle: "border-sunshine/40 bg-amber-soft text-[#8a4800] hover:border-sunshine",
    picked: "border-tile-saffron bg-tile-saffron text-white shadow-md",
  },
  0: {
    icon: "clock",
    idle: "border-coral/40 bg-terra-soft text-coral-deep hover:border-coral",
    picked: "border-coral-deep bg-coral-deep text-white shadow-md",
  },
};

const GOAL_ICON: Record<LevelGoal, IconName> = {
  everyday: "smile",
  work: "computer",
  interview: "user",
};

/** Band → tone index in src/lib/tones.ts and an icon. */
const BAND_STYLE: Record<LevelBand["id"], { tone: number; icon: IconName }> = {
  starting: { tone: 3, icon: "spark" },
  building: { tone: 1, icon: "trend" },
  connecting: { tone: 2, icon: "rocket" },
  performing: { tone: 0, icon: "trophy" },
};

const QUESTION_ROWS = LEVEL_QUESTIONS.map(
  (q) => `Can you ${q.charAt(0).toLowerCase()}${q.slice(1).replace(/\.$/, "?")}`,
);

export function LevelTest() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => LEVEL_QUESTIONS.map(() => null));
  const [goal, setGoal] = useState<LevelGoal | null>(null);

  const answered = answers.filter((a) => a !== null).length + (goal ? 1 : 0);
  const total = LEVEL_QUESTIONS.length + 1;
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const done = answered === total;
  const band = bandFor(score);
  const room = goal ? roomFor(score, goal) : null;
  const bs = BAND_STYLE[band.id];
  const bt = tone(bs.tone);

  return (
    <section
      id="level-test"
      aria-labelledby="level-test-title"
      className="mb-10 overflow-hidden rounded-3xl border border-brand/20 bg-white shadow-md"
    >
      <div className="bg-gradient-to-br from-brand-deep via-brand to-teal p-5 text-white md:p-7">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sunshine text-ink shadow"
          >
            <Icon name="target" size={26} />
          </span>
          <div>
            <h2 id="level-test-title" className="text-2xl text-white md:text-3xl">
              Take the 2-minute test
            </h2>
            <p className="mt-1 text-white/90">
              Answer honestly: think of the last time you actually spoke English, not what you can
              read.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between text-xs font-display font-bold text-white/90">
            <span>
              {answered}/{total} answered
            </span>
            <span>{Math.round((answered / total) * 100)}%</span>
          </div>
          <div
            className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/20"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={answered}
            aria-label="Questions answered"
          >
            <div
              className="h-full rounded-full bg-sunshine transition-all duration-300"
              style={{ width: `${(answered / total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <ol className="space-y-3 p-4 md:p-6">
        {QUESTION_ROWS.map((q, i) => {
          const qt = tone(i);
          return (
            <li key={q} className="rounded-2xl border border-border bg-paper p-4">
              <fieldset>
                <legend className="flex gap-3 font-semibold text-ink">
                  <span
                    aria-hidden="true"
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-sm ${qt.solid}`}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{q}</span>
                </legend>
                <div className="mt-3 flex flex-wrap gap-2 sm:pl-10">
                  {LEVEL_OPTIONS.map((o) => {
                    const id = `lt-${i}-${o.points}`;
                    const checked = answers[i] === o.points;
                    const st = OPTION_STYLE[o.points];
                    return (
                      <label
                        key={o.label}
                        htmlFor={id}
                        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring ${
                          checked ? st.picked : st.idle
                        }`}
                      >
                        <input
                          id={id}
                          type="radio"
                          name={`lt-${i}`}
                          value={o.points}
                          checked={checked}
                          onChange={() =>
                            setAnswers((prev) => prev.map((a, j) => (j === i ? o.points : a)))
                          }
                          className="sr-only"
                        />
                        <Icon name={st.icon} size={15} />
                        {o.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </li>
          );
        })}
        <li className="rounded-2xl border-2 border-indigo-pop/30 bg-slate-soft p-4">
          <fieldset>
            <legend className="flex gap-3 font-semibold text-ink">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-tile-blue text-white"
              >
                <Icon name="target" size={16} />
              </span>
              <span className="pt-0.5">What do you need English for first?</span>
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-3 sm:pl-10">
              {LEVEL_GOALS.map((g) => {
                const id = `lt-goal-${g.id}`;
                const checked = goal === g.id;
                return (
                  <label
                    key={g.id}
                    htmlFor={id}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring ${
                      checked
                        ? "border-tile-blue bg-tile-blue text-white shadow-md"
                        : "border-indigo-pop/25 bg-white text-ink hover:border-indigo-pop"
                    }`}
                  >
                    <input
                      id={id}
                      type="radio"
                      name="lt-goal"
                      value={g.id}
                      checked={checked}
                      onChange={() => setGoal(g.id)}
                      className="sr-only"
                    />
                    <Icon name={GOAL_ICON[g.id]} size={18} />
                    {g.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        </li>
      </ol>

      <div aria-live="polite" className="px-4 pb-5 md:px-6 md:pb-7">
        {!done ? (
          <p className="flex items-center gap-2 rounded-2xl border border-dashed border-border p-4 text-sm text-ink/75">
            <Icon name="chart" size={18} className="text-brand" />
            {total - answered} left — your level and suggested course appear here.
          </p>
        ) : (
          room && (
            <div className={`rounded-2xl border-2 p-5 md:p-6 ${bt.soft} ${bt.border}`}>
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow ${bt.solid}`}
                >
                  <Icon name={bs.icon} size={30} />
                </span>
                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.14em] font-display font-bold ${bt.text}`}
                  >
                    Your result
                  </p>
                  <p className="mt-1 text-2xl font-display font-bold text-ink">
                    {score}/20 · {band.name}{" "}
                    <span className="text-base font-normal text-ink/70">({band.cefr})</span>
                  </p>
                </div>
              </div>

              <ol className="mt-4 grid grid-cols-4 gap-1.5" aria-label="Level scale">
                {LEVEL_BANDS.map((b) => {
                  const on = b.id === band.id;
                  const t = tone(BAND_STYLE[b.id].tone);
                  return (
                    <li key={b.id} className="text-center">
                      <div className={`h-2 rounded-full ${on ? t.solid : "bg-ink/10"}`} />
                      <span
                        className={`mt-1 block text-[11px] leading-tight font-display ${
                          on ? `font-bold ${t.text}` : "text-ink/55"
                        }`}
                      >
                        {b.name}
                      </span>
                    </li>
                  );
                })}
              </ol>

              <p className="mt-4 text-ink/85">{band.meaning}</p>
              <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
                <p className="flex flex-wrap items-center gap-x-2 font-semibold text-ink">
                  <Icon name="school" size={18} className={bt.text} /> Suggested course:{" "}
                  <Link to={room.path} className={`underline ${bt.text}`}>
                    {room.title}
                  </Link>
                </p>
                <p className="mt-1 text-sm text-ink/80">
                  {room.fee}, inclusive of taxes, approximately 6 learners. {room.why}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <WaButton message={levelMessage(score, goal!)} goal="level_test_result" size="lg">
                  Send my result on WhatsApp
                </WaButton>
              </div>
              <p className="mt-3 text-sm text-ink/70">
                Free. A teacher confirms your level in a free group consultation — advice, not a
                class. Replies 10am–midnight IST every day. This is a self-check, not a certificate.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
