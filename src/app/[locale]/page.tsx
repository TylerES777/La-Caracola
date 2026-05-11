import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { StatStrip } from "@/components/sections/StatStrip";
import { Welcome } from "@/components/sections/Welcome";
import { DishCarousel } from "@/components/sections/DishCarousel";
import { Timeline } from "@/components/sections/Timeline";
import { CellarBlock } from "@/components/sections/CellarBlock";
import { PlaceSplit } from "@/components/sections/PlaceSplit";
import { Manifesto } from "@/components/sections/Manifesto";
import { SisterRestaurantBlock } from "@/components/sections/SisterRestaurantBlock";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatStrip />
      <Welcome />
      <DishCarousel />
      <Timeline />
      <CellarBlock />
      <PlaceSplit />
      <Manifesto />
      <SisterRestaurantBlock />
      <ClosingCta />
    </>
  );
}
