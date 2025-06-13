import React, { useEffect } from 'react';
import { ProjectData } from '@/data/projectsData';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
//import { Badge } from '@/components/ui/badge';
//import { AwardIcon } from '@/components/AwardIcon';

interface ProjectHeaderProps {
  project: ProjectData;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const navigate = useNavigate();
  
  const handleClose = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="border-b border-portfolio-divider pb-6 mb-8">
        <div className="w-full flex flex-col items-center md:items-start">
          <div className="inline-flex flex-wrap items-center gap-2 md:gap-4">
            <button 
              onClick={handleClose}
              className="w-10 h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
            >
              <X size={18} />
            </button>
            <h1 className="text-4xl md:text-7xl font-bold text-portfolio-text">{project.name}</h1>
            <span className="project-year-tag text-sm md:text-base px-4 md:px-6 py-1 md:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
              {project.year}
            </span>
            {project.categories.map((category) => (
              <span key={category} className="project-category-tag text-sm md:text-base px-4 md:px-6 py-1 md:py-2 border rounded-full">
                {category}
              </span>
            ))}
            {project.comingSoon && (
              <span className="project-coming-soon-tag text-sm md:text-base px-4 md:px-6 py-1 md:py-2 border rounded-full bg-portfolio-highlight text-portfolio-bg">
                COMING SOOOOOON
              </span>
            )}
            {project.awardWinning && (
              <div className="relative inline-block">
                <span title="Award Winning Project">🏆</span>
              </div>
            )}
          </div>
          <p className="w-fit max-w-full mx-auto text-4xl text-portfolio-text/90 font-light leading-tight mt-6 text-center md:text-left">
            {project.description}
          </p>
        </div>
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
    </div>
  );
};

export default ProjectHeader;
