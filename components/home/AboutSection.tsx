import { Globe, Award, Users, Truck } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-secondary mb-6">About Vaarunya</h2>
            <p className="text-md text-gray-700 leading-relaxed">
              At Vaarunya Global Exim, we don't just facilitate trade we build lasting partnerships that drive mutual growth and success. Our transparent approach, competitive pricing, and unwavering commitment to client satisfaction have made us the trusted choice for businesses across continents.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              We bridge continents by connecting verified suppliers with serious buyers worldwide, making global trade accessible, secure, and rewarding for businesses of all sizes. We partner exclusively with certified farmers, established manufacturers, and reputable wholesalers who share our commitment to excellence. Every product in our portfolio undergoes rigorous quality checks. From the first inquiry to final delivery, our experienced trade specialists provide end-to-end support, ensuring every transaction exceeds your expectations. 
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-white font-montserrat font-semibold rounded-lg hover:bg-primary-dark hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Know More
            </Link>
          </div>
          
          <div className="lg:order-first">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="About Varunaya"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className=" text-center lg:text-left">
          <p className="text-2xl italic text-primary font-medium flex justify-center">
            "Join us as we shape the future of global trade — one successful transaction at a time."
          </p>
        </div>

     
      </div>
    </section>
  );
};

export default AboutSection;