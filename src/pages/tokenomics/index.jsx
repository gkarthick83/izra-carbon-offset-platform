import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedHeader from '../../components/ui/AuthenticatedHeader';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import TokenDistributionSection from './components/TokenDistributionSection';
import RevenueModelSection from './components/RevenueModelSection';
import StakingSection from './components/StakingSection';
import RoadmapSection from './components/RoadmapSection';
import FooterSection from '../landing-page/components/FooterSection';

const Tokenomics = () => {
  const navigate = useNavigate();

  // Hardcoded Arabic content
  const content = {
    hero: {
      badge: "اقتصاديات رمز إزرع",
      title: "تعزيز النمو المستدام",
      subtitle: "نموذج رمز شفاف يتماشى مع التأثير البيئي",
      description: "يعمل رمز إزرع كمحرك اقتصادي لنظام تعويض الكربون الخاص بنا، مما يتيح الحوكمة ومشاركة الإيرادات وتحفيز العمل البيئي في جميع أنحاء الإمارات.",
      cta: "استثمر في إزرع"
    },
    stats: [
      { label: "إجمالي العرض", value: "1,000,000,000", suffix: "إزرع" },
      { label: "السعر الأولي", value: "$0.10", suffix: "دولار" },
      { label: "رسوم المنصة", value: "2%", suffix: "" },
      { label: "حصة المستثمر", value: "40%", suffix: "" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AuthenticatedHeader
        isAuthenticated={false}
        userRole={null}
        onLogout={() => {}} 
      />

      <main className="flex-grow">
        <section className="relative pt-0 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" dir="rtl">
          <div className="container-safe">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                  <Icon name="DollarSign" size={20} className="text-emerald-400" />
                  <span className="text-sm md:text-base font-medium text-emerald-300">
                    {content.hero.badge}
                  </span>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                    {content.hero.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-emerald-300 drop-shadow-md">
                    {content.hero.subtitle}
                  </h2>
                </div>

                <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl drop-shadow-md">
                  {content.hero.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  {content.stats?.map((stat, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 break-words">
                      <div className="text-base md:text-lg font-bold text-white mb-1 break-all">
                        {stat?.value} {stat?.suffix && <span className="text-sm font-medium">{stat.suffix}</span>}
                      </div>
                      <div className="text-xs text-slate-300 break-words">
                        {stat?.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  iconName="TrendingUp"
                  iconPosition="right"
                  onClick={() => navigate('/invest-in-izra')}
                  className="mt-4"
                >
                  {content.hero.cta}
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2 relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_140eb1e41-1766402113127.png"
                  alt="Digital cryptocurrency tokens representing IZRA tokenomics"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        <TokenDistributionSection />
        <RevenueModelSection />
        <StakingSection />
        <RoadmapSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Tokenomics;