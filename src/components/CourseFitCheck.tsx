import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import {
  FIT_DEADLINES,
  FIT_DEMANDS,
  FIT_GOALS,
  FIT_GOAL_STORAGE_KEY,
  FIT_LANGS,
  FIT_NOT_FOR,
  FIT_SLOTS,
  FIT_TODAY,
  courseForGoal,
  coursePathFor,
  deadlineNote,
  fitRow,
  fitSlugsForPath,
  goalMessage,
  type FitAnswers,
  type FitCourseSlug,
} from "@/lib/course-fit";

/**
 * "Is this for you?" — the course-fit check at the end of every blog post and
 * guide. See src/lib/course-fit.ts for why it exists. `slugs` narrows the table
 * to the rooms the page is about; without it the path decides.
 */
export function CourseFitCheck({ slugs }: { slugs?: FitCourseSlug[] }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const rows = (slugs?.length ? slugs : fitSlugsForPath(pathname)).map(fitRow);

  return (
    <section
      id="course-fit-check"
      aria-labelledby="course-fit-check-title"
      className="mt-12 rounded-3xl border border-brand/25 bg-white p-5 shadow-sm md:p-7"
    >
      <p className="eyebrow">
        <Icon name="clipboard" size={14} /> Before you message us
      </p>
      <h2
        id="course-fit-check-title"
        className="mt-2 font-display text-2xl font-extrabold text-ink md:text-3xl"
      >
        Set your goal: a 1-minute course fit
      </h2>
      <p className="mt-3 text-ink/85">
        We would rather talk to fewer people who are ready than many who are not. Read what the
        course asks of you, then set your goal below. You get one course, and your WhatsApp message
        arrives with your answers, so a teacher can reply with a plan instead of ten questions.
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Course, who it is for, length and total fee, inclusive of taxes
          </caption>
          <thead className="bg-brand-soft text-brand-deep max-sm:sr-only">
            <tr>
              <th scope="col" className="px-4 py-3 font-display font-bold">
                Course
              </th>
              <th scope="col" className="px-4 py-3 font-display font-bold">
                Right for you if
              </th>
              <th scope="col" className="px-4 py-3 font-display font-bold whitespace-nowrap">
                Length · total
              </th>
            </tr>
          </thead>
          <tbody className="max-sm:block">
            {rows.map((r) => (
              <tr
                key={r.slug}
                className="border-t border-border align-top first:border-t-0 max-sm:block max-sm:py-2"
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-display font-bold max-sm:block max-sm:pb-1"
                >
                  <Link to={r.path} className="text-brand hover:underline">
                    {r.title}
                  </Link>
                </th>
                <td className="px-4 py-3 text-ink/90 max-sm:block max-sm:py-1">{r.forLine}</td>
                <td className="px-4 py-3 text-ink/90 max-sm:block max-sm:pt-1">
                  {r.months} months × {r.monthly} = <strong>{r.total}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-ink/70">
        Inclusive of taxes, billed one month at a time. No EMI, no auto-debit. About 6 learners per
        batch.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-paper p-4">
          <h3 className="flex items-center gap-2 font-display font-bold text-ink">
            <Icon name="clock" size={18} /> What it asks of you
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-ink/90">
            {FIT_DEMANDS.map((d) => (
              <li key={d} className="flex gap-2">
                <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-paper p-4">
          <h3 className="flex items-center gap-2 font-display font-bold text-ink">
            <Icon name="ban" size={18} /> Not the right fit
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-ink/90">
            {FIT_NOT_FOR.map((d) => (
              <li key={d} className="flex gap-2">
                <Icon name="x-circle" size={16} className="mt-0.5 shrink-0 text-coral" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <GoalPicker pageSlugs={slugs} />
    </section>
  );
}

/* ------------------------------------------------------------ set your goal */

function readGoal(): FitAnswers {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(FIT_GOAL_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FitAnswers) : {};
  } catch {
    return {};
  }
}

function writeGoal(a: FitAnswers) {
  try {
    window.localStorage.setItem(FIT_GOAL_STORAGE_KEY, JSON.stringify(a));
  } catch {
    /* private mode: the picker still works for this page */
  }
}

/** One radio group rendered as chips. Native inputs: keyboard and screen readers work. */
function ChipGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: ReactNode;
  name: string;
  options: { id: T; label: string }[];
  value?: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="mt-4">
      <legend className="font-display text-sm font-bold text-ink">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.id}
            className="cursor-pointer rounded-full border-2 border-border bg-white px-3.5 py-2 text-sm font-semibold text-ink/90 transition has-[:checked]:border-brand has-[:checked]:bg-brand-soft has-[:checked]:text-brand-deep has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sunshine"
          >
            <input
              type="radio"
              name={name}
              value={o.id}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * The reader sets a goal; one course comes back. Saved in this browser so the
 * goal is already set on every other page they open. The WhatsApp button only
 * unlocks once they confirm they can keep two live slots a week: that tick is
 * the whole point of the block.
 */
function GoalPicker({ pageSlugs }: { pageSlugs?: FitCourseSlug[] }) {
  const id = useId();
  const [a, setA] = useState<FitAnswers>({});
  const [loaded, setLoaded] = useState(false);

  // Read after hydration so the server HTML and the first client render match.
  useEffect(() => {
    setA(readGoal());
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) writeGoal(a);
  }, [a, loaded]);

  const set = <K extends keyof FitAnswers>(k: K, v: FitAnswers[K]) =>
    setA((prev) => ({ ...prev, [k]: v }));

  const slug = a.goal && a.today ? courseForGoal(a.goal, a.today) : null;
  const row = slug ? fitRow(slug) : null;
  const path = slug ? coursePathFor(slug, a.lang) : null;
  const note = slug ? deadlineNote(slug, a.deadline) : null;
  const onThisPage = slug && pageSlugs?.length === 1 && pageSlugs[0] === slug;
  const ready = Boolean(slug && a.committed);

  return (
    <div className="mt-8 rounded-2xl border-2 border-brand/20 bg-brand-soft/30 p-4 md:p-5">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
        <Icon name="target" size={20} /> Set your goal
      </h3>
      <p className="mt-1 text-sm text-ink/80">
        Five taps. Saved in this browser, so your goal stays set on every page.
      </p>

      <ChipGroup
        legend="1. What do you want English for?"
        name={`${id}-goal`}
        options={FIT_GOALS}
        value={a.goal}
        onChange={(v) => set("goal", v)}
      />
      <ChipGroup
        legend="2. Where are you today?"
        name={`${id}-today`}
        options={FIT_TODAY}
        value={a.today}
        onChange={(v) => set("today", v)}
      />
      <ChipGroup
        legend="3. Any deadline?"
        name={`${id}-deadline`}
        options={FIT_DEADLINES}
        value={a.deadline}
        onChange={(v) => set("deadline", v)}
      />
      <ChipGroup
        legend="4. Which slot can you keep every week?"
        name={`${id}-slot`}
        options={FIT_SLOTS}
        value={a.slot}
        onChange={(v) => set("slot", v)}
      />
      <ChipGroup
        legend="5. How should the teacher explain?"
        name={`${id}-lang`}
        options={FIT_LANGS}
        value={a.lang}
        onChange={(v) => set("lang", v)}
      />

      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl bg-white p-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={Boolean(a.committed)}
          onChange={(e) => set("committed", e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--brand)]"
        />
        <span>
          <strong>I can attend up to two 90-minute live classes a week</strong> in that slot for the
          whole course, and practise 15–20 minutes on the other days.
        </span>
      </label>

      <div aria-live="polite" className="mt-5">
        {row && path ? (
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-display font-bold uppercase tracking-[0.14em] text-brand-deep">
              Your course
            </p>
            <p className="mt-1 font-display text-xl font-extrabold text-ink">
              <Link to={path} className="hover:text-brand">
                {row.title}
                {path !== row.path && (a.lang === "hindi" ? " (Hindi)" : " (Bengali)")}
              </Link>
              {onThisPage && " "}
              {onThisPage && (
                <span className="ml-1 align-middle text-sm font-bold text-brand">
                  · this course
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-ink/85">
              {row.months} months × {row.monthly} = <strong>{row.total}</strong>, inclusive of
              taxes, billed monthly.
            </p>
            {note && <p className="mt-2 text-sm text-coral-deep">{note}</p>}
          </div>
        ) : (
          <p className="text-sm text-ink/75">Pick 1 and 2 to see your course.</p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {ready ? (
          <WaButton message={goalMessage(a)} goal="goal_set_whatsapp">
            Send my goal on WhatsApp
          </WaButton>
        ) : (
          <p className="text-sm text-ink/80">
            {slug
              ? "Tick the box above to send your goal. If you cannot keep two slots a week yet, start with the "
              : "Not sure where you are? "}
            {slug ? (
              <Link
                to="/blog/$slug"
                params={{ slug: "daily-english-speaking-practice-routine" }}
                className="font-bold text-brand underline"
              >
                free 15-minute daily routine
              </Link>
            ) : (
              <Link to="/english-speaking-level-test" className="font-bold text-brand underline">
                Take the 1-minute level test
              </Link>
            )}
            .
          </p>
        )}
      </div>
    </div>
  );
}
