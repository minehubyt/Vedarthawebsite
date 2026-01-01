
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter, Globe, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Black Hero Header */}
      <section className="bg-black pt-32 pb-16 lg:pb-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px] relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 lg:mb-12">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-white">About Vedartha</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-6 lg:mb-8">
                About <br /> Vedartha
              </h1>
              <p className="text-[clamp(1.25rem,2.5vw,2rem)] font-light text-gray-400 tracking-tight leading-tight">
                Purpose-led. Impact-driven.
              </p>
            </motion.div>

            {/* Social Sharing */}
            <div className="flex items-center space-x-4 sm:space-x-6 pb-4 lg:pb-6">
              <Share2 size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <div className="h-6 w-[1px] bg-white/20" />
              <Facebook size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Twitter size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Linkedin size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Mail size={18} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-64 lg:w-96 h-64 lg:h-96 bg-[#86BC25]/10 rounded-full blur-[80px] lg:blur-[120px]" />
      </section>

      {/* Narrative Section 1 */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <div className="max-w-4xl">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight mb-8 lg:mb-12 tracking-tight text-black">
              At Vedartha, we believe we can make a difference.
            </h2>
            <p className="text-[clamp(1.1rem,1.8vw,1.5rem)] text-gray-600 font-light leading-relaxed mb-12 lg:mb-16">
              Vedartha is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. With more than 175 years of hard work and commitment to making a real difference, our organization has grown in scale and diversity—yet our shared culture remains at the heart of everything we do.
            </p>
            <div className="h-1.5 w-24 bg-[#86BC25]" />
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
          alt="People collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-8 lg:bottom-16 left-6 lg:left-[8vw] max-w-2xl text-white pr-6">
          <h3 className="text-[clamp(2rem,6vw,4rem)] font-black mb-4 lg:mb-6 tracking-tighter leading-[0.95]">Making an impact that matters.</h3>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] font-light opacity-90">Our purpose is the guiding star for all our decisions.</p>
        </div>
      </section>

      {/* Narrative Section 2 - Stats & Points */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-10 lg:space-y-12">
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                   <Globe size={24} className="lg:w-[28px] lg:h-[28px]" />
                 </div>
                 <div>
                   <h4 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold mb-3 lg:mb-4">Global Network</h4>
                   <p className="text-gray-600 font-light leading-relaxed text-[clamp(0.95rem,1.2vw,1.1rem)]">
                     Our network of member firms in more than 150 countries and territories serves four out of five Fortune Global 500® companies.
                   </p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                   <Users size={24} className="lg:w-[28px] lg:h-[28px]" />
                 </div>
                 <div>
                   <h4 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold mb-3 lg:mb-4">Diverse Talent</h4>
                   <p className="text-gray-600 font-light leading-relaxed text-[clamp(0.95rem,1.2vw,1.1rem)]">
                     Approximately 457,000 professionals are committed to making an impact that matters.
                   </p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                   <Target size={24} className="lg:w-[28px] lg:h-[28px]" />
                 </div>
                 <div>
                   <h4 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold mb-3 lg:mb-4">Strategic Vision</h4>
                   <p className="text-gray-600 font-light leading-relaxed text-[clamp(0.95rem,1.2vw,1.1rem)]">
                     Helping clients and communities navigate change and reach their goals through deep industry expertise.
                   </p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 lg:p-12 shadow-2xl rounded-sm border-t-8 border-[#86BC25] flex flex-col justify-center">
              <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-6 lg:mb-8 tracking-tight">How we're organized</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8 lg:mb-10 text-[clamp(1rem,1.2vw,1.1rem)]">
                Vedartha refers to one or more of Vedartha International Limited ("VIL"), its global network of member firms, and their related entities. VIL does not provide services to clients.
              </p>
              <button className="flex items-center text-[#86BC25] font-bold text-lg group w-fit">
                Learn about our structure <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-16 lg:py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-black mb-8 lg:mb-12 tracking-tighter leading-tight">Ready to join our team?</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
             <button className="bg-[#86BC25] text-black px-8 lg:px-12 py-3 lg:py-4 rounded-full font-bold text-xs lg:text-sm uppercase tracking-widest hover:brightness-110 transition-all">
               Explore Careers
             </button>
             <button className="border border-white/20 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-bold text-xs lg:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Contact Us
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
