import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onNavigate, currentLanguage = 'en' }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Videos from /public
  const videos = [
    '/istockphoto-2231596329-640_adpp_is.mp4',
    '/istockphoto-472962909-640_adpp_is.mp4',
    '/istockphoto-1046153262-640_adpp_is.mp4',
  ];

  // Rotate video every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) =>
        prev === videos.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: 'Offset Your Carbon Footprint',
      subtitle: 'Plant UAE Mangroves Today',
      description:
        "Join the UAE's leading carbon offset marketplace. Sponsor mangrove restoration projects and trade verified carbon credits with blockchain transparency.",
      plantTreesCTA: 'Plant Mangrove Trees',
      marketplaceCTA: 'Explore Carbon Credits',
      stats: [
        { value: '50,000+', label: 'Trees Planted', icon: 'TreePine' },
        { value: '2,500+', label: 'Sponsors', icon: 'Users' },
        { value: '15,000', label: 'Tonnes CO₂ Offset', icon: 'Leaf' },
      ],
    },
  };

  const text = content[currentLanguage] || content.en;

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 -mt-20 pt-20">
      <div className="container-safe relative z-10 py-4 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* TEXT — LEFT */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
              <Icon name="Leaf" size={20} className="text-emerald-400" />
              <span className="text-sm md:text-base font-medium text-emerald-300">
                UAE Carbon Offset Platform
              </span>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                {text.title}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-emerald-400 drop-shadow-md">
                {text.subtitle}
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl drop-shadow-md">
              {text.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="TreePine"
                iconPosition="left"
                onClick={() => onNavigate('/plant-tree-sponsorship')}
                className="w-full sm:w-auto"
              >
                {text.plantTreesCTA}
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Store"
                iconPosition="left"
                onClick={() => onNavigate('/carbon-credit-marketplace')}
                className="w-full sm:w-auto border-emerald-400 text-emerald-300 hover:bg-emerald-400/10"
              >
                {text.marketplaceCTA}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              {text.stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={stat.icon} size={24} className="text-emerald-400" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* VIDEO — RIGHT */}
          <div>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
