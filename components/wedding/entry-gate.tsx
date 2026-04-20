"use client"

import { useEffect, useRef, useState } from "react"

interface EntryGateProps {
  onEnter: () => void
}

export function EntryGate({ onEnter }: EntryGateProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0.001
    }
  }, [])

  const handleClick = async () => {
    const video = videoRef.current
    if (!video || isHidden) return

    try {
      video.muted = false
      await video.play()
    } catch {
      video.muted = true
      await video.play()
    }

    video.addEventListener("ended", () => {
      setIsHidden(true)
      onEnter()
    })

    // Fallback if video doesn't end properly
    setTimeout(() => {
      if (!isHidden) {
        setIsHidden(true)
        onEnter()
      }
    }, 15000)
  }

  if (isHidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer select-none transition-opacity duration-800"
      style={{ background: "#0a0505" }}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
        muted
      >
        <source
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Tejaswini%20%26%20Sourabh/Entry%20Video%20Best%20Wedding%20Invite%20(24).mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/35">
        <p className="text-white/80 text-sm tracking-widest uppercase font-sans">Tap to begin</p>
      </div>
    </div>
  )
}
