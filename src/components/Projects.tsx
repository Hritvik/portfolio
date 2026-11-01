import React from 'react';
import { caseStudies } from '../data/caseStudies';
import { supportingWins } from '../data/supportingWins';
import FlagshipCard from './FlagshipCard';

const Projects: React.FC = () => (
  <section className="section work-index">
    <header className="page-header">
      <div className="section-subtitle">Selected Work</div>
      <h1 className="section-title">Platforms Built Around Real Operational Constraints</h1>
      <p className="section-intro">Three detailed case studies for engineering leaders, followed by compact evidence from adjacent production systems.</p>
    </header>
    <div className="flagship-grid flagship-grid-work">{caseStudies.map((study, index) => <FlagshipCard key={study.slug} study={study} index={index} />)}</div>

    <section className="supporting-section">
      <div className="section-subtitle">Additional Systems</div>
      <h2>Supporting Evidence</h2>
      <div className="supporting-grid">
        {supportingWins.map((win) => <article className="supporting-win" key={win.title}><span>{win.organization}</span><h3>{win.title}</h3><strong>{win.outcome}</strong><p>{win.context}</p></article>)}
      </div>
    </section>
  </section>
);

export default Projects;
