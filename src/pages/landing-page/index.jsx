import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedHeader from '../../components/ui/AuthenticatedHeader';
import HeroSection from './components/HeroSection';
import EmiratesCoverageSection from './components/EmiratesCoverageSection';
import SponsorshipPackagesSection from './components/SponsorshipPackagesSection';
import BlockchainTransparencySection from './components/BlockchainTransparencySection';
import MarketplacePreviewSection from './components/MarketplacePreviewSection';
import InvestorCallToActionSection from './components/InvestorCallToActionSection';
import PartnerShowcaseSection from './components/PartnerShowcaseSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);

    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem('language') || 'en';
      setCurrentLanguage(newLanguage);
    };

    window.addEventListener('storage', handleLanguageChange);
    const interval = setInterval(handleLanguageChange, 100);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      clearInterval(interval);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader 
        isAuthenticated={false}
        userRole={null}
        onLogout={() => {}}
      />

      <main className="main-content">
        <HeroSection 
          onNavigate={handleNavigation}
        />
        <EmiratesCoverageSection currentLanguage={currentLanguage} />
        <SponsorshipPackagesSection 
          currentLanguage={currentLanguage} 
          onNavigate={handleNavigation}
        />
        <BlockchainTransparencySection currentLanguage={currentLanguage} />
        <MarketplacePreviewSection 
          currentLanguage={currentLanguage} 
          onNavigate={handleNavigation}
        />
        <InvestorCallToActionSection 
          currentLanguage={currentLanguage} 
          onNavigate={handleNavigation}
        />
        <PartnerShowcaseSection currentLanguage={currentLanguage} />
      </main>

      <FooterSection 
        currentLanguage={currentLanguage} 
        onNavigate={handleNavigation}
      />
    </div>
  );
};

export default LandingPage;