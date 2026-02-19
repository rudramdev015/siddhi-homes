import React, { useState, useEffect, useCallback } from "react";
import "./Portfolio.css";
import { FaPlay, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- LOCAL ASSET IMPORTS (Using your specific files) ---
import hero12 from './hero section SMRS (12).png'; // Main Exterior
import hero15 from './hero section SMRS (15).png'; // Interior/Detail
import vid02 from './sm 02.mp4'; // Video 1
import vid03 from './sm 03.mp4'; // Video 2
import h10 from './hero section SMRS (10).png'; // Poster for video
import h17 from './hero section SMRS (17).png'; // Poster for video

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  // EXACTLY 4 ITEMS FOR THE HOME PAGE
  const mediaData = [
    { 
      id: 1, type: 'photo', src: hero12, 
      title: "The Grand Elevation", cat: "Exterior", size: "large" 
    },
    { 
      id: 2, type: 'video', src: vid02, poster: h10, 
      title: "Luxury Walkthrough", cat: "Cinema", size: "medium" 
    },
    { 
      id: 3, type: 'photo', src: hero15, 
      title: "Modern Interiors", cat: "Design", size: "small" 
    },
    { 
      id: 4, type: 'video', src: vid03, poster: h17, 
      title: "Elite Lifestyle", cat: "Cinema", size: "small" 
    }
  ];

  const closeLightbox = () => { setSelectedIndex(null); setZoom(1); document.body.style.overflow = 'auto'; };
  const openLightbox = (index) => { setSelectedIndex(index); document.body.style.overflow = 'hidden'; };

  const nextMedia = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % mediaData.length);
    setZoom(1);
  }, [mediaData.length]);

  const prevMedia = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + mediaData.length) % mediaData.length);
    setZoom(1);
  }, [mediaData.length]);

  useEffect(() => {
    const handleKeys = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [selectedIndex, nextMedia, prevMedia]);

  const currentMedia = selectedIndex !== null ? mediaData[selectedIndex] : null;

  return (
    <div className="portfolio-section-container">
      <div className="portfolio-content">
        <div className="section-header">
          <span className="accent-text">Siddhi Homes Gallery</span>
          <h2>Crafting Your Legacy</h2>
        </div>

        <div className="bento-gallery">
          {mediaData.map((item, index) => (
            <div key={item.id} className={`gallery-card ${item.size}`} onClick={() => openLightbox(index)}>
              <div className="card-overlay">
                <div className="play-btn-circle">
                  {item.type === 'video' ? <FaPlay /> : <FaSearchPlus />}
                </div>
                <div className="card-info">
                  <small>{item.cat}</small>
                  <h3>{item.title}</h3>
                </div>
              </div>
              
              {item.type === 'video' ? (
                <video muted loop autoPlay playsInline className="media-bg" poster={item.poster}>
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img src={item.src} alt={item.title} className="media-bg" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX --- */}
      {selectedIndex !== null && currentMedia && (
        <div className="elite-lightbox">
          <div className="lightbox-backdrop" onClick={closeLightbox}></div>
          <button className="nav-btn left-nav" onClick={prevMedia}><FaChevronLeft /></button>
          <button className="nav-btn right-nav" onClick={nextMedia}><FaChevronRight /></button>
          
          <div className="lightbox-ui">
            <div className="ui-left">
               <button className="zoom-btn" onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.5, 3)); }}>+</button>
               <button className="zoom-btn" onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(z - 0.5, 1)); }}>-</button>
            </div>
            <button className="lightbox-close-btn" onClick={closeLightbox}><FaTimes /></button>
          </div>

          <div className="lightbox-main-stage" onClick={e => e.stopPropagation()}>
            <div className="media-box" style={{ transform: `scale(${zoom})` }}>
                {currentMedia.type === 'video' ? (
                    <video controls autoPlay className="main-media" poster={currentMedia.poster}>
                        <source src={currentMedia.src} />
                    </video>
                ) : (
                    <img src={currentMedia.src} alt="" className="main-media" />
                )}
            </div>
            <div className="lightbox-footer-info">
                <h3>{currentMedia.title}</h3>
                <p>{currentMedia.cat} | {selectedIndex + 1} / {mediaData.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;