import type { ReactNode } from "react";
import { Icon } from "./Icon";

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  waMessage: string;
};

export function TestimonialSlider({
  items,
  ctaLabel = "I Want This Result",
}: {
  items: Testimonial[];
  ctaLabel?: string;
}) {
  // One copy of each testimonial in the DOM, laid out two ways by CSS.
  //
  // This used to render the list twice — a `hidden lg:grid` desktop grid and a
  // `lg:hidden` mobile slider — so a reader saw each quote once but the
  // prerendered HTML contained every testimonial twice. Because these pages are
  // static HTML, that is exactly what crawlers read: each named learner
  // appeared twice in the served markup, and duplicated
  // passages are what make a retrieved chunk look untrustworthy to an AI
  // assistant quoting the page.
  //
  // Marking the second copy `aria-hidden`/`data-nosnippet` would have hidden it
  // from assistive tech at one breakpoint and from snippets at both. Rendering
  // it once and switching layout with flex → grid removes the duplicate
  // entirely, which is the actual fix.
  return (
    <>
      <div className="-mx-5 lg:mx-0">
        <div
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 pb-4
            lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0
          "
        >
          {items.map((t, i) => (
            <div key={i} className="snap-center shrink-0 w-[88%] sm:w-[60%] lg:w-auto lg:shrink">
              <Card t={t} ctaLabel={ctaLabel} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-ink/75 font-semibold mt-2 lg:hidden">
        ← swipe to read more →
      </div>
    </>
  );
}

function Card({ t, ctaLabel }: { t: Testimonial; ctaLabel: string }) {
  const wa = `https://wa.me/919674479949?text=${encodeURIComponent(t.waMessage)}`;
  return (
    <article
      className="card-soft h-full flex flex-col bg-gradient-to-br from-white to-brand-soft/40"
      data-cta-location="testimonial"
    >
      <div className="h-10 w-10 rounded-full bg-sunshine/20 text-sunshine flex items-center justify-center mb-3">
        <Icon name="quote" size={22} />
      </div>
      <blockquote className="text-ink/85 leading-relaxed text-[15px] flex-1">
        "{t.quote}"
      </blockquote>
      <div className="mt-5 pt-4 border-t border-border">
        <div className="font-display font-bold text-ink">{t.name}</div>
        <div className="text-xs text-ink/85">{t.detail}</div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa btn-sm mt-3 w-full"
        >
          <Icon name="whatsapp" size={16} />
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}

export function blurb(_: ReactNode) {
  return null;
}
