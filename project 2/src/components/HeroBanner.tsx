import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    title: "Invest in India's Faith-Tech Revolution",
    subtitle: "Join the fastest-growing sector connecting spirituality with technology",
    description: "Be part of the ₹50,000 crore faith-tech ecosystem transforming how India connects with its spiritual heritage",
    cta: "Join as Investor"
  },
  {
    title: "Where Ancient Wisdom Meets AI Innovation", 
    subtitle: "Supporting startups that blend tradition with cutting-edge technology",
    description: "From AI-powered astrology to digital devotion platforms, invest in startups serving 1.4 billion believers",
    cta: "Explore Opportunities"
  },
  {
    title: "Faith-Driven Entrepreneurs Building Tomorrow",
    subtitle: "Backing mission-driven founders creating meaningful impact",
    description: "Partner with visionary entrepreneurs who understand both technology and India's spiritual DNA",
    cta: "Start Investing"
  }
];

export function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {banners[currentBanner].title}
            </h1>
            <p className="text-xl md:text-2xl text-orange-600 mb-4 font-medium">
              {banners[currentBanner].subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {banners[currentBanner].description}
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              {banners[currentBanner].cta}
            </button>
          </div>

          {/* Banner Navigation */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={prevBanner}
              className="bg-white/80 hover:bg-white text-orange-600 p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={nextBanner}
              className="bg-white/80 hover:bg-white text-orange-600 p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Banner Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBanner ? 'bg-orange-600' : 'bg-orange-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}