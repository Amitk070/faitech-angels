import React, { useState, useEffect } from 'react';
import { FaithTechLogo } from './FaithTechLogo';

interface HackathonBanner {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  prize: string;
}

const hackathonBanners: HackathonBanner[] = [
  {
    id: 1,
    title: "Chhath Puja Tech Innovation Challenge",
    description: "Celebrate the ancient festival of Chhath Puja with innovative tech solutions that honor tradition while embracing the future. Join us in creating digital solutions that preserve and promote our cultural heritage.",
    image: "/images/chhath-puja-1.jpg",
    date: "November 15-17, 2024",
    prize: "₹2,00,000 Prize Pool"
  },
  {
    id: 2,
    title: "Faith Tech Startup Showcase",
    description: "Showcase your startup's potential to leading investors and industry experts in the Faith Tech ecosystem. Present your innovative solutions during this auspicious festival period.",
    image: "/images/chhath-puja-2.jpg",
    date: "November 18-20, 2024",
    prize: "Investment Opportunities"
  },
  {
    id: 3,
    title: "Digital Transformation for Bihar",
    description: "Build solutions that can transform Bihar's digital landscape and create lasting impact in the community. Honor the spirit of Chhath Puja by contributing to Bihar's technological advancement.",
    image: "/images/chhath-puja-3.jpg",
    date: "November 21-23, 2024",
    prize: "Government Partnership"
  }
];

export const ChhathPujaHackathon: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNominating, setIsNominating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hackathonBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hackathonBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hackathonBanners.length) % hackathonBanners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNominate = () => {
    setIsNominating(true);
    // Simulate form submission
    setTimeout(() => {
      setIsNominating(false);
      alert('Thank you for your nomination! We will contact you soon.');
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FaithTechLogo size="lg" className="mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">
              Chhath Puja Hackathon 2024
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in celebrating the festival of Chhath Puja with innovative technology solutions and startup showcases.
          </p>
        </div>

        {/* Sliding Banner */}
        <div className="relative mb-12">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {hackathonBanners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-full">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/70 to-yellow-800/60"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-4xl mx-auto px-8 text-white">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-white mb-2">{banner.title}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">HACKATHON</span>
                              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">TECH FEST</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xl mb-6 leading-relaxed text-white/90">{banner.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-8">
                            <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                              <svg className="w-6 h-6 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              <span className="text-lg font-semibold text-white">{banner.date}</span>
                            </div>
                            <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                              <svg className="w-6 h-6 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-lg font-semibold text-white">{banner.prize}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-yellow-300">FAITH TECH</div>
                            <div className="text-sm text-white/80">Angel Investor Network</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {hackathonBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hackathon Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Duration</h4>
                  <p className="text-gray-600">3 days of intensive development and networking</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eligibility</h4>
                  <p className="text-gray-600">Startups, developers, and entrepreneurs from Bihar and neighboring states</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mentorship</h4>
                  <p className="text-gray-600">Guidance from industry experts and successful entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prizes & Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">1st Place</h4>
                  <p className="text-gray-600">Cash Prize + Investment Opportunity</p>
                </div>
                <span className="text-2xl font-bold text-orange-600">₹1,00,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">2nd Place</h4>
                  <p className="text-gray-600">Cash Prize + Mentorship</p>
                </div>
                <span className="text-2xl font-bold text-orange-600">₹50,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">3rd Place</h4>
                  <p className="text-gray-600">Cash Prize + Incubation Support</p>
                </div>
                <span className="text-2xl font-bold text-orange-600">₹25,000</span>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Special Recognition</h4>
                <p className="text-gray-600">All participants get networking opportunities and potential investor connections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nomination Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Showcase Your Startup?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nominate your startup for the Chhath Puja Hackathon and get a chance to present your innovative solution to leading investors and industry experts.
          </p>
          <button
            onClick={handleNominate}
            disabled={isNominating}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            {isNominating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Nominating...
              </>
            ) : (
              <>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Nominate Your Startup
              </>
            )}
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Nominations close on November 10, 2024
          </p>
        </div>
      </div>
    </section>
  );
};
