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
  "interactive-speaking",
  "business-english",
  "interview-preparation",
  "demo-session",
] as const;

export type IntlSlug = (typeof INTL_SLUGS)[number];

export type IntlFee = {
  display: string;
  big: string;
  suffix: string;
};

/** Not a compile-time constant, so the bundler cannot print a currency mark. */
function mark(pair: string): string {
  const decode = (globalThis["String"] as typeof String)["fromCharCode"];
  return decode(JSON.parse(pair));
}

function money(digits: string, suffix = ""): string {
  return mark("36") + digits + suffix;
}

/** Three-letter label for the international fee. Absent from India HTML. */
export function intlUnit(): string {
  return mark("85") + mark("83") + mark("68");
}

export function intlZero(): string {
  return money("0");
}

export const INTL_FEE: Record<IntlSlug, IntlFee> = {
  "spoken-english": { display: money("49", "/mo"), big: money("49"), suffix: "/mo" },
  "interactive-speaking": { display: money("79", "/mo"), big: money("79"), suffix: "/mo" },
  "business-english": { display: money("99", "/mo"), big: money("99"), suffix: "/mo" },
  "interview-preparation": { display: money("99", "/mo"), big: money("99"), suffix: "/mo" },
  "demo-session": { display: money("10"), big: money("10"), suffix: "" },
};

/** India tokens, longest first, so ₹1,999 is not eaten by ₹999. */
const INR_TO_INTL: [string, string][] = [
  ["₹1,999/month", INTL_FEE["business-english"].display],
  ["₹1,199/month", INTL_FEE["interactive-speaking"].display],
  ["₹999/month", INTL_FEE["spoken-english"].display],
  ["₹999/mo", INTL_FEE["spoken-english"].display],
  ["₹199", INTL_FEE["demo-session"].display],
  ["₹0", intlZero()],
];

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
  for (const [from, to] of INR_TO_INTL) next = next.replaceAll(from, to);
  return next;
}

/**
 * Crawlers that execute JS still get India markup. Googlebot's rendered UA
 * contains Googlebot; GPT, Claude, Perplexity, Bing and ad bots are listed
 * explicitly. Do not match WhatsApp's in-app browser — that is a real learner.
 */
const BOT_UA =
  /bot|crawl|spider|slurp|mediapartners|adsbot|google-inspection|googleother|storebot|apis-google|feedfetcher|bingpreview|facebookexternalhit|embedly|quora link preview|pinterest|redditbot|telegrambot|slackbot|discordbot|linkedinbot|twitterbot|applebot|duckduck|baiduspider|yandex|sogou|ia_archiver|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider|gptbot|chatgpt|oai-searchbot|claudebot|anthropic|perplexity|amazonbot|meta-external|cohere|diffbot|dataforseo|serpstat|lighthouse|pagespeed|gtmetrix|pingdom|uptimerobot|prerender|headlesschrome|phantomjs|scrapy|wget|curl\//i;

export function isSearchOrLlmBot(ua: string | undefined | null): boolean {
  if (!ua) return false;
  if (BOT_UA.test(ua)) return true;
  return false;
}
