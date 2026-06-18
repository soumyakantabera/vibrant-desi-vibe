import type { ReactNode } from "react";
import { Icon } from "./Icon";

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  waMessage: string;
};

export function TestimonialSlider({ items, ctaLabel = "I Want This Result" }: { items: Testimonial[]; ctaLabel?: string }) {
  return (
    <>
      {/* Desktop grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {items.map((t, i) => <Card key={i} t={t} ctaLabel={ctaLabel}/>)}
      </div>
      {/* Mobile/tablet slider */}
      <div className="lg:hidden -mx-5">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 pb-4">
          {items.map((t, i) => (
            <div key={i} className="snap-center shrink-0 w-[88%] sm:w-[60%]">
              <Card t={t} ctaLabel={ctaLabel}/>
            </div>
          ))}
        </div>
        <div className="text-center text-xs text-ink/75 font-semibold mt-2">← swipe to read more →</div>
      </div>
    </>
  );
}

function Card({ t, ctaLabel }: { t: Testimonial; ctaLabel: string }) {
  const wa = `https://wa.me/919674479949?text=${encodeURIComponent(t.waMessage)}`;
  return (
    <article className="card-soft h-full flex flex-col bg-gradient-to-br from-white to-brand-soft/40">
      <div className="h-10 w-10 rounded-full bg-sunshine/20 text-sunshine flex items-center justify-center mb-3">
        <Icon name="quote" size={22}/>
      </div>
      <blockquote className="text-ink/85 leading-relaxed text-[15px] flex-1">"{t.quote}"</blockquote>
      <div className="mt-5 pt-4 border-t border-border">
        <div className="font-display font-bold text-ink">{t.name}</div>
        <div className="text-xs text-ink/85">{t.detail}</div>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm mt-3 w-full">
          <Icon name="whatsapp" size={16}/>{ctaLabel}
        </a>
      </div>
    </article>
  );
}

export function blurb(_: ReactNode) { return null; }
