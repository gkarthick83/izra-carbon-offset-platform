import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedHeader from '../../components/ui/AuthenticatedHeader';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import InvestmentOverviewSection from './components/InvestmentOverviewSection';
import TokenAcquisitionSection from './components/TokenAcquisitionSection';
import InvestmentCalculatorSection from './components/InvestmentCalculatorSection';
import RiskDisclosureSection from './components/RiskDisclosureSection';
import InvestorBenefitsSection from './components/InvestorBenefitsSection';
import KYCRequirementsSection from './components/KYCRequirementsSection';
import FooterSection from '../landing-page/components/FooterSection';

const InvestInIzra = () => {
  const navigate = useNavigate();

  // Hardcoded Arabic content
  const content = {
    hero: {
      badge: "فرصة استثمارية",
      title: "استثمر في مستقبل تعويض الكربون في الإمارات",
      subtitle: "رمز إزرع - عوائد مستدامة مع تأثير بيئي",
      description: "انضم إلى أول منصة لتعويض الكربون تعمل بتقنية البلوكشين في الإمارات كمستثمر. اكسب حصة من إيرادات رسوم المنصة، وشارك في الحوكمة، وساهم في تحقيق أهداف الحياد الصفري 2050.",
      cta: "ابدأ الاستثمار"
    },
    quickStats: [
      { label: "سعر الرمز", value: "$0.10", icon: "DollarSign" },
      { label: "الحد الأدنى للاستثمار", value: "$1,000", icon: "Wallet" },
      { label: "حصة الإيرادات", value: "40%", icon: "TrendingUp" },
      { label: "APY المتوقع", value: "12-18%", icon: "BarChart" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AuthenticatedHeader
        isAuthenticated={false}
        userRole={null}
        onLogout={() => {}} />

      <main className="flex-grow">
        <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" dir="rtl">
          <div className="container-safe">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                  <Icon name="TrendingUp" size={20} className="text-emerald-400" />
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
                  {content.quickStats?.map((stat, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 overflow-hidden">
                      <div className="text-lg md:text-xl font-bold text-white mb-1 truncate">
                        {stat?.value}
                      </div>
                      <div className="text-xs text-slate-300 flex items-center gap-1">
                        <Icon name={stat?.icon} size={12} className="text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{stat?.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => navigate('/signup?type=investor')}
                  className="mt-4"
                >
                  {content.hero.cta}
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2 relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_15884c7da-1766402114794.png"
                  alt="Investment growth chart representing IZRA token opportunities"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        <InvestmentOverviewSection />
        <TokenAcquisitionSection />
        <InvestmentCalculatorSection />
        <RiskDisclosureSection />
        <InvestorBenefitsSection />
        <KYCRequirementsSection />
        <FooterSection />
      </main>
    </div>);

};

export default InvestInIzra;