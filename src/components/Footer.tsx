import React from 'react';
import { Droplets, PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-blue-300 mr-2" />
              <span className="font-bold text-xl">Maa Ganga RO</span>
            </div>
            <p className="text-blue-200 mb-6">
              Your trusted partner for pure and affordable drinking water in Tigaon and nearby areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12.061c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.874c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.562v1.875h2.771l-.443 2.891h-2.328v6.988C18.343 21.129 22 16.992 22 12.061z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.52 0-3.008-.375-4.333-1.086l-.31-.183-3.216.836.85-3.102-.202-.32c-.789-1.258-1.205-2.695-1.205-4.179 0-4.326 3.531-7.856 7.873-7.856 2.103 0 4.082.819 5.56 2.304 1.478 1.485 2.297 3.461 2.295 5.562-.003 4.325-3.533 7.849-7.86 7.849m6.672-14.731c-1.778-1.784-4.135-2.767-6.675-2.767-5.212 0-9.449 4.234-9.452 9.438 0 1.664.437 3.291 1.267 4.729l.196.387-1.074 3.923 4.023-1.053.373.186c1.398.771 2.98 1.177 4.585 1.179h.004c5.208 0 9.445-4.236 9.447-9.441.001-2.523-.982-4.89-2.769-6.671" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Areas', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-blue-200">RO-Purified Water Supply</span></li>
              <li><span className="text-blue-200">Daily & Weekly Delivery</span></li>
              <li><span className="text-blue-200">Bulk Orders for Events</span></li>
              <li><span className="text-blue-200">Emergency Delivery</span></li>
              <li><span className="text-blue-200">Office Water Solutions</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <PhoneCall className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <a href="tel:9990160746" className="text-blue-200 hover:text-white transition-colors">
                  9990160746
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <a href="mailto:karamchandnagar33@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                  karamchandnagar33@gmail.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <span className="text-blue-200">
                  Tigaon, IMT, and nearby areas
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Maa Ganga RO Water Suppliers. All rights reserved.</p>
          <p className="mt-2 text-sm">Because Your Health Is Our Priority</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;