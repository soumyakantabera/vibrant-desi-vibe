import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { VizIn } from "@/components/viz/Viz";
import { BoloAppIcon } from "@/components/mascots/BoloAppIcon";
import { ProviderMark, TrademarkNotice } from "@/components/ProviderMark";
import { FeeText } from "@/components/FeeText";
import { LazyBoloPhone, LazyLiveClassView } from "@/components/bolo/LazyBolo";
import type { BoloLevel } from "@/lib/bolo-levels";
import {
  ALL_IN_ONE,
  DAILY_MATERIALS,
  DAILY_PRACTICE_PITCH,
  DIFFERENT_ROWS,
  PROVIDERS_CHECKED,
  type Mark,
} from "@/lib/positioning";

/**
 * "Why we're different": the all-in-one, low-cost line, the comparison by
 * category (never a named rival's price) and the daily practice materials.
 * Site-tier motion only: calm reveal, no bounce.
 */

const WA =
  "Hi, I want daily English practice with a live teacher. Please share the course and fee.";

/** What one monthly fee buys — the all-in-one stack. */
const STACK: {
  tone: string;
  icon: "users" | "pen" | "play" | "review" | "teacher";
  title: string;
  body: string;
}[] = [
  {
    tone: "bg-brand",
    icon: "users",
    title: "Live classes",
    body: "Up to 2 a week · 90 min · about 6 learners",
  },
  {
    tone: "bg-bolo-teal",
    icon: "pen",
    title: "Bolo daily practice",
    body: "Grammar, words, reading, speaking — with a streak",
  },
  {
    tone: "bg-[#B35F00]",
    icon: "play",
    title: "Video lessons",
    body: "Tips to start speaking, grammar, fluency",
  },
  {
    tone: "bg-[#7A5AF0]",
    icon: "review",
    title: "Weekly teacher review",
    body: "Your recordings, checked every week",
  },
  {
    tone: "bg-[#CC3A55]",
    icon: "teacher",
    title: "Same teacher",
    body: "Hindi, Marathi or English medium",
  },
];

const COURSE_NAME: Record<BoloLevel, string> = {
  basic: "Basic Spoken English",
  intermediate: "Intermediate Spoken English",
  interactive: "Interactive Speaking",
  business: "Business English",
  interview: "Interview Preparation",
};

function Visuals({ level }: { level: BoloLevel }) {
  return (
    <div className="mb-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.8fr)]">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/60">
          In class · everyone speaks
        </p>
        <LazyLiveClassView course={COURSE_NAME[level]} />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/60">
          Between classes · the Bolo app
        </p>
        <LazyBoloPhone
          autoplay
          interactive={false}
          level={level}
          label="Bolo app demo, playing on a loop"
        />
        <p className="mt-2 text-center text-xs text-ink/60">
          Demo playing · hover to pause · illustration with sample content
        </p>
      </div>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/60">
          One fee covers all of it
        </p>
        <VizIn as="ol" className="flex flex-col gap-2.5">
          {STACK.map((s, i) => (
            <li
              key={s.title}
              style={{ "--d": `${i * 90}ms` } as CSSProperties}
              className="viz-fade flex items-center gap-3 rounded-2xl border border-border bg-white p-3"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white ${s.tone}`}
              >
                <Icon name={s.icon} size={20} />
              </span>
              <span>
                <strong className="block text-sm text-ink">{s.title}</strong>
                <span className="text-xs text-ink/70">{s.body}</span>
              </span>
            </li>
          ))}
          <li className="mt-1 rounded-2xl bg-ink p-4 text-white">
            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/70">
              All of it, every month
            </span>
            <span className="text-3xl font-extrabold">
              <FeeText text="₹999/month" />
            </span>
            <span className="block text-sm text-white/80">
              Basic Spoken English · inclusive of taxes
            </span>
          </li>
        </VizIn>
      </div>
    </div>
  );
}

function Cell({ mark, note }: { mark: Mark; note: string }) {
  const icon =
    mark === "yes" ? (
      <Icon name="check" size={18} className="shrink-0 text-brand" />
    ) : mark === "part" ? (
      <span className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-sunshine bg-[linear-gradient(90deg,var(--sunshine)_50%,transparent_50%)]" />
    ) : mark === "unknown" ? (
      <span className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-dashed border-ink/35" />
    ) : (
      <Icon name="x-circle" size={18} className="shrink-0 text-ink/35" />
    );
  return (
    <span className="flex items-start gap-2">
      {icon}
      <span>{note}</span>
    </span>
  );
}

export function WhyDifferent({
  compact = false,
  visuals = true,
  level = "basic",
}: {
  /** Which Bolo level the app reel plays (course pages pass their own). */
  level?: BoloLevel;
  compact?: boolean;
  /** The live-class view, the app reel and the fee stack. Off on guides. */
  visuals?: boolean;
}) {
  return (
    <section className="section bg-white" id="why-different" aria-labelledby="why-different-title">
      <div className="container-x">
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-deep">
            Why we're different
          </span>
          <h2
            id="why-different-title"
            className="mt-3 text-[1.65rem] font-bold leading-[1.12] text-ink md:text-[2.35rem]"
          >
            Daily practice, a live teacher and your own language —{" "}
            <span className="text-brand">
              <FeeText text="from ₹999/month" />
            </span>
          </h2>
          <p className="mt-3 text-base text-ink/80 md:text-lg">
            <FeeText text={ALL_IN_ONE} />
          </p>
        </div>

        {visuals && <Visuals level={level} />}

        {/* desktop table */}
        <VizIn className="hidden overflow-hidden rounded-3xl border border-border lg:block">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              How the main ways to learn spoken English in India compare
            </caption>
            <thead className="bg-paper text-xs font-bold uppercase tracking-[0.1em] text-ink/60">
              <tr>
                <th scope="col" className="px-5 py-3">
                  What you can buy
                </th>
                <th scope="col" className="px-5 py-3">
                  Daily practice
                </th>
                <th scope="col" className="px-5 py-3">
                  Live teacher who corrects you
                </th>
                <th scope="col" className="px-5 py-3">
                  Taught in your language
                </th>
                <th scope="col" className="px-5 py-3">
                  Pay one month at a time
                </th>
                <th scope="col" className="px-5 py-3">
                  Typical price
                </th>
              </tr>
            </thead>
            <tbody>
              {DIFFERENT_ROWS.map((r, i) => (
                <tr
                  key={r.what}
                  style={{ "--d": `${i * 70}ms` } as CSSProperties}
                  className={`viz-fade border-t border-border align-top ${r.ours ? "bg-brand-soft/60 font-semibold" : ""}`}
                >
                  <th scope="row" className="px-5 py-4">
                    <span className="flex items-center gap-2 font-bold text-ink">
                      {r.ours && <BoloAppIcon size={22} />}
                      {r.logos?.map((l) => (
                        <ProviderMark key={l.slug} slug={l.slug} name={l.name} />
                      ))}
                      {r.what}
                    </span>
                    <span className="text-xs font-normal text-ink/60">{r.examples}</span>
                  </th>
                  <td className="px-5 py-4 text-ink/85">
                    <Cell mark={r.daily} note={r.dailyNote} />
                  </td>
                  <td className="px-5 py-4 text-ink/85">
                    <Cell mark={r.teacher} note={r.teacherNote} />
                  </td>
                  <td className="px-5 py-4 text-ink/85">
                    <Cell mark={r.language} note={r.languageNote} />
                  </td>
                  <td className="px-5 py-4 text-ink/85">
                    <Cell mark={r.billing} note={r.billingNote} />
                  </td>
                  <td className="px-5 py-4 font-bold text-ink">
                    <FeeText text={r.price} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </VizIn>

        {/* mobile cards */}
        <ul className="grid gap-3 md:grid-cols-2 lg:hidden">
          {DIFFERENT_ROWS.map((r) => (
            <li
              key={r.what}
              className={`rounded-2xl border p-4 ${r.ours ? "border-brand bg-brand-soft/60" : "border-border bg-white"}`}
            >
              <p className="flex items-center gap-2 font-bold text-ink">
                {r.ours && <BoloAppIcon size={22} />}
                {r.logos?.map((l) => (
                  <ProviderMark key={l.slug} slug={l.slug} name={l.name} />
                ))}
                {r.what}
                <span className="ml-auto text-sm">
                  <FeeText text={r.price} />
                </span>
              </p>
              <div className="mt-2 grid gap-1.5 text-sm text-ink/80">
                <Cell mark={r.daily} note={`Daily practice: ${r.dailyNote}`} />
                <Cell mark={r.teacher} note={`Teacher: ${r.teacherNote}`} />
                <Cell mark={r.language} note={`Your language: ${r.languageNote}`} />
                <Cell mark={r.billing} note={`How you pay: ${r.billingNote}`} />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink/60">
          Checked {PROVIDERS_CHECKED} against each provider's public pages:{" "}
          {DIFFERENT_ROWS.filter((r) => r.source).map((r, i, all) => (
            <span key={r.what}>
              <a
                href={r.source!.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline decoration-dotted underline-offset-2"
              >
                {r.what}
              </a>
              {i < all.length - 1 ? ", " : "."}
            </span>
          ))}{" "}
          Prices are typical 2026 bands in India. City classrooms: local listings. PlanetSpark
          teaches children, so it is not compared with these adult courses.
        </p>
        <TrademarkNotice className="mt-2" />

        {!compact && (
          <div className="mt-8 grid gap-6 rounded-3xl bg-paper p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h3 className="text-xl font-bold text-ink">Daily practice materials, included</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {DAILY_MATERIALS.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-ink/85">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-bolo-teal" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <WaButton message={WA} variant="wa" goal="why_different">
                Start daily practice on WhatsApp
              </WaButton>
            </div>
          </div>
        )}

        <p className="mt-6 max-w-3xl font-semibold text-ink">
          <FeeText text={DAILY_PRACTICE_PITCH} />{" "}
          {compact && (
            <WaButton message={WA} variant="wa" size="sm" goal="why_different" className="mt-3">
              Ask on WhatsApp
            </WaButton>
          )}
        </p>
      </div>
    </section>
  );
}
