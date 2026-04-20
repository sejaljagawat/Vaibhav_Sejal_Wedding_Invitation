"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1a0a0a 0%, #2d1810 50%, #1a0a0a 100%)",
          }}
        >
          {/* Decorative Border */}
          <div className="absolute inset-4 md:inset-8 border border-[#c9a45c]/30 rounded-lg" />
          <div className="absolute inset-6 md:inset-12 border border-[#c9a45c]/20 rounded-lg" />

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#c9a45c]/50" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#c9a45c]/50" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#c9a45c]/50" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#c9a45c]/50" />

          <div className="text-center px-8">
            {/* Decorative Top Element */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <svg className="w-24 h-12 mx-auto text-[#c9a45c]/60" viewBox="0 0 100 40" fill="none">
                <path d="M50 5 L95 20 L50 35 L5 20 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="50" cy="20" r="3" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[#c9a45c]/70 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
            >
              You are cordially invited
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-5xl md:text-7xl font-script text-[#c9a45c] mb-6"
              style={{
                textShadow: "0 0 40px rgba(201, 164, 92, 0.3)",
              }}
            >
              Vaibhav & Sejal
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-[#c9a45c]/60 text-lg font-serif tracking-widest mb-12"
            >
              A Sacred Union
            </motion.p>

            {/* Enter Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              onClick={handleEnter}
              className="group relative px-12 py-4 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 border border-[#c9a45c]/50 rounded-full transition-all duration-300 group-hover:border-[#c9a45c]" />
              <span className="absolute inset-0 bg-[#c9a45c]/0 rounded-full transition-all duration-300 group-hover:bg-[#c9a45c]/10" />
              <span className="relative text-[#c9a45c] text-sm tracking-[0.2em] uppercase font-sans">
                Enter Celebration
              </span>
            </motion.button>

            {/* Decorative Bottom Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-12"
            >
              <svg className="w-24 h-12 mx-auto text-[#c9a45c]/60 rotate-180" viewBox="0 0 100 40" fill="none">
                <path d="M50 5 L95 20 L50 35 L5 20 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="50" cy="20" r="3" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-50 bg-[#1a0a0a]"
        />
      )}
    </AnimatePresence>
  );
}
