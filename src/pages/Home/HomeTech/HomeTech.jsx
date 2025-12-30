import React, { useState, useRef, useEffect, useCallback } from 'react';
import './HomeTech.css';

// Importing icons from 'react-icons'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb } from 'react-icons/si';

// List of technologies with their original brand colors
const technologies = [
  { name: 'HTML', id: 'html', IconComponent: FaHtml5, color: '#E34F26' },
  { name: 'CSS', id: 'css', IconComponent: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', id: 'javascript', IconComponent: IoLogoJavascript, color: '#F7DF1E' },
  { name: 'React', id: 'react', IconComponent: FaReact, color: '#61DAFB' },
  { name: 'Node.js', id: 'nodejs', IconComponent: FaNodeJs, color: '#339933' },
  { name: 'Express', id: 'express', IconComponent: SiExpress, color: '#000000' },
  { name: 'MongoDB', id: 'mongodb', IconComponent: SiMongodb, color: '#47A248' },
  { name: 'SQL', id: 'sql', IconComponent: FaDatabase, color: '#4479A1' }
];

const ThreeDSlide = ({ tech }) => {
  return (
    <div className="home-technology-stack-slide">
      <div className="home-technology-stack-slide-content">
        <div className="home-technology-stack-icon-container">
          <div className="home-technology-stack-icon-back"></div>
          <div className="home-technology-stack-icon-front">
            <div className="home-technology-stack-icon-wrapper">
              <tech.IconComponent style={{ color: tech.color }} />
            </div>
          </div>
        </div>
        <p className="home-technology-stack-tech-name">{tech.name}</p>
      </div>
    </div>
  );
};

function HomeTech() {
  const extendedTechnologies = [...technologies, ...technologies];

  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameId = useRef(null);
  const currentX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollStartX = useRef(0);

  const animate = useCallback(() => {
    const scrollSpeed = 0.5;
    currentX.current -= scrollSpeed;

    if (trackRef.current) {
        const loopWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(currentX.current) >= loopWidth) {
            currentX.current = 0;
        }
        trackRef.current.style.transform = `translateX(${currentX.current}px)`;
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [animate]);

  const getClientX = (e) => {
    return e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    cancelAnimationFrame(animationFrameId.current);
    startX.current = getClientX(e);
    scrollStartX.current = currentX.current;
    if (sliderRef.current) {
      sliderRef.current.classList.add('grabbing');
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();

    const x = getClientX(e);
    const walk = (x - startX.current) * 1.5;
    let newX = scrollStartX.current + walk;
    
    const loopWidth = trackRef.current.scrollWidth / 2;
    if (newX > 0) {
        newX = -loopWidth + (newX % loopWidth);
    } else if (Math.abs(newX) > loopWidth) {
        newX = -(Math.abs(newX) % loopWidth);
    }

    currentX.current = newX;
    trackRef.current.style.transform = `translateX(${currentX.current}px)`;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('grabbing');
    }
    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <div className="home-technology-stack-body">
      {/* BACKGROUND LINES from AboutMe */}
      <div className="home-technology-stack-bg-lines-container">
        <svg className="home-technology-stack-bg-svg" viewBox="0 0 1440 1024" preserveAspectRatio="none">
          <path 
            d="M-50,200 C300,50 600,600 1500,100" 
            stroke="#00ff00" strokeOpacity="0.15" strokeWidth="1" fill="none" 
          />
          <path 
            d="M-100,600 C400,800 1000,300 1600,900" 
            stroke="#00ff00" strokeOpacity="0.12" strokeWidth="1" fill="none" 
          />
        </svg>
      </div>

      <div className="home-technology-stack-main-container">
        <h2 className="home-technology-stack-heading">My<span>Skills</span></h2>
        <div
          className="home-technology-stack-slider-container"
          ref={sliderRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="home-technology-stack-slider-track" ref={trackRef}>
            {extendedTechnologies.map((tech, index) => (
              <ThreeDSlide key={`${tech.id}-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTech;