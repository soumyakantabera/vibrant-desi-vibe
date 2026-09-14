/**
 * Country for later fee / tax routing. Detection is client-side (IP, then
 * timezone). The choice is stored in this browser only. Enrolment and the
 * prices on the site stay India-only until a tax table is wired on purpose.
 */

export const COUNTRY_STORAGE_KEY = "lws.country.v1";
export const COUNTRY_EVENT = "lws:country";
export const DEFAULT_COUNTRY = "IN";

/** ISO 3166-1 alpha-2. Names come from Intl.DisplayNames. */
export const COUNTRY_CODES = [
  "AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AU", "AT", "AZ", "BS", "BH",
  "BD", "BB", "BY", "BE", "BZ", "BJ", "BT", "BO", "BA", "BW", "BR", "BN", "BG",
  "BF", "BI", "CV", "KH", "CM", "CA", "CF", "TD", "CL", "CN", "CO", "KM", "CG",
  "CD", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG",
  "SV", "GQ", "ER", "EE", "SZ", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "DE",
  "GH", "GR", "GD", "GT", "GN", "GW", "GY", "HT", "HN", "HU", "IS", "IN", "ID",
  "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "KW", "KG",
  "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MG", "MW", "MY", "MV",
  "ML", "MT", "MH", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MA", "MZ",
  "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG", "KP", "MK", "NO", "OM",
  "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "QA", "RO", "RU",
  "RW", "KN", "LC", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG",
  "SK", "SI", "SB", "SO", "ZA", "KR", "SS", "ES", "LK", "SD", "SR", "SE", "CH",
  "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TO", "TT", "TN", "TR", "TM", "TV",
  "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "YE", "ZM",
  "ZW",
] as const;

export type CountryCode = (typeof COUNTRY_CODES)[number];

export type CountrySource = "ip" | "timezone" | "manual";

export type CountryChoice = {
  iso2: CountryCode;
  name: string;
  source: CountrySource;
};

const names = (() => {
  try {
    return new Intl.DisplayNames(["en-IN", "en"], { type: "region" });
  } catch {
    return null;
  }
})();

export function countryName(code: string): string {
  const upper = code.toUpperCase();
  return names?.of(upper) ?? upper;
}

export function isCountryCode(value: string): value is CountryCode {
  return (COUNTRY_CODES as readonly string[]).includes(value.toUpperCase());
}

export function asCountry(code: string | undefined | null): CountryCode {
  if (code && isCountryCode(code)) return code.toUpperCase() as CountryCode;
  return DEFAULT_COUNTRY;
}

const TZ_TO_COUNTRY: Record<string, CountryCode> = {
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Colombo": "LK",
  "Asia/Dhaka": "BD",
  "Asia/Kathmandu": "NP",
  "Asia/Karachi": "PK",
  "Asia/Dubai": "AE",
  "Asia/Qatar": "QA",
  "Asia/Riyadh": "SA",
  "Asia/Kuwait": "KW",
  "Asia/Bahrain": "BH",
  "Asia/Muscat": "OM",
  "Asia/Singapore": "SG",
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Bangkok": "TH",
  "Asia/Jakarta": "ID",
  "Asia/Manila": "PH",
  "Asia/Ho_Chi_Minh": "VN",
  "Asia/Hong_Kong": "CN",
  "Asia/Shanghai": "CN",
  "Asia/Tokyo": "JP",
  "Asia/Seoul": "KR",
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Pacific/Auckland": "NZ",
  "Europe/London": "GB",
  "Europe/Dublin": "IE",
  "Europe/Paris": "FR",
  "Europe/Berlin": "DE",
  "Europe/Amsterdam": "NL",
  "Europe/Rome": "IT",
  "Europe/Madrid": "ES",
  "Europe/Lisbon": "PT",
  "Europe/Warsaw": "PL",
  "Europe/Moscow": "RU",
  "Africa/Cairo": "EG",
  "Africa/Lagos": "NG",
  "Africa/Johannesburg": "ZA",
  "Africa/Nairobi": "KE",
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Sao_Paulo": "BR",
  "America/Mexico_City": "MX",
};

function choice(iso2: CountryCode, source: CountrySource): CountryChoice {
  return { iso2, name: countryName(iso2), source };
}

export function readStoredCountry(): CountryChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COUNTRY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CountryChoice>;
    if (!parsed.iso2 || !isCountryCode(parsed.iso2)) return null;
    const source: CountrySource = parsed.source === "manual" || parsed.source === "ip" || parsed.source === "timezone"
      ? parsed.source
      : "manual";
    return choice(parsed.iso2, source);
  } catch {
    return null;
  }
}

export function writeStoredCountry(next: CountryChoice) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COUNTRY_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent(COUNTRY_EVENT, { detail: next }));
  } catch {
    /* private mode */
  }
}

async function fetchJson(url: string, timeoutMs = 2500): Promise<unknown> {
  const ctrl = new AbortController();
  const t = window.setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal, credentials: "omit" });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } finally {
    window.clearTimeout(t);
  }
}

function codeFromUnknown(value: unknown): CountryCode | null {
  if (typeof value !== "string") return null;
  const c = value.trim().toUpperCase();
  return isCountryCode(c) ? c : null;
}

/** IP lookup, then timezone of the device network. Never throws. */
export async function detectCountry(): Promise<CountryChoice> {
  try {
    const data = (await fetchJson("https://ipwho.is/?fields=success,country_code")) as {
      success?: boolean;
      country_code?: string;
    };
    if (data?.success !== false) {
      const iso = codeFromUnknown(data?.country_code);
      if (iso) return choice(iso, "ip");
    }
  } catch {
    /* next */
  }
  try {
    const data = (await fetchJson("https://get.geojs.io/v1/ip/country.json")) as {
      country?: string;
    };
    const iso = codeFromUnknown(data?.country);
    if (iso) return choice(iso, "ip");
  } catch {
    /* next */
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const iso = tz ? TZ_TO_COUNTRY[tz] : undefined;
    if (iso) return choice(iso, "timezone");
  } catch {
    /* default */
  }
  return choice(DEFAULT_COUNTRY, "timezone");
}

export const COUNTRY_OPTIONS: { iso2: CountryCode; name: string }[] = (() => {
  const rows = COUNTRY_CODES.map((iso2) => ({ iso2, name: countryName(iso2) }));
  const inRow = rows.find((r) => r.iso2 === "IN");
  const rest = rows.filter((r) => r.iso2 !== "IN").sort((a, b) => a.name.localeCompare(b.name));
  return inRow ? [inRow, ...rest] : rest;
})();
