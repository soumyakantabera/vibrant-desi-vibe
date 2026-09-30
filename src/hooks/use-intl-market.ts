import { useEffect, useState } from "react";
import { COUNTRY_EVENT, readStoredCountry, type CountryChoice } from "@/lib/country";
import { isSearchOrLlmBot } from "@/lib/intl-fees";

/**
 * False on the server, on the first client paint, in India, and for crawlers.
 * Flips true only after mount, for a real browser whose stored or detected
 * country is not IN. That keeps prerendered HTML, SEO and LLM fetches on
 * India pricing.
 */
export function useIntlMarket(): boolean {
  const [intl, setIntl] = useState(false);

  useEffect(() => {
    const apply = (iso2: string | undefined) => {
      if (typeof navigator !== "undefined" && navigator.webdriver) {
        setIntl(false);
        return;
      }
      const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
      if (isSearchOrLlmBot(ua)) {
        setIntl(false);
        return;
      }
      setIntl(!!iso2 && iso2 !== "IN");
    };

    apply(readStoredCountry()?.iso2);
    const onChange = (ev: Event) => {
      const next = (ev as CustomEvent<CountryChoice>).detail;
      apply(next?.iso2);
    };
    window.addEventListener(COUNTRY_EVENT, onChange);
    return () => window.removeEventListener(COUNTRY_EVENT, onChange);
  }, []);

  return intl;
}
