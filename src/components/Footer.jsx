import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const links = [
    {
      title: 'Menu',
      items: ['Menu', 'Hot Drinks', 'Pastries'],
    },
    {
      title: 'About',
      items: ['Find Us', 'Hours', 'About'],
    },
    {
      title: 'Contact',
      items: ['Contact', 'Careers', 'Gift Cards'],
    },
  ];

  return (
    <div id="footer" className="relative z-30 w-full px-2 sm:px-4 md:px-6 lg:px-8 pb-2 sm:pb-4 md:pb-6 lg:pb-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#2E1A11] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] pt-12 sm:pt-20 md:pt-28 pb-8 px-5 sm:px-10 md:px-16 lg:px-24 flex flex-col relative overflow-hidden"
      >
        
        {/* Huge Title */}
        <div className="flex justify-center items-center w-full mb-8 sm:mb-12 md:mb-16">
          <h1 
            className="text-[44px] min-[380px]:text-[56px] sm:text-[90px] md:text-[120px] lg:text-[150px] xl:text-[180px] font-bold text-[#F3E8DB] tracking-wide text-center leading-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Joe's Coffee
          </h1>
        </div>

        {/* Links Section */}
        <div className="w-full flex justify-center border-t border-white/10 pt-8 md:pt-10">
          
          <div className="grid grid-cols-2 min-[540px]:grid-cols-3 gap-8 sm:gap-16 md:gap-32 lg:gap-48">
            {links.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4 sm:gap-6">
                {column.items.map((item, i) => (
                  <a 
                    key={i} 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center text-[#F3E8DB]/80 hover:text-[#F3E8DB] transition-all duration-300 group w-fit"
                  >
                    <svg 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      viewBox="0 0 24 24" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-3 sm:mr-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span className="text-sm sm:text-base font-medium tracking-wide">
                      {item}
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>

        </div>

      </motion.div>
    </div>
  );
}
