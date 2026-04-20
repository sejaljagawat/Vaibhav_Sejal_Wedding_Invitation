import { Hero } from "@/components/wedding/hero";
import { SaveTheDate } from "@/components/wedding/save-the-date";
import { Gallery } from "@/components/wedding/gallery";
import { Ceremonies } from "@/components/wedding/ceremonies";
import { RSVP } from "@/components/wedding/rsvp";
import { Footer } from "@/components/wedding/footer";

export default function WeddingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SaveTheDate />
      <Gallery />
      <Ceremonies />
      <RSVP />
      <Footer />
    </main>
  );
}
