import React, { useState } from 'react';
import Icon from '@/components/AppIcon';

const SeasonalCalendar = ({ selectedCategory }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const seasonalData = {
    spices: {
      'Turmeric': { peak: [1, 2, 3], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [1, 2] },
      'Cardamom': { peak: [9, 10, 11], available: [8, 9, 10, 11, 0, 1], harvest: [9, 10] },
      'Black Pepper': { peak: [11, 0, 1], available: [10, 11, 0, 1, 2, 3], harvest: [11, 0] },
      'Cumin Seeds': { peak: [2, 3, 4], available: [1, 2, 3, 4, 5, 6], harvest: [2, 3] }
    },
    agricultural: {
      'Basmati Rice': { peak: [10, 11, 0], available: [9, 10, 11, 0, 1, 2], harvest: [10, 11] },
      'Wheat': { peak: [3, 4, 5], available: [2, 3, 4, 5, 6, 7], harvest: [3, 4] },
      'Cotton': { peak: [9, 10, 11], available: [8, 9, 10, 11, 0, 1], harvest: [9, 10] },
      'Sugarcane': { peak: [11, 0, 1], available: [10, 11, 0, 1, 2, 3], harvest: [11, 0] }
    },
    textiles: {
      'Cotton Fabric': { peak: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [] },
      'Silk Fabric': { peak: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [] }
    },
    handicrafts: {
      'Brass Items': { peak: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [] },
      'Wooden Crafts': { peak: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [] }
    },
    industrial: {
      'Steel Products': { peak: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [] },
      'Chemical Raw Materials': { peak: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], available: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], harvest: [] }
    }
  };

  const currentData = seasonalData[selectedCategory] || {};

  const getMonthStatus = (monthIndex, productData) => {
    if (productData.peak.includes(monthIndex)) return 'peak';
    if (productData.available.includes(monthIndex)) return 'available';
    return 'limited';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'peak': return 'bg-green-500';
      case 'available': return 'bg-primary';
      case 'limited': return 'bg-gray-300';
      default: return 'bg-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'peak': return 'Peak Season';
      case 'available': return 'Available';
      case 'limited': return 'Limited';
      default: return 'Not Available';
    }
  };

  if (!selectedCategory) return null;

  return (
    <div className="bg-white rounded-xl shadow-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-montserrat font-bold text-secondary-dark">
          Seasonal Availability Calendar
        </h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-secondary">Peak Season</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-secondary">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-secondary">Limited</span>
          </div>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setSelectedMonth(selectedMonth === 0 ? 11 : selectedMonth - 1)}
          className="p-2 hover:bg-accent rounded-lg transition-colors duration-300"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        
        <h4 className="text-xl font-montserrat font-semibold text-secondary-dark">
          {months[selectedMonth]} {new Date().getFullYear()}
        </h4>
        
        <button
          onClick={() => setSelectedMonth(selectedMonth === 11 ? 0 : selectedMonth + 1)}
          className="p-2 hover:bg-accent rounded-lg transition-colors duration-300"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(currentData).map(([product, data]) => (
          <div key={product} className="border border-border-light rounded-lg p-4">
            <h5 className="font-montserrat font-semibold text-secondary-dark mb-3">
              {product}
            </h5>
            
            <div className="grid grid-cols-4 gap-1 mb-4">
              {months.map((month, index) => (
                <div
                  key={index}
                  className={`h-8 rounded flex items-center justify-center text-xs font-medium transition-all duration-300 cursor-pointer ${
                    getStatusColor(getMonthStatus(index, data))
                  } ${
                    index === selectedMonth 
                      ? 'ring-2 ring-secondary-dark ring-offset-1' :''
                  } ${
                    getMonthStatus(index, data) === 'peak' || getMonthStatus(index, data) === 'available'
                      ? 'text-white' :'text-secondary'
                  }`}
                  title={`${month} - ${getStatusText(getMonthStatus(index, data))}`}
                >
                  {month.slice(0, 3)}
                </div>
              ))}
            </div>
            
            <div className="text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-secondary-light">Current Status:</span>
                <span className={`font-medium ${
                  getMonthStatus(selectedMonth, data) === 'peak' ? 'text-green-600' :
                  getMonthStatus(selectedMonth, data) === 'available'? 'text-primary' : 'text-gray-500'
                }`}>
                  {getStatusText(getMonthStatus(selectedMonth, data))}
                </span>
              </div>
              
              {data.harvest.length > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-secondary-light">Harvest Season:</span>
                  <span className="text-secondary font-medium">
                    {data.harvest.map(monthIndex => months[monthIndex].slice(0, 3)).join(', ')}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Advance Booking Recommendations */}
      <div className="mt-8 p-4 bg-accent/30 rounded-lg">
        <div className="flex items-start">
          <Icon name="Lightbulb" size={20} className="text-primary mr-3 mt-0.5" />
          <div>
            <h6 className="font-montserrat font-semibold text-secondary-dark mb-2">
              Advance Booking Recommendations
            </h6>
            <p className="text-sm text-secondary-light">
              For peak season products, we recommend placing orders 2-3 months in advance to ensure 
              availability and better pricing. Contact our team for seasonal forecasting and bulk order planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalCalendar;