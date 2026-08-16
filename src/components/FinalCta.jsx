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
      <motion.div
        className="final-cta-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.1}
      >
        <h2 className="final-cta-title">
          Speak to our financing<br />experts
        </h2>

        <p className="final-cta-desc">
          Our team is here to answer your questions, review your business needs, and guide you toward the right funding option—so you can move forward with confidence
        </p>

        <div className="final-cta-action-pill-bar">
          <div className="final-cta-experts-wrapper">
            <span className="experts-text">Experts</span>
            <div className="avatar-group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Expert Avatar 1"
                className="expert-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Expert Avatar 2"
                className="expert-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                alt="Expert Avatar 3"
                className="expert-avatar"
              />
              <a href="#contact" className="avatar-arrow-circle" aria-label="Explore Experts">
                <span>→</span>
              </a>
            </div>
          </div>

          <span className="action-bar-divider" />

          <a href="#contact" className="talk-to-finance-btn">
            <span>Talk to finance</span>
            <span className="talk-arrow">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

