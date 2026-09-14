import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import {
  COUNTRY_EVENT,
  COUNTRY_OPTIONS,
  DEFAULT_COUNTRY,
  countryName,
  detectCountry,
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const stored = readStoredCountry();
    if (stored?.source === "manual") {
      setChoice(stored);
      setReady(true);
      return;
    }
    if (stored) setChoice(stored);
    void detectCountry().then((detected) => {
      if (cancelled) return;
      const latest = readStoredCountry();
      if (latest?.source === "manual") {
        setChoice(latest);
        setReady(true);
        return;
      }
      writeStoredCountry(detected);
      setChoice(detected);
      setReady(true);
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
    setReady(true);
  };

  const hint =
    !ready
      ? "Detecting from your connection…"
      : choice.source === "manual"
        ? "Saved on this device."
        : choice.source === "ip"
          ? "Detected from your IP / network."
          : "Guessed from your timezone — change it if it is wrong.";

  return (
    <div className="rounded-2xl border border-cream/15 bg-white/[0.04] px-4 py-3 md:px-5">
      <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-display font-bold text-cream">
          <Icon name="globe" size={16} />
          Country
        </span>
        <select
          className="w-full sm:w-auto min-w-[16rem] rounded-xl border border-cream/20 bg-ink px-3 py-2 text-sm text-cream focus:border-sunshine focus:outline-none"
          value={choice.iso2}
          onChange={(e) => onPick(e.target.value as CountryCode)}
          aria-label="Country"
        >
          {COUNTRY_OPTIONS.map((row) => (
            <option key={row.iso2} value={row.iso2}>
              {row.name}
            </option>
          ))}
        </select>
      </label>
      <p className="mt-2 text-xs text-white/75">{hint}</p>
      <p className="mt-1 text-xs text-white/75">
        Stored on this device for later fees and tax. Enrolment and published prices on this
        site are still India only.
      </p>
    </div>
  );
}
