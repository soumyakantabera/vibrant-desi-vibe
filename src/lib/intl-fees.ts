/**
 * International course fees. India (and every crawler) never sees these.
 *
 * The strings in this file ship in the JS bundle only. They are rendered after
 * hydration, and only when the browser is a real visitor whose country is not
 * India. Prerender, view-source, llms.txt, meta and JSON-LD stay on the INR
 * figures in courses.ts / seo.ts / llms.ts.
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
  /** Full label, e.g. "$49/mo". */
  display: string;
  big: string;
  suffix: string;
};

export const INTL_FEE: Record<IntlSlug, IntlFee> = {
  "spoken-english": { display: "$49/mo", big: "$49", suffix: "/mo" },
  "interactive-speaking": { display: "$79/mo", big: "$79", suffix: "/mo" },
  "business-english": { display: "$99/mo", big: "$99", suffix: "/mo" },
  "interview-preparation": { display: "$99/mo", big: "$99", suffix: "/mo" },
  "demo-session": { display: "$10", big: "$10", suffix: "" },
};

/** India tokens, longest first, so ₹1,999 is not eaten by ₹999. */
const INR_TO_INTL: [string, string][] = [
  ["₹1,999/month", INTL_FEE["business-english"].display],
  ["₹1,199/month", INTL_FEE["interactive-speaking"].display],
  ["₹999/month", INTL_FEE["spoken-english"].display],
  ["₹999/mo", INTL_FEE["spoken-english"].display],
  ["₹199", INTL_FEE["demo-session"].display],
  ["₹0", "$0"],
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
