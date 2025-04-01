import React, { useState } from 'react';

const TechInfrastructureHero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="w-full bg-black relative py-16">
      {/* Subtle star/dot background */}
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
      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold italic mb-4 leading-tight">
          We Build Tech <span className='text-green-300'>Infrastructure</span><br />
          for the Future of Business
        </h1>
        
        <p className="text-gray-300 text-md mb-12">
          At Prismas Tech, we deliver cutting-edge solutions designed to transform your business and drive
          success in a digital world. Our mission is to simplify complex challenges with intuitive, powerful, and
          scalable technology
        </p>
        
        <div className="mb-2">
          
          <form onSubmit={handleSubmit} className="flex justify-center max-w-md mx-auto">
            <div className="relative flex w-full max-w-md">
              <input
                type="email"
                placeholder="contact@prismas.tech"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-green-300 rounded-l px-4 py-2 text-sm text-green-300 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-green-300 rounded-r px-4 py-2"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>          
          <p className="text-white text-xs mt-4">
            We'll never share your email address
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechInfrastructureHero;