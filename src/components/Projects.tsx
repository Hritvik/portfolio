import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    
    // Check if filter is a project type
    if (['backend', 'frontend', 'android'].includes(activeFilter)) {
      return projects.filter(project => project.type === activeFilter);
    }
    
    // Check if filter is an organization
    if (['personal', 'org'].includes(activeFilter)) {
      return projects.filter(project => project.org === activeFilter);
    }
    
    return projects;
  }, [activeFilter]);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'android', label: 'Android' },
    { id: 'personal', label: 'Personal' },
    { id: 'org', label: 'Organization' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-subtitle">// portfolio</div>
        <h2 className="section-title">Projects</h2>
        
        <div className="filter-container">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
