import React from 'react';
import { Smartphone, Heart, TrendingUp, Users } from 'lucide-react';

export function AboutFaitech() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is Faitech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faith Technology (Faitech) represents the convergence of spiritual practices, religious services, 
            and cutting-edge technology, creating unprecedented opportunities in India's faith-driven market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Spirituality</h3>
            <p className="text-gray-600">AI-powered astrology, digital pujas, and virtual temple experiences</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Faith Services</h3>
            <p className="text-gray-600">Online religious consultations, spiritual guidance, and wellness platforms</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Growth</h3>
            <p className="text-gray-600">300% YoY growth with massive untapped potential in rural and urban markets</p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Massive Audience</h3>
            <p className="text-gray-600">Serving 1.4 billion people with deep-rooted spiritual and cultural connections</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              India's Faith & Belief System - A Technology Goldmine
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              India's spiritual heritage runs deeper than any other civilization. With over 80% of Indians actively practicing 
              their faith, the intersection of technology and spirituality represents one of the most promising investment 
              opportunities of our generation. From AI-powered astrology consultations to blockchain-based temple donations, 
              Faitech startups are revolutionizing how Indians connect with their spiritual roots.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600">80%+</div>
                <div className="text-gray-600">Indians practice active faith</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">₹2.3 Lakh Cr</div>
                <div className="text-gray-600">Religious economy size</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">500M+</div>
                <div className="text-gray-600">Digital faith users by 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}