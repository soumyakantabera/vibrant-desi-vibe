import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { WaButton } from "@/components/ui-bits";
import { DEMO_CTA } from "@/lib/whatsapp";
import { type Educator, type EducatorTone } from "@/lib/educators";

/**
 * Per-tone colour set. Solid tile colours carry white text at AA; the soft
 * tints sit behind ink text. Kept as literal class strings so Tailwind sees them.
 */
const TONE: Record<
  EducatorTone,
  { wash: string; band: string; chip: string; dot: string; text: string }
> = {
  green: {
    wash: "from-brand-soft via-white to-slate-soft",
    band: "from-tile-green to-tile-blue",
    chip: "bg-brand-soft text-brand-deep border-brand/20",
    dot: "bg-tile-green",
    text: "text-brand-deep",
  },
  violet: {
    wash: "from-plum-soft via-white to-slate-soft",
    band: "from-tile-violet to-tile-blue",
    chip: "bg-plum-soft text-tile-violet border-tile-violet/20",
    dot: "bg-tile-violet",
    text: "text-tile-violet",
  },
  coral: {
    wash: "from-terra-soft via-white to-amber-soft",
    band: "from-tile-red to-tile-saffron",
    chip: "bg-terra-soft text-coral-deep border-coral/25",
    dot: "bg-tile-red",
    text: "text-coral-deep",
  },
  teal: {
    wash: "from-teal-soft via-white to-amber-soft",
    band: "from-tile-teal to-tile-saffron",
    chip: "bg-teal-soft text-teal border-teal/20",
    dot: "bg-tile-teal",
    text: "text-teal",
  },
};

/**
 * "Meet your educator" — the named teacher of this course, placed mid-page so
 * a reader who has just seen the outcomes and roadmap sees who delivers them.
 */
export function CourseEducator({ educator: e, slug }: { educator: Educator; slug: string }) {
  const course = e.courses.find((c) => c.slug === slug) ?? e.courses[0];
  const t = TONE[e.tone];
  const firstName = e.name.split(" ")[0];
  return (
    <section className="py-10 md:py-14" id="educator" aria-labelledby="educator-heading">
      <div className="container-x">
        <div
          className={`relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${t.wash} shadow-lg`}
        >
          {/* Decorative colour band + soft blob: a calm, professional backdrop. */}
          <div
            aria-hidden
            className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.band}`}
          />
          <div
            aria-hidden
            className={`absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${t.band} opacity-15 blur-3xl`}
          />

          <div className="relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-8 p-5 sm:p-7 items-center">
            {/* Portrait */}
            <div className="relative mx-auto w-full max-w-[160px] md:max-w-[200px]">
              <div
                aria-hidden
                className={`absolute -inset-2 rounded-[1.4rem] bg-gradient-to-br ${t.band} rotate-3`}
              />
              <SmartImage
                src={e.image}
                alt={`${e.name}, ${e.role} at Learn With Smile`}
                ratio="4/5"
                position="top"
                className="relative rounded-2xl shadow-xl ring-4 ring-white w-full"
                sizes="200px"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-display font-bold text-ink shadow-md border border-border">
                <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} aria-hidden />
                Your live teacher
              </span>
            </div>

            {/* Copy */}
            <div className="min-w-0">
              <span className={`eyebrow bg-white border ${t.chip}`}>
                <Icon name={e.icon} size={12} /> Meet your educator
              </span>
              <h2
                id="educator-heading"
                className="mt-2 text-ink font-display font-bold text-2xl md:text-3xl leading-tight"
              >
                Learn {course.title} live with <span className={t.text}>{e.name}</span>
              </h2>
              <p className={`mt-1 text-sm font-display font-bold ${t.text}`}>{e.role}</p>
              {/* Full bio stays in the DOM for search; the tile shows the first lines. */}
              <p className="mt-3 text-sm text-ink/85 leading-relaxed line-clamp-4">{e.bio}</p>

              <ul
                className="mt-3 flex flex-wrap gap-1.5"
                aria-label={`What you practise with ${firstName}`}
              >
                {e.focus.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${t.chip}`}
                  >
                    <Icon name="check" size={11} className="shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/75">
                <span className="inline-flex items-center gap-1">
                  <Icon name="languages" size={12} /> {e.languages.map((l) => l.label).join(" · ")}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="users" size={12} /> About 6 per live batch
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="heart" size={12} /> Same teacher, every class
                </span>
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <WaButton message={e.waMessage} variant="wa" size="sm">
                  {DEMO_CTA}
                </WaButton>
                <Link
                  to="/educator"
                  hash={e.id}
                  className={`inline-flex items-center gap-1 text-sm font-display font-bold ${t.text} hover:underline`}
                >
                  Read {firstName}'s full profile <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
