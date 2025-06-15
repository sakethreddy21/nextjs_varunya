"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from'@/components/AppIcon';
import Image from'@/components/AppImage';

const QualityAssurance = () => {
  const [activeStep, setActiveStep] = useState(0);

  const qualityProcess = [
    {
      title: "Supplier Verification",
      description: "Rigorous assessment of potential suppliers including facility audits and certification verification.",
      details: `Our supplier verification process begins with comprehensive background checks and facility audits. We evaluate manufacturing capabilities, quality systems, compliance records, and financial stability. Only suppliers who meet our stringent criteria are approved for our network.

Each supplier undergoes regular re-evaluation to ensure continued compliance with our standards. We maintain detailed profiles of all suppliers including their specializations, capacity, and performance history.`,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "UserCheck",
      checklist: [
        "Facility inspection and audit",
        "Certification verification",
        "Financial stability assessment",
        "Quality system evaluation",
        "Compliance record review"
      ]
    },
    {
      title: "Raw Material Inspection",
      description: "Thorough examination of raw materials and components before production begins.",
      details: `Before any production begins, we conduct detailed inspections of all raw materials and components. Our quality team uses advanced testing equipment to verify material specifications, purity levels, and compliance with international standards.

We maintain sample libraries for reference and conduct batch testing to ensure consistency. Any materials that don't meet our specifications are rejected immediately, preventing quality issues downstream.`,
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Search",
      checklist: [
        "Material specification verification",
        "Purity and composition testing",
        "Batch consistency checks",
        "Sample library maintenance",
        "Rejection protocol implementation"
      ]
    },
    {
      title: "Production Monitoring",
      description: "Continuous oversight of manufacturing processes to ensure quality standards are maintained.",
      details: `Our quality assurance team maintains continuous oversight of production processes. We conduct regular inspections during manufacturing, monitor key quality parameters, and ensure adherence to approved procedures.

Real-time monitoring systems alert us to any deviations from standard processes, allowing for immediate corrective action. We maintain detailed production logs and quality records for full traceability.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Activity",
      checklist: [
        "Real-time process monitoring",
        "Regular production inspections",
        "Quality parameter tracking",
        "Deviation alert systems",
        "Production log maintenance"
      ]
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing of finished products against specifications and international standards.",
      details: `Every finished product undergoes comprehensive testing before approval for shipment. We test against client specifications, international standards, and regulatory requirements. Our testing protocols cover functionality, durability, safety, and aesthetic quality.

We use both in-house testing facilities and certified third-party laboratories to ensure objectivity and accuracy. Detailed test reports accompany every shipment, providing complete documentation of quality compliance.`,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "TestTube",
      checklist: [
        "Specification compliance testing",
        "International standards verification",
        "Safety and durability testing",
        "Third-party laboratory validation",
        "Detailed test report generation"
      ]
    },
    {
      title: "Packaging & Shipping",
      description: "Careful packaging and shipping procedures to ensure products reach clients in perfect condition.",
      details: `Our packaging and shipping procedures are designed to protect product quality during transit. We use appropriate packaging materials and methods based on product characteristics and shipping conditions.

Each package is inspected before sealing, and we maintain detailed shipping records including handling instructions and environmental requirements. Our logistics partners are selected based on their ability to maintain product integrity during transport.`,
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "Package",
      checklist: [
        "Appropriate packaging selection",
        "Pre-sealing inspection",
        "Handling instruction documentation",
        "Environmental requirement specification",
        "Logistics partner quality assurance"
      ]
    }
  ];

  const qualityStats = [
    { number: "98%", label: "Client Satisfaction", icon: "ThumbsUp" },
    { number: "99.5%", label: "On-Time Delivery", icon: "Clock" },
    { number: "0.2%", label: "Defect Rate", icon: "Shield" },
    { number: "100%", label: "Traceability", icon: "Search" }
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
            <Icon name="Award" size={16} className="mr-2" />
            Quality Assurance
          </div>
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
            End-to-End Quality Process
          </h2>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Our comprehensive quality assurance process ensures every product meets the highest international standards.
          </p>
        </motion.div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {qualityStats.map((stat, index) => (
            <motion.div
              key={index}
              className="card-elevated p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-montserrat font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-secondary-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Process Steps - Mobile */}
          <div className="lg:hidden space-y-6">
            {qualityProcess.map((step, index) => (
              <motion.div
                key={index}
                className="card-elevated p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name={step.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-semibold text-secondary-dark">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary-light">Step {index + 1}</p>
                  </div>
                </div>
                <p className="text-secondary-light mb-4">{step.description}</p>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  {step.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary-light">
                      <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process Steps - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              {qualityProcess.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-primary text-white shadow-card'
                      : 'bg-background hover:bg-accent text-secondary-dark'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeStep === index ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name={step.icon} 
                        size={18} 
                        className={activeStep === index ? 'text-white' : 'text-primary'} 
                      />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        activeStep === index ? 'text-white/80' : 'text-secondary-light'
                      }`}>
                        Step {index + 1}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step Details - Desktop */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              key={activeStep}
              className="card-elevated p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={qualityProcess[activeStep].icon} size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-secondary-dark">
                    {qualityProcess[activeStep].title}
                  </h3>
                  <p className="text-primary font-medium">
                    Step {activeStep + 1} of {qualityProcess.length}
                  </p>
                </div>
              </div>

              <p className="text-secondary-light text-lg mb-6">
                {qualityProcess[activeStep].description}
              </p>

              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={qualityProcess[activeStep].image}
                  alt={qualityProcess[activeStep].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-montserrat font-semibold text-secondary-dark">
                      {qualityProcess[activeStep].title} Process
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-secondary-light mb-6">
                <p className="mb-4">{qualityProcess[activeStep].details}</p>
              </div>

              <div>
                <h4 className="font-montserrat font-semibold text-secondary-dark mb-4">
                  Quality Checklist:
                </h4>
                <ul className="space-y-3">
                  {qualityProcess[activeStep].checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;