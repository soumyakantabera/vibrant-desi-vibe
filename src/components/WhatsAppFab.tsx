import { waLink } from "@/lib/whatsapp";
import { BrandIcon } from "./BrandIcon";

export function WhatsAppFab({ message = "Hi! I want to know more about Learn With Smile courses." }: { message?: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50"
    >
      <span className="relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"></span>
        <span className="relative flex items-center justify-center rounded-full bg-white shadow-2xl animate-wa-bob h-16 w-16 md:h-[68px] md:w-[68px] ring-4 ring-[#25D366]/30">
          <BrandIcon name="whatsapp" size={42} />
        </span>
      </span>
    </a>
  );
}
