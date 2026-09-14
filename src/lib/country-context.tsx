import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  COUNTRY_EVENT,
  countryName,
  manualChoice,
  readStoredCountry,
  resolveCountry,
  writeStoredCountry,
  type CountryChoice,
  type CountryCode,
  type Market,
} from "@/lib/country";
import type { Market as FeeMarket } from "@/lib/pricing";

type CountryState = {
  choice: CountryChoice;
  ready: boolean;
  /** Market used to *display* fees. UNKNOWN shows India figures as indicative. */
  displayMarket: FeeMarket;
  /** True once we may treat the on-screen fee as the applicable published fee. */
  feeConfirmed: boolean;
  market: Market;
  setManual: (iso2: CountryCode) => void;
};

const FALLBACK: CountryChoice = {
  iso2: null,
  name: countryName(null),
  source: "unknown",
  confidence: "low",
  market: "UNKNOWN",
  needsConfirm: true,
  detectedAt: 0,
  reason: "Waiting for country detection.",
};

const CountryContext = createContext<CountryState | null>(null);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<CountryChoice>(FALLBACK);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const stored = readStoredCountry();
    if (stored?.source === "manual") {
      setChoice(stored);
      setReady(true);
    } else if (stored && stored.source !== "unknown") {
      setChoice(stored);
    }

    void resolveCountry().then((next) => {
      if (cancelled) return;
      setChoice(next);
      setReady(true);
    });

    const onChange = (ev: Event) => {
      const next = (ev as CustomEvent<CountryChoice>).detail;
      if (next) {
        setChoice(next);
        setReady(true);
      }
    };
    window.addEventListener(COUNTRY_EVENT, onChange);
    return () => {
      cancelled = true;
      window.removeEventListener(COUNTRY_EVENT, onChange);
    };
  }, []);

  const setManual = useCallback((iso2: CountryCode) => {
    const next = manualChoice(iso2);
    writeStoredCountry(next);
    setChoice(next);
    setReady(true);
  }, []);

  const value = useMemo<CountryState>(() => {
    const displayMarket: FeeMarket = choice.market === "INTL" ? "INTL" : "IN";
    const feeConfirmed =
      ready && !choice.needsConfirm && (choice.market === "IN" || choice.market === "INTL");
    return {
      choice,
      ready,
      displayMarket,
      feeConfirmed,
      market: choice.market,
      setManual,
    };
  }, [choice, ready, setManual]);

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
}

export function useCountry(): CountryState {
  const ctx = useContext(CountryContext);
  if (!ctx) {
    return {
      choice: FALLBACK,
      ready: false,
      displayMarket: "IN",
      feeConfirmed: false,
      market: "UNKNOWN",
      setManual: () => {},
    };
  }
  return ctx;
}
