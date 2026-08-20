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
  const inFocusStartTimeRef = useRef(0);
  const wasInFocusRef = useRef(false);

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
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let touchStartY = 0;

    const handleWheel = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInView = isMobile
        ? rect.top <= windowHeight * 0.55 && rect.bottom >= windowHeight * 0.35
        : rect.top >= -140 && rect.top <= 140;

      if (!isInView) {
        wasInFocusRef.current = false;
        return;
      }

      if (!wasInFocusRef.current) {
        wasInFocusRef.current = true;
        inFocusStartTimeRef.current = Date.now();
      }

      const now = Date.now();
      const COOLDOWN_MS = isMobile ? 850 : 950;
      const INITIAL_DELAY_MS = isMobile ? 500 : 450;

      if (e.deltaY > 0 && step < 3) {
        e.preventDefault(); // Lock page scroll while cycling cards

        if (step === 0 && now - inFocusStartTimeRef.current < INITIAL_DELAY_MS) {
          return;
        }

        if (now - lastStepTimeRef.current > COOLDOWN_MS) {
          lastStepTimeRef.current = now;
          setStep((prev) => Math.min(prev + 1, 3));
        }
      } else if (e.deltaY < 0 && step > 0 && rect.top >= -120) {
        e.preventDefault(); // Lock page scroll while reversing back up
        if (now - lastStepTimeRef.current > COOLDOWN_MS) {
          lastStepTimeRef.current = now;
          setStep((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInView = isMobile
        ? rect.top <= windowHeight * 0.55 && rect.bottom >= windowHeight * 0.35
        : rect.top >= -140 && rect.top <= 140;

      if (!isInView) {
        wasInFocusRef.current = false;
        return;
      }

      if (!wasInFocusRef.current) {
        wasInFocusRef.current = true;
        inFocusStartTimeRef.current = Date.now();
      }

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const now = Date.now();
      const COOLDOWN_MS = isMobile ? 800 : 950;
      const INITIAL_DELAY_MS = isMobile ? 500 : 450;

      if (deltaY > 15 && step < 3) {
        if (e.cancelable) e.preventDefault(); // Lock page scroll until all 4 cards cover each other

        if (step === 0 && now - inFocusStartTimeRef.current < INITIAL_DELAY_MS) {
          return;
        }

        if (now - lastStepTimeRef.current > COOLDOWN_MS) {
          lastStepTimeRef.current = now;
          setStep((prev) => Math.min(prev + 1, 3));
        }
      } else if (deltaY < -15 && step > 0 && rect.top >= -120) {
        if (e.cancelable) e.preventDefault(); // Lock page scroll when reversing up back to card 0
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

  // Smooth animation spring transition - slower & silkier transition duration
  const springTransition = isMobile
    ? { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    : { duration: 1.25, ease: [0.16, 1, 0.3, 1] };

  // Step 2 & 3: Heading shifts left to give room for horizontal scroll (desktop only)
  const getHeadingX = () => {
    if (isMobile) return '0%';
    if (step >= 2) return '-65%';
    return '0%';
  };

  // Step 2 & 3: Cards wrapper shifts left by maxShift to reveal last card (desktop only)
  const getCardsWrapperX = () => {
    if (isMobile) return '0px';
    if (step >= 2) return `-${maxShift}px`;
    return '0px';
  };

  // Step 0: Layered overlapping deck (index * 65)
  // Step 1, 2, 3: Expanded out horizontally into row (index * 310)
  const getCardX = (index) => {
    if (isMobile) return 0;
    if (step === 0) {
      return index * 65;
    }
    return index * 310;
  };

  // Mobile Y translation: Next card slides from bottom on top of previous card
  const getCardY = (index) => {
    if (!isMobile) return 0;
    if (index <= step) {
      return 0;
    }
    return 460; // start offscreen below container
  };

  const getCardOpacity = (index) => {
    if (!isMobile) return 1;
    if (index === 0) return 1;
    if (index <= step) return 1;
    return 0; // Hide unrevealed cards at bottom
  };

  const getCardZIndex = (index) => {
    if (!isMobile) return 4 - index;
    if (index === 0) return 10;
    if (index <= step) return (index + 1) * 10;
    return 1; // Unrevealed cards stay underneath Card 0 (zIndex 10)
  };

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
          <h2>
            <span className="services-h2-line1">Marketing that moves</span>
            <br />
            <span className="services-h2-line2">your business forward</span>
          </h2>
          <p>Strategy, creative and measurement — built as one system, not three separate vendors.</p>
        </motion.div>

        {/* Right Cards Deck */}
        <motion.div
          ref={wrapperRef}
          className="bento-stack-wrapper"
          animate={{
            x: getCardsWrapperX(),
            ...(isMobile ? { height: '390px' } : {})
          }}
          transition={springTransition}
        >
          {/* Card 1 */}
          <motion.div
            className="bento-card card-a"
            animate={{ x: getCardX(0), y: getCardY(0), opacity: getCardOpacity(0) }}
            transition={springTransition}
            style={{ zIndex: getCardZIndex(0) }}
          >
            <div className="card-bottom-content">
              <span className="big-stat-num">200%</span>
              <h3 className="big-stat-heading">More leads generated</h3>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bento-card card-b"
            animate={{ x: getCardX(1), y: getCardY(1), opacity: getCardOpacity(1) }}
            transition={springTransition}
            style={{ zIndex: getCardZIndex(1) }}
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
            animate={{ x: getCardX(2), y: getCardY(2), opacity: getCardOpacity(2) }}
            transition={springTransition}
            style={{ zIndex: getCardZIndex(2) }}
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
            animate={{ x: getCardX(3), y: getCardY(3), opacity: getCardOpacity(3) }}
            transition={springTransition}
            style={{ zIndex: getCardZIndex(3) }}
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

