import { createFileRoute } from "@tanstack/react-router";
import { StatePage } from "@/components/RegionalPages";
import { stateHead } from "@/lib/regional-head";

export const Route = createFileRoute("/spoken-english-classes-tamil-nadu")({
  component: () => <StatePage slug="tamil-nadu" />,
  head: () => stateHead("tamil-nadu"),
});
