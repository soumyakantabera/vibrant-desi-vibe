import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/spoken-english-for-homemakers-india")({
  component: () => <ConfiguredGuide path="/spoken-english-for-homemakers-india" />,
  head: () => guideHead("/spoken-english-for-homemakers-india"),
});
