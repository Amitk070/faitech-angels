import React from 'react';
import { Heart, BookOpen, Users, TrendingUp, Building, Star } from 'lucide-react';

export const FaithTraditions: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-saffron-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Honoring Our Sacred Traditions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where ancient wisdom meets modern technology, creating meaningful connections between faith and innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Gaya and Pitri Paksha */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Gaya ji and Pitri Paksha</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Gaya holds a unique and highly significant position in Hindu tradition, particularly concerning the rituals of Pitri Paksha. 
              Now commonly referred to as Gaya ji, it's considered the ultimate destination for performing ancestral rites.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Star className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Vishnupad Temple:</strong> Houses the sacred footprint of Lord Vishnu, where performing Pind Daan grants liberation to ancestors.
                </p>
              </div>
              <div className="flex items-start">
                <Star className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Falgu River:</strong> Central to rituals, where pilgrims take holy dips before performing ancestral ceremonies.
                </p>
              </div>
              <div className="flex items-start">
                <Star className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Akshayvat Tree:</strong> The immortal banyan tree where offerings yield everlasting benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Faith Tech Growth */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Faith-Tech in India</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              India's growing faith-tech sector presents a unique convergence of tradition and technology, opening new entrepreneurial pathways for startups.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">$65B+</div>
                <div className="text-sm text-gray-600">Current Market Value</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">900+</div>
                <div className="text-sm text-gray-600">Faith-Tech Startups</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              With investments skyrocketing from $5M in 2022 to $51M+ in 2023, faith-tech is emerging as one of India's fastest-growing digital opportunity spaces.
            </p>
          </div>
        </div>

        {/* Pitru Paksha Origins */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Origins of Pitru Paksha</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The origins of Pitru Paksha are deeply rooted in Hindu mythology and ancient scriptures. The story revolves around Karna, 
                a great warrior in the Mahabharata, known for his immense generosity and charity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After his death, Karna's soul ascended to heaven but was afflicted with severe hunger. When he tried to eat, 
                any food he touched would instantly turn into gold. Lord Indra explained that Karna had never offered food to his ancestors.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To rectify this, Lord Indra granted Karna a 15-day period to return to Earth and perform the rituals of "Shraddha" and "Tarpan" 
                to offer food and water to his ancestors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This 15-day period, during which Karna performed these rites, is believed to be the origin of Pitru Paksha, 
                illustrating the core purpose: to acknowledge the debts we owe to our ancestors.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Movement */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Bihar's Cultural Renaissance</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 mb-4 leading-relaxed">
                Bihar has given the world universities older than Oxford, philosophies that shaped kingdoms, and art that travelled continents. 
                Yet too often, its modern image is reduced to headlines instead of heritage.
              </p>
              <p className="text-white/90 leading-relaxed">
                A cultural movement is about more than preservation. It is presence. It is saying: this is who we are, 
                this is what we create, and this is why it matters today.
              </p>
            </div>
            <div>
              <p className="text-white/90 mb-4 leading-relaxed">
                Bihar's festivals, food, folk traditions, textiles, and music aren't relics - they are alive, contemporary, and relevant.
              </p>
              <p className="text-white/90 leading-relaxed">
                When culture is honoured with care, perception shifts naturally. Because when you narrate your own story, 
                the world listens differently.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join us in bridging the gap between ancient wisdom and modern innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/faith-tech-angel-investor-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow Our Journey
            </a>
            <a
              href="#invest"
              className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
