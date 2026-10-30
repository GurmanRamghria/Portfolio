import React, { useEffect, useState, useRef } from 'react';
import './Metrics.scss';

const Metrics = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [monthsCount, setMonthsCount] = useState(0);
  const [rolesCount, setRolesCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Months (up to 37)
          let currentMonths = 0;
          const monthsTimer = setInterval(() => {
            currentMonths += 1;
            setMonthsCount(currentMonths);
            if (currentMonths >= 37) clearInterval(monthsTimer);
          }, 35);

          // Animate Roles (up to 4)
          let currentRoles = 0;
          const rolesTimer = setInterval(() => {
            currentRoles += 1;
            setRolesCount(currentRoles);
            if (currentRoles >= 4) clearInterval(rolesTimer);
          }, 250);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="container" ref={containerRef}>
      <div className="metrics-grid glass-panel">
        <div className="metric-card">
          <div className="metric-number">
            {hasAnimated ? monthsCount : 37}<span className="text-cyan">+</span>
          </div>
          <div className="metric-label">Months Experience</div>
          <div className="metric-sub">Over 3+ Years in Front-end</div>
        </div>

        <div className="metric-separator"></div>

        <div className="metric-card">
          <div className="metric-number">
            {hasAnimated ? rolesCount : 4}<span className="text-cyan"></span>
          </div>
          <div className="metric-label">Company Roles</div>
          <div className="metric-sub">Professional & Trainee Track</div>
        </div>

        <div className="metric-separator"></div>

        <div className="metric-card">
          <div className="metric-number">
            100<span className="text-cyan">%</span>
          </div>
          <div className="metric-label">Pixel-Perfect UI</div>
          <div className="metric-sub">Responsive Across All Devices</div>
        </div>

        <div className="metric-separator"></div>

        <div className="metric-card">
          <div className="metric-number">
            <span className="text-cyan">Web &</span> App
          </div>
          <div className="metric-label">Cross-Platform</div>
          <div className="metric-sub">React.js + React Native</div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
