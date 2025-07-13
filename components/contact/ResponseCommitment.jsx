import React from 'react';
import Icon from '@/components/AppIcon';

const ResponseCommitment = () => {
  const commitments = [
    {
      channel: 'Phone Calls',
      icon: 'Phone',
      responseTime: 'Immediate',
      availability: '24/7 Emergency Line',
      description: 'Direct connection to our trade specialists for urgent matters and real-time support.',
      features: ['Multilingual support', 'Conference call capability', 'Call recording for quality'],
      color: 'bg-green-500'
    },
    {
      channel: 'WhatsApp Business',
      icon: 'MessageCircle',
      responseTime: 'Within 15 minutes',
      availability: '6:00 AM - 11:00 PM IST',
      description: 'Quick responses for immediate queries, document sharing, and status updates.',
      features: ['Document sharing', 'Voice messages', 'Group chats for projects'],
      color: 'bg-green-600'
    },
    {
      channel: 'Email Inquiries',
      icon: 'Mail',
      responseTime: 'Within 2-4 hours',
      availability: 'Business hours globally',
      description: 'Detailed responses with comprehensive information and documentation.',
      features: ['Detailed quotations', 'Document attachments', 'Follow-up scheduling'],
      color: 'bg-blue-500'
    },
    {
      channel: 'Live Chat',
      icon: 'MessageSquare',
      responseTime: 'Within 5 minutes',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM IST',
      description: 'Real-time assistance for website navigation and quick questions.',
      features: ['Screen sharing', 'File transfer', 'Chat transcripts'],
      color: 'bg-purple-500'
    },
    {
      channel: 'Contact Form',
      icon: 'FileText',
      responseTime: 'Within 4-6 hours',
      availability: '24/7 submission',
      description: 'Comprehensive responses to detailed inquiries with personalized solutions.',
      features: ['Detailed analysis', 'Custom proposals', 'Follow-up calls'],
      color: 'bg-orange-500'
    },
    {
      channel: 'Video Calls',
      icon: 'Video',
      responseTime: 'Scheduled within 24 hours',
      availability: 'By appointment',
      description: 'Face-to-face meetings for complex discussions and relationship building.',
      features: ['Product demonstrations', 'Facility tours', 'Team introductions'],
      color: 'bg-indigo-500'
    }
  ];

  const serviceStandards = [
    {
      title: 'First Response Guarantee',
      description: 'Every inquiry receives an initial response within our committed timeframe, even if it\'s just to acknowledge receipt and provide next steps.',
      icon: 'Clock',
      metric: '99.8% on-time'
    },
    {
      title: 'Escalation Protocol',
      description: 'Complex issues are automatically escalated to senior specialists within 2 hours to ensure expert resolution.',
      icon: 'TrendingUp',
      metric: '< 2 hours'
    },
    {
      title: 'Follow-up Commitment',
      description: 'We proactively follow up on all inquiries to ensure complete satisfaction and address any additional questions.',
      icon: 'RefreshCw',
      metric: '100% follow-up'
    },
    {
      title: 'Quality Assurance',
      description: 'All communications are monitored for quality, accuracy, and customer satisfaction with continuous improvement.',
      icon: 'Shield',
      metric: '4.9/5 rating'
    }
  ];

  const urgencyLevels = [
    {
      level: 'Normal',
      timeframe: 'Within 24 hours',
      description: 'Standard business inquiries, quotation requests, and general information',
      icon: 'Info',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      level: 'High',
      timeframe: 'Within 6-8 hours',
      description: 'Order modifications, shipping updates, and time-sensitive business matters',
      icon: 'AlertTriangle',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      level: 'Urgent',
      timeframe: 'Within 2-4 hours',
      description: 'Customs issues, shipment delays, quality concerns, and emergency situations',
      icon: 'AlertCircle',
      color: 'text-red-600 bg-red-100'
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-4">
          Our Response Commitment
        </h2>
        <p className="text-lg text-secondary-light max-w-3xl mx-auto">
          We understand that time is critical in international trade. Our commitment to rapid, 
          reliable communication ensures you never wait for the information you need.
        </p>
      </div> */}

    {/* Response Time Grid
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {commitments.map((commitment, index) => (
        <div key={index} className="card-elevated p-6 hover:shadow-hover transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${commitment.color} rounded-lg flex items-center justify-center mr-4`}>
              <Icon name={commitment.icon} size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-montserrat font-bold text-secondary-dark">
                {commitment.channel}
              </h3>
              <p className="text-sm text-primary font-semibold">{commitment.responseTime}</p>
            </div>
          </div>

          <p className="text-secondary-light mb-4">{commitment.description}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm">
              <Icon name="Clock" size={16} className="text-primary mr-2" />
              <span className="text-secondary">{commitment.availability}</span>
            </div>
          </div>

          <div className="border-t border-border-light pt-4">
            <h4 className="text-sm font-montserrat font-semibold text-secondary-dark mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {commitment.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-secondary-light">
                  <Icon name="Check" size={14} className="text-green-600 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div> */}

        {/* Service Standards */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-card">
          <h3 className="text-2xl font-montserrat font-bold text-secondary-dark text-center mb-8">
            Our Service Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={standard.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-montserrat font-semibold text-secondary-dark mb-2">
                  {standard.title}
                </h4>
                <p className="text-sm text-secondary-light mb-3">{standard.description}</p>
              {/* <div className="text-xl font-montserrat font-bold text-primary">
                {standard.metric}
              </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Levels */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-montserrat font-bold text-secondary-dark text-center mb-8">
            Urgency Level Guidelines
          </h3>
          <div className="space-y-4">
            {urgencyLevels.map((urgency, index) => (
              <div key={index} className="flex items-start p-4 border border-border-light rounded-lg hover:bg-accent/30 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${urgency.color}`}>
                  <Icon name={urgency.icon} size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-montserrat font-semibold text-secondary-dark mr-4">
                      {urgency.level} Priority
                    </h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {urgency.timeframe}
                    </span>
                  </div>
                  <p className="text-secondary-light">{urgency.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

    {/* Contact Guarantee
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
        <Icon name="Award" size={48} className="mx-auto mb-4" />
        <h3 className="text-2xl lg:text-3xl font-montserrat font-bold mb-4">
          100% Response Guarantee
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          If we don't respond within our committed timeframe, your next order gets a 5% discount. That's how confident we are in our communication standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-montserrat font-bold">99.8%</div>
            <div className="text-sm text-white/80">On-time Response Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-montserrat font-bold">4.9/5</div>
            <div className="text-sm text-white/80">Communication Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-montserrat font-bold">24/7</div>
            <div className="text-sm text-white/80">Emergency Support</div>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </section>
  );
};

export default ResponseCommitment;