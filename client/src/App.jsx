import React from 'react'
import './App.css'

import NavigationBar from './components/NavigationBar'
import TechInfrastructureHero from './components/TechInfrastructureHero'
import ClientFeedback from './components/ClientFeedback'
import HeroSectionDivOne from './components/HeroSectionDivOne'
import CompanyLogos from './components/CompanyLogos'
import IntroductionSection from './components/IntroductionSection'
import FeatureCards from './components/FeatureCards'
import TestimonialsSection from './components/TestimonialsSection'
import HeroSectionDivTwo from './components/HeroSectionDivTwo'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <NavigationBar />
      <div id="home">
        <TechInfrastructureHero />
      </div>
      <ClientFeedback />
      {/* <CompanyLogos /> */}
      <div id="about">
        <IntroductionSection />
      </div>
      <HeroSectionDivOne />
      <div id="services">
        <FeatureCards />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      {/* <HeroSectionDivTwo /> */}
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default App
