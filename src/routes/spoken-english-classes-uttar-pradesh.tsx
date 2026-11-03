import { createFileRoute } from "@tanstack/react-router";
import { StatePage } from "@/components/RegionalPages";
import { stateHead } from "@/lib/regional-head";

export const Route = createFileRoute("/spoken-english-classes-uttar-pradesh")({
  component: () => <StatePage slug="uttar-pradesh" />,
  head: () => stateHead("uttar-pradesh"),
});
