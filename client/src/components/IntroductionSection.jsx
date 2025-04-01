import React from 'react';

const IntroductionSection = () => {
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-zinc-900 rounded-xl p-8 md:p-12">
          <div className="flex justify-center mb-4">
            <div className="bg-black px-4 py-1 rounded-full flex items-center">
              <span className="bg-green-400 h-2 w-2 rounded-full mr-2"></span>
              <span className="text-xs font-medium tracking-wider text-gray-300">What’s Next for Prismas</span>
            </div>
          </div>
          
          <h2 className="text-center text-3xl md:text-4xl font-light mb-4">
            Stay Ahead with Our Vision
          </h2>
          
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our roadmap is a glimpse into the future of Prismas Tech. We’re constantly evolving to meet the
            needs of our clients, with upcoming features like enhanced analytics, expanded automation tools,
            and deeper integration with UNITE DAO. Check back regularly to see what’s on the horizon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;