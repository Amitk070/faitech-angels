import React, { useState } from 'react';
import { Send, Shield, Target, Briefcase } from 'lucide-react';

export function InvestorForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investmentRange: '',
    experience: '',
    interests: [],
    linkedin: '',
    background: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor application:', formData);
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  const interestOptions = [
    'AI & Machine Learning',
    'Digital Astrology',
    'Virtual Religious Services',
    'Faith-based E-commerce',
    'Spiritual Wellness Apps',
    'Blockchain & Fintech',
    'AR/VR Experiences',
    'Educational Platforms'
  ];

  return (
    <section id="invest" className="py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Faitech Angels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become part of India's premier angel investor network focused on faith-technology startups. 
            Access exclusive deal flow and connect with like-minded investors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Shield className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Access</h3>
            <p className="text-gray-600">First access to vetted faitech startups with high growth potential</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Target className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Curation</h3>
            <p className="text-gray-600">Rigorously screened opportunities by faith-tech domain experts</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Briefcase className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Support</h3>
            <p className="text-gray-600">Post-investment support and mentorship for portfolio companies</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Range per Deal *
                </label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  required
                  value={formData.investmentRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select investment range</option>
                  <option value="1-5L">₹1-5 Lakhs</option>
                  <option value="5-25L">₹5-25 Lakhs</option>
                  <option value="25L-1Cr">₹25 Lakhs - 1 Crore</option>
                  <option value="1Cr+">₹1 Crore+</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select experience level</option>
                  <option value="first-time">First-time investor</option>
                  <option value="1-5-deals">1-5 deals</option>
                  <option value="5-20-deals">5-20 deals</option>
                  <option value="20+-deals">20+ deals</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Interests (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-2">
                Professional Background & Why Faitech?
              </label>
              <textarea
                id="background"
                name="background"
                rows={4}
                value={formData.background}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us about your professional background and interest in faith-technology investments..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <Send className="mr-2" size={20} />
                Join Faitech Angels
              </button>
              <p className="text-sm text-gray-500 mt-3">
                We'll review your application and get back to you within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}