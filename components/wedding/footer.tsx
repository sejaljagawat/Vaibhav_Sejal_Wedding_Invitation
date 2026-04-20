"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-script text-gold-dark">
            Vaibhav & Sejal
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-16 bg-gold/50" />
            <Heart className="w-6 h-6 text-rose fill-rose" />
            <div className="h-px w-16 bg-gold/50" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm font-sans text-muted-foreground"
        >
          MADE WITH{" "}
          <Heart className="w-4 h-4 inline-block text-rose fill-rose mx-1" />{" "}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs font-sans text-muted-foreground/70 mt-4"
        >
          © 2026 Vaibhav & Sejal Wedding
        </motion.p>
      </div>
    </footer>
  );
}
