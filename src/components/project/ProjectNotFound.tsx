
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNotFound: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg">
      <div className="max-w-[90%] mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-portfolio-text mb-6">Project Not Found</h1>
        <p className="text-xl text-portfolio-text/70 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="px-6 py-3 border border-portfolio-text text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors rounded-full"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectNotFound;
