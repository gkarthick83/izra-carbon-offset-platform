import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedHeader from '../../components/ui/AuthenticatedHeader';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import MissionSection from './components/MissionSection';
import HowItWorksSection from './components/HowItWorksSection';
import StakeholdersSection from './components/StakeholdersSection';
import ImpactMetricsSection from './components/ImpactMetricsSection';
import TechnologySection from './components/TechnologySection';
import FooterSection from '../landing-page/components/FooterSection';

const LearnAboutIzra = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider content (English & LTR)
  const content = {
    hero: {
      badge: "Our Partners",
      title: "Building a Sustainable Future Together",
      subtitle: "Where Technology Meets Environmental Impact",
      description:
        "We bring together deep environmental expertise and advanced digital innovation to transform carbon neutrality goals into measurable, real-world action.",
      companies: [
        {
          name: "Nature for Environmental & Agricultural Solutions (NEAS)",
          role: "Environmental & Agricultural Partner",
          description:
            "A leading UAE-based organization dedicated to ecosystem restoration, mangrove conservation, and sustainable agricultural practices. With strong on-ground expertise and regional knowledge, NEAS leads impactful environmental initiatives that protect natural ecosystems while supporting long-term sustainability goals.",
          website: "https://www.neas.ae/about-us",
          logo: "/nature-logo-right.avif",
          image: "/natureneas.jpg"
        },
        {
          name: "Ultranous",
          role: "Technology Partner",
          description:
            "A technology innovation company specializing in building intelligent digital platforms using AI, data, and emerging technologies. With a strong focus on ESG, digital agriculture, and sustainability-driven solutions, Ultranous designs scalable systems that convert complex environmental objectives into actionable, measurable outcomes.",
          website: "https://ultranous.ae/",
          logo: "/logo-ultra.png",
          image: "/ultra.jpg"
        },
        {
          name: "IZRA",
          role: "Our Platform",
          description:
            "Born from the collaboration between Ultranous and NEAS, IZRA bridges advanced technology with hands-on environmental expertise. By unifying digital innovation with real-world sustainability action, IZRA educates, empowers, and accelerates meaningful environmental impact across communities, industries, and ecosystems.",
          website: "/",
          logo: null,
          image: "/izra.jpg"
        }
      ]
    }
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.hero.companies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [content.hero.companies.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + content.hero.companies.length) % content.hero.companies.length);
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % content.hero.companies.length);

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader isAuthenticated={false} userRole={null} onLogout={() => {}} />

      <main className="flex-grow">
        {/* Hero Slider Section */}
        <section
          className="relative pt-0 pb-2 md:pb-3 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
          dir="ltr"
        >
          <div className="container-safe">
            <div className="space-y-3">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                  <Icon name="Info" size={12} className="text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-300">
                    {content.hero.badge}
                  </span>
                </div>

                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {content.hero.title}
                </h1>

                <h2 className="text-sm md:text-base font-semibold text-emerald-300">
                  {content.hero.subtitle}
                </h2>

                <p className="text-xs text-slate-200 max-w-xl mx-auto">
                  {content.hero.description}
                </p>
              </div>

              {/* Slider */}
              <div className="relative w-full overflow-hidden">
                <div className="relative h-[360px] md:h-[420px]">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {content.hero.companies.map((company, index) => (
                      <div key={index} className="w-full flex-shrink-0 h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full p-6 items-center">
                          {/* Info */}
                          <div className="space-y-3 text-left">
                            {company.logo && (
                              <div className="flex justify-start mb-2">
                                <img
                                  src={company.logo}
                                  alt={`${company.name} logo`}
                                  className="w-16 h-16 object-contain"
                                />
                              </div>
                            )}

                            <h3 className="text-lg font-bold text-white">
                              {company.name}
                            </h3>

                            <span className="inline-block px-3 py-1 text-sm rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                              {company.role}
                            </span>

                            <p className="text-sm text-slate-200 leading-relaxed">
                              {company.description}
                            </p>

                            <Button
                              size="sm"
                              onClick={() =>
                                company.website === '/'
                                  ? navigate('/')
                                  : window.open(company.website, '_blank')
                              }
                            >
                              Visit Website
                            </Button>
                          </div>

                          {/* Image */}
                          <div className="relative rounded-xl overflow-hidden h-[220px] md:h-[260px]">
                            <img
                              src={company.image}
                              alt={company.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-3 rounded-full"
                  >
                    <Icon name="ChevronRight" size={20} className="rotate-180" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-3 rounded-full"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {content.hero.companies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-emerald-500 w-8'
                          : 'bg-slate-600 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing sections - unchanged */}
        <MissionSection currentLanguage="en" />
        <HowItWorksSection currentLanguage="en" />
        <StakeholdersSection currentLanguage="en" />
        <ImpactMetricsSection currentLanguage="en" />
        <TechnologySection currentLanguage="en" />
        <FooterSection currentLanguage="en" />
      </main>
    </div>
  );
};

export default LearnAboutIzra;
