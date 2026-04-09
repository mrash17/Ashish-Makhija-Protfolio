import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Layout, ShoppingBag, BookOpen, Truck, Headphones } from 'lucide-react';
import styles from './Projects.module.css';

import threadflowImg from '../assets/threadflow.png';
import clothImg from '../assets/cloth.png';
import airportImg from '../assets/airport.png';
import shophubImg from '../assets/shophub_preview_1775750433361.png';
import studybitesImg from '../assets/studybites_preview_1775750474973.png';

const projects = [
  {
    title: 'Thread Flow',
    description: 'E-commerce & inventory solution for textile industries with multi-vendor support.',
    image: threadflowImg,
    tags: ['React', 'Node.js', 'MySQL'],
    icon: <ShoppingBag size={20} />
  },
  {
    title: 'Cloth Management',
    description: 'Specialized inventory and sales tracking system for fashion retail outlets.',
    image: clothImg,
    tags: ['React', 'Express', 'MongoDB'],
    icon: <Layout size={20} />
  },
  {
    title: 'NZ Airport Automation',
    description: 'Industrial automation suite for New Zealand airport infrastructures.',
    image: airportImg,
    tags: ['C#', '.NET', 'PLC'],
    icon: <Cpu size={20} />
  },
  {
    title: 'Sai Tours & Charters',
    description: 'Comprehensive travel management and automated booking system.',
    image: shophubImg, // Using generated quality image
    tags: ['Next.js', 'PostgreSQL', 'API'],
    icon: <Truck size={20} />
  },
  {
    title: 'Spectra-AV',
    description: 'Sophisticated Audio/Visual automation and control interfaces.',
    image: studybitesImg, // Using generated quality image
    tags: ['React', 'WebSockets', 'IoT'],
    icon: <Headphones size={20} />
  },
  {
    title: 'LC Generator Support',
    description: 'Industrial power generation monitoring and emergency support system.',
    image: airportImg, // Reusing high-quality asset with different context
    tags: ['C#', 'SQL Server', 'Industrial'],
    icon: <Cpu size={20} />
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
          style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div className={styles.projectIcon}>{project.icon}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href="https://github.com/mrash17" className={styles.link} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                  <a href="#" className={styles.link}>
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
