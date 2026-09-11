import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/spoken-english-for-beginners-india")({
  component: () => <ConfiguredGuide path="/spoken-english-for-beginners-india" />,
  head: () => guideHead("/spoken-english-for-beginners-india"),
});
