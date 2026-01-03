import React from 'react';
import clientLogo from '../assets/savant.png';

const clients = [
  { name: "TechCorp" },
  { name: "Innovate Inc." },
  { name: "ShopEasy" },
  { name: "BuildIt" },
  { name: "Global Solutions" }
];

const ClientFeedback = () => {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative w-full py-6 md:py-10 overflow-hidden">
      {/* Transparent background with gradient overlay to blend with hero */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-full max-w-full mx-auto overflow-hidden">
          <div className="relative h-16 md:h-24 flex items-center">
            <div className="flex animate-scroll">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center mx-4 md:mx-8 flex-shrink-0"
                >
                  <img src={clientLogo} alt={`${client.name} Logo`} className="w-16 md:w-24 h-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
