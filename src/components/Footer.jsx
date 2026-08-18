import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <motion.div
        className="footer-card-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
      >
        {/* Top Header Row: Logo on Left, Nav Links on Right */}
        <div className="footer-top-row">
          <a href="#" className="footer-logo" aria-label="Blanc Media Home">
            <img src="/blanc-logo-light.webp" alt="Blanc Media" className="footer-logo-img" />
          </a>

          <nav className="footer-nav-menu">
            <a href="#services">Services</a>
            <Link to="/about">About</Link>
            <a href="#contact">Contacts</a>
          </nav>
        </div>

        {/* Middle Main Content Grid */}
        <div className="footer-main-grid">
          {/* Left Column: Bio & More About Us */}
          <div className="footer-bio-col">
            <p className="footer-bio-text">
              Data-driven marketing and growth systems powering next-gen brands. SEO, performance advertising & revenue scaling.
            </p>
            <Link to="/about" className="footer-more-about">
              <span className="dot-indicator">●</span> More about us
            </Link>

            {/* Circular Social Icon Pills */}
            <div className="footer-social-pills">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Location */}
          <div className="footer-details-col">
            <div className="footer-detail-group">
              <h4 className="detail-title">Contact Us</h4>
              <p className="detail-text"><a href="tel:+919044618328">+91 9044618328</a></p>
              <p className="detail-text"><a href="mailto:contact@theblancmedia.com">contact@theblancmedia.com</a></p>
            </div>

            <div className="footer-detail-group">
              <h4 className="detail-title">Location</h4>
              <p className="detail-text">Blanc Media Tower, Digital Hub</p>
              <p className="detail-text">Cyber City, DLF Phase 2, Gurugram</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright on Left, Languages on Right */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} — Copyright All rights reserved
          </p>
          <div className="footer-languages">
            <span className="lang-label">Languages:</span>
            <span className="lang-option active">En</span>
            <span className="lang-option">Es</span>
            <span className="lang-option">Fr</span>
            <span className="lang-option">De</span>
            <span className="lang-option">Ru</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
