import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

export default function Cta() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    contact: '',
    message: ''
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

      <div className="cta-container cta-grid-layout">
        {/* Left Column: Eyebrow + Heading */}
        <motion.div
          className="cta-left-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.1}
        >
          <span className="eyebrow eyebrow--static cta-eyebrow">
            <span className="rule" />
            <span>GET IN TOUCH</span>
          </span>

          <h2 className="cta-heading">
            Let's make your presence <span className="cta-highlight">unignorable.</span>
          </h2>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="cta-right-form-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.25}
        >
          {submitted ? (
            <div className="cta-form-success">
              <span className="success-icon">✓</span>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form className="cta-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="e.g. Mumbai"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project or growth goals..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="cta-submit-btn">
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
