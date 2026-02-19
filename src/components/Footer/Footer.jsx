import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Your file imports
import ProjectLogo from './SMRE.png';
import GroupLogo from './Clients Logos (3) (1).png';

import { 
  FaInstagram, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, 
  FaPhoneAlt, FaArrowUp, FaChevronRight, FaBuilding 
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-footer">
      {/* Top Gradient Border */}
      <div className="footer-border-gradient"></div>

      <div className="footer-container">
        
        {/* === BRANDING SECTION (HERO) === */}
        <div className="footer-brand-section">
          {/* Spotlight Effect Container */}
          <div className="logo-spotlight-wrapper">
            <div className="brand-logos">
              {/* Project Logo */}
              <div className="logo-wrapper project-logo">
                <img src={ProjectLogo} alt="Siddhi Homes" />
              </div>
              
              {/* Vertical Divider */}
              <div className="brand-divider"></div>
              
              {/* Group Logo */}
              <div className="logo-wrapper group-logo">
                <img src={GroupLogo} alt="Shree Mahaveer Group" />
              </div>
            </div>
          </div>
          
          <p className="brand-quote">
            "Crafting Legacies, Building Trust. <br className="mobile-break" />
            Jodhpur's Premier Luxury Residential Landmark."
          </p>
        </div>

        {/* === MAIN GRID CONTENT === */}
        <div className="footer-content-grid">
          
          {/* 1. Navigation */}
          <div className="footer-col nav-col">
            <h4 className="col-header">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}><FaChevronRight className="link-arrow"/> Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}><FaChevronRight className="link-arrow"/> About Project</Link></li>
              <li><Link to="/portfolio" onClick={scrollToTop}><FaChevronRight className="link-arrow"/> Gallery</Link></li>
              <li><Link to="/hometech" onClick={scrollToTop}><FaChevronRight className="link-arrow"/> Amenities</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}><FaChevronRight className="link-arrow"/> Contact Us</Link></li>
            </ul>
          </div>

          {/* 2. Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="col-header">Get In Touch</h4>
            <div className="contact-list">
              <div className="contact-item">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <p>E78/79 Near Bal Vidhya Mandir,<br/>Shastri Nagar, Jodhpur, RJ</p>
              </div>
              <div className="contact-item">
                <div className="icon-box"><FaPhoneAlt /></div>
                <p>
                  <a href="tel:+9188279040290">+91 88279 040290</a> <br/> 
                  <a href="tel:+918233394004">+91 82333 94004</a>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon-box"><FaEnvelope /></div>
                <p><a href="mailto:shreemahaveer@gmail.com">shreemahaveer@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* 3. CTA Card */}
          <div className="footer-col cta-col">
            <div className="premium-cta-card">
              <FaBuilding className="bg-watermark" />
              <div className="cta-content">
                <h5>Ready to Move?</h5>
                <p>Experience luxury firsthand. Schedule your private viewing today.</p>
                <Link to="/contact" className="gold-button" onClick={scrollToTop}>
                  Book Site Visit
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* === FOOTER BOTTOM === */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          
          <div className="bottom-wrapper">
            <div className="social-links">
              <a href="https://wa.me/918233394004" target="_blank" rel="noreferrer" className="social-btn whatsapp">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/shreemahaveerrealestates/" target="_blank" rel="noreferrer" className="social-btn insta">
                <FaInstagram />
              </a>
              <a href="mailto:shreemahaveer@gmail.com" className="social-btn mail">
                <FaEnvelope />
              </a>
            </div>

            <div className="copyright-text">
              © {currentYear} <span className="highlight-gold">SIDDHI HOMES</span>. 
              Developed by <span className="highlight-maroon">Shree Mahaveer Group</span>.
            </div>

            <button className="scroll-top-btn" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;