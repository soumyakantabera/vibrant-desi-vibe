import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-madhya-pradesh")({
  component: () => <StatePage slug="madhya-pradesh" />,
  head: () => stateHead("madhya-pradesh"),
});
