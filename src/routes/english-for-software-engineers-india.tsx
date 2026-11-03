import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide } from "@/components/RegionalPages";
import { needHead } from "@/lib/regional-head";

export const Route = createFileRoute("/english-for-software-engineers-india")({
  component: () => <NeedGuide need="it" />,
  head: () => needHead("it"),
});
