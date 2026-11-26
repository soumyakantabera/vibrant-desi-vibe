import { Link, useRouterState } from "@tanstack/react-router";

import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { CHAT_CTA, TEACHER_PROMISE } from "@/lib/whatsapp";
import {
  FIT_DEMANDS,
  FIT_NOT_FOR,
  FIT_WA_MESSAGE,
  fitRow,
  fitSlugsForPath,
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
        <Icon name="clipboard" size={14} /> Before you join
      </p>
      <h2
        id="course-fit-check-title"
        className="mt-2 font-display text-2xl font-extrabold text-ink md:text-3xl"
      >
        Is this right for you?
      </h2>
      <p className="mt-3 text-ink/85">
        Here is what each course takes, so you can decide before you message us.
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
        Inclusive of taxes, paid monthly. About 6 per batch.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-paper p-4">
          <h3 className="flex items-center gap-2 font-display font-bold text-ink">
            <Icon name="clock" size={18} /> What it takes
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
            <Icon name="ban" size={18} /> Not for
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

      <div className="mt-8 rounded-2xl bg-brand-soft/50 p-5">
        <h3 className="font-display text-xl font-extrabold text-ink">Sounds like you?</h3>
        <p className="mt-2 text-sm text-ink/85">{TEACHER_PROMISE}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <WaButton message={FIT_WA_MESSAGE} goal="fit_check_whatsapp" size="lg">
            {CHAT_CTA}
          </WaButton>
          <Link
            to="/english-speaking-level-test"
            className="text-sm font-display font-bold text-brand hover:underline"
          >
            Not sure of your level? 1-minute test
          </Link>
        </div>
      </div>
    </section>
  );
}
