import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import cardPerfImg from '../assets/card_perf.jpg';
import cardMarketImg from '../assets/card_market.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

const sideCards = [
  {
    id: 1,
    position: 'top-left',
    title: 'SEARCH ENGINE OPTIMIZATION',
    desc: 'Comprehensive keyword strategy, technical SEO audits, and link building to boost rank.',
    link: 'See full list',
    image: cardPerfImg,
    path: '/seo',
  },
  {
    id: 2,
    position: 'bottom-left',
    title: 'PAY PER CLICK ADS',
    desc: 'High-ROI Google Ads, Meta Ads, and targeted PPC campaigns driving qualified leads.',
    link: 'See full list',
    image: cardMarketImg,
    path: '/ppc-ads',
  },
  {
    id: 3,
    position: 'top-right',
    title: 'SOCIAL MEDIA MANAGEMENT',
    desc: 'Strategic social media content, audience engagement, brand building, and creative designs.',
    link: 'See full list',
    image: cardPerfImg,
    path: '/social-media-management',
  },
  {
    id: 4,
    position: 'bottom-right',
    title: 'WEBSITE DEVELOPMENT',
    desc: 'Modern, ultra-fast, responsive web development built for high conversion and UX.',
    link: 'See full list',
    image: cardMarketImg,
    path: '/web-development',
  }
];

export default function Products() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"]
  });

  // 1st scroll arrival (0.0 to 0.25): 0deg (Cards stay in original default positions)
  // Subsequent scrolls (0.25 to 0.75): Revolves clockwise subtly up to 11deg so right cards stay safely inside section bounds
  const rotateAngle = useTransform(scrollYProgress, [0, 0.25, 0.75], [0, 0, 11]);

  // Counter-rotate each card box so it stays 100% upright & level
  const counterRotateAngle = useTransform(scrollYProgress, [0, 0.25, 0.75], [0, 0, -11]);

  return (
    <section className="products-showcase-section" ref={sectionRef} id="products">
      {/* Background Concentric Rings */}
      <div className="bg-ring ring-small" />
      <div className="bg-ring ring-large" />

      <div className="products-container">
        {/* Top Header */}
        <motion.div
          className="products-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.1}
        >
          <h2 className="products-main-title">
            Step into BLANC's exclusive services
          </h2>
          <p className="products-main-sub">
            We connect members with high-performance ad scaling, precision analytics, customized strategies, and proactive growth care.
          </p>
        </motion.div>

        {/* Central Stage: Phone Image + 4 Floating Side Cards */}
        <div className="products-stage">
          {/* Central Phone Mockup */}
          <motion.div
            className="phone-center-wrap"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <picture>
              <source srcSet="/Phone.webp" type="image/webp" />
              <img
                src="/Phone.png"
                alt="BLANC Mobile App Mockup"
                className="phone-mockup-img"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </motion.div>

          {/* Bottom Gradient Fade Overlay for Soft Image Dissolve */}
          <div className="products-bottom-fade" />

          {/* Cards Orbiting Layer (0deg on 1st scroll, then rotates clockwise on subsequent scrolls) */}
          <motion.div
            className="cards-orbit-layer"
            style={{ rotate: rotateAngle }}
          >
            {sideCards.map((card, idx) => (
              <motion.div
                key={card.id}
                className={`product-side-card card-${card.position}`}
                style={{ rotate: counterRotateAngle, cursor: 'pointer' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0.2 + idx * 0.12}
                onClick={() => navigate(card.path)}
              >
                <div className="card-thumb-wrap">
                  <img src={card.image} alt={card.title} className="card-thumb-img" />
                </div>

                <div className="card-body">
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-desc">{card.desc}</p>
                  <Link to={card.path} className="card-link" onClick={(e) => e.stopPropagation()}>
                    <span>{card.link}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
