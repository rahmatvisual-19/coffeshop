import React, { useState, useEffect, useContext } from 'react';
import { Equal, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimationContext } from '../App';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isWelcomeComplete } = useContext(AnimationContext);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Full-screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#2A1610] z-[90] transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-center ${
          isOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col w-[300px] md:w-[420px]">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="group flex justify-between items-center text-[#F3E8DB] text-5xl md:text-7xl font-medium tracking-tight pb-5 hover:text-white transition-all duration-300 hover:translate-x-4"
          >
            <span>About</span>
            <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1} />
          </a>
          <div className="w-full h-[1px] bg-white/10 mb-5"></div>
          <a 
            href="#menu" 
            onClick={() => setIsOpen(false)}
            className="group flex justify-between items-center text-[#F3E8DB] text-5xl md:text-7xl font-medium tracking-tight pb-5 hover:text-white transition-all duration-300 hover:translate-x-4"
          >
            <span>Menu</span>
            <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1} />
          </a>
          <div className="w-full h-[1px] bg-white/10 mb-5"></div>
          <a 
            href="#find-us" 
            onClick={() => setIsOpen(false)}
            className="group flex justify-between items-center text-[#F3E8DB] text-5xl md:text-7xl font-medium tracking-tight hover:text-white transition-all duration-300 hover:translate-x-4"
          >
            <span>Find Us</span>
            <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <motion.nav 
        className="fixed top-0 left-0 w-full z-[100]"
        initial={!isWelcomeComplete ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 lg:px-24 pt-8 pb-6 flex justify-between items-center gap-4">
          
          {/* Brand / Logo */}
          <a 
            href="#"
            onClick={() => {
              if (isOpen) setIsOpen(false);
            }}
            className={`font-medium text-xl tracking-wide whitespace-nowrap transition-colors duration-500 cursor-pointer ${isOpen ? 'text-[#F3E8DB]' : 'text-[#331C14]'}`}
          >
            Joe's Coffee
          </a>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className={`group px-5 sm:px-8 h-12 md:h-14 flex items-center justify-center rounded-full text-[13px] sm:text-base font-medium transition-all duration-500 hover:rotate-3 hover:scale-95 cursor-pointer whitespace-nowrap ${
              isOpen 
                ? 'bg-transparent text-[#F3E8DB] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_8px_16px_rgba(0,0,0,0.4)] hover:bg-white/5' 
                : 'bg-[#2E1A11] text-[#F3E8DB] shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_4px_rgba(255,255,255,0.15),inset_0_-4px_6px_rgba(0,0,0,0.5)] hover:bg-[#3E2417] active:translate-y-0.5 active:shadow-[0_5px_10px_rgba(46,26,17,0.4),inset_0_2px_3px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.5)]'
            }`}>
              <div className="relative overflow-hidden h-[20px] sm:h-[24px] w-[65px] sm:w-[80px]">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal text-center">
                  Order Now
                </p>
                <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal text-center">
                  Order Now
                </p>
              </div>
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center ${
              isOpen
                ? 'bg-transparent text-[#F3E8DB] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_8px_16px_rgba(0,0,0,0.4)] hover:bg-white/5 hover:rotate-90'
                : 'bg-[#2E1A11] text-[#F3E8DB] shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_4px_rgba(255,255,255,0.15),inset_0_-4px_6px_rgba(0,0,0,0.5)] hover:bg-[#3E2417] active:translate-y-0.5 active:shadow-[0_5px_10px_rgba(46,26,17,0.4),inset_0_2px_3px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.5)]'
            }`}>
              <div className="relative w-full h-full flex items-center justify-center">
                <Equal 
                  className={`absolute transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} 
                  size={22} 
                  strokeWidth={1.5} 
                />
                <X 
                  className={`absolute transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} 
                  size={22} 
                  strokeWidth={1.5} 
                />
              </div>
            </button>
          </div>

        </div>
      </motion.nav>
    </>
  );
}
