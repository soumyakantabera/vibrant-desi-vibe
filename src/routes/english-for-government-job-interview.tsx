import { createFileRoute } from "@tanstack/react-router";
import { NeedGuide } from "@/components/RegionalPages";
import { needHead } from "@/lib/regional-head";

export const Route = createFileRoute("/english-for-government-job-interview")({
  component: () => <NeedGuide need="govt" />,
  head: () => needHead("govt"),
});
