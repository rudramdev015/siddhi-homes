import React from 'react';
import './Resume.css';

// Importing the PDF file
import resume from '../../../assets/about-me/my-resume.pdf';

function Resume() {
  return (
    <div className="my-resume-app">
      <section className="my-resume-section">
        <div className="my-resume-card">
          
          {/* Left Side: Text Content */}
          <div className="my-resume-content">
            <h2 className="my-resume-heading">
              Ready to Learn More?
            </h2>
            <p className="my-resume-subtext">
              Discover my journey, projects, and expertise in detail.
            </p>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="my-resume-actions">
            
            {/* Button 1: Download Resume (Connected to Imported File) */}
            <a 
              href={resume} 
              download="My_Resume.pdf" 
              className="my-resume-btn my-resume-btn-primary"
            >
              <span className="my-resume-icon">
                {/* Download Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </span>
              {/* Text is now in one line using label-single */}
              <span className="my-resume-label-single">Download Resume</span>
            </a>

            {/* Button 2: View Online (Fixed Google Drive Link) */}
            <a 
              href="https://drive.google.com/file/d/1aRo61p3RUOEN7chfHmz8EO-4VJMfwjTG/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="my-resume-btn my-resume-btn-outline"
            >
              <span className="my-resume-icon">
                {/* Eye Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span className="my-resume-label-single">View Online</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;