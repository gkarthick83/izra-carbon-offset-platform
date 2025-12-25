import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onNavigate }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Video rotation configuration
  const videos = [
    '/istockphoto-2231596329-640_adpp_is.mp4',
    '/istockphoto-472962909-640_adpp_is.mp4', 
    '/istockphoto-1046153262-640_adpp_is.mp4'
  ];

  // Rotate videos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Hardcoded Arabic content
  const content = {
    title: "عوّض بصمتك الكربونية",
    subtitle: "ازرع أشجار المانغروف في الإمارات اليوم",
    description: "انضم إلى سوق تعويض الكربون الرائد في الإمارات. قم برعاية مشاريع استعادة المانغروف وتداول أرصدة الكربون المعتمدة بشفافية البلوكشين.",
    plantTreesCTA: "ازرع أشجار المانغروف",
    marketplaceCTA: "استكشف أرصدة الكربون",
    stats: [
      { value: "50,000+", label: "شجرة مزروعة" },
      { value: "2,500+", label: "راعي" },
      { value: "15,000", label: "طن من ثاني أكسيد الكربون" }
    ]
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 -mt-20 pt-20">
      <div className="container-safe relative z-10 py-4 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Pane - Left Side */}
          <div className="order-2 lg:order-1">
            <video
              key={videos[currentVideoIndex]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] lg:h-[500px] object-cover opacity-100 rounded-2xl shadow-2xl"
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>
          </div>
          
          {/* Content Pane - Right Side */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
              <span className="text-sm md:text-base font-medium text-emerald-300">
                منصة تعويض الكربون في الإمارات
              </span>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                {content.title}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-emerald-400 drop-shadow-md">
                {content.subtitle}
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl drop-shadow-md">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button
                variant="default"
                size="lg"
                onClick={() => onNavigate('/plant-tree-sponsorship')}
                className="w-full sm:w-auto"
              >
                {content.plantTreesCTA}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('/carbon-credit-marketplace')}
                className="w-full sm:w-auto border-emerald-400 text-emerald-300 hover:bg-emerald-400/10"
              >
                {content.marketplaceCTA}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 text-center lg:text-right">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-right">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;