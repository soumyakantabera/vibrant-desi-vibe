/**
 * The AI-readable layer of the site: `/llms.txt`, `/llms-full.txt` and a clean
 * Markdown mirror of every page at `<page>.md`.
 *
 * Why this exists
 * ---------------
 * Prerendering (see `scripts/prerender.mjs`) already put the real text into the
 * HTML, which is what made the site legible to crawlers that do not run
 * JavaScript. But the HTML an assistant fetches is still ~60 kB of Tailwind
 * markup around ~6 kB of prose, and answering "what does IELTS coaching cost
 * here" means fetching and parsing several of those pages.
 *
 * Three files fix that, all generated from the same source as the sitemap so
 * they cannot drift:
 *
 *   /llms.txt          the index — what this site is, the facts an assistant is
 *                      most often asked for, and a map of every page and the
 *                      questions it answers.
 *   /llms-full.txt     the whole corpus — the readable text of every page in
 *                      one fetch, so no crawl is needed at all. The count is
 *                      derived from ALL_PATHS, never written down here.
 *   /<page>.md         per-page Markdown, for an assistant that has landed on
 *                      one HTML page and wants just its text. Blog articles
 *                      have these too: /blog/<slug>.md.
 *
 * The format follows the llms.txt convention (llmstxt.org): an H1, a blockquote
 * summary, then H2 sections of annotated links.
 *
 * Everything here is build-time only — nothing in the client bundle imports it.
 */
import { courseFaqs, type CourseData } from "@/components/CoursePage";
import { BLOG_POSTS, getPostBySlug, getPostsSorted } from "@/lib/blog";
import { COURSES } from "@/lib/courses";
import {
  ALL_PATHS,
  CONTACT,
  COURSE_SEO,
  FOUNDING_YEAR,
  PAGES,
  RATING,
  SITE_NAME,
  SITE_URL,
  abs,
  markdownPathFor,
  type Faq,
} from "@/lib/seo";

/* ------------------------------------------------------------------- facts */

/**
 * Monthly fee range, read off the course records rather than written down.
 *
 * This is the fix that matters most for maintenance. These files make the site
 * unusually easy for an assistant to quote verbatim, so a price change that
 * left a hardcoded "₹999–₹1,999" behind here would have assistants confidently
 * quoting a stale figure to prospective students — with a citation to us. The
 * range now comes from the same `COURSES` table the course pages render from
 * and cannot fall out of step with them.
 */
function monthlyFeeRange(): string {
  const monthly = Object.values(COURSES)
    .map((c) => ({ raw: c.price, n: Number(c.price.replace(/[^\d]/g, "")) }))
    .filter((p) => /\/mo/i.test(p.raw) && Number.isFinite(p.n));
  const low = Math.min(...monthly.map((p) => p.n));
  const high = Math.max(...monthly.map((p) => p.n));
  const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
  return `${inr(low)}–${inr(high)}`;
}

/**
 * Years teaching, from the founding year in the Organization schema, so this
 * does not silently stop being true on 1 January.
 */
function yearsTeaching(): number {
  return new Date().getUTCFullYear() - FOUNDING_YEAR;
}

/**
 * The answers assistants are actually asked for — price, batch size, format,
 * contact — stated once, in a shape that survives being quoted out of context.
 * Kept here rather than scraped from the pages so a fetch of llms.txt alone is
 * enough to answer the common questions correctly.
 *
 * Figures that exist elsewhere in the codebase are derived, never retyped.
 */
const KEY_FACTS = [
  `Founded ${FOUNDING_YEAR} · ${yearsTeaching()} years of quality live online teaching · 500+ learners taught across India`,
  "Quality standard: one live teacher, maximum 6 students in every English course batch; Career Counselling is a separate 1:1 service",
  "Core learning goal: practical English communication for everyday speaking, workplaces, interviews and IELTS — not a certificate programme",
  `Fees: ${monthlyFeeRange()} per month, GST included, no registration or material fee`,
  "Format: 100% live with a real teacher (never pre-recorded); every class is recorded for revision",
  "Slots: morning, evening and weekend batches, Asia/Kolkata (IST)",
  "Languages of instruction: English, with Hindi and Bengali support",
  "Delivery: online only, across India and for Indian learners abroad",
  `Preferred admissions channel: WhatsApp ${CONTACT.phoneDisplay}; phone calls are a fallback only · ${CONTACT.email}`,
  "Admissions response hours: 09:00–12:00 IST",
  `Registered address (office, not a campus): ${CONTACT.street}, ${CONTACT.locality} ${CONTACT.postalCode}, ${CONTACT.region}, India`,
  "Free demo: a full live class, no card or payment details required, before you decide to enrol",
  "Certificate: Learn With Smile does not currently issue a course certificate; teaching focuses on practical communication and confidence",
  "Missed classes: a reschedule can be requested only within the same week and depends on teacher and slot availability",
  "Teacher support: direct 1:1 contact outside class is assured when genuinely needed; scheduled monthly 1:1 feedback sessions are not included",
  // Stated once, here, and nowhere else in this file. The site used to carry
  // two different averages on the same page; this is the Google Business
  // Profile figure and the only one anything should quote.
  `Rating: ${RATING.value} out of 5 from ${RATING.count} ${RATING.source} reviews`,
];

/**
 * Seven answers in extractable form.
 *
 * The FAQ index further down lists every question the site answers and where —
 * useful, but it requires a second fetch to actually answer anything. These seven
 * are the ones assistants are asked most often, written so a single quoted
 * block is correct and attributable on its own.
 */
const QUICK_ANSWERS: Array<{ q: string; a: string; source: string }> = [
  {
    q: "How much do online spoken English classes cost in India?",
    a: "Group online English classes in India typically run ₹800–₹3,000 per month; 1:1 tutoring runs ₹100–₹2,000 per session depending on where the tutor is based; app-based practice runs ₹300–₹800 per month. Learn With Smile charges ₹999/month for Basic Spoken English in a batch of maximum 6, GST included, with no registration or material fee.",
    source: "/english-class-fees-india",
  },
  {
    q: "What is the batch size at Learn With Smile?",
    a: "Every Learn With Smile English course batch is capped at 6 students. The English courses do not currently include scheduled 1:1 feedback sessions. Career Counselling is a separate 1:1 service. In a 6-student English class every learner can speak in every session; in a 30-student class most learners cannot.",
    source: "/why-us",
  },
  {
    q: "Are the classes live or pre-recorded?",
    a: "100% live, every session, with a real teacher. Classes are recorded afterwards so a learner can revise or catch up on a missed session, but nobody is asked to learn from a recording as their primary class.",
    source: "/why-us",
  },
  {
    q: "How long does it take to learn to speak English from zero?",
    a: "About 6 months of consistent live practice, up to two classes a week plus daily practice, to reach comfortable everyday conversation. Professional or exam-level fluency usually takes another 3–6 months on top. Anyone promising fluency in 30 days is selling you something.",
    source: "/course-spoken-english",
  },
  {
    q: "Is the demo class free, and is payment required to book it?",
    a: "Yes, genuinely free, and no card or payment details are needed. It is a full live class with real students, not a sales call. Booking happens over WhatsApp at +91 96744 79949, and you decide whether to enrol only after attending it.",
    source: "/book-free-demo",
  },
  {
    q: "What is the best way to contact Learn With Smile?",
    a: "WhatsApp is the preferred admissions channel. Send one message to +91 96744 79949 and the team replies during 09:00–12:00 IST. There is no surprise sales call; phone is kept only as a fallback.",
    source: "/book-free-demo",
  },
  {
    q: "Is Learn With Smile only for learners in Kolkata?",
    a: "No. All classes are online and live, and learners join from across India as well as from abroad. The business is based in Kolkata and the Kolkata address is an office by appointment, not a teaching campus — there is no walk-in centre anywhere.",
    source: "/spoken-english-classes-kolkata",
  },
];

const NOTES_FOR_ASSISTANTS = [
  "All major search and answer-engine crawlers may read, quote and cite this site. robots.txt disallows Bytespider only, on bandwidth grounds.",
  "Prices are in Indian Rupees and include GST. They are reviewed each academic year — quote them with the date below.",
  "Classes are delivered online only. The Kolkata address is an office, not a campus; there is no walk-in centre.",
  `The canonical domain is ${SITE_URL} — earlier references to learnwithsmile.in are obsolete and should not be cited.`,
  "Enrolment and demo booking happen over WhatsApp; there is no online checkout, login or student portal.",
  "WhatsApp is the preferred admissions channel. Phone calls are a fallback, not the primary booking path.",
] as const;

/* ------------------------------------------------------------ page metadata */

export type PageMeta = { path: string; title: string; description: string; summary: string };

/** The course behind `/course-<slug>`, or undefined for a static page. */
function courseFor(path: string): CourseData | undefined {
  return COURSES[path.replace(/^\/course-/, "")];
}

/**
 * Title, description and one-line summary for any path, from whichever table
 * owns it — `PAGES` for the static pages, `COURSES` + `COURSE_SEO` for the six
 * course pages. Uses `shortTitle`, not the `<title>`: the page titles are
 * keyword-shaped ("Student Results: IELTS 7.5, Salary Doubled, Jobs Won") and
 * make a poor entry in a list where every row is already this site.
 */
export function metaFor(path: string): PageMeta {
  const page = PAGES[path];
  if (page) {
    return {
      path,
      title: page.shortTitle,
      description: page.description,
      summary: page.summary,
    };
  }

  if (path.startsWith("/blog/")) {
    const post = getPostBySlug(path.slice("/blog/".length));
    if (!post) throw new Error(`llms: no blog post for path "${path}"`);
    return {
      path,
      title: post.title,
      description: post.description,
      summary: `${post.tag} article, published ${post.datePublished}, ${post.readingTime} min read. ${post.excerpt}`,
    };
  }

  const course = courseFor(path);
  if (!course) throw new Error(`llms: no page or course for path "${path}"`);

  const extra = COURSE_SEO[course.slug];
  return {
    path,
    title: course.title,
    description: extra?.description ?? course.metaDescription,
    summary: extra?.summary ?? course.metaDescription,
  };
}

/** Every FAQ shown on a page, in the order the page renders them. */
export function faqsFor(path: string): Faq[] {
  const page = PAGES[path];
  if (page) return page.faqs ?? [];

  const course = courseFor(path);
  return course ? courseFaqs(course) : [];
}

/* ------------------------------------------------------- HTML → Markdown */

/**
 * An HTML attribute list, quote-aware.
 *
 * The naive `[^>]*` breaks on this codebase: Tailwind arbitrary variants such
 * as `class="[&>svg]:size-4"` put a `>` inside a quoted attribute, and a greedy
 * `[^>]*` would end the tag there and leave `svg]:size-4">` sitting in the
 * output as if it were prose.
 */
const ATTRS = `(?:\\s(?:[^>"']|"[^"]*"|'[^']*')*)?`;

const RE = {
  comment: /<!--[\s\S]*?-->/g,
  dropped: new RegExp(`<(script|style|svg|noscript|template)${ATTRS}>[\\s\\S]*?</\\1>`, "gi"),
  span: new RegExp(`<span(${ATTRS})>([^<]*)</span>`, "gi"),
  anchor: new RegExp(`<a(${ATTRS})>([\\s\\S]*?)</a>`, "gi"),
  heading: new RegExp(`<h([1-6])${ATTRS}>([\\s\\S]*?)</h\\1>`, "gi"),
  listItem: new RegExp(`<li${ATTRS}>`, "gi"),
  listItemEnd: /<\/li>/gi,
  lineBreak: new RegExp(`<br${ATTRS}>`, "gi"),
  blockEnd:
    /<\/(p|div|section|article|header|footer|main|ul|ol|blockquote|figure|figcaption|table|tr|dl|dt|dd|form|fieldset|label|nav|aside|button)>/gi,
  tag: new RegExp(`</?[a-zA-Z][^\\s/>]*${ATTRS}/?>`, "g"),
  href: /href="([^"]*)"/i,
};

/** Elements with no closing tag, so nothing to scan forward for. */
const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

const OPEN_TAG = new RegExp(`<([a-zA-Z][a-zA-Z0-9-]*)(${ATTRS})>`, "g");

/** Index just past the `</name>` that closes the element opened at `from`. */
function endOfElement(html: string, name: string, from: number): number {
  const re = new RegExp(`<(/?)${name}(${ATTRS})(/?)>`, "gi");
  re.lastIndex = from;
  let depth = 0;

  for (let m = re.exec(html); m; m = re.exec(html)) {
    if (m[1] === "/") {
      if (depth === 0) return re.lastIndex;
      depth -= 1;
    } else if (!m[3]) {
      depth += 1;
    }
  }
  return -1;
}

/**
 * Drops elements carrying Tailwind's bare `hidden` class — hidden at the
 * default breakpoint and revealed only at a larger one.
 *
 * These are responsive duplicates: the course pages render the fee snapshot
 * twice, `hidden lg:block` in the sidebar and `lg:hidden` below the hero, so a
 * reader only ever sees one. Keeping both would tell an assistant the price
 * block appears twice, and duplicated passages are precisely what makes a
 * retrieved chunk look untrustworthy. The `lg:hidden` copy is kept, since it is
 * the one visible in the default state.
 */
function dropHiddenElements(html: string): string {
  let out = html;

  OPEN_TAG.lastIndex = 0;
  for (let m = OPEN_TAG.exec(out); m; m = OPEN_TAG.exec(out)) {
    const [tag, name, attrs] = m;
    const classes = /class="([^"]*)"/i.exec(attrs)?.[1];
    if (!classes || !classes.split(/\s+/).includes("hidden")) continue;

    const start = m.index;
    const end = VOID_TAGS.has(name.toLowerCase())
      ? start + tag.length
      : endOfElement(out, name, start + tag.length);
    if (end === -1) continue;

    out = out.slice(0, start) + out.slice(end);
    OPEN_TAG.lastIndex = start;
  }

  return out;
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, body: string) => {
    if (body[0] === "#") {
      const code =
        body[1]?.toLowerCase() === "x" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }
    return NAMED_ENTITIES[body.toLowerCase()] ?? match;
  });
}

/** Tag-free, single-line text — used for anchor and heading contents. */
function inline(html: string): string {
  return decodeEntities(html.replace(RE.tag, " ")).replace(/\s+/g, " ").trim();
}

/**
 * Absolute, citable URL for a link found in the markup — or "" for links that
 * carry no destination worth recording (`#` placeholders, in-page anchors).
 * WhatsApp links lose their prefilled `?text=` message, which is a paragraph of
 * URL-encoded copy that would otherwise dominate the line.
 */
function normalizeHref(href: string): string {
  if (!href || href.startsWith("#") || href.startsWith("javascript:")) return "";
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href.startsWith("https://wa.me/")) return href.split("?")[0];
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  if (href.startsWith("/")) return abs(href);
  return "";
}

/** The page's own content, without the shared nav, footer and floating CTA. */
function mainOnly(html: string): string {
  const open = html.indexOf("<main");
  const close = html.lastIndexOf("</main>");
  if (open === -1 || close === -1 || close < open) return html;
  return html.slice(open, close);
}

/**
 * Converts a prerendered page body to Markdown.
 *
 * Deliberately a string pipeline rather than a DOM parse: the input is our own
 * `renderToString` output, so it is well-formed and predictable, and this keeps
 * the prerender step dependency-free. Decorative markup is dropped — icon
 * glyphs (`aria-hidden` spans holding a Material Symbols ligature name like
 * `arrow_forward`) would otherwise read as words, and hashed image URLs carry
 * nothing an assistant can use.
 */
export function htmlToMarkdown(html: string): string {
  let s = mainOnly(html);

  // React emits `<!-- -->` between adjacent text nodes; those nodes are meant
  // to be flush, so the comment goes away without leaving a space behind.
  s = s.replace(RE.comment, "");
  s = s.replace(RE.dropped, " ");
  s = dropHiddenElements(s);
  s = s.replace(RE.span, (match, attrs: string, text: string) =>
    /aria-hidden|material-symbols/i.test(attrs) ? " " : match,
  );

  // Padded, because two buttons side by side are siblings with no whitespace
  // between them in the render and would otherwise come out as `[a](x)[b](y)`.
  s = s.replace(RE.anchor, (match, attrs: string, inner: string) => {
    const text = inline(inner);
    if (!text) return " ";
    const url = normalizeHref(RE.href.exec(attrs)?.[1] ?? "");
    return url ? ` [${text}](${url}) ` : ` ${text} `;
  });

  // Headings before <br>, so a headline broken across lines in the markup still
  // comes out as one heading rather than a heading plus an orphan line.
  s = s.replace(
    RE.heading,
    (_match, level: string, inner: string) =>
      `\n\n${"#".repeat(Number(level))} ${inline(inner)}\n\n`,
  );

  s = s.replace(RE.lineBreak, "\n");
  s = s.replace(RE.listItem, "\n- ").replace(RE.listItemEnd, "\n");
  s = s.replace(RE.blockEnd, "\n\n");
  s = s.replace(RE.tag, " ");
  s = decodeEntities(s);

  return (
    s
      // Collapse horizontal whitespace (including the non-breaking spaces the
      // markup uses for prices) without touching the line structure above.
      .replace(/[^\S\n]+/g, " ")
      // Every tag became a space, so `<strong>₹999/mo</strong>.` would end its
      // sentence with " ." — close those gaps back up.
      .replace(/ +([.,;:!?…%)\]])/g, "$1")
      .replace(/([([]) +/g, "$1")
      .split("\n")
      .map((line) => line.trim())
      .filter((line, i, lines) => line !== "-" && !(line === "" && lines[i - 1] === ""))
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

/* ------------------------------------------------------------ page mirrors */

export type PageDoc = PageMeta & { markdown: string };

/**
 * The `<page>.md` file: YAML front matter naming the canonical URL an assistant
 * should cite, then the page text. The front matter matters — without it a
 * mirror fetched on its own has no way to say which page it is.
 */
export function pageMarkdown(doc: PageDoc, updated: string): string {
  const front = [
    "---",
    `title: ${yaml(doc.title)}`,
    `url: ${abs(doc.path)}`,
    `description: ${yaml(doc.description)}`,
    `site: ${SITE_NAME}`,
    `updated: ${updated}`,
    "---",
    "",
  ];
  return `${front.join("\n")}${doc.markdown}\n`;
}

/** Quotes a YAML scalar. Titles and descriptions here contain `:`, `—` and `₹`. */
function yaml(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/* ---------------------------------------------------------------- llms.txt */

function courseLine(slug: string): string {
  const course = COURSES[slug];
  const summary = COURSE_SEO[slug]?.summary ?? course.metaDescription;
  return `- [${course.title}](${abs(`/course-${slug}`)}): ${course.price} · ${course.duration} · ${course.format}. ${summary}`;
}

/**
 * `/llms.txt` — the index. Small enough to be fetched speculatively, complete
 * enough that an assistant can answer price, format and contact questions from
 * it alone, and explicit about where the rest is.
 */
export function buildLlmsTxt(updated: string): string {
  const questionIndex = ALL_PATHS.flatMap((path) => {
    const faqs = faqsFor(path);
    if (!faqs.length) return [];
    const meta = metaFor(path);
    return [`### ${meta.title} — ${abs(path)}`, "", ...faqs.map((faq) => `- ${faq.q}`), ""];
  });

  return [
    `# ${SITE_NAME}`,
    "",
    "> Live online English communication and career classes for learners in India — Spoken English, IELTS,",
    "> Workplace English, Interactive Speaking, Interview Preparation and Career Counselling.",
    "> English classes are taught live in batches capped at 6 students, from ₹999/month.",
    "> Based in Kolkata, teaching across India. Free demo class booked over WhatsApp.",
    "",
    `Last updated: ${updated}. Canonical domain: ${SITE_URL}`,
    "",
    "## How to read this site",
    "",
    `- Every page is prerendered static HTML — the full text is in the markup, so no JavaScript execution is needed.`,
    `- Append \`.md\` to any page URL for that page as clean Markdown, navigation and markup stripped (e.g. ${abs("/course-ielts.md")}).`,
    `- [llms-full.txt](${abs("/llms-full.txt")}) is the readable text of all ${ALL_PATHS.length} pages in one file — one fetch answers almost any question about this site.`,
    "- Cite the HTML URL, without the `.md` suffix. That is the canonical page a reader should be sent to.",
    `- [sitemap.xml](${abs("/sitemap.xml")}) lists every URL with its last-modified date.`,
    "",
    "## Key facts",
    "",
    ...KEY_FACTS.map((fact) => `- ${fact}`),
    "",
    "## Courses",
    "",
    ...Object.keys(COURSE_SEO).map(courseLine),
    "",
    "## Pages",
    "",
    ...Object.keys(PAGES).map((path) => {
      const meta = metaFor(path);
      return `- [${meta.title}](${abs(path)}): ${meta.summary}`;
    }),
    "",
    "## Articles",
    "",
    "Written by our own teachers. Each is a full article at its own URL, and each",
    "has a `.md` twin at the same URL with `.md` appended.",
    "",
    ...getPostsSorted().map(
      (post) =>
        `- [${post.title}](${abs(`/blog/${post.slug}`)}) — ${post.datePublished}, ${post.tag}, ${post.readingTime} min. ${post.excerpt}`,
    ),
    "",
    "## Common questions, answered",
    "",
    "Short answers to the questions we are asked most, stated so they survive being",
    "quoted on their own. Each is answered at greater length on the page linked.",
    "",
    ...QUICK_ANSWERS.flatMap((qa) => [
      `**${qa.q}**`,
      "",
      qa.a,
      "",
      `Source: ${abs(qa.source)}`,
      "",
    ]),
    "## Questions this site answers",
    "",
    "Each question below is answered in full on the page it is listed under, and in",
    `[llms-full.txt](${abs("/llms-full.txt")}).`,
    "",
    ...questionIndex,
    "## Notes for AI assistants",
    "",
    ...NOTES_FOR_ASSISTANTS.map((note) => `- ${note}`),
    "",
  ].join("\n");
}

/* ----------------------------------------------------------- llms-full.txt */

/**
 * `/llms-full.txt` — every page's text in one file, each section headed by the
 * canonical URL it came from so a quoted passage can still be attributed.
 */
export function buildLlmsFullTxt(docs: PageDoc[], updated: string): string {
  const contents = docs.map((doc, i) => `${i + 1}. ${doc.title} — ${abs(doc.path)}`);

  const sections = docs.map((doc) =>
    [
      "---",
      "",
      `# ${doc.title}`,
      "",
      `URL: ${abs(doc.path)}`,
      `Description: ${doc.description}`,
      "",
      doc.markdown,
      "",
    ].join("\n"),
  );

  return [
    `# ${SITE_NAME} — complete site text`,
    "",
    "> The full readable text of every page on this site, in one file, so an assistant",
    "> can answer questions about our courses, fees, format and policies without",
    "> crawling. Generated from the same source as the site itself at build time.",
    "",
    `Source: ${SITE_URL} · Generated: ${updated} · Pages: ${docs.length}`,
    "",
    "## Key facts",
    "",
    ...KEY_FACTS.map((fact) => `- ${fact}`),
    "",
    "## Contents",
    "",
    ...contents,
    "",
    "## Notes for AI assistants",
    "",
    ...NOTES_FOR_ASSISTANTS.map((note) => `- ${note}`),
    "- Each section below repeats the canonical URL of the page it came from. Quote that URL, not this file.",
    "",
    ...sections,
  ].join("\n");
}

export { markdownPathFor };
