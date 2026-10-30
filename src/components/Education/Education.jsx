import React from 'react';
import './Education.scss';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'Senior Secondary Education (12th)',
      board: 'Punjab School Education Board (PSEB)',
      year: 'Completed in 2019',
      desc: 'Completed Senior Secondary schooling under Punjab Board with focus on foundational academics, discipline, problem solving, and analytical thinking that paved the way into software engineering.',
      icon: 'fa-building-columns',
      badge: '2019 Passout'
    },
    {
      id: 2,
      degree: 'Higher Secondary Education (10th)',
      board: 'Punjab School Education Board (PSEB)',
      year: 'Completed in 2017',
      desc: 'Completed High School matriculation under the Punjab Board, developing foundational mathematics, science, and computer literacy skills.',
      icon: 'fa-school',
      badge: '2017 Passout'
    }
  ];

  return (
    <section className="section-padding section-alt" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag glass-pill">
            <i className="fa-solid fa-graduation-cap"></i> Academic Credentials
          </span>
          <h2 className="section-title">
            Education <span className="text-gradient">Background</span>
          </h2>
          <p className="section-subtitle">
            Academic milestones completed through the Punjab School Education Board.
          </p>
        </div>

        <div className="education-grid">
          {educations.map(edu => (
            <div className="edu-card glass-panel" key={edu.id}>
              <div className="edu-glow"></div>
              <div className="edu-top-row">
                <div className="edu-badge glass-pill">
                  <i className="fa-solid fa-calendar-check text-cyan"></i> {edu.year}
                </div>
                <div className="edu-icon-badge">
                  <i className={`fa-solid ${edu.icon}`}></i>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-board">{edu.board}</h4>

              <p className="edu-description">{edu.desc}</p>

              <div className="edu-footer">
                <span className="edu-tag">
                  <i className="fa-solid fa-award text-cyan"></i> Punjab Board
                </span>
                <span className="edu-tag">
                  <i className="fa-solid fa-circle-check text-cyan"></i> {edu.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
