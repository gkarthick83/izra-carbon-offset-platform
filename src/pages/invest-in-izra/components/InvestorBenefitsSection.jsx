import React from 'react';
import Icon from '../../../components/AppIcon';

const InvestorBenefitsSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "فوائد المستثمر",
    subtitle: "مزايا حصرية لحاملي رموز إزرع",
    benefits: [
      {
        icon: "Vote",
        title: "حقوق التصويت على الحوكمة",
        description: "شارك في قرارات المنصة بما في ذلك هياكل الرسوم وموافقات المشاريع وتطوير النظام البيئي.",
        features: ["تقديم المقترحات", "قوة التصويت بناءً على الحيازات", "اجتماعات الحوكمة الفصلية"]
      },
      {
        icon: "Zap",
        title: "الوصول الحصري للمنصة",
        description: "الوصول ذو الأولوية إلى مشاريع أرصدة الكربون الجديدة وفرص الاستثمار المبكرة وميزات السوق المميزة.",
        features: ["الوصول المبكر للمشروع", "تحليلات متميزة", "دعم ذو أولوية"]
      },
      {
        icon: "Target",
        title: "فرص المشاريع المبكرة",
        description: "الوصول الأول إلى مشاريع تعويض الكربون عالية الجودة قبل الإدراج العام، مما يزيد من إمكانات الاستثمار.",
        features: ["الوصول قبل الإطلاق", "تسعير مخفض", "مشاريع حصرية"]
      },
      {
        icon: "Award",
        title: "التقدير المجتمعي",
        description: "الاعتراف كقائد بيئي، وفعاليات حصرية، وفرص التواصل مع محترفي الاستدامة.",
        features: ["شارة المستثمر", "فعاليات حصرية", "منتديات التواصل"]
      },
      {
        icon: "BarChart",
        title: "تحليلات متقدمة",
        description: "الوصول إلى تحليلات المنصة المميزة ورؤى السوق وأدوات تتبع أداء الاستثمار.",
        features: ["لوحات معلومات في الوقت الفعلي", "تقارير السوق", "مقاييس الأداء"]
      },
      {
        icon: "Gift",
        title: "مكافآت الولاء",
        description: "مكافآت رمزية إضافية للحيازة طويلة الأجل والمشاركة في المنصة وبرامج الإحالة.",
        features: ["مكافآت الحيازة", "مكافآت الإحالة", "حوافز النشاط"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.benefits?.map((benefit, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={benefit?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit?.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {benefit?.description}
              </p>
              <div className="space-y-2">
                {benefit?.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorBenefitsSection;