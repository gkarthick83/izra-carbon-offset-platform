import React from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "كيف تعمل إزرع",
    subtitle: "نظام بيئي سلس لتعويض الكربون",
    steps: [
      {
        number: "01",
        icon: "UserPlus",
        title: "التسجيل والتحقق",
        description: "أنشئ حسابك وأكمل التحقق من الهوية بناءً على دورك: راعي أو بائع أو مشتري أو مستثمر."
      },
      {
        number: "02",
        icon: "TreePine",
        title: "الرعاية أو البيع",
        description: "يزرع الرعاة أشجار المانغروف في جميع أنحاء إمارات الدولة. يسجل البائعون مشاريع تعويض الكربون المعتمدة."
      },
      {
        number: "03",
        icon: "ShoppingCart",
        title: "تداول الأرصدة",
        description: "تصفح السوق لشراء أرصدة الكربون المعتمدة. يتم تسجيل كل معاملة على البلوكشين لضمان الشفافية."
      },
      {
        number: "04",
        icon: "Award",
        title: "تتبع التأثير",
        description: "راقب تأثيرك البيئي من خلال لوحات تحكم مخصصة تعرض كمية ثاني أكسيد الكربون المعوض والأشجار المزروعة وشهادات NFT."
      }
    ]
  };

  return (
    <section className="py-16 md:py-20" dir="rtl">
      <div className="container-safe">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {content.steps?.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-6 w-full">
                  <div className="text-5xl font-bold text-primary/50 mb-4 w-full text-center">
                    {step?.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step?.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-6 left-full w-1/2 h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;