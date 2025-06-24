import React, { useState } from 'react';
import Icon from '@/components/AppIcon';


const QualityAssurance = ({ selectedCategory }) => {
  const [activeTab, setActiveTab] = useState('certifications');

  const qualityData = {
    spices: {
      certifications: [
        {
          name: 'FSSAI License',
          description: 'Food Safety and Standards Authority of India certification',
          validUntil: '2025-12-31',
          scope: 'Manufacturing and trading of spices and condiments',
          image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'ISO 22000:2018',
          description: 'Food Safety Management System certification',
          validUntil: '2025-08-15',
          scope: 'Food safety management throughout the supply chain',
          image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Organic Certification',
          description: 'NPOP (National Programme for Organic Production) certified',
          validUntil: '2025-06-30',
          scope: 'Organic spice processing and trading',
          image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ],
      testingProcedures: [
        {
          test: 'Curcumin Content Analysis',
          method: 'HPLC (High Performance Liquid Chromatography)',
          frequency: 'Every batch',
          standard: 'IS 1514:2004',
          description: 'Determines the curcumin content in turmeric powder to ensure quality standards'
        },
        {
          test: 'Moisture Content Testing',
          method: 'Oven drying method',
          frequency: 'Every batch',
          standard: 'IS 1514:2004',
          description: 'Ensures optimal moisture levels for extended shelf life and quality preservation'
        },
        {
          test: 'Microbial Testing',
          method: 'Plate count method',
          frequency: 'Weekly',
          standard: 'IS 5887:2005',
          description: 'Tests for harmful bacteria, yeast, and mold to ensure food safety'
        },
        {
          test: 'Heavy Metal Analysis',
          method: 'ICP-MS (Inductively Coupled Plasma Mass Spectrometry)',
          frequency: 'Monthly',
          standard: 'Codex Alimentarius',
          description: 'Detects presence of lead, cadmium, mercury, and arsenic within safe limits'
        },
        {
          test: 'Pesticide Residue Testing',
          method: 'GC-MS/LC-MS',
          frequency: 'Every lot',
          standard: 'MRL limits as per Codex',
          description: 'Ensures pesticide residues are within maximum residue limits'
        }
      ],
      complianceDocuments: [
        {
          document: 'Certificate of Analysis (CoA)',
          description: 'Detailed analysis report for each batch including all quality parameters',
          frequency: 'Per batch'
        },
        {
          document: 'Phytosanitary Certificate',
          description: 'Official document certifying that products are free from pests and diseases',
          frequency: 'Per shipment'
        },
        {
          document: 'Health Certificate',
          description: 'Confirms products are safe for human consumption and meet health standards',
          frequency: 'Per shipment'
        },
        {
          document: 'Origin Certificate',
          description: 'Certifies the country/region of origin for the products',
          frequency: 'Per shipment'
        }
      ]
    },
    agricultural: {
      certifications: [
        {
          name: 'Organic Certification',
          description: 'NPOP and NOP (USDA) dual certification for organic products',
          validUntil: '2025-09-30',
          scope: 'Organic farming and processing of agricultural products',
          image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'GlobalGAP Certification',
          description: 'Good Agricultural Practices certification for sustainable farming',
          validUntil: '2025-07-15',
          scope: 'Sustainable agricultural production practices',
          image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ],
      testingProcedures: [
        {
          test: 'Grain Quality Analysis',
          method: 'Physical and chemical analysis',
          frequency: 'Every batch',
          standard: 'IS 1460:2009',
          description: 'Comprehensive analysis of grain length, moisture, broken percentage, and purity'
        },
        {
          test: 'Pesticide Residue Testing',
          method: 'Multi-residue analysis using GC-MS/LC-MS',
          frequency: 'Every lot',
          standard: 'MRL as per importing country',
          description: 'Ensures compliance with international pesticide residue limits'
        }
      ],
      complianceDocuments: [
        {
          document: 'Organic Certificate',
          description: 'Certification confirming organic production methods and standards',
          frequency: 'Annual renewal'
        },
        {
          document: 'Fumigation Certificate',
          description: 'Confirms proper fumigation treatment for pest control during storage',
          frequency: 'Per shipment'
        }
      ]
    }
  };

  const currentData = qualityData[selectedCategory] || { certifications: [], testingProcedures: [], complianceDocuments: [] };

  if (!selectedCategory) return null;

  return (
    <div className="bg-white rounded-xl shadow-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-montserrat font-bold text-secondary-dark">
          Quality Assurance & Compliance
        </h3>
        <div className="flex items-center text-sm text-secondary-light">
          <Icon name="Shield" size={16} className="mr-1" />
          <span>Certified & Verified</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center border-b border-border-light mb-6">
        <button
          onClick={() => setActiveTab('certifications')}
          className={`px-4 py-2 font-medium transition-all duration-300 border-b-2 ${
            activeTab === 'certifications'
              ? 'text-primary border-primary' :'text-secondary-light border-transparent hover:text-primary'
          }`}
        >
          Certifications
        </button>
        <button
          onClick={() => setActiveTab('testing')}
          className={`px-4 py-2 font-medium transition-all duration-300 border-b-2 ${
            activeTab === 'testing' ?'text-primary border-primary' :'text-secondary-light border-transparent hover:text-primary'
          }`}
        >
          Testing Procedures
        </button>
        <button
          onClick={() => setActiveTab('compliance')}
          className={`px-4 py-2 font-medium transition-all duration-300 border-b-2 ${
            activeTab === 'compliance' ?'text-primary border-primary' :'text-secondary-light border-transparent hover:text-primary'
          }`}
        >
          Compliance Documents
        </button>
      </div>

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.certifications.map((cert, index) => (
            <div key={index} className="border border-border-light rounded-lg p-4 hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-montserrat font-semibold text-secondary-dark mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-secondary-light">
                    Valid until: {new Date(cert.validUntil).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-secondary mb-3">
                {cert.description}
              </p>
              
              <div className="text-xs text-secondary-light bg-accent/30 p-2 rounded">
                <strong>Scope:</strong> {cert.scope}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Testing Procedures Tab */}
      {activeTab === 'testing' && (
        <div className="space-y-6">
          {currentData.testingProcedures.map((test, index) => (
            <div key={index} className="border border-border-light rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">
                    {test.test}
                  </h4>
                  <p className="text-secondary-light mb-3">
                    {test.description}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                    {test.frequency}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-secondary-dark">Testing Method:</span>
                  <p className="text-sm text-secondary-light">{test.method}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-secondary-dark">Standard:</span>
                  <p className="text-sm text-secondary-light">{test.standard}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compliance Documents Tab */}
      {activeTab === 'compliance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentData.complianceDocuments.map((doc, index) => (
            <div key={index} className="border border-border-light rounded-lg p-4 hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
                  <Icon name="FileText" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-montserrat font-semibold text-secondary-dark mb-1">
                    {doc.document}
                  </h4>
                  <p className="text-xs text-secondary-light">
                    Issued: {doc.frequency}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-secondary-light">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Quality Commitment */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/30 rounded-lg">
        <div className="flex items-start">
          <Icon name="CheckCircle" size={24} className="text-primary mr-4 mt-1" />
          <div>
            <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">
              Our Quality Commitment
            </h4>
            <p className="text-secondary-light mb-4">
              We maintain the highest quality standards through rigorous testing, certified processes, 
              and complete transparency. Every product undergoes comprehensive quality checks before shipment, 
              and we provide detailed documentation for full traceability.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="text-primary mr-2" />
                <span className="text-secondary">24/7 Quality Monitoring</span>
              </div>
              <div className="flex items-center">
                <Icon name="Users" size={16} className="text-primary mr-2" />
                <span className="text-secondary">Expert Quality Team</span>
              </div>
              <div className="flex items-center">
                <Icon name="Globe" size={16} className="text-primary mr-2" />
                <span className="text-secondary">International Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;