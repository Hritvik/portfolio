import React from 'react';

const principles = [
  { title: 'Make failure a designed state', copy: 'Retries, replay, degraded paths, human handoff, and recovery controls belong in the architecture—not in an incident runbook added later.' },
  { title: 'Separate policy from execution', copy: 'Configuration should make business variation fast while validation and platform code keep execution predictable.' },
  { title: 'Connect systems to decisions', copy: 'A platform matters when operators can use it, leaders can trust its evidence, and teams can change it safely.' },
];

const About: React.FC = () => (
  <section className="section about-page">
    <header className="page-header"><div className="section-subtitle">About</div><h1>Systems that are boring in production and useful to humans.</h1><p>I’m a Platform Engineer and SDE III at Meesho with 8+ years building backend, GenAI, workflow, and data platforms across Meesho, Oracle, and Reliance Jio.</p></header>
    <div className="about-lead-grid">
      <div><h2>How I Work</h2><p>My strongest work begins with ambiguous operational problems: a support SOP that changes by category, an LLM provider that fails unpredictably, or billions of records that must become a decision. I clarify the domain, establish ownership boundaries, design the operating model, and carry the system through rollout and production.</p><p>I work closely with product, support, operations, and business leaders. On engineering teams, I decompose delivery, review designs and code, mentor implementation, and keep the system’s failure behavior visible.</p></div>
      <dl className="about-facts"><div><dt>Current</dt><dd>SDE III · Meesho</dd></div><div><dt>Experience</dt><dd>8+ years</dd></div><div><dt>Previous</dt><dd>Oracle · Reliance Jio</dd></div><div><dt>Education</dt><dd>B.Tech. · IIT Ropar</dd></div><div><dt>Location</dt><dd>Bengaluru, India</dd></div></dl>
    </div>
    <div className="principle-grid">{principles.map((principle) => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}</div>
  </section>
);

export default About;
