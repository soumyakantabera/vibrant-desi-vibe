import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide, needHead } from "@/components/RegionalPages";

export const Route = createFileRoute("/english-for-bpo-jobs-india")({
  component: () => <NeedGuide need="bpo" />,
  head: () => needHead("bpo"),
});
