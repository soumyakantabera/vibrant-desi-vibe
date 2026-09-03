import { createFileRoute, Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { FaqSection } from "@/components/FaqSection";
import { FeatureCard, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { SmartImage } from "@/components/SmartImage";
import { IMG } from "@/lib/images";
import { PAGES, abs, pageHead } from "@/lib/seo";
import { body } from "@/content/pages/institutes";

const PATH = "/english-institute-comparison-india";
const UPDATED = "2026-09-03";

const ROWS = [
  {
    color: "brand" as const,
    icon: "smile" as const,
    tag: "Us",
    title: "Learn With Smile",
    fee: "From ₹999/mo GST in",
    body: "Named live teacher. Approximately 6 learners. 6-month map. 500+ learners, 7 years, Kolkata & pan-India. ₹0 real-class demo.",
  },
  {
    color: "indigo" as const,
    icon: "headset" as const,
    tag: "1:1 app",
    title: "EngVarta",
    fee: "₹2,700 / 25 calls",
    body: "15-minute audio 1:1 with Indian tutors. Strong on daily reps. No 6-month syllabus. They also write the “best of 2026” listicles.",
  },
  {
    color: "coral" as const,
    icon: "globe" as const,
    tag: "Native 1:1",
    title: "Cambly",
    fee: "₹8k–₹15k/mo if daily",
    body: "On-demand native video. Tutor quality varies. Beginners often freeze. Accent is the product, not a beginner map.",
  },
  {
    color: "sunshine" as const,
    icon: "trophy" as const,
    tag: "Badge",
    title: "British Council",
    fee: "₹8,800–₹16,000 / module",
    body: "CEFR syllabus, groups often 8–12. Buy this when a form needs the badge. Limited talking time per rupee.",
  },
  {
    color: "sage" as const,
    icon: "users" as const,
    tag: "Offline",
    title: "Veta-style rooms",
    fee: "₹3,500–₹10,000 / 2–4 mo",
    body: "Neighbourhood classrooms, many cities. Batches of 25–40 are common. Energy yes. Mic time is the complaint on Google.",
  },
];

export const Route = createFileRoute("/english-institute-comparison-india")({
  component: Page,
  head: () => {
    const head = pageHead(PATH);
    head.scripts.push(
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${abs(PATH)}#article`,
          headline: PAGES[PATH].title,
          description: PAGES[PATH].description,
          url: abs(PATH),
          mainEntityOfPage: { "@type": "WebPage", "@id": abs(PATH) },
          inLanguage: "en-IN",
          datePublished: "2026-09-02",
          dateModified: UPDATED,
          author: {
            "@type": "Person",
            "@id": `${abs("/founder")}#person`,
            name: "Sunanda Dey",
            url: abs("/founder"),
          },
          publisher: { "@id": `${abs("/")}#organization` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Live English class options in India, 2026 — fees and fit",
          itemListOrder: "https://schema.org/ItemListUnordered",
          numberOfItems: ROWS.length,
          itemListElement: ROWS.map((row, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: row.title,
            description: `${row.fee}. ${row.body}`,
          })),
        }),
      },
    );
    head.meta.push({ property: "article:modified_time", content: UPDATED });
    return head;
  },
});

function Page() {
  const page = PAGES[PATH];
  const waMessage =
    "Hi, I'm comparing English institutes. Can you tell me if a live batch of around 6 fits me?";
  return (
    <Layout waMessage={waMessage} footerImage={IMG.speaking}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={IMG.speaking}
            alt="Indian professionals comparing live English class options"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/88 via-brand-deep/75 to-indigo-pop/60" />
        </div>
        <div className="container-x py-12 md:py-20 max-w-3xl text-cream">
          <nav aria-label="Breadcrumb" className="text-sm text-white/90">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/why-us" className="hover:underline">
                  Why Us
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-sunshine font-semibold">Compare classes</li>
            </ol>
          </nav>
          <span className="eyebrow eyebrow-white mt-5">
            <Icon name="chart" size={14} /> Comparison · 2026 fees & fit
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">
            Compare English classes in India —{" "}
            <span className="text-sunshine">₹999 live vs apps and institutes</span>
          </h1>
          <p className="mt-5 text-lg text-white/95">
            Learn With Smile vs EngVarta, Cambly, British Council and Veta-style rooms. We sell one
            row. 500+ learners, 7 years, approximately 6 per batch. ₹0 demo.
          </p>
          <p className="mt-4 text-sm text-white/80">
            Last updated <time dateTime={UPDATED}>{UPDATED}</time>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WaButton message={waMessage} variant="sun" size="lg">
              Free Demo on WhatsApp
            </WaButton>
            <Link to="/english-class-fees-india" className="btn btn-white btn-lg">
              See the fee table
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Five products. One market.</p>
          <h2 className="mt-2 max-w-3xl">Who each institute is actually for</h2>
          <p className="mt-3 max-w-3xl text-ink/80">
            Not a ranking. Public 2026 bands. Confirm on their site before you pay.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ROWS.map((row) => (
              <FeatureCard key={row.title} icon={row.icon} color={row.color} title={row.title}>
                <p className="text-xs font-bold uppercase tracking-wide text-ink/55">{row.tag}</p>
                <p className="mt-1 font-display text-lg font-extrabold text-ink">{row.fee}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{row.body}</p>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <article className="section pt-0">
        <div className="container-x max-w-5xl">
          <ArticleBody body={body} />
        </div>
      </article>

      <FaqSection
        faqs={page.faqs ?? []}
        eyebrow="FAQs"
        title="Institutes — questions people actually ask"
        subtitle="Straight answers. Message anytime; WhatsApp replies 09:00–12:00 IST."
        waMessage={waMessage}
      />

      <section className="relative overflow-hidden py-14 md:py-16" data-cta-location="final_cta">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x max-w-2xl text-center text-cream">
          <h2 className="text-2xl text-cream md:text-3xl">Sit the room. Count your minutes.</h2>
          <p className="mt-3 text-white">
            ₹0 live class. Approximately 6 learners. From ₹999/mo. Then compare GST and the badge.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WaButton message={waMessage} variant="sun" size="lg">
              Book a Free Demo
            </WaButton>
            <Link to="/english-career" className="btn btn-white btn-lg">
              See all 6 courses
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
