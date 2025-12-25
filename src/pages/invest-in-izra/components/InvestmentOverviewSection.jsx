import React from 'react';
import Icon from '../../../components/AppIcon';

const InvestmentOverviewSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "نظرة عامة على الاستثمار",
    subtitle: "لماذا تستثمر في رمز إزرع؟",
    features: [
      {
        icon: "DollarSign",
        title: "مشاركة الإيرادات",
        description: "احصل على 40٪ من جميع رسوم معاملات المنصة (2٪ من صفقات أرصدة الكربون) موزعة بشكل متناسب على حيازات الرموز.",
        highlight: "تدفق دخل سلبي"
      },
      {
        icon: "TrendingUp",
        title: "ارتفاع قيمة الرمز",
        description: "مع نمو اعتماد المنصة وزيادة حجم تداول أرصدة الكربون، من المتوقع أن ترتفع قيمة رمز إزرع.",
        highlight: "إمكانات النمو"
      },
      {
        icon: "Vote",
        title: "حقوق الحوكمة",
        description: "شارك في قرارات المنصة بما في ذلك هياكل الرسوم وموافقات المشاريع وأولويات تطوير النظام البيئي.",
        highlight: "قوة اتخاذ القرار"
      },
      {
        icon: "Shield",
        title: "ميزة سوق الإمارات",
        description: "ميزة السبق في سوق تعويض الكربون المتنامي بسرعة في الإمارات والمتوافق مع استراتيجية الحياد الصفري 2050 الوطنية.",
        highlight: "تموضع استراتيجي"
      }
    ],
    minimumInvestment: {
      title: "حدود الاستثمار الدنيا",
      tiers: [
        { amount: "$1,000", tokens: "10,000 إزرع", tier: "المستوى الأساسي" },
        { amount: "$5,000", tokens: "50,000 إزرع", tier: "قياسي" },
        { amount: "$10,000", tokens: "100,000 إزرع", tier: "متميز" }
      ]
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {content.features?.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature?.title}
                    </h3>
                    <span className="text-xs font-semibold text-primary px-2 py-1 rounded-full bg-primary/10">
                      {feature?.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-muted/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            {content.minimumInvestment.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.minimumInvestment.tiers?.map((tier, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border text-center">
                <div className="text-sm text-muted-foreground mb-2">{tier?.tier}</div>
                <div className="text-3xl font-bold text-primary mb-2">{tier?.amount}</div>
                <div className="text-sm text-foreground">{tier?.tokens}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOverviewSection;