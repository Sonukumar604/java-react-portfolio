import React from 'react';
import { motion } from 'framer-motion';

function Internship() {
  return (
    <motion.section
      id="internship"
      className="section section-dark"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-header section-header-dark">
        <h2>Internship</h2>
        <p>Open to impactful internships where I can build, learn, and ship meaningful product work.</p>
      </div>

      <div className="internship-card">
        <div>
          <span className="internship-label">Status</span>
          <h3>Seeking React / Full Stack Internship Opportunities</h3>
          <p>
            Focused on frontend engineering, Spring Boot APIs, and polished user experiences.
          </p>
        </div>

        <div className="internship-tags">
          <span>React</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>UI/UX</span>
        </div>
      </div>
    </motion.section>
  );
}

export default Internship;
