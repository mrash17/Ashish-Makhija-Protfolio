import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={profileImg} alt="Ashish Makhija" className={styles.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">About Me</h2>
          <p>
            I am a Full Stack Developer with a passion for building robust digital solutions that solve real-world problems. 
            With a strong foundation in both frontend and backend technologies, I specialize in creating scalable web 
            applications and industrial automation systems.
          </p>
          <p>
            My journey into the world of programming started with a curiosity for how things work under the hood. 
            Today, I leverage modern frameworks like React, Node.js, and C# to deliver high-quality code and 
            exceptional user experiences.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3 className="gradient-text">2+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3 className="gradient-text">25+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
