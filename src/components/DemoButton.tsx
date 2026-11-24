import { FeeText } from "@/components/FeeText";
import { Icon } from "@/components/Icon";
import { WaButton } from "@/components/ui-bits";
import { DEMO_SESSION } from "@/lib/demo-session";

/**
 * "Book the ₹99 Demo Class" — the same WhatsApp button on every page (the
 * sitewide consultation band, course heroes, the homepage). It opens WhatsApp
 * with the demo request; the team sends the slot and payment link. The fee
 * swaps to the learner's local list outside India.
 */
export function DemoButton({
  size = "lg",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <WaButton
      message={DEMO_SESSION.enrolMessage}
      variant="demo"
      size={size}
      goal="whatsapp_demo"
      className={className}
    >
      <Icon name="play" size={size === "lg" ? 18 : 16} /> Book the <FeeText text="₹99" /> Demo Class
    </WaButton>
  );
}
