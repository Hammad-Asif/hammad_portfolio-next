'use client';
// MobileMenu.jsx — Client Component
// Handles: burger toggle, mobile overlay, scroll shrink (via DOM class — no re-renders)

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';

const MobileMenu = ({ navItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the navbar's "scrolled" style without React re-renders
  useEffect(() => {
    const navbar = document.getElementById('main-navbar');
    const handleScroll = () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll + close on Escape while the menu is open
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen);
    if (!isMobileMenuOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Same-page hash links scroll smoothly; everything else navigates normally
  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || '/';
    if (path !== window.location.pathname) return;

    const target = document.querySelector(href.slice(hashIndex));
    if (!target) return;

    e.preventDefault();
    window.scrollTo({ top: Math.max(0, target.offsetTop - 72), behavior: 'smooth' });
    history.replaceState(null, '', href.slice(hashIndex));
  };

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="mobile-menu-header">
            <a href="/#home" className="nav-logo" onClick={(e) => handleNavClick(e, '/#home')}>
              Hammad<span className="nav-logo-dot">.</span>
            </a>
            <button
              className="mobile-menu-btn mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={item.cta ? 'mobile-nav-link mobile-nav-link-cta' : 'mobile-nav-link'}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Hammad_Asif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mobile-nav-link"
            >
              <FiDownload size={18} aria-hidden="true" /> Download CV
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-social-links">
              <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="mailto:hammadcto786@gmail.com" className="icon-btn" aria-label="Email">
                <FiMail size={18} />
              </a>
            </div>
            <p className="mobile-menu-text">AI Engineer · LLM &amp; Generative AI · Python</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
