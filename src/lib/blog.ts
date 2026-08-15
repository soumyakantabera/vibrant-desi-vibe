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
    tag: "Business English",
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
