import React, { useState } from 'react';
import cardPerfImg from '../assets/card_perf.jpg';
import cardMarketImg from '../assets/card_market.jpg';

const accordionData = [
  {
    id: 1,
    label: "Search Engine Optimization",
    emoji: "🔍",
    desc: "Comprehensive search strategy, technical SEO audits, keyword optimization, and high-quality link building to boost rank.",
    bullets: ["Keyword Optimization", "Technical SEO", "Link Building"]
  },
  {
    id: 2,
    label: "Pay Per Click ads",
    emoji: "🧭",
    image: cardMarketImg,
    desc: "High-ROI Google Ads, Meta Ads, and targeted PPC advertising campaigns focused on driving qualified leads.",
    bullets: ["Google Ads", "Meta Paid Ads", "Conversion Tracking"]
  },
  {
    id: 3,
    label: "Social media management",
    emoji: "💡",
    desc: "Strategic social media content, audience engagement, brand building, and creative post designs across platforms.",
    bullets: ["Social Content", "Community Growth", "Brand Engagement"]
  },
  {
    id: 4,
    label: "Website Development",
    emoji: "📊",
    image: cardPerfImg,
    desc: "Modern, ultra-fast, responsive web development built for high conversion, search visibility, and seamless user experience.",
    bullets: ["Responsive Web Design", "Conversion Funnels", "High Performance"]
  }
];

export default function Products() {
  // Card 1 is open by default initially with black background
  const [activeAccCard, setActiveAccCard] = useState(1);

  const handleMouseEnter = (id) => {
    if (window.innerWidth < 860) return;
    setActiveAccCard(id);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 860) return;
    setActiveAccCard(1);
  };

  const handleCardClick = (id) => {
    setActiveAccCard(prev => (prev === id ? null : id));
  };

  return (
    <section className="accordion-services" id="products">
      <div className="acc-container">
        {/* Existing Left Heading */}
        <div className="acc-left-heading">
          <span className="eyebrow eyebrow--static">
            <span>OUR PROCESS</span>
          </span>
          <h2>The BLANC<br />Growth Process.</h2>
          <p>
            A data-driven digital marketing process designed to increase visibility, reach the right audience, and drive measurable results.
          </p>
        </div>

        {/* User Accordion Row */}
        <div className="acc-row" onMouseLeave={handleMouseLeave}>
          {accordionData.map((item) => (
            <div
              key={item.id}
              className={`acc-card ${activeAccCard === item.id ? 'is-active' : ''}`}
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onClick={() => handleCardClick(item.id)}
            >
              <span className="acc-label">{item.label}</span>

              <div className="acc-content">
                <div className="acc-inner-body">
                  {item.image && (
                    <div className="acc-card-img-wrap">
                      <img src={item.image} alt={item.label} className="acc-card-img" />
                    </div>
                  )}
                  <span className="acc-emoji-badge">{item.emoji}</span>
                  <p className="acc-content-desc">{item.desc}</p>
                  <div className="acc-bullets">
                    {item.bullets.map((b, i) => (
                      <span key={i} className="acc-bullet-tag">
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
