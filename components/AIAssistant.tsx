import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { getInsightResponse } from '../services/gemini.ts';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Welcome to Vedartha. I am your Insight Assistant. How can I help you navigate our perspectives today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!query.trim() || loading) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getInsightResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[150] bg-[#86BC25] text-black p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageSquare size={24} className="group-hover:rotate-6 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-[160] w-[calc(100vw-4rem)] md:w-[420px] h-[600px] bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="bg-black p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#86BC25] rounded-full flex items-center justify-center font-black text-xs">V.</div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">Vedartha Insights</h4>
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Live Assistant</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 custom-scrollbar">
              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-xl text-[14px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#86BC25] text-black font-semibold rounded-tr-none' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center space-x-3 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-[#86BC25]" />
                    <span className="text-xs text-gray-400 font-medium">Analyzing...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1.5 focus-within:ring-2 ring-[#86BC25]/20 transition-all">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="How can we help you?"
                  className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-sm font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!query.trim() || loading}
                  className="p-2.5 bg-black text-white rounded-md hover:bg-[#86BC25] hover:text-black transition-all disabled:opacity-30"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-gray-400 mt-3 text-center flex items-center justify-center space-x-1">
                <Sparkles size={10} className="text-[#86BC25]" />
                <span className="uppercase tracking-widest font-black">AI-Powered Strategic Support</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;