import React from 'react';
import { motion } from 'framer-motion';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';

export default function SocialMediaPage() {
  return (
    <div className="seo-page-wrapper">
      <section className="seo-hero-section">
        <div className="seo-container">
          <motion.div
            className="seo-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="seo-eyebrow-pill">
              <span className="seo-pill-dot" />
              <span className="seo-pill-text">03. SOCIAL MEDIA MANAGEMENT</span>
            </div>
            <h1 className="seo-hero-title">
              Engage. Grow. <br />
              <span className="seo-text-gradient">Dominate Social.</span>
            </h1>
            <p className="seo-hero-subtext">
              Strategic social media content, active community engagement, brand authority building, and creative design.
            </p>
            <a href="#contact" className="seo-primary-btn" style={{ marginTop: '1.5rem' }}>
              <span>Build Your Social Brand</span>
              <span className="seo-btn-arrow">→</span>
            </a>
          </motion.div>
        </div>
      </section>
      <FinalCta />
      <Footer />
    </div>
  );
}
