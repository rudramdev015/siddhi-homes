import React from 'react';
import './Hero.css';

// 1. Import your images
import heroBackgroundImage from '../home-img/hero-img.png'; 
import personImage from '../home-img/person.png'; 

function Hero() {
  return (
    <div id="home-hero-app" className="home-hero-App">
      {/* 2. Apply the background image using an inline style */}
      <section 
        id="home-hero-section"
        className="home-hero-section" 
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div id="home-hero-content" className="home-hero-content">
          {/* MODIFIED: Restored the original waving hand emoji */}
          <h1>Hi, I’m Jitendra 👋</h1>
          <p>
            A passionate MERN Stack Developer and Data Science enthusiast. <br />
            I love building web apps, analyzing data, and solving problems
            with code.
          </p>
        </div>
        
        {/* 3. Add the person image */}
        <img 
          id="home-hero-person-image"
          src={personImage} 
          alt="Person" 
          className="home-hero-person-image" 
        />
      </section>
    </div>
  );
}

export default Hero;