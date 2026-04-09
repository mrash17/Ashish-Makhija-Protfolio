import React from 'react';
import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className="container">
      <div className={styles.footer}>
        <div className={styles.content}>
          <h2 className="gradient-text">Let's build something <br /> amazing together</h2>
          <a href="mailto:ashishmakhija2000@gmail.com" className={styles.email}>
            ashishmakhija2000@gmail.com
          </a>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', fontWeight: '600' }}>
            +91 9054146935
          </p>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/mrash17" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Github size={24} />
            </a>
            <a href="https://in.linkedin.com/in/ashish-makhija" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:ashishmakhija2000@gmail.com" className={styles.socialIcon}>
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Ashish Makhija. All rights reserved.</p>
          <p>Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
