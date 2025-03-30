import React from 'react'
import './App.css'

import NavigationBar from './components/NavigationBar'
import TechInfrastructureHero from './components/TechInfrastructureHero'
import CompanyLogos from './components/CompanyLogos'
import IntroductionSection from './components/IntroductionSection'
import FeatureCards from './components/FeatureCards'
import FeatureTags from './components/FeatureTags'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavigationBar />
      <TechInfrastructureHero />
      <CompanyLogos />
      <IntroductionSection />
      <FeatureCards />
      <FeatureTags />
      <Footer />
    </>
  )
}

export default App
