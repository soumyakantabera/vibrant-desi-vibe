import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-chennai")({
  component: () => <CityGuide slug="chennai" />,
  head: () => cityHead("chennai"),
});
