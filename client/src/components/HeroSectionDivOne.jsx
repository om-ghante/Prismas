import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';

const HeroSectionDivOne = () => {
  return (
    <div className="w-full bg-gray-950 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Main content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            You do the business,
            <br />
            we'll handle the money.
          </h1>
          
          <p className="text-gray-400 max-w-md">
            With the right credit card, you can improve your financial life 
            by building credit, earning rewards and saving money. But 
            with hundreds of credit cards on the market.
          </p>
          
          <button className="bg-green-300 hover:bg-cyan-600 text-gray-950  px-6 py-3 rounded-md font-medium transition-colors duration-200">
            Get Started
          </button>
        </div>
        
        {/* Right side - Features */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 p-3 rounded-full">
              <Star className="h-6 w-6 text-green-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Rewards</h3>
              <p className="text-gray-400 text-sm">
                The best credit cards offer some tantalizing 
                combinations of promotions and prizes.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 p-3 rounded-full">
              <ShieldCheck className="h-6 w-6 text-green-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">100% Secured</h3>
              <p className="text-gray-400 text-sm">
                We take proactive steps make sure your information 
                and transactions are secure.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="bg-gray-900 p-3 rounded-full">
              <ArrowRight className="h-6 w-6 text-green-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Balance Transfer</h3>
              <p className="text-gray-400 text-sm">
                A balance transfer credit card can save you a lot of 
                money in interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDivOne;