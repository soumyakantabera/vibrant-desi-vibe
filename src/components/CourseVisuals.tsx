import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui-bits";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { FeeText } from "@/components/FeeText";
import { COURSES } from "@/lib/courses";

/**
 * The "what exactly happens, and when" layer of a course page.
 *
 * Every figure here comes from the course record — minutes per block, month
 * spans per phase, the topics in each phase. The coverage map counts topics;
 * it does not score or rate anything, so nothing on it is a made-up number.
 */

export type Tone = "coral" | "indigo" | "brand" | "sun";

export type ClassBlock = {
  label: string;
  minutes: number;
  detail: string;
  tone: Tone;
};

export type RoadmapTrack = { skill: string; items: string[] };

export type RoadmapPhase = {
  /** First and last month the phase runs in, 1-based and inclusive. */
  from: number;
  to: number;
  title: string;
  goal: string;
  tone: Tone;
  tracks: RoadmapTrack[];
};

export type CourseVisuals = {
  classBlocks: ClassBlock[];
  /** "Communication covers…" — the skills worked in the communication block. */
  skills: { label: string; icon: IconName }[];
  /** Medium of instruction as printed on the brochure. */
  medium: string[];
  facts: string[];
  roadmap: RoadmapPhase[];
  roadmapNote?: string;
  vocabulary?: string[];
  practice?: string[];
};

const TONE = {
  coral: {
    bar: "bg-[#A53D32] text-white",
    soft: "bg-[#FFF4F1] border-coral/30",
    text: "text-[#8E2A1E]",
  },
  indigo: {
    bar: "bg-indigo-pop text-white",
    soft: "bg-[#F4F4FF] border-indigo-pop/25",
    text: "text-[#2E2E8A]",
  },
  brand: {
    bar: "bg-brand-deep text-white",
    soft: "bg-[#EEF6F1] border-brand/25",
    text: "text-brand-deep",
  },
  sun: {
    bar: "bg-sunshine text-ink",
    soft: "bg-[#FFF8E6] border-sunshine/40",
    text: "text-[#6B4A00]",
  },
} as const;

export function monthSpan(p: Pick<RoadmapPhase, "from" | "to">): string {
  return p.from === p.to ? `Month ${p.from}` : `Months ${p.from}–${p.to}`;
}

export function totalMonths(roadmap: RoadmapPhase[]): number {
  return Math.max(...roadmap.map((p) => p.to));
}

/** 30 + 60 → a bar split one third / two thirds, labelled in minutes. */
export function ClassSplit({ title, visuals }: { title: string; visuals: CourseVisuals }) {
  const total = visuals.classBlocks.reduce((n, b) => n + b.minutes, 0);
  return (
    <section className="section" aria-labelledby="class-split-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="Inside Every Class"
          eyebrowTone="coral"
          title={<span id="class-split-title">What one {total}-minute class looks like</span>}
          subtitle={`The same rhythm every session of ${title} — so you always know what the hour is for.`}
        />
        <div className="max-w-4xl mx-auto">
          <div
            className="flex w-full overflow-hidden rounded-2xl shadow-md"
            role="img"
            aria-label={visuals.classBlocks
              .map((b) => `${b.minutes} minutes ${b.label}`)
              .join(", ")}
          >
            {visuals.classBlocks.map((b) => (
              <div
                key={b.label}
                className={`${TONE[b.tone].bar} min-w-0 px-4 py-5 md:py-7`}
                style={{ flexGrow: b.minutes, flexBasis: 0 }}
              >
                <div className="font-display font-extrabold text-lg md:text-2xl leading-tight">
                  {b.minutes} min
                </div>
                <div className="font-display font-bold text-sm md:text-base">{b.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs font-semibold text-ink/70">
            <span aria-hidden>0 min</span>
            <span aria-hidden>{total} min</span>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {visuals.classBlocks.map((b) => (
              <li key={b.label} className={`rounded-xl border p-4 ${TONE[b.tone].soft}`}>
                <strong className={`font-display ${TONE[b.tone].text}`}>
                  {b.label} · {b.minutes} min
                </strong>
                <p className="mt-1 text-sm text-ink/85">{b.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-center font-display font-bold text-ink">
            The communication block covers
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
            {visuals.skills.map((s) => (
              <li
                key={s.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-indigo-pop/20 bg-[#F4F4FF] px-3 py-4 text-center"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-indigo-pop text-white">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="font-display font-bold text-sm text-ink">{s.label}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-display font-bold">
            {[...visuals.medium, ...visuals.facts].map((f) => (
              <li
                key={f}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-brand-deep"
              >
                <Icon name="check" size={14} /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * Month ruler on top, one bar per phase spanning its months, then the topic
 * cards. On a phone the ruler stays (it is only N columns) and the cards stack.
 */
export function Roadmap({ title, visuals }: { title: string; visuals: CourseVisuals }) {
  const months = totalMonths(visuals.roadmap);
  const cols = { gridTemplateColumns: `repeat(${months}, minmax(0, 1fr))` };
  return (
    <section className="section bg-cream" aria-labelledby="roadmap-title">
      <div className="container-x">
        <SectionHeader
          eyebrow={`${months}-Month Roadmap`}
          eyebrowTone="sun"
          title={<span id="roadmap-title">Exactly what you cover, month by month</span>}
          subtitle={`${title}: ${visuals.roadmap.length} phases across ${months} months. Each phase builds on the last.`}
        />
        <div className="max-w-5xl mx-auto">
          {/* Decorative ruler: aria-hidden spans, so screen readers and the
              Markdown twin get the phase cards below, not "M1 M2 M3". */}
          <div className="grid gap-1.5" style={cols}>
            {Array.from({ length: months }, (_, i) => (
              <span
                key={i}
                aria-hidden
                className="block rounded-md bg-white border border-border py-1.5 text-center text-xs font-display font-bold text-ink/80"
              >
                {`M${i + 1}`}
              </span>
            ))}
          </div>
          <div className="mt-1.5 grid gap-1.5" style={cols}>
            {visuals.roadmap.map((p, i) => (
              <span
                key={p.title}
                aria-hidden
                className={`${TONE[p.tone].bar} block rounded-lg px-2 py-2 text-xs md:text-sm font-display font-bold truncate`}
                style={{ gridColumn: `${p.from} / ${p.to + 1}` }}
                title={p.title}
              >
                {`${i + 1}. ${p.title}`}
              </span>
            ))}
          </div>

          <Reveal stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {visuals.roadmap.map((p, i) => (
              <article
                key={p.title}
                className={`relative rounded-2xl border p-5 ${TONE[p.tone].soft}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display font-extrabold ${TONE[p.tone].bar}`}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${TONE[p.tone].text}`}
                    >
                      {monthSpan(p)}
                    </div>
                    <h3 className="font-display font-bold text-ink text-lg leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink/85">{p.goal}</p>
                {p.tracks.map((t) => (
                  <div key={t.skill} className="mt-4">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${TONE[p.tone].text}`}
                    >
                      {t.skill}
                    </div>
                    <ul className="mt-1.5 space-y-1.5 text-sm text-ink/90">
                      {t.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Icon name="check" size={14} className="mt-0.5 shrink-0 text-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </Reveal>
          {visuals.roadmapNote && (
            <p className="mt-5 text-center text-sm text-ink/80">{visuals.roadmapNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Skill × phase matrix. A cell shows how many topics that phase introduces
 * for that skill — counted from the roadmap, never estimated.
 */
export function CoverageMap({ title, visuals }: { title: string; visuals: CourseVisuals }) {
  const phases = visuals.roadmap;
  const skills = Array.from(new Set(phases.flatMap((p) => p.tracks.map((t) => t.skill))));
  const count = (phase: RoadmapPhase, skill: string) =>
    phase.tracks.find((t) => t.skill === skill)?.items.length ?? 0;
  const max = Math.max(1, ...phases.flatMap((p) => skills.map((s) => count(p, s))));
  const topics = phases.reduce((n, p) => n + p.tracks.reduce((m, t) => m + t.items.length, 0), 0);
  return (
    <section className="section" aria-labelledby="coverage-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="Coverage Map"
          eyebrowTone="indigo"
          title={<span id="coverage-title">{topics} topics, mapped skill by skill</span>}
          subtitle={`Where each skill in ${title} gets its new topics. Darker cells mean more new topics in that phase.`}
        />
        <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border bg-white">
          <table className="w-full min-w-[480px] text-sm">
            <caption className="sr-only">
              Number of new topics per skill in each phase of {title}
            </caption>
            <thead>
              <tr className="bg-brand-soft/50">
                <th scope="col" className="px-3 py-3 text-left font-display text-ink">
                  Skill
                </th>
                {phases.map((p, i) => (
                  <th key={p.title} scope="col" className="px-3 py-3 text-center font-display">
                    <span className={`block ${TONE[p.tone].text}`}>
                      {i + 1}. {p.title}
                    </span>
                    <span className="block text-xs font-semibold text-ink/70">{monthSpan(p)}</span>
                  </th>
                ))}
                <th scope="col" className="px-3 py-3 text-center font-display text-ink">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => {
                const total = phases.reduce((n, p) => n + count(p, skill), 0);
                return (
                  <tr key={skill} className="border-t border-border">
                    <th
                      scope="row"
                      className="px-3 py-2.5 text-left font-display font-bold text-ink"
                    >
                      {skill}
                    </th>
                    {phases.map((p) => {
                      const n = count(p, skill);
                      return (
                        <td key={p.title} className="px-2 py-2 text-center">
                          {n === 0 ? (
                            <span className="text-ink/40" aria-label="none">
                              —
                            </span>
                          ) : (
                            <span
                              className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 font-display font-extrabold ${TONE[p.tone].bar}`}
                              style={{ opacity: 0.45 + 0.55 * (n / max) }}
                            >
                              {n}
                            </span>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-2 py-2 text-center font-display font-bold text-ink">
                      {total}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {(visuals.vocabulary || visuals.practice) && (
          <div className="max-w-4xl mx-auto mt-6 grid gap-4 md:grid-cols-2">
            {visuals.vocabulary && (
              <ChipBand icon="book" title="Vocabulary themes" items={visuals.vocabulary} />
            )}
            {visuals.practice && (
              <ChipBand
                icon="refresh"
                title="Practice between classes"
                items={visuals.practice}
                dark
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ChipBand({
  icon,
  title,
  items,
  dark,
}: {
  icon: IconName;
  title: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-5 ${dark ? "bg-ink text-cream" : "bg-[#F4F4FF] text-ink"}`}>
      <h3
        className={`flex items-center gap-2 font-display font-bold ${dark ? "text-cream" : "text-ink"}`}
      >
        <Icon name={icon} size={18} /> {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              dark ? "bg-white/10 text-white" : "bg-white text-ink border border-indigo-pop/20"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The adult catalogue as a ladder: where to start, how long each room runs.
 * Bar length is the course's own month count, read from the course record.
 */
const LADDER: { slug: string; step: string; who: string }[] = [
  { slug: "spoken-english", step: "Start here", who: "Cannot finish a sentence yet" },
  {
    slug: "intermediate-english",
    step: "Level up",
    who: "Basic sentences work — grammar and flow do not",
  },
  { slug: "interactive-speaking", step: "Unfreeze", who: "Knows the words, freezes on the mic" },
  { slug: "business-english", step: "At work", who: "Meetings, calls and emails" },
  { slug: "interview-preparation", step: "Get hired", who: "Can talk, fails the HR screen" },
];

function monthsOf(duration: string): number {
  return Number(duration.match(/(\d+)\s*month/i)?.[1] ?? 0);
}

export function CourseLadder({ highlight }: { highlight?: string }) {
  const rows = LADDER.map((r) => ({ ...r, course: COURSES[r.slug] })).filter((r) => r.course);
  const longest = Math.max(...rows.map((r) => monthsOf(r.course.duration)));
  return (
    <section className="section bg-brand-soft/30" aria-labelledby="ladder-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="The English Ladder"
          eyebrowTone="indigo"
          title={<span id="ladder-title">Find your step — then the duration and fee</span>}
          subtitle="Five live rooms for adults 15+, about 6 learners each. Bar length is the course length in months."
        />
        <ol className="max-w-4xl mx-auto space-y-3">
          {rows.map((r, i) => {
            const m = monthsOf(r.course.duration);
            const on = highlight === r.slug;
            return (
              <li key={r.slug}>
                <Link
                  to={`/course-${r.slug}` as "/course-spoken-english"}
                  className={`group grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[2.5rem_minmax(0,14rem)_1fr] md:items-center ${
                    on ? "border-indigo-pop ring-2 ring-indigo-pop/30" : "border-border"
                  }`}
                  aria-current={on ? "page" : undefined}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display font-extrabold text-cream">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-pop">
                      {r.step}
                      {on ? " · you are here" : ""}
                    </div>
                    <div className="font-display font-bold text-ink group-hover:text-brand">
                      {r.course.title}
                    </div>
                    <div className="text-xs text-ink/75">{r.who}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="h-8 w-full rounded-full bg-brand-soft/60">
                      <div
                        className="flex h-8 items-center justify-end rounded-full bg-gradient-to-r from-brand to-indigo-pop px-3 text-xs font-display font-bold text-white"
                        style={{ width: `${Math.max(28, (m / longest) * 100)}%` }}
                      >
                        {m} months
                      </div>
                    </div>
                    <div className="mt-1 text-right text-sm font-display font-bold text-ink">
                      <FeeText text={r.course.price} />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
