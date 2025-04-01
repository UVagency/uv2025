
import React from 'react';
import { ProjectData } from '@/data/projectsData';

interface ProjectHeaderProps {
  project: ProjectData;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="border-b border-portfolio-divider pb-6 mb-12">
      <div className="flex items-center mb-4">
        <h1 className="text-6xl font-bold text-portfolio-text mr-4">{project.name}</h1>
        <div className="flex flex-wrap gap-2">
          <span className="project-year-tag">
            {project.year}
          </span>
          
          {project.categories.map((category) => (
            <span key={category} className="project-category-tag">
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-4xl text-portfolio-text/90 font-light leading-tight max-w-4xl">
        {project.description}
      </p>
      
      {project.client && (
        <div className="mt-4 text-portfolio-text/70">
          <span className="font-semibold">Client:</span> {project.client}
        </div>
      )}
      
      {project.songTitle && (
        <div className="mt-2 text-portfolio-text/70">
          <span className="font-semibold">Song:</span> "{project.songTitle}"
        </div>
      )}
    </div>
  );
};

export default ProjectHeader;
