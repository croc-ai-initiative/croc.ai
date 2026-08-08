import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past CROC AI Initiative events: workshops, conferences, hackathons, webinars, meetups, and AI Fridays.",
};

const CATEGORIES = ["Workshops", "Conferences", "Hackathons", "Webinars", "Meetups", "AI Fridays"];

const UPCOMING = [
  {
    category: "Workshops",
    title: "CROC AI Workshop Series: Build Your Own AI Chatbot",
    date: "August 27–29, 2026",
    venue: "Kaduna State University, Kaduna",
    status: "Registration open",
    href: "/ai-academy",
    real: true,
  },
  {
    category: "AI Fridays",
    title: "AI Fridays — weekly community session",
    date: "Schedule to be announced",
    venue: "Kaduna (venue TBA) / Online",
    status: "Coming soon",
    href: "/contact",
    real: false,
  },
  {
    category: "Hackathons",
    title: "First CROC AI Hackathon",
    date: "Date to be announced",
    venue: "Kaduna, Nigeria",
    status: "In planning",
    href: "/contact",
    real: false,
  },
];

export default function EventsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Events</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Workshops, hackathons, and AI Fridays.
          </h1>
          <div className="flex gap-2.5 flex-wrap mt-8">
            {CATEGORIES.map((c) => (
              <span key={c} className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Upcoming" title="What's next." />
          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING.map((e) => (
              <div key={e.title} className="bg-graphite border border-graphite-line rounded-2xl p-8 flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle mb-3">{e.category}</span>
                <h3 className="font-display text-lg font-semibold mb-4 leading-snug">{e.title}</h3>
                <div className="flex items-center gap-2 text-text-mid text-sm mb-2">
                  <Calendar size={14} className="text-text-low shrink-0" />
                  {e.date}
                </div>
                <div className="flex items-center gap-2 text-text-mid text-sm mb-6">
                  <MapPin size={14} className="text-text-low shrink-0" />
                  {e.venue}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.05em] ${e.real ? "text-periwinkle" : "text-text-low"}`}>{e.status}</span>
                  <Button href={e.href} variant="ghost" size="sm">{e.real ? "Register" : "Notify Me"} →</Button>
                </div>
                {!e.real && (
                  <p className="text-[11px] text-text-low mt-4 border-t border-graphite-line pt-3">Placeholder — replace with confirmed date, venue, and speakers once scheduled.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Past Events" title="Event archive." desc="A gallery and recap of every completed event will live here as our programme runs." />
          <div className="border border-dashed border-graphite-line rounded-3xl p-14 text-center">
            <h3 className="font-display text-xl font-semibold mb-3">No past events yet</h3>
            <p className="text-text-mid max-w-md mx-auto text-sm">Once our first workshop wraps in August 2026, its recap, speaker list, and photo gallery will be archived here.</p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Want to speak at, sponsor, or host an event with us?" desc="We're building our events calendar in the open — reach out to get involved." />
        </div>
      </section>
    </div>
  );
}
