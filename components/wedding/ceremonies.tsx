"use client"

import { motion } from "framer-motion"

const events = [
  {
    date: "07th May, 2026",
    name: "Sangeet",
    venue: "Woodrose Banquets and Hotel, Belagavi",
    mapsQuery: "Woodrose+Banquets+and+Hotel,+Belagavi",
    videoSrc: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Tejaswini%20%26%20Sourabh/215.mp4",
  },
  {
    date: "08th May, 2026",
    name: "Marriage",
    venue: "Woodrose Banquets and Hotel, Belagavi",
    mapsQuery: "Woodrose+Banquets+and+Hotel,+Belagavi",
    videoSrc: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Tejaswini%20%26%20Sourabh/216.mp4",
  },
  {
    date: "10th May, 2026",
    name: "Reception",
    venue: "Mayur Belgaum Presidency Hotel & Spa, Belagavi",
    mapsQuery: "Mayur+Belgaum+Presidency+Hotel+%26+Spa,+Belagavi",
    videoSrc: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Tejaswini%20%26%20Sourabh/217.mp4",
  },
]

function EventSeparator() {
  return (
    <div className="flex items-center justify-center gap-4 my-8 max-w-[200px] mx-auto opacity-50">
      <div className="flex-1 h-px" style={{ background: "#C9963E" }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9963E" }} />
      <div className="flex-1 h-px" style={{ background: "#C9963E" }} />
    </div>
  )
}

export function Ceremonies() {
  return (
    <section id="events-section" className="py-20 px-6" style={{ background: "#FFF8F3" }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
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
          The Celebration Unfolds
        </span>
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            lineHeight: 1.1,
            color: "#B85940",
          }}
        >
          Sacred
          <br />
          Ceremonies
        </h2>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div
            className="h-px w-20"
            style={{ background: "linear-gradient(to left, #C9963E, transparent)" }}
          />
          <svg width="12" height="12" fill="#C9963E" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <div
            className="h-px w-20"
            style={{ background: "linear-gradient(to right, #C9963E, transparent)" }}
          />
        </div>
      </motion.div>

      {/* Events */}
      <div className="space-y-0">
        {events.map((event, index) => (
          <div key={event.name}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="max-w-[420px] mx-auto"
            >
              {/* Event Title */}
              <div className="text-center mb-4">
                <p
                  style={{
                    fontFamily: "'Tenor Sans', sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#9E7060",
                    marginBottom: "0.15rem",
                  }}
                >
                  {event.date}
                </p>
                <h3
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2.8rem",
                    color: "#B85940",
                  }}
                >
                  {event.name}
                </h3>
              </div>

              {/* Event Video */}
              <div
                className="rounded-[1.5rem] overflow-hidden relative"
                style={{
                  border: "1px solid #EEDDD3",
                  boxShadow: "0 20px 60px -10px rgba(92,34,51,0.12)",
                  background: "#1a0d08",
                  maxHeight: "250px",
                }}
              >
                <video
                  className="w-full h-auto block"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={event.videoSrc} type="video/mp4" />
                </video>
                {/* Gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-30 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(26,13,8,0.7), transparent)",
                  }}
                />
              </div>

              {/* Venue Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-5 mx-auto rounded-[1rem] overflow-hidden text-center flex flex-col items-center gap-3"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEDDD3",
                  boxShadow: "0 4px 16px rgba(92,34,51,0.06)",
                  padding: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.15rem",
                    color: "#6B4535",
                  }}
                >
                  Venue: {event.venue}
                </span>
                <a
                  href={`https://maps.google.com/?q=${event.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full whitespace-nowrap transition-colors duration-200"
                  style={{
                    background: "#B85940",
                    color: "white",
                    padding: "0.8rem 1.8rem",
                    fontFamily: "'Tenor Sans', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#8B3E28")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#B85940")}
                >
                  View on Maps
                </a>
              </motion.div>
            </motion.div>

            {/* Separator (not after last item) */}
            {index < events.length - 1 && <EventSeparator />}
          </div>
        ))}
      </div>
    </section>
  )
}
