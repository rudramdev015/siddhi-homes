import React, { useEffect, useRef, useState } from 'react';
import './CurrentlyExploring.css';

// --- ICONS: Reworked for pixel-perfect accuracy ---
const IconAdvancedBackend = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="13" width="20" height="8" rx="2"></rect>
        <rect x="2" y="3" width="20" height="8" rx="2"></rect>
        <path d="M6 7h4m-4 10h4"></path>
    </svg>
);
const IconScalableAPI = () => (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" d="M6.94318 11h-.85227l.96023-2.90909h1.07954L9.09091 11h-.85227l-.63637-2.10795h-.02272L6.94318 11Zm-.15909-1.14773h1.60227v.59093H6.78409v-.59093ZM9.37109 11V8.09091h1.25571c.2159 0 .4048.04261.5667.12784.162.08523.2879.20502.3779.35937.0899.15436.1349.33476.1349.5412 0 .20833-.0464.38873-.1392.54119-.0918.15246-.2211.26989-.3878.35229-.1657.0824-.3593.1236-.5809.1236h-.75003v-.61367h.59093c.0928 0 .1719-.0161.2372-.0483.0663-.03314.1169-.08002.152-.14062.036-.06061.054-.13211.054-.21449 0-.08334-.018-.15436-.054-.21307-.0351-.05966-.0857-.10511-.152-.13636-.0653-.0322-.1444-.0483-.2372-.0483h-.2784V11h-.78981Zm3.41481-2.90909V11h-.7898V8.09091h.7898Z"/>
  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M8.31818 2c-.55228 0-1 .44772-1 1v.72878c-.06079.0236-.12113.04809-.18098.07346l-.55228-.53789c-.38828-.37817-1.00715-.37817-1.39543 0L3.30923 5.09564c-.19327.18824-.30229.44659-.30229.71638 0 .26979.10902.52813.30229.71637l.52844.51468c-.01982.04526-.03911.0908-.05785.13662H3c-.55228 0-1 .44771-1 1v2.58981c0 .5523.44772 1 1 1h.77982c.01873.0458.03802.0914.05783.1366l-.52847.5147c-.19327.1883-.30228.4466-.30228.7164 0 .2698.10901.5281.30228.7164l1.88026 1.8313c.38828.3781 1.00715.3781 1.39544 0l.55228-.5379c.05987.0253.12021.0498.18102.0734v.7288c0 .5523.44772 1 1 1h2.65912c.5523 0 1-.4477 1-1v-.7288c.1316-.0511.2612-.1064.3883-.1657l.5435.2614v.4339c0 .5523.4477 1 1 1H14v.0625c0 .5523.4477 1 1 1h.0909v.0625c0 .5523.4477 1 1 1h.6844l.4952.4823c1.1648 1.1345 3.0214 1.1345 4.1863 0l.2409-.2347c.1961-.191.3053-.454.3022-.7277-.0031-.2737-.1183-.5342-.3187-.7207l-6.2162-5.7847c.0173-.0398.0342-.0798.0506-.12h.7799c.5522 0 1-.4477 1-1V8.17969c0-.55229-.4478-1-1-1h-.7799c-.0187-.04583-.038-.09139-.0578-.13666l.5284-.51464c.1933-.18824.3023-.44659.3023-.71638 0-.26979-.109-.52813-.3023-.71637l-1.8803-1.8313c-.3883-.37816-1.0071-.37816-1.3954 0l-.5523.53788c-.0598-.02536-.1201-.04985-.1809-.07344V3c0-.55228-.4477-1-1-1H8.31818Z"/>
</svg>
);
const IconSystemDesign = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect>
        <rect x="9" y="3" width="6" height="6" rx="1"></rect><path d="M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path>
        <path d="M12 9v3"></path>
    </svg>
);
const IconPerformance = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 12a9.5 9.5 0 1 1-9.5-9.5" /><path d="M12 3v1" />
        <path d="M15.5 8.5L12 12" /><path d="m4.93 4.93.71.71" />
    </svg>
);
const IconCleanUI = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M26 8h-3a1 1 0 0 0 0 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4z" />
      <path d="M14.8 20h2.4a2.84 2.84 0 0 0 2.8-2.87V8.21a3 3 0 0 0-.57-1.76L17.5 3.77a1.92 1.92 0 0 0-3 0l-1.93 2.68A3 3 0 0 0 12 8.21v8.92A2.84 2.84 0 0 0 14.8 20zM14 8.21a1 1 0 0 1 .19-.59L16 5.11l1.81 2.51a1 1 0 0 1 .19.59v8.92a.84.84 0 0 1-.8.87h-2.4a.84.84 0 0 1-.8-.87zM15 23a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
    </g>
  </svg>
);

const IconAppArchitecture = () => (
    <svg
    width="42"
    height="42"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M25 48H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v2h-2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3z"/>
      <path d="M1 8h20v2H1zM1 38h20v2H1zM11 4h6v2h-6zM11 42h6v2h-6z"/>
      <path d="M45 15H23a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3zM23 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"/>
      <path d="M45 28H35a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3z"/>
      <path d="M45 41H23a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3z"/>
      <path d="M4.63 39.631l-1.414-1.414 6.443-6.443a1 1 0 0 1 1.138-.2 5.029 5.029 0 0 0 7.15-5.265L15.1 29.166a1 1 0 0 1-1.414 0l-2.848-2.848a1 1 0 0 1 0-1.414l2.852-2.851A5.029 5.029 0 0 0 8.421 29.2a1 1 0 0 1-.195 1.138l-6.442 6.445L.37 35.369 6.34 29.4A7.03 7.03 0 0 1 16 20.687a1 1 0 0 1 .276 1.609l-3.315 3.315 1.433 1.434 3.306-3.316a1 1 0 0 1 1.609.276A7.03 7.03 0 0 1 10.6 33.66z"/>
      <path d="M40 22h4v2h-4zM36 22h2v2h-2zM6 17H4v-4a1 1 0 0 1 1-1h4v2H6z"/>
      <path d="M11 12h2v2h-2zM24 9h2v2h-2zM28 9h16v2H28z"/>
      <path d="M24 35h2v2h-2zM28 35h16v2H28zM26 14h2v18h-2z"/>
    </g>
  </svg>
);

// --- Main Component ---
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
            {
                threshold: 0.15, 
                rootMargin: "0px 0px -50px 0px"
            }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const topics = [
      { icon: <IconAdvancedBackend />, lines: ['Advanced', 'Backend Patterns'] },
      { icon: <IconScalableAPI />, lines: ['Scalable API', 'Design'] },
      { icon: <IconSystemDesign />, lines: ['System Design', 'Basics'] },
      { icon: <IconPerformance />, lines: ['Performance', 'Optimization'] },
      { icon: <IconCleanUI />, lines: ['Clean UI', 'Animations'] },
      { icon: <IconAppArchitecture />, lines: ['Real-World App', 'Architecture'] },
    ];
  
    return (
      <div className="exploring-layout__wrapper" ref={sectionRef}>
        <div className={`exploring-layout__container ${isVisible ? 'section-in-view' : ''}`}>
          <div className="exploring-layout__header">
            <div className="exploring-layout__title-bleed animate-left delay-1">
                <h1 className="exploring-layout__title">
                  Currently<span className="exploring-layout__title-text">Exploring</span>
                </h1>
            </div>
            <p className="exploring-layout__subtitle animate-zoom delay-2">
              Technologies and ideas I'm actively learning and experimenting with.
            </p>
          </div>
          <div className="exploring-layout__grid">
            {topics.map((topic, index) => (
              <div key={index} className={`exploring-layout__card-border animate-zoom delay-${index + 3}`}>
                <div className="exploring-layout__card">
                  <div className="exploring-layout__icon-container">
                    {topic.icon}
                  </div>
                  <div className="exploring-layout__text-content">
                    {topic.lines.map((line, lineIndex) => (
                      <span key={lineIndex} className="exploring-layout__text-line">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CurrentlyExploring;