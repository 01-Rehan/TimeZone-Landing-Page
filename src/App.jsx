import React from "react";
import { useRef } from "react";
import { Navbar } from "./components/Navbar/Navbar.jsx/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Brands } from "./components/brandLogos/Brands";
import { Items } from "./components/ItemsSection/items";
import { SecondHero } from "./components/secondHero";
import { FooterComponent } from "./components/footer/footer";
import { CursorEffect } from "./components/Cursor/cursor";

const App = () => {
  return (
    <>
    <CursorEffect />
        <Navbar />
        <HeroSection />
        <Brands />
        <Items />
        <SecondHero />
        <FooterComponent />
      </>
  );
};

export default App;
