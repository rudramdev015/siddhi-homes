import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomeAbout.css';

// Using a high-end architectural image
const LUXURY_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";

function HomeAbout() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []); 

  return (
    <section id="siddhi-about-section" ref={sectionRef}>
      <div className={`siddhi-about-container ${isAnimated ? 'siddhi-visible' : ''}`}>
        
        {/* Background Image with extra dark overlay for text visibility */}
        <div className="siddhi-about-image-wrapper">
            <img src={LUXURY_IMG} alt="Luxury Real Estate" className="siddhi-about-bg-image" />
            <div className="siddhi-dark-overlay"></div>
        </div>

        {/* Left Panel: Brand & Title */}
        <div className={`siddhi-about-panel siddhi-left-panel ${isAnimated ? 'siddhi-visible' : ''}`}>
          <div className="siddhi-about-content siddhi-content-left">
            <h4 className="siddhi-subtitle">SHREE MAHAVEER REAL ESTATES</h4>
            <h1 id="siddhi-about-title">OUR <span>LEGACY</span></h1>
          </div>
        </div>

        {/* Right Panel: Mission & Description (Now with dark backdrop for visibility) */}
        <div className={`siddhi-about-panel siddhi-right-panel ${isAnimated ? 'siddhi-visible' : ''}`}>
          <div className="siddhi-about-content siddhi-content-right">
            <div className="siddhi-text-card">
              <p id="siddhi-about-description">
                Founded by four visionary partners, <strong>Siddhi Homes</strong> was 
                born from the belief that quality, trust, and innovation can 
                redefine a city's skyline.
              </p>
              <p className="siddhi-secondary-desc">
                We don't just build houses — we craft dream homes where families 
                create lifelong memories through modern architectural excellence.
              </p>
              <Link to="/about" id="siddhi-about-btn">
                LEARN OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;