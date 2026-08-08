import type { Metadata } from "next";
import { Calendar, MapPin, Users } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/lib/events";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past CROC AI Initiative events: workshops, conferences, hackathons, webinars, meetups, and AI Fridays.",
};

const CATEGORIES = ["Workshops", "Conferences", "Hackathons", "Webinars", "Meetups", "AI Fridays"];

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
            {UPCOMING_EVENTS.map((e) => (
              <div key={e.title} className="bg-graphite border border-graphite-line rounded-2xl overflow-hidden flex flex-col">
                {e.image && (
                  <div className="relative h-44 w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element -- next/image doesn't respect basePath when unoptimized (required for static export); see lib/utils.ts assetPath() */}
                    <img src={assetPath(e.image)} alt={e.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle mb-3">{e.category}</span>
                  <h3 className="font-display text-lg font-semibold mb-4 leading-snug">{e.title}</h3>
                  <div className="flex items-center gap-2 text-text-mid text-sm mb-2">
                    <Calendar size={14} className="text-text-low shrink-0" />
                    {e.date}
                  </div>
                  <div className="flex items-center gap-2 text-text-mid text-sm mb-2">
                    <MapPin size={14} className="text-text-low shrink-0" />
                    {e.venue}
                  </div>
                  {e.speakers && e.speakers.length > 0 && (
                    <div className="flex items-start gap-2 text-text-mid text-sm mb-6">
                      <Users size={14} className="text-text-low shrink-0 mt-0.5" />
                      {e.speakers.join(", ")}
                    </div>
                  )}
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <span className={`font-mono text-[11px] uppercase tracking-[0.05em] ${e.confirmed ? "text-periwinkle" : "text-text-low"}`}>{e.status}</span>
                    <Button href={e.registrationUrl ?? e.internalHref} variant="ghost" size="sm">
                      {e.registrationUrl ? "Apply / Register" : e.confirmed ? "Learn More" : "Notify Me"} →
                    </Button>
                  </div>
                  {!e.confirmed && (
                    <p className="text-[11px] text-text-low mt-4 border-t border-graphite-line pt-3">Placeholder — replace with confirmed date, venue, and speakers once scheduled.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Past Events" title="Event archive." desc="A gallery and recap of every completed event lives here." />
          {PAST_EVENTS.length === 0 ? (
            <div className="border border-dashed border-graphite-line rounded-3xl p-14 text-center">
              <h3 className="font-display text-xl font-semibold mb-3">No past events yet</h3>
              <p className="text-text-mid max-w-md mx-auto text-sm">Once our first workshop wraps in August 2026, its recap, speaker list, and photo gallery will be archived here.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {PAST_EVENTS.map((e) => (
                <div key={e.title} className="bg-graphite border border-graphite-line rounded-2xl overflow-hidden">
                  {e.coverImage && (
                    <div className="relative w-full h-48 md:h-64 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element -- see note above */}
                      <img src={assetPath(e.coverImage)} alt={`${e.title} banner`} className="absolute inset-0 w-full h-full object-contain p-6" />
                    </div>
                  )}
                  <div className="p-8 md:p-10">
                    <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle">{e.category}</span>
                    <h3 className="font-display text-xl font-semibold mt-2 mb-3">{e.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-text-mid text-sm mb-5">
                      <div className="flex items-center gap-2"><Calendar size={14} className="text-text-low" />{e.date}</div>
                      <div className="flex items-center gap-2"><MapPin size={14} className="text-text-low" />{e.venue}</div>
                      {e.speakers && e.speakers.length > 0 && (
                        <div className="flex items-center gap-2"><Users size={14} className="text-text-low" />{e.speakers.join(", ")}</div>
                      )}
                    </div>
                    <p className="text-text-mid text-[15px] leading-relaxed mb-6">{e.recap}</p>
                    {e.gallery.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {e.gallery.map((src) => (
                          <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element -- see note above */}
                          <img src={assetPath(src)} alt={`${e.title} gallery photo`} className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
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
