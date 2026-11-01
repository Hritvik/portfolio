import type { Edge, Node } from 'reactflow';

export type ProjectType = 'genai' | 'backend' | 'data' | 'platform';
export type Organization = 'meesho' | 'oracle' | 'jio';

export interface Project {
  id: string;
  name: string;
  desc: string;
  type: ProjectType;
  org: Organization;
  tags: string[];
  period: string;
  impact: string;
  scope: string;
  icon?: string;
  diagram?: string; // React Flow diagram ID
  github?: string;
  live?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface CaseStudyProof {
  value: string;
  label: string;
}

export interface EvolutionStep {
  phase: string;
  title: string;
  description: string;
}

export interface HardProblem {
  title: string;
  problem: string;
  decision: string;
  result: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  organization: 'Meesho' | 'Reliance Jio';
  period: string;
  kicker: string;
  summary: string;
  outcome: string;
  ownership: string;
  ownershipBoundary: string;
  proof: CaseStudyProof[];
  evolution: EvolutionStep[];
  architecture: string[];
  hardProblems: HardProblem[];
  evidence: string[];
  technologies: string[];
}

export interface SupportingWin {
  title: string;
  organization: string;
  outcome: string;
  context: string;
}

export interface DiagramData {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
}

export type Section = 'home' | 'work' | 'about' | 'contact';
