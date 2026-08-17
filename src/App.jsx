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
import GmbPage from './pages/GmbPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
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
          <Route path="/gmb" element={<GmbPage />} />
          <Route path="/google-business-profile" element={<GmbPage />} />
          <Route path="/ppc-ads" element={<GmbPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/social-media-management" element={<SocialMediaPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
