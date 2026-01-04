import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/prismas.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8">

          {/* Column 1: Brand and Socials */}
          <div>
            <img src={logo} alt="Prismas Logo" className="w-24 h-24 mb-4" />
            <p className="text-gray-400 mb-4 text-sm">
              Empowering businesses with cutting-edge technology solutions for the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/prismasco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500"><Linkedin size={20} /></a>
              <a href="https://x.com/PrismasL80787" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/prismas.co/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-500"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-green-500" />
                <span className="text-sm">prismas.organization@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-green-500" />
                <span className="text-sm">+91 7071472143</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="text-green-500 mt-1" />
                <span className="text-sm">139/B,Bondrenagar,Kolhapur</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4 text-sm">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 w-full text-sm text-white focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-green-600 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
          © 2025 Prismas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
