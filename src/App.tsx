import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;