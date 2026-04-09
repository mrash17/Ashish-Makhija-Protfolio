import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const reviews = [
  { name: 'Sarah J.', role: 'E-commerce Owner', content: 'Ashish transformed our legacy systems into a modern multi-vendor powerhouse. His attention to detail is unmatched.', rating: 5 },
  { name: 'Robert M.', role: 'Operations Manager', content: 'The airport automation tools provided by Ashish have significantly reduced our manual workload. A true professional.', rating: 5 },
  { name: 'Elena G.', role: 'Startup Founder', content: 'Fast, reliable, and exceptional coding skills. He delivered our MVP ahead of schedule with perfect UI/UX.', rating: 5 },
  { name: 'Michael K.', role: 'Supply Chain Director', content: 'The inventory management solution (ThreadFlow) has been a game changer for our textile operations.', rating: 5 },
  { name: 'David L.', role: 'Logistics Head', content: 'Exceptional work on the LC generator monitoring system. The real-time alerts are extremely reliable.', rating: 5 },
  { name: 'Jessica W.', role: 'Tech Lead', content: 'Ashish is a highly competent developer who understands complex industrial requirements effortlessly.', rating: 5 },
  { name: 'Arjun P.', role: 'Business Consultant', content: 'Spectra-AV automation interface is sleek and intuitive. Our clients love the simplified control apps.', rating: 5 },
  { name: 'Lisa R.', role: 'Retail Manager', content: 'The cloth management system has made our daily sales tracking completely frictionless. Highly recommended!', rating: 5 },
  { name: 'Tom H.', role: 'System Architect', content: 'Great collaborator and technically strong. His work on Sai Tours booking system is top-tier.', rating: 5 },
  { name: 'Anita S.', role: 'Fiverr Client', content: 'One of the best developers I have worked with. High-quality code and very clear communication.', rating: 5 },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 432; // card width (400) + gap (32)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="container">
      <div className={styles.testimonials}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Client Success Stories</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Trusted by clients worldwide to deliver premium digital solutions and industrial automation.
          </p>
        </motion.div>

        <div className={styles.scrollContainer}>
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={() => scroll('left')}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.scrollRow} ref={scrollRef}>
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={styles.quoteIcon}>
                  <Quote size={20} fill="currentColor" />
                </div>
                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--accent-primary)" color="var(--accent-primary)" />
                  ))}
                </div>
                <p className={styles.content}>"{review.content}"</p>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.name}>{review.name}</h4>
                    <p className={styles.role}>{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={() => scroll('right')}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
