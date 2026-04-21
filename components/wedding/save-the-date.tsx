"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

// Heart shape SVG path for mask
const HEART_MASK = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 185' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 185 C100 185, 200 125, 200 70 C200 23, 157 -10, 121.5 15 C100 31, 100 31, 100 31 C100 31, 100 31, 78.5 15 C43 -10, 0 23, 0 70 C0 125, 100 185, 100 185 Z' fill='black'/%3E%3C/svg%3E")`

interface ScratchHeartProps {
  label: string
  value: string
  onReveal: () => void
}

function ScratchHeart({ label, value, onReveal }: ScratchHeartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDrawingRef = useRef(false)
  const revealedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const rect = container.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const dpr = window.devicePixelRatio || 1

    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Terracotta fill for scratch layer
    ctx.fillStyle = "#B85940"
    ctx.fillRect(0, 0, width, height)

    // Scratch indication text
    ctx.fillStyle = "rgba(255,255,255,0.7)"
    ctx.font = "bold 10px 'Tenor Sans', sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("SCRATCH", width / 2, height / 2 + 4)

    const getMousePos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY
      return { x: clientX - rect.left, y: clientY - rect.top }
    }

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawingRef.current || revealedRef.current) return
      if (e.cancelable && e.type.startsWith("touch")) e.preventDefault()

      const pos = getMousePos(e)
      ctx.globalCompositeOperation = "destination-out"
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, width * 0.22, 0, Math.PI * 2)
      ctx.fill()

      if (Math.random() > 0.2) checkProgress()
    }

    const checkProgress = () => {
      if (revealedRef.current) return
      const sampleRate = 32
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      let transparentPixels = 0

      for (let i = 3; i < pixels.length; i += sampleRate) {
        if (pixels[i] < 128) transparentPixels++
      }

      const totalPixels = pixels.length / sampleRate
      if ((transparentPixels / totalPixels) * 100 > 45) {
        revealAll()
      }
    }

    const revealAll = () => {
      revealedRef.current = true
      canvas.style.opacity = "0"
      setTimeout(() => {
        canvas.style.display = "none"
        onReveal()
      }, 1000)
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDrawingRef.current = true
      scratch(e)
    }
    const handleTouchStart = (e: TouchEvent) => {
      isDrawingRef.current = true
      scratch(e)
    }
    const handleMouseUp = () => {
      isDrawingRef.current = false
    }
    const handleTouchEnd = () => {
      isDrawingRef.current = false
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("touchend", handleTouchEnd)
    canvas.addEventListener("mousemove", scratch as EventListener)
    canvas.addEventListener("touchmove", scratch as EventListener, { passive: false })

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchend", handleTouchEnd)
      canvas.removeEventListener("mousemove", scratch as EventListener)
      canvas.removeEventListener("touchmove", scratch as EventListener)
    }
  }, [onReveal])

  return (
    <div
      ref={containerRef}
      className="relative cursor-crosshair touch-none transition-all duration-500"
      style={{
        width: "30vw",
        maxWidth: "120px",
        aspectRatio: "1.1 / 1",
        maskImage: HEART_MASK,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: HEART_MASK,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        background: "#FDF0E8",
      }}
    >
      {/* Hidden content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z- 1 ">
        <span
          style={{
            fontFamily: "'Tenor Sans', sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
            color: "#9E7060",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#B85940",
            lineHeight: 1,
            textShadow: "0 2px 10px rgba(255,255,255,0.8)",
          }}
        >
          {value}
        </span>
      </div>

      {/* Scratch canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z- 2 w-full h-full transition-opacity duration-1000"
      />
    </div>
  )
}

export function SaveTheDate() {
  const [revealedCount, setRevealedCount] = useState(0)
  const [allRevealed, setAllRevealed] = useState(false)
  const countdownRef = useRef<NodeJS.Timeout | null>(null)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  const handleReveal = useCallback(() => {
    setRevealedCount((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (revealedCount === 3 && !allRevealed) {
      setAllRevealed(true)

      // Trigger confetti
      setTimeout(() => {
        const duration = 3000
        const end = Date.now() + duration
        const colors = ["#B85940", "#C9963E", "#E8C07A", "#FFFFFF"]

        const frame = () => {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors: colors,
            zIndex: 9999,
          })
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors: colors,
            zIndex: 9999,
          })

          if (Date.now() < end) {
            requestAnimationFrame(frame)
          }
        }
        frame()
      }, 800)

      // Start countdown
      const weddingDate = new Date("November 21, 2026 00:00:00").getTime()
      const updateTimer = () => {
        const now = new Date().getTime()
        const distance = weddingDate - now

        if (distance < 0) {
          setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 })
          return
        }

        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }

      updateTimer()
      countdownRef.current = setInterval(updateTimer, 1000)
    }

    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current)
    }
  }, [revealedCount, allRevealed])

  const formatNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`)

  return (
    <section id="save-the-date" className="py-20 px-6 text-center" style={{ background: "#FFF8F3" }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
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
          Save The Date
        </span>
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            lineHeight: 1.1,
            color: "#B85940",
          }}
        >
          Reveal Our
          <br />
          Big Day
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 mb-4"
        style={{
          fontStyle: "italic",
          color: "#9E7060",
          fontSize: "1.1rem",
        }}
      >
        Scratch the hearts to reveal
      </motion.p>

      {/* Hearts Row */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-4 w-full max-w-[440px] mx-auto mt-8"
        style={
          allRevealed
            ? {
              animation: "gentleHeartBeat 3s infinite ease-in-out",
            }
            : {}
        }
      >
        <ScratchHeart label="DAY" value="21" onReveal={handleReveal} />
        <ScratchHeart label="MONTH" value="Nov" onReveal={handleReveal} />
        <ScratchHeart label="YEAR" value="2026" onReveal={handleReveal} />
      </motion.div>

      {/* Surprise Message */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 15 }}
        animate={allRevealed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        {allRevealed && (
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2.8rem",
              color: "#B85940",
            }}
          >
            The start of a beautiful journey...
          </p>
        )}
      </motion.div>

      {/* Countdown */}
      <motion.div
        className="flex justify-center gap-3 mt-6 flex-wrap"
        initial={{ opacity: 0, y: 15 }}
        animate={allRevealed ? { opacity: 1, y: 0 } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 1.2 }}
      >
        {[
          { value: countdown.days, label: "Days" },
          { value: countdown.hours, label: "Hrs" },
          { value: countdown.mins, label: "Mins" },
          { value: countdown.secs, label: "Secs" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center rounded-xl min-w-[70px]"
            style={{
              background: "#FFFFFF",
              border: "1px solid #EEDDD3",
              padding: "0.8rem 1rem",
              boxShadow: "0 20px 60px -10px rgba(92,34,51,0.12)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "#B85940",
                lineHeight: 1,
              }}
            >
              {formatNumber(item.value)}
            </span>
            <small
              style={{
                fontFamily: "'Tenor Sans', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                color: "#9E7060",
                textTransform: "uppercase",
                marginTop: "0.3rem",
              }}
            >
              {item.label}
            </small>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
