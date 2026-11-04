import { Link } from "@tanstack/react-router";
import { monthAnchor } from "@/lib/anchors";
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
    <section className="section" id="class-split" aria-labelledby="class-split-title">
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
          <ul className="mt-3 flex flex-wrap justify-center gap-3">
            {visuals.skills.map((s) => (
              <li
                key={s.label}
                className="flex w-[calc(50%-0.375rem)] flex-col items-center gap-2 md:w-[calc(25%-0.5625rem)] rounded-xl border border-indigo-pop/20 bg-[#F4F4FF] px-3 py-4 text-center"
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
    <section className="section bg-cream" id="roadmap" aria-labelledby="roadmap-title">
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
                id={monthAnchor(p.from)}
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
    <section className="section" id="skills" aria-labelledby="coverage-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="Coverage Map"
          eyebrowTone="indigo"
          title={<span id="coverage-title">{topics} topics, mapped skill by skill</span>}
          subtitle={`Where each skill in ${title} gets its new topics. Darker cells mean more new topics in that phase.`}
        />
        <div
          data-swipe=""
          className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border bg-white"
        >
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
 * The adult catalogue as a path, not a bar chart: one start step, a fork by
 * goal, then Interview Preparation. Each room starts where the one before it
 * ends, so the card says where you start and where you leave. Months and fees
 * are read from the course records.
 */
type LadderStep = {
  slug: string;
  step: string;
  icon: IconName;
  start: string;
  finish: string;
  /** Tailwind classes: solid tile, soft wash, text on the soft wash. */
  tone: { tile: string; soft: string; text: string; pip: string };
};

export const LADDER: LadderStep[] = [
  {
    slug: "spoken-english",
    step: "Zero to confident",
    icon: "mic",
    start: "Cannot finish a sentence yet",
    finish: "Speak up in everyday English — self-intro, shops, calls, a 2-minute talk",
    tone: {
      tile: "bg-tile-green",
      soft: "bg-brand-soft",
      text: "text-brand-deep",
      pip: "bg-brand",
    },
  },
  {
    slug: "intermediate-english",
    step: "Level up",
    icon: "trend",
    start: "Simple sentences work (about A2)",
    finish: "Correct, connected English — tenses, 2–3 minute talks, work emails",
    tone: {
      tile: "bg-tile-saffron",
      soft: "bg-amber-soft",
      text: "text-[#6A4A10]",
      pip: "bg-sunshine",
    },
  },
  {
    slug: "interactive-speaking",
    step: "Unfreeze",
    icon: "messages",
    start: "Know the words, freeze in meetings or calls",
    finish: "Speak up in standups, client calls and group talk",
    tone: { tile: "bg-tile-teal", soft: "bg-teal-soft", text: "text-[#145A5F]", pip: "bg-teal" },
  },
  {
    slug: "interview-preparation",
    step: "Get hired",
    icon: "clipboard",
    start: "Can talk, the interview is the gap",
    finish: "60-second intro, HR and STAR answers, rehearsed mocks",
    tone: { tile: "bg-tile-violet", soft: "bg-plum-soft", text: "text-[#4E3470]", pip: "bg-plum" },
  },
];

function monthsOf(duration: string): number {
  return Number(duration.match(/(\d+)\s*month/i)?.[1] ?? 0);
}

function LadderCard({ r, n, on }: { r: LadderStep; n: number; on: boolean }) {
  const course = COURSES[r.slug];
  if (!course) return null;
  const m = monthsOf(course.duration);
  return (
    <Link
      to={`/course-${r.slug}` as "/course-spoken-english"}
      aria-current={on ? "page" : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-[0_16px_40px_-32px_rgba(19,33,47,.45)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(19,33,47,.5)] ${
        on ? "border-indigo-pop ring-2 ring-indigo-pop/30" : "border-border"
      }`}
    >
      <div className="flex items-center gap-3 p-4 pb-3">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white ${r.tone.tile}`}
        >
          <Icon name={r.icon} size={22} />
        </span>
        <div className="min-w-0 flex-1">
          <div className={`text-xs font-extrabold uppercase tracking-[0.12em] ${r.tone.text}`}>
            Step {n} · {r.step}
            {on ? " · you are here" : ""}
          </div>
          <div className="font-display text-lg font-extrabold leading-tight text-ink group-hover:text-brand-deep">
            {course.title}
          </div>
        </div>
      </div>

      <dl className={`mx-4 grid gap-2 rounded-2xl p-3 text-sm ${r.tone.soft}`}>
        <div className="flex gap-2">
          <dt className="w-14 shrink-0 font-bold text-ink/70">Start</dt>
          <dd className="text-ink">{r.start}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-14 shrink-0 font-bold text-ink/70">Leave</dt>
          <dd className="font-semibold text-ink">{r.finish}</dd>
        </div>
      </dl>

      <div className="mt-auto flex items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-2" aria-label={`${m} months`}>
          <span className="flex gap-1" aria-hidden="true">
            {Array.from({ length: m }, (_, k) => (
              <i key={k} className={`h-2.5 w-5 rounded-full ${r.tone.pip}`} />
            ))}
          </span>
          <span className="font-display text-sm font-bold text-ink">{m} months</span>
        </div>
        <span className="font-display text-base font-extrabold text-ink">
          <FeeText text={course.price} />
        </span>
      </div>
    </Link>
  );
}

/** Small "then" connector between ladder rows. */
function LadderThen({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px w-10 bg-ink/15" />
      <span className="rounded-full border border-border bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
        {label}
      </span>
      <span className="h-px w-10 bg-ink/15" />
    </div>
  );
}

export function CourseLadder({ highlight }: { highlight?: string }) {
  const [start, intermediate, interactive, interview] = LADDER;
  const total =
    monthsOf(COURSES[start.slug]?.duration ?? "") +
    monthsOf(COURSES[intermediate.slug]?.duration ?? "");
  return (
    <section className="section bg-brand-soft/30" aria-labelledby="ladder-title">
      <div className="container-x">
        <SectionHeader
          eyebrow="The English Ladder"
          eyebrowTone="indigo"
          title={<span id="ladder-title">Start at zero. Climb one step at a time.</span>}
          subtitle="Four live rooms for adults 15+, about 6 learners each. Each room starts where the one before it ends, so the lessons do not repeat."
        />
        <ol className="mx-auto max-w-4xl" aria-label="Course path">
          <li>
            <LadderCard r={start} n={1} on={highlight === start.slug} />
          </li>
          <li>
            <LadderThen label="Then pick by goal" />
            <ol className="grid gap-4 md:grid-cols-2">
              <li>
                <LadderCard r={intermediate} n={2} on={highlight === intermediate.slug} />
              </li>
              <li>
                <LadderCard r={interactive} n={2} on={highlight === interactive.slug} />
              </li>
            </ol>
          </li>
          <li>
            <LadderThen label="When the interview comes" />
            <LadderCard r={interview} n={3} on={highlight === interview.slug} />
          </li>
        </ol>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink/75">
          From zero: about 3 months to speak up with confidence, about {total} to correct, fluent
          English. Billed one month at a time, no auto-debit.
        </p>
      </div>
    </section>
  );
}
