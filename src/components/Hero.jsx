import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AnimationContext, OrderContext } from '../App';

export default function Hero() {
  const { isWelcomeComplete } = useContext(AnimationContext);
  const { openOrder } = useContext(OrderContext);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-8 md:pb-10 flex flex-col">
      
      {/* Title (Always visible, revealed by mask) */}
      <h1 
        className="w-full text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] xl:text-[210px] leading-[0.9] md:leading-[0.8] text-[#2E1A11] font-normal mb-6 md:mb-12 text-center lg:text-justify drop-shadow-sm tracking-normal sm:tracking-widest md:tracking-[0.1em] whitespace-normal sm:whitespace-nowrap" 
        style={{ fontFamily: "'Caveat', cursive", textAlignLast: "justify" }}
      >
        Joe's Coffee
      </h1>

      {/* Description and Buttons */}
      <div className="w-full flex justify-center md:justify-end mt-0">
        <motion.div 
          className="max-w-[100%] md:max-w-[500px] flex flex-col items-center md:items-end text-center md:text-right"
          initial={!isWelcomeComplete ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-[#4A3222] text-[15px] sm:text-[18px] md:text-[22px] leading-[1.5] sm:leading-[1.4] md:leading-[1.3] mb-8 md:mb-10 font-normal font-sans tracking-wide">
            Handcrafted espresso drinks and freshly
            baked pastries in a warm, welcoming
            atmosphere. From our first roast to your
            morning cup, every sip tells a story.
          </p>

          <div className="flex flex-row justify-center md:justify-end items-center gap-3 sm:gap-4 w-full">
            <button 
              onClick={openOrder}
              className="group bg-[#2E1A11] text-[#F3E8DB] w-[130px] sm:w-[160px] h-[46px] sm:h-[50px] flex justify-center items-center rounded-full text-[14px] sm:text-base font-medium shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_4px_rgba(255,255,255,0.15),inset_0_-4px_6px_rgba(0,0,0,0.5)] hover:bg-[#3E2417] active:translate-y-0.5 active:shadow-[0_5px_10px_rgba(46,26,17,0.4),inset_0_2px_3px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-500 hover:rotate-3 hover:scale-95 cursor-pointer whitespace-nowrap"
            >
              <div className="relative overflow-hidden h-[20px] sm:h-[24px] w-full text-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  Order Now
                </p>
                <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  Order Now
                </p>
              </div>
            </button>
            <a href="#menu" className="group bg-white text-[#2E1A11] w-[130px] sm:w-[160px] h-[46px] sm:h-[50px] flex justify-center items-center rounded-full text-[14px] sm:text-base font-medium shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:bg-[#F3E8DB] active:translate-y-0.5 active:shadow-[0_4px_8px_rgba(0,0,0,0.08)] transition-all duration-500 hover:rotate-3 hover:scale-95 cursor-pointer whitespace-nowrap">
              <div className="relative overflow-hidden h-[20px] sm:h-[24px] w-full text-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  View Menu
                </p>
                <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] leading-tight sm:leading-normal">
                  View Menu
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
