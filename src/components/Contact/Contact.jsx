import React, { useState } from 'react';
import './Contact.scss';

const Contact = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
      .then(() => onNotify(`Copied ${label} to clipboard!`))
      .catch(() => {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        onNotify(`Copied ${label} to clipboard!`);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const mailtoURL = `mailto:gurmandeep453@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Gurmandeep,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      onNotify('Opening email client with your message...');

      setTimeout(() => {
        window.location.href = mailtoURL;
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }, 600);
  };

  return (
    <section className="section-padding section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-solid fa-paper-plane"></i> Get In Touch
          </span>
          <h2 className="section-title">
            Contact <span className="text-gradient">Details</span>
          </h2>
          <p className="section-subtitle">
            Reach out for frontend & React Native opportunities, collaborations, or inquiries.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Contact Details Cards */}
          <div className="contact-info-col">

            {/* Phone Card */}
            <div className="contact-card glass-panel">
              <div className="contact-card-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-card-content">
                <span className="contact-label">Phone Number</span>
                <a href="tel:9517893419" className="contact-value">
                  +91 9517893419
                </a>
                <p className="contact-note">Available for calls and direct inquiries</p>
              </div>
              <div className="contact-actions">
                <a href="tel:9517893419" className="action-btn" title="Call Now">
                  <i className="fa-solid fa-phone-flip"></i>
                </a>
                <button
                  type="button"
                  className="action-btn"
                  onClick={() => handleCopy('9517893419', 'Phone Number')}
                  title="Copy Number"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card glass-panel">
              <div className="contact-card-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-card-content">
                <span className="contact-label">Email Address</span>
                <a href="mailto:gurmandeep453@gmail.com" className="contact-value">
                  gurmandeep453@gmail.com
                </a>
                <p className="contact-note">Quick response within 24 hours</p>
              </div>
              <div className="contact-actions">
                <a href="mailto:gurmandeep453@gmail.com" className="action-btn" title="Send Email">
                  <i className="fa-solid fa-paper-plane"></i>
                </a>
                <button
                  type="button"
                  className="action-btn"
                  onClick={() => handleCopy('gurmandeep453@gmail.com', 'Email Address')}
                  title="Copy Email"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card glass-panel">
              <div className="contact-card-icon">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="contact-card-content">
                <span className="contact-label">Current Location</span>
                <span className="contact-value">Malout, Punjab</span>
                <p className="contact-note">District Shri Muktsar Sahib, Punjab, India</p>
              </div>
              <div className="contact-actions">
                <a
                  href="https://maps.google.com/?q=Malout,Punjab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn"
                  title="Open Map"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="whatsapp-banner glass-panel">
              <div className="wa-left">
                <i className="fa-brands fa-whatsapp text-whatsapp"></i>
                <div>
                  <strong>Chat Directly on WhatsApp</strong>
                  <p>Fastest way to get in touch with Gurmandeep</p>
                </div>
              </div>
              <a
                href="https://wa.me/919517893419?text=Hi%20Gurmandeep,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>Start Chat</span>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper glass-panel">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Have an exciting role or project? Let's discuss.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <div className="input-wrap">
                      <i className="fa-regular fa-user"></i>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <div className="input-wrap">
                      <i className="fa-regular fa-envelope"></i>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Purpose</label>
                  <div className="input-wrap">
                    <i className="fa-solid fa-tag"></i>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Frontend Developer Opportunity / Project Inquiry"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-wrap textarea-wrap">
                    <i className="fa-regular fa-message"></i>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Gurmandeep, I would like to discuss..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-liquid w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message Directly</span>
                      <i className="fa-solid fa-paper-plane"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
