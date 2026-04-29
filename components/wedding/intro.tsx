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
      className="h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#fdf6f0] to-[#f7efe5] px-4 relative cursor-pointer"
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
        className="w-[92vw] max-w-md h-[72vh] bg-white rounded-3xl shadow-xl px-5 py-6 text-center relative overflow-hidden"
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
          className="flex justify-center items-center w-full mb-6"
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
              className="object-contain scale-[2] translate-y-10"
            />

          </div>
        </motion.div>

        {/* 💌 TEXT */}
        <motion.p
          className="px-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "#5a3e2b",
            lineHeight: 1.6,
          }}
          animate={isLeaving ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          With the blessings of the Almighty & our respected elders,
          <br />
          we joyfully request your gracious presence on the wedding celebration of
        </motion.p>

      </motion.div>
    </motion.section>
  )
}