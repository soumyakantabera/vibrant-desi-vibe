import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide } from "@/components/RegionalPages";
import { needHead } from "@/lib/regional-head";

export const Route = createFileRoute("/english-for-bpo-jobs-india")({
  component: () => <NeedGuide need="bpo" />,
  head: () => needHead("bpo"),
});
