import React from 'react';
import Icon from '../../../components/AppIcon';

const TokenDistributionSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "توزيع الرموز",
    subtitle: "توزيع عادل عبر أصحاب المصلحة",
    totalSupply: "إجمالي العرض: 1,000,000,000 إزرع",
    distribution: [
      { category: "البيع العام", percentage: 30, amount: "300,000,000", color: "bg-blue-500", description: "متاح للشراء العام" },
      { category: "صندوق النظام البيئي", percentage: 25, amount: "250,000,000", color: "bg-green-500", description: "تطوير المنصة والمكافآت" },
      { category: "الفريق والمستشارون", percentage: 15, amount: "150,000,000", color: "bg-purple-500", description: "جدول استحقاق 4 سنوات" },
      { category: "الشركاء الاستراتيجيون", percentage: 15, amount: "150,000,000", color: "bg-amber-500", description: "الشراكات والتكاملات" },
      { category: "مجمع السيولة", percentage: 10, amount: "100,000,000", color: "bg-teal-500", description: "توفير سيولة DEX" },
      { category: "الاحتياطي", percentage: 5, amount: "50,000,000", color: "bg-red-500", description: "صندوق الطوارئ" }
    ]
  };
  const [activeIndex, setActiveIndex] = React.useState(null);

  const COLORS = [
    '#3B82F6', // blue-500
    '#10B981', // green-500
    '#8B5CF6', // purple-500
    '#F59E0B', // amber-500
    '#0D9488', // teal-500
    '#EF4444'  // red-500
  ];

  const icons = [
    'PieChart',
    'Database',
    'Users',
    'Handshake',
    'DollarSign',
    'Shield'
  ];

  return (
    <section className="py-8 w-full" dir="rtl">
      <div className="w-full px-4">
        <div className="w-full mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-1">
            {content.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">
            {content.totalSupply}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.distribution?.map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/5 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${COLORS[index % COLORS.length]}20` }}
                >
                  <Icon 
                    name={icons[index % icons.length]} 
                    className="w-5 h-5" 
                    style={{ color: COLORS[index % COLORS.length] }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-foreground">
                      {item.category}
                    </h3>
                    <span className="text-base font-medium text-primary">
                      {item.percentage}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.amount}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenDistributionSection;