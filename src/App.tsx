import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import SpaceBackground from './components/SpaceBackground';
import JupiterPlanet from './components/JupiterPlanet';
import Spaceship from './components/Spaceship';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppWidget from './components/WhatsAppWidget';
import Analytics from './components/Analytics';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Students from './pages/Students';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import ACImage from './gal/ac.jpeg';
import sasImage from './gal/sas.jpeg';
import SpicesImage from './gal/spices.png';
import logo from './components/logo.png';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const imagesToPreload = [ACImage, sasImage, SpicesImage, logo];
    let loadedCount = 0;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          setImagesPreloaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          setImagesPreloaded(true);
        }
      };
    });

    const timeout = setTimeout(() => {
      setImagesPreloaded(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <AnimatePresence mode="wait">
            {!isLoadingComplete ? (
              <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
            ) : (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative min-h-screen"
              >
                <SEO />
                <Analytics />
                <SpaceBackground />
                <JupiterPlanet />
                <Spaceship />
                <Navigation />

                <main className="relative z-10">
                  <Routes future={{ v7_relativeSplatPath: true }}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                  </Routes>
                </main>

                <Footer />
                <ScrollToTop />
                <WhatsAppWidget />
                <CookieConsent />
              </motion.div>
            )}
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
