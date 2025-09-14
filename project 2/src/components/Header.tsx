import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">Faitech Angels</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Faitech
              </a>
              <a href="#market" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Market
              </a>
              <a href="#success-stories" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Success Stories
              </a>
              <a href="#invest" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Invest
              </a>
              <a href="#apply" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Apply
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              <a href="#home" className="text-gray-900 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                About Faitech
              </a>
              <a href="#market" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Market
              </a>
              <a href="#success-stories" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Success Stories
              </a>
              <a href="#invest" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Invest
              </a>
              <a href="#apply" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Apply
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}