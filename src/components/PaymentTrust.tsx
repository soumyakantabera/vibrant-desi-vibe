import { Link } from "@tanstack/react-router";

import { BEFORE_YOU_PAY_PATH, FAIR_BILLING_SHORT } from "@/lib/fair-fees";
import { withBasePath } from "@/lib/site-path";

// The logos are lazy: without it React 19's SSR emits a <link rel="preload">
// for each of the eight, ahead of the hero image, and they delay LCP on
// mobile. They are small trust badges, never the LCP element, so lazy is
// harmless even where they sit inside a hero.
/** w/h are each file's natural size: they give the browser the aspect ratio
 *  before the logo loads, so the row never shifts or re-wraps. */
const PAY_METHODS: { src: string; alt: string; height: string; w: number; h: number }[] = [
  { src: "/payments/upi.svg", alt: "UPI", height: "h-4", w: 493, h: 174 },
  { src: "/payments/google-pay.svg", alt: "Google Pay", height: "h-3.5", w: 41, h: 17 },
  { src: "/payments/phonepe.svg", alt: "PhonePe", height: "h-4", w: 230, h: 70 },
  { src: "/payments/paytm.svg", alt: "Paytm", height: "h-3.5", w: 64, h: 20 },
  { src: "/payments/visa.svg", alt: "Visa", height: "h-3", w: 300, h: 97 },
  { src: "/payments/mastercard.svg", alt: "Mastercard", height: "h-5", w: 243, h: 150 },
  { src: "/payments/rupay.svg", alt: "RuPay", height: "h-3.5", w: 272, h: 71 },
];

export function PaymentTrust({
  tone = "light",
  align = "left",
  className = "",
}: {
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const chip =
    tone === "dark"
      ? "inline-flex h-7 items-center rounded bg-white px-1.5"
      : "inline-flex h-7 items-center rounded bg-white px-1.5 border border-black/10";
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`.trim()}>
      <p
        className={`text-xs sm:text-[10px] uppercase tracking-[0.12em] font-display font-bold mb-2 ${
          tone === "dark" ? "text-white/75" : "text-ink/55"
        }`}
      >
        Secured and trusted payments by
      </p>
      <div
        className={`flex flex-wrap items-center gap-1.5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <a
          href="https://razorpay.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Secured by Razorpay"
          className="inline-flex min-h-11 shrink-0 items-center"
        >
          <img
            src={withBasePath("/payments/razorpay-secured.png")}
            alt="Razorpay"
            width={80}
            height={32}
            className="h-8 w-auto"
            loading="lazy"
            decoding="async"
          />
        </a>
        {PAY_METHODS.map((m) => (
          <span key={m.alt} className={chip}>
            <img
              src={withBasePath(m.src)}
              alt={m.alt}
              width={m.w}
              height={m.h}
              className={`${m.height} w-auto max-w-[4.75rem] object-contain`}
              loading="lazy"
              decoding="async"
            />
          </span>
        ))}
      </div>
      <p
        className={`mt-2 text-xs font-semibold ${tone === "dark" ? "text-white/85" : "text-ink/70"}`}
      >
        <Link
          to={BEFORE_YOU_PAY_PATH}
          className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
        >
          {FAIR_BILLING_SHORT}
        </Link>
      </p>
    </div>
  );
}
