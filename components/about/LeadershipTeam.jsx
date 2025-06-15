import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from'@/components/AppIcon';
import Image from'@/components/AppImage';

const LeadershipTeam = () => {
  const [activeLeader, setActiveLeader] = useState(0);

  const teamData = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Rajesh brings over 15 years of international trade expertise, having worked with Fortune 500 companies across Asia-Pacific. His vision of transparent and ethical trade practices has been the driving force behind Vaarunya's success.

Before founding Vaarunya, Rajesh held senior positions at leading export houses and has personally facilitated trade worth over $100 million. He holds an MBA in International Business from IIM Bangalore and is a certified member of the Federation of Indian Export Organisations (FIEO).`,
      philosophy: "Business is not just about profit; it\'s about building relationships that create value for everyone involved.",
      certifications: ["MBA - International Business", "FIEO Certified", "Export-Import Management"],
      specialties: ["Strategic Planning", "International Relations", "Trade Policy"]
    },
    {
      name: "Priya Patel",
      position: "Chief Operations Officer",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Priya oversees all operational aspects of Vaarunya's global trade activities. With her background in supply chain management and logistics, she ensures seamless execution of complex international transactions. Her expertise in quality assurance and process optimization has helped Vaarunya achieve industry-leading delivery success rates. Priya holds a Master's degree in Supply Chain Management and is Six Sigma Black Belt certified.`,
      philosophy: "Excellence in operations is not an accident; it\'s the result of meticulous planning and continuous improvement.",
      certifications: ["M.Sc. Supply Chain Management", "Six Sigma Black Belt", "PMP Certified"],
      specialties: ["Operations Management", "Quality Assurance", "Process Optimization"]
    },
    {
      name: "David Chen",
      position: "Head of International Markets",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `David leads our international market expansion and maintains relationships with key partners across 50+ countries. His multicultural background and language skills make him invaluable in cross-cultural business negotiations.

Having worked in Singapore, Hong Kong, and Dubai before joining Vaarunya, David brings deep understanding of Asian and Middle Eastern markets. He speaks five languages fluently and holds degrees in International Commerce and Cultural Studies.`,
      philosophy: "Understanding culture is the key to successful international business relationships.",
      certifications: ["International Commerce Degree", "Cultural Studies Certification", "Trade Finance Specialist"],
      specialties: ["Market Expansion", "Cross-cultural Communication", "Partnership Development"]
    },
    {
      name: "Sarah Johnson",
      position: "Head of Quality & Compliance",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      bio: `Sarah ensures that all Vaarunya operations meet the highest international quality standards and regulatory compliance requirements. Her attention to detail and systematic approach has earned client trust worldwide.

With extensive experience in quality management systems and international trade regulations, Sarah has implemented robust processes that maintain our 98% client satisfaction rate. She holds certifications in ISO standards and international trade compliance.`,
      philosophy: "Quality is not negotiable; it\'s the foundation upon which trust is built.",
      certifications: ["ISO 9001 Lead Auditor", "International Trade Compliance", "Quality Management Systems"],
      specialties: ["Quality Management", "Regulatory Compliance", "Risk Assessment"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-montserrat font-medium mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Leadership Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
            Meet the Minds Behind Our Success
          </h2>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Our leadership team combines decades of international trade expertise with a shared commitment to ethical business practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Team Grid - Mobile/Tablet */}
          <div className="lg:hidden space-y-8">
            {teamData.map((leader, index) => (
              <motion.div
                key={index}
                className="card-elevated p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-16 h-16 overflow-hidden rounded-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-semibold text-secondary-dark">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium">{leader.position}</p>
                    <p className="text-sm text-secondary-light">{leader.experience}</p>
                  </div>
                </div>
                <p className="text-secondary-light mb-4">{leader.bio}</p>
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <p className="text-secondary-dark italic">"{leader.philosophy}"</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {leader.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent text-secondary text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Selection - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {teamData.map((leader, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveLeader(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeLeader === index
                      ? 'bg-primary text-white shadow-card'
                      : 'bg-surface hover:bg-accent text-secondary-dark'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">
                        {leader.name}
                      </h3>
                      <p className={`text-sm ${
                        activeLeader === index ? 'text-white/80' : 'text-secondary-light'
                      }`}>
                        {leader.position}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Leader Details - Desktop */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              key={activeLeader}
              className="card-elevated p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="relative w-24 h-24 overflow-hidden rounded-xl flex-shrink-0">
                  <Image
                    src={teamData[activeLeader].image}
                    alt={teamData[activeLeader].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-secondary-dark mb-2">
                    {teamData[activeLeader].name}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-1">
                    {teamData[activeLeader].position}
                  </p>
                  <p className="text-secondary-light">
                    {teamData[activeLeader].experience} Experience
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-secondary-light mb-6">
                <p className="mb-4">{teamData[activeLeader].bio}</p>
              </div>

              <div className="border-l-4 border-primary pl-6 mb-6">
                <Icon name="Quote" size={20} className="text-primary mb-2" />
                <p className="text-secondary-dark italic text-lg">
                  "{teamData[activeLeader].philosophy}"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-montserrat font-semibold text-secondary-dark mb-3">
                    Certifications
                  </h4>
                  <ul className="space-y-2">
                    {teamData[activeLeader].certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center text-secondary-light">
                        <Icon name="Award" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-secondary-dark mb-3">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teamData[activeLeader].specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent text-secondary text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;