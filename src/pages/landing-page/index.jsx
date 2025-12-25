import React from 'react';
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

        <EmiratesCoverageSection 
          onNavigate={navigate} 
        />
        
        <SponsorshipPackagesSection 
          onNavigate={handleNavigation}
        />
        
        <BlockchainTransparencySection 
          onNavigate={handleNavigation}
        />
        
        <MarketplacePreviewSection 
          onNavigate={handleNavigation}
        />
        
        <InvestorCallToActionSection 
          onNavigate={handleNavigation}
        />
        
        <PartnerShowcaseSection />
        
        <FooterSection />
      </main>
    </div>
  );
};

export default LandingPage;