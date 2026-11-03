import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide } from "@/components/RegionalPages";
import { needHead } from "@/lib/regional-head";

export const Route = createFileRoute("/english-for-campus-placements-india")({
  component: () => <NeedGuide need="campus" />,
  head: () => needHead("campus"),
});
