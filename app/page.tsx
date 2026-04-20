"use client"

import { useState } from "react"
import { Hero } from "@/components/wedding/hero"
import { SaveTheDate } from "@/components/wedding/save-the-date"
import { Memories } from "@/components/wedding/memories"
import { Ceremonies } from "@/components/wedding/ceremonies"
import { RSVP } from "@/components/wedding/rsvp"
import { Footer } from "@/components/wedding/footer"
import { PetalsCanvas } from "@/components/wedding/petals-canvas"
import { AudioToggle } from "@/components/wedding/audio-toggle"
import { EntryGate } from "@/components/wedding/entry-gate"

export default function WeddingPage() {
  const [showMain, setShowMain] = useState(false)

  return (
    <>
      {/* Entry Gate Video */}
      {!showMain && <EntryGate onEnter={() => setShowMain(true)} />}

      {/* Floating Petals */}
      <PetalsCanvas active={showMain} />

      {/* Audio Toggle */}
      {showMain && <AudioToggle />}

      {/* Main Content */}
      <main
        className={`min-h-screen transition-opacity duration-800 ${
          showMain ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ display: showMain ? "block" : "none" }}
      >
        <Hero />
        <SaveTheDate />
        <Memories />
        <Ceremonies />
        <RSVP />
        <Footer />
      </main>
    </>
  )
}
