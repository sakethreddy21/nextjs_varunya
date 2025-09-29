'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/AppIcon';

import ContactForm from '@/components/contact/ContactForm';
import GlobalMap from '@/components/contact/GlobalMap';
import OfficeLocations from '@/components/contact/OfficeLocations';
import FAQSection from '@/components/contact/FAQSection';
import ResponseCommitment from '@/components/contact/ResponseCommitment';

interface UseMediaQueryProps {
  (query: string): boolean;
}

const useMediaQuery: UseMediaQueryProps = (query) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showToast, setShowToast] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second for live time including seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showToast) {
      const toastTimer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(toastTimer);
    }
  }, [showToast]);

  const handleCopyToClipboard = (text: string) => {
    if (isDesktop) {
      navigator.clipboard.writeText(text);
      setShowToast(true);
    }
  };

  const contactMethods = [
    {
      type: "Phone",
      icon: "Phone",
      title: "Call Us Directly",
      details: [
        { region: "India", number: "+91 9390908096", hours: "9:00 AM - 6:00 PM IST" },
        { region: "USA", number: "+1 (647) 221-5353", hours: "9:00 AM - 5:00 PM EST" },
        { region: "CANADA", number: "+1 (647) 221-5353", hours: "9:00 AM - 6:00 PM CST" }
      ],
      description: "Speak directly with our trade specialists"
    },
    {
      type: "WhatsApp",
      icon: "MessageCircle",
      title: "WhatsApp Business",
      details: [
        { region: "Global", number: "+91 9100477554", hours: "24/7 Available" }
      ],
      description: "Instant communication for quick queries"
    },
    {
      type: "Email",
      icon: "Mail",
      title: "Email Support",
      details: [
        { type: "Support Desk", email: "support@vaarunyaglobalexim.com", response: "Within 4 hours" },
        { type: "Sales operations", email: "sales@vaarunyaglobalexim.com", response: "Within 2 hours" },
        { type: " Global Partnerships", email: "partnerships@vaarunyaglobalexim.com", response: "Within 24 hours" }
      ],
      description: "Detailed inquiries and documentation"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/company/vaarunya-global-exim-pvt-ltd/about/?viewAsMember=true", color: "text-blue-600" },
    { name: "Twitter", icon: "Twitter", url: "#", color: "text-blue-400" },
    { name: "Youtube", icon: "Youtube", url: "https://youtube.com/@vaarunyaglobaleximpvtltd?si=IXuogE82pzbX57j5", color: "text-red-500" },
    { name: "Threads", icon: "AtSign", url: "https://www.threads.com/@vaarunyaglobalexim?igshid=NTc4MTIwNjQ2YQ==", color: "text-black-500" },
    { name: "Facebook", icon: "Facebook", url: "https://www.facebook.com/vaarunyaglobalexim", color: "text-blue-700" },
    { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/vaarunyaglobalexim?igsh=bjdwb2xhMzQ4Y21w&utm_source=qr", color: "text-pink-600" }
  ];

  const quickLinks = [
    { name: "Get Quote", path: "#contact-form", icon: "Calculator" },
    { name: "Our Products", path: "/categories", icon: "Package" },
    { name: "About Us", path: "/about", icon: "Users" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-surface">
      <section className="pt-24 pb-16 bg-gradient-to-r from-secondary-dark to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-montserrat font-bold text-white mb-6">
            Global Accessibility Hub
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Connect with Vaarunya across continents. We're here to bridge your business with global opportunities, 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, i) => (
              <Link key={i} href={link.path} className="inline-flex items-center px-6 py-3 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300">
                <Icon name={link.icon} size={20} className="mr-2" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-4">Multiple Ways to Connect</h2>
            <p className="text-lg text-secondary-light max-w-2xl mx-auto">
              Choose your preferred communication method. We're committed to responding promptly across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="card-elevated p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name={method.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-secondary-dark">
                    {method.title}
                  </h3>
                </div>
                <p className="text-secondary-light text-sm mb-4">{method.description}</p>
                <div className="space-y-3">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col bg-gray-50 p-3 rounded-md">
                      {'region' in detail && (
                        <>
                          <div className="flex justify-between items-center pb-2">
                            <span className="font-medium text-secondary">{detail.region}:</span>
                            <span className="text-xs text-secondary-light mt-1">{detail.hours}</span>
                          </div>
                          <div className="relative group">
                            <a
                              href={method.type === "WhatsApp" ? `https://wa.me/${detail.number.replace(/[^0-9]/g, '')}` : `tel:${detail.number.replace(/[^0-9+]/g, '')}`}
                              onClick={(e) => {
                                if (isDesktop) {
                                  e.preventDefault();
                                  handleCopyToClipboard(detail.number);
                                }
                              }}
                              className="text-primary font-semibold"
                            >
                              {detail.number}
                            </a>
                            {isDesktop && (
                              <span className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                Click to copy to clipboard
                              </span>
                            )}
                          </div>
                        </>
                      )}
                      {'type' in detail && (
                        <>
                          <div className="flex justify-between items-center pb-2">
                            <span className="font-medium text-secondary">{detail.type}:</span>
                            <span className="text-xs text-green-600 mt-1">{detail.response}</span>
                          </div>
                          <div className="relative group">
                            <a href={`mailto:${detail.email}`} className="text-primary font-semibold text-xs">{detail.email}</a>
                            {isDesktop && (
                              <span className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                Click to copy to clipboard
                              </span>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">Start Your Global Trade Journey</h2>
              <p className="text-lg text-secondary-light mb-8">
                Tell us about your business needs, and we'll connect you with the right solutions. Our intelligent form adapts to your inquiry type for a personalized experience.
              </p>

              <div className="card-elevated p-6 mb-8">
                <h3 className="text-xl font-montserrat font-semibold text-secondary-dark mb-4 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-primary" />
                  Best Time to Reach Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-secondary">India</div>
                    <div className="text-primary font-semibold">
                      {currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                    </div>
                    <div className="text-xs text-secondary-light">9 AM - 6 PM IST</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-secondary">USA</div>
                    <div className="text-primary font-semibold">
                      {currentTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                    </div>
                    <div className="text-xs text-secondary-light">9 AM - 5 PM EST</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-secondary">UAE</div>
                    <div className="text-primary font-semibold">
                      {currentTime.toLocaleTimeString('en-AE', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                    </div>
                    <div className="text-xs text-secondary-light">9 AM - 6 PM GST</div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <h3 className="text-xl font-montserrat font-semibold text-secondary-dark mb-4">Follow Our Journey</h3>
                <p className="text-secondary-light mb-4">Stay updated with our latest trade activities, market insights, and success stories.</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} className={`w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 ${social.color}`} aria-label={social.name}>
                      <Icon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center transition-opacity duration-300">
          <Icon name="CheckCircle" size={20} className="mr-2" />
          Number copied to clipboard!
        </div>
      )}

      <ResponseCommitment />
      <FAQSection />
    </div>
  );
}