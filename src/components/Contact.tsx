import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
      });
      
      // Reset success message after some time
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us for orders, inquiries, or to set up a regular delivery schedule.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                We're here to answer any questions you have about our services, delivery areas, or pricing.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <a href="tel:9990160746" className="text-blue-600 hover:underline">
                    9990160746
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:karamchandnagar33@gmail.com" className="text-blue-600 hover:underline">
                    karamchandnagar33@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">Service Area</h4>
                  <p className="text-gray-600">
                    Tigaon, IMT, and all nearby sectors and colonies
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
              <h4 className="font-bold text-blue-800 mb-2">Business Hours</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-gray-50 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            
            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Delivery Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`
                  w-full py-3 rounded-lg font-semibold text-white transition-colors
                  ${submitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'}
                `}
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;