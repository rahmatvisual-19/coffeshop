import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeScreen({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence timing
    // 0.0s: Cream screen (stage 0)
    // 0.4s: Logo appears (stage 1)
    // 1.2s: Text appears (stage 2)
    // 2.0s: Stain appears (stage 3)
    // 2.4s: Stain & Mask expand (stage 4)
    
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => setStage(2), 1200);
    const t3 = setTimeout(() => setStage(3), 2000);
    const t4 = setTimeout(() => setStage(4), 2400);
    const t5 = setTimeout(() => {
      onComplete();
    }, 3500); // Animation finishes around 3.5s

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <>
    {/* Main Overlay (z-40) covers the App, then punches a hole */}
    <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center overflow-hidden">
      
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="hole-mask">
            <rect width="100%" height="100%" fill="white" />
            <motion.circle 
              cx="50%" cy="50%" 
              initial={{ r: 0 }}
              animate={stage >= 4 ? { r: "300vw" } : { r: 0 }}
              transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
              fill="black" 
            />
          </mask>
        </defs>
        {/* 1. Cream Background */}
        <rect width="100%" height="100%" fill="#F8F2EA" mask="url(#hole-mask)" />
      </svg>

      {/* SVG Filters (Removed for performance, replaced with organic border-radius) */}

      {/* 4 & 5. Coffee Stain */}
      <AnimatePresence>
        {stage >= 3 && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={
              stage === 4 
                ? { scale: 50, opacity: 1, rotate: 45 } 
                : { scale: 1, opacity: 1, rotate: 0 }
            }
            transition={
              stage === 4 
                ? { duration: 1.0, ease: [0.65, 0, 0.35, 1] } 
                : { duration: 0.4, type: "spring", bounce: 0.3 } 
            }
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#5A3825] opacity-25"
            style={{ 
              borderRadius: "48% 52% 51% 49%",
              mixBlendMode: "multiply",
              maskImage: "radial-gradient(circle, transparent 30%, black 70%)" // Helps it blend into the hole edge
            }}
          />
        )}
      </AnimatePresence>

      {/* Film Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Soft Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(43,24,16,0.05)_100%)]" />
    </div>

    {/* Front Layer: Logo and Text (z-50) so they aren't chopped by the App's clip-path! */}
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center -mt-10">
        
        {/* 2. Logo */}
        <AnimatePresence>
          {stage >= 1 && stage < 4 && (
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: 3 }}
              animate={{ 
                scale: [0.85, 1.05, 1], 
                opacity: 1, 
                rotate: 0 
              }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.4 
              }}
              className="relative mb-6"
            >
              {/* Subtle steam */}
              <motion.div 
                animate={{ 
                  y: [-2, -8, -2],
                  opacity: [0.2, 0.5, 0.2],
                  borderColor: stage >= 3 ? "#F8F2EA" : "#2B1810"
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  borderColor: { duration: 0.4 }
                }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 border-t-2 rounded-full blur-[2px]"
              />
              
              {/* Coffee Cup Icon as Logo */}
              <motion.svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                animate={{ stroke: stage >= 3 ? "#F8F2EA" : "#2B1810" }}
                transition={{ duration: 0.4 }}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="drop-shadow-sm relative z-10"
              >
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" x2="6" y1="2" y2="4" />
                <line x1="10" x2="10" y1="2" y2="4" />
                <line x1="14" x2="14" y1="2" y2="4" />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Brand Name */}
        <AnimatePresence>
          {stage >= 2 && stage < 4 && (
            <motion.div
              className="absolute top-[calc(50%+24px)] flex overflow-hidden whitespace-nowrap z-10"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              {"Joe's Coffee".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, color: "#2B1810" }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    color: stage >= 3 ? "#F8F2EA" : "#2B1810" 
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] },
                    y: { duration: 0.5, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] },
                    color: { duration: 0.4 }
                  }}
                  className="text-3xl font-medium tracking-wide"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

    </div>
    </>
  );
}
