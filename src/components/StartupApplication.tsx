import React, { useState } from 'react';
import { Upload, Rocket, DollarSign, Users } from 'lucide-react';

export function StartupApplication() {
  const [formData, setFormData] = useState({
    companyName: '',
    founderName: '',
    email: '',
    phone: '',
    website: '',
    stage: '',
    fundingGoal: '',
    currentFunding: '',
    teamSize: '',
    location: '',
    category: '',
    description: '',
    problem: '',
    solution: '',
    traction: '',
    linkedin: '',
    pitchDeck: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        pitchDeck: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Startup application:', formData);
    alert('Thank you for applying! Our investment team will review your submission and contact you within 3-5 business days.');
  };

  return (
    <section id="apply" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apply for Faitech Angels Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are you building the next big faith-tech startup? Apply for funding and mentorship 
            from India's leading faith-technology focused angel network.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <Rocket className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Track</h3>
            <p className="text-gray-600">Get funding decisions in 2-3 weeks, not months</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <DollarSign className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Money</h3>
            <p className="text-gray-600">₹25L - ₹5Cr funding with industry expertise</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <Users className="text-orange-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Access</h3>
            <p className="text-gray-600">Connect with 200+ faith-tech entrepreneurs</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Application Form</h3>
              <p className="text-gray-600">Please provide detailed information about your faith-tech startup</p>
            </div>

            {/* Company Information */}
            <div className="bg-white p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website/App URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://yourapp.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Stage *
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    required
                    value={formData.stage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="prototype">Prototype</option>
                    <option value="mvp">MVP</option>
                    <option value="early-traction">Early Traction</option>
                    <option value="growth">Growth Stage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size *
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    required
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select size</option>
                    <option value="1-2">1-2 people</option>
                    <option value="3-5">3-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="10+">10+ people</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Faitech Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select category</option>
                    <option value="ai-astrology">AI Astrology</option>
                    <option value="virtual-services">Virtual Religious Services</option>
                    <option value="spiritual-wellness">Spiritual Wellness</option>
                    <option value="faith-ecommerce">Faith E-commerce</option>
                    <option value="digital-donations">Digital Donations</option>
                    <option value="religious-education">Religious Education</option>
                    <option value="ar-vr-experiences">AR/VR Spiritual Experiences</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="fundingGoal" className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Goal *
                  </label>
                  <select
                    id="fundingGoal"
                    name="fundingGoal"
                    required
                    value={formData.fundingGoal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select funding goal</option>
                    <option value="25L-50L">₹25L - ₹50L</option>
                    <option value="50L-1Cr">₹50L - ₹1 Cr</option>
                    <option value="1Cr-3Cr">₹1 Cr - ₹3 Cr</option>
                    <option value="3Cr-5Cr">₹3 Cr - ₹5 Cr</option>
                    <option value="5Cr+">₹5 Cr+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Founder Information */}
            <div className="bg-white p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Founder Information</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 mb-2">
                    Founder Name *
                  </label>
                  <input
                    type="text"
                    id="founderName"
                    name="founderName"
                    required
                    value={formData.founderName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Lead founder's name"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile *
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    required
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="founder@yourcompany.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-white p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h4>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Brief description of your faith-tech startup..."
                  />
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                    Problem Statement *
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    required
                    rows={3}
                    value={formData.problem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="What problem are you solving in the faith-tech space?"
                  />
                </div>

                <div>
                  <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-2">
                    Solution *
                  </label>
                  <textarea
                    id="solution"
                    name="solution"
                    required
                    rows={3}
                    value={formData.solution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="How does your solution address the problem?"
                  />
                </div>

                <div>
                  <label htmlFor="traction" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Traction & Metrics
                  </label>
                  <textarea
                    id="traction"
                    name="traction"
                    rows={3}
                    value={formData.traction}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Users, revenue, growth metrics, partnerships, etc."
                  />
                </div>

                <div>
                  <label htmlFor="currentFunding" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Funding Raised
                  </label>
                  <input
                    type="text"
                    id="currentFunding"
                    name="currentFunding"
                    value={formData.currentFunding}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., ₹25L seed round, bootstrapped, etc."
                  />
                </div>
              </div>
            </div>

            {/* Pitch Deck Upload */}
            <div className="bg-white p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Pitch Deck Upload</h4>
              
              <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center">
                <Upload className="text-orange-600 mx-auto mb-4" size={48} />
                <div className="mb-4">
                  <label htmlFor="pitchDeck" className="cursor-pointer">
                    <span className="text-lg font-medium text-gray-900">Upload your pitch deck</span>
                    <p className="text-gray-500 mt-1">PDF, PPT, or PPTX (max 10MB)</p>
                    <input
                      type="file"
                      id="pitchDeck"
                      name="pitchDeck"
                      onChange={handleFileChange}
                      accept=".pdf,.ppt,.pptx"
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.pitchDeck && (
                  <p className="text-sm text-orange-600">
                    Selected: {formData.pitchDeck.name}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => document.getElementById('pitchDeck')?.click()}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Choose File
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <Rocket className="mr-2" size={20} />
                Submit Application
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Our investment committee will review your application within 3-5 business days
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}