import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import CaseStudyPage from './components/case-study/CaseStudyPage';
import NotFound from './components/NotFound';
import { getCaseStudy } from './data/caseStudies';
import { resolveRoute } from './lib/routes';
import './styles/globals.css';

const pageTitle = (kind: string, caseTitle?: string) => caseTitle
  ? `${caseTitle} | Hritvik Dinkar`
  : `${kind === 'home' ? 'Platform Engineer' : kind[0].toUpperCase() + kind.slice(1)} | Hritvik Dinkar`;

const App: React.FC = () => {
  const currentPath = window.location.pathname;
  const route = resolveRoute(currentPath);
  const study = route.kind === 'case-study' ? getCaseStudy(route.slug) : undefined;

  useEffect(() => {
    document.title = pageTitle(route.kind, study?.title);
  }, [route.kind, study?.title]);

  const content = route.kind === 'home' ? <Home />
    : route.kind === 'work' ? <Projects />
      : route.kind === 'about' ? <About />
        : route.kind === 'contact' ? <Contact />
          : route.kind === 'case-study' && study ? <CaseStudyPage study={study} />
            : <NotFound />;

  return <div className="app"><a className="skip-link" href="#main-content">Skip to content</a><Navigation currentPath={currentPath} /><main className="main" id="main-content"><div className="container">{content}</div></main></div>;
};

export default App;
