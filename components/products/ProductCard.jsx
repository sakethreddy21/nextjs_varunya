import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const ProductCard = ({ product, viewMode }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Handle inquiry form submission
    setShowInquiryForm(false);
    alert('Inquiry submitted successfully! We will contact you within 24 hours.');
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
        <div className="flex items-center p-6">
          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 mr-6">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-secondary-dark mb-1">
                  {product.name}
                </h3>
              {/* <div className="flex items-center text-sm text-secondary-light">
                <Icon name="MapPin" size={14} className="mr-1" />
                <span>{product.origin}</span>
              </div> */}
              </div>
            {/* <div className="text-right">
              <div className="text-lg font-semibold text-primary">{product.priceRange}</div>
              <div className="text-sm text-secondary-light">MOQ: {product.minOrderQuantity}</div>
            </div> */}
            </div>
            
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <span className="text-xs text-secondary-light">Peak Season:</span>
              <div className="text-sm font-medium text-secondary">{product.peakSeason}</div>
            </div>
            <div>
              <span className="text-xs text-secondary-light">Availability:</span>
              <div className="text-sm font-medium text-secondary">{product.seasonalAvailability}</div>
            </div>
            <div>
              <span className="text-xs text-secondary-light">Certifications:</span>
              <div className="text-sm font-medium text-secondary">{product.certifications.length} certs</div>
            </div>
            <div>
              <span className="text-xs text-secondary-light">Shipping:</span>
              <div className="text-sm font-medium text-secondary">FOB Available</div>
            </div>
          </div> */}
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Icon name="Eye" size={16} className="mr-2" />
                View All
              </button>
            {/* <button
              onClick={() => setShowInquiryForm(true)}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Inquire Now
            </button> */}
            </div>
          </div>
        </div>
        
       
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
        {/* <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-secondary">
            {product.seasonalAvailability}
          </div>
        </div> */}
          
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-montserrat font-semibold text-white mb-1">
              {product.name}
            </h3>
            <div className="flex items-center text-white/90 text-sm">
              <Icon name="MapPin" size={14} className="mr-1" />
              <span>{product.origin}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
        {/* <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold text-primary">{product.priceRange}</div>
          <div className="text-sm text-secondary-light">MOQ: {product.minOrderQuantity}</div>
        </div> */}
{/*         
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary-light">Peak Season:</span>
            <span className="text-secondary font-medium">{product.peakSeason}</span>
          </div>
          
          {product.curcuminContent && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-secondary-light">Curcumin Content:</span>
              <span className="text-secondary font-medium">{product.curcuminContent}</span>
            </div>
          )}
          
          {product.grainLength && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-secondary-light">Grain Length:</span>
              <span className="text-secondary font-medium">{product.grainLength}</span>
            </div>
          )}
        </div> */}
          
        {/* <div className="mb-6">
          <div className="text-sm text-secondary-light mb-2">Certifications:</div>
          <div className="flex flex-wrap gap-2">
            {product.certifications.map((cert, index) => (
              <span key={index} className="bg-accent text-secondary text-xs px-2 py-1 rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div> */}
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Icon name="Eye" size={16} className="mr-2" />
              View all
            </button>
          {/* <button
            onClick={() => setShowInquiryForm(true)}
            className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Inquire
          </button> */}
          </div>
        </div>
        
        
      </div>

    {/* Inquiry Form Modal
    {showInquiryForm && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-montserrat font-semibold text-secondary-dark">
                Product Inquiry
              </h3>
              <button
                onClick={() => setShowInquiryForm(false)}
                className="p-2 hover:bg-accent rounded-lg transition-colors duration-300"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover mr-3"
                />
                <div>
                  <h4 className="font-medium text-secondary-dark">{product.name}</h4>
                  <p className="text-sm text-secondary-light">{product.origin}</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-dark mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Required Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 1000 kg"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Target Price
                  </label>
                  <input
                    type="text"
                    placeholder="USD per unit"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-dark mb-2">
                  Delivery Timeline
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-2 weeks)</option>
                  <option value="month">Within a month</option>
                  <option value="quarter">Within 3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-dark mb-2">
                  Additional Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Specific quality requirements, packaging preferences, etc."
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                ></textarea>
              </div>
              
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowInquiryForm(false)}
                  className="flex-1 px-4 py-2 border border-border text-secondary rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )} */}
    </>
  );
};

export default ProductCard;