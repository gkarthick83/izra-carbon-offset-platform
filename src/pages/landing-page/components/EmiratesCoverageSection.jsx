import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const EmiratesCoverageSection = () => {
  // Hardcoded Arabic content
  const content = {
    title: "تغطية المانغروف في جميع أنحاء الإمارات",
    subtitle: "استعادة النظم البيئية الساحلية في جميع الإمارات السبع",
    description: "تمتد مشاريع استعادة المانغروف لدينا على طول الساحل الإماراتي بأكمله، من أبوظبي إلى الفجيرة، لحماية التنوع البيولوجي وعزل الكربون.",
    viewMapCTA: "عرض خريطة التغطية"
  };

  const emirates = [
  {
    name: "أبوظبي",
    zones: 3,
    trees: 25000,
    image: "https://images.unsplash.com/photo-1599011279778-6b0339302539",
    imageAlt: "Abu Dhabi coastal mangrove forest with clear blue water and modern city skyline in background during sunset"
  },
  {
    name: "دبي",
    zones: 2,
    trees: 12000,
    image: "https://images.unsplash.com/photo-1572583271269-baa30a8bc441",
    imageAlt: "Dubai mangrove sanctuary with dense green vegetation and calm waters reflecting iconic Burj Khalifa tower"
  },
  {
    name: "الشارقة",
    zones: 2,
    trees: 8000,
    image: "https://images.unsplash.com/photo-1643276715928-f0210284bea8",
    imageAlt: "Sharjah coastal mangrove area with traditional fishing boats and lush green mangrove trees along waterway"
  },
  {
    name: "عجمان",
    zones: 1,
    trees: 3000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_145dc0179-1765270106196.png",
    imageAlt: "Ajman mangrove restoration site with young mangrove saplings and coastal development in distance"
  },
  {
    name: "أم القيوين",
    zones: 1,
    trees: 4000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6987a93-1766400237492.png",
    imageAlt: "Umm Al Quwain pristine mangrove ecosystem with diverse bird species and crystal clear tidal waters"
  },
  {
    name: "رأس الخيمة",
    zones: 2,
    trees: 6000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c5e35eb-1765270103802.png",
    imageAlt: "Ras Al Khaimah mangrove forest with dramatic mountain backdrop and winding coastal waterways"
  },
  {
    name: "الفجيرة",
    zones: 1,
    trees: 2000,
    image: "https://images.unsplash.com/photo-1690559061011-5761a349cbf0",
    imageAlt: "بيئة المانغروف الساحلية في الفجيرة مع شاطئ صخري ومياه خليج عمان الزرقاء الفيروزية"
  }];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30" dir="rtl">
      <div className="container-safe">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-semibold mb-4">
            {content.subtitle}
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {emirates?.map((emirate, index) =>
          <div
            key={index}
            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-smooth hover-lift">

              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                src={emirate?.image}
                alt={emirate?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {emirate.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="grid grid-cols-2 gap-4" style={{ direction: 'rtl' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div className="rtl:text-right">
                      <div className="text-xs text-muted-foreground">
                        المناطق
                      </div>
                      <div className="text-lg font-bold text-foreground">{emirate.zones}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon name="TreePine" size={20} className="text-success" />
                    </div>
                    <div className="rtl:text-right">
                      <div className="text-xs text-muted-foreground">
                        الأشجار
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {emirate.trees?.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default EmiratesCoverageSection;