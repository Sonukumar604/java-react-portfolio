import React, { useState } from 'react';
import { motion } from 'framer-motion';

const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

const projectDetails = [
  {
    name: 'CampusConnect',
    type: 'Spring Boot backend platform',
    description: 'A college opportunity platform focused on authentication, event discovery, applications, notifications, and production-style backend architecture.',
  },
  {
    name: 'Razorpay-Inspired Payment Gateway',
    type: 'Backend system design',
    description: 'A payment-gateway inspired backend project for practicing secure payment flows, API design, validation, transaction handling, and database modeling.',
  },
  {
    name: 'AI-Powered Lovable-Inspired Platform',
    type: 'AI + backend application',
    description: 'A modern platform exploring AI-assisted workflows, Spring backend integration, clean UI flow, and product-style application architecture.',
  },
  {
    name: 'Airbnb Backend',
    type: 'Spring Boot backend',
    description: 'A backend project focused on booking workflows, property data modeling, secure APIs, layered architecture, and real-world service design.',
  },
  {
    name: 'LinkedIn Backend',
    type: 'Spring Boot backend',
    description: 'A LinkedIn-style backend project for practicing profile, post, connection, authentication, authorization, and scalable API design concepts.',
  },
];

function About({ portfolio }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.section
      id="about"
      className="section glass-section about-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="about-layout">
        <div className="about-visual" aria-hidden="true">
          <div className="about-star"></div>
          <img src={getAssetPath('/assets/college-student-boy.png')} alt="" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="about-text">
            Hi, I'm Sonu Kumar, a Java Backend Developer with a Bachelor's degree in Computer Applications (BCA). I enjoy building scalable, secure, and production-ready backend applications using Java and the Spring ecosystem.
          </p>
          <p className="about-text">
            My primary expertise includes Java, Spring Boot, Spring Security, REST APIs, Spring Data JPA, Hibernate, PostgreSQL, MySQL, and Microservices. I have built multiple real-world backend projects while following clean architecture, layered design, authentication and authorization (JWT/RBAC), exception handling, validation, and database design best practices.
          </p>
          <p className="about-text">
            Alongside backend development, I have experience building responsive frontend applications using React, JavaScript, HTML, and CSS, allowing me to develop complete end-to-end solutions when required.
          </p>
          <p className="about-text">
            I am continuously expanding my knowledge in Distributed Systems, Spring Cloud, Apache Kafka, Docker, Kubernetes, CI/CD, Cloud-Native Development, System Design, and AI-powered backend applications using Spring AI and modern LLM technologies.
          </p>
          <p className="about-text">
            Some of the projects I have built or am actively developing include CampusConnect, a Razorpay-inspired Payment Gateway, an AI-powered Lovable-inspired platform, an Airbnb Backend, and a LinkedIn Backend. Through these projects, I continue improving my backend engineering skills by working on real-world architectures and production-style applications.
          </p>
          <p className="about-text">
            I'm currently looking for opportunities as a Java Backend Developer where I can contribute, learn from experienced engineers, and build reliable software that solves real-world problems.
          </p>

          <div className="about-metrics">
            <div>
              <strong>3 Years</strong>
              <span>BCA Education</span>
            </div>
            <div>
              <strong>Fresher</strong>
              <span>Experience</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Projects Completed</span>
            </div>
          </div>

          {showMore && (
            <motion.div
              className="about-more"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3>Project Work</h3>
              <div className="about-project-list">
                {projectDetails.map((project) => (
                  <article key={project.name} className="about-project-item">
                    <div>
                      <h4>{project.name}</h4>
                      <span>{project.type}</span>
                    </div>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          <button className="learn-more-btn" type="button" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
