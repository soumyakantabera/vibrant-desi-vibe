import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/what-happens-in-a-live-english-class")({
  component: () => <ConfiguredGuide path="/what-happens-in-a-live-english-class" />,
  head: () => guideHead("/what-happens-in-a-live-english-class"),
});
