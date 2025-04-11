import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="home-container">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="greeting">Hello, I'm</h1>
        <h1 className="name">Sushanth Reddy</h1>
        <motion.div 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Full Stack Developer & AI Enthusiast</h2>
        </motion.div>
        
        <motion.div 
          className="connect-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="connect-text">Let's connect and build something amazing together!</p>
          
          <div className="social-links">
            <a href="https://github.com/Sushanth08k" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sushanth-reddy-k-422851299/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:ksushanth@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
          
          <motion.button 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
          
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => scrollToSection('about')}
          >
            <FaArrowDown />
            <span>Scroll Down</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
