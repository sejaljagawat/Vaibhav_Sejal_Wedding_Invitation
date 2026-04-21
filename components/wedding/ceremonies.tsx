"use client";

import { motion } from "framer-motion";
import { MapPin, Music, Heart, PartyPopper, FlowerIcon } from "lucide-react";

const events = [
  {
    date: "19th May, 2026",
    time: "10 AM",
    name: "Haldi",
    venue: "Kanha Shree Gadern, Indore",
    icon: FlowerIcon,
    mapsQuery: "Grand+Celebration+Hall,+Mumbai",
  },
  {
    date: "19th May, 2026",
    name: "Reception",
    time: "7 PM Onwards",
    venue: "Kanha Shree Gadern, Indore",
    icon: PartyPopper,
    mapsQuery: "Royal+Garden+Resort,+Mumbai",
  },
  {
    date: "20th Nov, 2026",
    time: "9 AM ",
    name: "Ganesh Puja & Mayra",
    venue: "Home, Indore",
    icon: Heart,
    mapsQuery: "The+Imperial+Banquet,+Mumbai",
  },
  {
    date: "20th Nov, 2026",
    time: "7 PM Onwards",
    name: "Prossesion/Binola",
    venue: "Home, Indore",
    icon: Heart,
    mapsQuery: "The+Imperial+Banquet,+Mumbai",
  },
  {
    date: "21st Nov, 2026",
    time: "9 AM Onwards",
    name: "Ring Ceremony & Phere",
    venue: "Motagaon, Raj",
    icon: Heart,
    mapsQuery: "The+Imperial+Banquet,+Mumbai",
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
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-gold/20 inline-block">
                    <p className="text-sm font-sans text-gold-dark uppercase tracking-widest mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-2xl font-script text-primary mb-3">{event.name}</h3>
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

                {/* Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark shadow-lg">
                  <event.icon className="w-8 h-8 text-card" />
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