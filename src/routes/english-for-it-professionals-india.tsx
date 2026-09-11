import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/english-for-it-professionals-india")({
  component: () => <ConfiguredGuide path="/english-for-it-professionals-india" />,
  head: () => guideHead("/english-for-it-professionals-india"),
});
