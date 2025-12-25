import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedHeader from '../../components/ui/AuthenticatedHeader';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MarketplaceFilters from './components/MarketplaceFilters';
import CreditCard from './components/CreditCard';
import PurchaseModal from './components/PurchaseModal';
import EmptyState from './components/EmptyState';

const CarbonCreditMarketplace = () => {
  const navigate = useNavigate();
  const [isAuthenticated] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [searchQuery] = useState('');
  const [filters, setFilters] = useState({
    projectType: '',
    location: '',
    verificationStandard: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mockCredits = [
    {
      id: 'CC001',
      projectName: 'مبادرة استعادة أشجار المانغروف في أبو ظبي',
      projectImage: "https://images.unsplash.com/photo-1594336422995-76c2f7Aff7f0",
      projectImageAlt: 'منظر جوي لغابة المانغروف الخضراء المورقة مع مسارات مائية متعرجة في منطقة أبو ظبي الساحلية خلال الساعة الذهبية',
      projectType: 'mangrove',
      location: 'أبو ظبي، الإمارات',
      isUAE: true,
      availableTonnage: 5000,
      pricePerTonne: 85,
      currency: 'د.إ',
      verificationStandard: 'Verra (VCS)',
      registryId: 'VCS-2024-AUH-001',
      verificationDate: '2024-11-15',
      description: 'مشروع واسع النطاق لاستعادة أشجار المانغروف على طول ساحل أبو ظبي، حماية التنوع البيولوجي البحري واحتجاز الكربون من خلال زراعة الأنواع الأصلية وإعادة تأهيل النظام البيئي.'
    },
    {
      id: 'CC002',
      projectName: 'برنامج تعويض الكربون لمزرعة شمسية في دبي',
      projectImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1e437e970-1765125660235.png",
      projectImageAlt: 'تركيبة ألواح شمسية واسعة في صحراء دبي مع أفق المدينة الحديث مرئي في الخلفية تحت سماء زرقاء صافية',
      projectType: 'solar',
      location: 'دبي، الإمارات',
      isUAE: true,
      availableTonnage: 8500,
      pricePerTonne: 72,
      currency: 'د.إ',
      verificationStandard: 'Gold Standard',
      registryId: 'GS-2024-DXB-003',
      verificationDate: '2024-10-28',
      description: 'مشروع طاقة متجددة يولد كهرباء نظيفة من خلال تقنية الطاقة الشمسية الكهروضوئية، يقلل من الاعتماد على الوقود الأحفوري ويعوض انبعاثات الكربون في منطقة دبي.'
    },
    {
      id: 'CC003',
      projectName: 'مشروع التشجير الساحلي في الشارقة',
      projectImage: "https://images.unsplash.com/photo-1728352874964-37c22ff467bb",
      projectImageAlt: 'غابة خضراء كثيفة بأشجار طويلة ونمو سفلي في منطقة الشارقة الساحلية مع ضوء الشمس يتسلل عبر المظلة',
      projectType: 'afforestation',
      location: 'الشارقة، الإمارات',
      isUAE: true,
      availableTonnage: 3200,
      pricePerTonne: 68,
      currency: 'د.إ',
      verificationStandard: 'Verra (VCS)',
      registryId: 'VCS-2024-SHJ-002',
      verificationDate: '2024-12-05',
      description: 'مبادرة التشجير الساحلي تزرع أنواع الأشجار الأصلية لمكافحة التصحر، تعزيز التنوع البيولوجي، وإنشاء بالوعات الكربون في إمارة الشارقة.'
    },
    {
      id: 'CC004',
      projectName: 'تحالف حفظ غابة الأمازون المطيرة',
      projectImage: "https://images.unsplash.com/photo-1561389745-97596a161957",
      projectImageAlt: 'مظلة غابة الأمازون المطيرة مع نباتات خضراء زاهية والضباب يرتفع من أرضية الغابة الاستوائية عند الفجر',
      projectType: 'afforestation',
      location: 'البرازيل',
      isUAE: false,
      availableTonnage: 12000,
      pricePerTonne: 55,
      currency: 'دولار أمريكي',
      verificationStandard: 'Verra (VCS)',
      registryId: 'VCS-2024-BRA-045',
      verificationDate: '2024-09-20',
      description: 'مشروع حفظ الغابة المطيرة الدولي يحمي أنظمة الغابات الموجودة ويمنع إزالة الغابات في منطقة الأمازون البرازيلية من خلال شراكات المجتمع.'
    },
    {
      id: 'CC005',
      projectName: 'مشغل أشجار المانغروف في رأس الخيمة',
      projectImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19c5e35eb-1765270103802.png",
      projectImageAlt: 'شتلات المانغروف الصغيرة تنمو في المشغل مع المياه الساحلية وجبال رأس الخيمة في الخلفية',
      projectType: 'mangrove',
      location: 'رأس الخيمة، الإمارات',
      isUAE: true,
      availableTonnage: 2800,
      pricePerTonne: 78,
      currency: 'د.إ',
      verificationStandard: 'Climate Action Reserve',
      registryId: 'CAR-2024-RAK-001',
      verificationDate: '2024-11-30',
      description: 'مشروع مشغل واستعادة أشجار المانغروف ينشئ أنظمة ساحلية جديدة في رأس الخيمة، يدعم الحياة البحرية واحتجاز الكربون.'
    },
    {
      id: 'CC006',
      projectName: 'اعتمادات طاقة الرياح في كينيا',
      projectImage: "https://images.unsplash.com/photo-1694551073674-f8809f1685f4",
      projectImageAlt: 'توربينات رياح حديثة تقف شامخة ضد سماء برتقالية غروب الشمس في منظر كيني مع تلال متدرجة',
      projectType: 'solar',
      location: 'كينيا',
      isUAE: false,
      availableTonnage: 6500,
      pricePerTonne: 48,
      currency: 'دولار أمريكي',
      verificationStandard: 'Gold Standard',
      registryId: 'GS-2024-KEN-012',
      verificationDate: '2024-10-15',
      description: 'مشروع طاقة الرياح يولد كهرباء متجددة في كينيا، يحل محل توليد الطاقة من الوقود الأحفوري ويوفر طاقة نظيفة للمجتمعات المحلية.'
    },
    {
      id: 'CC007',
      projectName: 'إعادة تشجير جبال الفجيرة',
      projectImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1e60a098e-1765893427294.png",
      projectImageAlt: 'منحدرات الجبال في الفجيرة مع أشجار مزروعة حديثا ومنظر تراسيب استعادة المناظر الطبيعية مرئي',
      projectType: 'afforestation',
      location: 'الفجيرة، الإمارات',
      isUAE: true,
      availableTonnage: 1500,
      pricePerTonne: 82,
      currency: 'د.إ',
      verificationStandard: 'Verra (VCS)',
      registryId: 'VCS-2024-FUJ-001',
      verificationDate: '2024-12-10',
      description: 'مشروع إعادة تشجير الجبال في إمارة الفجيرة يزرع أنواعاً أصلية مقاومة للجفاف لمنع تآكل التربة واحتجاز الكربون الجوي.'
    },
    {
      id: 'CC008',
      projectName: 'مشروع استعادة أراضي الخث في إندونيسيا',
      projectImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1899a7a21-1765001145505.png",
      projectImageAlt: 'نظام أراضي الخث المستعاد في إندونيسيا مع قنوات مائية ونباتات متجددة تحت سماء استوائية',
      projectType: 'mangrove',
      location: 'إندونيسيا',
      isUAE: false,
      availableTonnage: 9200,
      pricePerTonne: 52,
      currency: 'دولار أمريكي',
      verificationStandard: 'Verra (VCS)',
      registryId: 'VCS-2024-IDN-078',
      verificationDate: '2024-08-25',
      description: 'مشروع استعادة وحفظ أراضي الخث في إندونيسيا يمنع انبعاثات الكربون من أراضي الخث المتدهورة ويستعيد أنظمة الأراضي الرطبة الحرجة.'
    }
  ];

  const filterCredits = (credits) => {
    let filtered = [...credits];

    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter((credit) =>
        credit?.projectName?.toLowerCase()?.includes(query) ||
        credit?.registryId?.toLowerCase()?.includes(query) ||
        credit?.location?.toLowerCase()?.includes(query)
      );
    }

    if (filters?.projectType) {
      filtered = filtered?.filter((credit) => 
        credit?.projectType?.toLowerCase() === filters?.projectType?.toLowerCase()
      );
    }

    if (filters?.location) {
      if (filters?.location === 'uae') {
        filtered = filtered?.filter((credit) => credit?.isUAE);
      } else if (filters?.location === 'international') {
        filtered = filtered?.filter((credit) => !credit?.isUAE);
      } else {
        filtered = filtered?.filter((credit) => 
          credit?.location?.toLowerCase() === filters?.location?.toLowerCase()
        );
      }
    }

    if (filters?.verificationStandard) {
      filtered = filtered?.filter(
        (credit) => credit?.verificationStandard?.toLowerCase() === 
        filters?.verificationStandard?.toLowerCase()
      );
    }

    if (filters?.minPrice) {
      filtered = filtered?.filter(
        (credit) => parseFloat(credit?.pricePerTonne) >= parseFloat(filters?.minPrice)
      );
    }

    if (filters?.maxPrice) {
      filtered = filtered?.filter(
        (credit) => parseFloat(credit?.pricePerTonne) <= parseFloat(filters?.maxPrice)
      );
    }

    return filtered;
  };

  const filteredCredits = filterCredits(mockCredits);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      projectType: '',
      location: '',
      verificationStandard: '',
      minPrice: '',
      maxPrice: ''
    });
  };

  const handlePurchase = (credit) => {
    setSelectedCredit(credit);
  };

  const handleConfirmPurchase = (purchaseData) => {
    console.log('Purchase confirmed:', purchaseData);
    setSelectedCredit(null);
    alert(`تم الشراء بنجاح!\n\nلقد اشتريت ${purchaseData?.quantity} طن من اعتمادات الكربون.\nالإجمالي: ${purchaseData?.total?.toFixed(2)}\n\nسيتم إنشاء شهادة NFT الخاصة بك وإرسالها إلى لوحة التحكم قريباً.`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthenticatedHeader
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout} 
      />

      <main className="main-content">
        <div className="container-safe py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12" dir="rtl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <Icon name="Leaf" size={20} />
              <span className="text-sm font-medium">اعتمادات الكربون الموثقة</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              سوق اعتمادات الكربون
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              اشترِ اعتمادات الكربون الموثقة من مشاريع الإمارات والدولية. جميع الاعتمادات موثقة بالبلوكشين ومُعاد إنشاؤها كـ NFTs للشفافية.
            </p>
          </div>

          {/* Filters */}
          <MarketplaceFilters
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
            activeFilters={filters}
            hideSort={true}
          />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm md:text-base text-muted-foreground">
              عرض <span className="font-semibold text-foreground">{filteredCredits?.length}</span> اعتماد كربون{filteredCredits?.length !== 1 ? 'ات' : ''}
            </p>
          </div>

          {/* Credits Grid */}
          {filteredCredits?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredCredits.map((credit) => (
                <CreditCard
                  key={credit?.id}
                  credit={credit}
                  onPurchase={handlePurchase}
                />
              ))}
            </div>
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )}
        </div>
      </main>

      {/* Purchase Modal */}
      {selectedCredit && (
        <PurchaseModal
          credit={selectedCredit}
          onClose={() => setSelectedCredit(null)}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </div>
  );
};

export default CarbonCreditMarketplace;