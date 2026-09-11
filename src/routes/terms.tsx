import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  component: () => <LegalPage path="/terms" />,
  head: () => pageHead("/terms"),
});
