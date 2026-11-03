import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/english-for-it-professionals-india")({
  component: () => <ConfiguredGuide path="/english-for-it-professionals-india" />,
  head: () => guideHead("/english-for-it-professionals-india"),
});
