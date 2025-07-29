import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx/Navbar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Brands } from './components/brandLogos/Brands'
import { Items } from './components/ItemsSection/itmes'

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <Brands />
    <Items />
  </>
)

export default App