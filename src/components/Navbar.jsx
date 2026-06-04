// Navbar.jsx — Server Component (NO "use client" here)
// This file has zero JavaScript sent to the browser for the nav shell

import MobileMenu from './MobileMenu';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#faq', label: "FAQ's" },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    // data-scrolled is toggled by a tiny CSS+JS trick in MobileMenu via useRef (no useState)
    <nav className="navbar" id="main-navbar">
      <div className="container">
        <div className="nav-container">

          {/* Logo — plain anchor, no JS needed */}
          <a href="#home" className="nav-logo">
            Hammad.
          </a>

          {/* Desktop nav links — pure HTML, server rendered, zero JS */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/HammadCV_inter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="border border-white/40 text-white text-sm px-4 py-1.5 rounded-md hover:bg-white/10 transition"
              >
                Download CV
              </a>
            </li>
          </ul>

          {/* Only the interactive burger + mobile overlay is a client component */}
          <MobileMenu navItems={navItems} />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
