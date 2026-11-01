import React from 'react';
import { RESUME_URL } from '../../config/links';
import FlagshipCard from '../FlagshipCard';
import { flagshipStudies, impactMetrics, principles } from './homeContent';

const DesktopHome: React.FC = () => (
  <section className="home-desktop">
    <header className="desktop-hero">
      <div className="desktop-hero-statement">
        <div className="section-subtitle">Platform Engineering · Distributed Systems · GenAI</div>
        <h1>Platform Engineer building systems that stay operable at scale.</h1>
        <p>I’m an SDE III at Meesho with 8+ years across Meesho, Oracle, and Reliance Jio. I turn complex operational workflows into configurable, replay-safe platforms—and connect architecture decisions to measurable business outcomes.</p>
      </div>
      <aside className="desktop-hero-brief" aria-label="Professional brief">
        <span className="brief-label">Current brief</span>
        <strong>SDE III · Meesho</strong>
        <dl>
          <div><dt>Experience</dt><dd>8+ years</dd></div>
          <div><dt>Focus</dt><dd>Platform systems</dd></div>
          <div><dt>Base</dt><dd>Bengaluru</dd></div>
        </dl>
        <a href="/work" className="primary-action">View Flagship Work</a>
        <a href={RESUME_URL} download="Hritvik-Dinkar-Resume.pdf" className="secondary-action">Download Résumé</a>
      </aside>
    </header>

    <div className="desktop-impact-ledger" aria-label="Selected impact">
      {impactMetrics.map((metric) => <a key={metric.value} href={metric.href}><strong>{metric.value}</strong><span>{metric.label}</span></a>)}
    </div>

    <div className="desktop-work-heading">
      <div><div className="section-subtitle">Flagship Work</div><h2>Three systems.<br />Three kinds of scale.</h2></div>
      <p>Workflow scale, runtime reliability, and telecom computation. Each dossier connects the constraint, architecture, decisions, and ownership boundary.</p>
    </div>
    <div className="flagship-grid desktop-flagship-grid">{flagshipStudies.map((study, index) => <FlagshipCard key={study.slug} study={study} index={index} />)}</div>

    <section className="principles-strip" aria-label="Engineering principles">
      {principles.map((principle) => <div key={principle.title}><strong>{principle.title}</strong><span>{principle.detail}</span></div>)}
    </section>
  </section>
);

export default DesktopHome;
