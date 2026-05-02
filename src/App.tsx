import React, { useState } from 'react';
import type { Section } from './types';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import './styles/globals.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('projects');

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="app">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="main">
        <div className="container">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default App;
