/**
 * International course fees. India (and every crawler) never sees these.
 *
 * Labels are built at runtime. The shipped script must not contain a second
 * price list: search, ads review, llms.txt and ChatGPT Actions read the
 * rupee figures in the HTML and the assistant files, not this module.
 * Prerender, view-source, meta and JSON-LD stay on the INR figures.
 */

export const INTL_SLUGS = [
  "spoken-english",
  "intermediate-english",
  "interactive-speaking",
  "interview-preparation",
] as const;

export type IntlSlug = (typeof INTL_SLUGS)[number];

export type IntlFee = {
  display: string;
  big: string;
  suffix: string;
};

/** Not a compile-time constant, so the bundler cannot print a currency mark. */
function chars(codes: readonly number[]): string {
  const decode = (globalThis["String"] as typeof String)["fromCharCode"];
  return decode(...codes);
}

/**
 * Local-currency fee lists for learners outside India. Every list sits near
 * the international list (Basic about 49 in the default currency) and ends in
 * 9. Countries not listed here get the default list.
 *
 * Currency codes and marks are character codes, never literals, so the script
 * bundle carries no readable price list. Digits are the visible figure.
 * Fees per month: Basic, Intermediate, Interactive, Interview.
 */
type FxList = {
  /** Where the list applies, for assistant files. */
  label: string;
  /** ISO 4217 code, as character codes. */
  code: readonly number[];
  /** Mark printed before the figure, as character codes. */
  mark: readonly number[];
  /** Print the mark with a space after it (CHF 39, AED 179). */
  spaced?: boolean;
  fee: Record<IntlSlug, string>;
};

const DEFAULT_FX = "D";

export const FX_LISTS: Record<string, FxList> = {
  // Default list: everyone outside India not named below.
  D: {
    label: "other countries outside India",
    code: [85, 83, 68],
    mark: [36],
    fee: fx("49", "89", "79", "99"),
  },
  CA: { label: "Canada", code: [67, 65, 68], mark: [67, 36], fee: fx("69", "129", "109", "139") },
  GB: { label: "United Kingdom", code: [71, 66, 80], mark: [163], fee: fx("39", "69", "59", "79") },
  EU: { label: "euro area", code: [69, 85, 82], mark: [8364], fee: fx("49", "79", "69", "89") },
  CH: {
    label: "Switzerland and Liechtenstein",
    code: [67, 72, 70],
    mark: [67, 72, 70],
    spaced: true,
    fee: fx("39", "69", "59", "79"),
  },
  AU: {
    label: "Australia",
    code: [65, 85, 68],
    mark: [65, 36],
    fee: fx("69", "129", "119", "149"),
  },
  NZ: {
    label: "New Zealand",
    code: [78, 90, 68],
    mark: [78, 90, 36],
    fee: fx("79", "149", "129", "169"),
  },
  SG: { label: "Singapore", code: [83, 71, 68], mark: [83, 36], fee: fx("59", "109", "99", "129") },
  AE: {
    label: "United Arab Emirates",
    code: [65, 69, 68],
    mark: [65, 69, 68],
    spaced: true,
    fee: fx("179", "329", "289", "359"),
  },
  SA: {
    label: "Saudi Arabia",
    code: [83, 65, 82],
    mark: [83, 65, 82],
    spaced: true,
    fee: fx("179", "329", "299", "369"),
  },
  QA: {
    label: "Qatar",
    code: [81, 65, 82],
    mark: [81, 65, 82],
    spaced: true,
    fee: fx("179", "319", "289", "359"),
  },
};

function fx(spoken: string, intermediate: string, interactive: string, interview: string) {
  return {
    "spoken-english": spoken,
    "intermediate-english": intermediate,
    "interactive-speaking": interactive,
    "interview-preparation": interview,
  } satisfies Record<IntlSlug, string>;
}

/** Country (ISO 3166-1 alpha-2) to fee list. Absent means the default list. */
export const FX_COUNTRY: Record<string, string> = {
  CA: "CA",
  GB: "GB",
  CH: "CH",
  LI: "CH",
  AU: "AU",
  KI: "AU",
  NR: "AU",
  TV: "AU",
  NZ: "NZ",
  SG: "SG",
  AE: "AE",
  SA: "SA",
  QA: "QA",
  // Euro area, plus the microstates and Montenegro that use the euro.
  ...Object.fromEntries(
    [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PT",
      "SK",
      "SI",
      "ES",
      "AD",
      "MC",
      "SM",
      "VA",
      "ME",
    ].map((iso2) => [iso2, "EU"]),
  ),
};

export function fxListFor(iso2: string | undefined | null): string {
  return (iso2 && FX_COUNTRY[iso2.toUpperCase()]) || DEFAULT_FX;
}

/** The list in force in this browser. The server, India and crawlers: default. */
let currentFx = DEFAULT_FX;
const listeners = new Set<() => void>();

type BootMarket = { iso2?: string; intl?: boolean };
if (typeof window !== "undefined") {
  const boot = (window as Window & { __lwsMarket?: BootMarket }).__lwsMarket;
  if (boot?.intl) currentFx = fxListFor(boot.iso2);
  window.addEventListener("lws:country", (ev) => {
    const iso2 = (ev as CustomEvent<{ iso2?: string }>).detail?.iso2;
    const ua = window.navigator?.userAgent ?? "";
    const bot = !!window.navigator?.webdriver || BOT_UA.test(ua);
    setFxCountry(bot || !iso2 || iso2.toUpperCase() === "IN" ? null : iso2);
  });
}

/** Switch the fee list for a country (null: the default list). */
export function setFxCountry(iso2: string | null) {
  const next = fxListFor(iso2);
  if (next === currentFx) return;
  currentFx = next;
  for (const fn of listeners) fn();
}

export function subscribeFx(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function currentFxList(): string {
  return currentFx;
}

function list(): FxList {
  return FX_LISTS[currentFx] ?? FX_LISTS[DEFAULT_FX];
}

function money(digits: string, suffix = "", key?: string): string {
  const l = key ? FX_LISTS[key] : list();
  return chars(l.mark) + (l.spaced ? " " : "") + digits + suffix;
}

/** Three-letter label for the international fee. Absent from India HTML. */
export function intlUnit(): string {
  return chars(list().code);
}

export function intlZero(): string {
  return money("0");
}

function feeOf(slug: IntlSlug, key?: string): IntlFee {
  const l = key ? FX_LISTS[key] : list();
  const digits = l.fee[slug];
  return { display: money(digits, "/mo", key), big: money(digits, "", key), suffix: "/mo" };
}

/**
 * The fee for the list in force. Read it during render; components that
 * build a fee string call `useFxList()` so they re-render when it changes.
 */
export const INTL_FEE = {} as Record<IntlSlug, IntlFee>;
for (const slug of INTL_SLUGS) {
  Object.defineProperty(INTL_FEE, slug, { enumerable: true, get: () => feeOf(slug) });
}

/** Each local-currency list, labeled, for assistant files and schema. */
export function localFeeLists(): { label: string; code: string; fees: Record<IntlSlug, string> }[] {
  return Object.keys(FX_LISTS)
    .filter((key) => key !== DEFAULT_FX)
    .map((key) => ({
      label: FX_LISTS[key].label,
      code: chars(FX_LISTS[key].code),
      fees: Object.fromEntries(
        INTL_SLUGS.map((slug) => [slug, feeOf(slug, key).display]),
      ) as Record<IntlSlug, string>,
    }));
}

/** Every currency the fee lists use, India first. */
export function feeCurrencies(): string {
  return ["INR", ...Object.values(FX_LISTS).map((l) => chars(l.code))].join(", ");
}

/** One sentence naming each local-currency list (default-list wording stays elsewhere). */
export function localFeeSentence(): string {
  const parts = localFeeLists().map(
    (l) => `${l.label} (${l.code}) ${INTL_SLUGS.map((slug) => l.fees[slug]).join(", ")}`,
  );
  return (
    "Outside India, some countries see the outside-India list in their own currency " +
    "(Basic Spoken English, Intermediate Spoken English, Interactive Speaking, Interview Preparation): " +
    parts.join("; ") +
    "."
  );
}

/**
 * Data the boot script needs to print the local list before React mounts:
 * the default list's figures, and each local list as code, mark and figures.
 */
export function fxBootData() {
  return {
    c: FX_COUNTRY,
    d: {
      m: FX_LISTS[DEFAULT_FX].mark,
      c: FX_LISTS[DEFAULT_FX].code,
      f: INTL_SLUGS.map((s) => FX_LISTS[DEFAULT_FX].fee[s]),
    },
    l: Object.fromEntries(
      Object.entries(FX_LISTS)
        .filter(([key]) => key !== DEFAULT_FX)
        .map(([key, l]) => [
          key,
          { m: l.mark, s: l.spaced ? 1 : 0, c: l.code, f: INTL_SLUGS.map((s) => l.fee[s]) },
        ]),
    ),
  };
}

/** India tokens, longest first. */
function inrToIntl(): [string, string][] {
  return [
    ["₹2,499/month", INTL_FEE["interview-preparation"].display],
    ["₹1,999/month", INTL_FEE["intermediate-english"].display],
    ["₹1,599/month", INTL_FEE["interactive-speaking"].display],
    ["₹999/month", INTL_FEE["spoken-english"].display],
    ["₹999/mo", INTL_FEE["spoken-english"].display],
    ["₹0", intlZero()],
  ];
}

export function isIntlSlug(slug: string): slug is IntlSlug {
  return (INTL_SLUGS as readonly string[]).includes(slug);
}

/**
 * Swap known India fee tokens for the international label.
 * No-op when `intl` is false — that is the SSR, India, and crawler path.
 */
export function applyIntlFees(text: string, intl: boolean): string {
  if (!intl || !text) return text;
  let next = text;
  for (const [from, to] of inrToIntl()) next = next.replaceAll(from, to);
  return next;
}

/**
 * Crawlers that execute JS still get India markup. Googlebot's rendered UA
 * contains Googlebot; GPT, Claude, Perplexity, Bing and ad bots are listed
 * explicitly. Do not match WhatsApp's in-app browser — that is a real learner.
 */
export const BOT_UA =
  /bot|crawl|spider|slurp|mediapartners|adsbot|google-inspection|googleother|storebot|apis-google|feedfetcher|bingpreview|facebookexternalhit|embedly|quora link preview|pinterest|redditbot|telegrambot|slackbot|discordbot|linkedinbot|twitterbot|applebot|duckduck|baiduspider|yandex|sogou|ia_archiver|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider|gptbot|chatgpt|oai-searchbot|claudebot|anthropic|perplexity|amazonbot|meta-external|cohere|diffbot|dataforseo|serpstat|lighthouse|pagespeed|gtmetrix|pingdom|uptimerobot|prerender|headlesschrome|phantomjs|scrapy|wget|curl\//i;

export function isSearchOrLlmBot(ua: string | undefined | null): boolean {
  if (!ua) return false;
  if (BOT_UA.test(ua)) return true;
  return false;
}
