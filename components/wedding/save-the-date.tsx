"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ScratchHeartProps {
  id: number;
  onReveal: () => void;
}

function ScratchHeart({ id, onReveal }: ScratchHeartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawingRef = useRef(false);

  const getMousePos = useCallback((e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  const checkProgress = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const sampleRate = 32;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    for (let i = 3; i < pixels.length; i += sampleRate) {
      if (pixels[i] < 128) transparentPixels++;
    }
    const totalPixels = pixels.length / sampleRate;
    return (transparentPixels / totalPixels) * 100 > 45;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isRevealed) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Warm Terracotta fill for scratch layer
    ctx.fillStyle = "#B85940";
    ctx.fillRect(0, 0, width, height);

    // Scratch indication text
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SCRATCH", width / 2, height / 2 + 4);

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawingRef.current || isRevealed) return;
      if (e.cancelable && e.type.startsWith("touch")) e.preventDefault();
      
      const pos = getMousePos(e, canvas);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, width * 0.22, 0, Math.PI * 2);
      ctx.fill();

      if (Math.random() > 0.2 && checkProgress(ctx, canvas)) {
        setIsRevealed(true);
        canvas.style.opacity = "0";
        setTimeout(() => {
          canvas.style.display = "none";
          onReveal();
        }, 500);
      }
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDrawingRef.current = true;
      scratch(e);
    };

    const handleEnd = () => {
      isDrawingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("touchstart", handleStart, { passive: false });
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);
    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("touchmove", scratch, { passive: false });

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("touchstart", handleStart);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
      canvas.removeEventListener("mousemove", scratch);
      canvas.removeEventListener("touchmove", scratch);
    };
  }, [isRevealed, getMousePos, checkProgress, onReveal]);

  return (
    <div
      ref={containerRef}
      className="relative w-20 h-20 md:w-24 md:h-24"
    >
      {/* Heart shape background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id={`heartGradient${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9963E" />
              <stop offset="100%" stopColor="#E8C07A" />
            </linearGradient>
          </defs>
          <path
            d="M50 88.9C48.5 88.9 47 88.3 45.8 87.2C39.7 81.6 33.8 76.3 28.6 71.5L28.4 71.3C17.3 61.2 7.7 52.5 1.5 44C-5.4 34.5 -2.3 21.7 7.2 12.6C12.6 7.4 19.5 4.5 27 4.5C32.4 4.5 37.4 6.1 41.8 9.2C44.1 10.8 46.1 12.8 47.9 15.1C49.7 12.8 51.8 10.8 54.1 9.2C58.5 6.1 63.5 4.5 68.9 4.5C76.4 4.5 83.3 7.4 88.7 12.6C98.2 21.7 101.3 34.5 94.4 44C88.2 52.5 78.6 61.2 67.5 71.3L67.3 71.5C62.1 76.3 56.2 81.6 50.1 87.2C48.9 88.3 47.4 88.9 50 88.9Z"
            fill={`url(#heartGradient${id})`}
            transform="translate(2, 5) scale(0.95)"
          />
        </svg>
      </div>
      {/* Scratch canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-500"
        style={{ 
          touchAction: "none",
          clipPath: "path('M50 88.9C48.5 88.9 47 88.3 45.8 87.2C39.7 81.6 33.8 76.3 28.6 71.5L28.4 71.3C17.3 61.2 7.7 52.5 1.5 44C-5.4 34.5 -2.3 21.7 7.2 12.6C12.6 7.4 19.5 4.5 27 4.5C32.4 4.5 37.4 6.1 41.8 9.2C44.1 10.8 46.1 12.8 47.9 15.1C49.7 12.8 51.8 10.8 54.1 9.2C58.5 6.1 63.5 4.5 68.9 4.5C76.4 4.5 83.3 7.4 88.7 12.6C98.2 21.7 101.3 34.5 94.4 44C88.2 52.5 78.6 61.2 67.5 71.3L67.3 71.5C62.1 76.3 56.2 81.6 50.1 87.2C48.9 88.3 47.4 88.9 50 88.9Z')",
          transform: "scale(0.95) translate(2%, 5%)"
        }}
      />
    </div>
  );
}

export function SaveTheDate() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [allRevealed, setAllRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const handleHeartReveal = useCallback(() => {
    setRevealedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setAllRevealed(true);
        // Trigger confetti
        setTimeout(() => {
          const duration = 3000;
          const end = Date.now() + duration;
          const colors = ["#B85940", "#C9963E", "#E8C07A", "#FFFFFF"];

          const frame = () => {
            confetti({
              particleCount: 5,
              angle: 60,
              spread: 55,
              origin: { x: 0, y: 0.6 },
              colors: colors,
              zIndex: 9999,
            });
            confetti({
              particleCount: 5,
              angle: 120,
              spread: 55,
              origin: { x: 1, y: 0.6 },
              colors: colors,
              zIndex: 9999,
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          };
          frame();
        }, 300);
      }
      return newCount;
    });
  }, []);

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
          Scratch all three hearts to unlock the date
        </motion.p>

        {/* Scratch Hearts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`flex justify-center items-center gap-6 md:gap-10 mb-8 transition-all duration-500 ${
            allRevealed ? "scale-110" : ""
          }`}
        >
          <ScratchHeart id={1} onReveal={handleHeartReveal} />
          <ScratchHeart id={2} onReveal={handleHeartReveal} />
          <ScratchHeart id={3} onReveal={handleHeartReveal} />
        </motion.div>

        {/* Revealed Date */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: allRevealed ? 1 : 0, 
            height: allRevealed ? "auto" : 0 
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="overflow-hidden mb-12"
        >
          <div className="py-8 px-6 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-lg">
            <p className="text-2xl md:text-3xl font-serif text-foreground mb-2">
              Friday, May 8th, 2026
            </p>
            <p className="text-lg font-script text-gold-dark">
              The start of our forever...
            </p>
          </div>
        </motion.div>

        {/* Progress indicator */}
        {!allRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 mb-12"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < revealedCount ? "bg-gold scale-125" : "bg-muted"
                }`}
              />
            ))}
          </motion.div>
        )}

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hrs" },
            { value: timeLeft.mins, label: "Mins" },
            { value: timeLeft.secs, label: "Secs" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-card p-4 rounded-lg shadow-md min-w-[70px] md:min-w-[80px] border border-border/50"
            >
              <span className="text-2xl md:text-4xl font-serif font-bold text-primary">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm font-sans text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
