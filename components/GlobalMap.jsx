import React, { useState } from 'react';
import Icon from '@/components/AppIcon';

const GlobalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: 'india',
      name: 'India (Headquarters)',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      address: 'Vaarunya Global Exim Pvt. Ltd.123 Trade Center, Connaught PlaceNew Delhi - 110001, India',
      phone: '+91 98765 43210',
      email: 'india@vaarunya.com',
      hours: '9:00 AM - 6:00 PM IST (Mon-Sat)',
      languages: ['English', 'Hindi', 'Tamil', 'Bengali'],
      specialties: ['Export Operations', 'Quality Control', 'Sourcing'],
      manager: 'Rajesh Kumar - Regional Director'
    },
    {
      id: 'usa',
      name: 'United States',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      address: 'Vaarunya Americas Inc.456 Business Plaza, 15th FloorNew York, NY 10001, USA',
      phone: '+1 555 123 4567',
      email: 'usa@vaarunya.com',
      hours: '9:00 AM - 5:00 PM EST (Mon-Fri)',
      languages: ['English', 'Spanish'],
      specialties: ['Market Development', 'Client Relations', 'Logistics'],
      manager: 'Sarah Johnson - Country Manager'
    },
    {
      id: 'uae',
      name: 'United Arab Emirates',
      coordinates: { lat: 25.2048, lng: 55.2708 },
      address: 'Vaarunya Middle East DMCC789 Emirates Tower, Office 2501Dubai, UAE',
      phone: '+971 50 123 4567',
      email: 'uae@vaarunya.com',
      hours: '9:00 AM - 6:00 PM GST (Sun-Thu)',
      languages: ['English', 'Arabic', 'Hindi'],
      specialties: ['Regional Distribution', 'Trade Finance', 'Compliance'],
      manager: 'Ahmed Al-Rashid - Regional Head'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      coordinates: { lat: 1.3521, lng: 103.8198 },
      address: 'Vaarunya Asia Pacific Pte Ltd\n321 Marina Bay Financial Centre\nSingapore 018982',
      phone: '+65 9876 5432',
      email: 'singapore@vaarunya.com',
      hours: '9:00 AM - 6:00 PM SGT (Mon-Fri)',
      languages: ['English', 'Mandarin', 'Malay'],
      specialties: ['ASEAN Markets', 'Supply Chain', 'Technology'],
      manager: 'Li Wei Chen - Operations Director'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      coordinates: { lat: 51.5074, lng: -0.1278 },
      address: 'Vaarunya Europe Ltd\n654 Canary Wharf, Level 12\nLondon E14 5AB, UK',
      phone: '+44 20 7123 4567',
      email: 'uk@vaarunya.com',
      hours: '9:00 AM - 5:00 PM GMT (Mon-Fri)',
      languages: ['English', 'French', 'German'],
      specialties: ['European Markets', 'Regulatory Affairs', 'Partnerships'],
      manager: 'James Mitchell - European Director'
    }
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(selectedRegion?.id === region.id ? null : region);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary-dark to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
            Our Global Presence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With offices across five continents, we're always close to your business. 
            Click on any location to see local contact details and specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-hover">
              <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Vaarunya Global Offices"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=28.6139,77.2090&z=2&output=embed"
                  className="border-0"
                />
                
                {/* Overlay markers for each region */}
                <div className="absolute inset-0 pointer-events-none">
                  {regions.map((region, index) => (
                    <div
                      key={region.id}
                      className={`absolute w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto transform -translate-x-2 -translate-y-2 hover:scale-125 transition-all duration-300 ${
                        selectedRegion?.id === region.id ? 'scale-150 bg-primary-dark' : ''
                      }`}
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`
                      }}
                      onClick={() => handleRegionClick(region)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Region Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => handleRegionClick(region)}
                    className={`px-4 py-2 rounded-lg font-montserrat font-medium transition-all duration-300 ${
                      selectedRegion?.id === region.id
                        ? 'bg-primary text-white' :'bg-gray-100 text-secondary hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            {selectedRegion ? (
              <div className="bg-white rounded-2xl p-6 shadow-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-secondary-dark">
                    {selectedRegion.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <Icon name="Building" size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary mb-1">Office Address</p>
                      <p className="text-secondary-light whitespace-pre-line">{selectedRegion.address}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center">
                      <Icon name="Phone" size={18} className="text-primary mr-3" />
                      <div>
                        <p className="text-sm font-medium text-secondary">Phone</p>
                        <a href={`tel:${selectedRegion.phone}`} className="text-primary hover:underline">
                          {selectedRegion.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Mail" size={18} className="text-primary mr-3" />
                      <div>
                        <p className="text-sm font-medium text-secondary">Email</p>
                        <a href={`mailto:${selectedRegion.email}`} className="text-primary hover:underline">
                          {selectedRegion.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <Icon name="Clock" size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary mb-1">Business Hours</p>
                      <p className="text-secondary-light">{selectedRegion.hours}</p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-start">
                    <Icon name="Globe" size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary mb-1">Languages</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedRegion.languages.map((lang) => (
                          <span key={lang} className="px-2 py-1 bg-accent text-secondary text-xs rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex items-start">
                    <Icon name="Star" size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary mb-1">Specialties</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedRegion.specialties.map((specialty) => (
                          <span key={specialty} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Manager */}
                  <div className="flex items-start">
                    <Icon name="User" size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary mb-1">Regional Contact</p>
                      <p className="text-secondary-light">{selectedRegion.manager}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={`tel:${selectedRegion.phone}`}
                    className="flex items-center justify-center px-4 py-2 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
                  >
                    <Icon name="Phone" size={18} className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${selectedRegion.email}`}
                    className="flex items-center justify-center px-4 py-2 border-2 border-primary text-primary font-montserrat font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon name="Mail" size={18} className="mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-hover text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-secondary-dark mb-2">
                  Select a Location
                </h3>
                <p className="text-secondary-light">
                  Click on any region above to view detailed contact information, 
                  business hours, and local specialties.
                </p>
              </div>
            )}

            {/* Global Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-hover">
              <h3 className="text-lg font-montserrat font-bold text-secondary-dark mb-4">
                Global Reach
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Countries Served</span>
                  <span className="font-bold text-primary">45+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Active Partnerships</span>
                  <span className="font-bold text-primary">200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Time Zones Covered</span>
                  <span className="font-bold text-primary">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Languages Supported</span>
                  <span className="font-bold text-primary">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;