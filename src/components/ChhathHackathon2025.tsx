import React, { useState } from 'react';
import { Calendar, Users, Target, Award, Lightbulb, Shield, Leaf, Smartphone, MapPin, Clock, CheckCircle, ExternalLink, Heart } from 'lucide-react';

export const ChhathHackathon2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const focusAreas = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Crowd & Safety Management",
      description: "Utilize AI and IoT for real-time crowd monitoring, smart traffic routing, and emergency alert systems to ensure safe gatherings at Ghats.",
      features: ["Real-time crowd monitoring", "Smart traffic routing", "Emergency alert systems", "Safety analytics"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Ghat Operations",
      description: "Develop technology-enabled solutions for scheduling and capacity management at Ghats, sanitation tracking, infrastructure maintenance, and pollution control.",
      features: ["Scheduling & capacity management", "Sanitation tracking", "Infrastructure maintenance", "Pollution control"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Prasad & Supply Chain",
      description: "Innovate in the preparation, quality control, and distribution of Prasad. This includes smart kitchens, hygienic production methods, and GPS-enabled logistics.",
      features: ["Smart kitchens", "Quality control systems", "GPS-enabled logistics", "Hygienic production"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Sustainability",
      description: "Promote eco-friendly offerings and waste segregation technologies. Design solutions to maintain the cleanliness and ecological health of river and lake bodies.",
      features: ["Eco-friendly offerings", "Waste segregation", "Water quality monitoring", "Sustainable practices"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Citizen Services",
      description: "Build user-friendly platforms and mobile apps for real-time information dissemination, health and emergency services, and volunteer coordination.",
      features: ["Real-time information", "Health services", "Emergency coordination", "Volunteer management"]
    }
  ];

  const timeline = [
    {
      phase: "Application & Submission",
      date: "1st Week October 2025",
      description: "Startups submit a detailed pitch deck outlining the problem statement, solution, business model, and team. A functional prototype, app, or proof-of-concept is required.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      phase: "Expert Shortlisting",
      date: "2nd Week October 2025",
      description: "An expert panel of judges from government, industry, and academia will evaluate submissions based on feasibility, scalability, and social impact.",
      icon: <Target className="w-6 h-6" />
    },
    {
      phase: "Final Pitch Day",
      date: "3rd Week October 2025",
      description: "Selected teams will present live demonstrations to a distinguished jury of policymakers, civic officials, and investors.",
      icon: <Award className="w-6 h-6" />
    },
    {
      phase: "Recognition & Support",
      date: "Post-Event",
      description: "Winning teams will receive an exclusive opportunity for mentorship, networking opportunities, and potential funding through angel investors.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const partners = [
    {
      category: "Government",
      description: "Urban Development, Tourism, Health, Police, and Environmental authorities who provide regulatory support and infrastructure access.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: "Academic Partners",
      description: "Universities and innovation hubs to identify and mentor emerging talent, providing research support and technical expertise.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      category: "Industry Partners",
      description: "Angel investors, CSR divisions of major corporations, and technology associations offering funding and business development support.",
      icon: <Users className="w-6 h-6" />
    },
    {
      category: "Community Groups",
      description: "NGOs, volunteer organizations, and local leaders who provide invaluable on-the-ground knowledge and community engagement.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chhath Hackathon 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Bridging Ancient Tradition with Modern Technology
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              The Chhath festival is one of India's most important and ancient Hindu celebrations, 
              honouring Surya Dev (the Sun God). Primarily celebrated in Bihar, Jharkhand and Uttar 
              Pradesh, this four-day festival involves rigorous fasting, holy bathing, and prayers 
              offered at riverbanks, or Ghats.
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              With millions of devotees participating all over the world, Chhath is a powerful symbol of 
              devotion, environmental sanctity, community engagement, and cultural heritage. It's also 
              a significant economic event, supporting thousands of local vendors and small 
              businesses with a market size estimated in the hundreds of crores of Indian Rupees 
              annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/V9cUMpt9rJGgPWa79"
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
                Learn More on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-1 py-4">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'focus', label: 'Focus Areas' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'procedure', label: 'How to Participate' },
              { id: 'partners', label: 'Partners' },
              { id: 'mission', label: 'Mission' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* About Chhath Festival */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Chhath Festival</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    The Chhath festival is one of India's most important and ancient Hindu celebrations, 
                    honouring Surya Dev (the Sun God). Primarily celebrated in Bihar, Jharkhand and Uttar Pradesh, 
                    this four-day festival involves rigorous fasting, holy bathing, and prayers offered at riverbanks, or Ghats.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With millions of devotees participating all over the world, Chhath is a powerful symbol of 
                    devotion, environmental sanctity, community engagement, and cultural heritage.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Chhath is also a significant economic event, supporting thousands of local vendors and small 
                    businesses with a market size estimated in the hundreds of crores of Indian Rupees annually.
                  </p>
                  <div className="text-2xl font-bold text-orange-600">₹100+ Crores</div>
                  <div className="text-sm text-gray-600">Annual Market Size</div>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Mission: Bridging Tradition and Technology</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Chhath Hackathon 2025 aims to leverage the power of technology to address the challenges and 
                opportunities of a festival celebrated at a massive scale.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6">
                  <Target className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Solve Real-World Problems</h3>
                  <p className="text-white/90">Identify scalable, cost-efficient, and sustainable technologies for government bodies, civic agencies, and devotees.</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6">
                  <Users className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Drive Collaboration</h3>
                  <p className="text-white/90">Foster a collaborative ecosystem for the safe, hygienic, and smooth conduct of the festival.</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6">
                  <Lightbulb className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Catalyze Innovation</h3>
                  <p className="text-white/90">Promote entrepreneurship and job creation while preserving the cultural essence of Chhath.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Focus Areas Tab */}
        {activeTab === 'focus' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Focus Areas for Innovation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're looking for solutions in these critical areas. Participants should clearly demonstrate 
                how they address one or more of these challenges.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {focusAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4 text-orange-600">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                  <div className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition Format & Timeline</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The competition is structured to guide participants from initial concept to a potential real-world pilot.
              </p>
            </div>
            
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 text-orange-600 flex-shrink-0">
                      {phase.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                        <span className="text-lg font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-lg">
                          {phase.date}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Procedure Tab */}
        {activeTab === 'procedure' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Participate</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these steps to participate in the Chhath Hackathon 2025 and make a meaningful impact.
              </p>
            </div>

            {/* Step-by-Step Procedure */}
            <div className="space-y-8">
              {/* Step 1: Registration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration & Application</h3>
                    <div className="bg-orange-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Timeline: 1st Week October 2025</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Startups submit a detailed pitch deck outlining the problem statement, solution, business model, and team. 
                        A functional prototype, app, or proof-of-concept is required.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">What You Need to Submit:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Detailed pitch deck (PDF format)</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Problem statement & solution</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Business model & revenue plan</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Team information & roles</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Functional prototype/demo</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Technical documentation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Evaluation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Evaluation & Shortlisting</h3>
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Timeline: 2nd Week October 2025</h4>
                      <p className="text-gray-700 leading-relaxed">
                        An expert panel of judges from government, industry, and academia will evaluate submissions 
                        based on feasibility, scalability, and social impact.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Evaluation Criteria:</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                          <Target className="w-8 h-8 text-green-600 mb-3" />
                          <h5 className="font-semibold text-gray-900 mb-2">Feasibility</h5>
                          <p className="text-sm text-gray-700">Technical viability and implementation potential</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                          <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                          <h5 className="font-semibold text-gray-900 mb-2">Scalability</h5>
                          <p className="text-sm text-gray-700">Potential for growth and widespread adoption</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                          <Heart className="w-8 h-8 text-purple-600 mb-3" />
                          <h5 className="font-semibold text-gray-900 mb-2">Social Impact</h5>
                          <p className="text-sm text-gray-700">Positive impact on community and festival experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Final Pitch */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Pitch Day</h3>
                    <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Timeline: 3rd Week October 2025</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Selected teams will present live demonstrations to a distinguished jury of policymakers, 
                        civic officials, and investors.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Presentation Requirements:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-orange-500 mr-3" />
                          <span className="text-gray-700">10-minute live demonstration</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-orange-500 mr-3" />
                          <span className="text-gray-700">5-minute Q&A session with judges</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-orange-500 mr-3" />
                          <span className="text-gray-700">Working prototype demonstration</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="w-5 h-5 text-orange-500 mr-3" />
                          <span className="text-gray-700">Clear value proposition presentation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Recognition */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Recognition & Support</h3>
                    <div className="bg-green-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Post-Event Support</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Winning teams will receive an exclusive opportunity for mentorship, networking opportunities, 
                        and potential funding through angel investors.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">What Winners Get:</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">₹1,00,000 Prize Pool</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Mentorship from industry experts</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Networking opportunities</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Potential angel investment</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Pilot program opportunities</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">Media recognition & publicity</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration CTA */}
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Participate?</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join us in creating innovative solutions that honor tradition while embracing the future. 
                Register your startup today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.gle/V9cUMpt9rJGgPWa79"
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
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === 'partners' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Potential Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The key stakeholders required to make this event a success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                      {partner.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{partner.category}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mission Tab */}
        {activeTab === 'mission' && (
          <div className="space-y-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission: Bridging Tradition and Technology</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chhath Hackathon 2025 aims to leverage the power of technology to address the 
                challenges and opportunities of a festival celebrated at a massive scale. We're calling on 
                innovative startups, entrepreneurs, and tech enthusiasts to design solutions that make 
                Chhath safer, more hygienic, and more sustainable.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goals:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Target className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solve Real-World Problems</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Identify scalable, cost-efficient, and sustainable technologies that assist government bodies, 
                          civic agencies, local vendors, and devotees.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Users className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Drive Public-Private Collaboration</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Foster a collaborative ecosystem for the safe, hygienic, and smooth conduct of the festival.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Catalyze Local Innovation</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Promote entrepreneurship and job creation while preserving the cultural essence of Chhath.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">A Movement for Change</h2>
              <p className="text-lg mb-6 leading-relaxed text-center max-w-4xl mx-auto">
                This initiative is more than a competition, it's a movement to transform Chhath into a 
                Tech-Enabled Model Festival. By fusing deep-rooted tradition with modern innovation, we can 
                enhance the safety and convenience for millions of devotees while promoting local entrepreneurship 
                and sustainable practices.
              </p>
              <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                The Chhath Hackathon 2025 will set a powerful example for how cultural heritage can be 
                preserved and managed with cutting-edge technology.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join us in creating innovative solutions that honor tradition while embracing the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.gle/V9cUMpt9rJGgPWa79"
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
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
