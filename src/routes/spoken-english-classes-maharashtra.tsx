import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-maharashtra")({
  component: () => <StatePage slug="maharashtra" />,
  head: () => stateHead("maharashtra"),
});
