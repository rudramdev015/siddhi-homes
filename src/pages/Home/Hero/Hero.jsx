import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import './Hero.css';

// Suggestion: Use the "Screenshot for page 1" image as heroBackgroundImage
import heroBackgroundImage from '../home-img/hero-img.png'; 

function Hero() {
  return (
    <div className="siddhi-hero-wrapper">
      <section 
        className="siddhi-hero-section" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackgroundImage})` }}
      >
        {/* Top RERA Badge */}
        <div className="rera-badge">
          RERA NO: RAJ/P/2023/2610
        </div>

        <div className="siddhi-hero-container">
          <div className="siddhi-hero-content">
            <h4 className="parent-brand">SHREE MAHAVEER REAL ESTATES</h4>
            <h1 className="hero-main-title">
              SIDDHI <span>HOMES</span>
            </h1>
            <p className="hero-tagline">"Find Your Perfect Home"</p>
            
            <div className="location-info">
              <FaMapMarkerAlt /> <span>Behind Reliance Petrol Pump, Pal, Jodhpur</span>
            </div>

            <div className="hero-highlights">
              <div className="h-item">
                <FaCheckCircle className="gold-icon" /> <span>62 Premium Units</span>
              </div>
              <div className="h-item">
                <FaCheckCircle className="gold-icon" /> <span>Individual JDA Patta</span>
              </div>
              <div className="h-item">
                <FaCheckCircle className="gold-icon" /> <span>Ready-to-Move</span>
              </div>
            </div>

            <div className="hero-cta-group">
              <Link to="/properties" className="btn-primary">VIEW LAYOUT PLANS</Link>
              <a href="tel:+918233394004" className="btn-secondary">
                <FaPhoneAlt /> ENQUIRE NOW
              </a>
            </div>
          </div>
        </div>

        {/* Floating Feature Bar */}
        <div className="hero-features-bar">
          <div className="feature-stat">
            <h3>30+ Ft</h3>
            <p>Paved Roads</p>
          </div>
          <div className="feature-stat">
            <h3>24/7</h3>
            <p>Water & Power</p>
          </div>
          <div className="feature-stat">
            <h3>Gated</h3>
            <p>Secure Community</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;