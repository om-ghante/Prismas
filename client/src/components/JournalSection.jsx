import React from 'react';

const JournalSection = () => {
  return (
    <div className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-end mb-4">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium">
              SEE MORE →
            </a>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Journal
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our favorite stories about innovation and opportunities for you to get 
            involved in shaping the future of technology.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Article 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cloud Infrastructure"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
            
            <div className="text-sm text-gray-500 mb-2 font-medium">
              JANUARY 15, 2025
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
              An Unforgettable Journey
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              If you only have one day to explore cloud infrastructure 
              and you want to make the most out of it.
            </p>
          </div>

          {/* Article 2 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Innovation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
            
            <div className="text-sm text-gray-500 mb-2 font-medium">
              JANUARY 12, 2025
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
              Symphonies in Code
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Building AI solutions from the ground up, you 
              arrive at innovation even before landing on solid ground.
            </p>
          </div>
        </div>

        {/* All Posts Link */}
        <div className="text-center">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
            ALL POSTS →
          </a>
        </div>
      </div>

      {/* Bottom Background Image Section */}
      <div className="mt-20">
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-3xl md:text-4xl font-bold">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white text-lg mt-4 opacity-90">
                Let's build the future together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalSection;