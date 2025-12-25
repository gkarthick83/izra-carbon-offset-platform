import React from 'react';

const RevenueModelSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "نموذج الإيرادات",
    subtitle: "اقتصاديات مستدامة تعود بالنفع على جميع أصحاب المصلحة",
    model: {
      platformFee: "2%",
      description: "تفرض إزرع رسوم معاملة بنسبة 2٪ على جميع صفقات سوق أرصدة الكربون. يتم توزيع هذه الرسوم على النحو التالي:",
      distribution: [
        { percentage: "40%", recipient: "حاملو رموز إزرع", amount: "0.8٪ من الصفقة", description: "يتم التوزيع بشكل متناسب بناءً على حيازات الرموز" },
        { percentage: "30%", recipient: "عمليات المنصة", amount: "0.6٪ من الصفقة", description: "البنية التحتية والتطوير والصيانة" },
        { percentage: "20%", recipient: "المشاريع البيئية", amount: "0.4٪ من الصفقة", description: "التمويل المباشر لمبادرات الحفاظ على البيئة في الإمارات" },
        { percentage: "10%", recipient: "صندوق الاحتياطي", amount: "0.2٪ من الصفقة", description: "احتياطيات الطوارئ والتطوير المستقبلي" }
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-primary mb-2">
                {content.model.platformFee}
              </div>
              <p className="text-muted-foreground">
                {content.model.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.model.distribution?.map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">{item?.percentage}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item?.recipient}</h4>
                      <p className="text-sm text-primary font-medium mb-1">{item?.amount}</p>
                      <p className="text-xs text-muted-foreground">{item?.description}</p>
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

export default RevenueModelSection;