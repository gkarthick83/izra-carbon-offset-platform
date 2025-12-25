import React from 'react';
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

  // Hardcoded Arabic content
  const content = {
    hero: {
      badge: "حول منصة إزرع",
      title: "تمكين رؤية الحياد الكربوني في الإمارات",
      subtitle: "أول سوق لتعويض الكربون يعمل بتقنية البلوكشين في الإمارات",
      description: "تربط إزرع رعاة البيئة وبائعي أرصدة الكربون والمشترين الواعين في نظام بيئي شفاف مخصص لتحقيق أهداف الإمارات للحياد الصفري 2050 من خلال استعادة المانغروف وتعويض الكربون المعتمد.",
      cta: "ابدأ الآن"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader
        isAuthenticated={false}
        userRole={null}
        onLogout={() => {}} />


      <main className="flex-grow">
        <section className="relative pt-0 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" dir="rtl">
          <div className="container-safe">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                  <Icon name="Info" size={20} className="text-emerald-400" />
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

                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => navigate('/plant-tree-sponsorship')}
                  className="mt-4"
                >
                  {content.hero.cta}
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2 relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_18c73a028-1766402111306.png"
                  alt="Lush mangrove forest representing IZRA carbon offset ecosystem"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        <MissionSection />
        <HowItWorksSection />
        <StakeholdersSection />
        <ImpactMetricsSection />
        <TechnologySection />
        <FooterSection />
      </main>
    </div>);

};

export default LearnAboutIzra;