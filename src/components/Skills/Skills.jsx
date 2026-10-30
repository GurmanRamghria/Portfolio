import React, { useState } from 'react';
import './Skills.scss';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'core', label: 'Core Frontend' },
    { key: 'mobile', label: 'Mobile & State' },
    { key: 'styling', label: 'Styling & UI' },
    { key: 'tools', label: 'Tools & Workflow' }
  ];

  const skillList = [
    {
      id: 1,
      name: 'React.js',
      category: ['all', 'core'],
      icon: 'fa-brands fa-react',
      colorClass: 'react-color',
      level: 'Expert',
      percentage: 92,
      desc: 'Components, Hooks, Virtual DOM, Lifecycle, SPA architecture.'
    },
    {
      id: 2,
      name: 'React-Native',
      category: ['all', 'mobile'],
      icon: 'fa-solid fa-mobile-screen',
      colorClass: 'react-color',
      level: 'Advanced',
      percentage: 88,
      desc: 'Cross-platform mobile apps for iOS & Android with native feel.'
    },
    {
      id: 3,
      name: 'Redux Tool Kit',
      category: ['all', 'mobile'],
      icon: 'fa-solid fa-layer-group',
      colorClass: 'redux-color',
      level: 'Advanced',
      percentage: 86,
      desc: 'Global state slices, thunks, middleware, scalable data store.'
    },
    {
      id: 4,
      name: 'HTML / HTML5',
      category: ['all', 'core', 'styling'],
      icon: 'fa-brands fa-html5',
      colorClass: 'html-color',
      level: 'Expert',
      percentage: 95,
      desc: 'Semantic tags, SEO-friendly layout, accessibility & validation.'
    },
    {
      id: 5,
      name: 'CSS / CSS3',
      category: ['all', 'styling'],
      icon: 'fa-brands fa-css3-alt',
      colorClass: 'css-color',
      level: 'Expert',
      percentage: 94,
      desc: 'Flexbox, CSS Grid, animations, glassmorphism, media queries.'
    },
    {
      id: 6,
      name: 'SASS / SCSS',
      category: ['all', 'styling'],
      icon: 'fa-brands fa-sass',
      colorClass: 'sass-color',
      level: 'Advanced',
      percentage: 90,
      desc: 'Mixins, variables, nested rules, modular design architecture.'
    },
    {
      id: 7,
      name: 'Bootstrap 5',
      category: ['all', 'styling'],
      icon: 'fa-brands fa-bootstrap',
      colorClass: 'bootstrap-color',
      level: 'Expert',
      percentage: 92,
      desc: 'Grid system, responsive utilities, rapid prototyping, modal/nav.'
    },
    {
      id: 8,
      name: 'Github & Git',
      category: ['all', 'tools'],
      icon: 'fa-brands fa-github',
      colorClass: 'git-color',
      level: 'Advanced',
      percentage: 88,
      desc: 'Branching, merge requests, version tracking, collaboration.'
    },
    {
      id: 9,
      name: 'Package Management',
      category: ['all', 'tools'],
      icon: 'fa-brands fa-npm',
      colorClass: 'npm-color',
      level: 'Advanced',
      percentage: 85,
      desc: 'NPM, Yarn dependencies, package.json scripts, build tools.'
    }
  ];

  const filteredSkills = skillList.filter(skill =>
    skill.category.includes(activeFilter)
  );

  return (
    <section className="section-padding" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-solid fa-code"></i> Tech Stack
          </span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Technical skills and specialized tooling listed in my resume.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-wrapper">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`skill-tab ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map(skill => (
            <div className="skill-card glass-panel" key={skill.id}>
              <div className="skill-top">
                <div className={`skill-icon-wrap ${skill.colorClass}`}>
                  <i className={skill.icon}></i>
                </div>
                <span className="skill-level">{skill.level}</span>
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <p className="skill-detail">{skill.desc}</p>
              <div className="liquid-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="skill-meta">
                <span>Proficiency</span>
                <span className="text-cyan">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
