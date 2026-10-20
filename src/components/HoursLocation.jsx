import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Wifi, Zap, Dog, Navigation, Copy, Check, Sparkles } from 'lucide-react';

export default function HoursLocation() {
  const [copied, setCopied] = useState(false);
  const address = "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schedule = [
    { days: "Monday – Thursday", hours: "07:00 – 22:00", tag: "Roastery Days" },
    { days: "Friday – Saturday", hours: "07:00 – 23:00", tag: "Late Acoustic Nights" },
    { days: "Sunday", hours: "08:00 – 22:00", tag: "Weekend Brunch" },
    { days: "Public Holidays", hours: "08:00 – 21:00", tag: "Open Regular" },
  ];

  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, label: "150 Mbps Fiber Wi-Fi" },
    { icon: <Zap className="w-4 h-4" />, label: "Outlets at Every Booth" },
    { icon: <Dog className="w-4 h-4" />, label: "Pet Friendly Backyard" },
    { icon: <Sparkles className="w-4 h-4" />, label: "Indoor & Garden Seating" },
  ];

  return (
    <div id="find-us" className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 flex flex-col items-center">
      
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2E1A11] tracking-tight mb-6 text-center" 
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Pull Up a Chair & Stay Awhile
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#4A3222] text-base md:text-lg text-center max-w-2xl mb-16 px-4"
      >
        Whether you are stopping by for a brisk morning espresso or settling in for an afternoon of deep focus, our doors and garden patio are open for you.
      </motion.p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
        
        {/* Card 1: Opening Hours */}
        <motion.div 
          id="hours"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F6EFE7]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-white/50 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
        >
          <div>
            {/* Live Status Badge */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A5233] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4A2818]"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-[#2E1A11]">
                  Open Today · Fresh Brews Pouring
                </span>
              </div>
              <span className="text-xs text-[#5D4232] font-medium hidden sm:inline">
                07:00 – 22:00
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#2E1A11] mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
              Operating Hours
            </h3>

            {/* Schedule List */}
            <div className="flex flex-col gap-3.5 mb-8">
              {schedule.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/40 border border-white/40 hover:bg-white/60 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm sm:text-base font-semibold text-[#2E1A11]">
                      {item.days}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2E1A11]/5 text-[#5D4232] font-medium">
                      {item.tag}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#2E1A11] mt-1 sm:mt-0" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.25rem" }}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Note */}
          <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
            <p className="text-xs text-[#5D4232] leading-relaxed">
              * Hot food and pastry kitchen serves until 20:30. Grab & Go espresso and cold brew bottles available until closing.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Location & Directions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F6EFE7]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-white/50 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
        >
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5D4232]">
                <MapPin className="w-4 h-4 text-[#2E1A11]" />
                <span>Kebayoran Baru, Jakarta Selatan</span>
              </div>
              <span className="text-xs text-[#4A3222] font-medium bg-[#EFE7DE]/90 px-3 py-1 rounded-full border border-[#D5C2B2]">
                Free Parking Available
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#2E1A11] mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
              Find Your Way to Joe's
            </h3>

            {/* Address Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/40 border border-white/40 mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-base sm:text-lg font-bold text-[#2E1A11] mb-1">
                  Joe's Coffee Roasters & Flagship
                </p>
                <p className="text-sm text-[#5D4232] leading-relaxed">
                  {address}
                </p>
                <p className="text-xs text-[#7A5B47] mt-2">
                  Just 3 mins walk from MRT Blok M / Senayan station.
                </p>
              </div>
              <button 
                onClick={handleCopy}
                title="Copy Address"
                className="p-2.5 rounded-xl bg-white/70 hover:bg-white text-[#2E1A11] transition-colors shadow-sm cursor-pointer flex-shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-[#4A2818]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Storefront Image preview */}
            <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden mb-6 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80" 
                alt="Joe's Coffee Storefront & Patio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                📍 Outdoor Garden Patio & Sunlit Roastery
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/30 text-xs text-[#4A3222] font-medium">
                  <span className="text-[#2E1A11] opacity-75">{amenity.icon}</span>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button: Open in Google Maps */}
          <div className="pt-4 border-t border-black/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span className="text-xs text-[#5D4232] text-center sm:text-left">
              Need custom directions or valet info?
            </span>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/btn bg-[#2E1A11] text-[#F3E8DB] w-full sm:w-auto px-6 h-12 flex justify-center items-center rounded-full text-sm font-medium shadow-[0_10px_20px_rgba(46,26,17,0.4),inset_0_3px_4px_rgba(255,255,255,0.15),inset_0_-4px_6px_rgba(0,0,0,0.5)] hover:bg-[#3E2417] active:translate-y-0.5 transition-all duration-300 hover:rotate-2 hover:scale-95 cursor-pointer whitespace-nowrap gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
