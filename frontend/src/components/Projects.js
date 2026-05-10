import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaJava, FaDatabase, FaServer, FaCode } from 'react-icons/fa6';

const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
  { label: 'Java', value: 'java' },
];

const classifyProject = (project) => {
  const text = `${project.name} ${project.description} ${project.technologies}`.toLowerCase();

  if (text.includes('react') && (text.includes('spring boot') || text.includes('java'))) {
    return 'fullstack';
  }

  if (text.includes('react') || text.includes('frontend') || text.includes('ui')) {
    return 'frontend';
  }

  if (text.includes('core java') || text.includes('oops')) {
    return 'java';
  }

  if (text.includes('spring boot') || text.includes('java') || text.includes('api')) {
    return 'backend';
  }

  return 'fullstack';
};

const getProjectBadges = (projectType, project) => {
  const badges = [];

  if (projectType === 'fullstack') {
    badges.push('Full Stack');
  }

  const text = `${project.name} ${project.description} ${project.technologies}`.toLowerCase();
  if (text.includes('api') || text.includes('rest')) {
    badges.push('REST API');
  }

  badges.push('Production Ready');
  return badges;
};

const getTechIcons = (technologies) => {
  const techText = technologies.toLowerCase();
  const icons = [];

  if (techText.includes('react')) {
    icons.push({ icon: FaReact, label: 'React' });
  }
  if (techText.includes('spring') || techText.includes('java')) {
    icons.push({ icon: FaJava, label: 'Spring Boot / Java' });
  }
  if (techText.includes('mysql') || techText.includes('postgres') || techText.includes('sql')) {
    icons.push({ icon: FaDatabase, label: 'Database' });
  }
  if (techText.includes('api') || techText.includes('rest')) {
    icons.push({ icon: FaServer, label: 'API' });
  }

  if (!icons.length) {
    icons.push({ icon: FaCode, label: 'Code' });
  }

  return icons;
};

function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => classifyProject(project) === activeFilter);
  }, [activeFilter, projects]);

  return (
    <motion.section
      id="projects"
      className="section glass-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-header">
        <h2>Projects</h2>
        <p>Card layout with interactive filtering and local React content.</p>
      </div>
      <div className="filter-bar" role="tablist" aria-label="Project categories">
        {projectFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`filter-pill ${activeFilter === filter.value ? 'filter-pill-active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          (() => {
            const projectType = classifyProject(project);
            const badges = getProjectBadges(projectType, project);
            const techIcons = getTechIcons(project.technologies);

            return (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
          >
            <div className="project-card-glow" />
            <div className="project-badges">
              {badges.map((badge) => (
                <span key={badge} className="project-badge">
                  {badge}
                </span>
              ))}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech tech-chip">Tech: {project.technologies}</div>
            <div className="tech-icons-row">
              {techIcons.map(({ icon: Icon, label }) => (
                <span key={label} className="tech-icon-pill" title={label} aria-label={label}>
                  <Icon />
                </span>
              ))}
            </div>
            <div className="project-meta-grid">
              <div>
                <span>Tech Used</span>
                <strong>{project.technologies.split(',').slice(0, 2).join(', ')}</strong>
              </div>
              <div>
                <span>Type</span>
                <strong>{project.type || (projectType === 'backend' ? 'API' : 'Web App')}</strong>
              </div>
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link project-button">
              <FaGithub /> GitHub
            </a>
          </motion.div>
            );
          })()
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
