import { SectionHeader, WaButton } from "@/components/ui-bits";
import { Icon } from "@/components/Icon";
import type { Faq } from "@/lib/seo";

/**
 * Renders the FAQ list that the page's FAQPage JSON-LD describes.
 *
 * These two must always ship together. Google treats FAQPage structured data
 * whose questions are not visible on the rendered page as a structured-data
 * violation and drops the rich result — and an AI assistant that fetches the
 * page finds nothing to quote. The questions are also the highest-value copy
 * on the site for AI answer engines, because they are phrased the way people
 * actually ask assistants ("how much do online spoken English classes cost in
 * India?") rather than the way marketers write headings.
 */
export function FaqSection({
  faqs,
  eyebrow = "FAQs",
  title = "Questions People Actually Ask",
  subtitle = "Straight answers. Message anytime; WhatsApp replies 09:00–12:00 IST.",
  waMessage = "Hi, I have a question about your classes.",
  className = "section bg-cream",
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  waMessage?: string;
  className?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section className={className} id="faq">
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {faqs.map((f, i) => (
            // The answer stays in the DOM whether open or shut, so crawlers read
            // all of it either way; opening the first two just makes the page
            // read as an answer page to a human landing from a search result.
            <details
              key={f.q}
              className="card-soft group transition hover:border-brand/30 hover:shadow-lg"
              open={i < 2}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25">
                <h3 className="font-display font-bold text-ink text-base leading-snug">{f.q}</h3>
                <Icon
                  name="arrow-right"
                  size={16}
                  className="text-brand rotate-90 group-open:rotate-[-90deg] transition shrink-0 mt-1"
                />
              </summary>
              <p className="mt-3 text-ink/90 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center" data-cta-location="faq">
          <WaButton message={waMessage} size="lg">
            Ask Your Own Question on WhatsApp
          </WaButton>
        </div>
      </div>
    </section>
  );
}
