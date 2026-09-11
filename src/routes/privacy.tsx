import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  component: () => <LegalPage path="/privacy" />,
  head: () => pageHead("/privacy"),
});
