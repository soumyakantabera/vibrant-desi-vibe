/**
 * Country / region for fee display.
 *
 * Detection is client-side only (this site ships as static HTML on GitHub
 * Pages). A stored *manual* choice is never overwritten by auto-detection.
 * Auto results are kept for 7 days so a flaky IP lookup cannot flip India
 * visitors to USD, or overseas visitors to INR, on the next page load.
 *
 * Failed detection does **not** silently default to India for a confirmed
 * fee. Visitors are asked to choose Country/Region before a fee is treated
 * as confirmed. Admissions still reconfirms country, currency and fee on
 * WhatsApp — a browser toggle is not enrolment eligibility.
 *
 * IP providers actually used (in this file, in the browser):
 *   - ipwho.is
 *   - get.geojs.io
 *   - ipapi.co
 *   - Cloudflare `cdn-cgi/trace` (loc=)
 * plus the device timezone as a supporting signal, never as a silent India
 * default.
 */

export const COUNTRY_STORAGE_KEY = "lws.country.v2";
const LEGACY_STORAGE_KEY = "lws.country.v1";
export const COUNTRY_EVENT = "lws:country";
export const AUTO_TTL_MS = 7 * 24 * 60 * 60 * 1000;

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

export type CountrySource = "ip" | "timezone" | "manual" | "unknown";
export type CountryConfidence = "high" | "medium" | "low";
export type Market = "IN" | "INTL" | "UNKNOWN";

export type CountryChoice = {
  iso2: CountryCode | null;
  name: string;
  source: CountrySource;
  confidence: CountryConfidence;
  market: Market;
  needsConfirm: boolean;
  detectedAt: number;
  reason: string;
};

const names = (() => {
  try {
    return new Intl.DisplayNames(["en-IN", "en"], { type: "region" });
  } catch {
    return null;
  }
})();

export function countryName(code: string | null | undefined): string {
  if (!code) return "Not set";
  const upper = code.toUpperCase();
  return names?.of(upper) ?? upper;
}

export function isCountryCode(value: string): value is CountryCode {
  return (COUNTRY_CODES as readonly string[]).includes(value.toUpperCase());
}

export const INDIA_TIMEZONES = new Set(["Asia/Kolkata", "Asia/Calcutta"]);

export const TZ_TO_COUNTRY: Record<string, CountryCode> = {
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

export function timezoneCountry(tz: string | undefined | null): CountryCode | null {
  if (!tz) return null;
  if (INDIA_TIMEZONES.has(tz)) return "IN";
  return TZ_TO_COUNTRY[tz] ?? null;
}

function majority(codes: CountryCode[]): { code: CountryCode; votes: number; total: number } | null {
  if (!codes.length) return null;
  const tally = new Map<CountryCode, number>();
  for (const c of codes) tally.set(c, (tally.get(c) ?? 0) + 1);
  let best: CountryCode | null = null;
  let bestN = 0;
  let second = 0;
  for (const [code, n] of tally) {
    if (n > bestN) {
      second = bestN;
      bestN = n;
      best = code;
    } else if (n === bestN) {
      second = n;
    } else if (n > second) {
      second = n;
    }
  }
  if (!best) return null;
  if (bestN === second) return null; // tie
  return { code: best, votes: bestN, total: codes.length };
}

export type DetectSignals = {
  ipCodes: CountryCode[];
  timezone?: string | null;
};

/**
 * Pure decision. Used by tests and by the live detector.
 *
 * India-protection: if the timezone is India and IP says otherwise, we do
 * **not** auto-apply USD. Indian visitors on a VPN would bounce at US$59.
 * Overseas-protection: we never silently stamp India when every signal is
 * missing — that would underprice an international enrolment.
 */
export function decideFromSignals(signals: DetectSignals): CountryChoice {
  const now = Date.now();
  const tz = timezoneCountry(signals.timezone);
  const ip = majority(signals.ipCodes);
  const ipIsIn = ip?.code === "IN";
  const tzIsIn = tz === "IN";

  const make = (
    iso2: CountryCode | null,
    source: CountrySource,
    confidence: CountryConfidence,
    market: Market,
    needsConfirm: boolean,
    reason: string,
  ): CountryChoice => ({
    iso2,
    name: countryName(iso2),
    source,
    confidence,
    market,
    needsConfirm,
    detectedAt: now,
    reason,
  });

  if (ip && ipIsIn) {
    return make("IN", "ip", ip.votes >= 2 ? "high" : "medium", "IN", false, "IP lookup placed the visitor in India.");
  }

  if (ip && !ipIsIn && tzIsIn) {
    // Conflict: do not flip an India-timezone visitor to USD.
    return make(
      "IN",
      "timezone",
      "low",
      "IN",
      true,
      "IP and timezone disagree. India fees are shown until you confirm Country/Region.",
    );
  }

  if (ip && !ipIsIn) {
    return make(
      ip.code,
      "ip",
      ip.votes >= 2 ? "high" : "medium",
      "INTL",
      false,
      `IP lookup placed the visitor in ${countryName(ip.code)}.`,
    );
  }

  if (tzIsIn) {
    return make("IN", "timezone", "medium", "IN", false, "Device timezone is India (Asia/Kolkata).");
  }

  if (tz) {
    return make(
      tz,
      "timezone",
      "medium",
      "INTL",
      false,
      `Device timezone mapped to ${countryName(tz)}.`,
    );
  }

  return make(
    null,
    "unknown",
    "low",
    "UNKNOWN",
    true,
    "Country could not be detected. Choose Country/Region before confirming a fee.",
  );
}

function parseChoice(raw: unknown): CountryChoice | null {
  if (!raw || typeof raw !== "object") return null;
  const parsed = raw as Partial<CountryChoice> & { iso2?: string };
  const source = parsed.source;
  if (source !== "manual" && source !== "ip" && source !== "timezone" && source !== "unknown") {
    return null;
  }
  const iso2 =
    parsed.iso2 && isCountryCode(parsed.iso2) ? (parsed.iso2.toUpperCase() as CountryCode) : null;
  if (source !== "unknown" && source !== "manual" && !iso2) return null;
  if (source === "manual" && !iso2) return null;
  const market: Market =
    parsed.market === "IN" || parsed.market === "INTL" || parsed.market === "UNKNOWN"
      ? parsed.market
      : iso2 === "IN"
        ? "IN"
        : iso2
          ? "INTL"
          : "UNKNOWN";
  const confidence: CountryConfidence =
    parsed.confidence === "high" || parsed.confidence === "medium" || parsed.confidence === "low"
      ? parsed.confidence
      : source === "manual"
        ? "high"
        : "medium";
  return {
    iso2,
    name: countryName(iso2),
    source,
    confidence,
    market: source === "manual" ? (iso2 === "IN" ? "IN" : "INTL") : market,
    needsConfirm: source === "manual" ? false : Boolean(parsed.needsConfirm),
    detectedAt: typeof parsed.detectedAt === "number" ? parsed.detectedAt : 0,
    reason: typeof parsed.reason === "string" ? parsed.reason : "",
  };
}

function readKey(key: string): CountryChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return parseChoice(JSON.parse(raw));
  } catch {
    return null;
  }
}

/**
 * v1 of the selector stored a silent India default as source "timezone" when
 * lookup failed. Migrating that would lock overseas visitors to INR. Keep
 * only a v1 *manual* choice, or a v1 IP hit.
 */
function migrateLegacy(): CountryChoice | null {
  const legacy = readKey(LEGACY_STORAGE_KEY);
  if (!legacy) return null;
  if (legacy.source === "manual" && legacy.iso2) {
    const next: CountryChoice = {
      ...legacy,
      market: legacy.iso2 === "IN" ? "IN" : "INTL",
      confidence: "high",
      needsConfirm: false,
      detectedAt: Date.now(),
      reason: "Restored your previous Country/Region choice.",
    };
    writeStoredCountry(next);
    return next;
  }
  if (legacy.source === "ip" && legacy.iso2) {
    const next: CountryChoice = {
      ...legacy,
      market: legacy.iso2 === "IN" ? "IN" : "INTL",
      confidence: "medium",
      needsConfirm: false,
      detectedAt: Date.now(),
      reason: "Restored a previous IP lookup.",
    };
    writeStoredCountry(next);
    return next;
  }
  return null;
}

export function readStoredCountry(): CountryChoice | null {
  return readKey(COUNTRY_STORAGE_KEY) ?? migrateLegacy();
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

export function manualChoice(iso2: CountryCode): CountryChoice {
  return {
    iso2,
    name: countryName(iso2),
    source: "manual",
    confidence: "high",
    market: iso2 === "IN" ? "IN" : "INTL",
    needsConfirm: false,
    detectedAt: Date.now(),
    reason: "Chosen with the Country/Region selector.",
  };
}

function autoStillFresh(stored: CountryChoice | null): stored is CountryChoice {
  if (!stored) return false;
  if (stored.source === "manual") return true;
  if (stored.source === "unknown") return false;
  if (!stored.detectedAt) return false;
  return Date.now() - stored.detectedAt < AUTO_TTL_MS;
}

async function fetchText(url: string, timeoutMs = 2500): Promise<string> {
  const ctrl = new AbortController();
  const t = window.setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal, credentials: "omit" });
    if (!res.ok) throw new Error(String(res.status));
    return await res.text();
  } finally {
    window.clearTimeout(t);
  }
}

async function fetchJson(url: string, timeoutMs = 2500): Promise<unknown> {
  const text = await fetchText(url, timeoutMs);
  return JSON.parse(text);
}

function codeFromUnknown(value: unknown): CountryCode | null {
  if (typeof value !== "string") return null;
  const c = value.trim().toUpperCase();
  return isCountryCode(c) ? c : null;
}

async function lookupIpwho(): Promise<CountryCode | null> {
  const data = (await fetchJson("https://ipwho.is/?fields=success,country_code")) as {
    success?: boolean;
    country_code?: string;
  };
  if (data?.success === false) return null;
  return codeFromUnknown(data?.country_code);
}

async function lookupGeojs(): Promise<CountryCode | null> {
  const data = (await fetchJson("https://get.geojs.io/v1/ip/country.json")) as {
    country?: string;
  };
  return codeFromUnknown(data?.country);
}

async function lookupIpapi(): Promise<CountryCode | null> {
  const data = (await fetchJson("https://ipapi.co/json/")) as {
    country?: string;
    country_code?: string;
    error?: boolean;
  };
  if (data?.error) return null;
  return codeFromUnknown(data?.country_code) ?? codeFromUnknown(data?.country);
}

async function lookupCloudflare(): Promise<CountryCode | null> {
  const text = await fetchText("https://www.cloudflare.com/cdn-cgi/trace");
  const loc = text.split("\n").find((line) => line.startsWith("loc="));
  if (!loc) return null;
  return codeFromUnknown(loc.slice(4));
}

export async function collectIpCodes(): Promise<CountryCode[]> {
  const settled = await Promise.allSettled([
    lookupIpwho(),
    lookupGeojs(),
    lookupIpapi(),
    lookupCloudflare(),
  ]);
  const codes: CountryCode[] = [];
  for (const row of settled) {
    if (row.status === "fulfilled" && row.value) codes.push(row.value);
  }
  return codes;
}

export function deviceTimezone(): string | null {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
  } catch {
    return null;
  }
}

/** IP lookup in parallel, then timezone. Never throws. Never silent-defaults to India. */
export async function detectCountry(): Promise<CountryChoice> {
  let ipCodes: CountryCode[] = [];
  try {
    ipCodes = await collectIpCodes();
  } catch {
    ipCodes = [];
  }
  return decideFromSignals({ ipCodes, timezone: deviceTimezone() });
}

/**
 * Resolve what to show this visit.
 * Manual storage always wins. Fresh auto storage is reused so a later failed
 * lookup cannot override a good India (or overseas) result.
 */
export async function resolveCountry(): Promise<CountryChoice> {
  const stored = readStoredCountry();
  if (stored?.source === "manual") return stored;
  if (autoStillFresh(stored) && stored.source !== "unknown") return stored;
  const detected = await detectCountry();
  const latest = readStoredCountry();
  if (latest?.source === "manual") return latest;
  writeStoredCountry(detected);
  return detected;
}

export const COUNTRY_OPTIONS: { iso2: CountryCode; name: string }[] = (() => {
  const rows = COUNTRY_CODES.map((iso2) => ({ iso2, name: countryName(iso2) }));
  const inRow = rows.find((r) => r.iso2 === "IN");
  const rest = rows.filter((r) => r.iso2 !== "IN").sort((a, b) => a.name.localeCompare(b.name));
  return inRow ? [inRow, ...rest] : rest;
})();

export const IP_PROVIDERS_USED = [
  { name: "ipwho.is", url: "https://ipwho.is/" },
  { name: "geojs.io", url: "https://get.geojs.io/v1/ip/country.json" },
  { name: "ipapi.co", url: "https://ipapi.co/json/" },
  { name: "Cloudflare trace", url: "https://www.cloudflare.com/cdn-cgi/trace" },
] as const;
