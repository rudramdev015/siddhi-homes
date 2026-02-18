import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

// Importing your renamed images
import img1 from './hero1.png';
import img2 from './hero2.png';
import img3 from './hero3.png';
import img4 from './hero4.png';

const slides = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="hero-wrapper">
      {/* BACKGROUND SLIDER */}
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-bg ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}
        {/* Dark Gradient Overlay for text readability */}
        <div className="overlay-gradient"></div>
      </div>

      {/* RERA BADGE */}
      <div className="rera-badge">
        <span className="rera-label">RERA APPROVED</span>
        <span className="rera-no">RAJ/P/2023/2610</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="hero-content-container">
        <div className="text-content">
          <h4 className="animate-reveal delay-1">SHREE MAHAVEER REAL ESTATES</h4>
          
          <h1 className="main-title animate-reveal delay-2">
            SIDDHI <span className="outline-text">HOMES</span>
          </h1>
          
          <p className="tagline animate-reveal delay-3">
            "Experience Luxury Living Like Never Before"
          </p>

          <div className="location-box animate-reveal delay-3">
            <FaMapMarkerAlt className="icon-gold" />
            <span>Behind Reliance Petrol Pump, Pal, Jodhpur</span>
          </div>

          <div className="features-grid animate-reveal delay-4">
            <div className="feature-pill">
              <FaCheckCircle className="icon-gold" /> 62 Premium Units
            </div>
            <div className="feature-pill">
              <FaCheckCircle className="icon-gold" /> JDA Patta
            </div>
            <div className="feature-pill">
              <FaCheckCircle className="icon-gold" /> Ready-to-Move
            </div>
          </div>

          <div className="cta-buttons animate-reveal delay-5">
            <Link to="/properties" className="btn btn-gold">
              VIEW MASTER PLAN
            </Link>
            <a href="tel:+918233394004" className="btn btn-transparent">
              <FaPhoneAlt /> CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* SLIDER CONTROLS (Hidden on Mobile) */}
      <div className="slider-controls desktop-only">
        <button onClick={prevSlide} className="control-btn"><FaChevronLeft /></button>
        <button onClick={nextSlide} className="control-btn"><FaChevronRight /></button>
      </div>

      {/* DOT INDICATORS */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === current ? 'active-dot' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* BOTTOM INFO BAR (Desktop Only) */}
      <div className="info-bar desktop-only">
        <div className="info-item">
          <h3>30Ft</h3>
          <p>WIDE ROADS</p>
        </div>
        <div className="info-line"></div>
        <div className="info-item">
          <h3>24/7</h3>
          <p>SECURE GATED</p>
        </div>
        <div className="info-line"></div>
        <div className="info-item">
          <h3>100%</h3>
          <p>LOANABLE</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;