import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/prismas.svg';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Prismas Logo" className="w-9 h-9" />
            <span className="text-white font-bold text-xl">Prismas</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">About Us</a>
            <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Services</a>
            <a href="#testimonials" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-sm font-medium">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown - Compact */}
        {isMenuOpen && (
          <div className="mobile-dropdown mt-4 pb-4 border-t border-gray-800/50 pt-4 bg-black/95 rounded-lg">
            <div className="flex flex-col space-y-3 px-2">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-green-500 hover:bg-gray-800/50 transition-all duration-300 text-sm font-medium py-2 px-3 rounded">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-green-500 hover:bg-gray-800/50 transition-all duration-300 text-sm font-medium py-2 px-3 rounded">About Us</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-green-500 hover:bg-gray-800/50 transition-all duration-300 text-sm font-medium py-2 px-3 rounded">Services</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-green-500 hover:bg-gray-800/50 transition-all duration-300 text-sm font-medium py-2 px-3 rounded">Testimonials</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-green-500 hover:bg-gray-800/50 transition-all duration-300 text-sm font-medium py-2 px-3 rounded">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
