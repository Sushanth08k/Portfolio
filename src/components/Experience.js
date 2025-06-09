import React from 'react';
import '../styles/Experience.css';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      institution: 'MotionCut',
      role: 'Web Developer Intern',
      duration: 'Feb 2024 - March 2024',
      location: 'Remote',
      description: [
        "Developed responsive web applications using HTML5, CSS3, JavaScript, and React.js, implementing modern UI/UX design principles and ensuring cross-browser compatibility across 5+ major browsers.",
"Built and integrated RESTful APIs using Node.js and Express.js, connecting frontend interfaces with backend databases (MySQL/MongoDB) and improving data retrieval efficiency by 30%.",
"Collaborated with development teams using Git version control and Agile methodologies, successfully delivering 3+ project features on schedule while maintaining 95% code quality standards through peer reviews."
      ],
      technologies: ['Python', 'Machine Learning', 'AI', 'Research'],
      icon: <FaBriefcase />
    },
    {
      type: 'certifications',
      title: 'Professional Certifications',
      items: [
        'MongoDB Associate Developer - MongoDB',
        'Google Cloud Computing Foundations - NPTEL',
        'Problem Solving (Intermediate) - HackerRank',
        'Java (Basic) - HackerRank',
        'Python (Basic) - HackerRank'
      ],
      icon: <FaCertificate />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="experience-container">
      <motion.div 
        className="experience-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience & Certifications</h2>
        <p className="section-subtitle">Professional journey and achievements</p>
      </motion.div>
      
      <motion.div 
        className="experience-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={`timeline-item ${exp.type}`}
            variants={itemVariants}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
                <div className="timeline-title">
                  <h3 className="institution-name">{exp.institution || exp.title}</h3>
                  {exp.role && <h4 className="role">{exp.role}</h4>}
                  {exp.duration && (
                    <p className="duration">
                      {exp.duration}
                      {exp.location && ` | ${exp.location}`}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="timeline-body">
                {exp.type === 'certifications' ? (
                  <ul className="certification-list">
                    {exp.items.map((cert, i) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <ul className="description-list">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {exp.technologies && (
                      <div className="technologies">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
