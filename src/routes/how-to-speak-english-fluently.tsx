import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/how-to-speak-english-fluently")({
  component: () => <ConfiguredGuide path="/how-to-speak-english-fluently" />,
  head: () => guideHead("/how-to-speak-english-fluently"),
});
