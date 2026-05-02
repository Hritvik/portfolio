export type ProjectType = 'backend' | 'frontend' | 'android';
export type Organization = 'personal' | 'org';

export interface Project {
  id: string;
  name: string;
  desc: string;
  type: ProjectType;
  org: Organization;
  tags: string[];
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

export interface DiagramData {
  id: string;
  name: string;
  nodes: any[];
  edges: any[];
}

export type Section = 'projects' | 'blog' | 'about' | 'contact';
