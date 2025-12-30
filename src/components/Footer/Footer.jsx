import React from 'react';

// Import your new CSS file
import './Footer.css';

// Import the icons needed for the footer
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="jsparmar-footer-wrapper">
      <div className="jsparmar-footer-container">

        {/* Top Section */}
        <div className="jsparmar-footer-top-section">
          
          {/* Left Side: Text */}
          <div className="jsparmar-footer-text-content">
            <p className="jsparmar-footer-crafted-by">Crafted with Precision & Passion by</p>
            <h3 className="jsparmar-footer-name">
              Jitendra <span>Parmar</span>
            </h3>
          </div>

          {/* Right Side: Social Icons */}
          <div className="jsparmar-footer-social-icons">
            <a href="https://x.com/jituparmar993" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="mailto:jitparmar993@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/jitendraparmar10/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/jitendraparmar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/jitendraparmar_10/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="jsparmar-footer-divider"></div>

        {/* Bottom Section */}
        <div className="jsparmar-footer-bottom-section">
          <p>&copy; {new Date().getFullYear()} Jitendra Parmar – All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;