"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from'@/components/AppIcon';

const GlobalNetwork = () => {
  const [selectedRegion, setSelectedRegion] = useState('asia');

  const networkData = {
    asia: {
      title: "Asia Pacific",
      description: "Our strongest presence with deep local partnerships and cultural understanding.",
      countries: 18,
      partners: 200,
      offices: 3,
      details: [
        "Regional headquarters in Mumbai, India",
        "Branch offices in Singapore and Hong Kong",
        "Strong partnerships in China, Japan, and South Korea",
        "Specialized in textile, spices, and electronics trade"
      ],
      keyMarkets: ["India", "China", "Singapore", "Japan", "South Korea", "Thailand"]
    },
    middleEast: {
      title: "Middle East & Africa",
      description: "Strategic partnerships focusing on oil, gas, and agricultural commodities.",
      countries: 12,
      partners: 85,
      offices: 1,
      details: [
        "Regional office in Dubai, UAE",
        "Strong presence in Saudi Arabia and Qatar",
        "Specialized in petrochemicals and food products",
        "Cultural expertise in Islamic business practices"
      ],
      keyMarkets: ["UAE", "Saudi Arabia", "Qatar", "Egypt", "South Africa", "Nigeria"]
    },
    europe: {
      title: "Europe",
      description: "Growing presence with focus on high-quality manufactured goods and technology.",
      countries: 8,
      partners: 45,
      offices: 0,
      details: [
        "Partner network across major European markets",
        "Compliance expertise with EU regulations",
        "Focus on automotive and pharmaceutical sectors",
        "Strong relationships with German and Italian manufacturers"
      ],
      keyMarkets: ["Germany", "Italy", "France", "Netherlands", "UK", "Spain"]
    },
    americas: {
      title: "Americas",
      description: "Emerging market with potential for significant growth in diverse sectors.",
      countries: 6,
      partners: 25,
      offices: 0,
      details: [
        "Growing partnerships in North and South America",
        "Focus on agricultural and textile exports",
        "Compliance with NAFTA and regional trade agreements",
        "Expanding presence in Brazil and Mexico"
      ],
      keyMarkets: ["USA", "Canada", "Brazil", "Mexico", "Argentina", "Chile"]
    }
  };

  const regions = Object.keys(networkData);

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-montserrat font-medium mb-6">
            <Icon name="Globe" size={16} className="mr-2" />
            Global Presence
          </div>
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
            Our Worldwide Network
          </h2>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Spanning across continents with local expertise and global reach, we connect businesses worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Interactive Map Placeholder */}
          <div className="lg:col-span-2">
            <motion.div
              className="card-elevated p-8 h-96 lg:h-[500px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* World Map Iframe */}
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Vaarunya Global Network"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=20,0&z=2&output=embed"
                className="rounded-lg"
              ></iframe>
              
              {/* Overlay with network stats */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-montserrat font-bold text-primary">50+</div>
                    <div className="text-sm text-secondary-light">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-montserrat font-bold text-primary">350+</div>
                    <div className="text-sm text-secondary-light">Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-montserrat font-bold text-primary">4</div>
                    <div className="text-sm text-secondary-light">Offices</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Region Selection & Details */}
          <div className="lg:col-span-1">
            {/* Region Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 mb-6">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`p-4 rounded-lg text-left transition-all duration-300 ${
                    selectedRegion === region
                      ? 'bg-primary text-white shadow-card'
                      : 'bg-background hover:bg-accent text-secondary-dark'
                  }`}
                >
                  <div className="font-montserrat font-semibold">
                    {networkData[region].title}
                  </div>
                  <div className={`text-sm mt-1 ${
                    selectedRegion === region ? 'text-white/80' : 'text-secondary-light'
                  }`}>
                    {networkData[region].countries} Countries
                  </div>
                </button>
              ))}
            </div>

            {/* Region Details */}
            <motion.div
              key={selectedRegion}
              className="card-elevated p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-montserrat font-bold text-secondary-dark mb-3">
                {networkData[selectedRegion].title}
              </h3>
              <p className="text-secondary-light mb-4">
                {networkData[selectedRegion].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-montserrat font-bold text-primary">
                    {networkData[selectedRegion].countries}
                  </div>
                  <div className="text-xs text-secondary-light">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-montserrat font-bold text-primary">
                    {networkData[selectedRegion].partners}
                  </div>
                  <div className="text-xs text-secondary-light">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-montserrat font-bold text-primary">
                    {networkData[selectedRegion].offices}
                  </div>
                  <div className="text-xs text-secondary-light">Offices</div>
                </div>
              </div>

              {/* Details */}
              <div className="mb-6">
                <h4 className="font-montserrat font-semibold text-secondary-dark mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {networkData[selectedRegion].details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm text-secondary-light">
                      <Icon name="Check" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Markets */}
              <div>
                <h4 className="font-montserrat font-semibold text-secondary-dark mb-3">
                  Key Markets
                </h4>
                <div className="flex flex-wrap gap-2">
                  {networkData[selectedRegion].keyMarkets.map((market, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent text-secondary text-sm rounded-full"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;