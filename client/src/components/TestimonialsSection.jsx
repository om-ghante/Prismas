import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      text: "Prismas transformed how our team works. We've increased productivity by 250% and our project delivery time has improved dramatically.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateCorp",
      text: "The AI automation features are game-changing. Tasks that used to take hours now happen automatically. It's like having an extra team member.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "PM, DesignStudio",
      text: "Best project management tool we've ever used. The interface is intuitive and the collaboration features keep our remote team perfectly synchronized.",
      avatar: "ER"
    },
  ];
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      5000 // 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full bg-black text-white py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Loved by teams <span className="text-green-300">worldwide</span></h2>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => resetTimeout()}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(
              () =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                ),
              5000
            );
          }}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full p-4">
                  <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-8 text-center h-full">
                    <p className="text-gray-300 text-lg italic leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-blue-400 rounded-full flex items-center justify-center text-black font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
