import React, { useState, useEffect, useCallback } from "react";
import "./Portfolio.css";
import { FaPlay, FaSearchPlus, FaTimes, FaCamera, FaVideo, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- ASSET IMPORTS (Based on your VS Code screenshot) ---
import img1 from './1.png.png';
import img2 from './2.png.png';
import img3 from './3.png.png';
import img4 from './4.png.png';
import img11 from './11.png.jpeg';
import img12 from './12.png.jpeg';
import img13 from './13.png.jpeg';
import img14 from './14.png.jpeg';
import img15 from './15.png.jpeg';
import img16 from './16.png.jpeg';
import img17 from './17.png.jpeg';
import img18 from './18.png.jpeg';
import img19 from './19.png.jpeg';
import img20 from './20.png.jpeg';
import img21 from './21.png.jpeg';

import mainVid from './2026-01-30-15-37-00-135.mov';
import sm01 from './sm 01.mp4';
import sm02 from './sm 02.mp4';
import sm03 from './sm 03.mp4';
import sm04 from './sm 04.mp4';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const mediaData = [
    { id: 1, type: 'video', src: mainVid, title: "Modern Elevation", cat: "Exterior", size: "large" },
    { id: 2, type: 'video', src: sm01, title: "Interior Flow", cat: "Cinema", size: "medium" },
    { id: 3, type: 'photo', src: img1, title: "Grand Facade", cat: "Exterior", size: "large" },
    { id: 4, type: 'photo', src: img11, title: "Luxury Living", cat: "Interior", size: "small" },
    { id: 5, type: 'photo', src: img12, title: "Master Suite", cat: "Interior", size: "medium" },
    { id: 6, type: 'video', src: sm02, title: "Garden View", cat: "Exterior", size: "small" },
    { id: 7, type: 'video', src: sm03, title: "Night Ambiance", cat: "Cinema", size: "medium" },
    { id: 8, type: 'photo', src: img13, title: "Fine Dining", cat: "Interior", size: "large" },
    { id: 9, type: 'photo', src: img16, title: "Chef's Kitchen", cat: "Interior", size: "medium" },
    { id: 10, type: 'photo', src: img20, title: "Sky Balcony", cat: "Exterior", size: "large" },
    { id: 11, type: 'video', src: sm04, title: "Sunrise View", cat: "Cinema", size: "small" },
    { id: 12, type: 'photo', src: img21, title: "Main Entrance", cat: "Exterior", size: "medium" },
  ];

  const filteredMedia = filter === 'all' ? mediaData : mediaData.filter(m => m.type === filter);

  const closeLightbox = () => { setSelectedIndex(null); setZoom(1); document.body.style.overflow = 'auto'; };
  const openLightbox = (index) => { setSelectedIndex(index); document.body.style.overflow = 'hidden'; };

  const nextMedia = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredMedia.length);
    setZoom(1);
  }, [filteredMedia.length]);

  const prevMedia = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length);
    setZoom(1);
  }, [filteredMedia.length]);

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

  const currentMedia = selectedIndex !== null ? filteredMedia[selectedIndex] : null;

  return (
    <div className="portfolio-section-container">
      <div className="portfolio-content">
        <div className="section-header">
          <span className="accent-text">Siddhi Homes Portfolio</span>
          <h2>Crafting Legacies</h2>
          <div className="filter-pills">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Projects</button>
            <button className={filter === 'photo' ? 'active' : ''} onClick={() => setFilter('photo')}><FaCamera /> Photography</button>
            <button className={filter === 'video' ? 'active' : ''} onClick={() => setFilter('video')}><FaVideo /> Films</button>
          </div>
        </div>

        <div className="bento-gallery">
          {filteredMedia.map((item, index) => (
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
                <video muted loop autoPlay playsInline className="media-bg">
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img src={item.src} alt={item.title} className="media-bg" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- ELITE LIGHTBOX (Strictly conditional to prevent leaking into footer) --- */}
      {selectedIndex !== null && currentMedia && (
        <div className="elite-lightbox">
          <div className="lightbox-backdrop" onClick={closeLightbox}></div>
          
          <button className="nav-btn left-nav" onClick={prevMedia}><FaChevronLeft /></button>
          <button className="nav-btn right-nav" onClick={nextMedia}><FaChevronRight /></button>
          
          <div className="lightbox-ui">
            <div className="ui-left">
               <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.5, 3)); }}>Zoom +</button>
               <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(z - 0.5, 1)); }}>Zoom -</button>
            </div>
            <button className="lightbox-close-btn" onClick={closeLightbox}><FaTimes /></button>
          </div>

          <div className="lightbox-main-stage" onClick={e => e.stopPropagation()}>
            <div className="media-box" style={{ transform: `scale(${zoom})` }}>
                {currentMedia.type === 'video' ? (
                    <video controls autoPlay className="main-media">
                        <source src={currentMedia.src} />
                    </video>
                ) : (
                    <img src={currentMedia.src} alt="" className="main-media" />
                )}
            </div>
            <div className="lightbox-footer-info">
                <h3>{currentMedia.title}</h3>
                <p>{currentMedia.cat} | {selectedIndex + 1} / {filteredMedia.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;