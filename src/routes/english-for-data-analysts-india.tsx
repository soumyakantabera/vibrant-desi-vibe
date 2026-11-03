import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide } from "@/components/RegionalPages";
import { needHead } from "@/lib/regional-head";

export const Route = createFileRoute("/english-for-data-analysts-india")({
  component: () => <NeedGuide need="analyst" />,
  head: () => needHead("analyst"),
});
