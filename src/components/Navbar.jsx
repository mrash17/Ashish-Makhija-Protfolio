import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={`container ${styles.navContent}`}>
        <a href="#home" className={`${styles.logo} gradient-text`}>Ashish.dev</a>

        {/* Desktop Nav */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={styles.link}
            >
              {link.name}
            </a>
          ))}
          <div className={styles.socials}>
            <a href="https://github.com/mrash17" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Github size={20} />
            </a>
            <a href="https://in.linkedin.com/in/ashish-makhija" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:ashishmakhija2000@gmail.com" className={styles.socialIcon}>
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
