import React from 'react';
import { motion } from 'framer-motion';
// Added FaUserGraduate, FaChartBar, FaLaptopCode to imports for your specific data
import { 
  FaShapes, 
  FaRocket, 
  FaCalendarAlt, 
  FaCode, 
  FaServer, 
  FaUserTie, 
  FaUserGraduate, 
  FaChartBar, 
  FaLaptopCode 
} from 'react-icons/fa';
import './Journey.css';

const journeyData = [
  {
    id: '01',
    theme: 'my-journey-layout-theme-orange',
    year: 'September 2021',
    flapContent: <FaUserGraduate />,
    title: 'Engineering Start',
    description: 'Enrolled in B.Tech CSE (Data Science) at JIET, Jodhpur. The beginning of my technical foundation.',
  },
  {
    id: '02',
    theme: 'my-journey-layout-theme-yellow',
    year: 'May 2023',
    flapContent: <FaCode />,
    title: 'MERN Training',
    description: 'Trained at SSDN Technologies. Mastered React, Node, & Mongo. Built "ESKAJI Sweets" full-stack app.',
  },
  {
    id: '03',
    theme: 'my-journey-layout-theme-purple',
    year: 'June 2024 - August 2024',
    flapContent: <FaChartBar />,
    title: 'Power BI Intern',
    description: 'Internship at Celebal Technologies. Created interactive dashboards and visualized complex business data.',
  },
  {
    id: '04',
    theme: 'my-journey-layout-theme-red',
    year: 'June 2024 - August 2024',
    flapContent: <FaLaptopCode />,
    title: 'Frontend Intern',
    description: 'Developer at Aarvy Technologies. Built responsive React UIs and integrated Node.js backend systems.',
  },
  {
    id: '05',
    theme: 'my-journey-layout-theme-blue',
    year: 'May 2025',
    flapContent: <FaRocket />,
    title: 'Graduation',
    description: 'B.Tech Completed with 8.82 CGPA. Specialized in Data Science & Full Stack Development.',
  },
  {
    id: '06',
    theme: 'my-journey-layout-theme-green',
    year: 'Future',
    flapContent: <FaUserTie />,
    title: 'Professional',
    description: 'Ready for the industry. Combining System Design, strong logic, and experience to build scalable solutions.',
  },
];

const Journey = () => {
  return (
    <section className="my-journey-layout-container">
      
      {/* --- BACKGROUND SVG LINES --- */}
      <div className="my-journey-layout-bg-lines-container">
        <svg className="my-journey-layout-bg-svg" viewBox="0 0 1440 1024" preserveAspectRatio="none">
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

      {/* HEADER SECTION */}
      <div className="my-journey-layout-header">
        <h1 className="my-journey-layout-title">My Journey</h1>
        <p className="my-journey-layout-subtitle">From Student to Professional Developer</p>
      </div>

      <div className="my-journey-layout-grid">
        {journeyData.map((item, index) => {

          const wrapperVariants = {
            closed: {
              height: 180,
              transition: { duration: 0.6, ease: "easeInOut" }
            },
            open: {
              height: 520,
              transition: { duration: 1.2, ease: "easeInOut" }
            }
          };

          const cardVariants = {
            closed: {
              bottom: -50,
              x: "-50%",
              opacity: 0,
              scale: 0.8
            },
            open: {
              bottom: 110,
              x: "-50%",
              rotate: index % 2 === 0 ? -3 : 3,
              opacity: 1,
              scale: 1,
              transition: { delay: 1.1, duration: 0.9, ease: "easeOut" }
            }
          };

          return (
            <motion.div
              key={item.id}
              className="my-journey-layout-pocket-wrapper"
              initial="closed"
              whileInView="open"
              viewport={{ once: true, amount: 0.3 }}
              variants={wrapperVariants}
            >

              {/* BACK - Now receives the theme class to match Bottom Div */}
              <div className={`my-journey-layout-pocket-back ${item.theme}`} />

              {/* FLAP */}
              <div className={`my-journey-layout-pocket-flap ${item.theme}`}>
                <div className="my-journey-layout-flap-shape"></div>
              </div>

              {/* CARD - Dark Theme with White Separator */}
              <motion.div
                className={`my-journey-layout-content-card ${item.theme}-card`}
                variants={cardVariants}
              >
                <div className="my-journey-layout-card-top">
                  <span className="my-journey-layout-card-year"><FaCalendarAlt /> {item.year}</span>
                  <FaCode style={{ color: '#888' }} />
                </div>
                <div className="my-journey-layout-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>

              {/* FRONT - Matches Back */}
              <div className={`my-journey-layout-pocket-front ${item.theme}`}>
                <div className="my-journey-layout-bottom-icon-container">
                  {item.flapContent}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;