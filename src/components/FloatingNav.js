import React, { useState, useEffect } from 'react';
import { FaHome, FaCode, FaCog, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import '../styles/FloatingNav.css';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="floating-nav">
      <div 
        className={`nav-icon ${activeSection === 'home' ? 'active' : ''}`}
        onClick={() => scrollToSection('home')}
      >
        <FaHome />
        <span className="tooltip">Home</span>
      </div>
      <div 
        className={`nav-icon ${activeSection === 'skills' ? 'active' : ''}`}
        onClick={() => scrollToSection('skills')}
      >
        <FaCode />
        <span className="tooltip">Skills</span>
      </div>
      <div 
        className={`nav-icon ${activeSection === 'projects' ? 'active' : ''}`}
        onClick={() => scrollToSection('projects')}
      >
        <FaCog />
        <span className="tooltip">Projects</span>
      </div>
      <div 
        className={`nav-icon ${activeSection === 'experience' ? 'active' : ''}`}
        onClick={() => scrollToSection('experience')}
      >
        <FaBriefcase />
        <span className="tooltip">Experience</span>
      </div>
      <div 
        className={`nav-icon ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={() => scrollToSection('contact')}
      >
        <FaEnvelope />
        <span className="tooltip">Contact</span>
      </div>
    </div>
  );
};

export default FloatingNav;