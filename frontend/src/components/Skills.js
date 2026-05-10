import React from 'react';
import { motion } from 'framer-motion';

const categoryMeta = {
  frontend: { label: 'Frontend', className: 'skill-front-end' },
  backend: { label: 'Backend', className: 'skill-backend' },
  database: { label: 'Database', className: 'skill-database' },
  tools: { label: 'Tools', className: 'skill-tools' },
  language: { label: 'Language', className: 'skill-language' },
};

const getSkillMeta = (skill) => {
  const value = skill.toLowerCase();

  if (['react', 'html', 'css', 'javascript', 'frontend'].some((item) => value.includes(item))) {
    return { category: 'frontend', proficiency: 92 };
  }

  if (['spring', 'java', 'rest', 'backend', 'api', 'maven'].some((item) => value.includes(item))) {
    return { category: 'backend', proficiency: 89 };
  }

  if (['mysql', 'postgres', 'database', 'sql'].some((item) => value.includes(item))) {
    return { category: 'database', proficiency: 84 };
  }

  if (['git', 'docker', 'tools'].some((item) => value.includes(item))) {
    return { category: 'tools', proficiency: 80 };
  }

  return { category: 'language', proficiency: 82 };
};

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
        <p>Skill cards, levels, and color coding are powered by local React data.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const skillMeta = getSkillMeta(skill);
          const category = categoryMeta[skillMeta.category];

          return (
          <motion.div
            key={index}
            className={`skill-card ${category.className}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, boxShadow: '0 18px 40px rgba(56, 189, 248, 0.22)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
          >
            <div className="skill-card-top">
              <span className="skill-badge">{category.label}</span>
              <span className="skill-percent">{skillMeta.proficiency}%</span>
            </div>
            <h3>{skill}</h3>
            <div className="skill-progress-track" aria-hidden="true">
              <motion.div
                className="skill-progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skillMeta.proficiency}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.12 + index * 0.03, duration: 0.75, ease: 'easeOut' }}
              />
            </div>
            <p className="skill-detail">Strong proficiency with hands-on portfolio experience.</p>
          </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default Skills;
