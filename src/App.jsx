import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Products />
    </main>
  );
}

export default App;
