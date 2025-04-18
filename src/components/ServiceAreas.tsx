import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  { name: "Tigaon", isMain: true },
  { name: "IMT", isMain: true },
  { name: "Sector 58", isMain: false },
  { name: "Sector 59", isMain: false },
  { name: "Sector 60", isMain: false },
  { name: "Sector 61", isMain: false },
  { name: "Nearby Colonies", isMain: false }
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-16 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full -ml-24 -mb-16 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Service Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We proudly serve Tigaon, IMT, and all nearby sectors and colonies with our water delivery service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-blue-600 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Areas We Cover</h3>
              <ul className="space-y-4">
                {areas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className={area.isMain ? "font-semibold" : ""}>
                      {area.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-blue-500">
                <p className="mb-4">Need delivery in another area?</p>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-blue-600 py-2 px-6 rounded-full font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>
            
            <div className="p-6 md:p-12 flex items-center justify-center">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{backgroundImage: "url('https://images.pexels.com/photos/8942981/pexels-photo-8942981.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="font-bold text-lg">Tigaon & Surrounding Areas</p>
                  <p className="text-white text-opacity-80">Fast delivery throughout the region</p>
                </div>
                
                {/* Pulsing location marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full relative animate-ping-slow">
                    <div className="absolute inset-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;