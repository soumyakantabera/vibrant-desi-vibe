import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-uttar-pradesh")({
  component: () => <StatePage slug="uttar-pradesh" />,
  head: () => stateHead("uttar-pradesh"),
});
