import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const TrustIndicators = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      icon: "Award",
      description: "Quality Management System certification ensuring consistent quality in all our processes and services.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "FSSAI Licensed",
      icon: "Shield",
      description: "Food Safety and Standards Authority of India license for handling and exporting food products.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Export License",
      icon: "Globe",
      description: "Government authorized export license enabling us to trade internationally with full compliance.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "APEDA Registered",
      icon: "CheckCircle",
      description: "Agricultural and Processed Food Products Export Development Authority registration.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "IEC Code",
      icon: "FileText",
      description: "Import Export Code issued by Directorate General of Foreign Trade for international business.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-secondary-dark mb-4">
          Trusted & Certified
        </h2>
        <p className="text-secondary-light max-w-2xl mx-auto">
          Our certifications and licenses ensure the highest standards of quality, safety, and compliance in international trade.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="relative group"
            onMouseEnter={() => setHoveredCert(cert.id)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                  <Icon name={cert.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-secondary-dark text-sm mb-2">
                  {cert.name}
                </h3>
              </div>

              {/* Hover Tooltip */}
              {hoveredCert === cert.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-white rounded-lg shadow-hover p-4 z-10 border border-border-light">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-secondary-light leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">15+</div>
          <div className="text-sm text-secondary-light">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">50+</div>
          <div className="text-sm text-secondary-light">Countries Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">1000+</div>
          <div className="text-sm text-secondary-light">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">99%</div>
          <div className="text-sm text-secondary-light">On-time Delivery</div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;