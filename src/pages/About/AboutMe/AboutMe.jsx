import React, { useEffect, useRef, useState } from 'react';
import './AboutMe.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { 
  SiGmail, 
  SiLinkedin, 
  SiGithub,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql
} from 'react-icons/si';

// Ensure the path to your image is correct
import jitu from '../../../assets/about-me/jitu.jpg';

const AboutMe = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isSkillVisible, setIsSkillVisible] = useState(false);

  const topSectionRef = useRef(null);
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger if the element is intersecting (visible)
          if (entry.isIntersecting) {
            
            // If it's the top section, show it and stop observing
            if (entry.target === topSectionRef.current) {
              setIsTopVisible(true);
              observer.unobserve(entry.target);
            }
            
            // If it's the skill section, show it and stop observing
            if (entry.target === skillSectionRef.current) {
              setIsSkillVisible(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentTopSection = topSectionRef.current;
    const currentSkillSection = skillSectionRef.current;

    // Only observe if the state is currently false (not yet animated)
    if (currentTopSection && !isTopVisible) observer.observe(currentTopSection);
    if (currentSkillSection && !isSkillVisible) observer.observe(currentSkillSection);

    return () => {
      if (currentTopSection) observer.unobserve(currentTopSection);
      if (currentSkillSection) observer.unobserve(currentSkillSection);
    };
  }, [isTopVisible, isSkillVisible]); // Added dependencies to ensure logic holds

  return (
    <div className="about-me-layout__wrapper">
      {/* BACKGROUND LINES */}
      <div className="about-me-layout__bg-lines-container">
        <svg className="about-me-layout__bg-svg" viewBox="0 0 1440 1024" preserveAspectRatio="none">
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

      <div className="about-me-layout__container">
        
        {/* --- TOP SECTION --- */}
        <div 
          className={`about-me-layout__top-section ${isTopVisible ? 'section-in-view' : ''}`}
          ref={topSectionRef}
        >
          <div className="about-me-layout__intro">
            
            <div className="about-me-layout__title-bleed animate-left delay-1">
              <h1 className="about-me-layout__title">
                <span className="about-me-layout__title-text">About me</span>
              </h1>
            </div>
            
            <div className="about-me-layout__bio">
              <p className="about-me-layout__greet animate-zoom delay-2">Hi!</p>
              <p className="about-me-layout__name-line animate-zoom delay-3">
                My name is <strong className="highlight-text">Jitendra Parmar.</strong>
              </p>
              <p className="about-me-layout__text animate-zoom delay-4">
                I am a <strong>Full Stack Developer</strong> passionate about building scalable web applications and exploring the depths of Data Science. Currently pursuing my degree, I focus on creating seamless user experiences combined with efficient, data-driven backend logic.
              </p>
              <p className="about-me-layout__text animate-zoom delay-5">
                <strong>My objective:</strong> To leverage my full-stack expertise and analytical skills in a challenging environment where I can contribute to innovative digital solutions and drive impactful results.
              </p>
            </div>
            
            <div className="about-me-layout__contact-area animate-left delay-6">
              <h2 className="about-me-layout__contact-label">Contact</h2>
              <div className="about-me-layout__contact-grid">
                
                <a href="mailto:jitparmar993@gmail.com" className="about-me-layout__contact-link">
                  <div className="about-me-layout__icon-wrapper">
                    <span className="about-me-layout__icon-circle"><SiGmail /></span>
                  </div>
                  <span className="about-me-layout__contact-text">jitparmar993@gmail.com</span>
                </a>
                
                <div className="about-me-layout__contact-link">
                  <div className="about-me-layout__icon-wrapper">
                    <span className="about-me-layout__icon-circle"><FaPhoneAlt /></span>
                  </div>
                  <span className="about-me-layout__contact-text">+91 7424908900</span>
                </div>
                
                <a href="https://www.linkedin.com/in/jitendraparmar10/" target="_blank" rel="noreferrer" className="about-me-layout__contact-link">
                  <div className="about-me-layout__icon-wrapper">
                    <span className="about-me-layout__icon-circle"><SiLinkedin /></span>
                  </div>
                  <span className="about-me-layout__contact-text">linkedin.com/in/jitendraparmar10</span>
                </a>
                
                <a href="https://github.com/jitendraparmar10" target="_blank" rel="noreferrer" className="about-me-layout__contact-link">
                  <div className="about-me-layout__icon-wrapper">
                    <span className="about-me-layout__icon-circle"><SiGithub /></span>
                  </div>
                  <span className="about-me-layout__contact-text">github.com/jitendraparmar10</span>
                </a>

              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="about-me-layout__image-section">
            <div className="about-me-layout__image-wrapper animate-right delay-2">
              <div className="about-me-layout__image-mask">
                <img src={jitu} alt="Jitendra Parmar" />
              </div>
              <div className="about-me-layout__image-accent-curve"></div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION (Skills Card) --- */}
        <div 
          className={`about-me-layout__skills-card ${isSkillVisible ? 'section-in-view' : ''} delay-card`}
          ref={skillSectionRef}
        >
          <div className="about-me-layout__skills-content">
            
            <div className="about-me-layout__skill-column education-column">
              <div className="about-me-layout__heading-row">
                <h3 className="about-me-layout__heading">Education</h3>
                <div className="about-me-layout__tag">2021 - 2025</div>
              </div>
              <p className="about-me-layout__para-muted education-text">
                B.Tech from Jodhpur Institute of Engineering and Technology. 
                Computer Science (Specialization in Data Science).
              </p>
            </div>
            
            <div className="about-me-layout__skill-column">
              <h3 className="about-me-layout__heading">Soft skill</h3>
              <div className="about-me-layout__list-container">
                <ul className="about-me-layout__list">
                  <li>Problem Solving</li>
                  <li>Analytical Thinking</li>
                </ul>
                <div className="about-me-layout__vertical-line"></div>
                <ul className="about-me-layout__list">
                  <li>Team Collaboration</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>

            <div className="about-me-layout__skill-column">
              <h3 className="about-me-layout__heading">Technical skill</h3>
              <div className="about-me-layout__software-grid-3x3">
                <div className="about-me-layout__sw-icon about-me-layout__brand-js"><SiJavascript /></div>
                <div className="about-me-layout__sw-icon about-me-layout__brand-react"><SiReact /></div>
                <div className="about-me-layout__sw-icon about-me-layout__brand-node"><SiNodedotjs /></div>
                <div className="about-me-layout__sw-icon about-me-layout__brand-mongo"><SiMongodb /></div>
                <div className="about-me-layout__sw-icon about-me-layout__brand-express"><SiExpress /></div>
                <div className="about-me-layout__sw-icon about-me-layout__brand-mysql"><SiMysql /></div>
              </div>
            </div>

            <div className="about-me-layout__skill-column">
              <h3 className="about-me-layout__heading">Skill set</h3>
               <div className="about-me-layout__list-container">
                <ul className="about-me-layout__list">
                  <li>RESTful APIs</li>
                  <li>MERN Stack</li>
                  <li>Database Mgmt</li>
                </ul>
                <div className="about-me-layout__vertical-line"></div>
                <ul className="about-me-layout__list">
                  <li>System Design</li>
                  <li>Data Analysis</li>
                  <li>Git Version Control</li>
                </ul>
              </div>
            </div>

            <div className="about-me-layout__skill-column">
              <h3 className="about-me-layout__heading">Interest</h3>
              <p className="about-me-layout__para-muted education-text">
                Technology <span className="about-me-layout__pipe">|</span> Drawing
              </p>
            </div>

            <div className="about-me-layout__skill-column">
              <h3 className="about-me-layout__heading">Language</h3>
              <p className="about-me-layout__para-muted education-text">
                Hindi <span className="about-me-layout__pipe">|</span> English
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;