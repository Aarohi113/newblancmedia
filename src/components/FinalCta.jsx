import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

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

export default function FinalCta({
  eyebrow = "Digital Marketing Agency",
  title = <>Let’s Connect and<br />Create Digital Success</>,
  desc = "Our team is here to answer your questions, review your business needs, and guide you toward the right solution—so you can move forward with confidence.",
  buttonText = "Let's Connect"
}) {
  const location = useLocation();
  const contactHref = location.pathname === '/' ? '#contact' : '/#contact';

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
        {eyebrow && (
          <span className="eyebrow eyebrow--static final-cta-eyebrow">
            <span>{eyebrow}</span>
          </span>
        )}

        <h2 className="final-cta-title">
          {title}
        </h2>

        <p className="final-cta-desc">
          {desc}
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
              <a href={contactHref} className="avatar-arrow-circle" aria-label="Explore Experts">
                <span>→</span>
              </a>
            </div>
          </div>

          <span className="action-bar-divider" />

          <a href={contactHref} className="talk-to-finance-btn">
            <span>{buttonText}</span>
            <span className="talk-arrow">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}


