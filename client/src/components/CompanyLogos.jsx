import React from 'react';
import savantLogo from '../assets/savant.png';

const CompanyLogos = () => {
  const logos = Array(20).fill({ name: 'Savant Academy', logo: savantLogo });

  return (
    <div className="w-full bg-black text-white py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {logos.map((company, index) => (
          <div key={index} className="inline-block mx-4">
            <img src={company.logo} alt={`${company.name} logo`} className="h-12" />
          </div>
        ))}
        {logos.map((company, index) => (
          <div key={index + logos.length} className="inline-block mx-4">
            <img src={company.logo} alt={`${company.name} logo`} className="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
