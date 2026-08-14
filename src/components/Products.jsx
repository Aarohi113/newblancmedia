import React, { useState } from 'react';

const accordionData = [
  {
    id: 1,
    label: "Brand Audit",
    emoji: "🔍",
    desc: "Comprehensive market, competitor, audience, and website analysis to uncover untapped SEO and growth opportunities.",
    bullets: ["Competitor Benchmark", "Audience Insights", "Technical SEO Audit"]
  },
  {
    id: 2,
    label: "Marketing Strategy",
    emoji: "🧭",
    desc: "A custom, data-driven roadmap spanning organic search, performance ads, content marketing, and conversion funnels.",
    bullets: ["Keyword & Intent Mapping", "Paid Media Roadmap", "Conversion Architecture"]
  },
  {
    id: 3,
    label: " Campaign Creation",
    emoji: "🎨",
    desc: "High-converting ad creatives, SEO-optimized articles, compelling social media assets, and high-impact landing pages.",
    bullets: ["Ad Creative Studio", "SEO Content Scaling", "Landing Page Design"]
  },
  {
    id: 4,
    label: "Campaign Execution",
    emoji: "🚀",
    desc: "Flawless launch and active management of targeted Google Ads, Meta Ads, social campaigns, and search rank scaling.",
    bullets: ["Multi-Channel Ads", "Real-Time Bidding", "Lead Generation"]
  },
  {
    id: 5,
    label: "Performance Optimization",
    emoji: "📊",
    desc: "Continuous A/B testing, rank tracking, conversion rate optimization (CRO), and transparent performance analytics.",
    bullets: ["CRO & Funnel Testing", "ROI Analytics", "Weekly Growth Reports"]
  }
];

export default function Products() {
  const [activeAccCard, setActiveAccCard] = useState(null);

  return (
    <section className="accordion-services" id="products">
      <div className="acc-head">
        <h2>The BLANC Growth Process.</h2>
        <p>A data-driven digital marketing process designed to increase visibility, reach the right audience, and drive measurable results.</p>
      </div>

      <div className="acc-row">
        {accordionData.map((item) => (
          <div
            key={item.id}
            className={`acc-card ${activeAccCard === item.id ? 'is-active' : ''}`}
            tabIndex={0}
            onClick={() => setActiveAccCard(activeAccCard === item.id ? null : item.id)}
          >
            <span className="acc-label">{item.label}</span>
            <div className="acc-content">
              <div className="acc-inner-body">
                <span className="acc-emoji-badge">{item.emoji}</span>
                <h4 className="acc-content-title">{item.label}</h4>
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
    </section>
  );
}
