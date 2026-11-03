import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide, needHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/english-for-data-analysts-india")({
  component: () => <NeedGuide need="analyst" />,
  head: () => needHead("analyst"),
});
