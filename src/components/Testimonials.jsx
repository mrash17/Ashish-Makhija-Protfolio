import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const reviews = [
  {
    author: 'Mike Hardson',
    role: 'CEO, TechVentures',
    quote: 'Ashish boosted our online presence with his web development expertise, giving us a competitive edge. Highly recommend!',
    rating: 5
  },
  {
    author: 'Sarah Williams',
    role: 'Marketing Lead',
    quote: 'Expertise that significantly impacted our business. His attention to detail and commitment made him an invaluable partner.',
    rating: 5
  },
  {
    author: 'Aleesha Smith',
    role: 'Independent Founder',
    quote: 'Fantastic experience. He delivers top-quality, functional, and beautifully designed web solutions. On point!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="container">
      <div className={styles.testimonials}>
        <motion.h2 
          className="gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-primary)" stroke="none" />
                ))}
              </div>
              <p className={styles.quote}>"{review.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}></div>
                <div className={styles.info}>
                  <h4>{review.author}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
