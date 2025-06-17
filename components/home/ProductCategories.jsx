'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/AppIcon'; // Assuming this is a custom component in your Next.js project

const ProductCategories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Spices & Seasonings",
      description: "Premium quality spices sourced directly from origin farms with complete traceability.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Leaf",
      subcategories: ["Whole Spices", "Ground Spices", "Spice Blends", "Organic Varieties"],
      seasonalAvailability: "Year-round",
      popularProducts: ["Turmeric", "Cardamom", "Black Pepper", "Cumin"],
      certifications: ["FSSAI", "Organic", "Fair Trade"]
    },
    {
      id: 2,
      name: "Textiles & Fabrics",
      description: "Exquisite handwoven and machine-made textiles showcasing traditional craftsmanship.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Shirt",
      subcategories: ["Cotton Fabrics", "Silk Textiles", "Handloom Products", "Home Textiles"],
      seasonalAvailability: "Year-round",
      popularProducts: ["Banarasi Silk", "Cotton Khadi", "Block Prints", "Bed Linens"],
      certifications: ["GOTS", "OEKO-TEX", "Handloom Mark"]
    },
    {
      id: 3,
      name: "Agricultural Products",
      description: "Fresh and processed agricultural products from India\'s fertile regions.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Wheat",
      subcategories: ["Grains & Cereals", "Pulses & Lentils", "Fresh Produce", "Processed Foods"],
      seasonalAvailability: "Seasonal",
      popularProducts: ["Basmati Rice", "Wheat", "Lentils", "Fresh Vegetables"],
      certifications: ["APEDA", "Organic", "GAP Certified"]
    },
    {
      id: 4,
      name: "Handicrafts & Artifacts",
      description: "Authentic Indian handicrafts representing centuries of artistic tradition.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Palette",
      subcategories: ["Wood Crafts", "Metal Work", "Pottery", "Decorative Items"],
      seasonalAvailability: "Year-round",
      popularProducts: ["Wooden Sculptures", "Brass Items", "Ceramic Pottery", "Wall Hangings"],
      certifications: ["GI Tagged", "Artisan Certified", "Export Quality"]
    },
    {
      id: 5,
      name: "Ayurvedic & Wellness",
      description: "Traditional Ayurvedic products and wellness items for holistic health.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Heart",
      subcategories: ["Herbal Medicines", "Essential Oils", "Wellness Products", "Natural Cosmetics"],
      seasonalAvailability: "Year-round",
      popularProducts: ["Herbal Supplements", "Aromatherapy Oils", "Natural Soaps", "Ayurvedic Teas"],
      certifications: ["WHO-GMP", "Ayush License", "Organic"]
    },
    {
      id: 6,
      name: "Jewelry & Gems",
      description: "Exquisite jewelry and precious stones crafted by skilled artisans.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Gem",
      subcategories: ["Gold Jewelry", "Silver Items", "Precious Stones", "Fashion Jewelry"],
      seasonalAvailability: "Year-round",
      popularProducts: ["Traditional Jewelry", "Gemstones", "Silver Artifacts", "Fashion Accessories"],
      certifications: ["Hallmark", "BIS Certified", "Export Quality"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
          Explore Our Product Universe
        </h2>
        <p className="text-lg text-secondary-light max-w-3xl mx-auto">
          Discover our carefully curated collection of premium products, each representing the finest quality 
          and authentic craftsmanship from India's diverse regions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                width={800}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                priority={category.id <= 3} // Optimize loading for first few images
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Seasonal Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  category.seasonalAvailability === 'Year-round' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                }`}>
                  {category.seasonalAvailability}
                </div>
              </div>

              {/* Category Icon */}
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name={category.icon} size={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-montserrat font-bold text-secondary-dark mb-3">
                {category.name}
              </h3>
              <p className="text-secondary-light mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-4">
                {category.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* Hover Content */}
              {hoveredCategory === category.id && (
                <div className="animation-fade-in">
                  <div className="border-t border-border-light pt-4">
                    <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">
                      Subcategories
                    </h4>
                    <div className="grid grid-cols-2 gap-1 mb-4">
                      {category.subcategories.map((sub, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <Icon name="ChevronRight" size={12} className="text-primary" />
                          <span className="text-xs text-secondary-light">{sub}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">
                      Popular Products
                    </h4>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {category.popularProducts.map((product, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent text-secondary text-xs rounded"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/products-interactive-category-explorer"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-300"
              >
                Explore Category
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary/5 to-accent rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-secondary-dark mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-secondary-light mb-8 max-w-2xl mx-auto">
            Our product catalog extends far beyond what's shown here. We can source virtually any product 
            from India with our extensive supplier network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products-interactive-category-explorer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Browse All Products
            </Link>
            <Link
              href="/get-quote-intelligent-conversion-portal"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-montserrat font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Request Custom Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;