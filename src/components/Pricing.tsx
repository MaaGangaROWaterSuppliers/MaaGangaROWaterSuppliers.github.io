import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: "Single Bottle",
    price: "₹20",
    description: "One-time delivery",
    features: [
      "20L RO purified water",
      "Same-day delivery",
      "Pay on delivery",
      "No minimum order"
    ]
  },
  {
    title: "Daily Supply",
    price: "₹18",
    unit: "per bottle",
    description: "Regular daily delivery",
    featured: true,
    features: [
      "20L RO purified water",
      "Fixed delivery time",
      "Monthly billing option",
      "Priority service"
    ]
  },
  {
    title: "Bulk Order",
    price: "₹15",
    unit: "per bottle",
    description: "For events & large orders",
    features: [
      "20L RO purified water",
      "Minimum 10 bottles",
      "Free delivery setup",
      "Dedicated support"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Affordable Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Clean, pure drinking water doesn't have to be expensive. Our pricing is designed to be affordable for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl
                ${plan.featured 
                  ? 'bg-white border-2 border-blue-500 shadow-lg transform hover:-translate-y-1' 
                  : 'bg-white shadow-md hover:-translate-y-1'
                }
              `}
            >
              {plan.featured && (
                <div className="bg-blue-500 text-white py-2 text-center font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  {plan.unit && <span className="text-gray-600 ml-1">{plan.unit}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`
                    block text-center rounded-lg py-3 font-medium transition-colors w-full
                    ${plan.featured 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }
                  `}
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Need a custom supply plan for your business or event?</p>
          <a 
            href="#contact" 
            className="inline-block bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact For Custom Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;