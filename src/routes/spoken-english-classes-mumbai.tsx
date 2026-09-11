import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-mumbai")({
  component: () => <CityGuide slug="mumbai" />,
  head: () => cityHead("mumbai"),
});
