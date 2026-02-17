import React from 'react'
import HeroSection from './Hero/Hero'
import HomeAbout from './HomeAbout/HomeAbout'
import HomeTech from './HomeTech/HomeTech'
import CurrentlyExploring from './CurrentlyExploring/CurrentlyExploring'
import HomeGallery from '../Portfolio/Portfolio' // New Gallery Section
import InstagramShowcase from '../InstagramShowcase.jsx/InstagramShowcase'

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeAbout />
      
      {/* High-End Gallery Section */}
      <HomeGallery />

      <HomeTech />
      <CurrentlyExploring />
      
      {/* Premium Instagram Section */}
      <InstagramShowcase />
    </>
  )
}

export default Home