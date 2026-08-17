import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const approachCards = [
  {
    num: '01',
    title: 'On-Page SEO',
    desc: 'At THE BLANC, we optimize your website’s structural elements including meta tags, title tags, heading tags, internal linking, and semantic content relevance to ensure search engines accurately index and rank your pages.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Off-Page SEO',
    desc: 'Enhancing your domain authority through high-quality backlink acquisition, digital PR outreach, ethical brand mentions, and strategic authority building that establishes trust with search engines.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Local SEO',
    desc: 'Dominate geo-targeted search results and Google Maps listings. We optimize your Google Business Profile, local citations, and customer review workflows to drive high-intent local customer inquiries.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Technical SEO',
    desc: 'Resolving behind-the-scenes site performance metrics. We optimize site speed, Core Web Vitals, mobile responsiveness, SSL security, schema markup, and crawlability for a flawless technical base.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Content Strategy & Optimization',
    desc: 'Content is king in organic search. Our team crafts intent-driven, keyword-rich copy that engages your target audience, answers customer search queries, and builds long-term domain relevance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'SEO Audits & Reporting',
    desc: 'Transparent real-time reporting dashboards tracking key performance metrics like organic rankings, search traffic growth, click-through rates, and lead conversions with monthly strategic calls.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const seoTypes = [
  {
    title: 'Dental & Medical SEO',
    desc: 'Ranking clinics for competitive local terms like "best dentist" or specialized treatment keywords.',
    tag: 'Healthcare',
  },
  {
    title: 'Hospital & Care SEO',
    desc: 'Targeting emergency services, specialty departments, and local healthcare search queries.',
    tag: 'Hospitals',
  },
  {
    title: 'Lawyer & Firm SEO',
    desc: 'Positioning law firms for high-value legal queries, practice area pages, and client consultation leads.',
    tag: 'Legal',
  },
  {
    title: 'Financial & Wealth SEO',
    desc: 'Optimizing wealth managers, accountants, and insurance agencies for targeted financial search intent.',
    tag: 'Finance',
  },
  {
    title: 'Doctor & Clinic SEO',
    desc: 'Enhancing local doctor visibility through GMB management, patient reviews, and medical content.',
    tag: 'Practitioners',
  },
  {
    title: 'Restaurant & Hospitality SEO',
    desc: 'Driving foot traffic and online orders by dominating local food, dining, and menu search queries.',
    tag: 'Dining',
  },
  {
    title: 'Hotel & Travel SEO',
    desc: 'Ranking hotels and venues for travel, accommodation, luxury stays, and event booking keywords.',
    tag: 'Hospitality',
  },
  {
    title: 'E-Commerce & Retail SEO',
    desc: 'Optimizing product pages, category taxonomies, and shopping feeds to scale organic sales revenue.',
    tag: 'E-Commerce',
  },
];

const faqList = [
  {
    question: 'What is SEO?',
    answer: 'SEO (Search Engine Optimization) is the process of optimizing a website to rank higher on search engine result pages (SERPs) for relevant keywords. The goal of SEO is to increase organic (non-paid) traffic to your website by ensuring it appears at the top of search results when potential customers search for your products or services. SEO involves several techniques, such as on-page optimization (content and meta tags), off-page optimization (backlinks), and technical SEO (site speed, mobile-friendliness). Effective SEO helps increase your online visibility, attracting more targeted visitors to your site.',
  },
  {
    question: 'Does SEO Truly Work?',
    answer: 'Yes, SEO does work! When executed correctly, SEO drives significant organic traffic to your website, resulting in higher conversions and sustainable revenue growth. Unlike paid advertising which requires non-stop daily budget investment, SEO provides compounding long-term benefits by establishing solid search rankings and maintaining those positions over time. At THE BLANC, we use data-proven strategies to build a resilient, high-converting organic search presence.',
  },
  {
    question: 'How Do I Measure the ROI from SEO Services?',
    answer: 'Measuring the ROI of SEO involves tracking key metrics such as organic traffic volume, conversion rates, keyword rankings, and lead attribution. Using transparent analytics tools, we track the performance of high-intent keywords and monitor revenue generated from organic search traffic. THE BLANC provides clear monthly reports highlighting growth in these core metrics.',
  },
  {
    question: 'What is the Meaning of Organic SEO?',
    answer: 'Organic SEO refers to improving your website’s search engine rankings through natural, non-paid optimization techniques. It involves optimizing site architecture, producing high-value content, and building authoritative backlinks to align with search algorithms. The goal of organic SEO is to earn top placement based on relevance and authority, creating non-stop compounding traffic for your business.',
  },
];

export default function SeoPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  // Typewriter animation state for hero heading
  const line1Text = "Be FOUND. Be CHOSEN.";
  const line2Text = "Be REMEMBERED.";
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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const renderLine1Content = () => {
    if (displayedLine1.length <= 10) {
      return displayedLine1;
    }
    const prefix = displayedLine1.slice(0, 10);
    const highlight = displayedLine1.slice(10);
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
                  <span>01. SEO STRATEGY & GROWTH</span>
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
                  Turn Google searches into real business opportunities with SEO strategies built around your audience, industry and goals.
                </p>

                <div className="flair-hero-actions">
                  <a href="#contact" className="seo-primary-btn capsule-cta-btn">
                    <span>Get Your SEO Strategy</span>
                    <span className="seo-btn-arrow">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. UNLOCK THE POWER OF SEO SECTION */}
      <section className="flair-power-section" id="power_seo">
        <div className="seo-container-full">
          <motion.div
            className="seo-full-width-header-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="flair-giant-power-title">
              <span className="power-title-line">YOUR CUSTOMERS ARE SEARCHING.</span>
              <span className="power-title-line">ARE THEY FINDING YOU?</span>
            </h2>

            <div className="power-center-text-block">
              <p className="seo-body-lead centered">
                Ranking on Google isn’t just about keywords. It’s about being visible when your potential customers are actively looking for what you offer.
              </p>

              <p className="power-body-desc centered">
                At <strong>THE BLANC</strong> we combine technical SEO, content and search strategy to improve your visibility, attract relevant traffic and build sustainable organic growth.
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
              <div className="dual-card-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>

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
                  'Google Business Profile Optimization',
                  'Business Information Optimization',
                  'Category & Service Optimization',
                  'Local Keyword Strategy',
                  'Google Posts',
                  'Photo & Visual Optimization',
                  'Review Management Strategy',
                  'Local Competitor Analysis',
                  'Performance Monitoring',
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
                    Strategy Before Everything.
                  </motion.p>
                  <motion.p
                    className="sub-desc"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  >
                    We don’t chase rankings just for the sake of rankings. We focus on the searches that have the potential to bring the right audience to your business.
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
                  <span>Let’s Grow Your Search Presence</span>
                  <span className="seo-btn-arrow">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (Reused from Home) */}
      <FinalCta />

      {/* FOOTER (Reused from Home) */}
      <Footer />
    </div>
  );
}
