import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-delhi")({
  component: () => <CityGuide slug="delhi" />,
  head: () => cityHead("delhi"),
});
