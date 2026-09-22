import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { CONSULTATION, CONSULTATION_PROOF } from "@/lib/consultation";
import { DEMO_CTA, DEMO_MSG } from "@/lib/whatsapp";

const PILL_CLASS = [
  "bg-[#C84D3F] text-white",
  "bg-[#3D3DB8] text-white",
  "bg-brand-deep text-cream",
  "bg-ink text-sunshine",
] as const;

const CARD_CLASS = {
  coral: "consult-card bg-[#C84D3F] text-white",
  indigo: "consult-card bg-[#3D3DB8] text-white",
  sun: "consult-card bg-[#14532D] text-white",
} as const;

/**
 * High-visibility consultation closer. Layout mounts the sun band on every
 * page so the offer is never a quiet footer link. Deep tone is for dark
 * sections that already sit on cream.
 */
export function ConsultOffer({
  tone = "sun",
  compact,
}: {
  tone?: "sun" | "deep";
  compact?: boolean;
}) {
  const sun = tone === "sun";
  return (
    <section
      className={
        sun
          ? "bg-sunshine py-8 md:py-12"
          : "bg-gradient-to-r from-brand-deep via-indigo-pop to-[#C84D3F] py-8 md:py-12"
      }
      data-cta-location="consult_offer"
    >
      <div className="container-x max-w-5xl mx-auto text-center">
        <p
          className={`font-display text-xs uppercase tracking-[0.16em] font-extrabold ${sun ? "text-ink/70" : "text-sunshine"}`}
        >
          {CONSULTATION.hook}
        </p>
        <h2
          className={`mt-3 font-display font-extrabold leading-[1.08] text-3xl md:text-5xl ${sun ? "text-ink" : "text-cream"}`}
        >
          {CONSULTATION.headline}
        </h2>
        <p
          className={`mt-4 mx-auto max-w-2xl text-base md:text-lg leading-relaxed ${sun ? "text-ink/85" : "text-white"}`}
        >
          {CONSULTATION.punch}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {CONSULTATION.pills.map((pill, i) => (
            <span
              key={pill}
              className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-display font-extrabold ${PILL_CLASS[i] ?? PILL_CLASS[0]}`}
            >
              {pill}
            </span>
          ))}
        </div>
        {!compact && (
          <div className="mt-7 grid gap-3 sm:grid-cols-3 text-left">
            {CONSULTATION_PROOF.map((card) => (
              <div
                key={card.kicker}
                className={`rounded-2xl p-4 md:p-5 ${CARD_CLASS[card.tone]}`}
              >
                <p className="flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-[0.14em] opacity-90">
                  <Icon name={card.icon} size={14} /> {card.kicker}
                </p>
                <p className="mt-2 font-display text-xl font-extrabold">{card.title}</p>
                <p className="mt-1 text-sm leading-relaxed opacity-95">{card.body}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <WaButton message={DEMO_MSG} variant={sun ? "coral" : "sun"} size="lg" goal="free_consultation">
            {DEMO_CTA}
          </WaButton>
          <Link
            to="/book-free-demo"
            className={sun ? "btn btn-outline btn-lg border-ink text-ink" : "btn btn-white btn-lg"}
          >
            See what you get
          </Link>
        </div>
      </div>
    </section>
  );
}
