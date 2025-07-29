import React from 'react';
import { Star, Shield, TrendingUp, ArrowRight } from 'lucide-react';

const BusinessTechSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-600 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                You do the business,<br />
                we'll handle the Tech<br />
                <span className="text-green-300 relative">
                  Infrastructure
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-300 to-transparent rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Ready to take your business to the next level? Explore how 
                Prismas Tech can help you innovate, grow, and succeed.
              </p>
            </div>

            {/* CTA Button with enhanced hover effects */}
            <button className="group relative bg-green-300 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-300/25 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-lg bg-white opacity-20 animate-ping"></div>
              </div>
            </button>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {/* Advanced Software Tools */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-300/10">
              {/* Hover blur background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className="bg-green-300/20 p-3 rounded-lg group-hover:bg-green-300/30 transition-colors duration-300">
                  <Star className="w-6 h-6 text-green-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">
                    Advanced Software Tools
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Streamline your workflows with our state-of-the-art software, tailored to meet 
                    your unique needs.
                  </p>
                </div>
              </div>
            </div>

            {/* 100% Secured */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10">
              {/* Hover blur background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className="bg-blue-400/20 p-3 rounded-lg group-hover:bg-blue-400/30 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    100% Secured
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    We take proactive steps to make sure your information and data are secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable Infrastructure */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10">
              {/* Hover blur background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-green-300/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className="bg-purple-400/20 p-3 rounded-lg group-hover:bg-purple-400/30 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-purple-400 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Build and grow with confidence using our robust, future-proof tech platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent"></div>
    </div>
  );
};

export default BusinessTechSection;