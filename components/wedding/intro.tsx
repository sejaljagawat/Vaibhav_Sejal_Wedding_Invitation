"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Intro({ onFinish }: { onFinish: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6f0] to-[#f7efe5] px-4">

      {/* Card */}
      <motion.div
        className="w-full max-w-sm bg-white rounded-3xl shadow-xl px-6 py-10 text-center relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Decorative Border */}
        <div className="absolute inset-2 rounded-2xl border border-[#D4AF37]/40 pointer-events-none" />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center w-full mb-6 overflow-hidden"
        >
          {/* Controlled frame box */}
          <div className="relative w-[92vw] max-w-[500px] aspect-square flex items-center justify-center overflow-hidden">

            <Image
              src="/VS_Logo.png"
              alt="Wedding Logo"
              fill
              priority
              className="object-contain scale-[2] translate-y-6"
            />

          </div>
        </motion.div>

        {/* Blessings Text */}
        <motion.p
          className="px-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "#5a3e2b",
            lineHeight: 1.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          With the blessings of the Almighty & our respected elders,
          <br />
          we joyfully request your gracious presence on the wedding celebration of
        </motion.p>

        {/* Enter Button */}
        <motion.button
          onClick={onFinish}
          className="mt-8 px-6 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition"
          whileHover={{ scale: 1.05 }}
        >
          Open Invitation
        </motion.button>

      </motion.div>
    </section>
  )
}