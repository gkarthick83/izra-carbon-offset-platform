import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const MarketplaceFilters = ({ onFilterChange, onReset, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    projectType: activeFilters?.projectType || '',
    location: activeFilters?.location || '',
    verificationStandard: activeFilters?.verificationStandard || '',
    minPrice: activeFilters?.minPrice || '',
    maxPrice: activeFilters?.maxPrice || ''
  });

  const projectTypeOptions = [
    { value: '', label: 'All Project Types' },
    { value: 'mangrove', label: 'Mangrove Restoration' },
    { value: 'solar', label: 'Solar Energy' },
    { value: 'afforestation', label: 'Afforestation' }
  ];

  const locationOptions = [
    { value: '', label: 'All Locations' },
    { value: 'uae', label: 'UAE Projects', description: 'Local carbon offset projects' },
    { value: 'abu-dhabi', label: 'Abu Dhabi' },
    { value: 'dubai', label: 'Dubai' },
    { value: 'sharjah', label: 'Sharjah' },
    { value: 'ajman', label: 'Ajman' },
    { value: 'umm-al-quwain', label: 'Umm Al Quwain' },
    { value: 'ras-al-khaimah', label: 'Ras Al Khaimah' },
    { value: 'fujairah', label: 'Fujairah' },
    { value: 'international', label: 'International Projects', description: 'Global carbon offset projects' }
  ];

  const verificationOptions = [
    { value: '', label: 'All Standards' },
    { value: 'verra', label: 'Verra (VCS)' },
    { value: 'gold-standard', label: 'Gold Standard' },
    { value: 'climate-action', label: 'Climate Action Reserve' }
  ];

  const handleFilterChange = (field, value) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      projectType: '',
      location: '',
      verificationStandard: '',
      minPrice: '',
      maxPrice: ''
    };
    setFilters(resetFilters);
    onReset();
  };

  const activeFilterCount = Object.values(filters).filter(v => v).length;

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block bg-card rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Icon name="Filter" size={20} className="text-primary" />
            Filter Credits
          </h3>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={handleReset}
            >
              Clear All ({activeFilterCount})
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select
            label="Project Type"
            options={projectTypeOptions}
            value={filters?.projectType}
            onChange={(value) => handleFilterChange('projectType', value)}
          />
          
          <Select
            label="Location"
            options={locationOptions}
            value={filters?.location}
            onChange={(value) => handleFilterChange('location', value)}
          />
          
          <Select
            label="Verification Standard"
            options={verificationOptions}
            value={filters?.verificationStandard}
            onChange={(value) => handleFilterChange('verificationStandard', value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="number"
              label="Min Price"
              placeholder="Min"
              value={filters?.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              min="0"
            />
            <Input
              type="number"
              label="Max Price"
              placeholder="Max"
              value={filters?.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              min={filters?.minPrice || "0"}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          size="sm"
          iconName="Filter"
          iconPosition="left"
          onClick={() => setIsOpen(true)}
          className="w-full"
        >
          Filter Credits {activeFilterCount > 0 && `(${activeFilterCount})`}
        </Button>

        {isOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filter Credits</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>

              <div className="space-y-4">
                <Select
                  label="Project Type"
                  options={projectTypeOptions}
                  value={filters?.projectType}
                  onChange={(value) => handleFilterChange('projectType', value)}
                />
                
                <Select
                  label="Location"
                  options={locationOptions}
                  value={filters?.location}
                  onChange={(value) => handleFilterChange('location', value)}
                />
                
                <Select
                  label="Verification Standard"
                  options={verificationOptions}
                  value={filters?.verificationStandard}
                  onChange={(value) => handleFilterChange('verificationStandard', value)}
                />

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={filters?.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      min="0"
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={filters?.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      min={filters?.minPrice || "0"}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    handleReset();
                    setIsOpen(false);
                  }}
                >
                  Reset
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MarketplaceFilters;