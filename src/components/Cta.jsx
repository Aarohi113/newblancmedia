import React, { useState } from 'react';
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

export default function Cta() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="final-cta-section" id="contact">
      <div className="cta-ambient-glow" />

      <div className="cta-split-wrapper">
        {/* Left Column: Portrait Character Image Card */}
        <motion.div
          className="cta-portrait-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.1}
        >
          <picture>
            <source srcSet="/Charac.webp" type="image/webp" />
            <img
              src="/Charac.png"
              alt="BLANC Media Mascot"
              className="portrait-charac-img"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>

        {/* Right Column: Charcoal Black Form Card */}
        <motion.div
          className="cta-form-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0.25}
        >
          <div className="cta-form-header">
            <span className="eyebrow eyebrow--static cta-eyebrow-dark">
              <span>GET IN TOUCH</span>
            </span>

            <h2 className="cta-heading-dark">
              Let's make your presence <span className="cta-highlight">unignorable.</span>
            </h2>
          </div>

          {submitted ? (
            <div className="cta-form-success-dark">
              <span className="success-icon">✓</span>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form className="cta-contact-form-dark" onSubmit={handleSubmit}>
              {/* Row 1: First Name & Last Name */}
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 3: Company Name */}
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4: Website URL */}
              <div className="form-group">
                <label htmlFor="website">Website URL</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5: Additional Notes */}
              <div className="form-group">
                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="cta-submit-btn-dark">
                <span>Send Message</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
