import React, { useState, useEffect, useRef } from 'react';
import './Hero.scss';

const Hero = () => {
  // Typewriter state with "React JS Developer" front and center
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'React JS Developer',
    'Frontend & React Native Specialist',
    'React.js & Redux Toolkit Expert',
    'Modern Web & Mobile Architect'
  ];

  // 3D Tilt Card ref
  const tiltCardRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 450; // Pause before next word
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Handle 3D Tilt Card Mouse Move
  const handleMouseMove = (e) => {
    if (!wrapperRef.current || !tiltCardRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    tiltCardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (tiltCardRef.current) {
      tiltCardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status pill */}
          <div className="status-badge glass-pill">
            <span className="pulse-dot"></span>
            <span>React JS Developer • Available for New Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Gurmandeep Singh</span>
          </h1>

          <div className="hero-designation">
            <span className="role-prefix">I am a </span>
            <span className="role-highlight">{currentText}</span>
          </div>

          <p className="hero-bio">
            Specialized <strong>React JS Developer</strong> from <strong>Malout, Punjab</strong> with <strong>3+ years (37 months)</strong> of solid experience building high-performance, dynamic web apps & cross-platform mobile solutions using <strong>React.js, React Native, Redux Toolkit,</strong> and modern frontend architecture.
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-liquid">
              <span>Get In Touch</span>
              <i className="fa-solid fa-paper-plane"></i>
            </a>
            <a href="#experience" className="btn btn-glass">
              <span>Explore Experience</span>
              <i className="fa-solid fa-arrow-trend-up"></i>
            </a>
            <a
              href="https://wa.me/919517893419?text=Hello%20Gurmandeep,%20I%20reviewed%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass-icon"
              title="Chat on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="mailto:gurmandeep453@gmail.com"
              className="btn btn-glass-icon"
              title="Email Me"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          {/* Quick Contact Strip */}
          <div className="quick-contact-strip">
            <div className="qc-item">
              <i className="fa-solid fa-phone text-cyan"></i>
              <a href="tel:9517893419">+91 9517893419</a>
            </div>
            <span className="qc-divider">•</span>
            <div className="qc-item">
              <i className="fa-solid fa-envelope text-cyan"></i>
              <a href="mailto:gurmandeep453@gmail.com">gurmandeep453@gmail.com</a>
            </div>
            <span className="qc-divider">•</span>
            <div className="qc-item">
              <i className="fa-solid fa-location-dot text-cyan"></i>
              <span>Malout, Muktsar Sahib, Punjab</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Developer Showcase Card (First section: crisp, solid-feel developer card) */}
        <div className="hero-visual">
          <div
            className="liquid-card-wrapper"
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero-developer-card" ref={tiltCardRef}>
              <div className="card-header-bar">
                <div className="mac-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="card-chip">react_developer.json</div>
              </div>

              <div className="developer-avatar-wrapper">
                <div className="avatar-glow"></div>
                <div className="avatar-frame">
                  <div className="initials-circle">GS</div>
                </div>
                <div className="avatar-info">
                  <h3 className="avatar-name">Gurmandeep Singh</h3>
                  <p className="avatar-role">React JS Developer</p>
                  <p className="avatar-location">
                    <i className="fa-solid fa-location-dot"></i> Malout, Punjab, India
                  </p>
                </div>
              </div>

              <div className="code-preview">
                <div className="code-line"><span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;</div>
                <div className="code-line indent"><span className="code-prop">name:</span> <span className="code-str">"Gurmandeep Singh"</span>,</div>
                <div className="code-line indent"><span className="code-prop">role:</span> <span className="code-cyan">"React JS Developer"</span>,</div>
                <div className="code-line indent"><span className="code-prop">experience:</span> <span className="code-str">"37 Months (3+ Years)"</span>,</div>
                <div className="code-line indent"><span className="code-prop">coreStack:</span> [<span className="code-str">"React.js"</span>, <span className="code-str">"React Native"</span>],</div>
                <div className="code-line indent"><span className="code-prop">stateManagement:</span> <span className="code-str">"Redux Toolkit"</span>,</div>
                <div className="code-line indent"><span className="code-prop">styling:</span> [<span className="code-str">"HTML5"</span>, <span className="code-str">"CSS3"</span>, <span className="code-str">"SASS"</span>, <span className="code-str">"Bootstrap 5"</span>],</div>
                <div className="code-line indent"><span className="code-prop">status:</span> <span className="code-cyan">"Building High-Impact Web & Apps"</span></div>
                <div className="code-line">&#125;;</div>
              </div>

              {/* Orbiting Badges */}
              <div className="floating-badge badge-react">
                <i className="fa-brands fa-react"></i> React.js
              </div>
              <div className="floating-badge badge-native">
                <i className="fa-solid fa-mobile-screen-button"></i> React Native
              </div>
              <div className="floating-badge badge-redux">
                <i className="fa-solid fa-layer-group"></i> Redux Toolkit
              </div>
              <div className="floating-badge badge-sass">
                <i className="fa-brands fa-sass"></i> SASS & Bootstrap 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
