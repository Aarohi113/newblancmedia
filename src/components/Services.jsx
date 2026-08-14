import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpinningBadge from './SpinningBadge';

const smoothTransition = (delay = 0) => ({
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
  delay,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: smoothTransition(delay),
  }),
};

export default function Services({ badgeDocked = false }) {
  const viewportSettings = { once: true, amount: 0.2 };
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  return (
    <section className="services" id="services">
      <motion.div
        className="services-head"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        custom={0.1}
        variants={fadeInUp}
      >
        <span className="eyebrow eyebrow--static">
          <span className="rule"></span>
          <span>What we do</span>
        </span>
        <h2>Marketing that moves<br />your business forward</h2>
        <p>Strategy, creative and measurement — built as one system, not three separate vendors.</p>
      </motion.div>

      <motion.div
        className="bento-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        custom={0.25}
        variants={fadeInUp}
      >
        {/* Dock area left of card-a */}
        <div className="bento-badge-dock">
          {badgeDocked && <SpinningBadge />}
        </div>

        <motion.div
          className={`bento-card card-a ${activeCard === 'a' ? 'active' : ''}`}
          onClick={() => toggleCard('a')}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          <div className="bento-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 20l-4.2-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Be Found Online</h3>
          <p className="bento-desc">Improve search visibility and reach customers actively looking for your services.</p>
          <a href="#work" className="bento-link">
            <span>Explore services</span>
            <span className="arrow">→</span>
          </a>
        </motion.div>

        <motion.div
          className={`bento-card card-b ${activeCard === 'b' ? 'active' : ''}`}
          onClick={() => toggleCard('b')}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          <div className="bento-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Target the Right Audience</h3>
          <p className="bento-desc">Connect with high-intent customers through strategic paid advertising campaigns.</p>
        </motion.div>

        <motion.div
          className={`bento-card card-c ${activeCard === 'c' ? 'active' : ''}`}
          onClick={() => toggleCard('c')}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          <div className="bento-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 7H22V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Convert More Leads</h3>
          <p className="bento-desc">Turn website visitors into enquiries with optimized content and conversion journeys.</p>
        </motion.div>

        <motion.div
          className={`bento-card card-d ${activeCard === 'd' ? 'active' : ''}`}
          onClick={() => toggleCard('d')}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          <div className="bento-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 19V9m6 10V5m6 14v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M3 19h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Creative that performs</h3>
          <p className="bento-desc">Design and copy tested against real conversion data, not vibes.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
