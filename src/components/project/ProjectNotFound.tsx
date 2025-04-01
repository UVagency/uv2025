
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const ProjectNotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navbar />
      <div className="max-w-[90%] mx-auto py-24 text-center">
        <h1 className="text-4xl font-bold text-portfolio-text mb-4">Project Not Found</h1>
        <Link to="/" className="text-portfolio-highlight hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProjectNotFound;
