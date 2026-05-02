import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectDetails = [
  {
    name: 'Railway Reservation System',
    type: 'OOPs based',
    description: 'Built core reservation workflows such as booking, passenger records, train details, and ticket management using object-oriented programming concepts.',
  },
  {
    name: 'Hotel Management System',
    type: 'OOPs based',
    description: 'Created a management flow for rooms, guests, bookings, and billing while practicing classes, objects, encapsulation, and modular Java logic.',
  },
  {
    name: 'Campus Connect',
    type: 'Spring Boot full stack',
    description: 'Developed a campus-focused full-stack application with backend APIs and frontend integration for student-oriented connectivity features.',
  },
  {
    name: 'Lovable Clone',
    type: 'Spring Boot full stack',
    description: 'Built a full-stack clone project using Spring Boot concepts, REST APIs, and frontend integration to practice real product-style workflows.',
  },
  {
    name: 'Java React Portfolio',
    type: 'Java + React full stack',
    description: 'Created this personal portfolio using a Java Spring Boot backend and React frontend, and I am still improving its design and features.',
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
          <img src="/assets/college-student-boy.png" alt="" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="about-text">
            Hi, I am {portfolio.name}, a {portfolio.title}. I completed my 3-year BCA course and I am building my career as a full-stack developer with Java, Spring Boot, React, REST APIs, and modern frontend development.
          </p>
          <p className="about-text">
            I am a fresher, currently improving my project portfolio through practical full-stack applications and continuous contribution to my existing work.
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
