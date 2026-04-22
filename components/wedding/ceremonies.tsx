"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const events = [
  {
    date: "19th Nov, 2026",
    time: "10 AM",
    name: "Haldi",
    venue: "Kanha Shree Garden, Indore",
    mapsQuery: "Kanha+Shree+Garden+Indore",
    image: "https://ibb.co/9kqm9Cw9",
    imageAlt: "Haldi ceremony with turmeric paste and flowers",
  },
  {
    date: "19th Nov, 2026",
    name: "Reception",
    time: "7 PM Onwards",
    venue: "Kanha Shree Garden, Indore",
    mapsQuery: "Kanha+Shree+Garden+Indore",
    image: "https://ibb.co/QgW2cny",
    imageAlt: "Elegant wedding reception with lights and decor",
  },
  {
    date: "20th Nov, 2026",
    time: "9 AM",
    name: "Ganesh Puja & Mayra",
    venue: "Home, Indore",
    mapsQuery: "Indore+Madhya+Pradesh",
    image: "https://unsplash.com/photos/white-and-gold-hindu-deity-figurine-ot2654qRnNU",
    imageAlt: "Ganesh Puja with diyas and flowers",
  },
  {
    date: "20th Nov, 2026",
    time: "7 PM Onwards",
    name: "Procession / Binola",
    venue: "Home, Indore",
    mapsQuery: "Indore+Madhya+Pradesh",
    image: "https://unsplash.com/photos/joyful-girl-surrounded-by-dancing-friends-at-disco-WkIBnUq35xY",
    imageAlt: "Wedding procession with lights and celebration",
  },
  {
    date: "21st Nov, 2026",
    time: "9 AM Onwards",
    name: "Ring Ceremony & Phere",
    venue: "Motagaon, Rajasthan",
    mapsQuery: "Motagaon+Rajasthan",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=400&q=80",
    imageAlt: "Ring ceremony with flowers and rituals",
  },
];

export function Ceremonies() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-4"
        >
          The Celebration Unfolds
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif mb-12"
        >
          Sacred
          <span className="font-script text-gold-dark ml-2">Ceremonies</span>
        </motion.h2>

        {/* Events Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold to-transparent hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                >
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-gold/20 inline-block w-full max-w-sm">
                    <p className="text-sm font-sans text-gold-dark uppercase tracking-widest mb-1">
                      {event.date}
                    </p>

                    {/* Time Badge */}
                    <div
                      className={`flex items-center gap-1.5 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        } justify-start`}
                    >
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs font-sans text-gold font-medium tracking-wide">
                        {event.time}
                      </span>
                    </div>

                    <h3 className="text-2xl font-script text-primary mb-3">
                      {event.name}
                    </h3>
                    <p className="text-sm font-serif text-muted-foreground mb-3">
                      Venue: {event.venue}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${event.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-sans text-gold-dark hover:text-gold transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Maps
                    </a>
                  </div>
                </div>

                {/* Image Circle — replaces the icon circle */}
                <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-gold shadow-xl">
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gold overlay ring */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-gold/40 ring-inset" />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}