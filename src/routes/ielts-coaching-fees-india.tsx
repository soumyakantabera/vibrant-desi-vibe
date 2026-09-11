import { createFileRoute } from "@tanstack/react-router";

import { ConfiguredGuide, guideHead } from "@/components/ConfiguredGuide";

export const Route = createFileRoute("/ielts-coaching-fees-india")({
  component: () => <ConfiguredGuide path="/ielts-coaching-fees-india" />,
  head: () => guideHead("/ielts-coaching-fees-india"),
});
