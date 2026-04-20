"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ScratchCardProps {
  label: string;
  value: string;
}

function ScratchCard({ label, value }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const getCanvasCoordinates = useCallback((e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }, []);

  const scratch = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !isScratching) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getCanvasCoordinates(e, canvas);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
    ctx.fill();

    if (lastPosRef.current) {
      ctx.lineWidth = 50;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }

    lastPosRef.current = pos;

    // Check if enough is scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparentPixels++;
    }
    const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
    if (percentage > 40) {
      setIsRevealed(true);
    }
  }, [isScratching, getCanvasCoordinates]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw hearts pattern
    ctx.fillStyle = "#c9a959";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add heart pattern
    ctx.fillStyle = "#d4b76a";
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 6; j++) {
        const x = i * 20 + 10;
        const y = j * 20 + 10;
        ctx.font = "12px serif";
        ctx.fillText("♥", x, y);
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsScratching(true);
      lastPosRef.current = getCanvasCoordinates(e, canvas);
    };

    const handleMouseUp = () => {
      setIsScratching(false);
      lastPosRef.current = null;
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      setIsScratching(true);
      lastPosRef.current = getCanvasCoordinates(e, canvas);
    };

    const handleTouchEnd = () => {
      setIsScratching(false);
      lastPosRef.current = null;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp);
    canvas.addEventListener("mousemove", scratch as (e: MouseEvent) => void);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", scratch as unknown as (e: TouchEvent) => void);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("mousemove", scratch as (e: MouseEvent) => void);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", scratch as unknown as (e: TouchEvent) => void);
    };
  }, [isRevealed, scratch, getCanvasCoordinates]);

  return (
    <div className="relative flex flex-col items-center">
      <span className="text-sm font-sans text-muted-foreground uppercase tracking-widest mb-3">
        {label}
      </span>
      <div className="relative w-28 h-24 rounded-lg overflow-hidden shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-light to-secondary">
          <span className="text-3xl font-serif font-bold text-primary">{value}</span>
        </div>
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            width={160}
            height={120}
            className="absolute inset-0 w-full h-full cursor-pointer"
            style={{ touchAction: "none" }}
          />
        )}
      </div>
    </div>
  );
}

export function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-05-08T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="save-the-date" className="py-24 px-4 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-4"
        >
          Save The Date
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Reveal Our
          <span className="font-script text-gold-dark ml-2">Big Day</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-serif mb-12"
        >
          Scratch the hearts to reveal
        </motion.p>

        {/* Scratch Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <ScratchCard label="DAY" value="08" />
          <ScratchCard label="MONTH" value="May" />
          <ScratchCard label="YEAR" value="2026" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg font-serif text-muted-foreground italic mb-12"
        >
          The start of a beautiful journey...
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hrs" },
            { value: timeLeft.mins, label: "Mins" },
            { value: timeLeft.secs, label: "Secs" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-card p-4 rounded-lg shadow-md min-w-[80px]"
            >
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-sm font-sans text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
