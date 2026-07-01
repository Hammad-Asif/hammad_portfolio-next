import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {

  const quickLinks = [
    { to: '/#expertise', label: 'Expertise' },
    { to: '/#experience', label: 'Experience' },
    { to: '/#faq', label: 'FAQs' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/hire-me', label: 'Hire Me' },
    { to: '/contact', label: 'Contact' }
  ];

  const services = [
    'High-Performance APIs',
    'LLM & RAG Pipelines',
    'Data Automation & Mining',
    'Distributed Computing',
    'DevOps & Containerization'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Hammad.</h3>
            <p>
              I build scalable Python backend architectures, high-performance APIs, and production-grade AI systems engineered for global scale.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`${link.to}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Expertise</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="/#expertise">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hammadcto786@gmail.com">Hammadcto786@gmail.com</a></li>
              <li><a href="tel:+923087724490">+92 308 7724490</a></li>
              <li>Pakistan (Available Worldwide - Remote)</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Hammad. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;