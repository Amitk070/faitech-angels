import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Faith Tech Angels</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's premier angel investor network focused on faith-technology startups. 
              We bridge the gap between ancient wisdom and modern innovation, supporting 
              entrepreneurs who are transforming the spiritual landscape through technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/faith-tech-angel-investor-network/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Faith Tech</a></li>
              <li><a href="#market" className="text-gray-300 hover:text-white transition-colors">Market Opportunity</a></li>
              <li><a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="https://forms.gle/V9cUMpt9rJGgPWa79" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Become Investor</a></li>
              <li><a href="https://forms.gle/QzCLQHgFrNp48sR29" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Apply for Funding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="https://forms.gle/V9cUMpt9rJGgPWa79"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Join as Investor
              </a>
              <p className="text-gray-300 text-sm">
                Reach out to us on LinkedIn for investment opportunities, startup applications, and general inquiries.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Faith Tech Angels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Investment Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}