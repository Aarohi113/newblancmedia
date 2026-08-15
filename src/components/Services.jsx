import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  const sectionRef = useRef(null);
  const [isSpread, setIsSpread] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileStep, setMobileStep] = useState(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let touchStartY = 0;

    const handleWheel = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
      if (!isVisible) return;

      if (isMobile) {
        if (e.deltaY > 0 && mobileStep < 3) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setMobileStep(prev => Math.min(prev + 1, 3));
            setTimeout(() => { isAnimatingRef.current = false; }, 550);
          }
        } else if (e.deltaY < 0 && mobileStep > 0 && rect.top > -150 && rect.top < 220) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setMobileStep(prev => Math.max(prev - 1, 0));
            setTimeout(() => { isAnimatingRef.current = false; }, 550);
          }
        }
      } else {
        if (e.deltaY > 0 && !isSpread) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setIsSpread(true);
            setTimeout(() => { isAnimatingRef.current = false; }, 1200);
          }
        } else if (e.deltaY < 0 && isSpread && rect.top > -120 && rect.top < 180) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setIsSpread(false);
            setTimeout(() => { isAnimatingRef.current = false; }, 1200);
          }
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
      if (!isVisible) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (isMobile) {
        if (deltaY > 18 && mobileStep < 3) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setMobileStep(prev => Math.min(prev + 1, 3));
            setTimeout(() => { isAnimatingRef.current = false; }, 550);
          }
        } else if (deltaY < -18 && mobileStep > 0 && rect.top > -150 && rect.top < 220) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setMobileStep(prev => Math.max(prev - 1, 0));
            setTimeout(() => { isAnimatingRef.current = false; }, 550);
          }
        }
      } else {
        if (deltaY > 25 && !isSpread) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setIsSpread(true);
            setTimeout(() => { isAnimatingRef.current = false; }, 1200);
          }
        } else if (deltaY < -25 && isSpread && rect.top > -120 && rect.top < 180) {
          e.preventDefault();
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            setIsSpread(false);
            setTimeout(() => { isAnimatingRef.current = false; }, 1200);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isSpread, isMobile, mobileStep]);

  // Card Variants for stacked vs spread
  const cardVariants = {
    stacked: (index) => {
      if (index === 0) {
        return {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        };
      }
      const offsets = [
        { x: 'calc(-100% - 1.4rem)', y: -8, rotate: -4, scale: 0.96 },
        { x: 'calc(-200% - 2.8rem)', y: -16, rotate: 3.5, scale: 0.92 },
        { x: 'calc(-300% - 4.2rem)', y: -24, rotate: -6, scale: 0.88 },
      ];
      return offsets[index - 1];
    },
    spread: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  const getTransition = (index) => ({
    duration: 1.3,
    ease: [0.16, 1, 0.3, 1],
    delay: isSpread ? index * 0.16 : (3 - index) * 0.08,
  });

  const getCardProps = (index) => {
    if (isMobile) {
      const isVisibleOnMobile = index === 0 || mobileStep >= index;
      return {
        initial: index === 0 ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
        animate: isVisibleOnMobile ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        style: { zIndex: 10 + index }
      };
    } else {
      return {
        custom: index,
        initial: 'stacked',
        animate: isSpread ? 'spread' : 'stacked',
        variants: cardVariants,
        transition: getTransition(index),
        style: { zIndex: 10 - index }
      };
    }
  };

  return (
    <section className="services" id="services" ref={sectionRef}>
      <motion.div
        className="services-head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <span className="eyebrow eyebrow--static">
          <span>What we do</span>
        </span>
        <h2>Marketing that moves<br />your business forward</h2>
        <p>Strategy, creative and measurement — built as one system, not three separate vendors.</p>
      </motion.div>

      <div className="bento-grid">
        {isMobile && (
          <div className="mobile-card-step-badge">
            <span>{mobileStep + 1}</span> / <span>4</span>
          </div>
        )}

        {/* Card 1 (Card A) - Top Layer */}
        <motion.div
          className="bento-card card-a card-static"
          {...getCardProps(0)}
        >
          <div className="card-bottom-content">
            <span className="big-stat-num">200%</span>
            <h3 className="big-stat-heading">More leads generated</h3>
          </div>
        </motion.div>

        {/* Card 2 (Card B) - Emerges from behind Card A */}
        <motion.div
          className="bento-card card-b card-static"
          {...getCardProps(1)}
        >
          <div className="card-stat-header roas-header">
            <span className="roas-num">-35%</span>
            <span className="roas-label">Lower Cost Per Lead</span>
          </div>
          <p className="card-static-desc">
            Smarter campaigns designed to reduce wasted ad spend and improve conversions.
          </p>

          <div className="decreasing-bar-wrapper">
            <svg viewBox="0 0 200 95" className="decreasing-bar-svg">
              <line x1="10" y1="90" x2="190" y2="90" stroke="#111112" strokeWidth="1.5" strokeOpacity="0.4" />
              <rect x="20" y="10" width="24" height="80" rx="4" fill="#111112" />
              <rect x="60" y="30" width="24" height="60" rx="4" fill="#27272A" />
              <rect x="100" y="48" width="24" height="42" rx="4" fill="#3F3F46" />
              <rect x="140" y="64" width="24" height="26" rx="4" fill="#52525B" />

              <polyline
                points="48,20 80,36 112,48 148,65 178,80"
                fill="none"
                stroke="#71717A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon points="186,85 170,77 178,89" fill="#71717A" />
            </svg>
          </div>

          <div className="card-bottom-heading">
            Make every ad rupee count
          </div>
        </motion.div>

        {/* Card 3 (Card C) - Emerges from behind Card A */}
        <motion.div
          className="bento-card card-c card-static"
          {...getCardProps(2)}
        >
          <div className="card-stat-header roas-header">
            <div className="stat-num-row">
              <span className="up-arrow">↑</span>
              <span className="stat-val">120</span>
            </div>
            <span className="roas-label">More Traffic</span>
          </div>
          <p className="card-static-desc">
            Turn website visitors into enquiries with content.
          </p>

          <div className="chart-box">
            <div className="chart-y-axis">Leads</div>
            <div className="chart-main">
              <svg className="progress-chart-svg" viewBox="0 0 240 100" preserveAspectRatio="none">
                <line x1="6" y1="2" x2="6" y2="92" stroke="#111112" strokeWidth="2" strokeOpacity="0.85" />
                <line x1="6" y1="92" x2="238" y2="92" stroke="#111112" strokeWidth="2" strokeOpacity="0.85" />

                <polygon
                  points="
                    6,90 
                    16,87 
                    26,81 
                    36,77 
                    46,63 
                    56,85 
                    66,83 
                    76,73 
                    86,71 
                    96,61 
                    106,61 
                    116,61 
                    126,41 
                    136,63 
                    146,61 
                    156,69 
                    166,43 
                    176,37 
                    186,61 
                    196,39 
                    206,29 
                    216,13 
                    226,25 
                    238,4 
                    238,90
                  "
                  fill="#111112"
                  fillOpacity="0.85"
                />

                <circle cx="230" cy="14" r="3.5" fill="#FF5A1F" />
                <text x="194" y="13" fill="#FF5A1F" fontSize="13" fontWeight="bold" fontFamily="sans-serif">120</text>
              </svg>
              <div className="chart-x-axis">Date</div>
            </div>
          </div>

          <div className="card-bottom-heading">
            Convert More Leads
          </div>
        </motion.div>

        {/* Card 4 (Card D) - Emerges from behind Card A */}
        <motion.div
          className="bento-card card-d card-static"
          {...getCardProps(3)}
        >
          <div className="card-stat-header roas-header">
            <span className="roas-num">3X</span>
            <span className="roas-label">Better ROAS</span>
          </div>
          <p className="card-static-desc">
            Data-driven advertising strategies focused on turning clicks into real revenue.
          </p>

          <div className="pie-chart-right-wrapper">
            <svg viewBox="0 0 210 130" className="pie-chart-svg-large">
              <path
                d="M 130 65 L 130 17 A 48 48 0 1 1 84.35 79.83 Z"
                fill="#111112"
                stroke="#E9E8E4"
                strokeWidth="1.8"
              />
              <path
                d="M 130 65 L 84.35 79.83 A 48 48 0 0 1 130 17 Z"
                fill="#71717A"
                stroke="#E9E8E4"
                strokeWidth="1.8"
              />

              <polyline
                points="10,28 75,28 96,52"
                fill="none"
                stroke="#111112"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon points="186,85 170,77 178,89" fill="#111112" />

              <text x="10" y="20" fill="#111112" fontSize="13" fontWeight="800" fontFamily="Poppins, sans-serif">
                30% revenue
              </text>
            </svg>
          </div>

          <div className="card-bottom-heading">
            Turn ad spend into growth
          </div>
        </motion.div>
      </div>
    </section>
  );
}
