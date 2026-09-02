/**
 * Search-engine ownership tags only. Learn With Smile intentionally loads no
 * analytics, tracking pixel, click listener or campaign-attribution script.
 */

/** `content` value of the google-site-verification meta tag. */
export const GOOGLE_SITE_VERIFICATION = "";

/** `content` value of the msvalidate.01 meta tag. */
export const BING_SITE_VERIFICATION = "";

export function verificationMeta(): Array<Record<string, string>> {
  const meta: Array<Record<string, string>> = [];
  if (GOOGLE_SITE_VERIFICATION) {
    meta.push({ name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION });
  }
  if (BING_SITE_VERIFICATION) {
    meta.push({ name: "msvalidate.01", content: BING_SITE_VERIFICATION });
  }
  return meta;
}
