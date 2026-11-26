'use client';
// Desktop nav links with an active marker: the current route, or on the
// homepage the section currently in view (scroll-spy).

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useActiveHref(items) {
  const pathname = usePathname();
  const [section, setSection] = useState(null);

  useEffect(() => {
    if (pathname !== '/') {
      setSection(null);
      return;
    }
    const ids = items.filter((i) => i.section).map((i) => i.section);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSection(e.target.id);
        });
      },
      // A thin band across the middle of the viewport decides the active section
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 200) setSection(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname, items]);

  const active = items.find((item) => {
    if (item.section) return pathname === '/' && section === item.section;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  });
  return active?.href ?? null;
}

const NavLinks = ({ items }) => {
  const activeHref = useActiveHref(items);

  return (
    <ul className="nav-menu">
      {items.map((item) => {
        const isActive = item.href === activeHref;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              className={isActive ? 'nav-link is-active' : 'nav-link'}
              aria-current={isActive ? (item.section ? 'location' : 'page') : undefined}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
