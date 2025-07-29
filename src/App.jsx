import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx/Navbar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Brands } from './components/brandLogos/Brands'
import { Items } from './components/ItemsSection/itmes'
import { SecondHero } from './components/secondHero'
import { FooterComponent } from './components/footer/footer'

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <Brands />
    <Items />
    <SecondHero />
    <FooterComponent />
  </>
)

export default App