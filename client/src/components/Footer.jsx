import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/prismas.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-4">
        {/* Single row layout on desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Brand + Socials */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Prismas" className="w-7 h-7" />
              <span className="text-base font-semibold">Prismas</span>
            </div>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/prismasco" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={12} />
              </a>
              <a href="https://x.com/PrismasL80787" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors text-xs font-bold">
                𝕏
              </a>
              <a href="https://www.instagram.com/prismas.co/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={12} />
              </a>
              <a href="#" className="w-7 h-7 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={12} />
              </a>
            </div>
          </div>

          {/* Contact - inline on desktop */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Mail size={12} className="text-green-400" />
              prismas.organization@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone size={12} className="text-green-400" />
              +91 7071472143
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-green-400" />
              Kolhapur, MH
            </span>
          </div>

          {/* Newsletter - compact */}
          <form className="flex items-center justify-center md:justify-end gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-36 bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-400 text-black font-medium px-3 py-1.5 rounded text-xs">
              Subscribe
            </button>
          </form>

        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-500 text-xs mt-3 pt-3 border-t border-gray-800">
          © 2025 Prismas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
