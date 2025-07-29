import React from 'react';
import logo from '../assets/prismas.svg';

const NavigationBar = () => {
  const navLinks = ["Home", "About", "Services", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Prismas Logo" className="w-9 h-9" />
            <span className="text-white font-bold text-xl">Prismas</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">About Us</a>
            <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Services</a>
            <a href="#testimonials" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
