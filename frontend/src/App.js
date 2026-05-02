import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { fetchPortfolioData } from './services/portfolioService';

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    fetchPortfolioData()
      .then(data => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching portfolio:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-mode-body', theme === 'light');
    document.body.classList.toggle('dark-mode-body', theme === 'dark');

    return () => {
      document.body.classList.remove('light-mode-body', 'dark-mode-body');
    };
  }, [theme]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!portfolio) {
    return <div className="error">Failed to load portfolio</div>;
  }

  return (
    <div className={`App ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <div className="container">
        <Header portfolio={portfolio} theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <About portfolio={portfolio} />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Contact portfolio={portfolio} />
      </div>

      <footer className="footer">
        <p>&copy; 2026 {portfolio.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
