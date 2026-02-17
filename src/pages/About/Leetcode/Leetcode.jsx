import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaRoad, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaAward, 
  FaBuilding, 
  FaGopuram, 
  FaTree 
} from 'react-icons/fa';
import CountUp from 'react-countup';
import './Leetcode.css'; // Filename remains the same to keep your structure intact

const Leetcode = () => {
  // Stunning SEO-Friendly Project Data from your Brochure
  const projectStats = {
    totalUnits: 62,
    roadWidth: 30,
    completion: 95, 
    soldUnits: 48,
    reraNo: "RAJ/P/2023/2610",
    location: "Pal, Jodhpur"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="siddhi-specs-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="siddhi-specs-bg-overlay"></div>

      <div className="siddhi-specs-wrapper">
        <motion.header className="siddhi-specs-header" variants={slideUp}>
          <div className="header-content">
            <h2 className="section-title">PROJECT <span>SPECIFICATIONS</span></h2>
            <p className="section-subtitle">
              <FaMapMarkerAlt className="gold" /> Strategically Located in {projectStats.location}
            </p>
          </div>
          <div className="rera-stamp">
            <FaShieldAlt /> <span>RERA APPROVED: {projectStats.reraNo}</span>
          </div>
        </motion.header>

        <main className="siddhi-specs-grid">
          {/* Column 1: Infrastructure */}
          <motion.div className="specs-column" variants={slideUp}>
            <div className="spec-card">
              <FaRoad className="spec-icon gold" />
              <div className="spec-info">
                <h4>{projectStats.roadWidth}+ FT Wide</h4>
                <p>Paved Internal Roads</p>
              </div>
            </div>
            <div className="spec-card">
              <FaHome className="spec-icon gold" />
              <div className="spec-info">
                <h4><CountUp end={projectStats.totalUnits} duration={3} /> Premium</h4>
                <p>Residential Units</p>
              </div>
            </div>
            <div className="spec-card">
              <FaShieldAlt className="spec-icon gold" />
              <div className="spec-info">
                <h4>Individual JDA Patta</h4>
                <p>Secure Legal Ownership</p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Visual Progress */}
          <motion.div className="specs-progress-visual" variants={slideUp}>
            <div className="progress-circle">
              <svg viewBox="0 0 100 100">
                <circle className="bg" cx="50" cy="50" r="45" />
                <motion.circle 
                  className="bar" 
                  cx="50" cy="50" r="45" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: projectStats.completion / 100 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </svg>
              <div className="progress-text">
                <span className="percent">{projectStats.completion}%</span>
                <span className="label">READY TO MOVE</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Amenities & Booking */}
          <motion.div className="specs-column" variants={slideUp}>
            <div className="amenities-summary">
              <h3 className="gold-text">Premium Amenities</h3>
              <div className="amenity-icons">
                <div className="am-box" title="Temple"><FaGopuram /></div>
                <div className="am-box" title="Greenery"><FaTree /></div>
                <div className="am-box" title="Modern Architecture"><FaBuilding /></div>
                <div className="am-box" title="Award Winning"><FaAward /></div>
              </div>
            </div>

            <div className="booking-status-card">
              <div className="status-row">
                <span>Current Availability</span>
                <span className="gold-text">{projectStats.totalUnits - projectStats.soldUnits} Units Left</span>
              </div>
              <div className="progress-bar-flat">
                <motion.div 
                  className="fill" 
                  initial={{ width: 0 }}
                  animate={{ width: `${(projectStats.soldUnits / projectStats.totalUnits) * 100}%` }}
                  transition={{ duration: 1.5 }}
                />
              </div>
              <p className="sold-text">Join {projectStats.soldUnits} families already at Siddhi Homes</p>
              <a href="tel:+918233394004" className="spec-book-btn">BOOK SITE VISIT</a>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default Leetcode;