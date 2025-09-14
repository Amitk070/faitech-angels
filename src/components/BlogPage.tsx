import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Hash, Clock, TrendingUp, Lightbulb, Heart, Shield, Smartphone } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of Faith Tech: How Technology is Transforming Spiritual Experiences",
    excerpt: "Exploring how AI, VR, and mobile apps are revolutionizing the way people connect with their faith, from virtual temple visits to personalized spiritual guidance.",
    content: "The intersection of technology and spirituality has given birth to an unprecedented movement: Faith Tech. This rapidly growing sector is transforming how billions of people worldwide engage with their religious practices, creating new opportunities for entrepreneurs and investors alike.\n\nFrom virtual reality temple visits that allow devotees to experience sacred spaces from anywhere in the world, to AI-powered spiritual guidance apps that provide personalized religious teachings, Faith Tech is breaking down geographical and accessibility barriers. The sector has seen explosive growth, with the global Faith Tech market projected to reach $65 billion by 2028.\n\nWhat makes Faith Tech particularly compelling is its ability to preserve cultural traditions while making them more accessible. For instance, during the COVID-19 pandemic, virtual darshan platforms enabled millions of Hindus to continue their daily prayers when physical temples were closed. Similarly, Muslim prayer apps with accurate Qibla direction and prayer time notifications have become essential tools for Muslims worldwide.\n\nThe economic impact is equally significant. Faith-based e-commerce platforms are creating new revenue streams for religious institutions, while crowdfunding platforms specifically designed for religious causes are democratizing philanthropy. This convergence of technology and faith is not just about convenience—it's about creating deeper, more meaningful spiritual connections in our increasingly digital world.",
    author: "Dr. Priya Sharma",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "VR", "Spiritual Apps", "Digital Transformation"],
    image: "/images/blog/faith-tech-rise.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Bridging Ancient Wisdom with Modern Innovation: The Chhath Festival Digital Revolution",
    excerpt: "How technology is preserving and enhancing one of India's most sacred festivals, from crowd management to environmental sustainability.",
    content: "The Chhath festival, one of India's most ancient and sacred celebrations, is experiencing a digital renaissance. As millions of devotees gather at riverbanks across Bihar, Jharkhand, and Uttar Pradesh, technology is playing a crucial role in ensuring their safety, comfort, and the festival's environmental sustainability.\n\nSmart crowd management systems using AI and IoT sensors are helping authorities monitor gathering sizes in real-time, preventing dangerous overcrowding while ensuring devotees can participate safely. Mobile apps provide real-time updates on ghat availability, weather conditions, and safety protocols, making the pilgrimage more accessible to elderly devotees and those with mobility challenges.\n\nEnvironmental technology is particularly crucial for Chhath, given its focus on water bodies and natural elements. Water quality monitoring systems ensure the safety of devotees during holy dips, while waste management apps help maintain the cleanliness of sacred riverbanks. Solar-powered charging stations at ghats provide essential services while honoring the festival's connection to the sun god.\n\nThe economic impact is equally transformative. Digital platforms are connecting local vendors with devotees, ensuring fair pricing and quality of prasad offerings. Mobile payment systems have made transactions more transparent and secure, while also providing valuable data for local economic development.\n\nPerhaps most importantly, technology is helping preserve the cultural essence of Chhath while making it more inclusive. Live streaming of rituals allows those who cannot physically attend to participate spiritually, while translation apps help non-Hindi speakers understand the significance of various ceremonies. This digital evolution ensures that ancient traditions remain vibrant and relevant in our modern world.",
    author: "Rajesh Kumar",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Culture",
    tags: ["Chhath Festival", "Crowd Management", "Environmental Tech", "Cultural Preservation"],
    image: "/images/blog/chhath-digital.jpg",
    featured: true
  },
  {
    id: 3,
    title: "The Psychology of Faith-Based Technology: Why Digital Spirituality Resonates",
    excerpt: "Understanding the psychological factors that make Faith Tech solutions so effective and how they enhance rather than replace traditional spiritual practices.",
    content: "The success of Faith Tech isn't just about technological innovation—it's deeply rooted in human psychology and the fundamental need for spiritual connection. Understanding these psychological drivers is crucial for creating meaningful Faith Tech solutions that enhance rather than replace traditional practices.\n\nResearch shows that digital spiritual experiences activate the same neural pathways as physical religious practices. When someone uses a meditation app or participates in virtual prayer, their brain releases similar neurotransmitters associated with peace, fulfillment, and spiritual connection. This neurological basis explains why Faith Tech solutions can be so effective.\n\nPersonalization is another key psychological factor. AI-powered spiritual guidance apps can adapt to individual user preferences, learning patterns, and spiritual needs. This creates a more intimate and relevant experience than one-size-fits-all traditional approaches. Users feel heard and understood, leading to deeper engagement and spiritual growth.\n\nCommunity building through technology addresses another fundamental human need—belonging. Faith-based social platforms create virtual communities where people can share experiences, seek guidance, and support each other's spiritual journeys. These digital communities often extend beyond geographical boundaries, creating global networks of like-minded individuals.\n\nThe convenience factor shouldn't be underestimated. In our fast-paced world, many people struggle to find time for traditional spiritual practices. Faith Tech solutions make spirituality more accessible by fitting into busy schedules—whether it's a 5-minute meditation during a commute or a quick prayer reminder during a work break.\n\nHowever, the most successful Faith Tech solutions maintain a delicate balance between innovation and tradition. They enhance existing practices rather than replacing them, respecting the sacred nature of religious rituals while making them more accessible and meaningful for modern practitioners.",
    author: "Dr. Anjali Patel",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Psychology",
    tags: ["Digital Psychology", "Spiritual Connection", "Personalization", "Community Building"],
    image: "/images/blog/psychology-faith-tech.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Investment Opportunities in Faith Tech: A $65 Billion Market with Untapped Potential",
    excerpt: "Analyzing the Faith Tech investment landscape, key growth sectors, and what investors need to know about this rapidly expanding market.",
    content: "The Faith Tech sector represents one of the most promising yet underexplored investment opportunities in today's market. With a current valuation of over $65 billion and projected growth to nearly double by 2028, Faith Tech is attracting attention from both traditional VCs and impact investors seeking meaningful returns.\n\nThe investment landscape is diverse, spanning multiple verticals. Virtual religious services, including online temples, churches, and mosques, have seen explosive growth, particularly post-pandemic. These platforms generate revenue through donations, premium memberships, and virtual offerings, creating sustainable business models with high user retention.\n\nSpiritual wellness apps represent another high-growth segment. Meditation, prayer, and mindfulness apps have millions of active users worldwide, with monetization through subscriptions, in-app purchases, and corporate wellness programs. The recurring revenue model makes these particularly attractive to investors.\n\nFaith-based e-commerce is emerging as a significant opportunity. Platforms selling religious artifacts, books, and digital content are tapping into a massive market of devout consumers who prefer purchasing from faith-aligned businesses. The trust factor in religious commerce often leads to higher customer lifetime value.\n\nEducational technology focused on religious learning is another growing sector. Online courses, virtual religious schools, and interactive learning platforms are democratizing access to religious education, creating new revenue streams while serving important social functions.\n\nFor investors, Faith Tech offers several advantages: passionate user bases, high engagement rates, and often recession-resistant demand. However, it also requires cultural sensitivity, understanding of religious nuances, and careful navigation of regulatory considerations. The most successful Faith Tech investments come from teams that combine technological expertise with deep respect for religious traditions.\n\nThe key to successful Faith Tech investing lies in identifying solutions that solve real problems for religious communities while maintaining authenticity and respect for traditional practices. As the sector continues to mature, early investors in well-positioned Faith Tech companies stand to benefit from both financial returns and meaningful social impact.",
    author: "Michael Chen",
    date: "2024-11-28",
    readTime: "9 min read",
    category: "Investment",
    tags: ["Investment", "Market Analysis", "Faith Tech", "Venture Capital"],
    image: "/images/blog/investment-opportunities.jpg",
    featured: true
  },
  {
    id: 5,
    title: "Building Inclusive Faith Tech: Ensuring Technology Serves All Communities",
    excerpt: "How Faith Tech companies are addressing accessibility, cultural sensitivity, and inclusivity to serve diverse religious communities worldwide.",
    content: "Inclusivity isn't just a buzzword in Faith Tech—it's a fundamental requirement for creating technology that truly serves diverse religious communities. As Faith Tech companies expand globally, they must navigate complex cultural, linguistic, and accessibility challenges to ensure their solutions are meaningful and respectful to all users.\n\nLanguage localization goes far beyond simple translation in Faith Tech. Religious texts, prayers, and spiritual concepts often have deep cultural meanings that can't be directly translated. Successful Faith Tech companies invest in cultural consultants and native speakers who understand both the language and the spiritual context of their target communities.\n\nAccessibility is another critical consideration. Many religious practices involve physical movements, visual elements, or audio components that may not be accessible to users with disabilities. Innovative solutions include haptic feedback for prayer apps, audio descriptions for visual religious content, and voice-controlled interfaces for users with limited mobility.\n\nCultural sensitivity extends to user interface design, color choices, and even the timing of notifications. For example, a prayer reminder app must respect different time zones, cultural calendars, and individual preferences for when and how they want to be reminded of religious obligations.\n\nEconomic inclusivity is equally important. Faith Tech solutions must be affordable and accessible to users across different economic backgrounds. This might involve freemium models, community sponsorship programs, or partnerships with religious organizations to subsidize costs for underserved communities.\n\nData privacy and security take on special significance in Faith Tech, where users share deeply personal spiritual information. Companies must implement robust privacy protections and be transparent about data usage, especially when dealing with sensitive religious data.\n\nThe most successful Faith Tech companies are those that actively engage with the communities they serve, seeking feedback, understanding needs, and continuously adapting their solutions. This community-driven approach ensures that technology enhances rather than disrupts traditional religious practices, creating lasting value for users and sustainable business models for companies.\n\nAs Faith Tech continues to grow, the companies that prioritize inclusivity and cultural sensitivity will not only serve their users better but also build stronger, more resilient businesses that can thrive in diverse global markets.",
    author: "Sarah Johnson",
    date: "2024-11-20",
    readTime: "6 min read",
    category: "Inclusivity",
    tags: ["Accessibility", "Cultural Sensitivity", "Inclusivity", "Global Reach"],
    image: "/images/blog/inclusive-faith-tech.jpg",
    featured: false
  }
];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Technology', 'Culture', 'Psychology', 'Investment', 'Inclusivity'];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Faith Tech Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Exploring the intersection of technology and spirituality through expert insights, 
              market analysis, and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.slice(0, 2).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-yellow-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleReadMore(post)}
                      className="text-orange-600 hover:text-orange-700 font-semibold flex items-center"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleReadMore(post)}
                    className="w-full mt-4 text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center justify-center"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Faith Tech Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles, market insights, and Faith Tech innovations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedPost.readTime}
                </div>
                <div className="flex items-center">
                  <Hash className="w-4 h-4 mr-1" />
                  {selectedPost.category}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => (
                    <span key={index}>
                      {paragraph}
                      {index < selectedPost.content.split('\n\n').length - 1 && <><br /><br /></>}
                    </span>
                  ))}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
