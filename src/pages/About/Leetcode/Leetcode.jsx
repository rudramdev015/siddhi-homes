import React, { useState, useEffect } from 'react';
import { SiLeetcode, SiCplusplus } from 'react-icons/si';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import './Leetcode.css';

const Leetcode = () => {
  const [leetCodeStats, setLeetCodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyStats, setDailyStats] = useState({ yesterday: 0, today: 0 });
  const leetCodeUsername = "jitendraparmar10";

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${leetCodeUsername}`);
        if (!response.ok) throw new Error(`Failed to fetch stats: ${response.statusText}`);

        const data = await response.json();
        if (data.message) throw new Error(data.message);

        setLeetCodeStats(data);

        // --- REAL DAILY COUNT FROM SUBMISSION CALENDAR ---
        const calendar = data.submissionCalendar || {};

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        let todaySolved = 0;
        let yesterdaySolved = 0;

        Object.entries(calendar).forEach(([timestamp, count]) => {
          const date = new Date(Number(timestamp) * 1000);
          date.setHours(0, 0, 0, 0);

          if (date.getTime() === today.getTime()) {
            todaySolved += count;
          }

          if (date.getTime() === yesterday.getTime()) {
            yesterdaySolved += count;
          }
        });

        setDailyStats({
          yesterday: yesterdaySolved,
          today: todaySolved,
        });


      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCodeStats();
  }, [leetCodeUsername]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
      },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
      },
    },
  };

  const popUp = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // Circle Progress Bar Configuration
  const radius = 85;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const arcAngle = 270;
  const arcLength = circumference * (arcAngle / 360);
  const rotation = -225;
  const gapLength = 5;

  const renderProgressCircle = () => {
    if (!leetCodeStats) return null;
    const { totalSolved, easySolved, mediumSolved } = leetCodeStats;
    if (totalSolved === 0) return <circle className="leetcode-preview-arc-background" cx="100" cy="100" r={radius} strokeWidth={strokeWidth} transform={`rotate(${rotation} 100 100)`} style={{ strokeDasharray: `${arcLength} ${circumference}` }} />;

    const availableArcLength = arcLength - (2 * gapLength);
    const easyDash = Math.max(0, (easySolved / totalSolved) * availableArcLength);
    const mediumDash = Math.max(0, (mediumSolved / totalSolved) * availableArcLength);
    const hardDash = Math.max(0, ((totalSolved - easySolved - mediumSolved) / totalSolved) * availableArcLength);
    const mediumOffset = -(easyDash + gapLength);
    const hardOffset = -(easyDash + mediumDash + 2 * gapLength);

    return (
      <>
        <circle className="leetcode-preview-arc-background" cx="100" cy="100" r={radius} strokeWidth={strokeWidth} transform={`rotate(${rotation} 100 100)`} style={{ strokeDasharray: `${arcLength} ${circumference}` }} />
        <motion.circle initial={{ strokeDasharray: `0 ${circumference}` }} animate={{ strokeDasharray: `${easyDash} ${circumference}` }} transition={{ duration: 2.5, ease: "easeInOut" }} className="leetcode-preview-progress-arc leetcode-preview-easy" cx="100" cy="100" r={radius} strokeWidth={strokeWidth} transform={`rotate(${rotation} 100 100)`} />
        <motion.circle initial={{ strokeDasharray: `0 ${circumference}` }} animate={{ strokeDasharray: `${mediumDash} ${circumference}` }} transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }} className="leetcode-preview-progress-arc leetcode-preview-medium" cx="100" cy="100" r={radius} strokeWidth={strokeWidth} transform={`rotate(${rotation} 100 100)`} style={{ strokeDashoffset: mediumOffset }} />
        <motion.circle initial={{ strokeDasharray: `0 ${circumference}` }} animate={{ strokeDasharray: `${hardDash} ${circumference}` }} transition={{ duration: 2.5, ease: "easeInOut", delay: 1.0 }} className="leetcode-preview-progress-arc leetcode-preview-hard" cx="100" cy="100" r={radius} strokeWidth={strokeWidth} transform={`rotate(${rotation} 100 100)`} style={{ strokeDashoffset: hardOffset }} />
      </>
    );
  };

  if (loading) return <div className="leetcode-preview-container leetcode-preview-loading">Loading...</div>;
  if (error) return <div className="leetcode-preview-container leetcode-preview-error">Error: {error}</div>;

  const { totalSolved, totalQuestions, ranking, easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard } = leetCodeStats;

  return (
    <motion.div
      className="leetcode-preview-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Lines */}
      <div className="leetcode-preview-bg-lines-container">
        <svg className="leetcode-preview-bg-svg" viewBox="0 0 1440 1024" preserveAspectRatio="none">
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

      <div className="leetcode-preview-content-wrapper">
        <motion.header className="leetcode-preview-header" variants={slideInFromLeft}>
          <div className="leetcode-preview-header-left">
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="leetcode-preview-logo-link">
              <SiLeetcode size={36} />
              <span className="leetcode-preview-logo-text">
                LeetCode <span>Stats</span>
              </span>
            </a>
            <div className="leetcode-preview-user-profile">
              <a href={`https://leetcode.com/u/${leetCodeUsername}/`} target="_blank" rel="noopener noreferrer" className="leetcode-preview-user-name">Jitendra Parmar</a>
              <span className="leetcode-preview-user-rank">Rank: <CountUp end={ranking} duration={3.5} separator="," /></span>
            </div>
          </div>
        </motion.header>

        <main className="leetcode-preview-main-content">
          <motion.div className="leetcode-preview-difficulty-stats" variants={slideInFromLeft}>
            <div className="leetcode-preview-stats-row">
              <div className="leetcode-preview-difficulty-item"><span className="leetcode-preview-difficulty-label leetcode-preview-easy-text">Easy</span><span className="leetcode-preview-difficulty-value"><CountUp end={easySolved} duration={3} /> / {totalEasy}</span></div>
              <div className="leetcode-preview-difficulty-item"><span className="leetcode-preview-difficulty-label leetcode-preview-medium-text">Medium</span><span className="leetcode-preview-difficulty-value"><CountUp end={mediumSolved} duration={3.5} /> / {totalMedium}</span></div>
            </div>
            <div className="leetcode-preview-difficulty-item"><span className="leetcode-preview-difficulty-label leetcode-preview-hard-text">Hard</span><span className="leetcode-preview-difficulty-value"><CountUp end={hardSolved} duration={4} /> / {totalHard}</span></div>
          </motion.div>

          <motion.div className="leetcode-preview-progress-circle-container" variants={popUp}>
            <svg width="250" height="250" viewBox="0 0 200 200">{renderProgressCircle()}</svg>
            <div className="leetcode-preview-progress-text">
              <div className="leetcode-preview-solved-count">
                <CountUp end={totalSolved} duration={3} />
                <span className="leetcode-preview-total-count">/{totalQuestions}</span>
              </div>
              <div className="leetcode-preview-solved-label"><span className="leetcode-preview-checkmark">✓</span> Solved</div>
            </div>
          </motion.div>

          <motion.div className="leetcode-preview-right-sidebar" variants={slideInFromRight}>
            <div className="leetcode-preview-language-info">
              <h3 className="leetcode-preview-language-title">Preferred Language</h3>
              <div className="leetcode-preview-language-logo"><SiCplusplus size={32} className="leetcode-preview-cpp-icon" /><span className="leetcode-preview-language-name">C++</span></div>
            </div>
            <div className="leetcode-preview-stats-row">
              <div className="leetcode-preview-daily-stats-item">
                <span className="leetcode-preview-daily-stats-label">Yesterday's Solved</span>
                <span className="leetcode-preview-daily-stats-value"><CountUp end={dailyStats.yesterday} duration={3} /></span>
              </div>
              <div className="leetcode-preview-daily-stats-item">
                <span className="leetcode-preview-daily-stats-label">Solved Today</span>
                <span className={`leetcode-preview-daily-stats-value ${dailyStats.today > 0 ? 'leetcode-preview-active' : ''}`}><CountUp end={dailyStats.today} duration={3} /></span>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default Leetcode;