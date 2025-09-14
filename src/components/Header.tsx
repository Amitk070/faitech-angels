import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen, currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-36">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/images/logo/logo-rectangular.png" 
                alt="Faith Tech Angels" 
                className="h-16 w-auto mr-3 md:h-32 md:mr-6"
              />
              <h1 className="text-lg md:text-2xl font-bold text-orange-600 whitespace-nowrap">Faith Tech Angels</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-64 flex items-baseline space-x-4 whitespace-nowrap">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Faith Tech
              </button>
              <button 
                onClick={() => setCurrentPage('chhath-hackathon')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'chhath-hackathon' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Chhath Hackathon
              </button>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Market
              </button>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Success Stories
              </button>
              <button 
                onClick={() => setCurrentPage('investment')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'investment' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Invest
              </button>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Apply
              </button>
              <button 
                onClick={() => setCurrentPage('blog')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'blog' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Blog
              </button>
            </div>
          </nav>

          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-2 rounded-md hover:bg-orange-50 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-4 bg-orange-50 border-t border-orange-100">
              <div className="flex items-center">
                <img 
                  src="/images/logo/logo-rectangular.png" 
                  alt="Faith Tech Angels" 
                  className="h-16 w-auto mr-3"
                />
                <span className="text-base font-bold text-orange-600 whitespace-nowrap">Faith Tech Angels</span>
              </div>
            </div>
            <div className="px-4 pt-3 pb-4 space-y-2 bg-white">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                About Faith Tech
              </button>
              <button 
                onClick={() => { setCurrentPage('chhath-hackathon'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === 'chhath-hackathon' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Chhath Hackathon
              </button>
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Market
              </button>
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Success Stories
              </button>
              <button 
                onClick={() => { setCurrentPage('investment'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === 'investment' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Invest
              </button>
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Apply
              </button>
              <button 
                onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === 'blog' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}