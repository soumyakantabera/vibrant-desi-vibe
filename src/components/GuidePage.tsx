import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { ArticleBody, ArticleToc } from "@/components/ArticleBody";
import { FaqSection } from "@/components/FaqSection";
import { SmartImage } from "@/components/SmartImage";
import { WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import { articleToc, type ArticleBody as ArticleBlocks } from "@/content/blog/blocks";
import type { Faq } from "@/lib/seo";
import { CHAT_MSG } from "@/lib/whatsapp";
import { formatIsoDate } from "@/lib/compare";
import { PackageBand } from "@/components/package/PackageSections";
import { CompareDiff } from "@/components/CompareDiff";

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
  shortAnswer,
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
  lang,
  packageBand = true,
  children,
}: {
  eyebrow: string;
  h1: ReactNode;
  standfirst: string;
  shortAnswer?: string;
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
  /** BCP 47 tag for a page written in another language (hi-IN, bn-IN). The
   *  site chrome stays English; the hero, article and FAQs carry this tag. */
  lang?: string;
  /** Off on pages that already show the full pricing grid. */
  packageBand?: boolean;
  children?: ReactNode;
}) {
  const toc = articleToc(body);
  return (
    <Layout waMessage={waMessage} footerImage={heroImage}>
      <section className="hero-light relative">
        <div className="absolute inset-0 z-0">
          <SmartImage src={heroImage} alt={heroAlt} fill priority sizes="100vw" />
          <div className="absolute inset-0 hero-veil" />
        </div>
        <div className="container-x py-12 md:py-20 max-w-3xl text-cream" lang={lang}>
          <nav aria-label="Breadcrumb" className="text-sm text-white/90">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/guides" className="hover:underline">
                  Guides
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
              Last updated <time dateTime={lastUpdated}>{formatIsoDate(lastUpdated)}</time>. Fees
              and institute bands checked against public 2026 prices.
            </p>
          )}
        </div>
      </section>

      <article className="section" lang={lang}>
        <div className="container-x max-w-3xl">
          {shortAnswer && (
            <div className="mb-8 rounded-2xl border border-brand/25 bg-brand-soft p-5">
              <p className="text-xs uppercase tracking-[0.14em] font-display font-bold text-ink/60">
                Short answer
              </p>
              <p className="mt-2 text-ink leading-relaxed font-medium">{shortAnswer}</p>
            </div>
          )}
          <ArticleToc items={toc} />
          <ArticleBody body={body} waMessage={waMessage} />
          {/* The dated market strip is the same on every guide, so it follows the
              page's own answer instead of opening it. */}
          <div lang="en-IN">
            <CompareDiff />
          </div>
        </div>
      </article>

      {packageBand && <PackageBand />}

      {children}

      <div lang={lang}>
        <FaqSection
          faqs={faqs}
          eyebrow="FAQs"
          title={faqTitle}
          subtitle="Straight answers. Message anytime; WhatsApp replies 10am–midnight IST every day."
          waMessage={waMessage}
        />
      </div>
    </Layout>
  );
}
