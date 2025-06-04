// About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode } from 'react-icons/fa';
import '../styles/About.css'; // Adjust path based on your project structure

const About = () => {
  return (
    <section id="about" className="about-container">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + "/images/Profile.jpg"} alt="Sushanth Reddy" />
            <div className="image-overlay"></div>
          </div>
          <div className="image-decoration"></div>
        </motion.div>
        
        <motion.div 
          className="about-text-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="about-text">
            <h3 className="about-title">Full Stack Developer & AI Enthusiast</h3>
            <p>
              I am a passionate Information Technology student at Chaitanya Bharathi Institute of Technology, Hyderabad, 
              with a strong academic record (CGPA: 8.98). My journey in tech is driven by a deep interest in both 
              Full Stack Development and Artificial Intelligence.
            </p>
            <p>
              With expertise in various programming languages (Java, Python, JavaScript) and frameworks (React, Streamlit), 
              I've developed several impactful projects including CropVision, Wellness Sphere, and CryptoChasm. My recent 
              experience as a Machine Learning Intern at TechSaksham has further strengthened my practical skills in AI technologies.
            </p>
            <p>
              I'm constantly expanding my knowledge through certifications and hands-on projects, while maintaining a 
              strong foundation in core computer science concepts like Data Structures, Algorithms, and Database Management.
            </p>
          </div>
          
          <div className="about-actions">
            <motion.a 
              href="#contact" 
              className="action-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1VvGH9J-zWVyj9u1d3F9_PgB50UhedK0E/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </motion.a>
          </div>
          
          <div className="about-social">
            <motion.a 
              href="https://github.com/Sushanth08k" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sushanth-reddy-k-422851299/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:ksushanth9030@gmail.com"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a 
              href="https://leetcode.com/u/ksushanth9030/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              <span className="icon-label">Source</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;