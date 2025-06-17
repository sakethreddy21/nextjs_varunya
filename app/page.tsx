"use client"

import React, { useState, useEffect } from 'react';



import HeroSlider from '@/components/home/HeroCarousel';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ProductCategories from '@/components/home/ProductCategories';
import PerformanceMetrics from '@/components/home/PerformanceMetrics';
import TradeJourneySection from '@/components/home/TradeJourneySection';
import AboutSection from '@/components/home/AboutSection';
import CantFindYourProduct from '@/components/home/CantFindYourProduct';
import OrderProcessingSteps from '@/components/home/OrderProcessingSteps';
const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero Carousel Section */}
      <section >
        <HeroSlider />
      </section>

      {/* Trust Indicators Bar */}
      <section className="py-8 bg-surface border-b border-border-light">
        <AboutSection />
      </section>

      {/* Why Choose Vaarunya Section */}
      <section className="py-8 lg:py-12 bg-background">
        <WhyChooseSection />
      </section>

      {/* Testimonials Carousel */}
    {/* <section className="py-16 lg:py-24 bg-surface">
      <TestimonialsCarousel />
    </section> */}

      {/* Product Categories Section */}
      <section className="py-8 lg:py-8 bg-background">
        <ProductCategories />
      </section>
 <section className="py-8 lg:py-8 bg-background">
        <OrderProcessingSteps />
      </section>
      {/* Performance Metrics */}
    {/* <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent">
      <PerformanceMetrics />
    </section> */}
 <section className="pb-8 lg:pb-16 ">
        <CantFindYourProduct />
      </section>

      {/* Start Your Trade Journey */}
      <section className="py-4 lg:py-8 bg-secondary-dark text-white">
        <TradeJourneySection />
      </section>
    </div>
  );
};

export default Homepage;