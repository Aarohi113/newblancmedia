import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  const [badgeDocked, setBadgeDocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        const rect = servicesElement.getBoundingClientRect();
        // Dock to services when services top reaches upper viewport (<= 55% of window height)
        if (rect.top <= window.innerHeight * 0.55 && rect.bottom > 150) {
          setBadgeDocked(true);
        } else {
          setBadgeDocked(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero badgeDocked={badgeDocked} />
      <Services badgeDocked={badgeDocked} />
    </main>
  );
}

export default App;
