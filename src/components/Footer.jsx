import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';

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
    { label: 'LLM & Generative AI', href: '/#expertise' },
    { label: 'Document AI & PDF Extraction', href: '/services/document-ai' },
    { label: 'FastAPI Backends', href: '/#expertise' },
    { label: 'Full-Stack Development', href: '/#expertise' },
    { label: 'AI Automation & Scraping', href: '/#expertise' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <h2 className="footer-cta-title">Have a role or project in mind?</h2>
            <p className="footer-cta-text">Open to long-term, full-time remote roles with US, UK and EU overlap.</p>
          </div>
          <a href="/hire-me" className="btn btn-primary">
            Start a conversation <FiArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/#home" className="nav-logo" aria-label="Hammad Asif, home"><Logo /></a>
            <p>
              AI engineer building Python LLM, generative AI and document-AI systems end to end.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <FaLinkedin />
              </a>
              <a href="mailto:hammadcto786@gmail.com" aria-label="Email" className="icon-btn">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Navigate</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.label}>
                  <a href={service.href}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hammadcto786@gmail.com">hammadcto786@gmail.com</a></li>
              <li><a href="tel:+923087724490">+92 308 7724490</a></li>
              <li><span>Pakistan · Remote worldwide</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Muhammad Hammad Asif. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
