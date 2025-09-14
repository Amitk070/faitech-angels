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
    company: "Lending King",
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
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Advisors
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our distinguished advisors who provide mentoring and networking support to Faith Tech initiatives and startups.
                      </p>
                    </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
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
                        className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-lg"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-xs font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-xs mb-1">
                  {member.title}
                </p>
                <p className="text-gray-600 text-xs mb-1">
                  {member.company}
                </p>
                <p 
                  className="text-gray-700 text-xs leading-tight"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

                    <div className="text-center mt-12">
                      <p className="text-gray-600">
                        Our advisors bring diverse expertise and provide mentoring and networking support to help Faith Tech startups succeed.
                      </p>
                    </div>
      </div>
    </section>
  );
};
