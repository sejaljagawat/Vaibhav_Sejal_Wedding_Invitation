"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Send } from "lucide-react"

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emotional: "",
    mood: "",
    wishes: "",
    advice: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 px-4" style={{ background: "#FDF0E8" }}>
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span
            className="block mb-3"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9963E",
            }}
          >
            Join the Celebration
          </span>
          <h2
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              color: "#B85940",
              lineHeight: 1.2,
            }}
          >
            RSVP
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "#9E7060",
              fontSize: "1.1rem",
            }}
          >
            We would be honored by your presence
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6 rounded-2xl"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(184,89,64,0.1)" }}
              >
                <Heart size={32} style={{ color: "#B85940" }} fill="#B85940" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "2.5rem",
                  color: "#B85940",
                  marginBottom: "0.5rem",
                }}
              >
                Thank You!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "#9E7060",
                  fontSize: "1.1rem",
                }}
              >
                {"We can't wait to celebrate with you!"}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Guest Details */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEDDD3",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#B85940",
                    marginBottom: "1rem",
                  }}
                >
                  Guest Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#9E7060",
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
                      style={{
                        background: "#FFF8F3",
                        border: "1px solid #EEDDD3",
                        fontFamily: "var(--font-serif)",
                        fontSize: "1rem",
                        color: "#2E1810",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#9E7060",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
                      style={{
                        background: "#FFF8F3",
                        border: "1px solid #EEDDD3",
                        fontFamily: "var(--font-serif)",
                        fontSize: "1rem",
                        color: "#2E1810",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Who Gets Emotional */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEDDD3",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#B85940",
                    marginBottom: "0.5rem",
                  }}
                >
                  Make a Guess
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#9E7060",
                    marginBottom: "1rem",
                  }}
                >
                  Who will get emotional first?
                </p>
                <div className="flex justify-center gap-4">
                  {["Vaibhav", "Sejal", "Both"].map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name="emotional"
                        value={option}
                        checked={formData.emotional === option}
                        onChange={(e) => setFormData({ ...formData, emotional: e.target.value })}
                        className="hidden"
                      />
                      <div
                        className="px-6 py-3 rounded-full transition-all"
                        style={{
                          background: formData.emotional === option ? "#B85940" : "#FFF8F3",
                          color: formData.emotional === option ? "white" : "#6B4535",
                          border: "1px solid",
                          borderColor: formData.emotional === option ? "#B85940" : "#EEDDD3",
                          fontFamily: "var(--font-serif)",
                        }}
                      >
                        {option}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Wedding Mood */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEDDD3",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#B85940",
                    marginBottom: "0.5rem",
                  }}
                >
                  Your Wedding Mood
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#9E7060",
                    marginBottom: "1rem",
                  }}
                >
                  {"I'm coming for..."}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["The Food", "Dance Floor", "The Love", "All of It"].map((mood) => (
                    <label key={mood} className="cursor-pointer">
                      <input
                        type="radio"
                        name="mood"
                        value={mood}
                        checked={formData.mood === mood}
                        onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                        className="hidden"
                      />
                      <div
                        className="px-4 py-3 rounded-xl text-center transition-all"
                        style={{
                          background: formData.mood === mood ? "#B85940" : "transparent",
                          color: formData.mood === mood ? "white" : "#6B4535",
                          border: "1px solid",
                          borderColor: formData.mood === mood ? "#B85940" : "#EEDDD3",
                          fontFamily: "var(--font-serif)",
                        }}
                      >
                        {mood}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Wishes */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEDDD3",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#B85940",
                    marginBottom: "0.5rem",
                  }}
                >
                  Leave Us a Note
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#9E7060",
                    marginBottom: "1rem",
                  }}
                >
                  Share a wish or memory
                </p>
                <textarea
                  value={formData.wishes}
                  onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                  rows={3}
                  placeholder="Write something from the heart..."
                  className="w-full px-4 py-3 rounded-lg outline-none resize-none"
                  style={{
                    background: "#FFF8F3",
                    border: "1px solid #EEDDD3",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    color: "#2E1810",
                  }}
                />
              </div>

              {/* Advice */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEDDD3",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#B85940",
                    marginBottom: "0.5rem",
                  }}
                >
                  Words for Forever
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#9E7060",
                    marginBottom: "1rem",
                  }}
                >
                  Advice for married life
                </p>
                <textarea
                  value={formData.advice}
                  onChange={(e) => setFormData({ ...formData, advice: e.target.value })}
                  rows={3}
                  placeholder="One piece of advice..."
                  className="w-full px-4 py-3 rounded-lg outline-none resize-none"
                  style={{
                    background: "#FFF8F3",
                    border: "1px solid #EEDDD3",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    color: "#2E1810",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all"
                style={{
                  background: "#B85940",
                  color: "white",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: isSubmitting ? 0.7 : 1,
                  boxShadow: "0 6px 24px rgba(184,89,64,0.35)",
                }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send RSVP
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
