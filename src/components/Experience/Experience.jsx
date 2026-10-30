import React from 'react';
import './Experience.scss';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'React JS Developer',
      company: 'Xdecoders Programming Services (XPS)',
      duration: '15 Months (June 2025 – Sept 2026)',
      badge: 'Most Recent',
      activeRole: true,
      description:
        'Spearheaded the development of dynamic, modular web applications using React.js and Redux Toolkit. Built clean UI components with pixel-perfect implementation, handled state architecture, and collaborated with cross-functional teams for smooth backend API integration.',
      tags: ['React.js', 'Redux Toolkit', 'REST APIs', 'JavaScript (ES6+)', 'Performance Tuning']
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Nextillo',
      duration: '10 Months',
      badge: 'Frontend Specialist',
      activeRole: false,
      description:
        'Developed responsive web pages and reusable interface modules using HTML, CSS, SASS, and Bootstrap 5. Ensured high rendering performance, cross-browser compatibility, and seamless translation of UI mockups into interactive designs.',
      tags: ['HTML5', 'CSS3', 'SASS', 'Bootstrap 5', 'Responsive UI']
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'Virtual IT Technology',
      duration: '6 Months',
      badge: 'Junior Role',
      activeRole: false,
      description:
        'Assisted in frontend application development, testing UI components for responsiveness on multiple mobile and tablet screen viewports, identifying styling glitches, and standardizing CSS layouts.',
      tags: ['UI Development', 'Cross-Browser Testing', 'HTML / CSS', 'Git']
    },
    {
      id: 4,
      role: 'Trainee Developer',
      company: 'GNI Soft Solution',
      duration: '6 Months',
      badge: 'Career Foundation',
      activeRole: false,
      description:
        'Rigorous training and real-world project practice in core web development fundamentals, modern semantics, CSS box model, responsive layouts, package management, and team collaboration workflows.',
      tags: ['Web Standards', 'Git & GitHub', 'Package Management', 'HTML / CSS Foundations']
    }
  ];

  const summaryPoints = [
    {
      num: '01',
      title: 'Pixel-Perfect UI Architecture',
      desc: 'Built responsive UIs using HTML, CSS, Bootstrap, and SASS with strict pixel-perfect design implementation and seamless cross-device compatibility.'
    },
    {
      num: '02',
      title: 'Dynamic Web Applications',
      desc: 'Developed dynamic web apps with React.js and Redux Toolkit for efficient global state management, fast rendering, and component reusability.'
    },
    {
      num: '03',
      title: 'Cross-Platform Mobile Apps',
      desc: 'Created high-performance cross-platform mobile applications using React Native with fluid navigation and consistent UI/UX on iOS & Android.'
    },
    {
      num: '04',
      title: 'Seamless Team & API Collaboration',
      desc: 'Collaborated with UI/UX designers and backend engineering teams for smooth REST API integration, data serialization, and performance optimization.'
    },
    {
      num: '05',
      title: 'Best Practices & Continuous Learning',
      desc: 'Followed modern coding standards, active participation in code reviews, version control discipline, and staying updated with evolving frontend trends.'
    }
  ];

  return (
    <section className="section-padding section-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-solid fa-briefcase"></i> Work History
          </span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            3+ Years (37 Months) of hands-on experience in frontend & mobile development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map(exp => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-marker">
                {exp.activeRole && <span className="marker-pulse"></span>}
                <i className="fa-solid fa-circle-dot"></i>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-badge-row">
                  <span className={`exp-badge ${exp.activeRole ? 'active-role' : ''}`}>
                    <i className={exp.activeRole ? 'fa-solid fa-circle-check' : 'fa-solid fa-laptop-code'}></i>{' '}
                    {exp.badge}
                  </span>
                  <span className="exp-duration">
                    <i className="fa-regular fa-calendar"></i> {exp.duration}
                  </span>
                </div>
                <h3 className="role-title">{exp.role}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <p className="exp-description">{exp.description}</p>
                <div className="tech-tags">
                  {exp.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Summary 5-Point Box (From Resume) */}
        <div className="summary-box glass-panel mt-5">
          <div className="summary-header">
            <div className="summary-icon">
              <i className="fa-solid fa-clipboard-check"></i>
            </div>
            <div>
              <h3 className="summary-title">Professional Summary & Key Responsibilities</h3>
              <p className="summary-sub">
                Highlights of 3+ Years in Frontend & Mobile Application Engineering
              </p>
            </div>
          </div>

          <div className="summary-points-list">
            {summaryPoints.map(point => (
              <div className="point-item" key={point.num}>
                <div className="point-number">{point.num}</div>
                <div className="point-content">
                  <strong>{point.title}:</strong> {point.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
