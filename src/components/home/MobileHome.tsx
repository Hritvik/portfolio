import React from 'react';
import { RESUME_URL } from '../../config/links';
import { flagshipStudies, impactMetrics, principles } from './homeContent';

const MobileHome: React.FC = () => (
  <section className="home-mobile">
    <header className="mobile-hero">
      <div className="section-subtitle">Platform Engineer · SDE III</div>
      <h1>I build systems that remain operable under real-world scale.</h1>
      <p className="hero-mobile-proof">8+ years · Meesho · Ex Oracle/Jio</p>
      <div className="hero-actions">
        <a href="/work" className="primary-action">View Flagship Work</a>
        <a href={RESUME_URL} download="Hritvik-Dinkar-Resume.pdf" className="secondary-action">Download Résumé</a>
      </div>
      <p className="hero-copy">Configurable workflows, resilient GenAI runtimes, and telecom computation—built with explicit recovery, ownership, and operational control.</p>
    </header>

    <section className="mobile-proof-section" aria-label="Selected impact">
      <div className="mobile-section-heading"><span>Proof at a glance</span><small>Swipe →</small></div>
      <div className="mobile-proof-rail">
        {impactMetrics.map((metric) => <a key={metric.value} href={metric.href}><strong>{metric.value}</strong><span>{metric.label}</span></a>)}
      </div>
    </section>

    <section className="mobile-work-section">
      <div className="mobile-section-heading"><span>Flagship work</span><small>03 systems</small></div>
      <div className="mobile-work-stack">
        {flagshipStudies.map((study, index) => (
          <a className={`mobile-work-card mobile-work-card--${index + 1}`} href={`/work/${study.slug}`} key={study.slug}>
            <div><span>0{index + 1} · {study.organization}</span><strong>{study.proof[0].value}</strong></div>
            <h2>{study.title}</h2>
            <p>{study.proof[0].label}</p>
            <b>Open case study <span aria-hidden="true">→</span></b>
          </a>
        ))}
      </div>
    </section>

    <section className="mobile-principles" aria-label="Engineering principles">
      <div className="mobile-section-heading"><span>How I build</span></div>
      {principles.map((principle) => <div key={principle.title}><strong>{principle.title}</strong><span>{principle.detail}</span></div>)}
    </section>
  </section>
);

export default MobileHome;
