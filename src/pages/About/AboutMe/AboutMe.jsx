import React, { useEffect, useRef, useState } from 'react';
import './AboutMe.css';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaHome, FaCheckCircle, FaAward, FaBuilding, FaGopuram } from 'react-icons/fa';
import { SiGmail, SiInstagram } from 'react-icons/si';

// IMPORT YOUR LOCAL IMAGE HERE
import propertyImg from './hero section SMRS (12).png';

const AboutMe = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isSkillVisible, setIsSkillVisible] = useState(false);

  const topSectionRef = useRef(null);
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === topSectionRef.current) {
              setIsTopVisible(true);
              observer.unobserve(entry.target);
            }
            if (entry.target === skillSectionRef.current) {
              setIsSkillVisible(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    if (topSectionRef.current) observer.observe(topSectionRef.current);
    if (skillSectionRef.current) observer.observe(skillSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="siddhi-about__wrapper">
      <div className="siddhi-about__bg-lines">
        <svg viewBox="0 0 1440 1024" preserveAspectRatio="none">
          <path d="M-50,200 C300,50 600,600 1500,100" stroke="#D4AF37" strokeOpacity="0.1" fill="none" />
        </svg>
      </div>

      <div className="siddhi-about__container">
        {/* --- TOP SECTION --- */}
        <div className={`siddhi-about__top-section ${isTopVisible ? 'in-view' : ''}`} ref={topSectionRef}>
          <div className="siddhi-about__intro">
            <div className="siddhi-about__title-bleed animate-left delay-1">
              <h1 className="siddhi-about__title">
                <span className="siddhi-about__title-text">Our Legacy</span>
              </h1>
            </div>
            
            <div className="siddhi-about__bio">
              <p className="siddhi-about__greet animate-zoom delay-2">Welcome to</p>
              <h2 className="siddhi-about__name-line animate-zoom delay-3">
                SHREE MAHAVEER <strong className="gold-text">REAL ESTATES</strong>
              </h2>
              <p className="siddhi-about__text animate-zoom delay-4">
                Founded by four visionary partners, we are driven by the dream to transform Jodhpur into a hub of world-class residential living. <strong>Siddhi Homes</strong> exemplifies our commitment to blending <strong>Modern Architectural Excellence</strong> with Rajasthan's rich heritage.
              </p>
              <p className="siddhi-about__text animate-zoom delay-5">
                <strong>Our Vision:</strong> To create premium living spaces accessible at affordable prices, ensuring every family finds their perfect sanctuary in a safe, secured, and beautiful gated community.
              </p>
            </div>
            
            <div className="siddhi-about__contact-area animate-left delay-6">
              <h2 className="siddhi-about__label">Get In Touch</h2>
              <div className="siddhi-about__contact-grid">
                <a href="mailto:shreemahaveerrealestates@gmail.com" className="contact-link">
                  <span className="icon-circle"><SiGmail /></span>
                  <span className="contact-text">Email Us</span>
                </a>
                <a href="tel:+918233394004" className="contact-link">
                  <span className="icon-circle"><FaPhoneAlt /></span>
                  <span className="contact-text">+91 82333 94004</span>
                </a>
                <a href="https://wa.me/918233394004" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="icon-circle"><FaWhatsapp /></span>
                  <span className="contact-text">WhatsApp Chat</span>
                </a>
                <a href="https://www.instagram.com/shreemahaveerrealestates/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="icon-circle"><SiInstagram /></span>
                  <span className="contact-text">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="siddhi-about__image-section">
            <div className="siddhi-about__image-wrapper animate-right delay-2">
              <div className="siddhi-about__image-mask">
                <img src={propertyImg} alt="Siddhi Homes Exterior" />
              </div>
              <div className="rera-tag">RERA: RAJ/P/2023/2610</div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION (PROJECT EXCELLENCE) --- */}
        <div className={`siddhi-about__specs-card ${isSkillVisible ? 'in-view' : ''}`} ref={skillSectionRef}>
          <div className="siddhi-about__specs-grid">
            
            {/* Column 1: Address */}
            <div className="spec-column address-column">
              <div className="heading-row">
                <h3>Project Address</h3>
                <span className="status-tag">PAL, JODHPUR</span>
              </div>
              <p className="para-muted">
                Kh. No. 147/1, Behind Reliance Petrol Pump,<br/> Pal Gaon, Jodhpur (Raj).
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link">
                <FaMapMarkerAlt /> View on Google Maps
              </a>
            </div>
            
            {/* Column 2: Features */}
            <div className="spec-column">
              <h3>Core Features</h3>
              <div className="list-container">
                <ul className="spec-list">
                  <li><FaCheckCircle className="gold-icon" /> 62 Premium Units</li>
                  <li><FaCheckCircle className="gold-icon" /> JDA Patta</li>
                </ul>
                <div className="v-line"></div>
                <ul className="spec-list">
                  <li><FaCheckCircle className="gold-icon" /> Ready-to-Move</li>
                  <li><FaCheckCircle className="gold-icon" /> Gated Society</li>
                </ul>
              </div>
            </div>

            {/* Column 3: Amenities Text */}
            <div className="spec-column">
              <h3>Modern Amenities</h3>
               <div className="list-container">
                <ul className="spec-list">
                  <li>Dedicated Temple</li>
                  <li>30ft Wide Roads</li>
                  <li>Open Air Gym</li>
                </ul>
                <div className="v-line"></div>
                <ul className="spec-list">
                  <li>Lush Garden</li>
                  <li>Underground Light</li>
                  <li>24x7 Water</li>
                </ul>
              </div>
            </div>

            {/* Column 4: Highlights Icons */}
            <div className="spec-column highlights-column">
              <h3>Highlights</h3>
              <div className="amenity-grid">
                <div className="am-icon-box">
                  <FaGopuram className="am-icon" />
                  <span>Temple</span>
                </div>
                <div className="am-icon-box">
                  <FaBuilding className="am-icon" />
                  <span>Design</span>
                </div>
                <div className="am-icon-box">
                  <FaHome className="am-icon" />
                  <span>Living</span>
                </div>
                <div className="am-icon-box">
                  <FaAward className="am-icon" />
                  <span>Quality</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;