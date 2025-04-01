
import React from 'react';
import { ProjectData } from '@/data/projectsData';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectHeaderProps {
  project: ProjectData;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="border-b border-portfolio-divider pb-6 mb-12">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="w-10 h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors">
          <X size={18} />
        </Link>
        
        <h1 className="text-7xl font-bold text-portfolio-text">{project.name}</h1>
        
        <span className="project-year-tag text-base px-6 py-2 rounded-full">
          {project.year}
        </span>
        
        {project.categories.map((category) => (
          <span key={category} className="project-category-tag text-base px-6 py-2 border rounded-full">
            {category}
          </span>
        ))}
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
