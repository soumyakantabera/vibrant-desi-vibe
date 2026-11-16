import { Link } from "@tanstack/react-router";
import { COMPARE_BLURB, COMPARE_REVISED, MARKET_COMPARE } from "@/lib/compare";
import { ProviderMark, TrademarkNotice } from "@/components/ProviderMark";
import lwsIcon from "@/assets/brand/lws-icon.svg?url";

/**
 * Official logos (src/assets/logos, supplied by the site owner) beside each
 * provider's name. Rows whose providers have no logo file ("Speak", IELTS
 * shops) keep the plain name — never a redrawn mark.
 */
const LOGOS: Record<string, { slug: string; name: string }[]> = {
  EngVarta: [{ slug: "engvarta", name: "EngVarta" }],
  Cambly: [{ slug: "cambly", name: "Cambly" }],
  "italki / Preply": [
    { slug: "italki", name: "italki" },
    { slug: "preply", name: "Preply" },
  ],
  PlanetSpark: [{ slug: "planetspark", name: "PlanetSpark" }],
  "British Council Online": [{ slug: "british-council", name: "British Council" }],
  "ELSA / Duolingo / Speak": [
    { slug: "elsa-speak", name: "ELSA Speak" },
    { slug: "duolingo", name: "Duolingo" },
  ],
};

/** Learn With Smile is the one solid tile; every other brand is a white card
 *  with a coloured top rule, so the eye lands on us first. */
const TONE: Record<(typeof MARKET_COMPARE)[number]["tone"], string> = {
  us: "compare-card bg-brand shadow-[0_18px_36px_-24px_rgba(4,129,91,.8)]",
  indigo: "compare-card border border-border border-t-4 border-t-tile-blue bg-white",
  coral: "compare-card border border-border border-t-4 border-t-tile-red bg-white",
  sun: "compare-card border border-border border-t-4 border-t-tile-teal bg-white",
  ink: "compare-card border border-border border-t-4 border-t-tile-violet bg-white",
  play: "compare-card border border-border border-t-4 border-t-tile-saffron bg-white",
};

/**
 * Dated 2026 online fee + format strip. Same numbers as the institutes guide.
 */
export function CompareDiff() {
  return (
    <aside
      className="mt-10 rounded-3xl border border-border bg-paper p-5 md:p-6"
      data-compare="2026-online"
    >
      <p className="text-xs font-display font-extrabold uppercase tracking-[0.14em] text-ink/55">
        Online institutes, 2026 · <time dateTime={COMPARE_REVISED}>{COMPARE_BLURB}</time>
      </p>
      <h2 className="section-title mt-2 font-display font-extrabold text-ink">
        Us vs PlanetSpark, EngVarta, Cambly and the rest
      </h2>
      <p className="mt-2 text-sm text-ink/80 leading-relaxed">
        PlanetSpark is live 1:1 for <strong>kids 4–13</strong> (₹13,000–₹65,000/course, a free demo
        class). We are live small-batch for <strong>adults 15+</strong> from ₹1,199/month. Full
        table:{" "}
        <Link to="/english-institute-comparison-india" className="font-semibold underline">
          compare institutes, 2026
        </Link>
        .
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MARKET_COMPARE.map((row) => (
          <div
            key={row.name}
            className={`rounded-2xl p-4 ${TONE[row.tone]}`}
            data-ink={row.us ? "1" : "0"}
          >
            <p className="text-xs font-display font-extrabold uppercase tracking-[0.12em] opacity-80">
              {row.us ? "Us · adults 15+" : "Online"}
            </p>
            {row.us ? (
              <span className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1 shadow-sm">
                <img src={lwsIcon} alt="" aria-hidden width={28} height={28} className="h-7 w-7" />
              </span>
            ) : LOGOS[row.name] ? (
              <span className="mt-2 flex min-h-9 flex-wrap items-center gap-2">
                {LOGOS[row.name].map((l) => (
                  <ProviderMark key={l.slug} slug={l.slug} name={l.name} />
                ))}
              </span>
            ) : null}
            <p className="mt-1 font-display text-base font-extrabold leading-snug">{row.name}</p>
            <p className="mt-2 text-sm font-semibold">{row.fee}</p>
            <p className="mt-1 text-xs leading-relaxed opacity-95">{row.extra}</p>
            <p className="mt-2 text-xs leading-relaxed">
              {row.batch}. {row.session}
            </p>
          </div>
        ))}
      </div>
      <TrademarkNotice className="mt-3" />
    </aside>
  );
}
