import type { SupportingWin } from '../types';

export const supportingWins: SupportingWin[] = [
  { title: 'Support Chatbot Escalation', organization: 'Meesho', outcome: '25% → about 10%, with lows near 8%', context: 'Improved retrieval, routing, prompts, evaluation, fallback policy, UI/API context, and agent-loop response generation.' },
  { title: 'Contact-Center Ingestion', organization: 'Meesho', outcome: '2 hours → 2 minutes', context: 'Replaced an overbuilt batch path with a lean, reusable ingestion pipeline while reducing CPU and memory use.' },
  { title: 'Supplier Ticketing Migration', organization: 'Meesho', outcome: 'Zero downtime · reported 10× lower cost', context: 'Migrated ticketing, automation, escalation, and reconciliation workflows across external platforms.' },
  { title: 'Unified Support Workspace', organization: 'Meesho', outcome: '20+ internal services integrated', context: 'Composed support workflows into one operational surface with resilience patterns around downstream services.' },
  { title: 'Commerce Integration Plugin', organization: 'Oracle', outcome: 'Reusable embedded integration flows', context: 'Built credential, field-mapping, synchronization, and monitoring experiences across Oracle products.' },
];
