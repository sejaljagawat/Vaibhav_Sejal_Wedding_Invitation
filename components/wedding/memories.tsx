"use client"

import { motion } from "framer-motion"

export function Memories() {
  return (
    <section id="memories-section" className="py-20 px-6" style={{ background: "#FDF0E8" }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span
          style={{
            fontFamily: "'Tenor Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#C9963E",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          A Glimpse of Us
        </span>
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            lineHeight: 1.1,
            color: "#B85940",
          }}
        >
          Our Beautiful
          <br />
          Moments
        </h2>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div
            className="h-px w-20"
            style={{ background: "linear-gradient(to left, #C9963E, transparent)" }}
          />
          <svg
            width="12"
            height="12"
            fill="#C9963E"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <div
            className="h-px w-20"
            style={{ background: "linear-gradient(to right, #C9963E, transparent)" }}
          />
        </div>
      </motion.div>

      {/* Video Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative max-w-[420px] mx-auto mt-12"
      >
        {/* Decorative frames */}
        <div
          className="absolute -inset-3 rounded-[2rem]"
          style={{
            border: "1px solid rgba(201,150,62,0.35)",
            transform: "rotate(2deg)",
          }}
        />
        <div
          className="absolute -inset-1.5 rounded-[1.8rem]"
          style={{
            border: "1px solid rgba(201,150,62,0.2)",
            transform: "rotate(-1deg)",
          }}
        />

        {/* Video container */}
        <div
          className="relative z-[1] rounded-[1.5rem] overflow-hidden"
          style={{
            border: "1px solid #EEDDD3",
            boxShadow: "0 20px 60px -10px rgba(92,34,51,0.12)",
          }}
        >
          <video
            className="w-full block"
            style={{ aspectRatio: "1080/1600", objectFit: "cover" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Tejaswini%20%26%20Sourabh/Tejaswini%20%26%20Sourabh%20%20Swiper%20video%20(1).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-8"
        style={{
          fontStyle: "italic",
          color: "#9E7060",
          fontSize: "1.1rem",
        }}
      >
        A moment captured in time, forever in our hearts
      </motion.p>
    </section>
  )
}
