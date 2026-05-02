import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Internship', target: 'internship' },
  { label: 'Contact', target: 'contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTarget, setActiveTarget] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.target))
        .filter(Boolean);

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (currentSection?.id) {
        setActiveTarget(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo" onClick={() => scrollToSection('hero')} role="button" tabIndex={0}>
        SONU
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li
            key={item.target}
            className={activeTarget === item.target ? 'active' : ''}
            onClick={() => scrollToSection(item.target)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="theme-btn" type="button" aria-label="Theme settings">
          Settings
        </button>
      </div>
    </div>
  );
}

export default Navbar;
