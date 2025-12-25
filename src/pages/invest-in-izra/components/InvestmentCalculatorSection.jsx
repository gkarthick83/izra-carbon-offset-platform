import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InvestmentCalculatorSection = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [stakingDuration, setStakingDuration] = useState(12);
  const [growthScenario, setGrowthScenario] = useState('moderate');

  const content = {
    title: "حاسبة الاستثمار",
    subtitle: "توقع عوائدك المحتملة",
    labels: {
      investmentAmount: "مبلغ الاستثمار (دولار أمريكي)",
      stakingDuration: "مدة الستاكينغ (أشهر)",
      growthScenario: "سيناريو نمو المنصة"
    },
    scenarios: [
      { value: 'conservative', label: 'محافظ (8٪ APY)', apy: 0.08 },
      { value: 'moderate', label: 'معتدل (12٪ APY)', apy: 0.12 },
      { value: 'aggressive', label: 'عدواني (18٪ APY)', apy: 0.18 }
    ],
    results: {
      tokensReceived: "رموز إزرع المستلمة",
      stakingRewards: "مكافآت الستاكينغ",
      revenueShare: "حصة الإيرادات المقدرة",
      totalReturn: "إجمالي العائد المقدر"
    }
  };

  const selectedScenario = content.scenarios.find(s => s.value === growthScenario);
  
  const tokenPrice = 0.10;
  const tokensReceived = investmentAmount / tokenPrice;
  const monthlyAPY = selectedScenario?.apy / 12;
  const stakingRewards = tokensReceived * monthlyAPY * stakingDuration;
  const monthlyRevenueShare = (investmentAmount * 0.004) * stakingDuration;
  const totalReturn = investmentAmount + (stakingRewards * tokenPrice) + monthlyRevenueShare;

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {content.labels.investmentAmount}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e?.target?.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-2xl font-bold text-primary mt-2">
                    ${investmentAmount?.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {content.labels.stakingDuration}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    step="3"
                    value={stakingDuration}
                    onChange={(e) => setStakingDuration(Number(e?.target?.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-2xl font-bold text-primary mt-2">
                    {stakingDuration} أشهر
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {content.labels.growthScenario}
                  </label>
                  <div className="space-y-2">
                    {content.scenarios?.map((scenario) => (
                      <button
                        key={scenario?.value}
                        onClick={() => setGrowthScenario(scenario?.value)}
                        className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-colors ${
                          growthScenario === scenario?.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        {scenario?.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">
                العوائد المتوقعة
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">{content.results.tokensReceived}</span>
                  <span className="text-xl font-bold text-foreground">
                    {tokensReceived?.toLocaleString()} IZRA
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">{content.results.stakingRewards}</span>
                  <span className="text-xl font-bold text-foreground">
                    ${(stakingRewards * tokenPrice)?.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">{content.results.revenueShare}</span>
                  <span className="text-xl font-bold text-foreground">
                    ${monthlyRevenueShare?.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border-2 border-primary">
                  <span className="font-semibold text-foreground">{content.results.totalReturn}</span>
                  <span className="text-2xl font-bold text-primary">
                    ${totalReturn?.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Info" size={16} />
                  <span>
                    التوقعات بناءً على ظروف السوق الحالية. قد تختلف العوائد الفعلية.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculatorSection;