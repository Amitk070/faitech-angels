import React from 'react';
import { Upload, Rocket, DollarSign, Users, MessageCircle } from 'lucide-react';

export function StartupApplication() {
  return (
    <section id="apply" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apply for Faith Tech Angels Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to pitch your Faith Tech startup? Connect with us on LinkedIn and share your pitch deck through DM.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <Rocket className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Pitch Deck</h3>
            <p className="text-gray-600">Share your pitch deck via LinkedIn DM for quick review</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <Users className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Access</h3>
            <p className="text-gray-600">Connect directly with our investment team and advisors</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <DollarSign className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Track Process</h3>
            <p className="text-gray-600">Get feedback and investment decisions faster through direct communication</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Pitch Your Faith Tech Startup?</h3>
          <p className="text-lg mb-8 opacity-90">
            Connect with us on LinkedIn and send your pitch deck via DM. We'll review it and get back to you within 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QzCLQHgFrNp48sR29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Apply for Funding
            </a>
            <a
              href="https://www.linkedin.com/company/faith-tech-angel-investor-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Follow Our Page
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">What to Include in Your Pitch Deck</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Essential Sections:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Company overview and mission
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Problem statement and solution
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Market size and opportunity
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Business model and revenue streams
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Traction and key metrics
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Additional Information:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Team background and expertise
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Funding requirements and use of funds
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Competitive landscape and differentiation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Financial projections and milestones
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Contact information and next steps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}