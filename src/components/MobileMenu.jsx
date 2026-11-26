'use client';
// MobileMenu.jsx — Client Component
// Handles: burger toggle, mobile overlay, and the navbar's "scrolled" state
// (toggled as a DOM class, so scrolling causes no re-renders)

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';
import { useActiveHref } from './NavLinks';

const MobileMenu = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeHref = useActiveHref(navItems);

  useEffect(() => {
    const navbar = document.getElementById('main-navbar');
    const handleScroll = () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll + close on Escape while the menu is open
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isOpen);
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Same-page hash links scroll smoothly; everything else navigates normally
  const handleNavClick = (e, href) => {
    setIsOpen(false);
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
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="mobile-menu-overlay" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="mobile-menu-header">
            <a href="/" className="nav-logo" aria-label="Hammad Asif, home" onClick={() => setIsOpen(false)}>
              <Logo />
            </a>
            <button className="mobile-menu-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = item.href === activeHref;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isActive ? 'mobile-nav-link is-active' : 'mobile-nav-link'}
                  aria-current={isActive ? (item.section ? 'location' : 'page') : undefined}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mobile-menu-actions">
            <a href="/hire-me" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Hire me <FiArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="/Hammad_Asif_CV.pdf" target="_blank" rel="noopener noreferrer" download className="btn btn-secondary">
              <FiDownload size={16} aria-hidden="true" /> Download CV
            </a>
          </div>

          <div className="mobile-menu-footer">
            <a href="mailto:hammadcto786@gmail.com"><FiMail size={16} aria-hidden="true" /> hammadcto786@gmail.com</a>
            <div className="mobile-social-links">
              <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer">
                <FaGithub size={16} aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={16} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
