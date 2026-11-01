import React, { useState } from 'react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../config/links';

const Contact: React.FC = () => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  };

  return (
    <section className="section contact-page">
      <header className="page-header"><div className="section-subtitle">Contact</div><h1>Let’s discuss platform engineering work.</h1><p>I’m open to senior Platform Engineering, backend platform, and reliability opportunities in India or globally.</p></header>
      <div className="contact-panel">
        <div className="contact-primary"><span className="section-subtitle">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a><p>Email is the fastest way to reach me. Include the role, team, and the systems you need this person to own.</p></div>
        <div className="contact-actions">
          <a className="primary-action" href={`mailto:${EMAIL}`}>Email Me</a>
          <button className="secondary-action" type="button" onClick={copyEmail} aria-label="Copy email address">{copyState === 'copied' ? 'Email Copied' : copyState === 'error' ? 'Copy Failed — Select Email' : 'Copy Email'}</button>
          <a className="secondary-action" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="secondary-action" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          <a className="secondary-action" href={RESUME_URL} download="Hritvik-Dinkar-Resume.pdf">Download Résumé</a>
        </div>
        <p className="copy-status" aria-live="polite">{copyState === 'copied' ? 'Email address copied to clipboard.' : copyState === 'error' ? `Clipboard access was unavailable. Email ${EMAIL} directly.` : ''}</p>
      </div>
    </section>
  );
};

export default Contact;
