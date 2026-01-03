import React from 'react';
import { Zap, MessageCircle, ShoppingCart, Shield, Users, Network, ArrowRight } from 'lucide-react';

const FeatureCards = () => {
  // Keeping the original content as requested, but will apply the new design.
  const features = [
    {
      icon: Zap,
      title: "AI Powered Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI that learns from your patterns and optimizes processes",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing Software",
      description: "Reach your customers directly with powerful WhatsApp marketing tools and automated messaging campaigns",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete e-commerce solution with inventory management, payment processing, and order fulfillment",
    },
    {
      icon: Shield,
      title: "CRM",
      description: "Comprehensive customer relationship management system to track leads, manage contacts, and boost sales",
    },
    {
      icon: Users,
      title: "ERP",
      description: "Enterprise resource planning system to streamline operations, finance, and human resources management",
    },
    {
      icon: Network,
      title: "Software Ecosystem",
      description: "Integrated software ecosystem that connects all your business tools and processes for seamless workflow management",
    }
  ];

  return (
    <div className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header (Keeping original header) */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <span className="text-green-300 text-sm font-medium tracking-wider">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="text-green-300">succeed</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Powerful features designed to help businesses grow and thrive in the digital age
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-green-500/20 rounded-2xl p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/10 mb-6">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Learn More Link */}
              {feature.title === "WhatsApp Marketing Software" && (
                <a href="#" className="flex items-center mt-6 text-green-400 font-semibold text-sm hover:text-green-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
