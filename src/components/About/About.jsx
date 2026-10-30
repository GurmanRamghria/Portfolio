import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-regular fa-user"></i> Professional Profile
          </span>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            A deep dive into my background, journey, and technical craftsmanship.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-main-card glass-panel">
            <div className="card-glow-edge"></div>
            <div className="about-heading-box">
              <div className="icon-avatar">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div>
                <h3 className="about-name">Gurmandeep Singh</h3>
                <p className="about-origin">
                  <i className="fa-solid fa-map-pin text-cyan"></i> Malout, District Shri Muktsar Sahib, Punjab
                </p>
              </div>
            </div>

            <p className="about-text">
              I am Gurmandeep Singh from Malout, Punjab. I am an experienced frontend developer and UI designer with a strong foundation in modern web and mobile technologies. Seeking a challenging position to leverage my expertise in <strong>React.js, React Native, Redux Toolkit, HTML5, SASS, CSS3,</strong> and <strong>Bootstrap 5</strong> to contribute towards impactful, innovative digital products.
            </p>

            <p className="about-text">
              With <strong>37 months (3+ years)</strong> of demonstrated experience across leading companies including <strong>Xdecoders Programming Services (XPS), Nextillo, Virtual IT Technology,</strong> and <strong>GNI Soft Solution</strong>, I specialize in translating complex design prototypes into responsive, pixel-perfect, and ultra-performant interfaces.
            </p>

            <div className="about-contact-badges">
              <a href="tel:9517893419" className="contact-pill glass-pill">
                <i className="fa-solid fa-phone text-cyan"></i>
                <span>9517893419</span>
              </a>
              <a href="mailto:gurmandeep453@gmail.com" className="contact-pill glass-pill">
                <i className="fa-solid fa-envelope text-cyan"></i>
                <span>gurmandeep453@gmail.com</span>
              </a>
              <div className="contact-pill glass-pill">
                <i className="fa-solid fa-location-dot text-cyan"></i>
                <span>Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="about-features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <i className="fa-solid fa-bezier-curve"></i>
              </div>
              <h4 className="feature-title">Pixel-Perfect UI/UX</h4>
              <p className="feature-desc">
                Expert in crafting responsive layouts with HTML5, CSS3, SASS & Bootstrap 5 with attention to spacing and aesthetic typography.
              </p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <i className="fa-brands fa-react"></i>
              </div>
              <h4 className="feature-title">Dynamic React & Redux</h4>
              <p className="feature-desc">
                Building maintainable, high-performance web apps utilizing React hooks, reusable components, and Redux Toolkit state flow.
              </p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <i className="fa-solid fa-mobile-screen"></i>
              </div>
              <h4 className="feature-title">Cross-Platform Native Apps</h4>
              <p className="feature-desc">
                Creating consistent, native-feel iOS & Android apps using React Native with fluid transitions and smooth device integration.
              </p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <i className="fa-solid fa-plug-circle-bolt"></i>
              </div>
              <h4 className="feature-title">API Integration & Collaboration</h4>
              <p className="feature-desc">
                Collaborating seamlessly with backend teams for fast REST API integrations, code reviews, and following industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
