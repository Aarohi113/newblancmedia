import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
