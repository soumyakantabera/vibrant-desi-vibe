import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-guwahati")({
  component: () => <CityGuide slug="guwahati" />,
  head: () => cityHead("guwahati"),
});
