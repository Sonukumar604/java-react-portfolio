import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import GitHubActivity from './components/GitHubActivity';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolio from './data/portfolioData';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.classList.toggle('light-mode-body', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`App ${theme === 'light' ? 'light-mode' : ''}`}>
      <div className="container">
        <Header portfolio={portfolio} theme={theme} onToggleTheme={toggleTheme} />
        <About portfolio={portfolio} />
        <Skills skills={portfolio.skills} />
        <Internship />
        <Projects projects={portfolio.projects} />
        <GitHubActivity />
        <Contact portfolio={portfolio} />
      </div>

      <Footer portfolio={portfolio} />
    </div>
  );
}

export default App;
