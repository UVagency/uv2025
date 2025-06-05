import React from 'react';

interface Award {
  name: string;
  detail: string;
}

interface CompanyAwardsProps {
  awards: Award[];
}

const CompanyAwards: React.FC<CompanyAwardsProps> = ({ awards }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-portfolio-text mb-8">Awards & Recognition <span role="img" aria-label="trophy">🏆</span></h2>
      <div className="text-2xl text-portfolio-text/80">
        {awards.map((award, index) => (
          <p key={index}><span className="font-bold">{award.name}</span> <span className="font-light">{award.detail}</span></p>
        ))}
      </div>
    </div>
  );
};

export default CompanyAwards; 