"use client"

import { useEffect, useRef } from "react"

interface PetalsCanvasProps {
  active: boolean
}

export function PetalsCanvas({ active }: PetalsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize, { passive: true })

    const COLORS = ["#D4806A", "#E8C07A", "#C9963E", "#B85940", "#EEDDD3", "#F5E4C0"]
    const COUNT = window.innerWidth < 600 ? 22 : 40

    class Petal {
      x: number = 0
      y: number = 0
      r: number = 0
      vx: number = 0
      vy: number = 0
      rot: number = 0
      drot: number = 0
      color: string = ""
      alpha: number = 0

      constructor(initial: boolean) {
        this.reset(initial)
      }

      reset(initial: boolean) {
        this.x = Math.random() * canvas.width
        this.y = initial ? Math.random() * canvas.height * 2 - canvas.height : -20
        this.r = 4 + Math.random() * 5
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = 0.6 + Math.random() * 1.2
        this.rot = Math.random() * Math.PI * 2
        this.drot = (Math.random() - 0.5) * 0.04
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.alpha = 0.5 + Math.random() * 0.4
      }

      update() {
        this.x += this.vx + Math.sin(this.y * 0.01) * 0.4
        this.y += this.vy
        this.rot += this.drot
        if (this.y > canvas.height + 20) this.reset(false)
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rot)
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.ellipse(0, 0, this.r * 0.55, this.r, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const petals: Petal[] = []
    for (let i = 0; i < COUNT; i++) {
      petals.push(new Petal(true))
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      petals.forEach((p) => {
        p.update()
        p.draw()
      })
      animationRef.current = requestAnimationFrame(loop)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
      } else {
        loop()
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)
    loop()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-[1] transition-opacity duration-1500 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  )
}
