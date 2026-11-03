import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-karnataka")({
  component: () => <StatePage slug="karnataka" />,
  head: () => stateHead("karnataka"),
});
