"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [isLeaving, setIsLeaving] = useState(false)

  const handleEnter = () => {
    setIsLeaving(true)
    setTimeout(() => {
      onFinish()
    }, 800)
  }

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <Image
              src="/VS_Logo.png"
              alt="Wedding Logo"
              width={400}
              height={400}
              priority
              className="w-[65vw] max-w-[320px] h-auto" // 🔥 perfect mobile scaling
            />
          </motion.div>

          {/* Blessings Text */}
          <motion.p
            className="mb-8 px-6 max-w-md"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 3.5vw, 1.15rem)",
              color: "#E6C200", // gold instead of brown
              lineHeight: 1.7,
              letterSpacing: "0.03em",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            With the blessings of the Almighty & our respected elders,
            <br />
            we joyfully request your gracious presence on the wedding celebration of
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={handleEnter}
            className="mt-6 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter
          </motion.button>

        </motion.section>
      )}
    </AnimatePresence>
  )
}