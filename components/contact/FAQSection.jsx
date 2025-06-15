import React, { useState } from 'react';
import Icon from '@/components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: 'Play',
      faqs: [
        {
          question: 'What are your minimum order quantities?',
          answer: `Our minimum order quantities vary by product category:
• Agricultural Products: 1 container (20-40 tons)
• Textiles & Garments: 500-1000 pieces per design
• Spices & Seasonings: 100 kg minimum
• Handicrafts: 50 pieces minimum
• Electronics: Negotiable based on product value

We're flexible for first-time clients and can discuss smaller trial orders to help you evaluate our products and services.`
        },
        {
          question: 'How do I place my first order?',
          answer: `Getting started is simple:
1. Contact us through any channel (phone, email, WhatsApp, or this form)
2. Share your product requirements and specifications
3. Receive detailed quotation within 4-24 hours
4. Review samples if needed (we can arrange sample shipments)
5. Confirm order with 30% advance payment
6. We handle all documentation and shipping
7. Receive your goods with full tracking support

Our team guides you through every step of your first international trade experience.`
        },
        {
          question: 'Do you provide product samples?',
          answer: `Yes, we provide samples for most products:
• Free samples: Available for products under $50 value
• Paid samples: For higher-value items, sample cost is deducted from your first order
• Sample shipping: Usually 3-7 days via DHL/FedEx
• Sample validity: Prices quoted with samples are valid for 30 days

Samples help ensure you're completely satisfied with quality before placing larger orders.`
        }
      ]
    },
    {
      category: 'Payment & Pricing',
      icon: 'CreditCard',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: `We accept multiple secure payment methods:
• Bank Wire Transfer (T/T) - Most common for international trade
• Letter of Credit (L/C) - For larger orders and new clients
• PayPal - For smaller orders and samples
• Western Union - For urgent payments
• Trade Assurance - Through Alibaba platform
• Cryptocurrency - Bitcoin and major altcoins accepted

Payment terms are typically 30% advance, 70% before shipment, but we're flexible based on order size and client relationship.`
        },
        {
          question: 'How do you determine pricing?',
          answer: `Our pricing is based on several factors:
• Product specifications and quality grade
• Order quantity (volume discounts available)
• Packaging requirements
• Shipping destination and method
• Current market conditions
• Seasonal availability

We provide detailed quotations breaking down all costs including:
- Product cost per unit
- Packaging and labeling
- Quality inspection fees
- Export documentation
- Shipping and insurance
- Any applicable taxes or duties

Prices are valid for 15-30 days depending on market volatility.`
        },
        {
          question: 'Do you offer volume discounts?',
          answer: `Yes, we offer attractive volume discounts:
• 5-10% discount for orders above $50,000
• 10-15% discount for orders above $100,000
• 15-20% discount for orders above $500,000
• Custom pricing for annual contracts above $1,000,000

Additional benefits for large orders:
- Priority production scheduling
- Dedicated account manager
- Flexible payment terms
- Free quality inspections
- Reduced shipping costs through consolidated shipments`
        }
      ]
    },
    {
      category: 'Shipping & Logistics',icon: 'Truck',
      faqs: [
        {
          question: 'What shipping options are available?',
          answer: `We offer comprehensive shipping solutions:
• Sea Freight: Most economical for large orders (15-45 days)
• Air Freight: Faster delivery for urgent orders (3-7 days)
• Express Courier: DHL/FedEx for samples and small orders (2-5 days)
• Land Transport: For neighboring countries via road/rail

Shipping terms available:
- FOB (Free on Board) - You arrange shipping
- CIF (Cost, Insurance, Freight) - We handle everything to your port
- DDP (Delivered Duty Paid) - Door-to-door service including customs

We work with trusted logistics partners worldwide to ensure safe, timely delivery.`
        },
        {
          question: 'How do you handle customs and documentation?',
          answer: `We handle all export documentation and procedures:
• Commercial Invoice and Packing List
• Certificate of Origin
• Export License (when required)
• Phytosanitary Certificate (for agricultural products)
• Quality Certificates and Test Reports
• Insurance Documents
• Bill of Lading/Airway Bill

Our documentation team ensures:
- 100% accuracy to prevent customs delays
- Compliance with destination country requirements
- Digital copies provided immediately
- Original documents couriered separately
- 24/7 support for any customs queries

We also provide guidance on import procedures and can recommend trusted customs brokers in your country.`
        },
        {
          question: 'Can you handle door-to-door delivery?',
          answer: `Yes, we offer complete door-to-door services:
• Pick-up from supplier facilities in India
• Export customs clearance
• International shipping (sea/air)
• Import customs clearance in destination country
• Local delivery to your warehouse/address

Our DDP (Delivered Duty Paid) service includes:
- All shipping costs
- Insurance coverage
- Import duties and taxes
- Local delivery charges
- Real-time tracking throughout

This service is available to most major cities worldwide. We handle everything so you can focus on your business while we manage the logistics.`
        }
      ]
    },
    {
      category: 'Quality & Compliance',icon: 'Shield',
      faqs: [
        {
          question: 'What quality assurance measures do you have?',
          answer: `We maintain strict quality standards:
• Pre-production samples for approval
• In-process quality monitoring
• Pre-shipment inspection by third-party agencies
• Quality certificates from accredited laboratories
• Photo/video documentation of goods before shipping
• Compliance with international standards (ISO, FDA, CE, etc.)

Our quality team:
- Visits supplier facilities regularly
- Conducts random quality audits
- Maintains supplier scorecards
- Implements corrective action plans
- Provides detailed quality reports

We guarantee that all products meet specified quality standards or we'll replace them at no cost.`
        },
        {
          question: 'Do you provide certificates and test reports?',
          answer: `Yes, we provide comprehensive documentation:
• Certificate of Analysis (COA) for all products
• Third-party lab test reports
• Organic/Fair Trade certificates (when applicable)
• FDA/FSSAI registration certificates
• ISO certification documents
• Phytosanitary certificates for agricultural products
• Material Safety Data Sheets (MSDS) for chemicals

All certificates are:
- From internationally recognized laboratories
- Valid and current
- Specific to your shipment batch
- Available in digital format immediately
- Original copies included with shipment

We maintain relationships with certified testing laboratories worldwide to ensure compliance with your local regulations.`
        },
        {
          question: 'What if I receive defective products?',
          answer: `We stand behind our quality with a comprehensive guarantee:
• 100% replacement for manufacturing defects
• Full refund if products don't meet specifications
• Insurance coverage for shipping damage
• 30-day quality guarantee from delivery date

Our resolution process:
1. Report issues within 7 days of receipt
2. Provide photos/videos of defective items
3. We investigate with supplier immediately
4. Replacement/refund processed within 15 days
5. We cover all return shipping costs

Prevention measures:
- Mandatory pre-shipment inspection
- Supplier quality agreements
- Regular supplier audits
- Continuous improvement programs

Your satisfaction is our priority, and we'll work tirelessly to resolve any quality issues quickly and fairly.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Get instant answers to common questions about our services, processes, and policies. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-elevated p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name={category.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-secondary-dark">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="border border-border-light rounded-lg">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-all duration-300 rounded-lg"
                      >
                        <span className="font-montserrat font-semibold text-secondary-dark pr-4">
                          {faq.question}
                        </span>
                        <Icon 
                          name={isOpen ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          className="text-primary flex-shrink-0 transition-transform duration-300" 
                        />
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-4">
                          <div className="text-secondary-light whitespace-pre-line leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}



      </div>

                  <section className="py-16  mt-12 bg-gradient-to-r from-primary to-primary-dark ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon name="HelpCircle" size={48} className="text-white mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                           Our trade experts are available 24/7 to provide personalized assistance. 
              Get detailed answers specific to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="inline-flex items-center px-6 py-3 bg-white text-primary font-montserrat font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                <Icon name="Phone" size={20} className="mr-2" />
                Call Expert Now
              </a>
               <a href="https://wa.me/919876543210" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-montserrat font-semibold rounded-lg hover:bg-green-700 transition-all duration-300">
               
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQSection;