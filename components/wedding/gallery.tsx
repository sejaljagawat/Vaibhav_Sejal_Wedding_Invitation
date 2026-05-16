"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-4"
        >
          A Glimpse of Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Our Beautiful
          <span className="font-script text-gold-dark ml-2">Moments</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-serif mb-12"
        >
          A moment captured in time, forever in our hearts
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-rose-light to-secondary"
            >
              <Image
                src={`/gallery-${i}.jpg`}
                alt={`Vaibhav & Sejal moment ${i}`}
                fill
                className="object-cover"
                onError={(e) => {
                  // Hide image if not found
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}