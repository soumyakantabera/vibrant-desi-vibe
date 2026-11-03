import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-bihar")({
  component: () => <StatePage slug="bihar" />,
  head: () => stateHead("bihar"),
});
