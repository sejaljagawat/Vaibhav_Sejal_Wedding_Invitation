"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer
      className="min-h-dvh flex flex-col justify-center items-center px-6 py-16 text-center"
      style={{ background: "#5C2233", color: "white" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full"
      >
        <span
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(5rem, 18vw, 8rem)",
            color: "#E8C07A",
            display: "block",
            lineHeight: 1.1,
          }}
        >
          Vaibhav
          <br />
          <span
            style={{
              fontSize: "clamp(3rem, 10vw, 5rem)",
              color: "#C9963E",
              display: "block",
              margin: "0.2rem 0",
            }}
          >
            &
          </span>
          Sejal
        </span>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
          <div className="h-px w-15" style={{ background: "#E8C07A" }} />
          <span style={{ color: "#E8C07A", fontSize: "1.1rem" }}>&#9829;</span>
          <div className="h-px w-15" style={{ background: "#E8C07A" }} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mt-16"
        style={{
          fontFamily: "'Tenor Sans', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        MADE WITH <span style={{ color: "#e74c3c" }}>&#9829;</span> BY{" "}
        <a
          href="https://www.instagram.com/shahvaibhav348"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E8C07A", textDecoration: "none" }}
        >
          Vaibhav Shah
        </a>
      </motion.div>
    </footer>
  )
}
