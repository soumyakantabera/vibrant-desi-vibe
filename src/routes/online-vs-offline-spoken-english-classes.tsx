import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/online-vs-offline-spoken-english-classes")({
  component: () => <ConfiguredGuide path="/online-vs-offline-spoken-english-classes" />,
  head: () => guideHead("/online-vs-offline-spoken-english-classes"),
});
