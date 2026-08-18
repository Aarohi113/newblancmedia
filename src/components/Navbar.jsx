import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const servicesList = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    path: '/social-media-management',
    desc: 'Engage, grow & build brand authority',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
  {
    id: 'ppc-ads',
    number: '02',
    title: 'PPC Ads',
    path: '/ppc-ads',
    desc: 'High-converting targeted ad campaigns',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m10 8 4 4-4 4"/>
      </svg>
    )
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO',
    path: '/seo',
    desc: 'Organic search rankings & traffic growth',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    )
  },
  {
    id: 'gmb',
    number: '04',
    title: 'GMB',
    path: '/gmb',
    desc: 'Local SEO & Google Maps optimization',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    id: 'web-development',
    number: '05',
    title: 'Web Development',
    path: '/web-development',
    desc: 'Modern, fast & responsive web apps',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getHref = (hash) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <motion.header
      className="navbar-wrapper"
      initial={{ opacity: 0, y: -25, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <nav className="capsule-navbar">
        {/* Brand Logo */}
        <Link to="/" className="nav-logo" aria-label="Blanc Media Home">
          <img src="/blanc-logo-dark.webp" alt="Blanc Media" className="nav-logo-img" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {/* Services with Hover Dropdown */}
          <li
            className="nav-item-dropdown"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a href={getHref("#services")} className="nav-dropdown-trigger">
              <span>Services</span>
              <svg
                className={`dropdown-arrow-icon ${servicesDropdownOpen ? 'open' : ''}`}
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  className="desktop-services-dropdown"
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="dropdown-inner-card">
                    <div className="dropdown-header">
                      <span className="dropdown-header-title">OUR SERVICES</span>
                      <span className="dropdown-header-badge">5 Solutions</span>
                    </div>

                    <div className="dropdown-menu-list">
                      {servicesList.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="dropdown-item"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span className="dropdown-item-num">{service.number}</span>
                          <div className="dropdown-item-icon">{service.icon}</div>
                          <div className="dropdown-item-info">
                            <span className="dropdown-item-title">{service.title}</span>
                            <span className="dropdown-item-desc">{service.desc}</span>
                          </div>
                          <span className="dropdown-item-arrow">→</span>
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-footer">
                      <a href={getHref("#services")} onClick={() => setServicesDropdownOpen(false)}>
                        View All Services Section ↓
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><a href={getHref("#products")}>Work</a></li>
          <li><a href={getHref("#about")}>About</a></li>
          <li><a href={getHref("#process")}>Process</a></li>
        </ul>

        {/* Action Button */}
        <div className="nav-actions">
          <a href={getHref("#contact")} className="nav-cta-btn">
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
            {/* Mobile Accordion for Services */}
            <div className="mobile-services-accordion">
              <button
                className="mobile-services-header-btn"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <span className="mobile-chevron-wrap">
                  <svg
                    className={`mobile-chevron ${mobileServicesOpen ? 'open' : ''}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    className="mobile-services-submenu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    {servicesList.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        className="mobile-service-subitem"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        <span className="mobile-subitem-num">{service.number}</span>
                        <span className="mobile-subitem-icon">{service.icon}</span>
                        <span className="mobile-subitem-title">{service.title}</span>
                      </Link>
                    ))}
                    <a
                      href={getHref("#services")}
                      className="mobile-service-subitem mobile-subitem-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Explore Overview</span>
                      <span>→</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={getHref("#products")} onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href={getHref("#about")} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href={getHref("#process")} onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href={getHref("#contact")} className="mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>
              Get in Touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
