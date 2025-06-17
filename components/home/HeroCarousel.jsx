'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/AppIcon'; // Assuming this is a custom component in your Next.js project

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Bridging Continents, Connecting Opportunities",
      subtitle: "Your trusted partner in global trade, connecting businesses across borders with seamless import-export solutions.",
      backgroundImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      primaryCTA: { text: "Get Quote", link: "/get-quote-intelligent-conversion-portal" },
      secondaryCTA: { text: "Explore Our Process", link: "/process-transparency-center" },
      features: ["Global Network", "Quality Assured", "Transparent Process"]
    },
    {
      id: 2,
      title: "Premium Quality Products",
      subtitle: "From aromatic spices to finest textiles, discover our curated collection of export-quality products with international certifications.",
      backgroundImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      primaryCTA: { text: "Explore Products", link: "/products-interactive-category-explorer" },
      secondaryCTA: { text: "View Certifications", link: "/about-trust-building-corporate-story" },
      features: ["ISO Certified", "FSSAI Approved", "Export Licensed"]
    },
    {
      id: 3,
      title: "Transparent Trade Process",
      subtitle: "Experience complete transparency from order to delivery with our step-by-step process visualization and real-time tracking.",
      backgroundImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      primaryCTA: { text: "See Process", link: "/process-transparency-center" },
      secondaryCTA: { text: "Track Shipment", link: "/contact-global-accessibility-hub" },
      features: ["Real-time Tracking", "Documentation Support", "Compliance Guidance"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.backgroundImage}
              alt={slide.title}
              width={2070}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0} // Optimize loading for the first slide
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="animation-fade-in">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                      >
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={slide.primaryCTA.link}
                      className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Icon name="ArrowRight" size={20} className="mr-2" />
                      {slide.primaryCTA.text}
                    </Link>
                    <Link
                      href={slide.secondaryCTA.link}
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-secondary transition-all duration-300"
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      {slide.secondaryCTA.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} className="mx-auto" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} className="mx-auto" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;