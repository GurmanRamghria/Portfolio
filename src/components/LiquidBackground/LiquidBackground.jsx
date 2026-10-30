import React, { useEffect, useState } from 'react';
import './LiquidBackground.scss';

const LiquidBackground = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100, visible: false });

  useEffect(() => {
    // Only track cursor on fine-pointer devices (desktop)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY, visible: true });
    };

    const handleMouseLeave = () => {
      setCursorPos(prev => ({ ...prev, visible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="liquid-bg-container" aria-hidden="true">
        <div className="liquid-orb orb-1"></div>
        <div className="liquid-orb orb-2"></div>
        <div className="liquid-orb orb-3"></div>
        <div className="liquid-orb orb-4"></div>
        <div className="mesh-grid-overlay"></div>
      </div>

      <div
        className="cursor-glow"
        style={{
          opacity: cursorPos.visible ? 1 : 0,
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default LiquidBackground;
