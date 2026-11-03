import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/how-to-speak-english-fluently")({
  component: () => <ConfiguredGuide path="/how-to-speak-english-fluently" />,
  head: () => guideHead("/how-to-speak-english-fluently"),
});
