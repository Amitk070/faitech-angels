import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Faitech Angels</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's premier angel investor network focused on faith-technology startups. 
              We bridge the gap between ancient wisdom and modern innovation, supporting 
              entrepreneurs who are transforming the spiritual landscape through technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Faitech</a></li>
              <li><a href="#market" className="text-gray-300 hover:text-white transition-colors">Market Opportunity</a></li>
              <li><a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#invest" className="text-gray-300 hover:text-white transition-colors">Become Investor</a></li>
              <li><a href="#apply" className="text-gray-300 hover:text-white transition-colors">Apply for Funding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-orange-400 mr-3" size={16} />
                <span className="text-gray-300">hello@faitechangels.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-400 mr-3" size={16} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-orange-400 mr-3 mt-1" size={16} />
                <span className="text-gray-300">
                  Koramangala, Bengaluru<br />
                  Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Faitech Angels. All rights reserved.
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