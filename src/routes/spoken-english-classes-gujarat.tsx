import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-gujarat")({
  component: () => <StatePage slug="gujarat" />,
  head: () => stateHead("gujarat"),
});
