import React from 'react';
import './index.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';



function App() {
  return (
    <>
      <Navbar />
      <div className='className="max-w-6xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </>
  )
}

export default App
