"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Clock } from "lucide-react"

const events = [
  {
    name: "Sangeet",
    date: "May 7, 2026",
    time: "6:00 PM onwards",
    venue: "Celebration Hall, Mumbai",
    description: "An evening of music, dance, and celebration",
    icon: "🎵",
  },
  {
    name: "Wedding Ceremony",
    date: "May 8, 2026",
    time: "9:00 AM onwards",
    venue: "Grand Palace Banquets, Mumbai",
    description: "The sacred union of two souls",
    icon: "💍",
  },
  {
    name: "Reception",
    date: "May 10, 2026",
    time: "7:00 PM onwards",
    venue: "Royal Gardens, Mumbai",
    description: "Join us for dinner and festivities",
    icon: "🎉",
  },
]

export function Ceremonies() {
  return (
    <section className="py-20 px-4" style={{ background: "#FFF8F3" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
            The Celebration Unfolds
          </span>
          <h2
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              color: "#B85940",
              lineHeight: 1.2,
            }}
          >
            Wedding Events
          </h2>
        </motion.div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEDDD3",
                boxShadow: "0 4px 24px rgba(92,34,51,0.06)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0"
                  style={{ background: "rgba(184,89,64,0.1)" }}
                >
                  {event.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: "2rem",
                      color: "#B85940",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {event.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      color: "#6B4535",
                      marginBottom: "1rem",
                    }}
                  >
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm" style={{ color: "#9E7060" }}>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Map Link */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(event.venue)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors shrink-0"
                  style={{
                    background: "#B85940",
                    color: "white",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#8B3E28")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#B85940")}
                >
                  <MapPin size={14} />
                  View Map
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
