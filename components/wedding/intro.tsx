"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [isLeaving, setIsLeaving] = useState(false)
  const [burst, setBurst] = useState(false)
  const [locked, setLocked] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleEnter = () => {
    if (locked) return
    setLocked(true)

    setBurst(true)
    audioRef.current?.play()

    setIsLeaving(true)

    setTimeout(() => {
      onFinish()
    }, 900)
  }

  return (
    <motion.section
      onClick={handleEnter}
      className="h-screen w-screen overflow-hidden flex items-center justify-center bg-white px-4 relative cursor-pointer"
    >

      {/* 🎵 Background Music */}
      <audio ref={audioRef} src="/wedding-music.mp3" loop />

      {/* ✨ Gold Glow Burst */}
      {burst && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)",
          }}
        />
      )}

      {/* 🧾 CARD */}
      <motion.div
        className="w-[92vw] max-w-md h-[100svh] bg-transparent px-5 py-6 text-center relative overflow-hidden"
        animate={
          isLeaving
            ? { scale: 1.1, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.8 }}
      >

        {/* Decorative Border */}
        <div className="absolute inset-2 rounded-2xl border border-[#D4AF37]/40 pointer-events-none" />

        {/* 🔥 LOGO */}
        <motion.div
          className="flex justify-center items-center w-full mb-12 translate-y-4"
          animate={
            isLeaving
              ? { scale: 2.2, y: -40, opacity: 0 }
              : { scale: 1, y: 0, opacity: 1 }
          }
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="relative w-[88vw] max-w-[420px] aspect-square flex items-center justify-center overflow-visible">

            <Image
              src="/VS_Logo.png"
              alt="Wedding Logo"
              fill
              priority
              className="object-contain scale-[2.2] translate-y-10 translate-x-3"
            />

          </div>
        </motion.div>

        {/* 💞 ALL TEXT WITH EQUAL SPACING */}
        <div className="flex flex-col items-center gap-5 mt-6">

          {/* 💞 Hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "1.6rem",
              color: "#D4AF37",
              textAlign: "center",
            }}
          >
            #V ❤️SEraBegins
          </motion.div>

          {/* 💌 TEXT */}
          <motion.p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "#5a3e2b",
              lineHeight: 1.6,
              textAlign: "center",
            }}
            animate={isLeaving ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            We are thrilled to invite you to the joyous celebration of our unioin.
            <br />
            Join us to experience unforgettable memories and laughter.
          </motion.p>

          {/* 📩 Save the Date */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "#5a3e2b",
              textAlign: "center",
              letterSpacing: "0.5px",
            }}
          >
            "Save the Date – Coming Soon..."

          </motion.div>

          {/* Click logo to reveal magic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "#C2185B",
              textAlign: "center",
              letterSpacing: "0.3px",
              marginTop: "4px",
            }}
          >
            Click logo to reveal magic ✨
          </motion.div>

        </div>

      </motion.div>
    </motion.section>
  )
}