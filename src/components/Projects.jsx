import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

import threadflowImg from '../assets/threadflow.png';
import clothImg from '../assets/cloth.png';
import airportImg from '../assets/airport.png';

const projects = [
  {
    title: 'ThreadFlow',
    description: 'A sophisticated industrial automation and workflow management platform for high-performance data processing.',
    image: threadflowImg,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Industrial IoT'],
    github: 'https://github.com/mrash17',
    demo: '#'
  },
  {
    title: 'Cloth Management System',
    description: 'Comprehensive e-commerce and inventory management solution with multi-vendor support and professional admin dashboard.',
    image: clothImg,
    tags: ['React', 'Express', 'MySQL', 'Redux'],
    github: 'https://github.com/mrash17',
    demo: '#'
  },
  {
    title: 'NZ Airport Web Apps',
    description: 'Industrial automation solutions for New Zealand airports, including Sai Tours and Charters, Spectra AV, and LC generator.',
    image: airportImg,
    tags: ['C#', '.NET Core', 'React', 'Automation'],
    github: 'https://github.com/mrash17',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className={styles.projects}>
        <motion.h2 
          className="gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className={styles.link}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
