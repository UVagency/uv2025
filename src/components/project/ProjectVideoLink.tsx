
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectVideoLinkProps {
  show: boolean;
}

const ProjectVideoLink: React.FC<ProjectVideoLinkProps> = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className="border-t border-portfolio-divider pt-8 mb-24">
      <Link 
        to="#" 
        className="inline-flex items-center text-portfolio-text hover:text-portfolio-highlight transition-colors"
      >
        <span className="uppercase mr-2">Full Video</span>
        <span className="text-portfolio-highlight">👉</span>
      </Link>
    </div>
  );
};

export default ProjectVideoLink;
