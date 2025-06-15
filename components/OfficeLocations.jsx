import React from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const OfficeLocations = () => {
  const offices = [
    {
      id: 'headquarters',
      name: 'Global Headquarters',
      city: 'New Delhi',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=300&fit=crop',
      address: `Vaarunya Global Exim Pvt. Ltd.
123 Trade Center, Connaught Place
New Delhi - 110001, India`,
      phone: '+91 98765 43210',
      email: 'headquarters@vaarunya.com',
      whatsapp: '+91 98765 43210',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM IST',
      departments: ['Executive Leadership', 'Global Operations', 'Quality Assurance', 'Export Documentation'],
      keyPersonnel: [
        { name: 'Rajesh Kumar', position: 'CEO & Founder', email: 'rajesh@vaarunya.com' },
        { name: 'Priya Sharma', position: 'COO', email: 'priya@vaarunya.com' },
        { name: 'Amit Patel', position: 'Head of Quality', email: 'amit@vaarunya.com' }
      ],
      visitingProcedure: `Please schedule appointments 24 hours in advance. Visitor passes required for entry. Free parking available on-site.`,
      nearbyLandmarks: ['Connaught Place Metro Station (2 min walk)', 'India Gate (5 min drive)', 'Rajiv Chowk (1 min walk)']
    },
    {
      id: 'americas',
      name: 'Americas Regional Office',
      city: 'New York',
      country: 'United States',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      address: `Vaarunya Americas Inc.
456 Business Plaza, 15th Floor
New York, NY 10001, USA`,
      phone: '+1 555 123 4567',
      email: 'americas@vaarunya.com',
      whatsapp: '+1 555 123 4567',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM EST',
      departments: ['Market Development', 'Client Relations', 'Logistics Coordination', 'Regulatory Compliance'],
      keyPersonnel: [
        { name: 'Sarah Johnson', position: 'Regional Director', email: 'sarah@vaarunya.com' },
        { name: 'Michael Rodriguez', position: 'Business Development', email: 'michael@vaarunya.com' },
        { name: 'Jennifer Chen', position: 'Logistics Manager', email: 'jennifer@vaarunya.com' }
      ],
      visitingProcedure: `Building security requires photo ID. Appointments recommended. Visitor parking available in adjacent garage ($15/hour).`,
      nearbyLandmarks: ['Penn Station (3 blocks)', 'Empire State Building (5 blocks)', 'Madison Square Garden (4 blocks)']
    },
    {
      id: 'middle-east',
      name: 'Middle East Hub',
      city: 'Dubai',
      country: 'United Arab Emirates',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      address: `Vaarunya Middle East DMCC
789 Emirates Tower, Office 2501
Dubai, UAE`,
      phone: '+971 50 123 4567',
      email: 'middleeast@vaarunya.com',
      whatsapp: '+971 50 123 4567',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
      departments: ['Regional Distribution', 'Trade Finance', 'Compliance & Documentation', 'Cultural Liaison'],
      keyPersonnel: [
        { name: 'Ahmed Al-Rashid', position: 'Regional Head', email: 'ahmed@vaarunya.com' },
        { name: 'Fatima Hassan', position: 'Trade Finance Manager', email: 'fatima@vaarunya.com' },
        { name: 'Omar Khalil', position: 'Compliance Officer', email: 'omar@vaarunya.com' }
      ],
      visitingProcedure: `Emirates ID or passport required. Advance booking essential. Valet parking available in building.`,
      nearbyLandmarks: ['Dubai Mall (10 min drive)', 'Burj Khalifa (8 min drive)', 'DIFC Metro Station (5 min walk)']
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific Center',
      city: 'Singapore',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      address: `Vaarunya Asia Pacific Pte Ltd
321 Marina Bay Financial Centre
Singapore 018982`,
      phone: '+65 9876 5432',
      email: 'asiapacific@vaarunya.com',
      whatsapp: '+65 9876 5432',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
      departments: ['ASEAN Markets', 'Supply Chain Optimization', 'Technology Integration', 'Regional Partnerships'],
      keyPersonnel: [
        { name: 'Li Wei Chen', position: 'Operations Director', email: 'liwei@vaarunya.com' },
        { name: 'Siti Nurhaliza', position: 'Supply Chain Manager', email: 'siti@vaarunya.com' },
        { name: 'Takeshi Yamamoto', position: 'Technology Lead', email: 'takeshi@vaarunya.com' }
      ],
      visitingProcedure: `Valid ID required for building access. Meeting rooms available for client visits. Public parking at Marina Bay Link Mall.`,
      nearbyLandmarks: ['Marina Bay Sands (5 min walk)', 'Raffles Place MRT (3 min walk)', 'Merlion Park (8 min walk)']
    },
    {
      id: 'europe',
      name: 'European Operations',
      city: 'London',
      country: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
      address: `Vaarunya Europe Ltd
654 Canary Wharf, Level 12
London E14 5AB, UK`,
      phone: '+44 20 7123 4567',
      email: 'europe@vaarunya.com',
      whatsapp: '+44 20 7123 4567',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT',
      departments: ['European Markets', 'Regulatory Affairs', 'Strategic Partnerships', 'Brexit Compliance'],
      keyPersonnel: [
        { name: 'James Mitchell', position: 'European Director', email: 'james@vaarunya.com' },
        { name: 'Sophie Dubois', position: 'Regulatory Manager', email: 'sophie@vaarunya.com' },
        { name: 'Hans Mueller', position: 'Partnership Development', email: 'hans@vaarunya.com' }
      ],
      visitingProcedure: `Security pass required. Please arrive 15 minutes early for registration. Underground parking available.`,
      nearbyLandmarks: ['Canary Wharf Station (2 min walk)', 'Thames Path (5 min walk)', 'One Canada Square (3 min walk)']
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-4">
            Visit Our Offices Worldwide
          </h2>
          <p className="text-lg text-secondary-light max-w-3xl mx-auto">
            Our strategically located offices ensure local expertise and global reach. 
            Each location is equipped with modern facilities and staffed by regional experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.id} className="card-elevated overflow-hidden hover:shadow-hover transition-all duration-300">
              {/* Office Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={office.image}
                  alt={`${office.name} - ${office.city}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-montserrat font-bold">{office.name}</h3>
                  <p className="text-white/90">{office.city}, {office.country}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-sm text-secondary-light whitespace-pre-line">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Clock" size={18} className="text-primary mr-3" />
                    <p className="text-sm text-secondary-light">{office.hours}</p>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center justify-center p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    title="Call"
                  >
                    <Icon name="Phone" size={16} />
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center justify-center p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    title="Email"
                  >
                    <Icon name="Mail" size={16} />
                  </a>
                  <a
                    href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, '')}`}
                    className="flex items-center justify-center p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    title="WhatsApp"
                  >
                    <Icon name="MessageCircle" size={16} />
                  </a>
                </div>

                {/* Departments */}
                <div className="mb-6">
                  <h4 className="text-sm font-montserrat font-semibold text-secondary-dark mb-2">
                    Key Departments
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {office.departments.slice(0, 3).map((dept) => (
                      <span key={dept} className="px-2 py-1 bg-accent text-secondary text-xs rounded">
                        {dept}
                      </span>
                    ))}
                    {office.departments.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        +{office.departments.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Personnel */}
                <div className="mb-6">
                  <h4 className="text-sm font-montserrat font-semibold text-secondary-dark mb-2">
                    Key Contacts
                  </h4>
                  <div className="space-y-2">
                    {office.keyPersonnel.slice(0, 2).map((person) => (
                      <div key={person.name} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-secondary">{person.name}</p>
                          <p className="text-xs text-secondary-light">{person.position}</p>
                        </div>
                        <a
                          href={`mailto:${person.email}`}
                          className="text-primary hover:text-primary-dark transition-colors duration-300"
                        >
                          <Icon name="Mail" size={14} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visiting Information */}
                <div className="border-t border-border-light pt-4">
                  <h4 className="text-sm font-montserrat font-semibold text-secondary-dark mb-2 flex items-center">
                    <Icon name="Info" size={16} className="mr-2 text-primary" />
                    Visiting Information
                  </h4>
                  <p className="text-xs text-secondary-light mb-3">{office.visitingProcedure}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-xs font-medium text-secondary">Nearby Landmarks:</h5>
                    <div className="flex flex-wrap gap-1">
                      {office.nearbyLandmarks.slice(0, 2).map((landmark) => (
                        <span key={landmark} className="px-2 py-1 bg-gray-100 text-secondary text-xs rounded">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button className="w-full py-2 px-4 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Network Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold text-secondary-dark mb-2">
              Our Global Network
            </h3>
            <p className="text-secondary-light">
              Strategically positioned offices ensuring 24/7 global coverage
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Building2" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-montserrat font-bold text-primary mb-1">5</div>
              <div className="text-sm text-secondary-light">Global Offices</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-montserrat font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-secondary-light">Team Members</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-montserrat font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-secondary-light">Global Coverage</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-montserrat font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-secondary-light">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;