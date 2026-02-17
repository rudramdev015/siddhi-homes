import React, { useEffect } from 'react';
import './InstagramShowcase.css';
import { FaInstagram } from 'react-icons/fa';

const InstagramShowcase = () => {
  
  // This effect ensures Instagram's embed script re-runs when the component mounts
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const reels = [
    "https://www.instagram.com/reel/DS7lOXUD9XB/",
    "https://www.instagram.com/reel/DSuIcuPCdnl/",
    "https://www.instagram.com/reel/DQofyLyCbsR/",
    "https://www.instagram.com/reel/DQRE2NmiRql/",
    "https://www.instagram.com/reel/DUX5I6diR0j/",
    "https://www.instagram.com/reel/DUAgpcwCQkL/",
    "https://www.instagram.com/reel/DUdG_yWiXHK/",
    "https://www.instagram.com/reel/DSH5p9dCWfK/"
  ];

  return (
    <section className="siddhi-insta-section">
      <div className="siddhi-insta-bg-glow"></div>
      
      <div className="siddhi-insta-container">
        <header className="siddhi-insta-header">
          <span className="siddhi-insta-tag">Experience Our Journey</span>
          <h2 className="siddhi-insta-title">Life at <span>Siddhi Homes</span></h2>
          <p className="siddhi-insta-subtitle">
            Follow our latest project updates, site visits, and luxury interiors directly from our Instagram feed.
          </p>
        </header>

        <div className="siddhi-insta-grid">
          {reels.map((url, index) => (
            <div key={index} className="siddhi-insta-card">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={`${url}?utm_source=ig_embed&amp;utm_campaign=loading`}
                data-instgrm-version="14"
              >
                {/* Fallback link while loading */}
                <a href={url} target="_blank" rel="noopener noreferrer">View Reel</a>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="siddhi-insta-footer">
          <a 
            href="https://www.instagram.com/shreemahaveerrealestates/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="siddhi-insta-btn"
          >
            <FaInstagram /> Follow @shreemahaveerrealestates
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;