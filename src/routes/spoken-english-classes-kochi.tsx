import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-kochi")({
  component: () => <CityGuide slug="kochi" />,
  head: () => cityHead("kochi"),
});
