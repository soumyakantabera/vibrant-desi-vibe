import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { FaqSection } from "@/components/FaqSection";
import { SmartImage } from "@/components/SmartImage";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import type { ArticleBody as ArticleBlocks } from "@/content/blog/blocks";
import type { Faq } from "@/lib/seo";

/**
 * Shared shell for the long-form landing pages (`/spoken-english-classes-kolkata`,
 * `/english-class-fees-india`, `/best-online-spoken-english-classes-india`).
 *
 * Each of these exists because the site had no page at all for a query it
 * genuinely serves. They are long-form and answer-shaped rather than
 * brochure-shaped, because the thing that makes them worth ranking — and worth
 * an AI assistant citing — is that they answer the question honestly even for
 * someone who never buys anything.
 *
 * The visible FAQ list and the FAQPage JSON-LD come from the same `faqs` array
 * in src/lib/seo.ts, so they cannot disagree.
 */
export function GuidePage({
  eyebrow,
  h1,
  standfirst,
  heroImage,
  heroAlt,
  breadcrumb,
  body,
  faqs,
  faqTitle,
  waMessage,
  ctaTitle,
  ctaBody,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  h1: ReactNode;
  standfirst: string;
  heroImage: string;
  heroAlt: string;
  breadcrumb: string;
  body: ArticleBlocks;
  faqs: Faq[];
  faqTitle: string;
  waMessage: string;
  ctaTitle: string;
  ctaBody: string;
  /** Shown as a visible date on pages whose facts go stale (the fees guide). */
  lastUpdated?: string;
  children?: ReactNode;
}) {
  return (
    <Layout waMessage={waMessage} footerImage={heroImage}>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <SmartImage src={heroImage} alt={heroAlt} fill priority sizes="100vw" />
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
              <li className="text-sunshine font-semibold">{breadcrumb}</li>
            </ol>
          </nav>
          <span className="eyebrow eyebrow-white mt-5">
            <Icon name="book" size={14} /> {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl text-cream leading-[1.1]">{h1}</h1>
          <p className="mt-5 text-lg text-white/95">{standfirst}</p>
          {lastUpdated && (
            <p className="mt-4 text-sm text-white/80">
              Last updated <time dateTime={lastUpdated}>{lastUpdated}</time>
            </p>
          )}
        </div>
      </section>

      <article className="section">
        <div className="container-x max-w-3xl">
          <ArticleBody body={body} />
        </div>
      </article>

      {children}

      <FaqSection
        faqs={faqs}
        eyebrow="FAQs"
        title={faqTitle}
        subtitle="Straight answers. Anything else — ask us on WhatsApp, 7:00–22:00 IST."
        waMessage={waMessage}
      />

      <section className="relative py-14 md:py-16 overflow-hidden" data-cta-location="final_cta">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-deep via-indigo-pop to-coral" />
        <div className="container-x text-center text-cream max-w-2xl">
          <h2 className="text-cream text-2xl md:text-3xl">{ctaTitle}</h2>
          <p className="mt-3 text-white">{ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
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
