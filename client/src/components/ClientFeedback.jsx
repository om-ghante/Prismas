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
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative w-full py-10 bg-black overflow-hidden ">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-black "></div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-full max-w-full mx-auto">
          <div className="relative h-24 flex items-center">
            <div className="flex animate-scroll">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center mx-8"
                >
                  <img src={clientLogo} alt={`${client.name} Logo`} className="w-24 h-auto" />
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
