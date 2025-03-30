import React from 'react';

const FeatureTags = () => {
  const features = [
    "Design workshops",
    "Workshops",
    "Trend reports",
    "Asset library",
    "Rollover hours",
    "Premium designers",
    "Multilingual support"
  ];
  
  return (
    <div className="w-full bg-black text-white pb-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-3">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 rounded-full px-4 py-2 flex items-center text-sm"
          >
            <span className="bg-green-400 h-2 w-2 rounded-full mr-2"></span>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTags;