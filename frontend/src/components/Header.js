import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

const getNavOffset = () => (window.innerWidth <= 640 ? 240 : 180);

const getSectionTop = (element) => element.getBoundingClientRect().top + window.scrollY;

function Header({ portfolio, theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const navOffset = getNavOffset();
      const currentPosition = window.scrollY + navOffset + 45;
      const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (pageBottom) {
        setActiveSection(navItems[navItems.length - 1].target);
        return;
      }

      const current = navItems.reduce((active, item) => {
        const section = document.getElementById(item.target);
        if (!section) {
          return active;
        }

        return getSectionTop(section) <= currentPosition ? item.target : active;
      }, 'home');

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      setActiveSection(target);
      const targetTop = Math.max(0, getSectionTop(element) - getNavOffset());
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  return (
    <header className="header home-section" id="home">
      <nav className="home-nav" aria-label="Primary navigation">
        <div className="home-brand">Portfolio.</div>
        <div className="home-menu">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className={activeSection === item.target ? 'active' : ''}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode'}
          title={theme === 'dark' ? 'Light mode' : 'Night mode'}
        >
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </button>
        <a className="hire-btn" href={`mailto:${portfolio.email}`}>Hire Me</a>
      </nav>

      <div className="home-hero">
        <div className="home-copy">
          <p className="home-kicker">Full Stack Portfolio</p>
          <h1>Hi, I'm {portfolio.name}</h1>
          <p className="title">{portfolio.title}</p>
          <p className="bio">{portfolio.bio}</p>

          <div className="home-actions">
            <a className="download-btn" href="/assets/sonu-kumar-resume.docx" download="Sonu-Kumar-Resume.docx">
              Download CV
            </a>
            <button className="contact-btn" type="button" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="home-visual" aria-hidden="true">
          <img src="/assets/college-student-boy.png" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
