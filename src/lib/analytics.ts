/**
 * Search-engine ownership is already proven via DNS TXT records on
 * learnwithsmile.app (Google Search Console + Bing Webmaster). No HTML
 * `google-site-verification` / `msvalidate.01` tags are emitted — those
 * would only duplicate DNS, and this site loads no analytics pixel either.
 *
 * IndexNow still notifies Bing of URL changes on every deploy
 * (`public/learnwithsmile-indexnow-2026.txt`).
 */

export function verificationMeta(): Array<Record<string, string>> {
  return [];
}
