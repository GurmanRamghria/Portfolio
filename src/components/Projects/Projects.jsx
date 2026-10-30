import React from 'react';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SimpleRenovate',
      url: 'https://simplerenovate.io/',
      displayUrl: 'simplerenovate.io',
      category: 'SaaS & PropTech Platform',
      badge: 'Live Production',
      description:
        'A next-generation home renovation and contractor management platform. Engineered dynamic frontend interfaces for 2D/3D smartphone space measurements, automated virtual quote bidding, and seamless contractor-to-homeowner workflows.',
      tags: ['React.js', 'Redux Toolkit', 'SASS', 'REST APIs', 'Pixel-Perfect UI'],
      icon: 'fa-house-chimney-window',
      color: '#38bdf8'
    },
    {
      id: 2,
      title: 'Nextillo',
      url: 'https://www.nextillo.com/',
      displayUrl: 'nextillo.com',
      category: 'EdTech & Medical Coaching',
      badge: 'Client / Company Project',
      description:
        'Advanced e-learning ecosystem for medical students preparing for competitive exams (NEET PG, FMGE, USMLE). Developed responsive course modules, high-load test series interfaces, video lecture catalogs, and scholarship test dashboards.',
      tags: ['React.js', 'Bootstrap 5', 'SASS', 'Responsive Design', 'Cross-Browser'],
      icon: 'fa-graduation-cap',
      color: '#29a1dd'
    },
    {
      id: 3,
      title: 'Kior Healthcare',
      url: 'https://www.kiorhealthcare.com/',
      displayUrl: 'kiorhealthcare.com',
      category: 'HealthTech & Diagnostic Solutions',
      badge: 'Live Platform',
      description:
        'State-of-the-art diagnostic and pathology portal serving the Tricity region. Built an intuitive, patient-first web application featuring online test and scan booking, health packages catalog, automated slot scheduling, and report access.',
      tags: ['React.js', 'HTML5 / CSS3', 'JavaScript', 'API Integration', 'UI/UX'],
      icon: 'fa-heart-pulse',
      color: '#34d399'
    }
  ];

  return (
    <section className="section-padding section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-solid fa-laptop-code"></i> Live Work & Projects
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Websites</span>
          </h2>
          <p className="section-subtitle">
            Live web platforms and client solutions engineered with clean frontend architecture.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card glass-panel" key={project.id}>
              {/* Browser Window Mockup Bar */}
              <div className="browser-top-bar">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-address">
                  <i className="fa-solid fa-lock"></i>
                  <span>{project.displayUrl}</span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browser-external-link"
                  title="Visit Website"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

              {/* Project Card Body */}
              <div className="project-card-body">
                <div className="project-meta-top">
                  <div
                    className="project-icon-box"
                    style={{ color: project.color }}
                  >
                    <i className={`fa-solid ${project.icon}`}></i>
                  </div>
                  <span className="project-category-badge glass-pill">
                    {project.category}
                  </span>
                </div>

                <h3 className="project-title">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span className="project-tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA Button */}
                <div className="project-actions">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-liquid w-100"
                  >
                    <span>Visit Live Website</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
