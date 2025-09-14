import React from 'react';
import { BarChart, PieChart, Globe, Zap, TrendingUp } from 'lucide-react';

export function MarketOpportunity() {
  return (
    <section id="market" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Total Addressable Market (TAM)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Faith Tech sector in India represents a massive, largely untapped market opportunity 
            with exponential growth potential across multiple verticals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <BarChart className="text-orange-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Market Size Breakdown</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <span className="font-semibold text-gray-900">Digital Astrology & Spirituality</span>
                <span className="text-xl font-bold text-orange-600">₹15,000 Cr</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <span className="font-semibold text-gray-900">Online Religious Services</span>
                <span className="text-xl font-bold text-orange-600">₹12,000 Cr</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <span className="font-semibold text-gray-900">Faith-based E-commerce</span>
                <span className="text-xl font-bold text-orange-600">₹18,000 Cr</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <span className="font-semibold text-gray-900">Digital Donations & Offerings</span>
                <span className="text-xl font-bold text-orange-600">₹8,000 Cr</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg">
                <span className="font-bold text-lg">Total TAM</span>
                <span className="text-2xl font-bold">₹53,000 Cr</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-orange-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Growth Projections</h3>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">45% CAGR</div>
                <div className="text-gray-600">Expected growth rate 2024-2030</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">2024</div>
                  <div className="text-gray-600">₹53,000 Cr</div>
                </div>
                <div className="text-center p-4 bg-orange-100 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">2030</div>
                  <div className="text-gray-600">₹3,50,000 Cr</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Urban Penetration</span>
                  <span className="font-semibold text-orange-600">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Rural Opportunity</span>
                  <span className="font-semibold text-orange-600">85% Untapped</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mobile-First Users</span>
                  <span className="font-semibold text-orange-600">90%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Globe className="text-orange-600 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Global Expansion Potential</h4>
            <p className="text-gray-600">200M+ Indian diaspora worldwide seeking digital spiritual connections</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Zap className="text-orange-600 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Technology Adoption</h4>
            <p className="text-gray-600">AI, AR/VR, and blockchain creating new spiritual experiences</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <PieChart className="text-orange-600 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Market Diversification</h4>
            <p className="text-gray-600">Multiple revenue streams across age groups and regions</p>
          </div>
        </div>
      </div>
    </section>
  );
}