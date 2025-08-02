import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Brands } from "../../components/brandLogos/Brands";
import { Items } from "../../components/ItemsSection/items";
import { SecondHero } from "../../components/secondHero";

export function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <Items />
      <SecondHero />
    </>
  );
}


