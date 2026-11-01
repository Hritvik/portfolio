import React from 'react';
import type { CaseStudy } from '../types';

interface FlagshipCardProps {
  study: CaseStudy;
  index: number;
}

const FlagshipCard: React.FC<FlagshipCardProps> = ({ study, index }) => (
  <a className="flagship-card" href={`/work/${study.slug}`}>
    <div className="flagship-card-header">
      <div className="flagship-card-index">0{index + 1}</div>
      <div className="flagship-card-meta">{study.organization} · {study.period}</div>
    </div>
    <h3>{study.title}</h3>
    <p>{study.summary}</p>
    <div className="flagship-card-proof">
      <strong>{study.proof[0].value}</strong>
      <span>{study.proof[0].label}</span>
    </div>
    <span className="text-link">Read Case Study <span aria-hidden="true">→</span></span>
  </a>
);

export default FlagshipCard;
