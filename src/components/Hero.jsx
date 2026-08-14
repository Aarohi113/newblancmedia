import React from 'react';
import { motion } from 'framer-motion';

const smoothTransition = (delay = 0) => ({
  duration: 1.4,
  ease: [0.16, 1, 0.3, 1],
  delay: delay,
});

// 1. Grow Your - slides from Left
const slideFromLeft = {
  hidden: { opacity: 0, x: -140 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: smoothTransition(delay),
  }),
};

// 2. BRAND - slides from Top
const slideFromTop = {
  hidden: { opacity: 0, y: -140 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: smoothTransition(delay),
  }),
};

// 3. with & that converts - slides from Right
const slideFromRight = {
  hidden: { opacity: 0, x: 140 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: smoothTransition(delay),
  }),
};

// 4. MARKETING - slides from Bottom
const slideFromBottom = {
  hidden: { opacity: 0, y: 140 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: smoothTransition(delay),
  }),
};

// General fade/slide up for eyebrow & paragraph
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: smoothTransition(delay),
  }),
};

export default function Hero() {
  const viewportSettings = { once: false, amount: 0.2 };

  return (
    <section className="hero">
      {/* Eyebrow */}
      <motion.div
        className="eyebrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        custom={0.1}
        variants={fadeInUp}
      >
        <span className="rule"></span>
        <span>DIGITAL MARKETING & GROWTH AGENCY</span>
      </motion.div>

      {/* Hero Heading */}
      <div className="hero-heading">
        <div className="hero-line hero-line-one">
          {/* 1. Grow Your — slides in from Left */}
          <motion.span
            className="normal-text"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0.2}
            variants={slideFromLeft}
          >
            Grow Your
          </motion.span>

          {/* 2. BRAND — slides in from Top */}
          <motion.span
            className="large-word brand"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0.35}
            variants={slideFromTop}
          >
            BRAND
          </motion.span>

          {/* 3. with — slides in from Right */}
          <motion.span
            className="normal-text with"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0.45}
            variants={slideFromRight}
          >
            with
          </motion.span>
        </div>

        <div className="hero-line hero-line-two">
          {/* 4. MARKETING — slides in from Bottom */}
          <motion.span
            className="large-word marketing"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0.55}
            variants={slideFromBottom}
          >
            MARKETING
          </motion.span>

          {/* 5. that converts — slides in from Right */}
          <motion.span
            className="normal-text converts"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            custom={0.7}
            variants={slideFromRight}
          >
            that converts
          </motion.span>
        </div>
      </div>

      {/* Supporting paragraph with spinning badge */}
      <motion.div
        className="hero-sub"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        custom={0.85}
        variants={slideFromRight}
      >
        {/* Spinning "Check the Project" badge */}
        <a href="#work" className="spin-badge" aria-label="Check the project">
          <svg className="ring" viewBox="0 0 200 200">
            <defs>
              <path id="badgeCirclePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#badgeCirclePath" startOffset="0%">CHECK THE PROJECT&#160;&#160;•&#160;&#160;CHECK THE SERVICES&#160;&#160;•&#160;&#160;CHECK THE PROJECT&#160;&#160;•&#160;&#160;</textPath>
            </text>
          </svg>
          <span className="center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#111112" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
        <p>
          BLANC is a full-service digital marketing agency specializing in SEO, performance marketing, social media, content strategy, and conversion-driven campaigns that help brands get discovered, generate leads, and grow.
        </p>
      </motion.div>
    </section>
  );
}
