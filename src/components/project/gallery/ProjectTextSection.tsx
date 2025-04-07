
import React from 'react';

interface ProjectTextSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectTextSection: React.FC<ProjectTextSectionProps> = ({ 
  children,
  className = ""
}) => {
  return (
    <div className={`text-3xl mb-8 text-portfolio-text/80 font-light ${className}`}>
      {children}
    </div>
  );
};

export default ProjectTextSection;
