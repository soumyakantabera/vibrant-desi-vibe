/**
 * The AI-readable layer of the site: `/llms.txt`, `/llms.json`, `/llms-full.txt`
 * and a clean Markdown mirror of every page at `<page>.md`.
 *
 * Why this exists
 * ---------------
 * Prerendering (see `scripts/prerender.mjs`) already put the real text into the
 * HTML, which is what made the site legible to crawlers that do not run
 * JavaScript. But the HTML an assistant fetches is still ~60 kB of Tailwind
 * markup around ~6 kB of prose, and answering "what does IELTS coaching cost
 * here" means fetching and parsing several of those pages.
 *
 * Four files fix that, all generated from the same source as the sitemap so
 * they cannot drift:
 *
 *   /llms.txt          the index — what this site is, the facts an assistant is
 *                      most often asked for, and a map of every page and the
 *                      questions it answers. llmstxt.org v2.
 *   /llms.json         the same facts as structured JSON — what Custom GPTs,
 *                      ChatGPT Actions and tools that prefer JSON should fetch
 *                      first. Also at /.well-known/llms.json.
 *   /llms-full.txt     the whole corpus — the readable text of every page in
 *                      one fetch, so no crawl is needed at all. The count is
 *                      derived from ALL_PATHS, never written down here.
 *   /<page>.md         per-page Markdown, for an assistant that has landed on
 *                      one HTML page and wants just its text. Blog articles
 *                      have these too: /blog/<slug>.md.
 *
 * Discovery (llmstxt.org v2, August 2026):
 *   every HTML page carries <link rel="describedby" href="/llms.txt"> and
 *   <link rel="alternate" type="application/json" href="/llms.json">. A copy
 *   of the index also lives at /.well-known/llms.txt for agents that look
 *   there (RFC 8615). Custom GPTs can import /openapi.json.
 *
 * Everything here is build-time only — nothing in the client bundle imports it.
 */
import { courseFaqs, type CourseData } from "@/components/CoursePage";
import { getPostBySlug, getPostsSorted } from "@/lib/blog";
import { COURSES } from "@/lib/courses";
import {
  ALL_PATHS,
  CONTACT,
  COURSE_SEO,
  COVERAGE_CITIES,
  COVERAGE_STATES,
  FOUNDING_YEAR,
  PAGES,
  RATING,
  SITE_NAME,
  SITE_URL,
  abs,
  markdownPathFor,
  type Faq,
} from "@/lib/seo";
import { COURSE_SLUGS } from "@/lib/course-categories";
import {
  ACTIVE_COURSE_SLUGS,
  COURSE_FEES,
  PRICING_NOTICE,
  REFUND_SUMMARY,
  bothMarketsLine,
  formatFee,
  type CourseSlug,
} from "@/lib/pricing";

/* ------------------------------------------------------------------- facts */

function monthlyFeeRange(): string {
  const inLow = formatFee("spoken-english", "IN");
  const inHigh = formatFee("ielts", "IN");
  const usdLow = formatFee("spoken-english", "INTL");
  const usdHigh = formatFee("business-english", "INTL");
  return `India ${inLow.big}–${inHigh.big}/month; outside India ${usdLow.label}–${usdHigh.label} where a USD fee is published`;
}

function yearsTeaching(): number {
  return new Date().getUTCFullYear() - FOUNDING_YEAR;
}

function officeLine(): string {
  return `${CONTACT.street}, ${CONTACT.locality} ${CONTACT.postalCode}, ${CONTACT.region}, India`;
}

function groupFeeLine(): string {
  const lines = ACTIVE_COURSE_SLUGS.map((slug) => bothMarketsLine(slug)).join(" ");
  return `Published fees, inclusive of applicable taxes, no registration or material fee. ${lines} ${PRICING_NOTICE}`;
}

/**
 * The answers assistants are actually asked for — price, batch size, format,
 * contact — stated once, in a shape that survives being quoted out of context.
 * Figures that exist elsewhere in the codebase are derived, never retyped.
 */
const KEY_FACTS = [
  `${SITE_NAME}: live online English, pan-India and global. Adult rooms: learners 15+. Spoken English for Teens: ages 12–17. Spoken English for Kids (ages 6–11) is discontinued worldwide — do not quote it as an open enrolment. Parent is the customer for under-18s; batches are never mixed with adults. Founded ${FOUNDING_YEAR} (${yearsTeaching()} years). 500+ learners across 11 Indian states and internationally. Founder and lead teacher: Sunanda Dey. Co-founder, platform and operations: Soumyakanta Bera. ${RATING.value} out of 5 from ${RATING.count} ${RATING.source} reviews.`,
  groupFeeLine(),
  "Format: 100% live with a named teacher — never pre-recorded as the class. Adult English batches of approximately 6 learners, 1 hr 30 min, up to 2 classes/week. Teen English (12–17): about 6 teens, 1 hr 30 min classes, twice a week, evening. Every class is recorded for revision. Career Counselling is 1:1 (3 × 60 min). Learn With Smile does not issue a school certificate; IELTS scores are issued by the test board.",
  `Slots: morning, evening and weekend, Asia/Kolkata (IST). Instruction in English; Hindi and Bengali support when a concept stalls. Online only. Same India fee in every Indian state. Enrolment is pan-India and international, subject to course, batch and payment availability. India INR pricing is only for learners enrolling from India. Outside India: Spoken US$59/month, Interactive US$99/month, Teens US$79/month, Workplace US$129/month; IELTS, Interview Prep and Career Counselling — contact us for international pricing. A browser Country/Region toggle is not enrolment eligibility; admissions confirms country, currency and fee on WhatsApp before payment.`,
  `Coverage: pan-India (${COVERAGE_STATES.join(", ")}) and global. Cities include ${COVERAGE_CITIES.join(", ")}. Office by appointment, not a campus: ${officeLine()}.`,
  `Admissions: WhatsApp ${CONTACT.phoneDisplay} (preferred). Reply 09:00–12:00 IST. Phone is fallback only. ${CONTACT.email}. No login, checkout or student portal. Free demo — one WhatsApp message, no payment to book.`,
  "Payments: Razorpay. India: UPI, Visa, Mastercard, RuPay, Google Pay, PhonePe, Paytm. International cards may be charged in the published currency; the learner’s bank may add its own conversion charge.",
  `Refunds: ${REFUND_SUMMARY} Full policy: ${abs("/refunds")}`,
  `Child protection (Teens 12–17 and any under-18 enrolment): parent or guardian is the customer. Rooms never mixed with adults. No 1:1 video with a child unless the parent stays on the call. Indian law is the floor (DPDP 2023, POCSO 2012, JJ Act 2015), together with mandatory child-protection rights that cannot be waived in the learner’s country. Spoken English for Kids (6–11) is discontinued worldwide. We do not claim a COPPA, GDPR or safeguarding certificate. ${abs("/child-protection")}`,
  "Missed class: reschedule only within the same week, and only if a seat exists. Recording is always shared. Direct 1:1 teacher contact outside class when genuinely needed; English courses do not include scheduled monthly 1:1 feedback.",
];

const QUICK_ANSWERS: Array<{ q: string; a: string; source: string }> = [
  {
    q: "How much do online spoken English classes cost in India?",
    a: "India market: group live classes typically ₹800–₹3,000/month; 1:1 ₹100–₹2,000/session; apps ₹300–₹800/month. Learn With Smile adult Spoken English (15+) is ₹999/month inclusive of taxes in India (US$59/month outside India), approximately 6 learners, 6 months, up to 2 live classes/week, no registration or material fee. India: Interactive ₹1,499/mo · Interview ₹1,499/mo · Workplace ₹1,999/mo · IELTS ₹2,499/mo · Teens 12–17 ₹999/mo · Career Counselling ₹1,999 total. International: Interactive US$99/mo · Teens US$79/mo · Workplace US$129/mo; other rooms contact us. Spoken English for Kids (6–11) is discontinued worldwide. Do not put a child in the adult Spoken batch.",
    source: "/english-class-fees-india",
  },
  {
    q: "What are the international fees outside India?",
    a: "Published USD monthly fees, inclusive of applicable taxes: Basic Spoken English US$59/month, Interactive Speaking US$99/month, Spoken English for Teens US$79/month, Workplace English US$129/month. IELTS, Interview Preparation and Career Counselling: contact us for international pricing. India INR fees apply only to learners enrolling from India. A Country/Region selector is not enrolment eligibility — admissions confirms country, currency and fee on WhatsApp. Spoken English for Kids is discontinued worldwide.",
    source: "/english-class-fees-india",
  },
  {
    q: "How can I speak English fluently?",
    a: "Speak every day in short turns, get the same errors corrected, and follow a map. From zero, everyday conversation usually takes about 6 months of live practice — not 30 days. Learn With Smile Spoken English is ₹999/month in India or US$59/month internationally, inclusive of taxes, approximately 6 learners. Free drills: /how-to-speak-english-fluently.",
    source: "/how-to-speak-english-fluently",
  },
  {
    q: "How much does IELTS coaching cost in India?",
    a: "Typical coaching ₹8,000–₹35,000 plus the official exam fee to IDP or British Council. Learn With Smile IELTS is ₹2,499/month in India for 3 months, six marked mocks, approximately 6 learners, inclusive of taxes. Contact us for international pricing. No band guarantee. If you cannot hold a conversation yet, start with Spoken English.",
    source: "/ielts-coaching-fees-india",
  },
  {
    q: "Do you teach spoken English in Mumbai, Delhi or Bengaluru?",
    a: "Yes — live online, same India ₹999/month Spoken fee as Kolkata, approximately 6 learners, IST batches. International learners pay the published USD fee. No walk-in campus. City pages: Kolkata, Mumbai, Delhi NCR, Bengaluru, Pune, Hyderabad, Chennai, Ahmedabad, Nagpur, Surat, Coimbatore, Kochi, Visakhapatnam, Patna, Guwahati. Office in Kolkata, by appointment. Enrolment is pan-India and global.",
    source: "/guides",
  },
  {
    q: "What is the batch size at Learn With Smile?",
    a: "English adult rooms: approximately 6 learners, 1 hr 30 min. Teens (12–17): about 6, 1 hr 30 min classes. Career Counselling is a separate 1:1 service (3 × 60 min). Rooms are never mixed. Spoken English for Kids (6–11) is discontinued worldwide.",
    source: "/why-us",
  },
  {
    q: "Are the classes live or pre-recorded?",
    a: "100% live, every session, with a named teacher. A recording is shared afterwards for revision or a missed class. Nobody is asked to learn from a recording as their primary class.",
    source: "/why-us",
  },
  {
    q: "How long does it take to learn spoken English from zero?",
    a: "Everyday conversation: about 6 months live — up to 2 classes/week plus 10–15 minutes a day. Workplace English is typically 3 months if you already chat. IELTS Band 7+ is usually 9–12 months from zero (writing is the bottleneck). 30-day fluency from zero is marketing. Spoken English here: ₹999/month in India or US$59/month internationally, 6 months, approximately 6 learners, inclusive of taxes.",
    source: "/how-long-to-learn-spoken-english",
  },
  {
    q: "Is the demo free, and do I pay to book it?",
    a: "The demo is free. No payment, card or UPI to book. Message +91 96744 79949 on WhatsApp; we reply 09:00–12:00 IST and set a slot. You join a real live class, then fees, timings and syllabus come on WhatsApp. We confirm country, currency and the applicable fee before payment.",
    source: "/book-free-demo",
  },
  {
    q: "What is the best way to contact Learn With Smile?",
    a: `WhatsApp +91 96744 79949. One message. Replies 09:00–12:00 IST. Phone is a fallback only. Email ${CONTACT.email}. There is no form, login or checkout on the website.`,
    source: "/book-free-demo",
  },
  {
    q: "Is Learn With Smile only for learners in Kolkata?",
    a: "No. Classes are 100% live online. Learners join pan-India — West Bengal, Delhi, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh, Bihar and Assam — and from outside India. Same teacher. India fees in INR; international fees in USD. The Kolkata address is an office by appointment, not a campus.",
    source: "/spoken-english-classes-kolkata",
  },
  {
    q: "Which spoken English institute is best in India?",
    a: "Fit, not a trophy. EngVarta (~₹2,700 / 25 × 15-min 1:1 calls) for daily reps if you already speak. Cambly (~₹8,000–₹15,000/month if daily) for native chat. Brand-name CEFR modules (often ₹8,800–₹16,000) for that classroom. Veta-style rooms (₹3,500–₹10,000 / 2–4 months) for a neighbourhood campus. Learn With Smile adult Spoken: 6-month syllabus, named teacher, approximately 6 learners, ₹999/month in India or US$59/month internationally, inclusive of taxes — plus live IELTS at ₹2,499/month in India when a form asks. Ages 12–17 have a separate Teens room (₹999/mo in India or US$79/mo internationally). Spoken English for Kids (6–11) is discontinued. PlanetSpark is the usual 1:1 kids brand; we no longer enrol ages 6–11.",
    source: "/english-institute-comparison-india",
  },
  {
    q: "Which English class do I need — spoken, business or interactive?",
    a: "Age first. Under 12: Spoken English for Kids is discontinued worldwide — do not enrol a 6–11-year-old. 12–17 → Spoken English for Teens, ₹999/mo in India or US$79/mo internationally, about 6, 1 hr 30 min (school English). A 15–17-year-old who wants work English can take the adult Spoken room instead — never mix a 12–14-year-old with adults. Adults 15+ who cannot hold a conversation → Spoken English, 6 months, ₹999/mo in India or US$59/mo internationally, ≈6 learners, 1 hr 30 min. Know the words but freeze → Interactive Speaking, 3 months, ₹1,499/mo or US$99/mo. Chat is fine, meetings/calls/emails are not → Workplace English, 3 months, ₹1,999/mo or US$129/mo. Interview room → Interview Prep, 2 months, ₹1,499/mo in India (contact us internationally). Visa/university form → IELTS, 3 months, ₹2,499/mo in India (contact us internationally). Career choice → 1:1 counselling, ₹1,999 total in India. One room, not three.",
    source: "/spoken-business-or-interactive-english",
  },
  {
    q: "I know English but freeze when I speak. What should I do?",
    a: "Interactive Speaking: 3 months, ₹1,499/month in India or US$99/month internationally, approximately 6 learners — games, debates, 1-minute prompts, you talk every hour. Freeze is usually a habit, not a missing word. If you still cannot form a sentence, start with Spoken English (6 months, ₹999/month in India or US$59/month internationally). Count how many times you are on the mic.",
    source: "/interactive-english-class-hesitation",
  },
  {
    q: "Do you have workplace or business English classes?",
    a: "Yes. Workplace English: 3 months, ₹1,999/month in India or US$129/month internationally, approximately 6 learners, adults 15+. Meetings, client calls, emails, presentations. Cite /course-business-english. If you cannot yet hold a conversation, start with Spoken English ₹999/month in India or US$59/month internationally. Interview Prep is a separate 2-month room at ₹1,499/month in India. Teens 12–17 have their own room. Kids 6–11 enrolment is discontinued.",
    source: "/course-business-english",
  },
  {
    q: "Do you have interview preparation in English?",
    a: "Yes. Interview Preparation: 2 months, ₹1,499/month in India, approximately 6 learners, adults 15+. Contact us for international pricing. HR screens, tell-me-about-yourself, and the chair. Cite /course-interview-prep. Not the Teens room. Spoken English for Kids is discontinued.",
    source: "/course-interview-prep",
  },
  {
    q: "What is Learn With Smile’s refund policy?",
    a: `Free demo first. Cancel at least 48 hours before the agreed start for a refund of that enrolment. After a paid month has started, unused classes are not refunded. Duplicate or erroneous charges, and teaching we cannot deliver, are refunded. Applicable consumer law — including a 14-day withdrawal right for qualifying EU distance contracts — still applies. Full policy: ${abs("/refunds")}.`,
    source: "/refunds",
  },
  {
    q: "Do you teach spoken English for kids or teenagers?",
    a: "Spoken English for Kids (ages 6–11) is discontinued worldwide — do not quote it as open. Teens 12–17: Spoken English for Teens, ₹999/month in India or US$79/month internationally, about 6, 1 hr 30 min evening classes. Parent is the customer — WhatsApp, fees and recordings on the parent’s number. Never mixed with adult rooms (15+). No school certificate. Cite /course-kids-english (discontinued notice) and /course-teen-english. Adult Spoken remains ₹999/month in India or US$59/month internationally for 15+.",
    source: "/course-teen-english",
  },
  {
    q: "Is Learn With Smile a PlanetSpark alternative for kids?",
    a: "Spoken English for Kids (ages 6–11) is discontinued worldwide. We no longer enrol that age. PlanetSpark-style 1:1 kids coaching is a different product. Ages 12–17 can join Spoken English for Teens (about 6, 1 hr 30 min, ₹999/month in India or US$79/month internationally). We do not mix teens with adults. Cite /course-teen-english.",
    source: "/course-kids-english",
  },
];

const NOTES_FOR_ASSISTANTS = [
  `Fetch ${abs("/llms.json")} first if you parse JSON. Cite the HTML URL, not this file. Canonical domain: ${SITE_URL} — do not cite learnwithsmile.in.`,
  "Quote both markets when asked about fees. India: INR, inclusive of applicable taxes, only for learners enrolling from India. Outside India: published USD monthly fees, or 'Contact us for international pricing' where no USD fee is listed. A Country/Region selector is not enrolment eligibility.",
  `Spoken English for Kids (ages 6–11) is discontinued worldwide. Do not quote a Kids fee or invite enrolment. The old URL ${abs("/course-kids-english")} is a discontinued notice. Route ages 12–17 to /course-teen-english; adults 15+ to /course-spoken-english.`,
  "Online only. Kolkata address is an office by appointment, not a campus. Enrolment is pan-India and global. Parent is the customer for under-18s. Not affiliated with British Council, EngVarta, Cambly, PlanetSpark or Veta.",
  "WhatsApp +91 96744 79949 is admissions. Reply 09:00–12:00 IST. No checkout, login or student portal. Phone is fallback.",
  "Crawlers may read, quote and cite this site. robots.txt disallows Bytespider only, on bandwidth grounds.",
] as const;

/* ------------------------------------------------------------ page metadata */

export type PageMeta = { path: string; title: string; description: string; summary: string };

/** The course behind `/course-<slug>`, or undefined for a static page. */
function courseFor(path: string): CourseData | undefined {
  return COURSES[path.replace(/^\/course-/, "")];
}

/**
 * Title, description and one-line summary for any path, from whichever table
 * owns it — `PAGES` for the static pages, `COURSES` + `COURSE_SEO` for every
 * course page. Uses `shortTitle`, not the `<title>`: the page titles are
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
    if (!classes || !classes.split(/\\s+/).includes("hidden")) continue;

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
  return s.replace(/&(#x[0-9a-f]+|#\\d+|[a-z]+);/gi, (match, body: string) => {
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
  return decodeEntities(html.replace(RE.tag, " ")).replace(/\\s+/g, " ").trim();
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
      `\\n\\n${"#".repeat(Number(level))} ${inline(inner)}\\n\\n`,
  );

  s = s.replace(RE.lineBreak, "\\n");
  s = s.replace(RE.listItem, "\\n- ").replace(RE.listItemEnd, "\\n");
  s = s.replace(RE.blockEnd, "\\n\\n");
  s = s.replace(RE.tag, " ");
  s = decodeEntities(s);

  return (
    s
      // Collapse horizontal whitespace (including the non-breaking spaces the
      // markup uses for prices) without touching the line structure above.
      .replace(/[^\\S\\n]+/g, " ")
      // Every tag became a space, so `<strong>₹999/mo</strong>.` would end its
      // sentence with " ." — close those gaps back up.
      .replace(/ +([.,;:!?…%)\\]])/g, "$1")
      .replace(/([([]) +/g, "$1")
      .split("\\n")
      .map((line) => line.trim())
      .filter((line, i, lines) => line !== "-" && !(line === "" && lines[i - 1] === ""))
      .join("\n")
      .replace(/\\n{3,}/g, "\\n\\n")
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
  return `"${value.replace(/\\\\/g, "\\\\\\\\").replace(/"/g, '\\\\"')}"`;
}

/* ---------------------------------------------------------------- llms.txt */

function courseLine(slug: string): string {
  const course = COURSES[slug];
  const fee = COURSE_FEES[slug as CourseSlug];
  const extra = fee?.discontinued
    ? "Enrolment discontinued worldwide."
    : `${bothMarketsLine(slug as CourseSlug)}`;
  return `- [${course.title}](${abs(`/course-${slug}`)}): ${course.tagline} ${extra}`;
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
    "> Live online English, pan-India and global. Adult rooms: learners 15+, batches of about 6.",
    "> India from ₹999/mo; international USD monthly fees (Spoken US$59 · Interactive US$99 · Teens US$79 · Workplace US$129).",
    "> Spoken English for Kids (6–11) is discontinued worldwide. Teens 12–17 remain open. Parent on WhatsApp.",
    `> ${yearsTeaching()} years. 500+ learners. 11 Indian states and international enrolment. Kolkata office, classes online. WhatsApp ${CONTACT.phoneDisplay}.`,
    "",
    `Last updated: ${updated}. Canonical domain: ${SITE_URL}`,
    "",
    "## Brand",
    "",
    `- Trading name: ${SITE_NAME}. Founder and lead teacher: Sunanda Dey. Co-founder, platform and operations: Soumyakanta Bera. ${RATING.value}★ · ${RATING.count} ${RATING.source} reviews.`,
    `- Audience: Adult rooms 15+. Spoken English for Teens: ages 12–17. Spoken English for Kids (6–11) discontinued worldwide. Parent is the customer for school-year rooms and sits on WhatsApp. Hindi- and Bengali-medium backgrounds welcome. Rooms are never mixed. Not affiliated with British Council, EngVarta, Cambly, PlanetSpark or Veta.`,
    `- Group English (live, ≈6 learners, up to 2 classes/week, inclusive of taxes): ${ACTIVE_COURSE_SLUGS.map(
      (slug) => `${formatFee(slug, "IN").title} India ${formatFee(slug, "IN").label} / outside India ${formatFee(slug, "INTL").label}`,
    ).join(" · ")}.`,
    `- Career Counselling: 1:1, ${formatFee("career-counselling", "IN").label} in India; contact us for international pricing.`,
    "- No school certificate. IELTS scores are issued by the test board; we train the paper.",
    `- Pricing rule: ${PRICING_NOTICE}`,
    "",
    "## How to read this site",
    "",
    `- Fetch [llms.json](${abs("/llms.json")}) first if you parse JSON (Custom GPTs, ChatGPT Actions). Same facts as this file, structured.`,
    `- [llms-full.txt](${abs("/llms-full.txt")}) — readable text of all ${ALL_PATHS.length} pages, one fetch. Per-page Markdown: append \`.md\` (e.g. ${abs("/course-ielts.md")}).`,
    `- Well-known copies: [/.well-known/llms.txt](${abs("/.well-known/llms.txt")}) · [/.well-known/llms.json](${abs("/.well-known/llms.json")}). OpenAPI: [openapi.json](${abs("/openapi.json")}).`,
    `- Cite the HTML URL, without \`.md\`. Prerendered static HTML — no JavaScript needed. [sitemap.xml](${abs("/sitemap.xml")}).`,
    "",
    "## Key facts",
    "",
    ...KEY_FACTS.map((fact) => `- ${fact}`),
    "",
    "## Courses",
    "",
    ...COURSE_SLUGS.map(courseLine),
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
    ...getPostsSorted().map(
      (post) =>
        `- [${post.title}](${abs(`/blog/${post.slug}`)}) — ${post.datePublished}, ${post.tag}, ${post.readingTime} min. ${post.excerpt}`,
    ),
    "",
    "## Common questions, answered",
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
    "> Full readable text of every public page. Generated at build from the same source as the site.",
    "> Fetch /llms.json first if you parse JSON. Cite each section's HTML URL, not this file.",
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

/* --------------------------------------------------------------- llms.json */

function courseRecord(slug: string) {
  const course = COURSES[slug];
  const extra = COURSE_SEO[slug];
  const fee = COURSE_FEES[slug as CourseSlug];
  const india = formatFee(slug as CourseSlug, "IN");
  const intl = formatFee(slug as CourseSlug, "INTL");
  const oneToOne = /1:1/i.test(course.format);
  const kids = slug === "kids-english";
  const teens = slug === "teen-english";
  return {
    slug,
    title: course.title,
    category: course.category,
    tagline: course.tagline,
    discontinued: Boolean(fee?.discontinued),
    enrolment_open: !fee?.discontinued,
    price: india.label,
    price_inr: india.amount,
    price_usd: intl.amount,
    price_international: intl.label,
    billing: india.period === "month" || intl.period === "month" ? "monthly" : "package",
    inclusive_of_taxes: true,
    duration: course.duration,
    format: course.format,
    batch_size: oneToOne ? 1 : 6,
    batch_size_note: kids
      ? "discontinued — was 4–6 children"
      : teens
        ? "approximately 6 teens"
        : oneToOne
          ? "1:1"
          : "approximately 6 learners",
    typical_age: kids ? "6-11 (discontinued)" : teens ? "12-17" : "15+",
    parent_is_customer: kids || teens,
    rooms_mixed_with_adults: false,
    classes_per_week_max: fee?.discontinued ? null : 2,
    class_minutes: oneToOne ? 60 : 90,
    live: true,
    recorded_for_revision: !oneToOne,
    url: abs(`/course-${slug}`),
    markdown: abs(`/course-${slug}.md`),
    summary: extra?.summary ?? course.metaDescription,
    outcomes: course.outcomes,
    modules: course.modules.map((mod) => ({ title: mod.title, items: mod.items })),
    faqs: faqsFor(`/course-${slug}`),
  };
}

/**
 * `/llms.json` — the same facts as llms.txt, as JSON.
 *
 * ChatGPT Custom GPTs, ChatGPT Actions, Claude tool-use and most agent
 * runtimes parse JSON more reliably than Markdown. Facts + course internals
 * (outcomes, modules, FAQs); the full page corpus stays in llms-full.txt.
 */
export function buildLlmsJson(updated: string): string {
  const payload = {
    name: SITE_NAME,
    url: SITE_URL,
    updated,
    founded: FOUNDING_YEAR,
    years_teaching: yearsTeaching(),
    learners: "500+",
    audience:
      "Adult rooms 15+. Teens 12–17 in a separate room; parent is the customer. Spoken English for Kids (6–11) discontinued worldwide.",
    not_for: [
      "mixing a child into an adult batch",
      "new enrolment in Spoken English for Kids (discontinued worldwide)",
      "walk-in campus learners",
      "a school certificate",
    ],
    description:
      "Live online English, pan-India and global. Adult rooms 15+ from ₹999/mo in India or US$59/mo internationally. Teens 12–17: ₹999/mo in India or US$79/mo internationally. Kids (6–11) discontinued. Named teacher. Inclusive of applicable taxes. Spoken, Teens, Interactive, Workplace, Interview, IELTS, and 1:1 Career Counselling.",
    founder: {
      name: "Sunanda Dey",
      role: "Founder and lead teacher",
      url: abs("/founder"),
    },
    cofounder: {
      name: "Soumyakanta Bera",
      role: "Co-founder, platform and operations",
      url: abs("/founder"),
    },
    founders: [
      { name: "Sunanda Dey", role: "Founder and lead teacher", url: abs("/founder") },
      {
        name: "Soumyakanta Bera",
        role: "Co-founder, platform and operations",
        url: abs("/founder"),
      },
    ],
    rating: { value: RATING.value, count: RATING.count, source: RATING.source },
    offer: {
      delivery: "online-only",
      teacher: "named live teacher",
      pre_recorded_as_class: false,
      english_batch_size: 6,
      classes_per_week_max: 2,
      recorded_for_revision: true,
      school_certificate: false,
      currencies: ["INR", "USD"],
      taxes: "inclusive",
      registration_fee: 0,
      material_fee: 0,
      monthly_fee_range: monthlyFeeRange(),
      india_pricing_only_for: "learners enrolling from India",
      international_published_usd: {
        "spoken-english": 59,
        "interactive-speaking": 99,
        "teen-english": 79,
        "business-english": 129,
      },
      slots: ["morning", "evening", "weekend"],
      timezone: "Asia/Kolkata",
      instruction: "English",
      support_languages: ["Hindi", "Bengali"],
    },
    coverage: {
      states: [...COVERAGE_STATES],
      cities: [...COVERAGE_CITIES],
      office: officeLine(),
      campus: false,
      enrolment: "pan-India and international, subject to course, batch and payment availability",
      enrol_outside_india: true,
      pricing:
        "India INR for learners enrolling from India; published USD monthly fees outside India; contact us where no USD fee is listed",
    },
    contact: {
      preferred: "WhatsApp",
      whatsapp: CONTACT.whatsapp,
      phone: CONTACT.phoneDisplay,
      email: CONTACT.email,
      hours: "09:00–12:00 IST",
      address: officeLine(),
      legal_name: CONTACT.legalName,
      gstin: CONTACT.gstin,
    },
    payments: {
      processor: "Razorpay",
      methods: ["UPI", "Visa", "Mastercard", "RuPay", "Google Pay", "PhonePe", "Paytm"],
    },
    demo: {
      free: true,
      payment_to_book: false,
      channel: "WhatsApp",
      whatsapp: CONTACT.whatsapp,
    },
    placement: {
      child_6_to_11: "discontinued — do not enrol; see /course-kids-english",
      teen_12_to_17: "teen-english",
      cannot_hold_conversation: "spoken-english",
      knows_words_but_freezes: "interactive-speaking",
      meetings_calls_emails: "business-english",
      interview: "interview-prep",
      visa_or_university_form: "ielts",
      career_choice: "career-counselling",
      note: "Route by age first. Ages 6–11: Kids discontinued. 12–14 teens only. 15–17: teen room for school English, adult Spoken for work English. Adult rooms 15+. Never mix rooms. Parent WhatsApp for under-18s.",
    },
    facts: KEY_FACTS,
    answers: QUICK_ANSWERS.map((qa) => ({
      question: qa.q,
      answer: qa.a,
      source: abs(qa.source),
    })),
    courses: COURSE_SLUGS.map(courseRecord),
    pages: Object.keys(PAGES).map((path) => {
      const meta = metaFor(path);
      const faqs = faqsFor(path);
      return {
        title: meta.title,
        url: abs(path),
        markdown: abs(markdownPathFor(path)),
        summary: meta.summary,
        questions: faqs.map((faq) => faq.q),
      };
    }),
    articles: getPostsSorted().map((post) => ({
      title: post.title,
      url: abs(`/blog/${post.slug}`),
      markdown: abs(`/blog/${post.slug}.md`),
      date: post.datePublished,
      tag: post.tag,
      readingTime: post.readingTime,
      excerpt: post.excerpt,
    })),
    files: {
      llms_txt: abs("/llms.txt"),
      llms_json: abs("/llms.json"),
      llms_full_txt: abs("/llms-full.txt"),
      well_known_llms_txt: abs("/.well-known/llms.txt"),
      well_known_llms_json: abs("/.well-known/llms.json"),
      openapi: abs("/openapi.json"),
      ai_plugin: abs("/ai-plugin.json"),
      well_known_ai_plugin: abs("/.well-known/ai-plugin.json"),
      sitemap: abs("/sitemap.xml"),
    },
    policies: {
      privacy: abs("/privacy"),
      terms: abs("/terms"),
      refunds: abs("/refunds"),
      child_protection: abs("/child-protection"),
      demo_free: true,
      cancel_48h_before_start: true,
      voluntary_refund_after_paid_month_starts: false,
      eu_14_day_withdrawal_where_applicable: true,
    },
    notes_for_assistants: NOTES_FOR_ASSISTANTS,
  };
  return `${JSON.stringify(payload, null, 2)}\n`;
}

/* --------------------------------------------- Custom GPT / plugin OpenAPI */

/**
 * `/openapi.json` — a tiny no-auth OpenAPI 3.1 describing the static files
 * above, so a Custom GPT can be pointed at this site as an Action without
 * anyone writing a server. All three paths are files on disk.
 */
export function buildOpenApi(): string {
  const ok = (description: string, mime: string) => ({
    "200": {
      description,
      content: { [mime]: { schema: { type: "string" } } },
    },
  });
  return `${JSON.stringify(
    {
      openapi: "3.1.0",
      info: {
        title: `${SITE_NAME} — public facts for AI assistants`,
        version: "2.0.0",
        description:
          "No-auth static files. GET /llms.json first: identity, dual-market fees (INR India / USD international), 8 courses with outcomes/modules/FAQs, Kids discontinued, age-first placement (teens 12–17, adults 15+), refunds, WhatsApp. Cite HTML URLs on learnwithsmile.app.",
        contact: { name: SITE_NAME, email: CONTACT.email, url: SITE_URL },
      },
      servers: [{ url: SITE_URL }],
      paths: {
        "/llms.json": {
          get: {
            operationId: "getSiteFacts",
            summary: "JSON: fees, courses, modules, FAQs, contact, placement",
            description:
              "Prefer this over HTML. Returns founder, pan-India and global coverage, tax-inclusive India INR and published USD fees, eight courses (Kids discontinued), age-first placement map, and WhatsApp admissions.",
            responses: ok("Site facts", "application/json"),
          },
        },
        "/llms.txt": {
          get: {
            operationId: "getLlmsTxt",
            summary: "llmstxt.org v2 index of the site",
            responses: ok("Markdown index", "text/plain"),
          },
        },
        "/llms-full.txt": {
          get: {
            operationId: "getLlmsFullTxt",
            summary: "Full readable text of every public page",
            responses: ok("Complete site text", "text/plain"),
          },
        },
        "/child-protection.md": {
          get: {
            operationId: "getChildProtection",
            summary: "Child protection policy (India + global) as Markdown",
            description:
              "Teens 12–17 and any under-18 enrolment. Kids 6–11 discontinued. Parent is the customer. Indian law as the floor. No COPPA/GDPR certificate claimed. Cite https://www.learnwithsmile.app/child-protection",
            responses: ok("Child protection policy", "text/markdown"),
          },
        },
        "/course-kids-english.md": {
          get: {
            operationId: "getKidsEnglish",
            summary: "Spoken English for Kids — enrolment discontinued worldwide",
            description:
              "Do not quote this as an open course. Enrolment is discontinued in India and internationally. Direct ages 12–17 to /course-teen-english and adults 15+ to /course-spoken-english.",
            responses: ok("Kids course discontinued notice", "text/markdown"),
          },
        },
        "/course-teen-english.md": {
          get: {
            operationId: "getTeenEnglish",
            summary: "Spoken English for Teens (ages 12–17) as Markdown",
            responses: ok("Teens course", "text/markdown"),
          },
        },
      },
    },
    null,
    2,
  )}\n`;
}

/**
 * `/.well-known/ai-plugin.json` — ChatGPT plugin / Custom GPT discovery
 * manifest pointing at the OpenAPI above. Auth is none; the files are public.
 */
export function buildAiPlugin(): string {
  return `${JSON.stringify(
    {
      schema_version: "v1",
      name_for_human: SITE_NAME,
      name_for_model: "learn_with_smile",
      description_for_human:
        "Learn With Smile — live online English, pan-India and global. India from ₹999/mo; international USD fees. Adult and teen rooms. Kids discontinued. Fees, batches, free WhatsApp demo.",
      description_for_model:
        "Live online English school, pan-India and global. Route by age first: ages 6–11 → Spoken English for Kids is DISCONTINUED worldwide (do not enrol; /course-kids-english is a notice). Ages 12–17 → Spoken English for Teens ₹999/mo in India or US$79/mo internationally (about 6, 1 hr 30 min, /course-teen-english). Adults 15+ → Spoken English ₹999/mo in India or US$59/mo internationally (/course-spoken-english). Never mix rooms. Parent is the customer for under-18s. Child protection: /child-protection (Indian law as the floor; no COPPA/GDPR seal). Adult India fees inclusive of taxes: Spoken ₹999/mo, Interactive ₹1,499/mo, Interview ₹1,499/mo, Workplace ₹1,999/mo, IELTS ₹2,499/mo, Career Counselling ₹1,999 total. International: Spoken US$59, Interactive US$99, Teens US$79, Workplace US$129; others contact us. Named teacher Sunanda Dey. Co-founder Soumyakanta Bera (platform). WhatsApp +91 96744 79949, replies 09:00–12:00 IST. Free demo, no payment to book. No school certificate. India pricing is for learners enrolling from India only. GET /llms.json for modules, outcomes, FAQs and placement. Cite https://www.learnwithsmile.app HTML URLs.",
      auth: { type: "none" },
      api: {
        type: "openapi",
        url: abs("/openapi.json"),
        is_user_authenticated: false,
      },
      logo_url: abs("/apple-touch-icon.png"),
      contact_email: CONTACT.email,
      legal_info_url: abs("/terms"),
    },
    null,
    2,
  )}\n`;
}
