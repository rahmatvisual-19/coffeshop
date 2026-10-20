import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <div id="contact" className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 pb-24 flex flex-col items-center overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#F6EFE7] md:bg-[#F6EFE7]/80 md:backdrop-blur-md border border-white/50 rounded-[2rem] sm:rounded-[2.5rem] px-4 py-10 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center md:items-center gap-10 sm:gap-12 md:gap-16 shadow-sm mx-2"
      >
        
        {/* Left Side: Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full">
          {/* Title */}
          <h2 
            className="text-[40px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[76px] font-bold text-[#2E1A11] tracking-wide w-full" 
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Speak with one <br className="hidden md:block" /> of our experts
          </h2>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex flex-row justify-center md:justify-end lg:justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-1 w-full mt-6 md:mt-0">
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/6282184668503" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] bg-[#2E1A11] rounded-full flex justify-center items-center text-[#F3E8DB] shadow-[0_15px_30px_rgba(46,26,17,0.4),inset_0_4px_6px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.5)] group-hover:bg-[#3E2417] group-active:translate-y-1 group-active:shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_5px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.5)] transition-all duration-300">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <span className="text-[#4A3222] text-xs sm:text-sm md:text-[15px] lg:text-base font-medium mt-3 sm:mt-4 md:mt-5 transition-colors duration-300 group-hover:text-[#2E1A11]">
              Whatsapp
            </span>
          </a>

          {/* Email Button */}
          <div className="flex flex-col items-center group cursor-pointer">
            <button className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] bg-[#2E1A11] rounded-full flex justify-center items-center text-[#F3E8DB] shadow-[0_15px_30px_rgba(46,26,17,0.4),inset_0_4px_6px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.5)] group-hover:bg-[#3E2417] group-active:translate-y-1 group-active:shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_5px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.5)] transition-all duration-300">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <span className="text-[#4A3222] text-xs sm:text-sm md:text-[15px] lg:text-base font-medium mt-3 sm:mt-4 md:mt-5 transition-colors duration-300 group-hover:text-[#2E1A11]">
              Email
            </span>
          </div>

          {/* Number Button */}
          <div className="flex flex-col items-center group cursor-pointer">
            <button className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] bg-[#2E1A11] rounded-full flex justify-center items-center text-[#F3E8DB] shadow-[0_15px_30px_rgba(46,26,17,0.4),inset_0_4px_6px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.5)] group-hover:bg-[#3E2417] group-active:translate-y-1 group-active:shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_5px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.5)] transition-all duration-300">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </button>
            <span className="text-[#4A3222] text-xs sm:text-sm md:text-[15px] lg:text-base font-medium mt-3 sm:mt-4 md:mt-5 transition-colors duration-300 group-hover:text-[#2E1A11]">
              Number
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
