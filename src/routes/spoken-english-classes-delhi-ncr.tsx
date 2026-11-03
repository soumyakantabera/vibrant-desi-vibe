import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-delhi-ncr")({
  component: () => <StatePage slug="delhi-ncr" />,
  head: () => stateHead("delhi-ncr"),
});
