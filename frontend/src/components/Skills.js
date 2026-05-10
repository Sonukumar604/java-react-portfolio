import React from 'react';
import { motion } from 'framer-motion';

function Skills({ skills }) {
  return (
    <motion.section
      id="skills"
      className="section glass-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-header">
        <h2>Skills</h2>
        <p>Backend-focused Java and Spring Boot skills with practical examples.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`skill-card ${skill.className || 'skill-backend'}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, boxShadow: '0 18px 40px rgba(56, 189, 248, 0.22)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
          >
            <div className="skill-card-top">
              <span className="skill-badge">{skill.category}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-progress-track" aria-hidden="true">
              <motion.div
                className="skill-progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.12 + index * 0.03, duration: 0.75, ease: 'easeOut' }}
              />
            </div>
            <p className="skill-detail">{skill.description}</p>
            <div className="skill-examples">
              {skill.examples.map((example) => (
                <span key={example}>{example}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
