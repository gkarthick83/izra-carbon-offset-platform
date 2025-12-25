import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4" dir="rtl">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon name="SearchX" size={40} className="text-muted-foreground" />
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 text-center">
        لم يتم العثور على اعتمادات
      </h3>
      
      <p className="text-sm md:text-base text-muted-foreground text-center max-w-md mb-6">
        لم نتمكن من العثور على أي اعتمادات كربون تتوافق مع معايير البحث الخاصة بك. حاول تعديل الفلاتر أو شروط البحث.
      </p>
      
      <Button
        variant="outline"
        iconName="RotateCcw"
        iconPosition="left"
        onClick={onReset}
      >
        إعادة تعيين الفلاتر
      </Button>
    </div>
  );
};

export default EmptyState;