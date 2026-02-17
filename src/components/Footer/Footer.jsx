import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Using your specific file names
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

  return (
    <footer className="stunning-footer">
      {/* 1. TOP GRADIENT ACCENT */}
      <div className="footer-glow-line"></div>

      <div className="footer-max-container">
        
        {/* 2. DUAL LOGO HERO SECTION */}
        <div className="footer-hero-branding">
          <div className="dual-logo-designer-box">
            <div className="logo-unit project-anim">
              <img src={ProjectLogo} alt="Siddhi Homes" />
            </div>
            <div className="logo-divider-gold"></div>
            <div className="logo-unit group-anim">
              <img src={GroupLogo} alt="Shree Mahaveer Group" />
            </div>
          </div>
          <p className="footer-motto">
            "Crafting Legacies, Building Trust. Jodhpur's Premier Luxury Residential Landmark."
          </p>
        </div>

        {/* 3. INFORMATION GRID */}
        <div className="footer-main-grid">
          
          {/* COLUMN: QUICK LINKS */}
          <div className="footer-grid-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-links">
              <li><Link to="/"><FaChevronRight className="nav-arrow"/> Home</Link></li>
              <li><Link to="/about"><FaChevronRight className="nav-arrow"/> About Project</Link></li>
              <li><Link to="/portfolio"><FaChevronRight className="nav-arrow"/> Gallery</Link></li>
              <li><Link to="/hometech"><FaChevronRight className="nav-arrow"/> Amenities</Link></li>
              <li><Link to="/contact"><FaChevronRight className="nav-arrow"/> Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN: CONTACT DETAILS */}
          <div className="footer-grid-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-stack">
              <div className="contact-row">
                <FaMapMarkerAlt className="icon-gold"/>
                <p>E78/79 Near Bal Vidhya Mandir, Shastri Nagar, Jodhpur, RJ</p>
              </div>
              <div className="contact-row">
                <FaPhoneAlt className="icon-gold"/>
                <p>+91 88279 040290 <br/> +91 82333 94004</p>
              </div>
              <div className="contact-row">
                <FaEnvelope className="icon-gold"/>
                <p>shreemahaveer@gmail.com</p>
              </div>
            </div>
          </div>

          {/* COLUMN: CTA DESIGNER CARD */}
          <div className="footer-grid-col cta-column">
            <div className="footer-designer-card">
              <FaBuilding className="card-bg-icon" />
              <h5>Ready to Move?</h5>
              <p>Schedule a private site visit today and see your future home.</p>
              <Link to="/contact" className="footer-btn-gold">Book Site Visit</Link>
            </div>
          </div>

        </div>

        {/* 4. SOCIAL & COPYRIGHT BAR */}
        <div className="footer-bottom-designer">
          <div className="designer-separator"></div>
          <div className="bottom-content-wrap">
            <div className="social-icon-row">
              <a href="https://wa.me/918233394004" target="_blank" rel="noreferrer" className="s-icon wa"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/shreemahaveerrealestates/" target="_blank" rel="noreferrer" className="s-icon ig"><FaInstagram /></a>
              <a href="mailto:shreemahaveer@gmail.com" className="s-icon em"><FaEnvelope /></a>
            </div>
            
            <div className="copyright-designer">
              &copy; {new Date().getFullYear()} <span className="gold-txt">SIDDHI HOMES</span> | 
              Developed by <span className="maroon-txt">Shree Mahaveer Group</span>
            </div>

            <button onClick={scrollToTop} className="footer-scroll-top">
              <FaArrowUp /> <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;