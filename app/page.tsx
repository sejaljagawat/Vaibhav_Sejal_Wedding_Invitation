"use client"

import { useState } from "react"
import { Hero } from "@/components/wedding/hero"
import { SaveTheDate } from "@/components/wedding/save-the-date"
import { Gallery } from "@/components/wedding/gallery"
import { Ceremonies } from "@/components/wedding/ceremonies"
import { RSVP } from "@/components/wedding/rsvp"
import { Footer } from "@/components/wedding/footer"
import { PetalsCanvas } from "@/components/wedding/petals-canvas"
import { AudioToggle } from "@/components/wedding/audio-toggle"
import { EntryGate } from "@/components/wedding/entry-gate"
import Intro from "@/components/wedding/intro"

export default function WeddingPage() {
  const [step, setStep] = useState<"gate" | "intro" | "main">("gate")

  const showMain = step === "main"

  return (
    <>
      {/* Entry Gate */}
      {step === "gate" && (
        <EntryGate onEnter={() => setStep("intro")} />
      )}

      {/* Intro Screen */}
      {step === "intro" && (
        <Intro onFinish={() => setStep("main")} />
      )}

      {/* Floating Petals */}
      <PetalsCanvas active={showMain} />

      {/* Audio Toggle */}
      {showMain && <AudioToggle />}

      {/* Main Content */}
      <main
        className={`min-h-screen transition-opacity duration-800 ${showMain ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={{ display: showMain ? "block" : "none" }}
      >
        <Hero />
        <SaveTheDate />
        <Gallery />
        <Ceremonies />
        <RSVP />
        <Footer />
      </main>
    </>
  )
}