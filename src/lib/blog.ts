/**
 * The blog's source of truth.
 *
 * What was broken
 * ---------------
 * The five posts existed only as an inline array in `src/routes/blog.tsx`, with
 * a title, an excerpt, a tag and an image. There was no `slug`, so no article
 * URL existed; `/blog` rendered the five titles as unlinked `<h3>` elements.
 * Nothing was in the sitemap, and the `Blog` JSON-LD emitted `blogPost` entries
 * with a `headline` but no `url` and no date — which makes them ineligible for
 * anything at all. The blog was five headlines with nowhere to go.
 *
 * Everything a `BlogPosting` needs now lives here, and `ALL_PATHS` in
 * `src/lib/seo.ts` derives the article URLs from it, so the routes, the
 * prerendered HTML, the sitemap, llms.txt and the Markdown mirrors are all
 * generated from this one array and cannot drift apart.
 *
 * Kept free of Vite-only imports (image `src` is an `IMG` key, not an import)
 * so `scripts/prerender.mjs` can read it — the same constraint `seo.ts` is
 * under, for the same reason.
 */

export type BlogPost = {
  /** URL segment: /blog/<slug>. */
  slug: string;
  /** On-page H1 — may run longer than the <title>. */
  title: string;
  /** <title> for the article page, ≤58 chars. */
  seoTitle: string;
  /** Meta description, 150–158 chars. */
  description: string;
  /** Card text on /blog. */
  excerpt: string;
  tag: string;
  /** Key into `IMG` in src/lib/images.ts. Resolved at render time. */
  img: string;
  imgAlt: string;
  author: string;
  /** ISO date. Required by BlogPosting; without it nothing is eligible. */
  datePublished: string;
  dateModified: string;
  /** Minutes, for `timeRequired`. */
  readingTime: number;
  wordCount: number;
  /** In-body and footer links to the courses the article is actually about. */
  relatedCourses: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-spoken-english-class-india",
    title: "How to Choose a Spoken English Class in India: 7 Checks",
    seoTitle: "Choose a Spoken English Class | 7 Checks",
    description:
      "Seven checks for any Indian English class: batch cap, speaking minutes, GST, named teacher, real demo, review patterns, certificate vs speaking. ₹999/mo.",
    excerpt:
      "Cap, minutes, GST, named teacher, real demo, review patterns, certificate. Run them on us too.",
    tag: "Guides",
    img: "speaking",
    imgAlt: "Adult learner comparing online English class options on a laptop",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 4,
    wordCount: 448,
    relatedCourses: ["/course-spoken-english"],
  },
  {
    slug: "spoken-english-or-ielts",
    title: "Spoken English or IELTS? Which Course Fits in 2 Minutes",
    seoTitle: "Spoken English or IELTS? Pick in 2 Minutes",
    description:
      "Spoken English ₹999/mo, 6 months. Workplace ₹1,499/mo. IELTS ₹1,999/mo. A 2-minute picker so you do not buy Band 7 coaching when you still cannot hold a call.",
    excerpt: "Different clocks, different fees. Buy the course that matches the bottleneck.",
    tag: "Spoken English",
    img: "ielts",
    imgAlt: "Learner choosing between spoken English practice and IELTS writing",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 3,
    wordCount: 411,
    relatedCourses: ["/course-spoken-english", "/course-ielts"],
  },
  {
    slug: "speaking-minutes-in-a-60-minute-class",
    title: "Speaking Minutes in a 60-Minute English Class",
    seoTitle: "Speaking Minutes in a 60-Min English Class",
    description:
      "Your mic in 60 minutes: 6–8 min in a batch of 8, 1–2 min in a room of 30, 50 min in 1:1. Why months on a brochure are not speaking minutes. ₹999/mo, max 8.",
    excerpt: "Fluency is minutes you spoke, not months on the brochure. Here is the arithmetic.",
    tag: "Spoken English",
    img: "groupClass",
    imgAlt: "Small live English class where every learner gets a turn to speak",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 4,
    wordCount: 450,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
  },
  {
    slug: "english-for-office-meetings",
    title: "English for Office Meetings: 12 Phrases You Can Actually Use",
    seoTitle: "English for Office Meetings: Practical Phrases",
    description:
      "Practical English for entering meetings, giving updates, clarifying, disagreeing and closing with decisions — written for Indian working professionals.",
    excerpt:
      "Useful meeting English for updates, questions and disagreement — without corporate jargon.",
    tag: "Workplace English",
    img: "presentation",
    imgAlt: "Indian professional speaking during an online office meeting",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 6,
    wordCount: 950,
    relatedCourses: ["/course-business-english"],
  },
  {
    slug: "english-for-bpo-customer-support",
    title: "English for BPO and Customer Support Calls: A Practical Guide",
    seoTitle: "English for BPO & Customer Support Calls",
    description:
      "A practical guide to English for BPO and customer support calls: clarify problems, handle complaints, explain next steps and close without confusion.",
    excerpt:
      "Clear call handling, complaint language and recovery phrases — no fake accent promises.",
    tag: "Workplace English",
    img: "businessEnglish",
    imgAlt: "Customer support professional speaking with a client online",
    author: "Sunanda Dey",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    readingTime: 6,
    wordCount: 977,
    relatedCourses: ["/course-business-english", "/course-interview-prep"],
  },
  {
    slug: "5-speaking-habits-that-killed-my-hesitation",
    title: "5 Speaking Habits That Killed My Hesitation in 30 Days",
    seoTitle: "5 Speaking Habits That Beat English Hesitation",
    description:
      "Five small daily speaking habits that remove hesitation in about a month. No apps, no expensive course — just the drills we give our own beginner students.",
    excerpt: "The smallest daily ritual that built my fluency — no apps, no expensive courses.",
    tag: "Spoken English",
    img: "girlReading",
    imgAlt: "Indian student practising English speaking aloud at a desk",
    author: "Sunanda Dey",
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    readingTime: 8,
    wordCount: 1654,
    relatedCourses: ["/course-spoken-english", "/course-interactive-speaking"],
  },
  {
    slug: "band-7-writing-4-paragraph-template",
    title: "Band 7 Writing: The 4-Paragraph Template That Just Works",
    seoTitle: "IELTS Task 2: The 4-Paragraph Band 7 Template",
    description:
      "A repeatable four-paragraph structure for IELTS Writing Task 2, with the exact sentence functions, timings and word counts that hold up under Band 7 marking.",
    excerpt:
      "A simple Task 2 structure our students use to write Band 7 essays under time pressure.",
    tag: "IELTS",
    img: "ielts",
    imgAlt: "IELTS candidate writing a Task 2 essay under timed conditions",
    author: "Sunanda Dey",
    datePublished: "2026-08-20",
    dateModified: "2026-08-20",
    readingTime: 7,
    wordCount: 1381,
    relatedCourses: ["/course-ielts"],
  },
  {
    slug: "5-email-phrases-that-sound-more-professional",
    title: "5 Email Phrases That Make You Sound More Professional",
    seoTitle: "5 Email Phrases That Sound More Professional at Work",
    description:
      "Five wording swaps that make workplace emails sound confident rather than apologetic, with before-and-after examples from real Indian office correspondence.",
    excerpt: "Small wording swaps that instantly upgrade your workplace emails.",
    tag: "Workplace English",
    img: "businessEnglish",
    imgAlt: "Professional writing a work email on a laptop in an office",
    author: "Sunanda Dey",
    datePublished: "2026-08-22",
    dateModified: "2026-08-22",
    readingTime: 7,
    wordCount: 1476,
    relatedCourses: ["/course-business-english"],
  },
  {
    slug: "tell-me-about-yourself-in-60-seconds",
    title: "How to Answer 'Tell Me About Yourself' in 60 Seconds",
    seoTitle: "'Tell Me About Yourself': A 60-Second Answer Formula",
    description:
      "A three-part structure for the most common interview opener, with full example answers for freshers, career switchers and experienced professionals in India.",
    excerpt: "A simple structure our students use to nail the most common interview opener.",
    tag: "Interview Prep",
    img: "presentation",
    imgAlt: "Candidate answering questions in an online job interview",
    author: "Sunanda Dey",
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    readingTime: 8,
    wordCount: 1584,
    relatedCourses: ["/course-interview-prep"],
  },
  {
    slug: "bpo-to-client-facing-role-roadmap",
    title: "BPO to Client-Facing Role: The Realistic 6-Month Roadmap",
    seoTitle: "BPO to Client-Facing Role: A Realistic 6-Month Plan",
    description:
      "A month-by-month plan for moving from back-office BPO work into a client-facing role in India — what to learn, in what order, and how to prove it in interviews.",
    excerpt: "What to learn, in what order, and how to talk about it in interviews.",
    tag: "Career",
    img: "career",
    imgAlt: "Professional presenting to clients in a meeting room",
    author: "Sunanda Dey",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    readingTime: 9,
    wordCount: 1874,
    relatedCourses: ["/course-career-counselling", "/course-interview-prep"],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);

/** Newest first — the order /blog lists them in. */
export const getPostsSorted = (): BlogPost[] =>
  [...BLOG_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

/**
 * Up to `limit` other posts sharing this post's tag, falling back to the most
 * recent others so an article is never a dead end.
 */
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const others = getPostsSorted().filter((p) => p.slug !== slug);
  const sameTag = others.filter((p) => p.tag === post.tag);
  return [...sameTag, ...others.filter((p) => p.tag !== post.tag)].slice(0, limit);
}
