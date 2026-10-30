import React from 'react';
import './Strengths.scss';

const Strengths = () => {
  const strengths = [
    {
      id: 1,
      title: 'Flexibility',
      icon: 'fa-arrows-split-up-and-left',
      featured: false,
      desc: 'Comfortable shifting across diverse project requirements, changing design specs, and hybrid web & mobile codebases without friction.',
      perks: [
        'Rapid context-switching',
        'Agile sprint readiness',
        'Versatile across web & mobile'
      ]
    },
    {
      id: 2,
      title: 'Good Communication Skills',
      icon: 'fa-comments',
      featured: true,
      desc: 'Transparent, articulate communication with product managers, UX/UI designers, and backend developers to ensure zero requirement gaps.',
      perks: [
        'Clear technical updates',
        'Proactive issue flagging',
        'Cross-functional synergy'
      ]
    },
    {
      id: 3,
      title: 'Adaptability',
      icon: 'fa-brain',
      featured: false,
      desc: 'Continuous drive to master emerging frontend libraries, design frameworks, and mobile updates to deliver modern solutions.',
      perks: [
        'Fast learner of tools',
        'Problem-solving mindset',
        'Code review enthusiasm'
      ]
    }
  ];

  return (
    <section className="section-padding" id="strengths">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-solid fa-star"></i> Core Attributes
          </span>
          <h2 className="section-title">
            Key <span className="text-gradient">Strengths</span>
          </h2>
          <p className="section-subtitle">
            Personal and professional values that power my engineering delivery.
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map(item => (
            <div
              className={`strength-card glass-panel ${item.featured ? 'featured-strength' : ''}`}
              key={item.id}
            >
              <div className={`strength-icon-box ${item.featured ? 'glow-box' : ''}`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-desc">{item.desc}</p>
              <ul className="strength-perks">
                {item.perks.map((perk, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-check text-cyan"></i> {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
