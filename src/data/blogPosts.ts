import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'sx-genai-platform',
    title: 'Building a configurable GenAI support platform',
    excerpt: 'A case-study outline on intent detection, response generation, model routing, prompt registries, traffic splits, tenant-scoped CRUD, and operational dashboards.',
    date: '2026-05-29',
    category: 'Backend',
    readTime: '10 min'
  },
  {
    id: 'llm-route-plans',
    title: 'Route plans, traffic splits, and fallbacks for LLM systems',
    excerpt: 'Notes on changing model behavior without releases: deployment registries, deterministic bucketing, fallback validation, cache refreshes, and per-selection metrics.',
    date: '2026-05-29',
    category: 'Platform',
    readTime: '8 min'
  },
  {
    id: 'ticketing-sync',
    title: 'Designing reliable ticketing sync with retries and replay',
    excerpt: 'Notes on building external-platform sync with Kafka, MongoDB, DLQs, blocking retries, replay mechanisms, fallback topics, and reconciliation.',
    date: '2026-05-29',
    category: 'Systems',
    readTime: '8 min'
  },
  {
    id: 'batch-job-simplification',
    title: 'The underrated win: deleting accidental batch complexity',
    excerpt: 'A case-study outline from reducing a Genesys ingestion job from two hours to two minutes by replacing an overbuilt Spring Batch implementation.',
    date: '2026-05-29',
    category: 'Data',
    readTime: '6 min'
  },
  {
    id: 'lossless-events',
    title: 'What I want from a lossless event-processing platform',
    excerpt: 'A design note on idempotency, pause/play controls, ordered retries, replay, degradation handling, and reusable listeners.',
    date: '2026-05-29',
    category: 'Platform',
    readTime: '7 min'
  }
];
