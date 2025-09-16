import React from 'react';
import { Target, Eye, Users, Heart, TrendingUp, Smartphone } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  company: string;
  linkedin?: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kumod Kumar",
    title: "Advisor",
    company: "Chandragupt Institute of Management Patna",
    linkedin: "https://linkedin.com/in/kumod-kumar",
    description: "Bringing administrative excellence and institutional knowledge to the team. Provides mentoring and networking support for Faith Tech initiatives.",
    image: "/images/team/kumod-kumar.jpg"
  },
  {
    name: "Anshuman Sinha",
    title: "Advisor",
    company: "Startup Steroid (Startup Ecosystem)",
    linkedin: "https://linkedin.com/in/anshuman-sinha",
    description: "Dedicated to building a robust startup ecosystem and supporting entrepreneurs. Offers mentoring and networking support for emerging startups.",
    image: "/images/team/anshuman-sinha.jpg"
  },
  {
    name: "Ravi Bhardwaj",
    title: "Advisor",
    company: "Startup Legal & EduLegal",
    linkedin: "https://linkedin.com/in/ravi-bhardwaj",
    description: "Legal expert providing comprehensive legal solutions for startups. Delivers mentoring and networking support in legal and compliance matters.",
    image: "/images/team/ravi-bhardwaj.jpg"
  },
  {
    name: "Pallavi Jha",
    title: "Advisor",
    company: "Faith Tech Angel Investor Network",
    linkedin: "https://linkedin.com/in/pallavi-jha",
    description: "Strategic advisor with extensive experience in investment and startup ecosystem development. Provides mentoring and networking support for Faith Tech ventures.",
    image: "/images/team/pallavi-jha.jpg"
  },
  {
    name: "Amitesh Kumar",
    title: "Advisor",
    company: "Founder ZapQ AI",
    linkedin: "https://linkedin.com/in/amitesh-kumar",
    description: "Entrepreneur bringing innovative financial solutions to the market. Offers mentoring and networking support for financial technology startups.",
    image: "/images/team/amitesh-kumar.jpg"
  },
  {
    name: "Amit Kumar",
    title: "Advisor",
    company: "Faith Tech Angel Investor Network",
    linkedin: "https://www.linkedin.com/in/amitbhj",
    description: "Strategic advisor with expertise in technology and startup ecosystem development. Provides mentoring and networking support for Faith Tech ventures.",
    image: "/images/team/amit-kumar.jpg"
  },
  {
    name: "Pratyush Ambuj",
    title: "Advisor",
    company: "Faith Tech Angel Investor Network",
    linkedin: "https://www.linkedin.com/in/pratyush-ambuj-58bb0320",
    description: "Technology expert and startup advisor with deep knowledge in digital innovation. Offers mentoring and networking support for emerging Faith Tech startups.",
    image: "/images/team/pratyush-ambuj.jpg"
  },
  {
    name: "Vijay K.",
    title: "Advisor",
    company: "Co founder and COO @ Kesari Awayddings Pvt Ltd",
    linkedin: "https://www.linkedin.com/in/vijay-k",
    description: "Co-founder and COO with extensive experience in business operations and strategic planning. Provides mentoring and networking support for Faith Tech ventures.",
    image: "/images/team/vijay-k.jpg"
  }
];

export function AboutFaithTech() {
  return (
    <div className="min-h-screen bg-white">
      <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faith Tech Angels is a pioneering investment platform that bridges the gap between ancient spiritual traditions and cutting-edge technology, creating unprecedented opportunities in India's faith-driven market.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To democratize access to faith-based technology solutions by connecting innovative startups with strategic investors, 
              fostering a vibrant ecosystem where spiritual traditions meet modern innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that technology can enhance and preserve our cultural heritage while making spiritual practices 
              more accessible to millions of people across India and beyond.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To become India's leading platform for Faith Tech investments, creating a sustainable ecosystem that 
              empowers entrepreneurs to build meaningful solutions for spiritual and cultural preservation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where technology seamlessly integrates with faith practices, making spiritual 
              experiences more accessible, meaningful, and impactful for communities worldwide.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What We Do
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Smartphone size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Faith Tech Investment</h4>
                <p className="text-gray-600">We invest in innovative startups that combine technology with spiritual and cultural practices</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mentorship & Support</h4>
                <p className="text-gray-600">Our expert advisors provide guidance, networking, and strategic support to Faith Tech entrepreneurs</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-orange-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ecosystem Building</h4>
                <p className="text-gray-600">We foster a vibrant community of investors, entrepreneurs, and innovators in the Faith Tech space</p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              The Faith Tech Opportunity
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              India's spiritual heritage runs deeper than any other civilization. With over 80% of Indians actively practicing 
              their faith, the intersection of technology and spirituality represents one of the most promising investment 
              opportunities of our generation.
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

        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Advisors
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished advisors who provide mentoring and networking support to Faith Tech initiatives and startups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium text-xs mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {member.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Our advisors bring diverse expertise and provide mentoring and networking support to help Faith Tech startups succeed.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-lg mb-6 text-white/90">
            Be part of the Faith Tech revolution. Connect with us to explore investment opportunities or get support for your Faith Tech startup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/V9cUMpt9rJGgPWa79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="https://wa.me/919225518255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}