import React, { useState } from 'react';
import '../styles/Certifications.css';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    name: "MongoDB Associate Developer",
    issuer: "MongoDB",
    date: "2025",
    image: process.env.PUBLIC_URL + "/assets/images/mongodb-cert.png",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/f45c4586-79dc-45bf-ab2c-26ab83078ad5-sushanth-reddy-kasireddy-d35b7b6b-5d98-4f3b-811b-1e990f501068-certificate.pdf",
    skills: ["MongoDB", "Database Design", "NoSQL", "Data Modeling"]
  },
  {
    id: 2,
    name: "Google Cloud Computing Foundations",
    issuer: "NPTEL",
    date: "2024",
    image: process.env.PUBLIC_URL + "/assets/images/gcp-cert.png",
    url: "https://drive.google.com/file/d/1qWsaOWuTSzqKfzf7ZYmcM0cFflapK8YQ/view?usp=sharing",
    skills: ["Google Cloud", "Cloud Computing", "Infrastructure", "DevOps"]
  },
  {
    id: 3,
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    image: process.env.PUBLIC_URL + "/assets/images/hackerrank-ps-cert.png",
    url: "https://www.hackerrank.com/certificates/iframe/918da0c73734",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Coding"]
  },
  {
    id: 4,
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: process.env.PUBLIC_URL + "/assets/images/hackerrank-java-cert.png",
    url: "https://www.hackerrank.com/certificates/iframe/081583db0421",
    skills: ["Java", "OOP", "Programming", "Software Development"]
  },
  {
    id: 5,
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: process.env.PUBLIC_URL + "/assets/images/hackerrank-python-cert.png",
    url: "https://www.hackerrank.com/certificates/iframe/b1e1b38495ef",
    skills: ["Python", "Programming", "Automation", "Data Analysis"]
  }
];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.issuer.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="certifications" className="certifications-container">
      <motion.div 
        className="certifications-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional certifications and achievements</p>
      </motion.div>

      <div className="certifications-filter">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'mongodb' ? 'active' : ''}`}
          onClick={() => setActiveFilter('mongodb')}
        >
          MongoDB
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'nptel' ? 'active' : ''}`}
          onClick={() => setActiveFilter('nptel')}
        >
          NPTEL
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'hackerrank' ? 'active' : ''}`}
          onClick={() => setActiveFilter('hackerrank')}
        >
          HackerRank
        </button>
      </div>

      <div className="certifications-grid">
        {filteredCertifications.map((cert, index) => (
          <motion.div 
            key={cert.id}
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="certification-icon">
              <FaCertificate />
            </div>
            <h3 className="certification-name">{cert.name}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
            <p className="certification-date">{cert.date}</p>
            <div className="certification-skills">
              {cert.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-certificate-btn"
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
