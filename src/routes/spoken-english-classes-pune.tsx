import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-pune")({
  component: () => <CityGuide slug="pune" />,
  head: () => cityHead("pune"),
});
