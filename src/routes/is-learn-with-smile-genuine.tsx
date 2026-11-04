import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/is-learn-with-smile-genuine")({
  component: () => <ConfiguredGuide path="/is-learn-with-smile-genuine" />,
  head: () => guideHead("/is-learn-with-smile-genuine"),
});
