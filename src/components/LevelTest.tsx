import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import {
  LEVEL_GOALS,
  LEVEL_OPTIONS,
  LEVEL_QUESTIONS,
  bandFor,
  levelMessage,
  roomFor,
  type LevelGoal,
} from "@/lib/level-test";

/**
 * The interactive self-check. The questions are real <fieldset>s in the
 * prerendered HTML, so the page reads correctly without JavaScript (the
 * scoring key in the article below lets anyone add it up by hand); hydration
 * only adds the live score and the prefilled WhatsApp message.
 */
export function LevelTest() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => LEVEL_QUESTIONS.map(() => null));
  const [goal, setGoal] = useState<LevelGoal | null>(null);

  const answered = answers.filter((a) => a !== null).length;
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const done = answered === LEVEL_QUESTIONS.length && goal !== null;
  const band = bandFor(score);
  const room = goal ? roomFor(score, goal) : null;

  return (
    <section
      id="level-test"
      aria-labelledby="level-test-title"
      className="mb-10 rounded-2xl border border-brand/25 bg-white p-5 md:p-7 shadow-sm"
    >
      <h2 id="level-test-title" className="text-2xl md:text-3xl">
        Take the 2-minute test
      </h2>
      <p className="mt-2 text-ink/80">
        Answer honestly: think of the last time you actually spoke English, not what you can read.
        Ten questions, then your goal.
      </p>

      <ol className="mt-6 space-y-5">
        {LEVEL_QUESTIONS.map((q, i) => (
          <li key={q}>
            <fieldset>
              <legend className="font-semibold text-ink">
                {i + 1}. Can you {q.charAt(0).toLowerCase() + q.slice(1).replace(/\.$/, "?")}
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {LEVEL_OPTIONS.map((o) => {
                  const id = `lt-${i}-${o.points}`;
                  const checked = answers[i] === o.points;
                  return (
                    <label
                      key={o.label}
                      htmlFor={id}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                        checked
                          ? "border-brand bg-brand text-white"
                          : "border-ink/20 bg-cream hover:border-brand"
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
                      {o.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
        <li>
          <fieldset>
            <legend className="font-semibold text-ink">What do you need English for first?</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {LEVEL_GOALS.map((g) => {
                const id = `lt-goal-${g.id}`;
                const checked = goal === g.id;
                return (
                  <label
                    key={g.id}
                    htmlFor={id}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                      checked
                        ? "border-brand bg-brand text-white"
                        : "border-ink/20 bg-cream hover:border-brand"
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
                    {g.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        </li>
      </ol>

      <div aria-live="polite" className="mt-8">
        {!done ? (
          <p className="text-sm text-ink/70">
            {answered}/{LEVEL_QUESTIONS.length} answered
            {goal ? "" : " · pick a goal"} — your result appears here.
          </p>
        ) : (
          room && (
            <div className="rounded-2xl bg-brand-soft p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.14em] font-display font-bold text-ink/60">
                Your result
              </p>
              <p className="mt-2 text-2xl font-display font-bold text-ink">
                {score}/20 · {band.name}{" "}
                <span className="text-base font-normal text-ink/70">({band.cefr})</span>
              </p>
              <p className="mt-2 text-ink/85">{band.meaning}</p>
              <p className="mt-4 font-semibold text-ink">
                <Icon name="target" size={16} /> Suggested room:{" "}
                <Link to={room.path} className="underline">
                  {room.title}
                </Link>{" "}
                — {room.fee}, inclusive of taxes, approximately 6 learners.
              </p>
              <p className="mt-1 text-ink/80">{room.why}</p>
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
