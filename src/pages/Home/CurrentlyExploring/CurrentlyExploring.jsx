import React, { useEffect, useRef, useState } from 'react';
import './CurrentlyExploring.css';

// --- LUXURY REAL ESTATE ICONS (Custom SVGs) ---
const IconConstruction = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M14 20V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16M22 20V10a2 2 0 0 0-2-2h-4" />
        <path d="M6 6h2m-2 4h2m-2 4h2m10-2h2m-2 4h2" />
    </svg>
);
const IconLocation = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);
const IconSecurity = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);
const IconVastu = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16.2 7.8-8.4 8.4M12 8v8M8 12h8" />
    </svg>
);
const IconTransparency = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);
const IconLifestyle = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

const CurrentlyExploring = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const highlights = [
      { icon: <IconConstruction />, lines: ['Premium Quality', 'Construction'] },
      { icon: <IconLocation />, lines: ['Strategic', 'Prime Locations'] },
      { icon: <IconSecurity />, lines: ['24/7 Secure', 'Community'] },
      { icon: <IconVastu />, lines: ['Vastu Compliant', 'Layouts'] },
      { icon: <IconTransparency />, lines: ['Transparent', 'Legal Deals'] },
      { icon: <IconLifestyle />, lines: ['Modern Luxury', 'Lifestyle'] },
    ];
  
    return (
      <section className="exploring-layout__wrapper" ref={sectionRef} aria-labelledby="section-title">
        <div className={`exploring-layout__container ${isVisible ? 'section-in-view' : ''}`}>
          
          <header className="exploring-layout__header">
            <div className="exploring-layout__title-bleed animate-left delay-1">
                <h2 id="section-title" className="exploring-layout__title">
                  Siddhi Homes<span className="exploring-layout__title-text">Advantages</span>
                </h2>
            </div>
            <p className="exploring-layout__subtitle animate-zoom delay-2">
              Discover why families trust us for their dream home. We combine traditional values with modern engineering.
            </p>
          </header>

          <div className="exploring-layout__grid">
            {highlights.map((item, index) => (
              <article 
                key={index} 
                className={`exploring-layout__card-border animate-zoom delay-${index + 3}`}
              >
                <div className="exploring-layout__card">
                  <div className="exploring-layout__icon-container">
                    {item.icon}
                  </div>
                  <div className="exploring-layout__text-content">
                    {item.lines.map((line, lineIndex) => (
                      <span key={lineIndex} className="exploring-layout__text-line">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default CurrentlyExploring;