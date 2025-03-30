import React from 'react';
import prismas from '../assets/prismas.svg'

const NavigationBar = () => {
  return (
    <nav className="bg-black w-full flex items-center justify-between px-4 py-4 ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={prismas} alt="!error" />
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-purple-300 hover:text-white">Home</a>
        <div className="relative group">
          <a href="#" className="text-white flex items-center">
            Products
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
        <a href="#" className="text-purple-300 hover:text-white">Roadmap</a>
        <a href="#" className="text-purple-300 hover:text-white">DAO</a>
        <a href="#" className="text-purple-300 hover:text-white">Whitepaper</a>
      </div>
    </nav>
  );
};

export default NavigationBar;