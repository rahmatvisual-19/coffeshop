import React from 'react';
import heroVideo from '../assets/hero.mp4';

export default function Showcase() {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pb-32">
      
      {/* Main Frame Container */}
      <div className="relative w-full rounded-[2.5rem] border-[1.5px] border-white/40 bg-white/5 p-3 md:p-4 shadow-2xl md:backdrop-blur-sm">
        
        {/* Video Player */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#2A1610]">
          <video 
            src={heroVideo}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            className="w-full h-full md:h-auto object-cover opacity-90"
          />
        </div>

        {/* Floating Card 1: Americano */}
        <div className="absolute top-[10%] md:top-4 lg:top-12 -left-2 sm:-left-4 md:-left-12 lg:-left-20 w-[80px] sm:w-[110px] md:w-[180px] lg:w-[200px] aspect-[4/5] bg-[#F8F2EA]/95 md:bg-white/30 md:backdrop-blur-xl border border-white/60 rounded-[1rem] md:rounded-[2rem] p-1.5 md:p-2.5 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-20 group hover:-translate-y-2 transition-transform duration-500">
          <div className="relative w-full h-full rounded-[0.75rem] md:rounded-[1.5rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" 
              alt="Iced Americano" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Pill */}
            <div 
              className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-white/90 md:bg-white/80 md:backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)] md:shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,0.9)] px-2 md:px-6 py-0.5 md:py-1.5 rounded-full text-[#2E1A11] text-[10px] sm:text-[12px] md:text-lg whitespace-nowrap leading-none"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Americano
            </div>
          </div>
        </div>

        {/* Floating Card 2: Latte */}
        <div className="absolute bottom-[10%] md:bottom-4 lg:bottom-12 -right-2 sm:-right-4 md:-right-12 lg:-right-20 w-[80px] sm:w-[110px] md:w-[180px] lg:w-[200px] aspect-[4/5] bg-[#F8F2EA]/95 md:bg-white/30 md:backdrop-blur-xl border border-white/60 rounded-[1rem] md:rounded-[2rem] p-1.5 md:p-2.5 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-20 group hover:-translate-y-2 transition-transform duration-500">
          <div className="relative w-full h-full rounded-[0.75rem] md:rounded-[1.5rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80" 
              alt="Latte Art" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Pill */}
            <div 
              className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-white/90 md:bg-white/80 md:backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)] md:shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,0.9)] px-3 md:px-6 py-0.5 md:py-1.5 rounded-full text-[#2E1A11] text-[10px] sm:text-[12px] md:text-lg whitespace-nowrap leading-none"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Latte
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
