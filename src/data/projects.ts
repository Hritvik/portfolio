import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'agentless-support-automation',
    name: 'Agentless Support Automation Platform',
    desc: 'Built and own an automated supplier-support resolution platform that converts business-owned SOPs into configurable backend workflows and GenAI-assisted resolution.',
    type: 'backend',
    org: 'meesho',
    period: '2026 - Present',
    impact: 'Expanded automated support coverage to 60% of supplier ticket categories while reducing human-agent workload, improving resolution speed, and lowering support cost.',
    scope: 'SOP-driven workflows, MVEL rules, Kafka fan-out/fan-in, MongoDB processing contexts, retries, DLQs, replay, stalled-ticket recovery',
    tags: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'MVEL', 'FastAPI', 'GenAI']
  },
  {
    id: 'data-orchestrator',
    name: 'Config-Driven Data Orchestrator',
    desc: 'Designed a config-driven API-composition service where internal APIs and fields are modeled as dependencies and executed without new flow-specific code.',
    type: 'platform',
    org: 'meesho',
    period: '2026 - Present',
    impact: 'Enabled configuration-only onboarding for new supplier-support categories through a Claude skill-driven workflow.',
    scope: 'API composition architecture, dependency modeling, concurrency, fan-out, response stitching, implementation mentorship',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'API Design', 'Concurrency', 'Platform Architecture']
  },
  {
    id: 'sx-gen-ai-platform',
    name: 'Shared GenAI Platform Services',
    desc: 'Built production GenAI platform services used primarily by Agentless: intent classification, response generation, LLM routing, prompt registry, endpoint configuration, and evaluation.',
    type: 'genai',
    org: 'meesho',
    period: '2026 - Present',
    impact: 'Moved model, prompt, routing, traffic-split, deployment, and evaluation changes into configurable platform primitives instead of scattered application code.',
    scope: 'FastAPI services, model/deployment registries, prompt templates, route plans, deterministic traffic splits, Prometheus/Grafana, Terraform-backed Azure OpenAI operations',
    tags: ['FastAPI', 'Python', 'Azure OpenAI', 'MongoDB', 'Redis', 'Terraform', 'Prometheus']
  },
  {
    id: 'support-chatbot-escalation',
    name: 'Support Chatbot Escalation Reduction',
    desc: 'Improved an earlier isolated Support Chatbot system across FAQ retrieval, model routing, prompts, evaluation, fallback policy, UI flows, and order/API context.',
    type: 'genai',
    org: 'meesho',
    period: '2024',
    impact: 'Reduced chatbot escalation to human agents from 25% to about 10%, with a low of 8%.',
    scope: 'Failure taxonomy, backend instrumentation, Grafana dashboards, Metabase analysis, agent-loop response generation',
    tags: ['GenAI', 'Python', 'Grafana', 'Metabase', 'Evaluation', 'Prompt Systems']
  },
  {
    id: 'genesys-ingestion',
    name: 'Genesys Call Data Ingestion',
    desc: 'Reworked call-record ingestion by replacing an overbuilt Spring Batch flow with a lean reusable pipeline for CSV processing and downstream analytics.',
    type: 'data',
    org: 'meesho',
    period: '2024',
    impact: 'Cut runtime from 2 hours to 2 minutes while reducing CPU and memory usage.',
    scope: 'Batch ingestion, partner data, analytics enablement',
    tags: ['Spring Batch', 'Java', 'Data Pipeline', 'CSV', 'Analytics']
  },
  {
    id: 'supplier-ticketing-migration',
    name: 'Supplier Ticketing Migration',
    desc: 'Migrated supplier ticketing, automations, escalations, and reconciliation workflows from FreshDesk to Kapture.',
    type: 'backend',
    org: 'meesho',
    period: '2023',
    impact: 'Delivered zero-downtime migration with reported 10x cost reduction.',
    scope: 'Migration planning, automation rollout, integration coverage',
    tags: ['Java', 'Spring Boot', 'Migration', 'Kapture', 'FreshDesk']
  },
  {
    id: 'support-dashboard',
    name: 'Unified Agent Support Dashboard',
    desc: 'Integrated internal services into a central support workflow so agents could resolve customer/supplier issues from one place.',
    type: 'backend',
    org: 'meesho',
    period: '2022',
    impact: 'Integrated 20+ internal services and reduced operational friction for support teams.',
    scope: 'CRM workflows, service integration, resilience patterns',
    tags: ['Java', 'Feign', 'Circuit Breaker', 'CRM', 'Service Integration']
  },
  {
    id: 'vca-sale-readiness',
    name: 'VCA Sale Readiness & Resource Optimization',
    desc: 'Prepared GenAI support systems for sale-period traffic across model providers, Azure deployments, vendor dependencies, and internal support workflows.',
    type: 'platform',
    org: 'meesho',
    period: '2024',
    impact: 'Load tested 5x projected traffic, supported zero downtime, and helped reduce pod needs from 35 cores / 70 GB to 21 cores / 40 GB.',
    scope: 'Capacity planning, LLM route reliability, production debugging, cost optimization',
    tags: ['OpenAI', 'Azure', 'Load Testing', 'Grafana', 'Reliability', 'Cost Optimization']
  },
  {
    id: 'llm-routing-ops',
    name: 'LLM Routing & Operations Layer',
    desc: 'Designed operational controls for provider-agnostic LLM calls: model/deployment registries, weighted route plans, deterministic traffic splits, cache refreshes, and dashboard-led incident routing.',
    type: 'platform',
    org: 'meesho',
    period: '2026',
    impact: 'Enabled LLM behavior changes through registry/config updates instead of code releases, with route-plan validation and metrics around every selection.',
    scope: 'Model bridge, runtime traffic control, cache coherence, Prometheus/Grafana observability, Azure deployment management',
    tags: ['Route Plans', 'Traffic Splits', 'Prometheus', 'Grafana', 'Azure AI Foundry', 'OpenAPI']
  },
  {
    id: 'lossless-event-platform',
    name: 'Lossless Event Processing Design',
    desc: 'Designed a reusable event-processing framework for ordered processing, idempotency, pause/play controls, retries, replay, and degradation handling.',
    type: 'platform',
    org: 'meesho',
    period: '2024',
    impact: 'Created a platform direction for safer event-driven workflows and reusable listener patterns.',
    scope: 'System design, event reliability, runtime controls',
    tags: ['Kafka', 'Redis', 'Idempotency', 'Retries', 'System Design']
  },
  {
    id: 'oracle-commerce-plugin',
    name: 'Oracle Commerce Integration Plugin',
    desc: 'Built embeddable integration-plugin flows for credentials, field mapping, sync initiation, and sync monitoring across Oracle products.',
    type: 'backend',
    org: 'oracle',
    period: '2021',
    impact: 'Improved setup and monitoring paths for product-to-product sync workflows.',
    scope: 'Full-stack integration UI, enterprise commerce workflows',
    tags: ['Oracle Visual Builder', 'JavaScript', 'Knockout', 'Integration']
  },
  {
    id: 'jio-analytics-stack',
    name: 'Jio Analytics & Cluster Operations Stack',
    desc: 'Built Java/Python services over Elasticsearch, Kafka, and Spark for computation, forecasting, monitoring, and business-intelligence outputs.',
    type: 'data',
    org: 'jio',
    period: '2018 - 2021',
    impact: 'Processed large-scale operational data and improved cluster monitoring, HA, and task execution workflows.',
    scope: 'Search analytics, Spark jobs, forecasting, cluster operations',
    tags: ['Java', 'Python', 'Elasticsearch', 'Kafka', 'Spark']
  },
  {
    id: 'survey-call-pipelines',
    name: 'Survey & Call Metadata Pipelines',
    desc: 'Built ingestion pipelines for external survey responses and call metadata into analytics workflows, replacing manual MIS processes.',
    type: 'data',
    org: 'meesho',
    period: '2022',
    impact: 'Improved data quality and reporting visibility for support/product teams.',
    scope: 'External APIs, low-rate-limit handling, dashboards, data lake workflows',
    tags: ['Spring Boot', 'Kafka', 'Metabase', 'Data Lake', 'Partner APIs']
  }
];
