import { createFileRoute } from "@tanstack/react-router";

import { CityGuide, cityHead } from "@/components/CityGuide";

export const Route = createFileRoute("/spoken-english-classes-surat")({
  component: () => <CityGuide slug="surat" />,
  head: () => cityHead("surat"),
});
