import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-jharkhand")({
  component: () => <StatePage slug="jharkhand" />,
  head: () => stateHead("jharkhand"),
});
