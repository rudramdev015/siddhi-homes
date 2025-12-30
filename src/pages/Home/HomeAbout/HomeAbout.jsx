import React, { useState, useEffect, useRef } from 'react';
// ADDED: Import the Link component from react-router-dom
import { Link } from 'react-router-dom';
import './HomeAbout.css';

// Make sure this path is correct for your project structure
import aboutmeBackgroundImage from '../../../assets/home/about.png';

function HomeAbout() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Add prefix-specific body class
    document.body.classList.add('home-about-part-body-styles');

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Animate IN when visible
          setIsAnimated(true);
        } else {
          // Animate OUT (Reverse) when not visible
          setIsAnimated(false);
        }
      },
      { 
        threshold: 0.2 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      document.body.classList.remove('home-about-part-body-styles');
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); 

  return (
    <section id="home-about-part-section" ref={sectionRef}>
      <div className={`home-about-part-split-container ${isAnimated ? 'home-about-part-visible' : ''}`}>
        
        {/* Real Image Tag: Ensures responsive auto-height on mobile */}
        <img 
          src={aboutmeBackgroundImage} 
          alt="About Background" 
          className="home-about-part-bg-image" 
        />

        {/* Left Panel (About Me) */}
        <div className={`home-about-part-panel home-about-part-left-panel ${isAnimated ? 'home-about-part-visible' : ''}`}>
          <div className="home-about-part-panel-content home-about-part-content-left">
            <h1 id="home-about-part-title">ABOUT ME</h1>
          </div>
        </div>

        {/* Right Panel (Description) */}
        <div className={`home-about-part-panel home-about-part-right-panel ${isAnimated ? 'home-about-part-visible' : ''}`}>
          <div className="home-about-part-panel-content home-about-part-content-right">
            <div className="home-about-part-right-content-wrapper">
              <p id="home-about-part-description">
                I’m Jitendra Parmar, a passionate Full Stack Developer skilled in
                building scalable apps.
              </p>
              {/* CHANGED: The <button> is now a <Link> component */}
              <Link to="/about" id="home-about-part-read-more-btn">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;