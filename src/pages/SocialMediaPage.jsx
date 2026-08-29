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

export default function SocialMediaPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  // Typewriter animation state for hero heading
  const line1Text = "DON'T JUST POST";
  const line2Text = "BUILD A BRAND THAT PEOPLE REMEMBER";
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
    if (displayedLine1.length <= 6) {
      return displayedLine1;
    }
    const prefix = displayedLine1.slice(0, 6);
    const highlight = displayedLine1.slice(6);
    return (
      <>
        {prefix}
        <span className="seo-text-gradient">{highlight}</span>
      </>
    );
  };

  return (
    <div className="seo-page-wrapper flair-style">
      {/* 01. HERO BANNER SECTION (FLAIRUP STYLE ARCHITECTURE) */}
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
                  <span>01. SOCIAL MEDIA MANAGEMENT</span>
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
                  Strategic social media management that combines content, creativity and consistency to build a stronger digital presence.
                </p>

                <div className="flair-hero-actions">
                  <a href="#contact" className="seo-primary-btn capsule-cta-btn">
                    <span>Grow My Social Presence</span>
                    <span className="seo-btn-arrow">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. UNLOCK THE POWER OF SOCIAL MEDIA SECTION */}
      <section className="flair-power-section" id="power_social">
        <div className="seo-container-full">
          <motion.div
            className="seo-full-width-header-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="flair-giant-power-title">
              <span className="power-title-line">Your Social Media Should Look Like Your Brand.
              </span>
            </h2>

            <div className="power-center-text-block">
              <p className="seo-body-lead centered">
                Random posts don’t build strong brands.
              </p>

              <p className="power-body-desc centered">
                We create a structured social media strategy that brings together content, design, storytelling and audience engagement—so your brand stays consistent and relevant
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. TWO-CARD COMPARISON & WHY BLANC SECTION */}
      <section className="two-cards-section">
        <div className="seo-container-wide">
          <div className="two-cards-grid">
            {/* CARD 1: LIGHT GREY CARD - WHAT WE DO */}
            <motion.div
              className="dual-card light-grey-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >


              <motion.h3
                className="dual-card-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.1}
              >
                WHAT WE DO
              </motion.h3>

              <ul className="dual-card-list">
                {[
                  'Social Media Strategy',
                  'Content Planning',
                  'Creative Design',
                  'Reels & Video Content',
                  'Instagram Management',
                  'Facebook Management',
                  'Content Calendar',
                  'Festival & Campaign Creatives',
                  'Community Management',
                  'Social Media Ads',
                  'Monthly Reporting',
                  'Competitor & Trend Research',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.07 }}
                  >
                    <span className="check-dot">•</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CARD 2: DARK BLACK CARD - WHY THE BLANC? */}
            <motion.div
              className="dual-card dark-black-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.2}
            >
              <div className="dual-card-badge orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <div className="dark-card-inner">
                <motion.h3
                  className="dual-card-title white-text"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  WHY THE BLANC?
                </motion.h3>

                <div className="dark-card-content">
                  <motion.p
                    className="highlight-lead"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                  >
                    Our Approach
                  </motion.p>

                  <motion.div
                    className="approach-flow-badge"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                    style={{
                      margin: '0.8rem 0 1rem 0',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#f97316',
                      letterSpacing: '0.02em',
                      lineHeight: '1.5'
                    }}
                  >
                    Plan → Create → Publish → Engage → Analyze
                  </motion.div>

                  <motion.p
                    className="sub-desc"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                  >
                    We don’t just keep your page active. We build content with a purpose.
                  </motion.p>
                </div>
              </div>

              <motion.div
                className="dark-card-action"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              >
                <a href="#contact" className="seo-primary-btn capsule-cta-btn orange-btn">
                  <span>Get Your Social Audit</span>
                  <span className="seo-btn-arrow">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCta />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
