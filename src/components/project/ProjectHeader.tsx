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
    <div className="max-w-[98vw] sm:max-w-[90%] mx-auto">
      <div className="border-b border-portfolio-divider pb-4 sm:pb-6 mb-4 sm:mb-8">
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
            <button
              onClick={handleClose}
              aria-label="Close"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
            <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text leading-tight break-words max-w-[90vw] sm:max-w-full">
              {project.name}
            </h1>
            <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
              {project.year}
            </span>
            {project.categories.map((category) => (
              <span key={category} className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                {category}
              </span>
            ))}
            {project.comingSoon && (
              <span className="project-coming-soon-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full bg-portfolio-highlight text-portfolio-bg">
                COMING SOOOOOON
              </span>
            )}
            {project.awardWinning && (
              <div className="relative inline-block">
                <span title="Award Winning Project">🏆</span>
              </div>
            )}
          </div>
          <p className="w-full max-w-[95vw] sm:max-w-full mx-auto text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6">
            {project.description}
          </p>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start">
          {project.client && (
            <div className="text-portfolio-text/70 text-xs sm:text-base">
              <span className="font-semibold">Client:</span> {project.client}
            </div>
          )}
          {project.songTitle && (
            <div className="text-portfolio-text/70 text-xs sm:text-base">
              <span className="font-semibold">Song:</span> "{project.songTitle}"
            </div>
          )}
          {project.emojis && (
            <div className="text-portfolio-text/70 flex items-center text-xs sm:text-base">
              <span className="font-semibold mr-2">Vibes:</span>
              {project.emojis.map((emoji, index) => (
                <span key={index} className="text-lg sm:text-2xl mx-1">{emoji}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
