import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className="container">
      <div className={styles.footer}>
        <div className={styles.contactCard}>
          <h1 className="gradient-text">Get In Touch</h1>
          <h2 className={styles.subtitle}>Let's build something <br /> amazing together</h2>

          {/* <a href="mailto:ashishmakhija2000@gmail.com" className={styles.emailCta}>
            ashishmakhija2000@gmail.com <ArrowUpRight className={styles.arrowIcon} size={32} />
          </a> */}
          <div className={styles.socialLinks}>
            <a href="https://github.com/mrash17" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Github size={24} />
            </a>
            <a href="https://in.linkedin.com/in/ashish-makhija" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={24} />
            </a>
            <a href="tel:9054146935" className={styles.socialIcon}>
              <Phone size={24} />
            </a>
            <a href="mailto:ashishmakhija2000@gmail.com" className={styles.socialIcon}>
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Ashish Makhija. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
