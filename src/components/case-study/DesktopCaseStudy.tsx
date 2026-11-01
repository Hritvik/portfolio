import React from 'react';
import type { CaseStudy } from '../../types';
import { SystemMap } from './SystemMaps';

const DesktopCaseStudy: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <article className="case-study desktop-case-study">
    <header className="case-hero desktop-case-hero">
      <a className="eyebrow-link" href="/work">← All Flagship Work</a>
      <div className="section-subtitle">{study.kicker}</div>
      <h1>{study.title}</h1>
      <div className="desktop-case-opening">
        <p className="case-summary">{study.summary}</p>
        <div className="case-meta">{study.organization}<br />{study.period}</div>
      </div>
      <div className="proof-grid">
        {study.proof.map((proof) => <div className="proof-card" key={proof.value}><strong>{proof.value}</strong><span>{proof.label}</span></div>)}
      </div>
    </header>

    <section className="case-section case-intro-grid" id="desktop-outcome">
      <div><div className="section-subtitle">Outcome</div><h2>What Changed</h2><p>{study.outcome}</p></div>
      <aside className="ownership-card"><div className="section-subtitle">My Ownership</div><p>{study.ownership}</p><hr /><p className="muted"><strong>Boundary:</strong> {study.ownershipBoundary}</p></aside>
    </section>

    <section className="case-section">
      <div className="section-subtitle">System Evolution</div><h2>From Constraint to Platform</h2>
      <div className="evolution-grid">{study.evolution.map((step) => <div className="evolution-step" key={step.phase}><span>{step.phase}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}</div>
    </section>

    <section className="case-section architecture-section">
      <div className="section-subtitle">Architecture</div><h2>The Operating Model</h2>
      <SystemMap slug={study.slug} />
      <ul className="architecture-list">{study.architecture.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>

    <section className="case-section">
      <div className="section-subtitle">Three Hard Problems</div><h2>Decisions That Shaped the System</h2>
      <div className="hard-problems">{study.hardProblems.map((problem, index) => (
        <article className="hard-problem" key={problem.title}>
          <span>0{index + 1}</span><h3>{problem.title}</h3>
          <dl><div><dt>Constraint</dt><dd>{problem.problem}</dd></div><div><dt>Decision</dt><dd>{problem.decision}</dd></div><div><dt>Result</dt><dd>{problem.result}</dd></div></dl>
        </article>
      ))}</div>
    </section>

    <footer className="case-footer">
      <div><div className="section-subtitle">Evidence</div><p>{study.evidence.join(' · ')}</p></div>
      <div><div className="section-subtitle">Technologies</div><p>{study.technologies.join(' · ')}</p></div>
      <a className="primary-action" href="/contact">Discuss Platform Work</a>
    </footer>
  </article>
);

export default DesktopCaseStudy;
