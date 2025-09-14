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
            Join Faith Tech Angels
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
            <p className="text-gray-600">First access to vetted Faith Tech startups with high growth potential</p>
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

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Investor Network?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Connect with us on LinkedIn to learn more about Faith Tech investment opportunities and join our exclusive investor community.
            </p>
            
            <a
              href="https://www.linkedin.com/company/faith-tech-angel-investor-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg mb-6"
            >
              <Send className="mr-2" size={20} />
              Join as Investor on LinkedIn
            </a>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Connect on LinkedIn?</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Get exclusive access to vetted Faith Tech startups
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Join our investor community and network
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Receive regular updates on investment opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Connect directly with our team and other investors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}