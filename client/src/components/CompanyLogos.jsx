import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Headspace', logo: '🔘' }, // Replace with actual logo or import
    { name: 'Shopify', logo: '🛒' },   // Replace with actual logo or import
    { name: 'Volvo', logo: '⭕' },     // Replace with actual logo or import
    { name: 'Mobbin', logo: '〰️' },   // Replace with actual logo or import
    { name: 'Pinterest', logo: '📌' }, // Replace with actual logo or import
    { name: 'Duolingo', logo: '🦉' },  // Replace with actual logo or import
  ];

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl mb-12 text-gray-200 font-light">
          Already chosen by the leaders
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl mr-2">{company.logo}</span>
              <span className="text-gray-300">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;