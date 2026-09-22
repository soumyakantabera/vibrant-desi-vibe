import { Link } from "@tanstack/react-router";
import { COMPARE_BLURB, COMPARE_REVISED, MARKET_COMPARE } from "@/lib/compare";

const TONE: Record<(typeof MARKET_COMPARE)[number]["tone"], string> = {
  us: "compare-card bg-sunshine",
  indigo: "compare-card bg-[#3D3DB8]",
  coral: "compare-card bg-[#C84D3F]",
  sun: "compare-card bg-[#1B7A4E]",
  ink: "compare-card bg-[#1E4D8C]",
  play: "compare-card bg-[#6B3FA0]",
};

/**
 * Dated 2026 online fee + format strip. Same numbers as the institutes guide.
 */
export function CompareDiff() {
  return (
    <aside className="mt-10 rounded-3xl border border-ink/10 bg-cream p-5 md:p-6" data-compare="2026-online">
      <p className="text-xs font-display font-extrabold uppercase tracking-[0.14em] text-ink/55">
        Online institutes, 2026 · <time dateTime={COMPARE_REVISED}>{COMPARE_BLURB}</time>
      </p>
      <h2 className="mt-2 font-display text-2xl font-extrabold text-ink">
        Us vs PlanetSpark, EngVarta, Cambly and the rest
      </h2>
      <p className="mt-2 text-sm text-ink/80 leading-relaxed">
        PlanetSpark is live 1:1 for <strong>kids 4–13</strong> (₹13,000–₹65,000/course, a free demo
        class). We are live small-batch for <strong>adults 15+</strong> from ₹999/month. Full table:{" "}
        <Link to="/english-institute-comparison-india" className="font-semibold underline">
          compare institutes, 2026
        </Link>
        .
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MARKET_COMPARE.map((row) => (
          <div key={row.name} className={`rounded-2xl p-4 ${TONE[row.tone]}`} data-ink={row.us ? "0" : "1"}>
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
