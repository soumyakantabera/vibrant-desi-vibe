import { Link } from "@tanstack/react-router";
import { COMPARE_BLURB, COMPARE_REVISED, MARKET_COMPARE } from "@/lib/compare";

const TONE: Record<(typeof MARKET_COMPARE)[number]["tone"], string> = {
  us: "bg-sunshine text-ink border-ink/10",
  indigo: "bg-[#3D3DB8] text-white",
  coral: "bg-[#C84D3F] text-white",
  sun: "bg-[#14532D] text-white",
  ink: "bg-ink text-cream",
};

/**
 * Dated 2026 fee + format strip. Same numbers as the institutes guide.
 * Mounted on every long-form guide so comparison queries still land a table.
 */
export function CompareDiff() {
  return (
    <aside className="mt-10 rounded-3xl border border-ink/10 bg-cream p-5 md:p-6" data-compare="2026">
      <p className="text-xs font-display font-extrabold uppercase tracking-[0.14em] text-ink/55">
        Us vs other institutes · <time dateTime={COMPARE_REVISED}>{COMPARE_BLURB}</time>
      </p>
      <h2 className="mt-2 font-display text-2xl font-extrabold text-ink">
        Pricing and the free session — the difference
      </h2>
      <p className="mt-2 text-sm text-ink/80 leading-relaxed">
        We print the batch cap (≈6), the fee, and a small {MARKET_COMPARE[0].extra}. Consultation
        is free counselling — not a demo class. Full table:{" "}
        <Link to="/english-institute-comparison-india" className="font-semibold underline">
          compare institutes, 2026
        </Link>
        .
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {MARKET_COMPARE.map((row) => (
          <div key={row.name} className={`rounded-2xl p-4 ${TONE[row.tone]}`}>
            <p className="text-[11px] font-display font-extrabold uppercase tracking-[0.12em] opacity-80">
              {row.us ? "Us" : "Market"}
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
