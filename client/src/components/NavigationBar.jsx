import React, { useState, useEffect, useRef } from "react";
import prismas from "../assets/prismas.svg";
import { Menu, X, ChevronDown } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-black w-full flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 relative z-10">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#">
          <img src={prismas} alt="Logo" className="w-18 h-auto" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links Container */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto md:items-center mt-4 md:mt-0`}
      >
        <a href="#" className="text-green-300 font-bold hover:text-white py-2 px-2 md:px-0 md:mr-6">
          Home
        </a>
        
        {/* Products Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-green-300 font-bold flex items-center py-2 px-2 md:px-0 md:mr-6 focus:outline-none cursor-pointer"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            Products
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`} 
            />
          </button>
          
          {/* Dropdown Menu */}
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute left-0 mt-1 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-2 z-20`}
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Product 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Product 2
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Product 3
            </a>
          </div>
        </div>

        <a href="#" className="text-green-300 font-bold hover:text-white py-2 px-2 md:px-0 md:mr-6">
          Services
        </a>
        <a href="#" className="text-green-300 font-bold hover:text-white py-2 px-2 md:px-0 md:mr-6">
          Team
        </a>
        <a href="#" className="text-green-300 font-bold hover:text-white py-2 px-2 md:px-0 md:mr-6">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;