import React, { useEffect } from 'react';
import './InstagramShowcase.css';
import { FaInstagram } from 'react-icons/fa';

const InstagramShowcase = () => {
  
  // Force Instagram script to re-run to render embeds correctly
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
    "https://www.instagram.com/reel/DUX5I6diR0j/", // <--- REPLACED LINK (Different Reel)
    "https://www.instagram.com/reel/DSH5p9dCWfK/"
  ];

  return (
    <section className="siddhi-insta-section">
      <div className="siddhi-insta-bg-glow"></div>
      
      <div className="siddhi-insta-container">
        
        <header className="siddhi-insta-header">
          <span className="siddhi-insta-tag">Social Feed</span>
          <h2 className="siddhi-insta-title">Trending at <span>Siddhi Homes</span></h2>
          <p className="siddhi-insta-subtitle">
            A glimpse into our premium developments and happy homeowners.
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
                <a href={url} target="_blank" rel="noopener noreferrer">View on Instagram</a>
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