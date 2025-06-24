import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const SuccessStories = ({ successStories }) => {
  const [selectedStory, setSelectedStory] = useState(0);

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-montserrat font-bold text-secondary-dark mb-4">
          Success Stories & Client Testimonials
        </h2>
        <p className="text-secondary-light max-w-2xl mx-auto">
          Discover how our products have helped businesses achieve their goals and build successful partnerships
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {successStories.map((story, index) => (
          <div key={story.id} className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
            <div className="p-6">
              {/* Client Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={story.clientImage}
                    alt={story.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-secondary-dark">
                    {story.clientName}
                  </h3>
                  <div className="flex items-center text-sm text-secondary-light">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    <span>{story.country}</span>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm font-medium text-primary">{story.product}</div>
                  <div className="text-xs text-secondary-light">{story.orderVolume}</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-secondary-dark mb-2 flex items-center">
                    <Icon name="AlertCircle" size={16} className="text-orange-500 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-sm text-secondary-light pl-6">
                    {story.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-secondary-dark mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="text-primary mr-2" />
                    Solution
                  </h4>
                  <p className="text-sm text-secondary-light pl-6">
                    {story.solution}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-secondary-dark mb-2 flex items-center">
                    <Icon name="TrendingUp" size={16} className="text-green-500 mr-2" />
                    Result
                  </h4>
                  <p className="text-sm text-secondary-light pl-6">
                    {story.result}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-accent/30 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <Icon name="Quote" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-secondary italic">
                    {story.testimonial}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Full Case Study
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Similar Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-card">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">500+</div>
          <div className="text-sm text-secondary-light">Successful Projects</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-card">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">50+</div>
          <div className="text-sm text-secondary-light">Countries Served</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-card">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">98%</div>
          <div className="text-sm text-secondary-light">Client Satisfaction</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-card">
          <div className="text-3xl font-montserrat font-bold text-primary mb-2">15+</div>
          <div className="text-sm text-secondary-light">Years Experience</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center p-8 bg-gradient-to-r from-primary/10 to-accent rounded-xl">
        <h3 className="text-2xl font-montserrat font-bold text-secondary-dark mb-4">
          Ready to Create Your Success Story?
        </h3>
        <p className="text-secondary-light mb-6 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who have transformed their business with our premium products and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300">
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Start Your Project
          </button>
          <button className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-montserrat font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
            <Icon name="Phone" size={20} className="mr-2" />
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;