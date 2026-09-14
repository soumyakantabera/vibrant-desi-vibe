import { CHAT_CTA, DEMO_CTA, waLink } from "@/lib/whatsapp";
import { chatWaMessage, demoWaMessage } from "@/lib/enrolment-wa";
import { useCountry } from "@/lib/country-context";
import { BrandIcon } from "./BrandIcon";
import { Icon } from "./Icon";

export function WhatsAppFab({
  message,
}: {
  message?: string;
}) {
  const { choice } = useCountry();
  const chatMessage = message && message.trim() ? message : chatWaMessage(choice);
  const whatsapp = waLink(chatMessage);
  const demo = waLink(demoWaMessage(choice));
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
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sun btn-sm justify-center px-2"
          data-cta-goal="free_demo"
        >
          <Icon name="spark" size={16} /> {DEMO_CTA}
        </a>
      </div>
    </>
  );
}
