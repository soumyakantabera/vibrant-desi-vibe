import { Icon } from "@/components/Icon";
import { COUNTRY_OPTIONS, type CountryCode } from "@/lib/country";
import { useCountry } from "@/lib/country-context";

type Tone = "footer" | "light" | "dark";

export function CountrySelect({
  tone = "footer",
  id,
}: {
  tone?: Tone;
  id?: string;
}) {
  const { choice, setManual, ready } = useCountry();
  const selectId = id ?? "country-region";
  const value = choice.iso2 ?? "";

  const onPick = (iso2: string) => {
    if (!iso2) return;
    setManual(iso2 as CountryCode);
  };

  const labelClass =
    tone === "footer"
      ? "text-[12px] font-semibold text-cream"
      : tone === "dark"
        ? "text-[12px] font-semibold text-cream"
        : "text-[12px] font-semibold text-ink";
  const selectClass =
    tone === "footer" || tone === "dark"
      ? "min-h-11 min-w-[11rem] max-w-full cursor-pointer rounded-lg border border-cream/30 bg-white/10 px-3 py-2 text-sm font-medium text-cream focus:outline-none focus:ring-2 focus:ring-sunshine"
      : "min-h-11 min-w-[11rem] max-w-full cursor-pointer rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-brand";

  return (
    <div className="inline-flex flex-col gap-1">
      <label htmlFor={selectId} className={`inline-flex items-center gap-1.5 ${labelClass}`}>
        <Icon name="globe" size={14} />
        Country/Region
      </label>
      <select
        id={selectId}
        className={selectClass}
        value={value}
        onChange={(e) => onPick(e.target.value)}
        aria-label="Country/Region"
        title="Country/Region — stored on this device. Admissions still confirms your enrolment country before payment."
      >
        {!choice.iso2 && (
          <option value="" className="text-ink">
            {ready ? "Choose your country/region" : "Detecting…"}
          </option>
        )}
        {COUNTRY_OPTIONS.map((row) => (
          <option key={row.iso2} value={row.iso2} className="text-ink">
            {row.name}
          </option>
        ))}
      </select>
    </div>
  );
}
