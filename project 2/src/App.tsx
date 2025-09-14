import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { AboutFaitech } from './components/AboutFaitech';
import { MarketOpportunity } from './components/MarketOpportunity';
import { SuccessStories } from './components/SuccessStories';
import { InvestorForm } from './components/InvestorForm';
import { StartupApplication } from './components/StartupApplication';
import { WhatsAppChat } from './components/WhatsAppChat';
import { Footer } from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroBanner />
      <AboutFaitech />
      <MarketOpportunity />
      <SuccessStories />
      <InvestorForm />
      <StartupApplication />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;