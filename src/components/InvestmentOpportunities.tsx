import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Calendar, MapPin, Star, ArrowRight, Search, Heart, Shield, Lightbulb } from 'lucide-react';

interface InvestmentOpportunity {
  id: number;
  title: string;
  description: string;
  company: string;
  stage: string;
  fundingGoal: string;
  raisedAmount: string;
  valuation: string;
  location: string;
  category: string;
  tags: string[];
  investors: string[];
  founded: string;
  employees: string;
  revenue: string;
  growth: string;
  featured: boolean;
}

const investmentOpportunities: InvestmentOpportunity[] = [
  {
    id: 1,
    title: "Virtual Temple Platform - Connecting Devotees Globally",
    description: "Revolutionary VR/AR platform enabling immersive temple visits and spiritual experiences for millions of devotees worldwide. Features include live darshan, virtual offerings, and AI-powered spiritual guidance.",
    company: "DivineConnect",
    stage: "Series A",
    fundingGoal: "$5M",
    raisedAmount: "$2.1M",
    valuation: "$15M",
    location: "Mumbai, India",
    category: "Virtual Reality",
    tags: ["VR/AR", "Spiritual Tech", "AI", "Global Platform"],
    investors: ["Faith Tech Angels", "Spiritual Ventures", "Tech Mahindra"],
    founded: "2022",
    employees: "25-50",
    revenue: "$500K ARR",
    growth: "300% YoY",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Prayer and Meditation App",
    description: "Personalized spiritual guidance app using AI to provide customized prayers, meditation sessions, and religious teachings based on user preferences and spiritual journey.",
    company: "SoulGuide AI",
    stage: "Seed",
    fundingGoal: "$2M",
    raisedAmount: "$800K",
    valuation: "$8M",
    location: "Bangalore, India",
    category: "Mobile Apps",
    tags: ["AI", "Mobile", "Personalization", "Wellness"],
    investors: ["Angel Investors", "Incubator Fund"],
    founded: "2023",
    employees: "10-25",
    revenue: "$200K ARR",
    growth: "150% YoY",
    featured: true
  },
  {
    id: 3,
    title: "Faith-Based E-commerce Marketplace",
    description: "Comprehensive marketplace for religious artifacts, books, and digital content with verified sellers and authentic products. Includes community features and educational content.",
    company: "SacredMart",
    stage: "Pre-Series A",
    fundingGoal: "$3M",
    raisedAmount: "$1.2M",
    valuation: "$12M",
    location: "Delhi, India",
    category: "E-commerce",
    tags: ["Marketplace", "E-commerce", "Community", "Verification"],
    investors: ["Faith Tech Angels", "Religious Trusts"],
    founded: "2021",
    employees: "30-50",
    revenue: "$800K ARR",
    growth: "200% YoY",
    featured: false
  },
  {
    id: 4,
    title: "Digital Religious Education Platform",
    description: "Online learning platform offering courses on religious texts, spiritual practices, and cultural traditions. Features interactive lessons, expert instructors, and certification programs.",
    company: "WisdomAcademy",
    stage: "Series A",
    fundingGoal: "$4M",
    raisedAmount: "$2.5M",
    valuation: "$20M",
    location: "Chennai, India",
    category: "EdTech",
    tags: ["Education", "Online Learning", "Certification", "Expert Instructors"],
    investors: ["Education VCs", "Faith Tech Angels", "University Partners"],
    founded: "2020",
    employees: "40-60",
    revenue: "$1.2M ARR",
    growth: "180% YoY",
    featured: true
  },
  {
    id: 5,
    title: "Crowdfunding Platform for Religious Causes",
    description: "Specialized crowdfunding platform connecting donors with religious and charitable causes. Features transparency tools, impact tracking, and community engagement.",
    company: "FaithFund",
    stage: "Seed",
    fundingGoal: "$1.5M",
    raisedAmount: "$600K",
    valuation: "$6M",
    location: "Pune, India",
    category: "FinTech",
    tags: ["Crowdfunding", "Transparency", "Impact", "Community"],
    investors: ["Impact Investors", "Religious Organizations"],
    founded: "2023",
    employees: "15-30",
    revenue: "$150K ARR",
    growth: "250% YoY",
    featured: false
  },
  {
    id: 6,
    title: "Smart Religious Calendar and Event Management",
    description: "Comprehensive platform for managing religious events, festivals, and community gatherings. Includes scheduling, ticketing, live streaming, and community features.",
    company: "FestivalHub",
    stage: "Pre-Series A",
    fundingGoal: "$2.5M",
    raisedAmount: "$900K",
    valuation: "$10M",
    location: "Kolkata, India",
    category: "Event Management",
    tags: ["Event Management", "Calendar", "Live Streaming", "Community"],
    investors: ["Event Tech VCs", "Faith Tech Angels"],
    founded: "2022",
    employees: "20-35",
    revenue: "$400K ARR",
    growth: "220% YoY",
    featured: false
  }
];

export const InvestmentOpportunities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Virtual Reality', 'Mobile Apps', 'E-commerce', 'EdTech', 'FinTech', 'Event Management'];
  const stages = ['All', 'Seed', 'Pre-Series A', 'Series A', 'Series B'];

  const filteredOpportunities = investmentOpportunities.filter(opportunity => {
    const matchesCategory = selectedCategory === 'All' || opportunity.category === selectedCategory;
    const matchesStage = selectedStage === 'All' || opportunity.stage === selectedStage;
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesStage && matchesSearch;
  });

  const featuredOpportunities = investmentOpportunities.filter(opportunity => opportunity.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investment Opportunities
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover promising Faith Tech startups and investment opportunities in the rapidly growing 
              spiritual technology sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">$65B+</div>
                <div className="text-lg opacity-90">Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">900+</div>
                <div className="text-lg opacity-90">Faith Tech Startups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">300%</div>
                <div className="text-lg opacity-90">Average Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {stages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                      <p className="text-orange-600 font-semibold">{opportunity.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{opportunity.valuation}</div>
                      <div className="text-sm text-gray-500">Valuation</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Funding Goal</div>
                      <div className="text-lg font-semibold text-gray-900">{opportunity.fundingGoal}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Raised</div>
                      <div className="text-lg font-semibold text-green-600">{opportunity.raisedAmount}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Stage</div>
                      <div className="text-lg font-semibold text-gray-900">{opportunity.stage}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Growth</div>
                      <div className="text-lg font-semibold text-blue-600">{opportunity.growth}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {opportunity.tags.map((tag, index) => (
                      <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {opportunity.location}
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Opportunities */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Investment Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">{opportunity.title}</h3>
                      <p className="text-orange-600 font-semibold text-sm">{opportunity.company}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-semibold">
                      {opportunity.stage}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{opportunity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Goal</div>
                      <div className="font-semibold text-gray-900">{opportunity.fundingGoal}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Raised</div>
                      <div className="font-semibold text-green-600">{opportunity.raisedAmount}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {opportunity.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {opportunity.location}
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 font-semibold flex items-center">
                      View <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Faith Tech?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our network of investors and get exclusive access to vetted Faith Tech opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/faith-tech-angel-investor-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Join as Investor
            </a>
            <a
              href="https://www.linkedin.com/company/faith-tech-angel-investor-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              View Portfolio on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
