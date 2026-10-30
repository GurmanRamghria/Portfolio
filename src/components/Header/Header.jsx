import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'fa-laptop-code' },
    { id: 'skills', label: 'Skills', icon: 'fa-code' },
    { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
    { id: 'strengths', label: 'Strengths', icon: 'fa-star' },
    { id: 'contact', label: 'Contact', icon: 'fa-paper-plane' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar shrink / blur intensity
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.pageYOffset + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#home" className="brand-logo" aria-label="Home">
          <span className="logo-symbol">&lt;G/&gt;</span>
        </a>

        {/* Desktop Navigation (Clean text labels without numbers) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right CTA */}
        <div className="header-actions">
          <a href="#contact" className="btn btn-liquid-sm">
            <span>Let's Talk</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <button
            className={`hamburger-btn ${isMobileOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileOpen ? 'active' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-menu">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <a href="tel:9517893419" className="btn btn-liquid w-100 mb-2" onClick={closeMobileMenu}>
              <i className="fa-solid fa-phone"></i> +91 9517893419
            </a>
            <a href="mailto:gurmandeep453@gmail.com" className="btn btn-glass w-100" onClick={closeMobileMenu}>
              <i className="fa-solid fa-envelope"></i> gurmandeep453@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
