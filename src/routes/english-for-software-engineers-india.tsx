import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide, needHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/english-for-software-engineers-india")({
  component: () => <NeedGuide need="it" />,
  head: () => needHead("it"),
});
