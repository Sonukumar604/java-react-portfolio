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
        <p>Real-world Java backend internship experience with Spring Boot and REST API work.</p>
      </div>

      <div className="internship-card">
        <div>
          <span className="internship-label">CodeAlpha · Internship</span>
          <h3>Java Developer Intern</h3>
          <p>
            Jun 2025 – Jul 2025 · Remote / Virtual
          </p>
          <p>
            Developed backend services using Java and Spring Boot, built RESTful APIs with validation and error handling, implemented authentication and authorization using Spring Security and JWT, designed database schemas with JPA/Hibernate, and used Git with clean coding practices.
          </p>
        </div>

        <div className="internship-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>Spring Security</span>
          <span>JWT</span>
          <span>JPA/Hibernate</span>
          <span>Git</span>
        </div>
      </div>

      <div className="internship-card learning-card">
        <div>
          <span className="internship-label">Currently Learning · Spring Boot Cohort 6.0</span>
          <h3>Spring Boot From Scratch to Advanced</h3>
          <p>
            Enrolled in a structured Spring Boot cohort to strengthen backend development from fundamentals to advanced production-ready concepts.
          </p>
          <p>
            Focus areas include REST APIs, Spring MVC, Spring Data JPA/Hibernate, Spring Security, testing, deployment, caching, transactions, microservices concepts, Kafka/Redis, scheduling, and four production-ready project builds.
          </p>
        </div>

        <div className="internship-tags">
          <span>Spring Boot</span>
          <span>Production Projects</span>
          <span>Security</span>
          <span>JPA/Hibernate</span>
          <span>Microservices</span>
          <span>Kafka / Redis</span>
          <span>CI/CD</span>
        </div>
      </div>
    </motion.section>
  );
}

export default Internship;
