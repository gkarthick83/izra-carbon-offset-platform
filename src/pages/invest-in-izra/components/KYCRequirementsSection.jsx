import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KYCRequirementsSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "متطلبات التحقق من الهوية",
    subtitle: "عملية التحقق للمستثمرين",
    intro: "للامتثال للوائح المالية في الإمارات وضمان أمان المنصة، يجب على جميع المستثمرين إكمال التحقق من الهوية قبل شراء رموز إزرع.",
    requirements: [
      {
        icon: "User",
        title: "المعلومات الشخصية",
        items: ["الاسم القانوني الكامل", "تاريخ الميلاد", "الجنسية", "عنوان السكن"]
      },
      {
        icon: "FileText",
        title: "التحقق من الهوية",
        items: ["هوية صادرة عن الحكومة (جواز السفر/الهوية الإماراتية)", "إثبات العنوان (فاتورة خدمات/كشف حساب بنكي)", "التحقق من الصورة الشخصية"]
      },
      {
        icon: "Briefcase",
        title: "المعلومات المالية",
        items: ["إعلان مصدر الأموال", "الخبرة الاستثمارية", "تقييم تحمل المخاطر"]
      },
      {
        icon: "Award",
        title: "المستثمر المعتمد (اختياري)",
        items: ["التحقق من الدخل (200 ألف دولار + سنويًا)", "توثيق صافي الثروة (1 مليون دولار +)", "الشهادات المهنية"]
      }
    ],
    process: {
      title: "عملية التحقق",
      steps: [
        { number: "1", title: "إنشاء حساب", description: "التسجيل في منصة إزرع مع التحقق من البريد الإلكتروني" },
        { number: "2", title: "تقديم المستندات", description: "تحميل وثائق الهوية والمالية المطلوبة" },
        { number: "3", title: "مراجعة التحقق", description: "يراجع فريقنا طلبك (24-48 ساعة)" },
        { number: "4", title: "ابدأ الاستثمار", description: "بمجرد الموافقة، اشترِ رموز إزرع على الفور" }
      ]
    },
    cta: "ابدأ التحقق من الهوية"
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30" dir="rtl">
      <div className="container-safe">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {content.subtitle}
          </p>
          <p className="text-base text-foreground">
            {content.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.requirements?.map((req, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={req?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {req?.title}
              </h3>
              <ul className="space-y-2">
                {req?.items?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-background rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {content.process.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {content.process.steps?.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step?.number}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {step?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {step?.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
            >
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCRequirementsSection;