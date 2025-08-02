import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Brands } from "../../components/brandLogos/Brands";
import { Items } from "../../components/ItemsSection/items";
import { SecondHero } from "../../components/secondHero";
import Inner from "../../utils/Inner";

export function Home() {
  return (
    <Inner>
      <HeroSection />
      <Brands />
      <Items />
      <SecondHero />
      </Inner>

  );
}


