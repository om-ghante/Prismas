import React, { useState } from 'react';
import { Play } from 'lucide-react';
import FloatingNodes from './FloatingNodes';

const TechInfrastructureHero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Subtle star/dot background overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full w-px h-px"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        {/* Centered Content */}
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Build Tech <span className='text-green-300'>Infrastructure</span><br />
            for the Future of Business
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-xl leading-relaxed mx-auto">
            At Prismas Tech, we deliver cutting-edge solutions designed to transform your business and drive
            success in a digital world. Our mission is to simplify complex challenges with intuitive, powerful, and
            scalable technology
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex max-w-md mb-4 mx-auto">
            <div className="relative flex w-full">
              <input
                type="email"
                placeholder="contact@prismas.tech"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-green-300 rounded-l px-4 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:bg-opacity-20"
                required
              />
              <button
                type="submit"
                className="bg-green-300 hover:bg-green-400 rounded-r px-6 py-3 transition-colors duration-300"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
          
          <p className="text-white text-xs opacity-80">
            We'll never share your email address
          </p>
        </div>

      </div>
      
      {/* Floating Nodes Animation */}
      <div className="absolute inset-0 z-0">
        <FloatingNodes />
      </div>
    </div>
  );
};

export default TechInfrastructureHero;
