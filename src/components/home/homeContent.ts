import { caseStudies } from '../../data/caseStudies';

export const impactMetrics = [
  { value: '60%', label: 'supplier-support categories automated', href: '/work/configurable-support-automation' },
  { value: '5×', label: 'projected sale traffic validated', href: '/work/genai-runtime-reliability' },
  { value: '≈2B/day', label: 'records in one Jio data category', href: '/work/telecom-analytics-computation' },
  { value: '90 min', label: 'call cutoff informed by cohort analysis', href: '/work/telecom-analytics-computation' },
];

export const flagshipStudies = caseStudies;

export const principles = [
  { title: 'Configurable', detail: 'Move variation out of releases.' },
  { title: 'Recoverable', detail: 'Design failure, replay, and handoff explicitly.' },
  { title: 'Operable', detail: 'Give production teams control and evidence.' },
];
