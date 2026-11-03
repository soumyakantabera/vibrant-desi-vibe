import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/spoken-english-for-homemakers-india")({
  component: () => <ConfiguredGuide path="/spoken-english-for-homemakers-india" />,
  head: () => guideHead("/spoken-english-for-homemakers-india"),
});
