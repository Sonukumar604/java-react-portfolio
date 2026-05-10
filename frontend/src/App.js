import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
  return (
    <div className="App">
      <Navbar portfolio={portfolio} />

      <div className="container">
        <Header portfolio={portfolio} />
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
