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
  const wrapperRef = useRef(null);

  // Steps:
  // Step 0: Section in view from Hero -> Cards in layered stack (overlapping)
  // Step 1: 1st scroll gesture -> Cards expand right horizontally into row
  // Step 2: 2nd scroll gesture -> Horizontal scroll pans wrapper left so last card is inside screen right edge
  // Step 3: 3rd scroll gesture -> Section unlocked for natural vertical scroll down to Products
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 860);
  const [maxShift, setMaxShift] = useState(580);
  const lastStepTimeRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 860);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate max horizontal scroll shift once on mount and window resize
  useEffect(() => {
    if (isMobile) return;

    const calculateShift = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalCardsWidth = 1220; // 4 cards total width (3 * 310px + 270px card width + 20px padding)
      const windowWidth = window.innerWidth;
      const rightMargin = 60; // 60px safe margin inside right screen edge

      const restLeft = rect.left;
      const neededShift = (restLeft + totalCardsWidth) - (windowWidth - rightMargin);
      const safeShift = Math.max(560, Math.min(Math.round(neededShift > 0 ? neededShift : 640), 950));
      setMaxShift(safeShift);
    };

    calculateShift();
    window.addEventListener('resize', calculateShift);
    return () => window.removeEventListener('resize', calculateShift);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let touchStartY = 0;

    const handleWheel = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const inFocus = rect.top >= -220 && rect.top <= window.innerHeight * 0.45;

      if (!inFocus) return;

      const now = Date.now();
      const COOLDOWN_MS = 750;

      if (e.deltaY > 0) {
        // Scroll DOWN inside section
        if (step < 3) {
          e.preventDefault();
          if (now - lastStepTimeRef.current > COOLDOWN_MS) {
            lastStepTimeRef.current = now;
            setStep((prev) => Math.min(prev + 1, 3));
          }
        }
      } else if (e.deltaY < 0) {
        // Scroll UP inside section
        if (step > 0 && rect.top >= -120) {
          e.preventDefault();
          if (now - lastStepTimeRef.current > COOLDOWN_MS) {
            lastStepTimeRef.current = now;
            setStep((prev) => Math.max(prev - 1, 0));
          }
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const inFocus = rect.top >= -220 && rect.top <= window.innerHeight * 0.45;
      if (!inFocus) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const now = Date.now();
      const COOLDOWN_MS = 750;

      if (deltaY > 30 && step < 3) {
        if (e.cancelable) e.preventDefault();
        if (now - lastStepTimeRef.current > COOLDOWN_MS) {
          lastStepTimeRef.current = now;
          setStep((prev) => Math.min(prev + 1, 3));
        }
      } else if (deltaY < -30 && step > 0 && rect.top >= -120) {
        if (e.cancelable) e.preventDefault();
        if (now - lastStepTimeRef.current > COOLDOWN_MS) {
          lastStepTimeRef.current = now;
          setStep((prev) => Math.max(prev - 1, 0));
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
  }, [step, isMobile]);

  // Smooth animation spring transition
  const springTransition = { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

  // Step 2 & 3: Heading shifts left to give room for horizontal scroll
  const getHeadingX = () => {
    if (step >= 2) return '-65%';
    return '0%';
  };

  // Step 2 & 3: Cards wrapper shifts left by maxShift to reveal last card
  const getCardsWrapperX = () => {
    if (step >= 2) return `-${maxShift}px`;
    return '0px';
  };

  // Step 0: Layered overlapping deck (index * 65)
  // Step 1, 2, 3: Expanded out horizontally into row (index * 310)
  const getCardX = (index) => {
    if (step === 0) {
      return index * 65;
    }
    return index * 310;
  };

  if (isMobile) {
    return (
      <section className="services services-mobile" id="services">
        <div className="services-grid-layout">
          <motion.div
            className="services-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="eyebrow eyebrow--static">
              <span>What we do</span>
            </span>
            <h2>Marketing that moves<br />your business forward</h2>
            <p>Strategy, creative and measurement — built as one system, not three separate vendors.</p>
          </motion.div>

          <div className="bento-grid-mobile">
            {/* Card 1 */}
            <div className="bento-card card-a">
              <div className="card-bottom-content">
                <span className="big-stat-num">200%</span>
                <h3 className="big-stat-heading">More leads generated</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bento-card card-b">
              <div className="card-stat-header roas-header">
                <span className="roas-num">-35%</span>
                <span className="roas-label">Lower Cost Per Lead</span>
              </div>
              <p className="card-static-desc">
                Smarter campaigns designed to reduce wasted ad spend and improve conversions.
              </p>
              <div className="card-bottom-heading">Make every ad rupee count</div>
            </div>

            {/* Card 3 */}
            <div className="bento-card card-c">
              <div className="card-stat-header roas-header">
                <div className="stat-num-row">
                  <span className="up-arrow">↑</span>
                  <span className="stat-val">120</span>
                </div>
                <span className="roas-label">More Traffic</span>
              </div>
              <p className="card-static-desc">Turn website visitors into enquiries with content.</p>
              <div className="card-bottom-heading">Convert More Leads</div>
            </div>

            {/* Card 4 */}
            <div className="bento-card card-d">
              <div className="card-stat-header roas-header">
                <span className="roas-num">3X</span>
                <span className="roas-label">Better ROAS</span>
              </div>
              <p className="card-static-desc">
                Data-driven advertising strategies focused on turning clicks into real revenue.
              </p>
              <div className="card-bottom-heading">Turn ad spend into growth</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services services-locked-container" id="services" ref={sectionRef}>
      <div className="services-grid-layout">
        {/* Left Heading */}
        <motion.div
          className="services-head"
          animate={{ x: getHeadingX() }}
          transition={springTransition}
        >
          <span className="eyebrow eyebrow--static">
            <span>What we do</span>
          </span>
          <h2>Marketing that moves<br />your business forward</h2>
          <p>Strategy, creative and measurement — built as one system, not three separate vendors.</p>
        </motion.div>

        {/* Right Cards Deck */}
        <motion.div
          ref={wrapperRef}
          className="bento-stack-wrapper"
          animate={{ x: getCardsWrapperX() }}
          transition={springTransition}
        >
          {/* Card 1 */}
          <motion.div
            className="bento-card card-a"
            animate={{ x: getCardX(0) }}
            transition={springTransition}
            style={{ zIndex: 4 }}
          >
            <div className="card-bottom-content">
              <span className="big-stat-num">200%</span>
              <h3 className="big-stat-heading">More leads generated</h3>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bento-card card-b"
            animate={{ x: getCardX(1) }}
            transition={springTransition}
            style={{ zIndex: 3 }}
          >
            <div className="card-stat-header roas-header">
              <span className="roas-num">-35%</span>
              <span className="roas-label">Lower Cost Per Lead</span>
            </div>
            <p className="card-static-desc">
              Smarter campaigns designed to reduce wasted ad spend and improve conversions.
            </p>

            <div className="decreasing-bar-wrapper">
              <svg viewBox="0 0 200 80" className="decreasing-bar-svg">
                <line x1="10" y1="75" x2="190" y2="75" stroke="#374151" strokeWidth="1.5" strokeOpacity="0.6" />
                <rect x="20" y="10" width="22" height="65" rx="3" fill="#FF5722" />
                <rect x="60" y="26" width="22" height="49" rx="3" fill="#374151" />
                <rect x="100" y="40" width="22" height="35" rx="3" fill="#4B5563" />
                <rect x="140" y="52" width="22" height="23" rx="3" fill="#6B7280" />

                <polyline
                  points="48,18 80,30 112,42 148,55 178,68"
                  fill="none"
                  stroke="#FF5722"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon points="184,72 170,65 176,76" fill="#FF5722" />
              </svg>
            </div>

            <div className="card-bottom-heading">
              Make every ad rupee count
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bento-card card-c"
            animate={{ x: getCardX(2) }}
            transition={springTransition}
            style={{ zIndex: 2 }}
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
              <div className="chart-main">
                <svg className="progress-chart-svg" viewBox="0 0 220 70" preserveAspectRatio="none">
                  <line x1="6" y1="2" x2="6" y2="68" stroke="#1A202C" strokeWidth="1.8" strokeOpacity="0.85" />
                  <line x1="6" y1="68" x2="218" y2="68" stroke="#1A202C" strokeWidth="1.8" strokeOpacity="0.85" />

                  <polygon
                    points="
                      6,66 16,63 26,58 36,54 46,43 56,60 66,58 76,50 86,48 96,40 106,40 
                      116,40 126,26 136,43 146,40 156,47 166,28 176,23 186,40 196,25 
                      206,17 216,6 218,66
                    "
                    fill="#1A202C"
                    fillOpacity="0.85"
                  />
                  <circle cx="212" cy="8" r="3.5" fill="#EA580C" />
                </svg>
              </div>
            </div>

            <div className="card-bottom-heading">
              Convert More Leads
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bento-card card-d"
            animate={{ x: getCardX(3) }}
            transition={springTransition}
            style={{ zIndex: 1 }}
          >
            <div className="card-stat-header roas-header">
              <span className="roas-num">3X</span>
              <span className="roas-label">Better ROAS</span>
            </div>
            <p className="card-static-desc">
              Data-driven advertising strategies focused on turning clicks into real revenue.
            </p>

            <div className="pie-chart-right-wrapper">
              <svg viewBox="0 0 180 90" className="pie-chart-svg-large">
                <path
                  d="M 110 45 L 110 10 A 35 35 0 1 1 76.8 55.8 Z"
                  fill="#FF6600"
                  stroke="#111111"
                  strokeWidth="1.5"
                />
                <path
                  d="M 110 45 L 76.8 55.8 A 35 35 0 0 1 110 10 Z"
                  fill="#374151"
                  stroke="#111111"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="card-bottom-heading">
              Turn ad spend into growth
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

