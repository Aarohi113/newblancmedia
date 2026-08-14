import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar-wrapper"
      initial={{ opacity: 0, y: -25, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <nav className="capsule-navbar">
        {/* Brand Logo */}
        <a href="#" className="nav-logo">
          BLANC<span className="logo-dot">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
        </ul>

        {/* Action Button */}
        <div className="nav-actions">
          <a href="#contact" className="nav-cta-btn">
            <span>Get in Touch</span>
            <span className="cta-arrow">→</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#contact" className="mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>
              Get in Touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
