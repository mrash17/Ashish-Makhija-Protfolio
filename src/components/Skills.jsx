import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Cpu } from 'lucide-react';
import styles from './Skills.module.css';

const skills = [
  { name: 'Frontend', icon: <Layout />, items: ['React', 'Next.js', 'TypeScript', 'CSS3'] },
  { name: 'Backend', icon: <Server />, items: ['Node.js', 'Express', 'C#', '.NET Core'] },
  { name: 'Database', icon: <Database />, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { name: 'Automation', icon: <Cpu />, items: ['Industrial IoT', 'PLC Integration', 'Web API'] },
  { name: 'Mobile', icon: <Smartphone />, items: ['React Native', 'Responsive Web'] },
  { name: 'Tools', icon: <Code2 />, items: ['Git', 'Docker', 'AWS', 'Vercel'] },
];

const Skills = () => {
  return (
    <section id="experience" className="container">
      <div className={styles.skills}>
        <motion.h2 
          className="gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Tech-Stack
        </motion.h2>
        
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconContainer}>
                {skill.icon}
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {skill.items.map((item, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {item}{i < skill.items.length - 1 ? ' •' : ''}
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
