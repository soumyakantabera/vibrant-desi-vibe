import { CHAT_CTA, DEMO_CTA, DEMO_MSG, waLink } from "@/lib/whatsapp";
import { BrandIcon } from "./BrandIcon";
import { Icon } from "./Icon";

export function WhatsAppFab({
  message = "Hi! I want to know more about Learn With Smile courses.",
}: {
  message?: string;
}) {
  const whatsapp = waLink(message);
  const consult = waLink(DEMO_MSG);
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
        className="sm:hidden fixed bottom-3 inset-x-3 z-50 grid grid-cols-2 gap-2 rounded-2xl bg-white/95 backdrop-blur p-2 shadow-2xl ring-1 ring-ink/10"
        data-cta-location="sticky"
        aria-label="Contact Learn With Smile"
      >
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa btn-sm justify-center px-2"
          data-cta-goal="whatsapp_chat"
        >
          <BrandIcon name="whatsapp" size={16} color="#053b1e" /> {CHAT_CTA}
        </a>
        <a
          href={consult}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sun btn-sm justify-center px-2"
          data-cta-goal="free_consultation"
        >
          <Icon name="compass" size={16} /> {DEMO_CTA}
        </a>
      </div>
    </>
  );
}
