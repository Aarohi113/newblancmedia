import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Cta from './components/Cta';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Cta />
    </main>
  );
}

export default App;
