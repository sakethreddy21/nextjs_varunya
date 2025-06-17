import React, { useState, useEffect } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: `Vaarunya transformed our spice sourcing operations completely. Their quality assurance process and transparent communication helped us reduce procurement costs by 30% while improving product quality. The cultural bridge they provide made working with Indian suppliers seamless.`,
      author: "Sarah Mitchell",
      position: "Procurement Director",
      company: "Global Spice Co., USA",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      results: [
        { metric: "Cost Reduction", value: "30%" },
        { metric: "Quality Improvement", value: "95%" },
        { metric: "Delivery Time", value: "-40%" }
      ]
    },
    {
      id: 2,
      quote: `Working with Vaarunya for our textile exports has been exceptional. Their understanding of international compliance requirements and proactive communication kept our shipments on schedule. We've expanded to 5 new markets with their support.`,
      author: "Rajesh Patel",
      position: "Export Manager",
      company: "Heritage Textiles, India",
      companyLogo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      results: [
        { metric: "New Markets", value: "5" },
        { metric: "Revenue Growth", value: "150%" },
        { metric: "Client Retention", value: "98%" }
      ]
    },
    {
      id: 3,
      quote: `The transparency and reliability Vaarunya provides is unmatched. From initial inquiry to final delivery, every step was clearly communicated. Their quality control prevented potential issues that could have cost us significantly.`,
      author: "Maria Rodriguez",
      position: "Supply Chain Manager",
      company: "European Foods Ltd., Spain",
      companyLogo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      results: [
        { metric: "Issue Prevention", value: "100%" },
        { metric: "Process Efficiency", value: "60%" },
        { metric: "Satisfaction Score", value: "9.8/10" }
      ]
    },
    {
      id: 4,
      quote: `Vaarunya's expertise in agricultural exports helped us navigate complex regulations and establish reliable supply chains. Their network of verified suppliers and quality assurance processes gave us confidence in every shipment.`,
      author: "James Thompson",
      position: "Head of Sourcing",
      company: "AgriTrade International, UK",
      companyLogo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      results: [
        { metric: "Supplier Network", value: "50+" },
        { metric: "Compliance Rate", value: "100%" },
        { metric: "Order Accuracy", value: "99.5%" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
          What Our Partners Say
        </h2>
        <p className="text-lg text-secondary-light max-w-3xl mx-auto">
          Real stories from real clients who've experienced the Vaarunya difference in their international trade journey.
        </p>
      </div>

      <div className="relative">
        {/* Main Testimonial Display */}
        <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12 mb-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Quote Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Icon name="Quote" size={48} className="text-primary/20 mb-4" />
                <blockquote className="text-lg lg:text-xl text-secondary-dark leading-relaxed font-medium">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-secondary-dark">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-secondary-light">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-primary font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Company Logo */}
              <div className="w-24 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={testimonials[currentTestimonial].companyLogo}
                  alt={`${testimonials[currentTestimonial].company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-primary/5 to-accent rounded-xl p-6">
              <h5 className="font-montserrat font-bold text-secondary-dark mb-4 text-center">
                Results Achieved
              </h5>
              <div className="space-y-4">
                {testimonials[currentTestimonial].results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-primary mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-secondary-light">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Previous/Next Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-card text-secondary hover:text-primary hover:shadow-hover rounded-full transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={24} className="mx-auto" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-card text-secondary hover:text-primary hover:shadow-hover rounded-full transition-all duration-300"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={24} className="mx-auto" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125' :'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-sm text-secondary-light">
            {currentTestimonial + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;