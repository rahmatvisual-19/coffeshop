import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 1, name: 'Espresso', category: 'Hot Drinks', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Latte', category: 'Hot Drinks', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Iced Latte', category: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1499961024600-ad094db305cc?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Cappuccino', category: 'Hot Drinks', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Iced Americano', category: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Mocha', category: 'Hot Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Iced Mocha', category: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Flat White', category: 'Hot Drinks', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80' },
  { id: 9, name: 'Iced Flat White', category: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80' },
  { id: 10, name: 'Chai Latte', category: 'Hot Drinks', image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=600&q=80' },
  { id: 11, name: 'Croissant', category: 'Pastries', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { id: 12, name: 'Chocolate Chip Cookie', category: 'Pastries', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80' },
];

const filters = ['All', 'Hot Drinks', 'Cold Drinks', 'Pastries'];

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = menuItems.filter(item => 
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <div id="menu" className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 flex flex-col items-center">
      
      {/* Heading */}
      <h2 
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2E1A11] tracking-tight mb-6 text-center" 
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Explore What's on Our Menu
      </h2>

      {/* Subtitle */}
      <p className="text-[#4A3222] text-base md:text-lg text-center max-w-2xl mb-12 px-4">
        From handcrafted espresso drinks to freshly baked pastries, every item is made with care.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-16">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-[#2E1A11] text-[#F3E8DB] shadow-[0_8px_16px_rgba(46,26,17,0.3)]'
                : 'bg-[#EFE7DE]/60 text-[#4A3222] hover:bg-[#EFE7DE] hover:shadow-md border border-white/30'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full px-2 sm:px-0">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="bg-[#F6EFE7]/80 backdrop-blur-md p-1.5 sm:p-2.5 md:p-3 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-white/50 flex flex-col group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/5] rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Item Name Overlay */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 py-1.5 sm:py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/40 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] group-hover:bg-white/60 transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap px-2 sm:px-4">
                  <span 
                    className="font-bold text-[15px] sm:text-xl tracking-wide text-[#2E1A11]" 
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
    </div>
  );
}
