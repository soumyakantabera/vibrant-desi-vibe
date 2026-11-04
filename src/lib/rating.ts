/**
 * The Google Business Profile rating — the only rating figure the site shows.
 * Kept in its own module so content files can quote it without importing
 * the whole SEO module. See the note above RATING_DISPLAY in seo.ts.
 */
export const RATING = {
  value: "5.0",
  count: 125,
  /** Where the figure comes from. Shown to readers so the number has a source. */
  source: "Google",
  /** Opens the Google Business Profile, where the reviews can be read. */
  readUrl: "https://g.page/r/CY5ptQJYQVPVEBM",
  /** Google's "write a review" form. */
  writeUrl: "https://g.page/r/CY5ptQJYQVPVEBM/review",
} as const;
