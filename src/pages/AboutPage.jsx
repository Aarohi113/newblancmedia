import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

export default function AboutPage() {
  // Typewriter animation state for hero heading
  const line1Text = "WE BUILD DIGITAL SYSTEMS ";
  const line2Text = "THAT DRIVE REAL GROWTH";
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedLine1("");
    setDisplayedLine2("");
    setIsTypingComplete(false);

    let idx1 = 0;
    let idx2 = 0;

    const timer1 = setInterval(() => {
      if (idx1 < line1Text.length) {
        setDisplayedLine1(line1Text.slice(0, idx1 + 1));
        idx1++;
      } else {
        clearInterval(timer1);
        const timer2 = setInterval(() => {
          if (idx2 < line2Text.length) {
            setDisplayedLine2(line2Text.slice(0, idx2 + 1));
            idx2++;
          } else {
            clearInterval(timer2);
            setIsTypingComplete(true);
          }
        }, 55);
      }
    }, 50);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  const renderLine1Content = () => {
    if (displayedLine1.length <= 3) {
      return displayedLine1;
    }
    const prefix = displayedLine1.slice(0, 3);
    const highlight = displayedLine1.slice(3);
    return (
      <>
        {prefix}
        <span className="seo-text-gradient">{highlight}</span>
      </>
    );
  };

  return (
    <div className="seo-page-wrapper flair-style">
      {/* 01. HERO BANNER SECTION */}
      <section className="flair-hero-section">
        <div className="seo-hero-bg-glow" />
        <div className="seo-hero-orange-ambient" />

        <div className="seo-container">
          <div className="flair-hero-grid">
            {/* Content Row: Hero Center Box + CTA */}
            <div className="flair-hero-content-row">
              <motion.div
                className="flair-hero-center-box"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.25}
              >
                <div className="flair-hero-tag-pill">
                  <span className="seo-pill-dot" />
                  <span>WHO WE ARE</span>
                </div>

                <h2 className="flair-hero-subheading typewriter-heading">
                  <span className="hero-sub-line">
                    {renderLine1Content()}
                    {displayedLine2.length === 0 && <span className="typewriter-cursor">|</span>}
                  </span>
                  <span className="hero-sub-line">
                    {displayedLine2}
                    {displayedLine2.length > 0 && !isTypingComplete && <span className="typewriter-cursor">|</span>}
                  </span>
                </h2>

                <p className="flair-hero-lead-text">
                  Every brand starts with a blank space. We’re here to fill it with ideas, identity, and meaning. Blanc Media combines creativity, strategy, and technology to build brands that stand out.
                </p>

                <div className="flair-hero-actions">
                  <a href="#contact" className="seo-primary-btn capsule-cta-btn">
                    <span>Work With Us</span>
                    <span className="seo-btn-arrow">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. UNLOCK THE POWER OF BLANC MEDIA */}
      <section className="flair-power-section" id="power_seo">
        <div className="seo-container-full">
          <motion.div
            className="seo-full-width-header-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <motion.h2
              className="flair-giant-power-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
              custom={0.1}
            >
              <span className="power-title-line">Welcome  to the blanc media.</span>
            </motion.h2>

            <div className="power-center-text-block about-power-text-block">
              <motion.p
                className="seo-body-lead centered"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
                custom={0.2}
              >
                <strong>Blanc Media</strong> a brand that started as our dream to make your dreams come true, Blanc was born from a simple idea to build something of our own, something that could turn ideas into identities and dreams into brands.
              </motion.p>

              <motion.p
                className="power-body-desc centered"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
                custom={0.3}
              >
                To us, every brand starts with a thought. A vision. A “what if?” And sometimes, all it needs is the right people to see that vision, understand it, and bring it to life.
              </motion.p>

              <motion.p
                className="power-body-desc centered"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
                custom={0.4}
              >
                That’s where we come in. We are not just a marketing brand. We are the bridge between you and your dream brand. From an idea scribbled on a piece of paper to a brand that stands confidently in the real world, we believe in being a part of the journey not just the execution. Your vision inspires us. Your ambition drives us because marketing is more than just selling. It’s about telling a story, creating a feeling, and building a connection.
              </motion.p>

              <motion.h3
                className="about-orange-tagline centered"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
                custom={0.5}
              >
                You think it. We do it.
              </motion.h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. TWO-CARD COMPARISON & WHY BLANC SECTION WITH SIDE COVER IMAGE */}
      <section className="two-cards-section about-page-cards-section">
        <div className="seo-container-wide">
          <div className="about-cards-wrapper">
            {/* LEFT COLUMN: 2 CARDS STACKED VERTICALLY */}
            <div className="about-cards-left-col">
              {/* CARD 1: LIGHT GREY CARD - OUR MISSION */}
              <motion.div
                className="dual-card light-grey-card about-mission-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <motion.h3
                  className="dual-card-title"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={slideInLeft}
                  custom={0.1}
                >
                  OUR MISSION
                </motion.h3>

                <motion.p
                  className="mission-paragraph"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={slideInLeft}
                  custom={0.2}
                >
                  Our mission is to bring that story to life through strategy, design, content, and digital experiences that create real connections and drive meaningful growth because building a brand isn’t just about being seen, it’s about being remembered, trusted, and chosen. We work closely with businesses to understand what makes them different, find the right way to communicate it, and turn that difference into a brand people connect with. Whether you’re starting from a blank canvas or looking to take an existing brand to the next level, we bring together creative thinking, smart strategy, and consistent execution to help you grow with clarity and purpose.
                </motion.p>


              </motion.div>

              {/* CARD 2: DARK BLACK CARD - OUR VISION */}
              <motion.div
                className="dual-card dark-black-card about-vision-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0.2}
              >
                <div className="dark-card-inner">
                  <motion.h3
                    className="dual-card-title white-text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={slideInLeft}
                    custom={0.1}
                  >
                    OUR VISION
                  </motion.h3>

                  <motion.p
                    className="vision-paragraph"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={slideInLeft}
                    custom={0.25}
                  >
                    We envision a future where brands are defined not just by what they sell, but by what they make people feel. Our vision is to create a digital landscape where thoughtful strategy and distinctive creativity come together to build brands with purpose, personality, and lasting impact. We continuously evolve with changing technologies, trends, and consumer behaviour to help the brands we work with stay relevant, remarkable, and ahead.
                  </motion.p>

                  <motion.h3
                    className="about-orange-tagline centered"
                    style={{ marginTop: '1.2rem' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={slideInLeft}
                    custom={0.4}
                  >
                    At Blanc Media, we don’t just fill the blank.<br />We fill it with meaning.
                  </motion.h3>
                </div>


              </motion.div>
            </div>

            {/* RIGHT COLUMN: FULL-HEIGHT COVER IMAGE PLACEHOLDER */}
            <motion.div
              className="about-cards-right-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.3}
            >
              <div className="about-image-card">
                <img
                  src="/about-side-cover.jpg"
                  alt="Blanc Media Workspace & Innovation"
                  className="about-side-img"
                />
                <div className="about-image-overlay">
                  <div className="about-img-badge">
                    <span className="dot-indicator orange">●</span>
                    <span>CREATIVE & TECH HUBS</span>
                  </div>
                  <div className="about-img-text">
                    <h4>Crafting Digital Distinction</h4>
                    <p>Where high-impact strategy meets cutting-edge execution.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. NEW SECTION: LEFT IMAGE PLACEHOLDER + RIGHT CARD */}


      {/* FINAL CTA */}
      <FinalCta
        title="Ready to Elevate Your Brand Strategy?"
        desc="Let’s create digital experiences that move your business forward"
        buttonText="get in touch"
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
