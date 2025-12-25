import React from 'react';
import Icon from '../../../components/AppIcon';

const RoadmapSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "خارطة طريق الرمز",
    subtitle: "الجدول الزمني للتطوير الاستراتيجي",
    phases: [
      {
        quarter: "الربع الأول 2026",
        title: "إطلاق الرمز",
        status: "upcoming",
        milestones: [
          "بيع الرمز العام (30٪ من العرض)",
          "إدراج DEX وتوفير السيولة",
          "إطلاق برنامج الستاكينغ الأولي",
          "تفعيل إطار الحوكمة"
        ]
      },
      {
        quarter: "الربع الثاني 2026",
        title: "توسيع النظام البيئي",
        status: "upcoming",
        milestones: [
          "إدراجات CEX في البورصات الرئيسية",
          "تقديم مستويات الستاكينغ المحسّنة",
          "أول توزيع إيرادات للحاملين",
          "تكاملات رمز الشراكة"
        ]
      },
      {
        quarter: "الربع الثالث 2026",
        title: "تعزيز الفائدة",
        status: "upcoming",
        milestones: [
          "إطلاق برنامج خصم السوق",
          "ميزات التصويت المتقدمة على الحوكمة",
          "تنفيذ جسر عبر السلاسل",
          "تفعيل آلية حرق الرمز"
        ]
      },
      {
        quarter: "الربع الرابع 2026",
        title: "التوسع العالمي",
        status: "upcoming",
        milestones: [
          "التوسع في الأسواق الدولية",
          "تأهيل المستثمرين المؤسسيين",
          "اقتصاديات الرمز المحسّنة v2.0",
          "توزيع مكافآت الحاملين السنوية"
        ]
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

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {content.phases?.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative z-10">
                      <Icon name="Calendar" size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1 bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                          {phase?.quarter}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {phase?.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {phase?.milestones?.map((milestone, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="CheckCircle" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default RoadmapSection;