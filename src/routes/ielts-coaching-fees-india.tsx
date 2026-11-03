import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide } from "@/components/ConfiguredGuide";
import { guideHead } from "@/lib/guide-head";

export const Route = createFileRoute("/ielts-coaching-fees-india")({
  component: () => <ConfiguredGuide path="/ielts-coaching-fees-india" />,
  head: () => guideHead("/ielts-coaching-fees-india"),
});
