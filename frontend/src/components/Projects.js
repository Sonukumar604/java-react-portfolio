import React from 'react';

function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech">Tech: {project.technologies}</div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub -&gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
