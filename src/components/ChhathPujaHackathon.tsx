import React, { useState } from 'react';
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
    title: "Chhath Tech Innovation Challenge",
    description: "Celebrate the ancient festival of Chhath with innovative tech solutions that honor tradition while embracing the future. Join us in creating digital solutions that preserve and promote our cultural heritage.",
    image: "/images/10477.jpg",
    date: "Early October 1st, 2025",
    prize: "₹1,00,000 Prize Pool"
  }
];

export const ChhathPujaHackathon: React.FC = () => {

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6">
            <FaithTechLogo size="lg" className="mb-4 md:mb-0 md:mr-4" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Chhath Hackathon 2025
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join us in celebrating the festival of Chhath with innovative technology solutions and startup showcases.
          </p>
        </div>

        {/* Hackathon Banner */}
        <div className="relative mb-12">
          <div className="relative h-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {hackathonBanners.map((banner) => (
              <div
                key={banner.id}
                className="absolute inset-0"
              >
                <div className="relative h-full flex flex-col md:flex-row">
                  {/* Image Section - Full width on mobile, 50% on desktop */}
                  <div className="w-full md:w-1/2 h-[200px] md:h-full relative bg-gradient-to-br from-orange-400 to-yellow-500">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent"></div>
                  </div>
                  
                  {/* Content Section - Full width on mobile, 50% on desktop */}
                  <div className="w-full md:w-1/2 h-[300px] md:h-full bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center p-4 md:p-6 overflow-y-auto">
                    <div className="text-white w-full">
                      <div className="flex items-start mb-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base md:text-2xl font-bold text-white mb-2 leading-tight">{banner.title}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="bg-white text-orange-600 px-2 py-1 rounded-full text-xs font-semibold">HACKATHON</span>
                            <span className="bg-yellow-400 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">TECH FEST</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm md:text-sm mb-3 md:mb-4 leading-relaxed text-white/90" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>{banner.description}</p>
                      
                      <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                        <div className="flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs md:text-sm font-semibold text-white">{banner.date}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs md:text-sm font-semibold text-white">{banner.prize}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                        <a
                          href="https://forms.gle/QzCLQHgFrNp48sR29"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-white text-orange-600 px-4 py-3 md:px-4 md:py-2 rounded-lg text-sm md:text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 w-full md:w-auto text-center"
                        >
                          Apply for Funding
                        </a>
                        <div className="text-center md:text-right">
                          <div className="text-sm md:text-lg font-bold text-yellow-300">FAITH TECH</div>
                          <div className="text-xs text-white/80">Angel Investor Network</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Hackathon Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Event Details</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Eligibility</h4>
                  <p className="text-gray-600 text-sm md:text-base">Startups, developers, and entrepreneurs from Bihar and neighboring states</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Mentorship</h4>
                  <p className="text-gray-600 text-sm md:text-base">Guidance from industry experts and successful entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Prizes & Benefits</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">1st Place</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Cash Prize + Investment Opportunity</p>
                </div>
                <span className="text-lg md:text-2xl font-bold text-orange-600">₹1,00,000</span>
              </div>
              <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">2nd Place</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Cash Prize + Mentorship</p>
                </div>
                <span className="text-lg md:text-2xl font-bold text-orange-600">₹50,000</span>
              </div>
              <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">3rd Place</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Cash Prize + Incubation Support</p>
                </div>
                <span className="text-lg md:text-2xl font-bold text-orange-600">₹25,000</span>
              </div>
              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Special Recognition</h4>
                <p className="text-gray-600 text-xs md:text-sm">All participants get networking opportunities and potential investor connections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nomination Section */}
        <div className="text-center bg-white rounded-2xl p-4 md:p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Ready to Showcase Your Startup?
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Nominate your startup for the Chhath Hackathon and get a chance to present your innovative solution to leading investors and industry experts.
          </p>
          <a
            href="https://forms.gle/QzCLQHgFrNp48sR29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Apply for Funding
          </a>
          <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
            Nominations close on September 25, 2025
          </p>
        </div>
      </div>
    </section>
  );
};
