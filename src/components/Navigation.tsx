import React from 'react';
import type { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const sections: Section[] = ['projects', 'blog', 'about', 'contact'];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            Distracted Dev
          </a>
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => onSectionChange(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
