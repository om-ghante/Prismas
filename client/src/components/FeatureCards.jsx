import React from 'react';

const FeatureCards = () => {
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with green dot */}
        <div className="flex justify-center mb-6">
          <div className="bg-black px-4 py-1 rounded-full flex items-center">
            <span className="bg-green-400 h-2 w-2 rounded-full mr-2"></span>
            <span className="text-xs font-medium tracking-wider text-gray-300">WHAT YOU'LL GET</span>
          </div>
        </div>
        
        {/* Main heading */}
        <h2 className="text-center text-3xl md:text-4xl font-light mb-12 max-w-2xl mx-auto">
          We resolve problems associated with creative procedures.
        </h2>
        
        {/* Top row of cards - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 - Cost effective solution */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col">
            <div className="bg-zinc-800 rounded-xl p-4 mb-6 w-full">
              <div className="text-green-400 mb-1 text-sm">Growth</div>
              <div className="flex items-end h-20 space-x-1">
                {[4, 6, 5, 8, 3, 7, 5, 9, 4, 6, 8, 5, 7, 9].map((height, index) => (
                  <div 
                    key={index} 
                    className="bg-green-400 w-3 rounded-sm" 
                    style={{ height: `${height * 8}px` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Nov 10</span>
                <span>Nov 11</span>
                <span>Today</span>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Cost effective solution</h3>
            <p className="text-gray-400 text-sm">
              Get high-quality design work at a fraction of the cost.
            </p>
          </div>
          
          {/* Card 2 - Tailor-made design */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col">
            <div className="bg-zinc-800 rounded-xl p-4 mb-6 w-full flex justify-center">
              <div className="bg-black rounded-xl p-4 flex items-center space-x-4 w-full">
                <div className="bg-black rounded-full p-2">
                  <div className="bg-yellow-400 text-black p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0110 2v5a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 01.7-.954l6-2a1 1 0 011.3.954z" clipRule="evenodd" />
                      <path d="M10.414 3l1.293 1.293a1 1 0 01-1.414 1.414L9 4.414 7.707 5.707a1 1 0 01-1.414-1.414L7.586 3 6.293 1.707a1 1 0 011.414-1.414L9 1.586l1.293-1.293a1 1 0 111.414 1.414L10.414 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="bg-yellow-400 h-2 w-2 rounded-full mr-1"></span>
                    <span className="text-xs text-gray-300">NEW</span>
                  </div>
                  <div className="text-white text-sm">Latest design</div>
                  <div className="text-gray-500 text-xs">Today, 11:50</div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Tailor-made design</h3>
            <p className="text-gray-400 text-sm">
              We've got the expertise to make your vision a reality.
            </p>
          </div>
          
          {/* Card 3 - Scalable as you grow */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col">
            <div className="bg-zinc-800 rounded-xl p-4 mb-6 w-full flex justify-center">
              <div className="relative w-full h-32">
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  <path 
                    d="M0,80 Q25,80 50,70 T100,60 T150,40 T200,10" 
                    fill="none" 
                    stroke="#4ade80" 
                    strokeWidth="2"
                  />
                  <circle cx="150" cy="40" r="6" fill="#4ade80" />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                  <span>-15</span>
                  <span>0</span>
                  <span>+15</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Scalable as you grow</h3>
            <p className="text-gray-400 text-sm">
              We're ready to meet your evolving needs.
            </p>
          </div>
        </div>
        
        {/* Bottom row of cards - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 4 - Workflow integration */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col">
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-xl font-medium">Workflow integration</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Seamlessly connect all your existing apps.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div className="bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center">
                  <span className="text-xl">📝</span>
                </div>
                <div className="bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center">
                  <span className="text-xl">🔄</span>
                </div>
                <div className="bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 5 - Collaborate real-time */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col">
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-xl font-medium">Collaborate real-time</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Seamlessly connect all your existing apps.
                </p>
              </div>
              <div className="relative">
                {/* Circle avatars for collaboration */}
                <div className="w-14 h-14 rounded-full bg-red-500 border-4 border-zinc-900 absolute right-12 top-0 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-yellow-500 border-4 border-zinc-900 absolute right-8 top-0 flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-blue-500 border-4 border-zinc-900 absolute right-4 top-0 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-green-500 border-4 border-zinc-900 absolute right-0 top-0 flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <div className="absolute right-4 top-12 bg-white text-black text-xs py-1 px-3 rounded-full">
                  Prismas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
