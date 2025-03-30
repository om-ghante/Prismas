import React from 'react';
import appStore from '../assets/appstore.svg'; // You'll need these images
import googlePlay from '../assets/playstore.svg'; // You'll need these images

const HeroSectionDivTwo = () => {
  return (
    <div className="w-full bg-gray-950 bg-gradient-to-b from-purple-900/20 to-gray-950 py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Transaction cards */}
        <div className="relative w-full md:w-1/2">
          {/* Main PayPal Card */}
          <div className="bg-gray-800 rounded-xl p-4 w-64 mx-auto md:mx-0 md:ml-auto relative z-20 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded-full">
                <div className="bg-blue-500 h-6 w-6 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">P</span>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Paypal</p>
                <p className="text-gray-400 text-xs">Checkout</p>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3 mb-3">
              <p className="text-gray-400 text-xs">Total</p>
              <p className="text-white font-bold">$425.25</p>
            </div>
            
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg text-sm font-medium">
              Make Payment
            </button>
          </div>
          
          {/* Transaction History Card */}
          <div className="bg-gray-800 rounded-xl p-4 w-60 absolute top-16 md:top-20 left-0 md:left-4 z-10 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <p className="text-white font-medium text-sm">Last Transaction</p>
            </div>
            
            {/* Transaction 1 */}
            <div className="bg-gray-700 rounded-lg p-3 mb-2">
              <div className="flex items-start gap-3">
                <div className="bg-pink-500 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">D</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-white text-sm font-medium">Dribbble Pro</p>
                    <p className="text-white text-sm font-medium">-$250.93</p>
                  </div>
                  <p className="text-gray-400 text-xs">27 March 2021</p>
                </div>
              </div>
            </div>
            
            {/* Transaction 2 */}
            <div className="bg-gray-700 rounded-lg p-3 mb-2">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">N</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-white text-sm font-medium">Netflix</p>
                    <p className="text-white text-sm font-medium">-$250.93</p>
                  </div>
                  <p className="text-gray-400 text-xs">23 March 2021</p>
                </div>
              </div>
            </div>
            
            {/* Transaction 3 */}
            <div className="bg-gray-700 rounded-lg p-3 mb-2">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-white text-sm font-medium">Manulife Cash</p>
                    <p className="text-white text-sm font-medium">-$250.93</p>
                  </div>
                  <p className="text-gray-400 text-xs">23 March 2021</p>
                </div>
              </div>
            </div>
            
            {/* Success Message */}
            <div className="bg-green-500/10 border border-green-500 rounded-lg p-2 flex items-center gap-2 mt-4">
              <div className="bg-green-500 h-4 w-4 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-green-500 text-xs">Great! Your Payment Is Successfully.</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Easily control your <br />
            billing & invoicing.
          </h2>
          
          <p className="text-gray-400 max-w-md">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-block">
              <img src={appStore} alt="App Store" className="w-40 h-auto" />
            </a>
            <a href="#" className="inline-block">
              <img src={googlePlay} alt="Google Play" className="w-40 h-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDivTwo;