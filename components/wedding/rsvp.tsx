"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, CheckCircle } from "lucide-react";

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emotional: "",
    mood: [] as string[],
    wishes: "",
    advice: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMoodToggle = (mood: string) => {
    setFormData((prev) => ({
      ...prev,
      mood: prev.mood.includes(mood)
        ? prev.mood.filter((m) => m !== mood)
        : [...prev.mood, mood],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-rose-light/20 to-background">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-4 text-center"
        >
          Join the Celebration
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif mb-4 text-center"
        >
          Celebrate
          <span className="font-script text-gold-dark ml-2">With Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-serif mb-12 text-center"
        >
          A few fun questions before the big day!
        </motion.p>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card p-12 rounded-2xl shadow-xl border border-gold/20 text-center"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-script text-primary mb-4">Thank You!</h3>
              <p className="text-muted-foreground font-serif">
                We can&apos;t wait to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-xl border border-gold/20"
            >
              {/* Guest Details */}
              <div className="mb-8">
                <h3 className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-4">
                  Guest Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-serif text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-serif"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-serif text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-serif"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Fun Question */}
              <div className="mb-8">
                <h3 className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-2">
                  Make a Guess
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  Who will get emotional first?
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "vaibhav", label: "V", full: "Vaibhav" },
                    { value: "sejal", label: "S", full: "Sejal" },
                    { value: "both", label: "B", full: "Both" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, emotional: option.value })}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                        formData.emotional === option.value
                          ? "bg-gold text-card border-gold"
                          : "border-border hover:border-gold"
                      }`}
                    >
                      <span className="w-8 h-8 rounded-full bg-rose-light flex items-center justify-center text-sm font-bold text-primary">
                        {option.label}
                      </span>
                      <span className="font-serif">{option.full}</span>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Reveal after the wedding 😉
                </p>
              </div>

              {/* Mood Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-2">
                  Your Wedding Mood
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  {"I'm coming for..."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "The Food 🍛",
                    "Dance Floor 💃",
                    "The Love ❤️",
                    "All of It ✨",
                  ].map((mood) => (
                    <button
                      key={mood}
                      type="button"
                      onClick={() => handleMoodToggle(mood)}
                      className={`px-4 py-2 rounded-full border text-sm font-serif transition-all ${
                        formData.mood.includes(mood)
                          ? "bg-gold text-card border-gold"
                          : "border-border hover:border-gold"
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wishes */}
              <div className="mb-8">
                <h3 className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-2">
                  Leave Us a Note
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  Share a wish or memory.
                </p>
                <textarea
                  value={formData.wishes}
                  onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-serif resize-none"
                  rows={3}
                  placeholder="Your heartfelt message..."
                />
                <p className="text-sm text-muted-foreground mt-2">
                  🔥 This becomes a digital memory book.
                </p>
              </div>

              {/* Advice */}
              <div className="mb-8">
                <h3 className="text-lg font-sans text-muted-foreground uppercase tracking-widest mb-2">
                  Words for Forever
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  Advice for married life.
                </p>
                <textarea
                  value={formData.advice}
                  onChange={(e) => setFormData({ ...formData, advice: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-serif resize-none"
                  rows={3}
                  placeholder="Your wisdom for the couple..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-gold to-gold-dark text-card font-sans font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Heart className="w-5 h-5" />
                Send Love
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
