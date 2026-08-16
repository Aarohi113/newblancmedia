import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

export default function FinalCta() {
  return (
    <section className="bottom-final-cta">
      <div className="cta-ambient-glow" />

      <motion.div
        className="final-cta-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.1}
      >
        <span className="eyebrow eyebrow--static final-cta-eyebrow">
          <span>READY FOR GROWTH?</span>
        </span>

        <h2 className="final-cta-title">
          Ready to scale your brand<br />to the next level?
        </h2>

        <p className="final-cta-desc">
          Partner with BLANC Media to engineer high-converting marketing campaigns, boost ROAS, and outpace your competition.
        </p>

        <div className="final-cta-actions">
          <a href="#contact" className="final-cta-btn primary-btn">
            <span>Book a Free Growth Call</span>
            <span className="cta-arrow">→</span>
          </a>

          <a href="mailto:hello@newblancmedia.com" className="final-cta-btn secondary-btn">
            <span>Email Us Directly</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>

        <div className="final-cta-trust-badges">
          <span className="trust-item">⚡ 24hr Response Time</span>
          <span className="trust-sep">•</span>
          <span className="trust-item">🎯 Data-Driven Strategy</span>
          <span className="trust-sep">•</span>
          <span className="trust-item">🚀 Guaranteed Scaling</span>
        </div>
      </motion.div>
    </section>
  );
}
