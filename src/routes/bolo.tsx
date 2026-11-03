import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/FaqSection";
import { pageHead } from "@/lib/seo";
import { BOLO_FAQ } from "@/lib/bolo";
import {
  BOLO_WA,
  BoloForCourses,
  BoloHero,
  BoloLevels,
  BoloSteps,
  BoloThreeTabs,
  BoloTryIt,
  MeetMascots,
} from "@/components/bolo/BoloSections";
import {
  LaunchOfferBand,
  ReviewLoop,
  TipsTiles,
  VideoLibrary,
  WeekStrip,
} from "@/components/package/PackageSections";

export const Route = createFileRoute("/bolo")({
  component: BoloPage,
  head: () => pageHead("/bolo"),
});

function BoloPage() {
  return (
    <Layout waMessage={BOLO_WA}>
      <BoloHero />
      <LaunchOfferBand />
      <BoloThreeTabs />
      <BoloTryIt />
      <WeekStrip />
      <VideoLibrary />
      <TipsTiles />
      <ReviewLoop />
      <BoloLevels />
      <BoloForCourses />
      <MeetMascots />
      <BoloSteps />
      <FaqSection
        faqs={BOLO_FAQ}
        eyebrow="Bolo FAQs"
        title="Questions about Bolo"
        waMessage={BOLO_WA}
        className="section bg-paper"
      />
    </Layout>
  );
}
