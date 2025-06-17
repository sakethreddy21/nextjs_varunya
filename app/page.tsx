"use client"

import React, { useState, useEffect } from 'react';



import HeroCarousel from '@/components/home/HeroCarousel';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ProductCategories from '@/components/home/ProductCategories';
import PerformanceMetrics from '@/components/home/PerformanceMetrics';
import TradeJourneySection from '@/components/home/TradeJourneySection';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel Section */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Trust Indicators Bar */}
      <section className="py-8 bg-surface border-b border-border-light">
        <TrustIndicators />
      </section>

      {/* Why Choose Vaarunya Section */}
      <section className="py-16 lg:py-24 bg-background">
        <WhyChooseSection />
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 lg:py-24 bg-surface">
        <TestimonialsCarousel />
      </section>

      {/* Product Categories Section */}
      <section className="py-16 lg:py-24 bg-background">
        <ProductCategories />
      </section>

      {/* Performance Metrics */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent">
        <PerformanceMetrics />
      </section>

      {/* Start Your Trade Journey */}
      <section className="py-16 lg:py-24 bg-secondary-dark text-white">
        <TradeJourneySection />
      </section>
    </div>
  );
};

export default Homepage;