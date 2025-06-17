import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/AppIcon';

const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  const metrics = [
    {
      id: 1,
      label: "Countries Served",
      value: 50,
      suffix: "+",
      icon: "Globe",
      description: "Global reach across continents",
      color: "text-blue-600"
    },
    {
      id: 2,
      label: "Successful Shipments",
      value: 10000,
      suffix: "+",
      icon: "Truck",
      description: "Delivered with precision",
      color: "text-green-600"
    },
    {
      id: 3,
      label: "Client Retention Rate",
      value: 98,
      suffix: "%",
      icon: "Users",
      description: "Long-term partnerships",
      color: "text-purple-600"
    },
    {
      id: 4,
      label: "Years of Experience",
      value: 15,
      suffix: "+",
      icon: "Award",
      description: "Industry expertise",
      color: "text-orange-600"
    },
    {
      id: 5,
      label: "Quality Success Rate",
      value: 99.8,
      suffix: "%",
      icon: "ShieldCheck",
      description: "Uncompromising standards",
      color: "text-red-600"
    },
    {
      id: 6,
      label: "Response Time",
      value: 2,
      suffix: " hrs",
      icon: "Clock",
      description: "Average inquiry response",
      color: "text-indigo-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (metric) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = metric.value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(stepValue * currentStep, metric.value);
        
        setAnimatedValues(prev => ({
          ...prev,
          [metric.id]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return timer;
    };

    const timers = metrics.map(metric => animateValue(metric));

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  const formatValue = (value, originalValue) => {
    if (originalValue >= 1000) {
      return Math.floor(value).toLocaleString();
    }
    if (originalValue % 1 !== 0) {
      return value.toFixed(1);
    }
    return Math.floor(value);
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-secondary-dark mb-6">
          Performance That Speaks Volumes
        </h2>
        <p className="text-lg text-secondary-light max-w-3xl mx-auto">
          Numbers don't lie. Our track record demonstrates consistent excellence in international trade, 
          built on trust, quality, and unwavering commitment to our partners.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                <Icon name={metric.icon} size={32} className={`${metric.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>

              {/* Animated Value */}
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-montserrat font-bold text-secondary-dark mb-2">
                  {isVisible ? (
                    <>
                      {formatValue(animatedValues[metric.id] || 0, metric.value)}
                      <span className="text-primary">{metric.suffix}</span>
                    </>
                  ) : (
                    <>0<span className="text-primary">{metric.suffix}</span></>
                  )}
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-secondary-dark mb-2">
                  {metric.label}
                </h3>
                <p className="text-secondary-light text-sm">
                  {metric.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-2000 ease-out"
                  style={{
                    width: isVisible 
                      ? `${Math.min((animatedValues[metric.id] || 0) / metric.value * 100, 100)}%`
                      : '0%'
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-card">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-montserrat font-bold text-secondary-dark mb-4">
            More Than Just Numbers
          </h3>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Behind every statistic is a story of partnership, trust, and mutual success. 
            Here's what these numbers really represent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-green-600" />
            </div>
            <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">Growth Rate</h4>
            <p className="text-2xl font-bold text-green-600 mb-1">45%</p>
            <p className="text-sm text-secondary-light">Year-over-year</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <Icon name="Star" size={24} className="text-blue-600" />
            </div>
            <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">Avg. Rating</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">4.9/5</p>
            <p className="text-sm text-secondary-light">Client feedback</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
              <Icon name="Repeat" size={24} className="text-purple-600" />
            </div>
            <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">Repeat Orders</h4>
            <p className="text-2xl font-bold text-purple-600 mb-1">85%</p>
            <p className="text-sm text-secondary-light">Client loyalty</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-orange-600" />
            </div>
            <h4 className="font-montserrat font-semibold text-secondary-dark mb-2">Processing</h4>
            <p className="text-2xl font-bold text-orange-600 mb-1">24hrs</p>
            <p className="text-sm text-secondary-light">Order processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;