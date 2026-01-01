
import React from 'react';
import { Linkedin, Youtube, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  onLegalClick?: () => void;
  onHomeClick?: () => void;
  onContactClick?: () => void;
  onRFPClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onHomeClick, onContactClick, onRFPClick }) => {
  return (
    <footer className="bg-black text-white">
      {/* Black Section: Connect & Links */}
      <div className="bg-black pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light mb-12 lg:mb-16 tracking-tight">Let's connect</h2>

          {/* Main Footer Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16 mb-16 lg:mb-24">
            {/* Main Links */}
            <div className="space-y-4 lg:space-y-6">
              <button onClick={onHomeClick} className="block text-[clamp(1.25rem,2vw,1.5rem)] font-light text-gray-300 hover:text-white transition-colors text-left">About Vedartha</button>
              <button onClick={onContactClick} className="block text-[clamp(1.25rem,2vw,1.5rem)] font-light text-gray-300 hover:text-white transition-colors text-left">Contact us</button>
              <button onClick={onRFPClick} className="block text-[clamp(1.25rem,2vw,1.5rem)] font-light text-gray-300 hover:text-white transition-colors text-left">Submit RFP</button>
              <button className="block text-[clamp(1.25rem,2vw,1.5rem)] font-light text-gray-300 hover:text-white transition-colors text-left">Newsroom</button>
              <button className="block text-[clamp(1.25rem,2vw,1.5rem)] font-light text-gray-300 hover:text-white transition-colors text-left">View locations</button>
            </div>

            {/* What we do Column */}
            <div>
              <h5 className="font-bold text-lg lg:text-xl mb-6 lg:mb-8 text-gray-200">What we do</h5>
              <ul className="space-y-4 lg:space-y-5 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alliances</a></li>
              </ul>
            </div>

            {/* Our thinking Column */}
            <div>
              <h5 className="font-bold text-lg lg:text-xl mb-6 lg:mb-8 text-gray-200">Our thinking</h5>
              <ul className="space-y-4 lg:space-y-5 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#" className="text-white hover:text-[#86BC25] transition-colors border-b-2 border-[#86BC25] pb-1 inline-block">Vedartha Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dbriefs</a></li>
              </ul>
            </div>

            {/* Careers Column */}
            <div>
              <h5 className="font-bold text-lg lg:text-xl mb-6 lg:mb-8 text-gray-200">Careers</h5>
              <ul className="space-y-4 lg:space-y-5 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Careers home</a></li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                    Job Search <ExternalLink size={14} />
                  </a>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
              </ul>
            </div>
          </div>

          {/* Social Follow Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end pt-8 lg:pt-12 border-t border-white/10 gap-8">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={onHomeClick}>
               <span className="text-white text-xl font-black tracking-tighter">Vedartha</span>
               <div className="w-2 h-2 bg-[#86BC25] rounded-full mt-2" />
            </div>
            <div className="flex flex-col items-start sm:items-end gap-6">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Follow us</span>
              <div className="flex flex-wrap gap-6 sm:gap-8 items-center">
                <a href="#" className="text-white hover:text-[#86BC25] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-[#86BC25] transition-colors"><Linkedin size={22} /></a>
                <a href="#" className="text-white hover:text-[#86BC25] transition-colors"><Youtube size={26} /></a>
                <a href="#" className="text-white hover:text-[#86BC25] transition-colors">
                  <div className="w-6 h-6 border-2 border-current rounded-sm flex items-center justify-center font-black text-[10px]">V</div>
                </a>
                <a href="#" className="text-white hover:text-[#86BC25] transition-colors"><Instagram size={22} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section: Legal Disclaimer */}
      <div className="bg-white text-black py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-wrap gap-x-6 lg:gap-x-10 gap-y-4 text-[13px] sm:text-[14px] font-bold mb-8">
            <button onClick={onLegalClick} className="hover:underline">Terms of Use</button>
            <button onClick={onLegalClick} className="hover:underline">Privacy</button>
            <a href="#" className="text-[#0076A8] hover:underline">Data Privacy Framework</a>
            <button onClick={onLegalClick} className="hover:underline flex items-center gap-1">Cookie Notice <ExternalLink size={14} /></button>
            <a href="#" className="hover:underline">Cookie Settings</a>
          </div>
          
          <div className="flex flex-wrap gap-x-6 lg:gap-x-10 gap-y-4 text-[13px] sm:text-[14px] font-bold mb-8">
            <a href="#" className="hover:underline">Legal Information for Job Seekers</a>
            <a href="#" className="hover:underline">Labor Condition Applications</a>
          </div>

          <div className="text-[13px] sm:text-[14px] font-bold mb-10 lg:mb-12">
            <a href="#" className="hover:underline">Do Not Sell or Share My Personal Information</a>
          </div>

          <div className="text-[12px] sm:text-[13px] text-gray-800 space-y-6 max-w-6xl leading-relaxed">
            <p className="mb-4">© 2026. See <button onClick={onLegalClick} className="text-[#0076A8] hover:underline font-bold">Terms of Use</button> for more information.</p>
            <p>
              Vedartha refers to one or more of Vedartha International Limited, a private company limited by guarantee ("VIL"), its network of member firms, and their related entities. VIL and each of its member firms are legally separate and independent entities. VIL does not provide services to clients. In the United States, Vedartha refers to one or more of the US member firms of VIL, their related entities that operate using the "Vedartha" name in the United States and their respective affiliates. Certain services may not be available to attest clients under the rules and regulations of public accounting. Please see <a href="#" className="text-[#0076A8] hover:underline font-bold">www.vedartha.com/about</a> to learn more about our global network of member firms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
