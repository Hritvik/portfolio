import React, { useRef, useState } from 'react';

const links = [{ href: '/', label: 'Home' }, { href: '/work', label: 'Work' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }];

const Navigation: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <nav className="nav" aria-label="Primary navigation" onKeyDown={(event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    }}>
      <div className="container nav-container">
        <a href="/" className="nav-logo">Hritvik Dinkar<span>Platform Engineer</span></a>
        <button
          className="nav-toggle"
          ref={toggleRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>Menu</span>
          <span className="nav-toggle-mark" aria-hidden="true">{isOpen ? '×' : '≡'}</span>
        </button>
        <ul id="primary-navigation" className="nav-links" data-open={isOpen}>
          {links.map((link) => {
            const active = link.href === '/' ? currentPath === '/' : currentPath.startsWith(link.href);
            return <li key={link.href}><a href={link.href} className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined} onClick={() => setIsOpen(false)}>{link.label}</a></li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
