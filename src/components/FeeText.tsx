import type { ReactNode } from "react";
import { INTL_FEE, intlZero, type IntlSlug } from "@/lib/intl-fees";

/**
 * Both fee labels are in the first HTML byte. A class on <html>, set by the
 * boot script before the first paint, decides which one is visible. React
 * must not swap the text later — that swap is the flash visitors outside
 * India were seeing.
 */
const TOKENS: { inr: string; usd: string }[] = [
  { inr: "₹1,999/month", usd: INTL_FEE["business-english"].display },
  { inr: "₹1,199/month", usd: INTL_FEE["interactive-speaking"].display },
  { inr: "₹999/month", usd: INTL_FEE["spoken-english"].display },
  { inr: "₹999/mo", usd: INTL_FEE["spoken-english"].display },
  { inr: "₹1,999", usd: INTL_FEE["business-english"].big },
  { inr: "₹1,199", usd: INTL_FEE["interactive-speaking"].big },
  { inr: "₹999", usd: INTL_FEE["spoken-english"].big },
  { inr: "₹199", usd: INTL_FEE["demo-session"].display },
  { inr: "₹0", usd: intlZero() },
];

export function FeePair({ inr, usd }: { inr: string; usd: string }) {
  return (
    <>
      <span className="lws-inr">{inr}</span>
      <span className="lws-usd">{usd}</span>
    </>
  );
}

export function MarketCopy({ inr, usd }: { inr: ReactNode; usd: ReactNode }) {
  return (
    <>
      <span className="lws-inr">{inr}</span>
      <span className="lws-usd">{usd}</span>
    </>
  );
}

function partsOf(text: string): { inr: string; usd?: string }[] {
  const out: { inr: string; usd?: string }[] = [];
  let i = 0;
  while (i < text.length) {
    let hit: (typeof TOKENS)[number] | undefined;
    for (const token of TOKENS) {
      if (text.startsWith(token.inr, i)) {
        hit = token;
        break;
      }
    }
    if (hit) {
      out.push({ inr: hit.inr, usd: hit.usd });
      i += hit.inr.length;
      continue;
    }
    let j = i + 1;
    while (j < text.length && !TOKENS.some((token) => text.startsWith(token.inr, j))) j += 1;
    out.push({ inr: text.slice(i, j) });
    i = j;
  }
  return out;
}

/** Leave a sentence that already states both lists alone. */
export function FeeText({ text }: { text: string }) {
  if (!text) return null;
  if (text.includes("outside India")) return <>{text}</>;
  const parts = partsOf(text);
  if (!parts.some((part) => part.usd)) return <>{text}</>;
  return (
    <>
      {parts.map((part, index) =>
        part.usd ? (
          <FeePair key={index} inr={part.inr} usd={part.usd} />
        ) : (
          <span key={index}>{part.inr}</span>
        ),
      )}
    </>
  );
}

export function feeHeadline(inr: string, slug: IntlSlug): { big: ReactNode; suffix?: ReactNode } {
  const match = inr.match(/(₹[\d,]+)\s*(.*)/);
  const fee = INTL_FEE[slug];
  if (!match) return { big: <FeeText text={inr} /> };
  const inrSuffix = match[2] ? ` ${match[2]}` : "";
  const usdSuffix = fee.suffix ? ` ${fee.suffix}` : "";
  return {
    big: <FeePair inr={match[1]} usd={fee.big} />,
    suffix: inrSuffix || usdSuffix ? <FeePair inr={inrSuffix} usd={usdSuffix} /> : undefined,
  };
}

export function feeUnitNote(inr: string, usd: string) {
  return <MarketCopy inr={inr} usd={usd} />;
}
