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

  const handleLinkNavigation = (path: string) => {
    onLinkClick?.(path);
    setActiveTab(null);
    setMobileMenuOpen(false);
  };

  const currentNavData = NAV_ITEMS.find(item => item.label === activeTab);

  return (
    <div className="relative z-[310]">
      <header 
        className={`fixed top-0 left-0 right-0 z-[320] transition-all duration-300 h-[80px] flex items-center ${
          scrolled || activeTab || mobileMenuOpen ? 'bg-black shadow-2xl' : 'bg-transparent'
        } border-b border-white/10`}
      >
        <div className="container mx-auto px-6 lg:px-[8vw] flex items-center justify-between max-w-[1800px]">
          <div className="flex items-center space-x-12">
            <div 
              onClick={() => { onLogoClick?.(); setMobileMenuOpen(false); setActiveTab(null); }}
              className="flex items-center group cursor-pointer flex-shrink-0"
            >
              <span className="text-white text-[28px] font-black tracking-tighter">Vedartha</span>
              <div className="w-[8px] h-[8px] bg-[#86BC25] rounded-full mt-[11px] ml-0.5" />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  <button 
                    onClick={() => handleTabClick(item.label)}
                    className={`text-[13px] font-bold flex items-center space-x-1.5 transition-all group py-2 ${
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

          <div className="flex items-center space-x-8 text-white">
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
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Submenu */}
      <AnimatePresence>
        {activeTab && currentNavData?.children && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[80px] left-0 right-0 z-[315] bg-[#111] text-white shadow-2xl overflow-hidden hidden lg:block"
          >
            <div className="flex min-h-[500px]">
              <div className="w-[320px] bg-[#1a1a1a] py-8 border-r border-white/5">
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

              <div className="flex-1 p-16 bg-[#111] grid grid-cols-2 gap-x-12 gap-y-8 overflow-y-auto max-h-[70vh]">
                {currentNavData.children.sections[activeSectionIdx].items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.label === 'What we believe in') handleLinkNavigation('purpose-values');
                      else if (item.label === 'Contact Us' || item.label === 'Global Office Directory') handleLinkNavigation('contact-us');
                      else if (item.label === 'Submit RFP') handleLinkNavigation('rfp');
                      else if (item.label === 'Our Story' || item.label === 'Who we are') handleLinkNavigation('about');
                      else setActiveTab(null);
                    }}
                    className="text-[22px] font-light text-gray-300 hover:text-[#86BC25] transition-all block w-fit text-left hover:translate-x-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {currentNavData.children.featured && (
                <div className="hidden xl:flex w-[450px] bg-[#0a0a0a] p-12 flex-col justify-center border-l border-white/5">
                  <span className="text-[#86BC25] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Spotlight</span>
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 bg-gray-900">
                      <img 
                        src={currentNavData.children.featured.imageUrl} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                        alt="Featured"
                      />
                    </div>
                    <h5 className="text-[24px] font-bold leading-tight group-hover:text-[#86BC25] transition-colors">{currentNavData.children.featured.subtitle}</h5>
                    <p className="text-gray-500 mt-4 text-sm font-light">Explore our latest perspectives on global trends and strategic evolution.</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[315] bg-[#111] lg:hidden pt-[80px] overflow-y-auto"
          >
            <div className="px-6 py-10 space-y-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-6">
                  <h3 className="text-[#86BC25] text-xs font-black uppercase tracking-widest mb-4">{item.label}</h3>
                  {item.children ? (
                    <div className="grid grid-cols-1 gap-4">
                      {item.children.sections.map((section) => (
                        <div key={section.title} className="space-y-2">
                           {section.items.map(subItem => (
                              <button 
                                key={subItem.label}
                                onClick={() => {
                                  if (subItem.label === 'What we believe in') handleLinkNavigation('purpose-values');
                                  else if (subItem.label === 'Contact Us') handleLinkNavigation('contact-us');
                                  else if (subItem.label === 'Submit RFP') handleLinkNavigation('rfp');
                                  else if (item.label === 'Who we are' && subItem.label === 'Our Story') handleLinkNavigation('about');
                                  else setMobileMenuOpen(false);
                                }}
                                className="block text-white text-xl font-light hover:text-[#86BC25] text-left"
                              >
                                {subItem.label}
                              </button>
                           ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <button 
                      onClick={() => {
                        if (item.label === 'Careers') setMobileMenuOpen(false);
                      }}
                      className="text-white text-2xl font-bold"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-6">
                <button className="flex items-center space-x-4 text-white font-bold uppercase tracking-widest">
                  <Search size={20} />
                  <span>Search</span>
                </button>
                <button className="flex items-center space-x-4 text-white font-bold uppercase tracking-widest">
                  <Globe size={20} />
                  <span>Global</span>
                </button>
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