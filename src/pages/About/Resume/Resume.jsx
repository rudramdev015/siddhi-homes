import React from 'react';
import './Resume.css';

// Importing the PDF file directly from your current folder
import brochure from './Siddhi Homes Brochure (1).pdf';

function Resume() {
  return (
    <div className="siddhi-brochure-app">
      <section className="siddhi-brochure-section">
        <div className="siddhi-brochure-card">
          
          {/* Left Side: Real Estate Content */}
          <div className="siddhi-brochure-content">
            <h2 className="siddhi-brochure-heading">
              Explore The Siddhi <span>Homes Legacy</span>
            </h2>
            <p className="siddhi-brochure-subtext">
              Download our official brochure to discover premium floor plans, 
              urban luxuries, and detailed site specifications.
            </p>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="siddhi-brochure-actions">
            
            {/* Button 1: Download Brochure */}
            <a 
              href={brochure} 
              download="Siddhi_Homes_Brochure.pdf" 
              className="siddhi-brochure-btn siddhi-brochure-btn-primary"
            >
              <span className="siddhi-brochure-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </span>
              <span className="siddhi-brochure-label-single">Download Brochure</span>
            </a>

            {/* Button 2: View Online */}
            <a 
              href={brochure} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="siddhi-brochure-btn siddhi-brochure-btn-outline"
            >
              <span className="siddhi-brochure-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span className="siddhi-brochure-label-single">View Online</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;