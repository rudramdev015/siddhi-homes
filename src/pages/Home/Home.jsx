import React from 'react'
import HeroSection from './Hero/Hero'
import HomeAbout from './HomeAbout/HomeAbout'
import HomeTech from './HomeTech/HomeTech'
import CurrentlyExploring from './CurrentlyExploring/CurrentlyExploring'

const Home = () => {
  return (
    <>
    <HeroSection />
    <HomeAbout />
    <HomeTech />
    <CurrentlyExploring />
    </>
  )
}

export default Home