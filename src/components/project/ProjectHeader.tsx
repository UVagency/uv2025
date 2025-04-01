
import React from 'react';
import { ProjectData } from '@/data/projectsData';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeaderProps {
  project: ProjectData;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const navigate = useNavigate();
  
  const handleClose = () => {
    navigate('/');
  };
  
  return (
    <div className="border-b border-portfolio-divider pb-6 mb-12">
      <div className="flex items-center mb-6">
        <button 
          onClick={handleClose}
          className="w-10 h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors mr-4"
        >
          <X size={18} />
        </button>
        
        <h1 className="text-7xl font-bold text-portfolio-text">{project.name}</h1>
        
        <div className="flex items-center ml-auto gap-2">
          <span className="project-year-tag text-base px-6 py-2 rounded-full">
            {project.year}
          </span>
          
          {project.categories.map((category) => (
            <span key={category} className="project-category-tag text-base px-6 py-2 border rounded-full">
              {category}
            </span>
          ))}
          
          {project.comingSoon && (
            <span className="project-coming-soon-tag text-base px-6 py-2 border rounded-full bg-portfolio-highlight text-portfolio-bg">
              COMING SOOOOOON
            </span>
          )}
          
          {project.awardWinning && (
            <div className="relative inline-block ml-2">
              <span title="Award Winning Project">🏆</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-4xl text-portfolio-text/90 font-light leading-tight max-w-4xl">
        {project.description}
      </p>
      
      <div className="mt-6 flex flex-wrap gap-4">
        {project.client && (
          <div className="text-portfolio-text/70">
            <span className="font-semibold">Client:</span> {project.client}
          </div>
        )}
        
        {project.songTitle && (
          <div className="text-portfolio-text/70">
            <span className="font-semibold">Song:</span> "{project.songTitle}"
          </div>
        )}
        
        {project.emojis && (
          <div className="text-portfolio-text/70 flex items-center">
            <span className="font-semibold mr-2">Vibes:</span>
            {project.emojis.map((emoji, index) => (
              <span key={index} className="text-2xl mx-1">{emoji}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;
