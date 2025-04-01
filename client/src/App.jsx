import React from 'react'
import './App.css'

import NavigationBar from './components/NavigationBar'
import TechInfrastructureHero from './components/TechInfrastructureHero'
import HeroSectionDivOne from './components/HeroSectionDivOne'
import CompanyLogos from './components/CompanyLogos'
import IntroductionSection from './components/IntroductionSection'
import FeatureCards from './components/FeatureCards'
import FeatureTags from './components/FeatureTags'
import HeroSectionDivTwo from './components/HeroSectionDivTwo'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavigationBar />
      <TechInfrastructureHero />
      {/* <CompanyLogos /> */}
      <IntroductionSection />
      <HeroSectionDivOne />
      <FeatureCards />
      <FeatureTags />
      {/* <HeroSectionDivTwo /> */}
      <Footer />
    </>
  )
}

export default App
