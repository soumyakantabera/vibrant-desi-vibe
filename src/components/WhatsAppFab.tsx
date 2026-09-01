import { CALL_LINK, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";
import { BrandIcon } from "./BrandIcon";
import { Icon } from "./Icon";

export function WhatsAppFab({
  message = "Hi! I want to know more about Learn With Smile courses.",
}: {
  message?: string;
}) {
  const whatsapp = waLink(message);
  return (
    <>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 hidden sm:block"
        data-cta-location="fab"
      >
        <span className="relative flex items-center justify-center rounded-full bg-white shadow-2xl animate-wa-bob h-16 w-16 md:h-[68px] md:w-[68px] ring-4 ring-[#25D366]/30">
          <BrandIcon name="whatsapp" size={42} />
        </span>
      </a>

      <div
        className="sm:hidden fixed bottom-3 inset-x-3 z-50 grid grid-cols-[0.8fr_1.2fr] gap-2 rounded-2xl bg-white/95 backdrop-blur p-2 shadow-2xl ring-1 ring-ink/10"
        data-cta-location="sticky"
        aria-label="Contact Learn With Smile"
      >
        <a
          href={CALL_LINK}
          className="btn btn-primary justify-center px-3"
          aria-label={`Call ${WHATSAPP_DISPLAY}`}
        >
          <Icon name="phone" size={17} /> Call Now
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa justify-center px-3"
        >
          <BrandIcon name="whatsapp" size={18} color="#053b1e" /> ₹0 Live Demo
        </a>
      </div>
    </>
  );
}
