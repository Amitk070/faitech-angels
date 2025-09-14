import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Faitech Angels investment opportunities.");
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80">
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white text-green-500 p-1 rounded-full mr-3">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Faitech Angels</h4>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-800">
                👋 Hi there! Welcome to Faitech Angels. 
              </p>
              <p className="text-sm text-gray-800 mt-2">
                How can we help you today?
              </p>
              <div className="text-xs text-gray-500 mt-2">Just now</div>
            </div>
            
            <div className="space-y-2 mb-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                💰 I'm interested in investing
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                🚀 I want to apply for funding
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                📞 I'd like to speak with someone
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ❓ I have general questions
              </button>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={18} />
              Start WhatsApp Chat
            </button>
          </div>
        </div>
      )}
    </>
  );
}