// Navbar.jsx — Server Component (NO "use client" here)
// This file has zero JavaScript sent to the browser for the nav shell

import MobileMenu from './MobileMenu';
import Logo from './Logo';
import { FiDownload } from 'react-icons/fi';

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#expertise', label: 'Expertise' },
  { href: '/#experience', label: 'Experience' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/hire-me', label: 'Hire Me', cta: true },
];

const Navbar = () => {
  return (
    // The "scrolled" class is toggled by MobileMenu via the DOM (no re-renders)
    <nav className="navbar" id="main-navbar" aria-label="Main navigation">
      <div className="container">
        <div className="nav-container">
          <a href="/#home" className="nav-logo" aria-label="Hammad Asif, home">
            <Logo priority />
          </a>

          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={item.cta ? 'nav-link nav-link-cta' : 'nav-link'}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Hammad_Asif_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                suppressHydrationWarning={true}
                className="nav-cv"
              >
                <FiDownload size={14} aria-hidden="true" /> CV
              </a>
            </li>
          </ul>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
