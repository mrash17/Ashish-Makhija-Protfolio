import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layers, 
  Server, 
  Settings, 
  Cpu, 
  Globe, 
  Cloud, 
  Zap, 
  Boxes 
} from 'lucide-react';
import styles from './Skills.module.css';

const skillGroups = [
  { 
    name: 'Architecture', 
    icon: <Boxes />, 
    techs: ['Microservices', 'Clean Architecture', 'System Design', 'Domain Driven Design'] 
  },
  { 
    name: 'Frontend', 
    icon: <Globe />, 
    techs: ['React', 'Next.js', 'Typescript', 'Tailwind', 'Redux / Signal'] 
  },
  { 
    name: 'Backend', 
    icon: <Server />, 
    techs: ['Node.js', 'Express', 'C# / .NET Core', 'Python', 'Go'] 
  },
  { 
    name: 'Database', 
    icon: <Database />, 
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'Prisma / EF Core'] 
  },
  { 
    name: 'Automation', 
    icon: <Cpu />, 
    techs: ['Industrial IoT', 'PLC Integration', 'SCADA / HMI', 'Real-time Systems'] 
  },
  { 
    name: 'Cloud & DevOps', 
    icon: <Cloud />, 
    techs: ['Docker', 'Kubernetes', 'AWS / Azure', 'CI/CD Pipelines', 'Nginx'] 
  }
];

const Skills = () => {
  return (
    <section id="experience" className="container">
      <div className={styles.skills}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800 }}>Technical Tech-Stack</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0' }}>
            A comprehensive suite of technologies mastered over 7+ years to build 
            resilient, high-performance digital ecosystems.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.iconContainer}>
                {group.icon}
              </div>
              <h3 className={styles.skillName}>{group.name}</h3>
              <div className={styles.tagContainer}>
                {group.techs.map((tech, i) => (
                  <span key={i} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
