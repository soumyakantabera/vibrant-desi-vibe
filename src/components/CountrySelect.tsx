import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import {
  COUNTRY_EVENT,
  COUNTRY_OPTIONS,
  DEFAULT_COUNTRY,
  countryName,
  detectCountry,
  isCountryCode,
  readStoredCountry,
  writeStoredCountry,
  type CountryChoice,
  type CountryCode,
} from "@/lib/country";

const FALLBACK: CountryChoice = {
  iso2: DEFAULT_COUNTRY,
  name: countryName(DEFAULT_COUNTRY),
  source: "timezone",
};

export function CountrySelect() {
  const [choice, setChoice] = useState<CountryChoice>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    const bootIso = (window as Window & { __lwsMarket?: { iso2?: string } }).__lwsMarket?.iso2;
    const stored = readStoredCountry();
    if (stored?.source === "manual") {
      setChoice(stored);
    } else if (bootIso && isCountryCode(bootIso)) {
      setChoice({ iso2: bootIso, name: countryName(bootIso), source: stored?.source ?? "timezone" });
    } else if (stored) {
      setChoice(stored);
    }
    document.documentElement.classList.add("lws-market-live");
    if (stored?.source === "manual") return () => {
      cancelled = true;
    };
    void detectCountry().then((detected) => {
      if (cancelled) return;
      const latest = readStoredCountry();
      if (latest?.source === "manual") {
        setChoice(latest);
        return;
      }
      writeStoredCountry(detected);
      setChoice(detected);
    });
    const onChange = (ev: Event) => {
      const next = (ev as CustomEvent<CountryChoice>).detail;
      if (next?.iso2) setChoice(next);
    };
    window.addEventListener(COUNTRY_EVENT, onChange);
    return () => {
      cancelled = true;
      window.removeEventListener(COUNTRY_EVENT, onChange);
    };
  }, []);

  const onPick = (iso2: CountryCode) => {
    const next: CountryChoice = { iso2, name: countryName(iso2), source: "manual" };
    writeStoredCountry(next);
    setChoice(next);
  };

  return (
    <label className="inline-flex items-center gap-1 text-[11px] text-white/80">
      <Icon name="globe" size={13} />
      <span className="sr-only">Country</span>
      <select
        className="lws-country max-w-[9.5rem] cursor-pointer appearance-none bg-transparent py-0.5 pr-4 text-[11px] font-medium text-cream underline decoration-cream/35 underline-offset-2 focus:outline-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path fill='%23F6EFE4' d='M0 0l5 6 5-6z'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0 center",
        }}
        value={choice.iso2}
        onChange={(e) => onPick(e.target.value as CountryCode)}
        aria-label="Country"
        title="Country. India keeps India fees. Any other country shows the international fee on this device."
      >
        {COUNTRY_OPTIONS.map((row) => (
          <option key={row.iso2} value={row.iso2} className="text-ink">
            {row.name}
          </option>
        ))}
      </select>
    </label>
  );
}
