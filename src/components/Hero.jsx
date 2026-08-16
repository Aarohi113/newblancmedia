import React from 'react';
import { motion } from 'framer-motion';

const smoothTransition = (delay = 0) => ({
  duration: 2.2,
  ease: [0.16, 1, 0.3, 1],
  delay: delay,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 55 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: smoothTransition(delay),
  }),
};

export default function Hero() {
  const viewportSettings = { once: true, amount: 0.2 };

  return (
    <section className="hero">
      {/* Hero Heading */}
      <div className="hero-heading hero-heading-centered">
        {/* Line 1: Your Next Best Marketing */}
        <motion.div
          className="hero-heading-line line-black"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          custom={0.1}
          variants={fadeInUp}
        >
          Your Next Best Marketing
        </motion.div>

        {/* Line 2: Decision Starts Here */}
        <motion.div
          className="hero-heading-line line-grey"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          custom={0.35}
          variants={fadeInUp}
        >
          Decision Starts Here
        </motion.div>
      </div>

      {/* Floating Angled Glassmorphism Card Left 1 (Upper Left) */}
      <motion.div
        className="hero-glass-card card-left-1"
        initial={{ opacity: 0, x: -60, y: 40, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <span className="glass-card-icon">⚡</span>
        <div className="glass-card-info">
          <span className="glass-card-val">200%</span>
          <span className="glass-card-lbl">Leads Growth</span>
        </div>
      </motion.div>

      {/* Floating Angled Glassmorphism Card Left 2 (Lower Left) */}
      <motion.div
        className="hero-glass-card card-left-2"
        initial={{ opacity: 0, x: -50, y: 50, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
      >
        <span className="glass-card-icon">🎯</span>
        <div className="glass-card-info">
          <span className="glass-card-val">-35%</span>
          <span className="glass-card-lbl">Cost Per Lead</span>
        </div>
      </motion.div>

      {/* Floating Angled Glassmorphism Card Right 1 (Upper Right) */}
      <motion.div
        className="hero-glass-card card-right-1"
        initial={{ opacity: 0, x: 60, y: 40, rotate: 15 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
      >
        <span className="glass-card-icon">🚀</span>
        <div className="glass-card-info">
          <span className="glass-card-val">3.5X</span>
          <span className="glass-card-lbl">Better ROAS</span>
        </div>
      </motion.div>

      {/* Floating Angled Glassmorphism Card Right 2 (Lower Right) */}
      <motion.div
        className="hero-glass-card card-right-2"
        initial={{ opacity: 0, x: 50, y: 50, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
      >
        <span className="glass-card-icon">📈</span>
        <div className="glass-card-info">
          <span className="glass-card-val">↑ 120</span>
          <span className="glass-card-lbl">More Traffic</span>
        </div>
      </motion.div>

      {/* BLANC Mascot Overlay rising & zooming from small into position */}
      <motion.div
        className="hero-mascot-wrapper"
        initial={{ opacity: 0, scale: 0.6, y: 85, x: "-50%" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
      >
        <picture>
          <source srcSet="/Blanc Mascot (1).webp" type="image/webp" />
          <img
            src="/Blanc Mascot (1).png"
            alt="BLANC Mascot"
            className="hero-mascot-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </motion.div>
    </section>
  );
}
