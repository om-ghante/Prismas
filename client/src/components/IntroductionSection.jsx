import React from 'react';

const IntroductionSection = () => {
  return (
    <div className="w-full bg-black text-white py-12 relative overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="group bg-zinc-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800/50 hover:border-green-300/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-300/10">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-xl border border-green-300/20 animate-pulse"></div>
          </div>

          <div className="flex justify-center mb-4 relative z-10">
            <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full flex items-center border border-gray-800/50 group-hover:border-green-300/30 transition-all duration-300">
              <span className="bg-green-400 h-2 w-2 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wider text-gray-300 group-hover:text-green-300 transition-colors duration-300">What's Next for Prismas</span>
            </div>
          </div>
          
          <h2 className="text-center text-3xl md:text-4xl font-light mb-4 group-hover:text-green-300 transition-colors duration-300 relative z-10">
            Stay Ahead with Our Vision
          </h2>
          
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
            Our roadmap is a glimpse into the future of Prismas Tech. We're constantly evolving to meet the
            needs of our clients, with upcoming features like enhanced analytics, expanded automation tools,
            and deeper integration with UNITE DAO. Check back regularly to see what's on the horizon.
          </p>

          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/5 to-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;