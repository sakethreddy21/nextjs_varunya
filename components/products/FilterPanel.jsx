import React from 'react';
import Icon from '@/components/AppIcon';

const FilterPanel = ({ 
  activeFilters, 
  setActiveFilters, 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const originRegions = [
    'Kerala', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Punjab', 
    'Haryana', 'Uttar Pradesh', 'Maharashtra', 'West Bengal', 
    'Rajasthan', 'Kashmir', 'Odisha'
  ];

  const certifications = [
    'Organic', 'FSSAI', 'ISO 22000', 'Fair Trade', 'GlobalGAP',
    'GOTS', 'OEKO-TEX', 'BCI', 'Handicrafts Mark', 'GI Tag',
    'ISO 9001', 'ISO 14001', 'REACH'
  ];

  const availabilityOptions = [
    'Year-round', 'Seasonal', 'Peak Season', 'Limited Availability'
  ];

  const orderVolumeRanges = [
    'Small (< 1 ton)', 'Medium (1-10 tons)', 'Large (10-100 tons)', 'Bulk (> 100 tons)'
  ];

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      origin: '',
      certification: '',
      availability: '',
      orderVolume: ''
    });
    setSelectedCategory(null);
  };

  const hasActiveFilters = Object.values(activeFilters).some(filter => filter !== '') || selectedCategory;

  return (
    <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-montserrat font-semibold text-secondary-dark">
          Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-primary hover:text-primary-dark transition-colors duration-300"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-secondary-dark mb-3">Product Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary border-primary' :'border-border group-hover:border-primary'
              }`}>
                {selectedCategory === category.id && (
                  <Icon name="Check" size={12} className="text-white" />
                )}
              </div>
              <span className={`text-sm transition-colors duration-300 ${
                selectedCategory === category.id ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'
              }`}>
                {category.name}
              </span>
              <span className="ml-auto text-xs text-secondary-light">
                {category.productCount}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Origin Region Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-secondary-dark mb-3">Origin Region</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-hide">
          {originRegions.map((region) => (
            <label key={region} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={activeFilters.origin === region}
                onChange={() => handleFilterChange('origin', region)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                activeFilters.origin === region
                  ? 'bg-primary border-primary' :'border-border group-hover:border-primary'
              }`}>
                {activeFilters.origin === region && (
                  <Icon name="Check" size={12} className="text-white" />
                )}
              </div>
              <span className={`text-sm transition-colors duration-300 ${
                activeFilters.origin === region ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'
              }`}>
                {region}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Certification Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-secondary-dark mb-3">Certifications</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-hide">
          {certifications.map((cert) => (
            <label key={cert} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={activeFilters.certification === cert}
                onChange={() => handleFilterChange('certification', cert)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                activeFilters.certification === cert
                  ? 'bg-primary border-primary' :'border-border group-hover:border-primary'
              }`}>
                {activeFilters.certification === cert && (
                  <Icon name="Check" size={12} className="text-white" />
                )}
              </div>
              <span className={`text-sm transition-colors duration-300 ${
                activeFilters.certification === cert ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'
              }`}>
                {cert}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-secondary-dark mb-3">Availability</h4>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="availability"
                checked={activeFilters.availability === option}
                onChange={() => handleFilterChange('availability', option)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                activeFilters.availability === option
                  ? 'bg-primary border-primary' :'border-border group-hover:border-primary'
              }`}>
                {activeFilters.availability === option && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className={`text-sm transition-colors duration-300 ${
                activeFilters.availability === option ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'
              }`}>
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Order Volume Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-secondary-dark mb-3">Order Volume</h4>
        <div className="space-y-2">
          {orderVolumeRanges.map((range) => (
            <label key={range} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="orderVolume"
                checked={activeFilters.orderVolume === range}
                onChange={() => handleFilterChange('orderVolume', range)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                activeFilters.orderVolume === range
                  ? 'bg-primary border-primary' :'border-border group-hover:border-primary'
              }`}>
                {activeFilters.orderVolume === range && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className={`text-sm transition-colors duration-300 ${
                activeFilters.orderVolume === range ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'
              }`}>
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-t border-border-light pt-6">
        <h4 className="text-sm font-medium text-secondary-dark mb-3">Quick Actions</h4>
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-accent rounded-lg transition-all duration-300 flex items-center">
            <Icon name="Star" size={16} className="mr-2" />
            Featured Products
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-accent rounded-lg transition-all duration-300 flex items-center">
            <Icon name="Clock" size={16} className="mr-2" />
            New Arrivals
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-accent rounded-lg transition-all duration-300 flex items-center">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Best Sellers
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;