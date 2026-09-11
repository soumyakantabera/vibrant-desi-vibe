import { withBasePath } from "@/lib/site-path";

const PAY_METHODS: { src: string; alt: string; height: string }[] = [
  { src: "/payments/upi.svg", alt: "UPI", height: "h-4" },
  { src: "/payments/google-pay.svg", alt: "Google Pay", height: "h-3.5" },
  { src: "/payments/phonepe.svg", alt: "PhonePe", height: "h-4" },
  { src: "/payments/paytm.svg", alt: "Paytm", height: "h-3.5" },
  { src: "/payments/visa.svg", alt: "Visa", height: "h-3" },
  { src: "/payments/mastercard.svg", alt: "Mastercard", height: "h-5" },
  { src: "/payments/rupay.svg", alt: "RuPay", height: "h-3.5" },
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
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`.trim()}
    >
      <p
        className={`text-[10px] uppercase tracking-[0.14em] font-display font-bold mb-2 ${
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
          className="shrink-0"
        >
          <img
            src={withBasePath("/payments/razorpay-secured.png")}
            alt="Razorpay"
            width={80}
            height={32}
            className="h-8 w-auto"
            decoding="async"
          />
        </a>
        {PAY_METHODS.map((m) => (
          <span key={m.alt} className={chip}>
            <img
              src={withBasePath(m.src)}
              alt={m.alt}
              className={`${m.height} w-auto max-w-[4.75rem] object-contain`}
              decoding="async"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
