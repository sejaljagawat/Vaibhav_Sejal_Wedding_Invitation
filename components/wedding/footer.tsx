"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="py-16 px-4 text-center"
      style={{ background: "#5C2233", color: "white" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(3rem, 12vw, 5rem)",
            color: "#E8C07A",
            lineHeight: 1.2,
          }}
        >
          Vaibhav
        </h2>
        <span
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2rem, 8vw, 3rem)",
            color: "#C9963E",
            display: "block",
            margin: "0.5rem 0",
          }}
        >
          &
        </span>
        <h2
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(3rem, 12vw, 5rem)",
            color: "#E8C07A",
            lineHeight: 1.2,
          }}
        >
          Sejal
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-16" style={{ background: "rgba(232,192,122,0.4)" }} />
          <Heart size={16} style={{ color: "#E8C07A" }} fill="#E8C07A" />
          <div className="h-px w-16" style={{ background: "rgba(232,192,122,0.4)" }} />
        </div>

        <p
          className="mt-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            fontStyle: "italic",
          }}
        >
          May 8, 2026
        </p>
      </motion.div>
    </footer>
  )
}
