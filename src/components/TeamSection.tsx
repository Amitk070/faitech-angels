import React from 'react';

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
    name: "Amitesh Kumar",
    title: "Founder",
    company: "Lending King",
    linkedin: "https://linkedin.com/in/amitesh-kumar",
    description: "Entrepreneur and founder of Lending King, bringing innovative financial solutions to the market.",
    image: ""
  },
  {
    name: "Ravi Bhardwaj",
    title: "Founder",
    company: "Startup Legal & EduLegal",
    linkedin: "https://linkedin.com/in/ravi-bhardwaj",
    description: "Legal expert and founder of Startup Legal & EduLegal, providing comprehensive legal solutions for startups.",
    image: ""
  },
  {
    name: "Anshuman Sinha",
    title: "Co-Founder",
    company: "Startup Steroid (Startup Ecosystem)",
    linkedin: "https://linkedin.com/in/anshuman-sinha",
    description: "Co-founder of Startup Steroid, dedicated to building a robust startup ecosystem and supporting entrepreneurs.",
    image: ""
  },
  {
    name: "Kumod Kumar",
    title: "Chief Administrative Officer",
    company: "Chandragupt Institute of Management Patna",
    linkedin: "https://linkedin.com/in/kumod-kumar",
    description: "Chief Administrative Officer at CIMP, bringing administrative excellence and institutional knowledge to the team.",
    image: ""
  },
  {
    name: "Pallavi Jha",
    title: "Strategic Advisor",
    company: "Faith Tech Angel Investor Network",
    linkedin: "https://linkedin.com/in/pallavi-jha",
    description: "Strategic advisor with extensive experience in investment and startup ecosystem development.",
    image: ""
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Founding Charter Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders who are building the future of entrepreneurship in Bihar and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {member.company}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            These founding members represent the diverse expertise and vision that drives our mission forward.
          </p>
        </div>
      </div>
    </section>
  );
};
