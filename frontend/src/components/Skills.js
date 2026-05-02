import React from 'react';
import {
  FaJava,
  FaDatabase,
  FaDocker,
  FaShieldAlt,
  FaProjectDiagram,
  FaCodeBranch,
  FaGithub,
} from 'react-icons/fa';
import { SiSpringboot, SiApachekafka, SiRedis, SiHibernate } from 'react-icons/si';
import { MdApi, MdOutlineSchedule, MdOutlineSpeed } from 'react-icons/md';
import { BiTestTube } from 'react-icons/bi';

const skillCards = [
  {
    title: 'Core Java',
    icon: <FaJava />,
    level: 92,
    color: '#fb8500',
    examples: ['OOPs', 'Collections', 'Exception Handling', 'Multithreading'],
  },
  {
    title: 'Advance Java',
    icon: <FaJava />,
    level: 84,
    color: '#38bdf8',
    examples: ['JDBC', 'Servlets', 'JSP', 'Session Management'],
  },
  {
    title: 'Corporate Java',
    icon: <FaCodeBranch />,
    level: 82,
    color: '#facc15',
    examples: ['Layered Architecture', 'DTOs', 'Validation', 'Clean Code'],
  },
  {
    title: 'Spring Boot',
    icon: <SiSpringboot />,
    level: 88,
    color: '#22c55e',
    examples: ['Auto Configuration', 'Starters', 'Profiles', 'Actuator'],
  },
  {
    title: 'REST APIs',
    icon: <MdApi />,
    level: 86,
    color: '#06b6d4',
    examples: ['CRUD APIs', 'Status Codes', 'DTO Mapping', 'API Validation'],
  },
  {
    title: 'Spring MVC',
    icon: <SiSpringboot />,
    level: 82,
    color: '#60a5fa',
    examples: ['Controllers', 'Request Mapping', 'Model Binding', 'Views'],
  },
  {
    title: 'Spring Data JPA / Hibernate',
    icon: <SiHibernate />,
    level: 84,
    color: '#a78bfa',
    examples: ['Repositories', 'Entity Mapping', 'JPQL', 'Relationships'],
  },
  {
    title: 'Spring Security',
    icon: <FaShieldAlt />,
    level: 78,
    color: '#f97316',
    examples: ['Basic Auth', 'JWT', 'Roles', 'Authorization Rules'],
  },
  {
    title: 'Production Ready Spring',
    icon: <MdOutlineSpeed />,
    level: 76,
    color: '#fb7185',
    examples: ['Actuator', 'Logging', 'Profiles', 'Exception Handling'],
  },
  {
    title: 'Spring Testing',
    icon: <BiTestTube />,
    level: 74,
    color: '#4ade80',
    examples: ['JUnit', 'Mockito', 'MockMvc', 'Integration Tests'],
  },
  {
    title: 'CI/CD Deployment',
    icon: <FaDocker />,
    level: 72,
    color: '#38bdf8',
    examples: ['GitHub Actions', 'Docker Basics', 'Build Pipelines', 'Deploy Flow'],
  },
  {
    title: 'Spring Boot AOP',
    icon: <FaProjectDiagram />,
    level: 72,
    color: '#c084fc',
    examples: ['Aspects', 'Pointcuts', 'Advice', 'Cross-cutting Logic'],
  },
  {
    title: 'Caching & Transactions',
    icon: <FaDatabase />,
    level: 74,
    color: '#f59e0b',
    examples: ['Caching', 'Concurrency', '@Transactional', 'Isolation Basics'],
  },
  {
    title: 'Basic Microservices',
    icon: <FaProjectDiagram />,
    level: 70,
    color: '#2dd4bf',
    examples: ['Service Split', 'REST Calls', 'Config Basics', 'API Gateway Intro'],
  },
  {
    title: 'Advanced Microservices',
    icon: <FaProjectDiagram />,
    level: 66,
    color: '#818cf8',
    examples: ['Discovery', 'Resilience', 'Central Config', 'Tracing Basics'],
  },
  {
    title: 'Kafka / Redis',
    icon: (
      <>
        <SiApachekafka />
        <SiRedis />
      </>
    ),
    level: 68,
    color: '#ef4444',
    examples: ['Kafka Events', 'Redis Cache', 'Pub/Sub Basics', 'Async Flow'],
  },
  {
    title: 'Task Scheduling',
    icon: <MdOutlineSchedule />,
    level: 76,
    color: '#fb923c',
    examples: ['@Scheduled', 'Cron Jobs', 'Background Tasks', 'Batch Flow'],
  },
  {
    title: 'Git / GitHub',
    icon: <FaGithub />,
    level: 86,
    color: '#f8fafc',
    examples: ['Version Control', 'Branching', 'Pull Requests', 'GitHub Workflow'],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Java and Spring Boot skills I am learning, practicing, and applying in full-stack projects.</p>
      </div>

      <div className="skills-card-grid">
        {skillCards.map((skill) => (
          <article className="skill-card skill-showcase-card" key={skill.title}>
            <div className="skill-card-top">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
            </div>

            <div className="skill-proficiency">
              <span>Proficiency</span>
              <strong>{skill.level}%</strong>
            </div>
            <div className="skill-progress-track">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}, #fb923c)` }}
              ></div>
            </div>

            <div className="skill-examples">
              {skill.examples.map((example) => (
                <span key={example}>{example}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
