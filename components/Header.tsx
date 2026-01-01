
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';

interface HeaderProps {
  onLogoClick?: () => void;
  onLinkClick?: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onLinkClick }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (label: string) => {
    setActiveTab(prev => (prev === label ? null : label));
    setActiveSectionIdx(0);
  };

  const currentNavData = NAV_ITEMS.find(item => item.label === activeTab);

  return (
    <div className="relative z-[310]">
      <header 
        className={`fixed top-0 left-0 right-0 z-[320] transition-all duration-500 h-[clamp(60px,8vh,80px)] flex items-center ${
          scrolled || activeTab ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
        } border-b border-white/10`}
      >
        <div className="container mx-auto px-6 lg:px-[8vw] flex items-center justify-between max-w-[1800px]">
          <div className="flex items-center space-x-6 lg:space-x-12">
            <div 
              onClick={onLogoClick}
              className="flex items-center group cursor-pointer flex-shrink-0"
            >
              <span className="text-white text-[clamp(20px,2.5vw,28px)] font-black tracking-tighter">Vedartha</span>
              <div className="w-[clamp(6px,0.8vw,8px)] h-[clamp(6px,0.8vw,8px)] bg-[#86BC25] rounded-full mt-[clamp(8px,1vw,11px)] ml-0.5" />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  <button 
                    onClick={() => handleTabClick(item.label)}
                    className={`text-[clamp(11px,1vw,13px)] font-bold flex items-center space-x-1.5 transition-all group py-2 ${
                      activeTab === item.label ? 'text-[#86BC25]' : 'text-white hover:text-[#86BC25]'
                    }`}
                  >
                    <span className="uppercase tracking-widest">{item.label}</span>
                    {item.children && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-500 ${activeTab === item.label ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-8 text-white">
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-[#86BC25] transition-colors">
                <Search size={18} />
                <span className="text-[11px] font-bold uppercase tracking-widest">Search</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-[#86BC25] transition-colors">
                <Globe size={18} />
                <span className="text-[11px] font-bold uppercase tracking-widest flex items-center">
                  Global
                  <ChevronDown size={12} className="ml-1" />
                </span>
              </div>
            </div>
            
            <button 
              className="lg:hidden p-2 text-white hover:text-[#86BC25] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[350] lg:hidden p-8 pt-24"
          >
            <div className="space-y-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (!item.children) {
                      setMobileMenuOpen(false);
                      onLinkClick?.(item.label.toLowerCase().replace(/\s+/g, '-'));
                    }
                  }}
                  className="block text-3xl font-bold text-white uppercase tracking-tighter hover:text-[#86BC25] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeTab && currentNavData?.children && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[clamp(60px,8vh,80px)] left-0 right-0 z-[315] bg-[#111] text-white shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row min-h-[550px]">
              <div className="w-full lg:w-[320px] bg-[#1a1a1a] py-8 border-r border-white/5">
                {currentNavData.children.sections.map((section, idx) => (
                  <button
                    key={section.title}
                    onMouseEnter={() => setActiveSectionIdx(idx)}
                    className={`w-full flex items-center justify-between px-10 py-5 text-left transition-all duration-300 ${
                      activeSectionIdx === idx 
                        ? 'bg-[#111] text-[#86BC25] pl-12' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[17px] font-bold tracking-tight">{section.title}</span>
                    <ChevronRight 
                      size={18} 
                      className={`transition-all duration-300 ${activeSectionIdx === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} 
                    />
                  </button>
                ))}
              </div>

              <div className="flex-1 p-8 lg:p-16 bg-[#111] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-8 overflow-y-auto max-h-[70vh]">
                {currentNavData.children.sections[activeSectionIdx].items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.label === 'What we believe in') onLinkClick?.('purpose-values');
                      else if (item.label === 'Contact Us') onLinkClick?.('contact-us');
                      else if (item.label === 'Submit RFP') onLinkClick?.('rfp');
                      setActiveTab(null);
                    }}
                    className="text-[clamp(18px,2vw,22px)] font-light text-gray-300 hover:text-[#86BC25] transition-all block w-fit text-left hover:translate-x-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="hidden xl:flex w-[450px] bg-[#0a0a0a] p-12 flex-col justify-center border-l border-white/5">
                <span className="text-[#86BC25] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Spotlight</span>
                <div 
                  onClick={() => {
                     if (currentNavData.label === 'Who we are') onLinkClick?.('about');
                     setActiveTab(null);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 bg-gray-900">
                    <img 
                      src={currentNavData.children.featured?.imageUrl} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      alt="Featured"
                    />
                  </div>
                  <h5 className="text-[clamp(20px,1.5vw,24px)] font-bold leading-tight group-hover:text-[#86BC25] transition-colors">{currentNavData.children.featured?.subtitle}</h5>
                  <p className="text-gray-500 mt-4 text-sm font-light">Explore our latest perspectives on global trends and strategic evolution.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTab(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[312]"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
