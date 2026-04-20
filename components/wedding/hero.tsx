"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("save-the-date");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-light/30 via-background to-background" />
      
      {/* Decorative Corners */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-gold"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-gold"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-gold"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-gold"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-script text-gold-dark mb-4"
        >
          Vaibhav & Sejal
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-serif text-muted-foreground tracking-widest mb-12"
        >
          — A Sacred Union 💕
        </motion.p>

        {/* Sanskrit Shloka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 p-6 border border-gold/30 rounded-lg bg-card/50 backdrop-blur-sm"
        >
          <p className="text-lg md:text-xl font-serif text-foreground leading-relaxed">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
            <br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
          </p>
        </motion.div>

        {/* Invitation Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg font-serif text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          With the blessings of the Almighty & our respected elders, we joyfully request your gracious presence on the wedding celebration of
        </motion.p>

        {/* Couple Names */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">Vaibhav</h2>
            <p className="text-sm md:text-base font-serif text-muted-foreground">
              Son of Mr. Rajesh Shah & Mrs. Meena Shah
            </p>
            <p className="text-xs md:text-sm font-serif text-muted-foreground/70 mt-2">
              (Grandson of Late Shri Kantilal Shah & Smt. Kamla)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-5xl md:text-6xl font-script text-gold"
          >
            &
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">Sejal</h2>
            <p className="text-sm md:text-base font-serif text-muted-foreground">
              Daughter of Mr. Suresh Patel & Mrs. Bharti Patel
            </p>
            <p className="text-xs md:text-sm font-serif text-muted-foreground/70 mt-2">
              (Granddaughter of Late Shri Ramesh Patel & Smt. Savita)
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm font-sans tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
