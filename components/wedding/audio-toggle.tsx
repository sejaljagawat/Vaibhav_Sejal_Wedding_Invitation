"use client"

import { useEffect, useRef, useState } from "react"

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.5
    }
  }, [])

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        console.log("Audio play failed")
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} loop autoPlay>
        <source
          src="https://pub-1953a6673e864f3488c645252f75de98.r2.dev/Ashish%20%26%20Ayushi/Jashn-E-Bahaaraa%20(Instrumental%20-%20Flute)%20%5B-2w18bd-ZQ4%5D.mp3"
          type="audio/mpeg"
        />
      </audio>
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 w-13 h-13 rounded-full flex items-center justify-center cursor-pointer z-[900] transition-transform duration-250 hover:scale-110"
        style={{
          background: "#B85940",
          border: "2px solid rgba(255,255,255,0.25)",
          boxShadow: "0 4px 20px rgba(184,89,64,0.4)",
        }}
        title="Toggle music"
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"
            />
          </svg>
        )}
      </button>
    </>
  )
}
