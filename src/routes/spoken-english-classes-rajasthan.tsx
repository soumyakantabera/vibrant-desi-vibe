import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-rajasthan")({
  component: () => <StatePage slug="rajasthan" />,
  head: () => stateHead("rajasthan"),
});
