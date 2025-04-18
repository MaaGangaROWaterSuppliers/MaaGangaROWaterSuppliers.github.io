import React from 'react';
import { Droplets, Truck, Clock, Users } from 'lucide-react';

const serviceItems = [
  {
    icon: <Droplets className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" />,
    title: "RO-Purified Water Only",
    description: "We deliver only the highest quality RO-purified water, ensuring it's safe and healthy for consumption."
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" />,
    title: "Fast & Reliable Delivery",
    description: "Count on us for timely and reliable delivery service to your home, office or event location."
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" />,
    title: "Daily & Weekly Supply Plans",
    description: "Choose from our flexible supply plans, including daily delivery, weekly schedules, and bulk orders."
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" />,
    title: "For Homes, Offices & Events",
    description: "We cater to all your needs - whether for your family, your workplace, or special occasions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide high-quality RO water delivery services to meet all your hydration needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-contain bg-no-repeat bg-right"
               style={{backgroundImage: "url('https://i.ibb.co/ZXxZVvX/wave-pattern.png')"}}></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Emergency Delivery Available</h3>
              <p className="text-blue-700">
                Running out of water? Call us for quick emergency delivery service.
              </p>
            </div>
            <a href="#contact" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block min-w-[160px] text-center">
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;