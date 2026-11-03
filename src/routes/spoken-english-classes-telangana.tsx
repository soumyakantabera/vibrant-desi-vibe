import { createFileRoute } from "@tanstack/react-router";
import { StatePage, stateHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/spoken-english-classes-telangana")({
  component: () => <StatePage slug="telangana" />,
  head: () => stateHead("telangana"),
});
