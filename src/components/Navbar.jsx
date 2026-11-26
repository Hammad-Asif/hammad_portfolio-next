// Navbar.jsx — Server Component shell.
// Logo left, links centred, actions right. NavLinks (active marker) and
// MobileMenu (burger + overlay + scroll state) are the only client parts.

import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

// `section` marks homepage anchors, used for scroll-spy highlighting
export const navItems = [
  { href: '/#expertise', label: 'Services', section: 'expertise' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/#testimonials', label: 'Testimonials', section: 'testimonials' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <nav className="navbar" id="main-navbar" aria-label="Main navigation">
      <div className="container nav-container">
        <a href="/" className="nav-logo" aria-label="Hammad Asif, home">
          <Logo priority />
        </a>

        <NavLinks items={navItems} />

        <div className="nav-actions">
          <a
            href="/Hammad_Asif_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            suppressHydrationWarning={true}
            className="nav-cv"
          >
            <FiDownload size={15} aria-hidden="true" /> CV
          </a>
          <a href="/hire-me" className="nav-hire">
            Hire me <FiArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        <MobileMenu navItems={navItems} />
      </div>
    </nav>
  );
};

export default Navbar;
