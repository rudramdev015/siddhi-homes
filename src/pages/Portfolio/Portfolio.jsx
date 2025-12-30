import React, { useEffect, useRef } from "react";
import "./Portfolio.css";

// Assuming this path is correct
import airline from '../../assets/portfolio/airline-booking-img.png';
import tweeter from '../../assets/portfolio/tweeter-backend.png';
import eskaji from '../../assets/portfolio/eskaji.png';

const Portfolio = () => {
  // References for the cards to animate
  const cardRefs = useRef([]);

  // --- Scroll Animation Logic ---
  useEffect(() => {
    // 1. Copy ref.current to a local variable to satisfy the exhaustive-deps warning
    const currentCards = cardRefs.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Trigger when 15% visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Use the local variable
    if (currentCards) {
      currentCards.forEach((card) => {
        if (card) observer.observe(card);
      });
    }

    return () => {
      // Use the local variable in cleanup
      if (currentCards) {
        currentCards.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, []);

  // --- Data: Projects ---
  const projects = [
    {
      id: 1,
      title: "TweetStream (Backend)",
      description:
        "Architected a robust monolithic backend for a Twitter-like application. Features advanced tweet search capabilities, secure user authentication using Passport.js, and scalable tweet management.",
      image: tweeter, 
      link: "https://github.com/jitendraparmar10/Twitter_Backend", 
    },
    {
      id: 2,
      title: "Airline Booking Management",
      description:
        "A complex microservices-based system including Auth, FlightSearch, and TicketBooking services. Implemented API Gateway, JWT authentication, and automated email reminders using Cron jobs.",
      image: airline, 
      link: "https://github.com/jitendraparmar10/API_Gateway", 
    },
    {
      id: 3,
      title: "EsKaJi Sweets (Full Stack)",
      description:
        "A full-stack e-commerce application allowing admin users to manage product inventory. Features responsive design, flexible layouts, and a seamless ordering experience for desktops and mobile.",
      image: eskaji, 
      link: "https://eskaji-sweets.vercel.app/", 
    },
  ];

  // --- Data: Tech Stack ---
  const stackList = [
    "React Js",
    "Node Js",
    "Express Js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript"
  ];

  // Helper to add refs to the array
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className="my-portfolio-container">
      <div className="my-portfolio-wrapper">
        
        {/* --- LEFT SIDE: Sticky --- */}
        <div className="my-portfolio-left">
          <div className="my-portfolio-left-content">
            
            {/* Header */}
            <div className="my-portfolio-header">
              <h2 className="my-portfolio-title">My Projects</h2>
              <p className="my-portfolio-subtitle">
                I’ve worked on some great Projects, but I won’t blab about them all. 
                Here are a few best bits.
              </p>
            </div>
            
            {/* Illustration */}
            <div className="my-portfolio-illustration-box">
               <img 
                 src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png" 
                 alt="Coder Illustration" 
                 className="my-portfolio-illustration"
               />
            </div>

            {/* Stack Section */}
            <div className="my-portfolio-stack-section">
              <p className="my-portfolio-stack-desc">
                All the sites on your right are built from scratch in the following stack:
              </p>
              <div className="my-portfolio-stack-grid">
                {stackList.map((tech, index) => (
                  <div key={index} className="my-stack-item">
                    <span className="my-stack-dot"></span>
                    <span className="my-stack-text">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: Scrollable --- */}
        <div className="my-portfolio-right">
          {projects.map((project, index) => (
            <div 
              className="my-portfolio-card" 
              key={project.id}
              ref={addToRefs}
            >
              <div className="my-portfolio-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="my-portfolio-project-img"
                />
              </div>
              <div className="my-portfolio-content">
                <h3 className="my-portfolio-project-title">{project.title}</h3>
                <p className="my-portfolio-project-desc">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="my-portfolio-btn"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;