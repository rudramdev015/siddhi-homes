import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaCity, 
  FaMapMarkedAlt, 
  FaShieldAlt, 
  FaRoad, 
  FaKey, 
  FaAward 
} from 'react-icons/fa';
import './Journey.css';

const journeyData = [
  {
    id: '01',
    theme: 'my-journey-layout-theme-orange',
    year: '2022',
    flapContent: <FaCity />,
    title: 'The Foundation',
    description: 'Shree Mahaveer Real Estates was founded with a vision to redefine Jodhpur’s luxury residential landscape.',
  },
  {
    id: '02',
    theme: 'my-journey-layout-theme-yellow',
    year: 'January 2023',
    flapContent: <FaMapMarkedAlt />,
    title: 'Strategic Acquisition',
    description: 'Secured prime land in Pal, Jodhpur. Chosen for its superior connectivity and investment growth potential.',
  },
  {
    id: '03',
    theme: 'my-journey-layout-theme-purple',
    year: 'July 2023',
    flapContent: <FaShieldAlt />,
    title: 'RERA Milestone',
    description: 'Received official RERA registration (RAJ/P/2023/2610), ensuring 100% transparency and trust for our clients.',
  },
  {
    id: '04',
    theme: 'my-journey-layout-theme-red',
    year: 'Early 2024',
    flapContent: <FaRoad />,
    title: 'Infrastructure Phase',
    description: 'Successfully completed 30ft wide internal roads, underground drainage, and a grand premium entrance gate.',
  },
  {
    id: '05',
    theme: 'my-journey-layout-theme-blue',
    year: 'May 2025',
    flapContent: <FaKey />,
    title: 'The Grand Reveal',
    description: 'Siddhi Homes reached 95% completion. Ready-to-move premium units opened for possession and site visits.',
  },
  {
    id: '06',
    theme: 'my-journey-layout-theme-green',
    year: 'Future',
    flapContent: <FaAward />,
    title: 'Future Legacy',
    description: 'Continuing to build secure, integrated communities that blend modern luxury with Rajasthan’s rich heritage.',
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
            stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="1" fill="none" 
          />
          <path 
            d="M-100,600 C400,800 1000,300 1600,900" 
            stroke="#D4AF37" strokeOpacity="0.12" strokeWidth="1" fill="none" 
          />
        </svg>
      </div>

      {/* HEADER SECTION */}
      <div className="my-journey-layout-header">
        <h1 className="my-journey-layout-title">The Siddhi <span>Legacy</span></h1>
        <p className="my-journey-layout-subtitle">A Timeline of Architectural Excellence & Commitment</p>
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

              {/* BACK */}
              <div className={`my-journey-layout-pocket-back ${item.theme}`} />

              {/* FLAP */}
              <div className={`my-journey-layout-pocket-flap ${item.theme}`}>
                <div className="my-journey-layout-flap-shape"></div>
              </div>

              {/* CARD */}
              <motion.div
                className={`my-journey-layout-content-card ${item.theme}-card`}
                variants={cardVariants}
              >
                <div className="my-journey-layout-card-top">
                  <span className="my-journey-layout-card-year"><FaCalendarAlt /> {item.year}</span>
                  <FaCity style={{ color: '#888' }} />
                </div>
                <div className="my-journey-layout-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>

              {/* FRONT */}
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