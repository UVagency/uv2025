import React from 'react';

interface ProjectFeatureTextProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
}

const ProjectFeatureText: React.FC<ProjectFeatureTextProps> = ({ children, author, role }) => {
  return (
    <div className="bg-portfolio-bg px-4 py-16 sm:px-8">
      <figure className="max-w-6xl mx-auto">
        <blockquote>
          <div className="text-xl sm:text-[2.25rem] md:text-[3rem] leading-[1.2] font-light text-portfolio-text/90 italic relative mb-8">
            <span className="absolute -left-4 sm:-left-8 -top-4 sm:-top-8 text-4xl sm:text-8xl text-portfolio-accent opacity-100 select-none">"</span>
            {children}
            <span className="absolute bottom-0 right-0 text-4xl sm:text-8xl text-portfolio-accent opacity-100 translate-x-2 sm:translate-x-4 select-none">"</span>
          </div>
        </blockquote>
        {(author || role) && (
          <figcaption className="text-lg text-portfolio-text/50 font-light mt-4 text-right">
            {author && <span className="font-medium text-portfolio-text/90">{author}</span>}
            {role && <span className="ml-2">{role}</span>}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default ProjectFeatureText;
