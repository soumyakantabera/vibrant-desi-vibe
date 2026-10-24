import { Link } from "@tanstack/react-router";
import { COMPARE_BLURB, COMPARE_REVISED, MARKET_COMPARE } from "@/lib/compare";

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
      <h2 className="mt-2 font-display text-2xl font-extrabold text-ink">
        Us vs PlanetSpark, EngVarta, Cambly and the rest
      </h2>
      <p className="mt-2 text-sm text-ink/80 leading-relaxed">
        PlanetSpark is live 1:1 for <strong>kids 4–13</strong> (₹13,000–₹65,000/course, a free demo
        class). We are live small-batch for <strong>adults 15+</strong> from ₹1,499/month. Full
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
            <p className="text-[11px] font-display font-extrabold uppercase tracking-[0.12em] opacity-80">
              {row.us ? "Us · adults 15+" : "Online"}
            </p>
            <p className="mt-1 font-display text-base font-extrabold leading-snug">{row.name}</p>
            <p className="mt-2 text-sm font-semibold">{row.fee}</p>
            <p className="mt-1 text-xs leading-relaxed opacity-95">{row.extra}</p>
            <p className="mt-2 text-xs leading-relaxed">
              {row.batch}. {row.session}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
