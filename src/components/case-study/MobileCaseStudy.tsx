import React from 'react';
import type { CaseStudy } from '../../types';
import { SystemMap } from './SystemMaps';

const MobileCaseStudy: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <article className="case-study mobile-case-study">
    <header className="mobile-case-hero">
      <a className="eyebrow-link" href="/work">← Flagship work</a>
      <div className="section-subtitle">{study.organization} · {study.period}</div>
      <h1>{study.title}</h1>
      <p className="case-summary">{study.summary}</p>
      <div className="mobile-case-proof">
        <strong>{study.proof[0].value}</strong><span>{study.proof[0].label}</span>
      </div>
    </header>

    <nav className="case-section-nav" aria-label="Case study sections">
      <a href="#outcome">Outcome</a><a href="#ownership">Ownership</a><a href="#architecture">Architecture</a><a href="#decisions">Decisions</a><a href="#evidence">Evidence</a>
    </nav>

    <section className="mobile-case-chapter" id="outcome">
      <span className="mobile-chapter-number">01 / Outcome</span><h2>What changed</h2><p>{study.outcome}</p>
      <div className="mobile-proof-grid">{study.proof.slice(1).map((proof) => <div key={proof.value}><strong>{proof.value}</strong><span>{proof.label}</span></div>)}</div>
    </section>

    <section className="mobile-case-chapter" id="ownership">
      <span className="mobile-chapter-number">02 / Ownership</span><h2>My part of the system</h2>
      <div className="mobile-ownership"><p>{study.ownership}</p><hr /><p><strong>Boundary:</strong> {study.ownershipBoundary}</p></div>
    </section>

    <section className="mobile-case-chapter mobile-evolution">
      <span className="mobile-chapter-number">Evolution</span><h2>From constraint to platform</h2>
      <ol>{study.evolution.map((step) => <li key={step.phase}><span>{step.phase}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
    </section>

    <section className="mobile-case-chapter" id="architecture">
      <span className="mobile-chapter-number">03 / Architecture</span><h2>The operating model</h2>
      <SystemMap slug={study.slug} />
      <details className="mobile-architecture-notes"><summary>Architecture notes <span aria-hidden="true">+</span></summary><ul>{study.architecture.map((item) => <li key={item}>{item}</li>)}</ul></details>
    </section>

    <section className="mobile-case-chapter" id="decisions">
      <span className="mobile-chapter-number">04 / Decisions</span><h2>Hard problems</h2>
      <div className="hard-problems">{study.hardProblems.map((problem, index) => (
        <details className="hard-problem hard-problem-mobile" open={index === 0} key={problem.title}>
          <summary><span>0{index + 1}</span><h3>{problem.title}</h3><span className="details-mark" aria-hidden="true">+</span></summary>
          <dl><div><dt>Constraint</dt><dd>{problem.problem}</dd></div><div><dt>Decision</dt><dd>{problem.decision}</dd></div><div><dt>Result</dt><dd>{problem.result}</dd></div></dl>
        </details>
      ))}</div>
    </section>

    <footer className="mobile-case-chapter mobile-case-evidence" id="evidence">
      <span className="mobile-chapter-number">05 / Evidence</span><h2>System record</h2>
      <div><strong>Evidence</strong><p>{study.evidence.join(' · ')}</p></div><div><strong>Technologies</strong><p>{study.technologies.join(' · ')}</p></div>
      <a className="primary-action" href="/contact">Discuss Platform Work</a>
    </footer>
  </article>
);

export default MobileCaseStudy;
