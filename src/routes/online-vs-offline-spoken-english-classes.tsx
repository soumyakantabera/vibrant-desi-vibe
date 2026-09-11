import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/online-vs-offline-spoken-english-classes")({
  component: () => <ConfiguredGuide path="/online-vs-offline-spoken-english-classes" />,
  head: () => guideHead("/online-vs-offline-spoken-english-classes"),
});
