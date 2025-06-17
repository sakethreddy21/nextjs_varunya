import React, { useState } from 'react';

import Icon from '@/components/AppIcon';

const TradeJourneySection = () => {
  const [activeForm, setActiveForm] = useState('quote');
  const [formData, setFormData] = useState({
    quote: {
      productCategory: '',
      quantity: '',
      destination: '',
      timeline: '',
      email: '',
      company: ''
    },
    consultation: {
      name: '',
      email: '',
      company: '',
      phone: '',
      preferredTime: '',
      requirements: ''
    }
  });

  const entryPoints = [
    {
      id: 'quote',
      title: 'Quick Quote Request',
      description: 'Get instant pricing for your requirements',
      icon: 'Calculator',
      color: 'bg-primary'
    },
    {
      id: 'consultation',
      title: 'Expert Consultation',
      description: 'Schedule a call with our trade specialists',
      icon: 'Users',
      color: 'bg-blue-600'
    },
    {
      id: 'resources',
      title: 'Download Resources',
      description: 'Access trade guides and market insights',
      icon: 'Download',
      color: 'bg-green-600'
    }
  ];

  const resources = [
    {
      title: 'International Trade Guide',
      description: 'Complete guide to importing from India',
      downloadCount: '2.5K+',
      icon: 'BookOpen'
    },
    {
      title: 'Product Catalog 2024',
      description: 'Comprehensive product listings with specifications',
      downloadCount: '1.8K+',
      icon: 'Package'
    },
    {
      title: 'Compliance Checklist',
      description: 'Essential documentation and regulatory requirements',
      downloadCount: '3.2K+',
      icon: 'CheckSquare'
    }
  ];

  const handleInputChange = (formType, field, value) => {
    setFormData(prev => ({
      ...prev,
      [formType]: {
        ...prev[formType],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    // Handle form submission
    console.log(`${formType} form submitted:`, formData[formType]);
    alert(`${formType === 'quote' ? 'Quote request' : 'Consultation booking'} submitted successfully! We'll get back to you within 2 hours.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-6">
          Start Your Trade Journey Today
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Choose your preferred way to begin. Whether you need a quick quote, expert consultation, 
          or comprehensive resources, we're here to support your international trade goals.
        </p>
      </div>

      {/* Entry Point Tabs */}
      <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center">
        {entryPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => setActiveForm(point.id)}
            className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
              activeForm === point.id
                ? `${point.color} text-white shadow-hover`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <Icon name={point.icon} size={24} />
            <div className="text-left">
              <div className="font-semibold">{point.title}</div>
              <div className="text-sm opacity-80">{point.description}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Forms Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          {activeForm === 'quote' && (
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Get Your Quote in Minutes
              </h3>
              <form onSubmit={(e) => handleSubmit(e, 'quote')} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Product Category</label>
                    <select
                      value={formData.quote.productCategory}
                      onChange={(e) => handleInputChange('quote', 'productCategory', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="spices">Spices & Seasonings</option>
                      <option value="textiles">Textiles & Fabrics</option>
                      <option value="agriculture">Agricultural Products</option>
                      <option value="handicrafts">Handicrafts & Artifacts</option>
                      <option value="wellness">Ayurvedic & Wellness</option>
                      <option value="jewelry">Jewelry & Gems</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Quantity Required</label>
                    <input
                      type="text"
                      value={formData.quote.quantity}
                      onChange={(e) => handleInputChange('quote', 'quantity', e.target.value)}
                      placeholder="e.g., 1000 kg, 500 pieces"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Destination Country</label>
                    <input
                      type="text"
                      value={formData.quote.destination}
                      onChange={(e) => handleInputChange('quote', 'destination', e.target.value)}
                      placeholder="e.g., United States"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Required Timeline</label>
                    <select
                      value={formData.quote.timeline}
                      onChange={(e) => handleInputChange('quote', 'timeline', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    >
                      <option value="">Select Timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="standard">Standard (3-4 weeks)</option>
                      <option value="flexible">Flexible (1-2 months)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      value={formData.quote.email}
                      onChange={(e) => handleInputChange('quote', 'email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Company Name</label>
                    <input
                      type="text"
                      value={formData.quote.company}
                      onChange={(e) => handleInputChange('quote', 'company', e.target.value)}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-primary-dark hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon name="Send" size={20} className="inline mr-2" />
                  Get My Quote
                </button>
              </form>
            </div>
          )}

          {activeForm === 'consultation' && (
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Schedule Expert Consultation
              </h3>
              <form onSubmit={(e) => handleSubmit(e, 'consultation')} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      value={formData.consultation.name}
                      onChange={(e) => handleInputChange('consultation', 'name', e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      value={formData.consultation.email}
                      onChange={(e) => handleInputChange('consultation', 'email', e.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Company Name</label>
                    <input
                      type="text"
                      value={formData.consultation.company}
                      onChange={(e) => handleInputChange('consultation', 'company', e.target.value)}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.consultation.phone}
                      onChange={(e) => handleInputChange('consultation', 'phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Preferred Time</label>
                  <select
                    value={formData.consultation.preferredTime}
                    onChange={(e) => handleInputChange('consultation', 'preferredTime', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                    required
                  >
                    <option value="">Select Preferred Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Requirements</label>
                  <textarea
                    value={formData.consultation.requirements}
                    onChange={(e) => handleInputChange('consultation', 'requirements', e.target.value)}
                    placeholder="Tell us about your trade requirements, challenges, or questions..."
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-blue-700 hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon name="Calendar" size={20} className="inline mr-2" />
                  Schedule Consultation
                </button>
              </form>
            </div>
          )}

          {activeForm === 'resources' && (
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Download Trade Resources
              </h3>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon name={resource.icon} size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-semibold text-white mb-2">
                            {resource.title}
                          </h4>
                          <p className="text-gray-300 text-sm mb-2">
                            {resource.description}
                          </p>
                          <div className="text-xs text-gray-400">
                            Downloaded {resource.downloadCount} times
                          </div>
                        </div>
                      </div>
                      <Icon name="Download" size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-montserrat font-semibold text-white mb-4">
                  Get All Resources + Newsletter
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email for instant access"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all duration-300"
                  />
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-green-700 transition-all duration-300">
                    Download All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
              Need Immediate Assistance?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us Directly</div>
                  <div className="text-gray-300">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">Available 24/7 for urgent inquiries</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">WhatsApp Support</div>
                  <div className="text-gray-300">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">Quick responses within minutes</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Support</div>
                  <div className="text-gray-300">info@vaarunya.com</div>
                  <div className="text-sm text-gray-400">Response within 2 hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-montserrat font-bold text-white mb-4">
              Why Start With Vaarunya?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                <div>
                  <div className="text-white font-medium">No Hidden Costs</div>
                  <div className="text-gray-300 text-sm">Transparent pricing with no surprises</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                <div>
                  <div className="text-white font-medium">Quality Guaranteed</div>
                  <div className="text-gray-300 text-sm">100% quality assurance on all products</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                <div>
                  <div className="text-white font-medium">Expert Guidance</div>
                  <div className="text-gray-300 text-sm">15+ years of international trade expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeJourneySection;