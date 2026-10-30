import React, { useState } from 'react';
import LiquidBackground from './components/LiquidBackground/LiquidBackground';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Metrics from './components/Metrics/Metrics';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Strengths from './components/Strengths/Strengths';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';

function App() {
  const [toastState, setToastState] = useState({
    message: '',
    visible: false
  });

  const showNotification = (message) => {
    setToastState({ message, visible: true });
    setTimeout(() => {
      setToastState(prev => ({ ...prev, visible: false }));
    }, 3200);
  };

  return (
    <div className="portfolio-app">
      {/* Liquid Glass Background & Mouse Aura */}
      <LiquidBackground />

      {/* Header Navigation with all sections */}
      <Header />

      <main>
        {/* 01. Hero Section */}
        <Hero />

        {/* Dynamic Metrics Strip */}
        <Metrics />

        {/* 02. About Section */}
        <About />

        {/* 03. Experience Timeline & Summary */}
        <Experience />

        {/* 04. Featured Projects / Live Websites */}
        <Projects />

        {/* 05. Technical & Additional Skills */}
        <Skills />

        {/* 06. Education Background */}
        <Education />

        {/* 07. Key Strengths */}
        <Strengths />

        {/* 08. Contact Section */}
        <Contact onNotify={showNotification} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Alert */}
      <Toast message={toastState.message} isVisible={toastState.visible} />
    </div>
  );
}

export default App;
