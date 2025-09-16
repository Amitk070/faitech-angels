import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { AboutFaithTech } from './components/AboutFaithTech';
import { MarketOpportunity } from './components/MarketOpportunity';
import { SuccessStories } from './components/SuccessStories';
import { TeamSection } from './components/TeamSection';
import { ChhathPujaHackathon } from './components/ChhathPujaHackathon';
import { ChhathHackathon2025 } from './components/ChhathHackathon2025';
import { InvestorForm } from './components/InvestorForm';
import { StartupApplication } from './components/StartupApplication';
import { BlogPage } from './components/BlogPage';
import { InvestmentOpportunities } from './components/InvestmentOpportunities';
import { WhatsAppChat } from './components/WhatsAppChat';
import { Footer } from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutFaithTech />;
      case 'chhath-hackathon':
        return <ChhathHackathon2025 />;
      case 'blog':
        return <BlogPage />;
      case 'investment':
        return <InvestmentOpportunities />;
      default:
        return (
          <>
            <HeroBanner />
            <ChhathPujaHackathon />
            <MarketOpportunity />
            <SuccessStories />
            <TeamSection />
            <InvestorForm />
            <StartupApplication />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;