import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js and Framer Motion. Features include smooth animations, dark theme, interactive components, and a clean, professional design showcasing my projects and skills.",
      image: process.env.PUBLIC_URL + "/images/Portfolio.png",
      technologies: ["React.js", "Framer Motion", "CSS3", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/Sushanth08k/Portfolio",
      demo: "/"
    },
    {
      id: 2,
      title: "JobBoard",
      description: "A modern job search platform built with React.js and Firebase Firestore. Features include job listings with detailed information, custom filtering for job type, title, experience, and location, and a responsive UI with TailwindCSS.",
      image: process.env.PUBLIC_URL + "/images/JobBoard.png",
      technologies: ["React.js", "Firebase", "TailwindCSS", "Real-time Data"],
      category: "fullstack",
      github: "https://github.com/Sushanth08k/JobBoard.git",
      demo: "#"
    },
    {
      id: 3,
      title: "Wellness Sphere",
      description: "An AI-driven mental health platform using React.js, Firebase, and Gemini API. Features include mood tracking, AI chatbot support, community engagement, secure authentication, real-time chat, therapist booking, and SOS emergency support.",
      image: process.env.PUBLIC_URL + "/images/Wellnessphere.png",
      technologies: ["React.js", "Firebase", "Gemini API", "Node.js"],
      category: "fullstack",
      github: "https://github.com/Sushanth08k/WellnessSphere",
      demo: "https://wellness-sphere.web.app"
    },
    {
      id: 4,
      title: "CryptoChasm",
      description: "A Flask-based web application implementing a chaos-based cryptographic algorithm for secure image encryption and decryption. Features a two-phase security architecture with confusion and diffusion techniques using chaotic Henon map.",
      image: process.env.PUBLIC_URL + "/images/Cryptochasm.png",
      technologies: ["Python", "Flask", "Cryptography", "Image Processing"],
      category: "security",
      github: "https://github.com/Sushanth08k/CryptoChasm",
      demo: "https://cryptochasm.onrender.com"
    },
    {
      id: 5,
      title: "CropVision",
      description: "A Streamlit web app for predicting crop yields using polynomial regression and visualizing trends with Matplotlib and Seaborn. Users can filter data by state, crop, and season for tailored insights, with interactive dashboards for historical yield analysis and future predictions.",
      image: process.env.PUBLIC_URL + "/images/Cropvision.png",
      technologies: ["Python", "Streamlit", "Machine Learning", "Data Visualization"],
      category: "ml",
      github: "https://github.com/Sushanth08k/CropVision",
      demo: "https://cropvision.streamlit.app"
    },
    {
      id: 6,
      title: "Leetcode Solutions",
      description: "A comprehensive collection of LeetCode problem solutions implemented in Python and Java. Each solution includes detailed explanations, time and space complexity analysis, and multiple approaches where applicable.",
      image: process.env.PUBLIC_URL + "/images/leetcode.png",
      technologies: ["Python", "Java", "Data Structures", "Algorithms"],
      category: "dsa",
      github: "https://github.com/Sushanth08k/Leetcode",
      demo: "https://leetcode.com/u/ksushanth9030/"
    },
    {
      id: 7,
      title: "OptiPresence",
      description: "A comprehensive workforce analytics dashboard designed to track and optimize employee presence, including attendance, work-from-home trends, and leave patterns. Built using Power BI for data visualization.",
      image: process.env.PUBLIC_URL + "/images/optipresence.png",
      technologies: ["Power BI", "Data Analytics", "Workforce Management"],
      category: "analytics",
      github: "https://github.com/Sushanth08k/OptiPresence.git",
      demo: "#"
    },
    {
      id: 8,
      title: "Content-Based Movie Recommendation",
      description: "A movie recommendation system that suggests movies based on user-selected titles using cosine similarity. Built with Streamlit for an interactive and user-friendly interface.",
      image: process.env.PUBLIC_URL + "/images/movie.png",
      technologies: ["Streamlit", "Cosine Similarity", "Python"],
      category: "ml",
      github: "https://github.com/Sushanth08k/content-based-movie-recommendation.git",
      demo: "#"
    },
    {
      id: 9,
      title: "Fund Mangement System",
      description: "A full-stack fund management system built with React.js and Firebase. Features include user authentication, fund tracking, transaction history, and secure data storage.",
      image: process.env.PUBLIC_URL + "/images/fundmanagement.jpg",
      technologies: ["React.js", "Firebase", "Full Stack", "Fund Management"],
      category: "fullstack",
      github: "https://github.com/Sushanth08k/fund_mangement_system.git"}
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'security', label: 'Security' },
    { id: 'dsa', label: 'DSA' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <section id="projects" className="projects-container">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my technical expertise</p>
      </motion.div>
      
      <motion.div 
        className="project-filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filterCategories.map(category => (
          <motion.button 
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>
      
      <motion.div 
        className="projects-grid"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {hoveredProject === project.id && (
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="project-links">
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="project-link"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </motion.a>
                      <motion.a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      <FaCode className="tech-icon" />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="project-link"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;