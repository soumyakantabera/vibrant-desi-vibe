import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/spoken-english-for-freshers-india")({
  component: () => <ConfiguredGuide path="/spoken-english-for-freshers-india" />,
  head: () => guideHead("/spoken-english-for-freshers-india"),
});
