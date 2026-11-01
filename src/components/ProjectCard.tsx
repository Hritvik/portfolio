import React, { useState } from 'react';
import type { Project } from '../types';
import ArchitectureDiagram from './ArchitectureDiagram';
import { diagrams } from '../data/diagrams';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDiagram, setShowDiagram] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'genai':
        return 'genai-bg';
      case 'backend':
        return 'backend-bg';
      case 'data':
        return 'data-bg';
      case 'platform':
        return 'platform-bg';
      default:
        return 'backend-bg';
    }
  };

  const getDiagram = () => {
    if (!project.diagram) return null;
    return diagrams.find(d => d.id === project.diagram);
  };

  const handleCardClick = () => {
    if (project.live) {
      window.open(project.live, '_blank');
    } else if (project.github) {
      window.open(project.github, '_blank');
    }
  };

  const handleDiagramClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const diagram = getDiagram();
    if (diagram) {
      setShowDiagram(true);
    }
  };

  const diagram = getDiagram();

  return (
    <>
      <div className="project-card" onClick={handleCardClick}>
        <div className="project-header">
          <div className="project-type-org">
            <span className={`project-type-icon ${getTypeColor(project.type)}`} />
            <span className="project-type">{project.type}</span>
            <span className="project-org">{project.org}</span>
            <span className="project-org">{project.period}</span>
          </div>
          {diagram && (
            <button
              className="text-xs mono uppercase text-muted hover-opacity"
              onClick={handleDiagramClick}
              title="View Architecture"
            >
              Architecture
            </button>
          )}
        </div>

        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-proof">
          <div className="project-proof-label">Impact</div>
          <p>{project.impact}</p>
        </div>
        <div className="project-scope">{project.scope}</div>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {showDiagram && diagram && (
        <ArchitectureDiagram
          diagram={diagram}
          onClose={() => setShowDiagram(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
