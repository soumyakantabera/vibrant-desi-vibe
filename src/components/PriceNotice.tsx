import { Link } from "@tanstack/react-router";
import { CountrySelect } from "@/components/CountrySelect";
import { useCountry } from "@/lib/country-context";
import { PRICING_NOTICE, REFUND_SUMMARY } from "@/lib/pricing";

export function PriceNotice({
  tone = "light",
  showSelector = true,
}: {
  tone?: "light" | "dark";
  showSelector?: boolean;
}) {
  const { choice, feeConfirmed, displayMarket } = useCountry();
  const box =
    tone === "dark"
      ? "rounded-2xl border border-cream/20 bg-white/8 p-4 text-cream"
      : "rounded-2xl border border-border bg-white p-4 text-ink";
  const muted = tone === "dark" ? "text-white/90" : "text-ink/80";
  const marketLabel =
    displayMarket === "INTL" ? "International fees in USD" : "India pricing in INR";

  return (
    <aside className={box} data-pricing-notice="">
      <p className="font-display text-sm font-bold">
        {feeConfirmed ? `Showing ${marketLabel}` : "Confirm Country/Region to confirm your fee"}
      </p>
      <p className={`mt-1 text-sm leading-relaxed ${muted}`}>{PRICING_NOTICE}</p>
      {choice.needsConfirm && (
        <p className={`mt-2 text-sm font-semibold ${tone === "dark" ? "text-sunshine" : "text-brand-deep"}`}>
          {choice.reason || "Choose your country or region before treating a fee as confirmed."}
        </p>
      )}
      {showSelector && (
        <div className="mt-3">
          <CountrySelect tone={tone === "dark" ? "dark" : "light"} id="country-region-pricing" />
        </div>
      )}
      <p className={`mt-3 text-xs leading-relaxed ${muted}`}>
        A Country/Region choice on this device is not enrolment eligibility. We confirm the
        learner’s country, currency and applicable fee on WhatsApp before payment.{" "}
        <Link to="/refunds" className="underline underline-offset-2">
          Refunds
        </Link>
        .
      </p>
    </aside>
  );
}

export function RefundSummary({ tone = "light" }: { tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/90" : "text-ink/80";
  return (
    <p className={`text-sm leading-relaxed ${muted}`}>
      {REFUND_SUMMARY}{" "}
      <Link to="/refunds" className="underline underline-offset-2 font-semibold">
        Full refund policy
      </Link>
      .
    </p>
  );
}
