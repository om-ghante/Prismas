import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/prismas.svg';

const Footer = () => {
  return (
    <>
      {/* CSS for responsive footer */}
      <style>{`
        .footer-desktop {
          display: none;
        }
        .footer-mobile {
          display: block;
        }
        @media (min-width: 768px) {
          .footer-desktop {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          .footer-mobile {
            display: none;
          }
        }
      `}</style>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Desktop Layout - 4 columns */}
          <div className="footer-desktop">

            {/* Column 1: Brand */}
            <div>
              <img src={logo} alt="Prismas Logo" className="w-24 h-24 mb-4" />
              <p className="text-gray-400 text-sm mb-4">
                Empowering businesses with cutting-edge technology solutions for the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/prismasco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/PrismasL80787" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/prismas.co/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white text-sm transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
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
                  <span className="text-sm">139/B, Bondrenagar, Kolhapur</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Subscribe */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 w-full text-sm text-white focus:outline-none focus:border-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-green-600 text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Layout - Single Column Stacked */}
          <div className="footer-mobile space-y-10">

            {/* Brand Section */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src={logo} alt="Prismas Logo" className="w-20 h-20" />
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-xs mx-auto">
                Empowering businesses with cutting-edge technology solutions for the digital age.
              </p>
              <div className="flex justify-center space-x-5">
                <a href="https://www.linkedin.com/company/prismasco" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://x.com/PrismasL80787" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Twitter size={22} />
                </a>
                <a href="https://www.instagram.com/prismas.co/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Facebook size={22} />
                </a>
              </div>
            </div>

            {/* Quick Links & Contact - 2 Column Grid on Mobile */}
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-base font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white text-sm transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-base font-semibold mb-3">Contact Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2 text-gray-400">
                    <Mail size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs break-all">prismas.organization@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-400">
                    <Phone size={14} className="text-green-500 flex-shrink-0" />
                    <span className="text-xs">+91 7071472143</span>
                  </li>
                  <li className="flex items-start space-x-2 text-gray-400">
                    <MapPin size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs">139/B, Bondrenagar, Kolhapur</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="text-center">
              <h3 className="text-base font-semibold mb-3">Subscribe</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex flex-col space-y-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 w-full text-sm text-white focus:outline-none focus:border-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-black font-semibold px-4 py-3 rounded-md hover:bg-green-600 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
            © 2025 Prismas. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
