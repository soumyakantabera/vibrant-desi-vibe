import { createFileRoute } from "@tanstack/react-router";
import { StatePage } from "@/components/RegionalPages";
import { stateHead } from "@/lib/regional-head";

export const Route = createFileRoute("/spoken-english-classes-assam")({
  component: () => <StatePage slug="assam" />,
  head: () => stateHead("assam"),
});
