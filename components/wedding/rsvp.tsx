"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="rsvp-section" className="py-20 px-6" style={{ background: "#FDF0E8" }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center"
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
          Join the Celebration
        </span>
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            lineHeight: 1.1,
            color: "#B85940",
          }}
        >
          Celebrate
          <br />
          With Us
        </h2>
        <p
          className="mt-4 mb-10"
          style={{
            fontStyle: "italic",
            color: "#9E7060",
            fontSize: "1.1rem",
          }}
        >
          A few fun questions before the big day!
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[360px] mx-auto text-center rounded-[1.5rem] relative"
            style={{
              background: "#FFFFFF",
              padding: "2.5rem 2rem 2rem",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
            }}
          >
            <div
              className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "rgba(184,89,64,0.1)" }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#B85940"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "3rem",
                color: "#B85940",
                marginBottom: "0.5rem",
              }}
            >
              Thank You!
            </h3>
            <p
              style={{
                fontStyle: "italic",
                color: "#9E7060",
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: "1.75rem",
              }}
            >
              {"We can't wait to celebrate with you!"}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full rounded-full cursor-pointer transition-colors duration-200"
              style={{
                background: "#B85940",
                color: "white",
                border: "none",
                padding: "0.85rem 2.5rem",
                fontFamily: "'Tenor Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8B3E28")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#B85940")}
            >
              Close
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-[520px] mx-auto"
          >
            {/* Guest Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] mb-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(92,34,51,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#B85940",
                  marginBottom: "0.35rem",
                }}
              >
                Guest Details
              </p>

              <div className="mb-5">
                <label
                  className="block mb-1"
                  style={{
                    fontFamily: "'Tenor Sans', sans-serif",
                    fontSize: "0.6rem",
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
                  className="w-full outline-none transition-colors duration-200"
                  style={{
                    background: "#FFF8F3",
                    border: "none",
                    borderBottom: "1.5px solid #EEDDD3",
                    padding: "0.6rem 0.25rem",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: "#2E1810",
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "#B85940")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "#EEDDD3")}
                />
              </div>

              <div>
                <label
                  className="block mb-1"
                  style={{
                    fontFamily: "'Tenor Sans', sans-serif",
                    fontSize: "0.6rem",
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
                  className="w-full outline-none transition-colors duration-200"
                  style={{
                    background: "#FFF8F3",
                    border: "none",
                    borderBottom: "1.5px solid #EEDDD3",
                    padding: "0.6rem 0.25rem",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: "#2E1810",
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "#B85940")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "#EEDDD3")}
                />
              </div>
            </motion.div>

            {/* Make a Guess Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[1.5rem] mb-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(92,34,51,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#B85940",
                  marginBottom: "0.35rem",
                }}
              >
                Make a Guess
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9E7060",
                  marginBottom: "1.25rem",
                }}
              >
                Who will get emotional first?
              </p>

              <div className="flex gap-6 justify-center">
                {[
                  { value: "Vaibhav", label: "V" },
                  { value: "Sejal", label: "S" },
                  { value: "Both", label: "B" },
                ].map((option) => (
                  <label key={option.value} className="flex flex-col items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="emotional"
                      value={option.value}
                      checked={formData.emotional === option.value}
                      onChange={(e) => setFormData({ ...formData, emotional: e.target.value })}
                      className="hidden"
                    />
                    <div
                      className="w-15 h-15 rounded-full flex items-center justify-center transition-all duration-250"
                      style={{
                        border: "1.5px solid #EEDDD3",
                        background: formData.emotional === option.value ? "#B85940" : "#FFF8F3",
                        color: formData.emotional === option.value ? "white" : "#B85940",
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: "1.5rem",
                        boxShadow:
                          formData.emotional === option.value
                            ? "0 4px 16px rgba(184,89,64,0.35)"
                            : "none",
                      }}
                    >
                      {option.label}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Tenor Sans', sans-serif",
                        fontSize: "0.58rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#9E7060",
                      }}
                    >
                      {option.value}
                    </span>
                  </label>
                ))}
              </div>
              <p
                className="text-center mt-4"
                style={{
                  fontSize: "0.85rem",
                  color: "#9E7060",
                  fontStyle: "italic",
                }}
              >
                Reveal after the wedding
              </p>
            </motion.div>

            {/* Wedding Mood Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[1.5rem] mb-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(92,34,51,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#B85940",
                  marginBottom: "0.35rem",
                }}
              >
                Your Wedding Mood
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9E7060",
                  marginBottom: "1.25rem",
                }}
              >
                {"I'm coming for..."}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {["The Food", "Dance Floor", "The Love", "All of It"].map((mood) => (
                  <label
                    key={mood}
                    className="cursor-pointer rounded-xl text-center transition-all duration-250"
                    style={{
                      border: "1.5px solid #EEDDD3",
                      padding: "1rem 0.75rem",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.95rem",
                      color: formData.mood === mood ? "white" : "#6B4535",
                      background: formData.mood === mood ? "#B85940" : "transparent",
                      borderColor: formData.mood === mood ? "#B85940" : "#EEDDD3",
                    }}
                  >
                    <input
                      type="radio"
                      name="mood"
                      value={mood}
                      checked={formData.mood === mood}
                      onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                      className="hidden"
                    />
                    {mood}
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Leave a Note Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[1.5rem] mb-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(92,34,51,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#B85940",
                  marginBottom: "0.35rem",
                }}
              >
                Leave Us a Note
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9E7060",
                  marginBottom: "1.25rem",
                }}
              >
                Share a wish or memory.
              </p>
              <textarea
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                rows={3}
                placeholder="Write something from the heart..."
                className="w-full outline-none resize-none transition-colors duration-200"
                style={{
                  background: "#FFF8F3",
                  border: "1px solid #EEDDD3",
                  borderRadius: "0.75rem",
                  padding: "0.85rem 1rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  color: "#2E1810",
                  lineHeight: 1.5,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#B85940")}
                onBlur={(e) => (e.target.style.borderColor = "#EEDDD3")}
              />
              <p
                className="mt-2"
                style={{
                  fontSize: "0.8rem",
                  color: "#9E7060",
                  fontStyle: "italic",
                }}
              >
                This becomes a digital memory book.
              </p>
            </motion.div>

            {/* Words for Forever Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-[1.5rem] mb-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(92,34,51,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#B85940",
                  marginBottom: "0.35rem",
                }}
              >
                Words for Forever
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9E7060",
                  marginBottom: "1.25rem",
                }}
              >
                Advice for married life.
              </p>
              <textarea
                value={formData.advice}
                onChange={(e) => setFormData({ ...formData, advice: e.target.value })}
                rows={3}
                placeholder="One piece of advice..."
                className="w-full outline-none resize-none transition-colors duration-200"
                style={{
                  background: "#FFF8F3",
                  border: "1px solid #EEDDD3",
                  borderRadius: "0.75rem",
                  padding: "0.85rem 1rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  color: "#2E1810",
                  lineHeight: 1.5,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#B85940")}
                onBlur={(e) => (e.target.style.borderColor = "#EEDDD3")}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full cursor-pointer relative overflow-hidden transition-all duration-300"
                style={{
                  background: "#B85940",
                  color: "white",
                  border: "none",
                  padding: "1.1rem",
                  fontFamily: "'Tenor Sans', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  boxShadow: "0 6px 24px rgba(184,89,64,0.35)",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = "#8B3E28"
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 10px 32px rgba(184,89,64,0.45)"
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#B85940"
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(184,89,64,0.35)"
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    Sending...
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="animate-spin"
                    >
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0110 10" strokeOpacity="0.75" />
                    </svg>
                  </span>
                ) : (
                  "Send Love"
                )}
              </button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  )
}
