import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide, needHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/english-for-campus-placements-india")({
  component: () => <NeedGuide need="campus" />,
  head: () => needHead("campus"),
});
