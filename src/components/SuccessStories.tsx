import React from 'react';
import { Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const successStories = [
  {
    name: "AstroTalk",
    description: "India's largest astrology consultation platform with AI-powered matching",
    metrics: {
      valuation: "₹500 Cr",
      users: "50M+",
      growth: "400% YoY"
    },
    highlight: "Revolutionizing spiritual guidance with technology"
  },
  {
    name: "AstroSure", 
    description: "AI-driven spiritual insurance and protection services",
    metrics: {
      valuation: "₹150 Cr", 
      users: "10M+",
      growth: "250% YoY"
    },
    highlight: "Combining faith with financial security"
  },
  {
    name: "AI Pandit",
    description: "Virtual priest services and AI-powered religious ceremonies",
    metrics: {
      valuation: "₹80 Cr",
      users: "5M+", 
      growth: "300% YoY"
    },
    highlight: "Digitizing traditional religious practices"
  },
  {
    name: "DevDarshan",
    description: "Virtual temple visits and online darshan experiences",
    metrics: {
      valuation: "₹200 Cr",
      users: "25M+",
      growth: "350% YoY" 
    },
    highlight: "Bringing temples to every home"
  },
  {
    name: "SpiritualPay",
    description: "Blockchain-based donation platform for temples and ashrams",
    metrics: {
      valuation: "₹120 Cr",
      users: "8M+",
      growth: "280% YoY"
    },
    highlight: "Transparent spiritual giving ecosystem"
  },
  {
    name: "VedicAI",
    description: "AI-powered Vedic education and personalized learning platform",
    metrics: {
      valuation: "₹90 Cr",
      users: "12M+",
      growth: "320% YoY"
    },
    highlight: "Ancient wisdom meets modern technology"
  }
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from India's Faith Tech Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the remarkable growth of AI-powered spiritual platforms that are 
            transforming how Indians connect with their faith and beliefs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white p-2 rounded-lg mr-3">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 flex items-center">
                    <DollarSign size={16} className="mr-1 text-orange-600" />
                    Valuation
                  </span>
                  <span className="font-bold text-orange-600">{story.metrics.valuation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 flex items-center">
                    <Users size={16} className="mr-1 text-orange-600" />
                    Users
                  </span>
                  <span className="font-bold text-orange-600">{story.metrics.users}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 flex items-center">
                    <TrendingUp size={16} className="mr-1 text-orange-600" />
                    Growth
                  </span>
                  <span className="font-bold text-orange-600">{story.metrics.growth}</span>
                </div>
              </div>
              
              <div className="border-t border-orange-200 pt-4">
                <p className="text-sm font-medium text-orange-700 italic">{story.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Join the Next Wave of Success Stories</h3>
            <p className="text-lg mb-6 opacity-90">
              These startups represent just the beginning of India's Faith Tech revolution. 
              Be part of the next generation of unicorns in the faith-tech space.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Explore Investment Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}