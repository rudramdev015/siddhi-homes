import React from 'react'
import Leetcode from './Leetcode/Leetcode'
import AboutMe from './AboutMe/AboutMe'
import Journey from './Journey/Journey'
import Resume from './Resume/Resume'

const About = () => {
  return (
    <>
      <AboutMe />
      <Leetcode />
      <Journey />
      <Resume />
    </>
  )
}

export default About