import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Cta from './components/Cta';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

import SeoPage from './pages/SeoPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import PpcAdsPage from './pages/PpcAdsPage';
import SocialMediaPage from './pages/SocialMediaPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Cta />
      <FinalCta />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seo" element={<SeoPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/ppc-ads" element={<PpcAdsPage />} />
          <Route path="/social-media-management" element={<SocialMediaPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
