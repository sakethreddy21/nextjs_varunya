"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from'@/components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timelineData = [
    {
      year: "2015",
      title: "Foundation & Vision",
      description: "Vaarunya Global Exim was founded with a mission to make international trade accessible and transparent for businesses of all sizes.",
      achievements: [
        "Established headquarters in Mumbai",
        "First international partnership with UAE",
        "Initial team of 5 dedicated professionals"
      ],
      icon: "Rocket"
    },
    {
      year: "2017",
      title: "Regional Expansion",
      description: "Expanded operations across South Asia and established key partnerships in the Middle East and Southeast Asia.",
      achievements: [
        "Opened regional office in Delhi",
        "Partnerships in 15+ countries",
        "ISO 9001:2015 certification achieved"
      ],
      icon: "Globe"
    },
    {
      year: "2019",
      title: "Digital Transformation",
      description: "Launched comprehensive digital platform for streamlined trade processes and enhanced customer experience.",
      achievements: [
        "Digital trade platform launched",
        "Real-time tracking system implemented",
        "Customer base grew to 200+ partners"
      ],
      icon: "Smartphone"
    },
    {
      year: "2021",
      title: "Global Recognition",
      description: "Achieved significant milestones in quality assurance and received multiple industry recognitions for excellence.",
      achievements: [
        "Export Excellence Award recipient",
        "FIEO membership achieved",
        "Expanded to 35+ countries"
      ],
      icon: "Award"
    },
    {
      year: "2023",
      title: "Sustainable Growth",
      description: "Focused on sustainable trade practices and established green supply chain initiatives across all operations.",
      achievements: [
        "Sustainable trade certification",
        "Carbon-neutral shipping options",
        "500+ global partnerships"
      ],
      icon: "Leaf"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing innovation in trade technology and expanding into emerging markets with AI-powered solutions.",
      achievements: [
        "AI-powered quality prediction",
        "Blockchain supply chain tracking",
        "50+ countries active presence"
      ],
      icon: "Zap"
    }
  ];

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
            <Icon name="Clock" size={16} className="mr-2" />
            Our Journey
          </div>
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
            Evolution of Excellence
          </h2>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            From local exporter to global trade facilitator, trace our journey of continuous growth and innovation.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card-elevated p-6 hover:shadow-hover transition-all duration-300">
                    <div className="text-primary font-montserrat font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-secondary-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-secondary-light mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-secondary-light">
                          <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-card z-10">
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={item.icon} size={16} className="text-white" />
                </div>

                {/* Timeline Line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-16 bg-border"></div>
                )}

                {/* Content */}
                <div className="card-elevated p-6">
                  <div className="text-primary font-montserrat font-bold text-lg mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-secondary-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary-light mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-secondary-light">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;