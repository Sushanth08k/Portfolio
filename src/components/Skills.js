import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills = {
    languages: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" }
    ],
    coursework: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "DBMS" },
      { name: "OOP" },
      { name: "Operating Systems" },
      { name: "Computer Networks" }
    ],
    databases: [
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "MongoDB" }
    ],
    frameworks: [
      { name: "React" },
      { name: "Streamlit" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" }
    ],
    tools: [
      { name: "VS Code" },
      { name: "Git" },
      { name: "GitHub" }
    ]
    
  };

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks & Libraries' },
    { id: 'databases', name: 'Databases' },
    { id: 'tools', name: 'Tools' },
    { id: 'coursework', name: 'Coursework' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? Object.values(skills).flat() 
    : skills[activeCategory] || [];

  return (
    <section id="skills" className="skills-container">
      <motion.div 
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies & Knowledge</p>
      </motion.div>

      <motion.div 
        className="skills-categories"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map(category => (
          <motion.button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="skills-grid"
        layout
      >
        {filteredSkills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;