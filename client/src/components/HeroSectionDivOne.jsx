import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';

const HeroSectionDivOne = () => {
  return (
    <div className="w-full bg-gray-950 text-white py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Main content - Centered on mobile */}
        <div className="text-center md:text-left md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left side - Main content */}
          <div className="space-y-6 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              You do the business,
              <br />
              we'll handle the Tech
              <br />
              <span className='text-green-300'>Infrastructure</span>
            </h1>

            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Ready to take your business to the next level? Explore how Prismas Tech can help you innovate,
              grow, and succeed.
            </p>

            <button className="bg-green-300 hover:bg-green-400 text-gray-950 px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Contact Us
            </button>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6 md:space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 text-left bg-gray-900/30 p-4 rounded-xl md:bg-transparent md:p-0">
              <div className="bg-gray-900 p-3 rounded-full flex-shrink-0">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-green-300" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">Advanced Software Tools</h3>
                <p className="text-gray-400 text-sm">
                  Streamline your workflows with our state-of-the-art software,
                  tailored to meet your unique needs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 text-left bg-gray-900/30 p-4 rounded-xl md:bg-transparent md:p-0">
              <div className="bg-gray-900 p-3 rounded-full flex-shrink-0">
                <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-green-300" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">100% Secured</h3>
                <p className="text-gray-400 text-sm">
                  We take proactive steps make sure your information
                  and data are secure.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 text-left bg-gray-900/30 p-4 rounded-xl md:bg-transparent md:p-0">
              <div className="bg-gray-900 p-3 rounded-full flex-shrink-0">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-green-300" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">Scalable Infrastructure</h3>
                <p className="text-gray-400 text-sm">
                  Build and grow with confidence using our robust, future-proof tech
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDivOne;