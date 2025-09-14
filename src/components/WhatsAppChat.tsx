import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+919225518255';
  const whatsappMessage = 'Hi! I\'m interested in Faith Tech Angels. Can you help me with more information?';

  const handleWhatsAppClick = (message: string = whatsappMessage) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* WhatsApp Contact Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-2 sm:right-6 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-w-[calc(100vw-1rem)]">
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white text-green-500 p-1 rounded-full mr-3">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Faith Tech Angels</h4>
                <p className="text-sm opacity-90">Message us on WhatsApp</p>
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
                👋 Hi there! Welcome to Faith Tech Angels. 
              </p>
              <p className="text-sm text-gray-800 mt-2">
                Message us on WhatsApp for all inquiries.
              </p>
              <div className="text-xs text-gray-500 mt-2">+91 92255 18255</div>
            </div>
            
            <div className="space-y-2 mb-4">
              <button
                onClick={() => handleWhatsAppClick('Hi! I\'m interested in investing in Faith Tech startups. Can you provide more information?')}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                💰 I'm interested in investing
              </button>
              <button
                onClick={() => handleWhatsAppClick('Hello! I want to apply for funding for my Faith Tech startup. Can you help me?')}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                🚀 I want to apply for funding
              </button>
              <button
                onClick={() => handleWhatsAppClick('Hi! I\'d like to speak with someone about Faith Tech opportunities.')}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                📞 I'd like to speak with someone
              </button>
              <button
                onClick={() => handleWhatsAppClick('Hello! I have general questions about Faith Tech Angels.')}
                className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ❓ I have general questions
              </button>
            </div>
            
            <button
              onClick={() => handleWhatsAppClick()}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={18} />
              Message on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}