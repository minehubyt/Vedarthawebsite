import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import RevealVideoSection from './components/RevealVideoSection.tsx';
import FeaturedContent from './components/FeaturedContent.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import CareerSlideshow from './components/CareerSlideshow.tsx';
import ImpactBanner from './components/ImpactBanner.tsx';
import Footer from './components/Footer.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import LegalPage from './pages/LegalPage.tsx';
import PurposeValuesPage from './pages/PurposeValuesPage.tsx';
import ContactUsPage from './pages/ContactUsPage.tsx';
import RFPPage from './pages/RFPPage.tsx';
import AboutPage from './pages/AboutPage.tsx';

type Page = 'home' | 'legal' | 'purpose-values' | 'contact-us' | 'rfp' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'legal', 'purpose-values', 'contact-us', 'rfp', 'about'];
      if (validPages.includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('hashchange', handlePopState);
    return () => window.removeEventListener('hashchange', handlePopState);
  }, []);

  if (!isReady) return <div className="bg-white h-screen w-screen flex items-center justify-center">
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 border-4 border-[#86BC25] border-t-transparent rounded-full animate-spin" />
    </div>
  </div>;

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#86BC25] selection:text-black">
      <Header 
        onLogoClick={() => navigateTo('home')} 
        onLinkClick={(path) => navigateTo(path as Page)}
      />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="sticky top-0 z-10 h-screen overflow-hidden">
                <Hero />
              </div>
              <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.9)] bg-black">
                <RevealVideoSection />
              </div>
            </div>
            <main className="relative z-30 bg-white">
              <FeaturedContent />
              <ServicesSection />
              <ImpactBanner />
              <CareerSlideshow />
            </main>
          </motion.div>
        ) : (
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 min-h-[80vh]"
          >
            {currentPage === 'legal' && <LegalPage />}
            {currentPage === 'purpose-values' && <PurposeValuesPage />}
            {currentPage === 'contact-us' && <ContactUsPage />}
            {currentPage === 'rfp' && <RFPPage />}
            {currentPage === 'about' && <AboutPage />}
          </motion.main>
        )}
      </AnimatePresence>

      <Footer 
        onLegalClick={() => navigateTo('legal')} 
        onHomeClick={() => navigateTo('home')}
        onContactClick={() => navigateTo('contact-us')}
        onRFPClick={() => navigateTo('rfp')}
      />
      
      <AIAssistant />
    </div>
  );
};

export default App;