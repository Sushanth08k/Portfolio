import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaCode, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Chaitanya Bharathi Institute of Technology',
      degree: 'Bachelor of Engineering in Information Technology',
      duration: '2023 - 2027',
      location: 'Hyderabad, India',
      grade: 'CGPA: 8.98/10',
      achievements: [
        {
          icon: <FaLaptopCode />,
          text: 'Developed full-stack applications using MERN Stack architecture'
        },
        {
          icon: <FaCode />,
          text: 'Mastered advanced data structures and algorithms for efficient problem-solving'
        },
        {
          icon: <FaChartLine />,
          text: 'Implemented machine learning models for predictive analytics'
        }
      ],
      skills: ['React', 'Node.js', 'Python', 'Java', 'DSA', 'MongoDB', 'Express.js'],
      activities: [
        'Led technical initiatives as Team Lead for College Tech Fest',
        'Secured first place in institutional coding competition'
      ]
    },
    {
      institution: 'Sri Chaitanya Junior Kalashala',
      degree: 'Higher Secondary Education (MPC)',
      duration: '2021 - 2023',
      location: 'Hyderabad, India',
      grade: 'Percentage: 92%',
      achievements: [
        {
          icon: <FaTrophy />,
          text: 'Ranked Among top 3 percent in JEE Mains'
        }
      ],
      skills: ['Mathematics', 'Physics', 'Chemistry', 'Problem Solving'],
      activities: []
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
    <section id="education" className="education-container">
      <motion.div 
        className="education-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic Excellence & Professional Development</p>
      </motion.div>
      
      <motion.div 
        className="education-boxes"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            className="education-box"
            variants={itemVariants}
          >
            <div className="box-header">
              <div className="box-icon">
                <FaGraduationCap />
              </div>
              <div className="box-title">
                <h3 className="institution-name">{edu.institution}</h3>
                <h4 className="degree">{edu.degree}</h4>
                <p className="duration">{edu.duration} | {edu.location}</p>
                <p className="grade">{edu.grade}</p>
              </div>
            </div>
            
            <div className="box-body">
              <div className="achievements-section">
                <h5>Key Achievements</h5>
                <ul className="achievements-list">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>
                      <span className="achievement-icon">{achievement.icon}</span>
                      {achievement.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skills-section">
                <h5>Technical Competencies</h5>
                <div className="skills-tags">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {edu.activities.length > 0 && (
                <div className="activities-section">
                  <h5>Leadership & Extracurricular</h5>
                  <ul className="activities-list">
                    {edu.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
