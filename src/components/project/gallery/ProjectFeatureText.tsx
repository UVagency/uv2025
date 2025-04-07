
import React from 'react';

interface ProjectFeatureTextProps {
  children: React.ReactNode;
}

const ProjectFeatureText: React.FC<ProjectFeatureTextProps> = ({ children }) => {
  return (
    <div className="bg-portfolio-bg px-4 py-8 sm:px-8">
      <p className="text-[2.25rem] md:text-[3rem] leading-[1.2] font-light text-portfolio-text/90 max-w-6xl">
        {children}
      </p>
    </div>
  );
};

export default ProjectFeatureText;
