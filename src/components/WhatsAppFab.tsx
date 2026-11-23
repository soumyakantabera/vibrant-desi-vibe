import { useEffect } from "react";
import { CHAT_CTA, DEMO_CTA, waLink, waMessageFor } from "@/lib/whatsapp";
import { applyIntlFees } from "@/lib/intl-fees";
import { usePageLabel } from "@/lib/use-page-label";
import { BrandIcon } from "./BrandIcon";
import { FeeText } from "./FeeText";
import { Icon } from "./Icon";

/** Phone bottom bar: each label stays on one line (type scales 10.5–12px with the
 * screen, so it fits down to 320px wide); the 40px tap height is kept. */
const BAR_BTN = "justify-center gap-1 whitespace-nowrap px-1.5 text-[clamp(10.5px,3.2vw,12px)]";

/**
 * WhatsApp messages state the India fee. For a visitor outside India (the boot
 * script's `lws-intl` class), swap those figures for the international list the
 * moment a wa.me link is pressed, so the chat opens with the price they saw.
 * Prerendered HTML and crawlers keep the rupee text.
 */
function useIntlWhatsAppFees() {
  useEffect(() => {
    const swap = (e: Event) => {
      if (!document.documentElement.classList.contains("lws-intl")) return;
      const a = (e.target as Element | null)?.closest?.("a[href^='https://wa.me/']");
      if (!(a instanceof HTMLAnchorElement)) return;
      const url = new URL(a.href);
      const text = url.searchParams.get("text");
      if (!text) return;
      const next = applyIntlFees(text, true);
      if (next === text) return;
      // encodeURIComponent, not searchParams: "+" for a space can show literally in WhatsApp.
      a.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(next)}`;
    };
    document.addEventListener("pointerdown", swap, true);
    document.addEventListener("click", swap, true);
    return () => {
      document.removeEventListener("pointerdown", swap, true);
      document.removeEventListener("click", swap, true);
    };
  }, []);
}

export function WhatsAppFab({ message }: { message?: string }) {
  useIntlWhatsAppFees();
  const page = usePageLabel();
  // Chat asks a question and already states the fee; the second button books
  // the ₹199 Demo Class. Both name the course when the page's message does.
  const whatsapp = waLink(waMessageFor("chat", message, page));
  const demo = waLink(waMessageFor("demo", message, page));
  return (
    <>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={CHAT_CTA}
        className="fixed bottom-5 right-5 z-50 hidden sm:block"
        data-cta-location="fab"
      >
        {/* Speech-bubble tail sits at the corner of the 24×24 mark, so the
            glyph has to sit inside the inscribed square or the tail clips
            the round. ~70% of the disc keeps the whole logo in the circle. */}
        <span className="relative flex items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl animate-wa-bob h-16 w-16 md:h-[68px] md:w-[68px] ring-[3px] ring-[#25D366]/35">
          <BrandIcon name="whatsapp" size={42} className="md:!h-[46px] md:!w-[46px]" />
        </span>
      </a>

      <div
        className="sm:hidden fixed bottom-3 inset-x-2 z-50 grid grid-cols-2 gap-1.5 rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-ink/10"
        data-cta-location="sticky"
        aria-label="Contact Learn With Smile"
      >
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-wa btn-sm ${BAR_BTN}`}
          data-cta-goal="whatsapp_chat"
        >
          <BrandIcon name="whatsapp" size={14} color="#053b1e" /> {CHAT_CTA}
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-sun btn-sm ${BAR_BTN}`}
          data-cta-goal="whatsapp_demo"
        >
          <Icon name="play" size={14} /> <FeeText text={DEMO_CTA} />
        </a>
      </div>
    </>
  );
}
