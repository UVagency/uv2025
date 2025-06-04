import React from 'react';

interface Value {
  name: string;
  description: string;
}

interface CompanyValuesProps {
  values: Value[];
}

const CompanyValues: React.FC<CompanyValuesProps> = ({ values }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-portfolio-text mb-8">Our Values <span role="img" aria-label="love">🥰</span></h2>
      <div className="text-2xl text-portfolio-text/80 font-light space-y-6">
        {values.map((value) => (
          <div key={value.name}>
            <p className="font-semibold inline-block mr-2">{value.name}</p>
            <p className="inline">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValues; 