import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="glass-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand-logo">
              <span className="logo-symbol">&lt;G/&gt;</span>
              <span className="logo-text">Gurman<span className="accent-dot">deep</span></span>
            </a>
            <p className="footer-tagline">
              React JS & Frontend Developer crafting high-performance, user-centric web and mobile experiences.
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-col">
              <h5>Sections</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#strengths">Strengths</a></li>
                <li><a href="#contact">Contact Details</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 <strong>Gurmandeep Singh</strong>. Built with React.js, SCSS & #29a1dd Liquid Glass Theme.</p>
          <div className="footer-socials">
            <a
              href="https://wa.me/919517893419"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:gurmandeep453@gmail.com" title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:9517893419" title="Phone">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="#home" className="back-to-top" title="Back to top">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
