/*
 * <head> and FAQ list for course pages. Lives outside CoursePage.tsx because
 * route head() runs in the main bundle: importing it from the page component
 * file would pull the whole course page (and everything it renders) into the
 * JavaScript every page loads first.
 */
import type { CourseData } from "@/components/CoursePage";
import {
  CONTACT,
  CONTENT_REVISED,
  CONSULTATION_KEYWORDS,
  COURSE_SEO,
  OUTSIDE_INDIA_FEE_FAQ,
  SITE_NAME,
  SITE_URL,
  abs,
  breadcrumbLd,
  buildHead,
  faqLd,
  webPageLd,
} from "@/lib/seo";

/** Same text as monthSpan() in CourseVisuals.tsx, without importing the visuals. */
const monthSpan = (p: { from: number; to: number }) =>
  p.from === p.to ? `Month ${p.from}` : `Months ${p.from}–${p.to}`;

function parsePrice(p: string): number | null {
  const m = p.replace(/[, ]/g, "").match(/\u20b9(\d+)/);
  return m ? Number(m[1]) : null;
}

function workloadISO(d: string): string | undefined {
  // Rough mapping to Google's courseWorkload (ISO 8601 duration).
  const months = d.match(/(\d+)\s*month/i);
  const weeks = d.match(/(\d+)\s*week/i);
  if (months) return `P${months[1]}M`;
  if (weeks) return `P${weeks[1]}W`;
  if (/session/i.test(d)) return "PT3H";
  return undefined;
}

/**
 * FAQs shown on the page and fed to FAQPage schema: the course author's own
 * questions plus the AI-assistant-phrased ones from src/lib/seo.ts. Both the
 * visible accordion and the JSON-LD must render the same list, or Google flags
 * the structured data as not matching the page.
 */
export function courseFaqs(d: CourseData) {
  return [...(d.faqs ?? []), ...(COURSE_SEO[d.slug]?.extraFaqs ?? []), OUTSIDE_INDIA_FEE_FAQ];
}

export function courseSeo(d: CourseData) {
  const path = `/course-${d.slug}`;
  const url = abs(path);
  const extra = COURSE_SEO[d.slug];
  const price = parsePrice(d.price);
  const workload = workloadISO(d.duration);
  const faqs = courseFaqs(d);
  const ogImage = extra?.ogImage ?? "/og/default.jpg";

  // Batch days and total sessions vary. Do not turn the visible maximum of two
  // classes per week into an exact repeatCount or invent a future batch date.
  // Course list markup does not require a made-up recurring schedule.
  const courseInstance: Record<string, unknown> = {
    "@type": "CourseInstance",
    courseMode: "Online",
    inLanguage: "en-IN",
    location: { "@type": "VirtualLocation", url },
    maximumAttendeeCapacity: 6,
    instructor: {
      "@type": "Person",
      "@id": `${abs("/educator")}#person`,
      name: "Sunanda Dey",
      // Links to the Person entity described on /educator, rather than leaving a
      // bare name string that resolves to nothing.
      url: abs("/educator"),
      worksFor: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
      },
    },
  };

  const offers: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    category: d.format.includes("1:1") ? "Online 1:1 course" : "Online batch course",
    url,
    validFrom: "2026-10-25",
    valueAddedTaxIncluded: true,
    eligibleRegion: { "@type": "Country", name: "India", identifier: "IN" },
    areaServed: { "@type": "Country", name: "India", identifier: "IN" },
    seller: { "@id": `${SITE_URL}/#organization` },
  };
  if (price !== null) {
    offers.price = price;
    offers.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "INR",
      valueAddedTaxIncluded: true,
      unitText: d.slug === "demo-session" ? "SESSION" : /\/mo/i.test(d.price) ? "MONTH" : "PACKAGE",
    };
  }

  const jsonLd: unknown[] = [
    webPageLd({
      path,
      title: extra?.title ?? d.title,
      description: extra?.description ?? d.metaDescription,
      dateModified: extra?.dateModified ?? CONTENT_REVISED,
      ogImage,
    }),
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${url}#course`,
      name: d.title,
      alternateName: extra?.title,
      description: extra?.description ?? d.metaDescription,
      url,
      image: [abs(ogImage)],
      // The teaching language: Hindi/Marathi-medium courses are taught in that
      // language with English practice; the page itself stays en-IN.
      inLanguage: d.native ? `${d.native.lang}-IN` : "en-IN",
      ...(d.native ? { availableLanguage: [`${d.native.lang}-IN`, "en-IN"] } : {}),
      educationalLevel: (d.feeSlug ?? d.slug) === "spoken-english" ? "Beginner" : "Intermediate",
      ...(d.prerequisites ? { coursePrerequisites: d.prerequisites } : {}),
      typicalAgeRange: "15+",
      teaches: d.outcomes,
      timeRequired: workload,
      isAccessibleForFree: false,
      provider: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: CONTACT.legalName,
        taxID: CONTACT.gstin,
        url: SITE_URL,
      },
      offers,
      hasCourseInstance: courseInstance,
      // The complete package: every paid course includes Bolo, the practice app
      // (daily practice and video lessons) alongside the live classes.
      ...(d.slug !== "demo-session"
        ? {
            hasPart: [
              {
                "@type": "LearningResource",
                name: "Bolo practice app — daily practice",
                learningResourceType: "Interactive practice",
                description:
                  "Whole-conversation practice, word and phrase brush-ups, reading fluency, grammar in real texts and interactive grammar practice between live classes.",
                isAccessibleForFree: false,
              },
              {
                "@type": "LearningResource",
                name: "Bolo practice app — video lessons",
                learningResourceType: "Video lessons",
                description:
                  "Recorded lessons on grammar, speaking and fluency, thinking in English, fixing mind blanks and small natural phrases, chosen for the course.",
                isAccessibleForFree: false,
              },
            ],
          }
        : {}),
      // The month-by-month roadmap is the more exact syllabus when a course has
      // one: each section names its month span, which is what learners ask.
      syllabusSections: d.visuals
        ? d.visuals.roadmap.map((p, i) => ({
            "@type": "Syllabus",
            position: i + 1,
            name: `${monthSpan(p)}: ${p.title}`,
            description: p.tracks.map((t) => `${t.skill}: ${t.items.join("; ")}`).join(". "),
          }))
        : d.modules.map((m, i) => ({
            "@type": "Syllabus",
            position: i + 1,
            name: m.title,
            description: m.items.join(". "),
          })),
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "English & Career Courses", path: "/english-career" },
      { name: extra?.shortTitle ?? d.title, path },
    ]),
  ];

  if (faqs.length) jsonLd.push(faqLd(faqs));

  const revised = extra?.dateModified ?? CONTENT_REVISED;
  const head = buildHead({
    path,
    // Hand-written in COURSE_SEO rather than assembled here: the generated
    // "<title> Online \u2014 <price>, Approx. 6 Learners per Batch | Learn With Smile" form ran
    // to 70\u201387 characters and truncated in the SERP on all four courses.
    title: extra?.title ?? d.title,
    description: extra?.description ?? d.metaDescription,
    ogImage,
    jsonLd,
    keywords: extra?.keywords ?? CONSULTATION_KEYWORDS,
  });
  head.meta.push(
    { name: "revised", content: revised },
    { property: "og:updated_time", content: revised },
  );
  return head;
}
