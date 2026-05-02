import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const footerLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'Skills', target: 'skills' },
  { label: 'GitHub Activity', target: 'github-activity' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

function Footer({ portfolio }) {
  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.footer
      className="footer glass-footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">{portfolio.name.charAt(0)}</div>
          <div>
            <h3>{portfolio.name}</h3>
            <p>Java & React Developer</p>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Quick Links</h4>
          <div className="footer-links">
            {footerLinks.map((item) => (
              <button key={item.target} type="button" onClick={() => scrollToSection(item.target)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Social</h4>
          <div className="footer-socials">
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made by {portfolio.name}</p>
        <p>&copy; 2026 {portfolio.name}. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
