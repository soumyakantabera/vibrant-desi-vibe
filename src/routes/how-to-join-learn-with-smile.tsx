import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/how-to-join-learn-with-smile")({
  component: () => <ConfiguredGuide path="/how-to-join-learn-with-smile" />,
  head: () => guideHead("/how-to-join-learn-with-smile"),
});
