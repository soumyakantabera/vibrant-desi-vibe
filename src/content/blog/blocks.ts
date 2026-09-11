/**
 * The article body format.
 *
 * Why blocks in TypeScript rather than Markdown files
 * ---------------------------------------------------
 * `scripts/prerender.mjs` already writes a `.md` twin of every page by running
 * the rendered HTML through `htmlToMarkdown` — that is the site's existing
 * convention and it is what keeps `/course-ielts.md` exactly equal to
 * `/course-ielts`. Authoring articles as separate Markdown files would create a
 * second source for the same words: the HTML page and the `.md` twin could then
 * disagree, which is precisely the drift the AI-readable layer exists to
 * prevent. One source, rendered to HTML, converted to Markdown at build time.
 *
 * It also keeps the build dependency-free (no Markdown parser) and lets an
 * article use the site's own components for tables and callouts instead of
 * generic prose styling.
 *
 * Inline formatting inside `text` is deliberately tiny: `**bold**` and
 * `[label](/path)`. Anything more elaborate belongs in a block type.
 */

export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; caption?: string; head: string[]; rows: string[][] }
  | { t: "quote"; text: string }
  /** A worked example — monospaced, quoted verbatim, not prose. */
  | { t: "example"; label?: string; lines: string[] }
  /** The contextual course CTA. `course` is a site-relative course path. */
  | { t: "cta"; text: string; course: string; label: string };

export type ArticleBody = Block[];

export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[''""]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

export function articleToc(body: ArticleBody): { id: string; text: string }[] {
  return body
    .filter((b): b is { t: "h2"; text: string } => b.t === "h2")
    .map((b) => ({ id: headingId(b.text), text: b.text }));
}

/** Words in the rendered body text, for `wordCount` in the BlogPosting. */
export function countWords(body: ArticleBody): number {
  const strings: string[] = [];
  for (const b of body) {
    switch (b.t) {
      case "h2":
      case "h3":
      case "p":
      case "quote":
        strings.push(b.text);
        break;
      case "ul":
      case "ol":
        strings.push(...b.items);
        break;
      case "table":
        if (b.caption) strings.push(b.caption);
        strings.push(...b.head, ...b.rows.flat());
        break;
      case "example":
        if (b.label) strings.push(b.label);
        strings.push(...b.lines);
        break;
      case "cta":
        strings.push(b.text, b.label);
        break;
    }
  }
  return strings
    .join(" ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}
