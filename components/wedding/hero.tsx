"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden px-4 py-12"
      style={{ background: "#FDF0E8" }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.22] z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/common-assets/Background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Corner Frame */}
      <div className="absolute inset-5 pointer-events-none z-[2]">
        <div
          className="absolute top-0 left-0 w-15 h-15 opacity-50"
          style={{ borderWidth: "1px 0 0 1px", borderStyle: "solid", borderColor: "#C9963E" }}
        />
        <div
          className="absolute top-0 right-0 w-15 h-15 opacity-50"
          style={{ borderWidth: "1px 1px 0 0", borderStyle: "solid", borderColor: "#C9963E" }}
        />
        <div
          className="absolute bottom-0 left-0 w-15 h-15 opacity-50"
          style={{ borderWidth: "0 0 1px 1px", borderStyle: "solid", borderColor: "#C9963E" }}
        />
        <div
          className="absolute bottom-0 right-0 w-15 h-15 opacity-50"
          style={{ borderWidth: "0 1px 1px 0", borderStyle: "solid", borderColor: "#C9963E" }}
        />
      </div>

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        className="relative z-[3] w-full max-w-[540px] rounded-[2rem] text-center flex flex-col items-center"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(201,150,62,0.2)",
          padding: "clamp(2.5rem, 6vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)",
          boxShadow: "0 20px 60px -10px rgba(92,34,51,0.12), 0 0 0 1px rgba(255,255,255,0.6) inset",
        }}
      >
        {/* Corner Decorations */}
        <div
          className="absolute top-4 left-4 w-8 h-8 rounded-tl"
          style={{ borderWidth: "1px 0 0 1px", borderStyle: "solid", borderColor: "rgba(201,150,62,0.35)" }}
        />
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-tr"
          style={{ borderWidth: "1px 1px 0 0", borderStyle: "solid", borderColor: "rgba(201,150,62,0.35)" }}
        />
        <div
          className="absolute bottom-4 left-4 w-8 h-8 rounded-bl"
          style={{ borderWidth: "0 0 1px 1px", borderStyle: "solid", borderColor: "rgba(201,150,62,0.35)" }}
        />
        <div
          className="absolute bottom-4 right-4 w-8 h-8 rounded-br"
          style={{ borderWidth: "0 1px 1px 0", borderStyle: "solid", borderColor: "rgba(201,150,62,0.35)" }}
        />

        {/* Ganesh Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Shriya%20%26%20Ashutosh/Vianyak%20png.png"
            alt="Shri Ganesh"
            width={60}
            height={60}
            className="h-15 w-auto object-contain mb-3"
          />
        </motion.div>

        {/* Sanskrit Shloka */}
        <p
          className="uppercase mb-5 px-4"
          style={{
            fontFamily: "'Tenor Sans', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.3em",
            color: "#B85940",
            lineHeight: 1.8,
          }}
        >
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
        </p>

        {/* Blessings Text */}
        <p
          className="mb-7 px-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "#6B4535",
            lineHeight: 1.5,
          }}
        >
          With the blessings of our families,
          <br />
          We invite you to celebrate the wedding of
        </p>

        {/* Groom */}
        <div className="w-full mb-2">
          <span
            className="shimmer-gold block"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 11vw, 4.8rem)",
              lineHeight: 1.3,
              letterSpacing: "0.02em",
              padding: "0.2rem 0",
            }}
          >
            Vaibhav
          </span>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#2E1810",
              lineHeight: 1.4,
              marginTop: "0.5rem",
            }}
          >
            Son of <strong>Mr. Abhay Shah & Mrs. Kiran Shah</strong>
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "#2E1810",
              lineHeight: 1.3,
              marginTop: "0.2rem",
            }}
          >
            (Grandson of Late Shri Shankar Lalji Shah & Late Smt. Suryakanta Shah)
          </p>
        </div>

        {/* Ampersand */}
        <div className="flex items-center justify-center gap-4 my-6 w-full">
          <div className="h-px w-10" style={{ background: "#EEDDD3" }} />
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2.2rem",
              color: "#C9963E",
              lineHeight: 1,
            }}
          >
            &
          </span>
          <div className="h-px w-10" style={{ background: "#EEDDD3" }} />
        </div>

        {/* Bride */}
        <div className="w-full">
          <span
            className="shimmer-gold block"
            style={{
              fontFamily: "'Great Vibes', serif",
              fontSize: "clamp(3rem, 11vw, 4.8rem)",
              lineHeight: 1.3,
              letterSpacing: "0.02em",
              padding: "0.2rem 0",
            }}
          >
            Sejal
          </span>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#2E1810",
              lineHeight: 1.4,
              marginTop: "0.5rem",
            }}
          >
            Daughter of <strong>Mr. Jambu Kumar Jagawat & Mrs. Chanda Jagawat</strong>
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "#2E1810",
              lineHeight: 1.3,
              marginTop: "0.2rem",
            }}
          >
            (Granddaughter of Late Shri Surajmal ji Jagawat & Late Smt. Kachari devi Jagawat)
          </p>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-1 opacity-70"
      >
        <p
          style={{
            fontFamily: "'Tenor Sans', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6B4535",
          }}
        >
          Scroll
        </p>
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="#6B4535"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
