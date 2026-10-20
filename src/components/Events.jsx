import React from 'react';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <div id="events" className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 flex flex-col items-center">
      
      {/* Heading */}
      <h2 
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2E1A11] tracking-tight mb-6 text-center" 
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Host Your Next Event at Joe's
      </h2>

      {/* Subtitle */}
      <p className="text-[#4A3222] text-base md:text-lg text-center max-w-2xl mb-16 px-4">
        From intimate gatherings to full-scale catering, we bring the warmth of Joe's wherever you need it.
      </p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
        
        {/* Card 1: Private Events */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F6EFE7] md:bg-[#F6EFE7]/80 md:backdrop-blur-md p-3 sm:p-4 rounded-[2.5rem] shadow-sm border border-white/50 flex flex-col group hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80" 
              alt="Private Events" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          <div className="px-4 pb-4">
            <h3 className="text-3xl font-bold text-[#2E1A11] mb-3" style={{ fontFamily: "'Caveat', cursive" }}>
              Private Events
            </h3>
            <p className="text-[#4A3222] text-sm sm:text-base leading-relaxed max-w-md">
              Book our space for birthdays, meetings, or just a good excuse to get together. Great coffee and good vibes included.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Catering */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F6EFE7] md:bg-[#F6EFE7]/80 md:backdrop-blur-md p-3 sm:p-4 rounded-[2.5rem] shadow-sm border border-white/50 flex flex-col group hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
              alt="Catering" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          <div className="px-4 pb-4">
            <h3 className="text-3xl font-bold text-[#2E1A11] mb-3" style={{ fontFamily: "'Caveat', cursive" }}>
              Catering
            </h3>
            <p className="text-[#4A3222] text-sm sm:text-base leading-relaxed max-w-md">
              Let us handle the coffee and pastries for your next event. We'll set up, pour, and make sure nobody runs on empty.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Custom Menus (Wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 md:col-span-2 bg-[#F6EFE7] md:bg-[#F6EFE7]/80 md:backdrop-blur-md p-3 sm:p-4 rounded-[2.5rem] shadow-sm border border-white/50 flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300"
        >
          {/* Text Side */}
          <div className="flex-1 px-4 sm:px-8 py-8 md:py-12 flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#2E1A11] mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
              Custom Menus
            </h3>
            <p className="text-[#4A3222] text-base leading-relaxed max-w-lg mb-8">
              Work with our team to build a tailored menu for your event — from espresso bars to pastry platters, we've got you covered.
            </p>
            
            {/* Animated Button */}
            <button className="group/btn bg-[#2E1A11] text-[#F3E8DB] w-[130px] sm:w-[150px] h-[46px] sm:h-[50px] flex justify-center items-center rounded-full text-[14px] sm:text-base font-medium shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_4px_rgba(255,255,255,0.15),inset_0_-4px_6px_rgba(0,0,0,0.5)] hover:bg-[#3E2417] active:translate-y-0.5 active:shadow-[0_5px_10px_rgba(46,26,17,0.4),inset_0_2px_3px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-3 hover:scale-95 cursor-pointer whitespace-nowrap">
              <div className="relative overflow-hidden h-[20px] sm:h-[24px] w-full text-center">
                <p className="group-hover/btn:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  Get in Touch
                </p>
                <p className="absolute top-7 left-0 w-full group-hover/btn:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  Get in Touch
                </p>
              </div>
            </button>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full relative aspect-square sm:aspect-[4/3] md:aspect-auto md:min-h-[400px] rounded-[2rem] overflow-hidden order-1 md:order-2 mb-4 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=80" 
              alt="Custom Menus" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
