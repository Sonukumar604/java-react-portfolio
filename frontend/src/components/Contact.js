import React from 'react';

function Contact({ portfolio }) {
  return (
    <section className="section" id="contact">
      <h2>Contact Info</h2>
      <div className="contact-info">
        <p>Email: <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></p>
        <p>Phone: <a href={`tel:${portfolio.phone}`}>{portfolio.phone}</a></p>
        <div className="social-links">
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="social-btn github">
            GitHub
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
