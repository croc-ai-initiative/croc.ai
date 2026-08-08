import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "News & Blog",
  description: "Partnership announcements, workshop updates, research highlights, and community achievements from CROC AI Initiative.",
};

const CATEGORIES = ["All", "Partnership Announcements", "Workshop & Event Announcements", "Research Highlights", "Community & Member Achievements", "Funding & Grant Announcements"];

const POSTS = [
  { cat: "Partnership Announcements", title: "CROC AI partners with Kaduna State Government to launch the AI Workshop Series", date: "Coming soon" },
  { cat: "Research Highlights", title: "Trustworthy AI and RAG: our approach to grounded, auditable systems", date: "Coming soon" },
  { cat: "Research Highlights", title: "Inside the AI Research & Innovation Lab: what we're building first", date: "Coming soon" },
  { cat: "Community & Member Achievements", title: "CROC AI Initiative: our mission and why we started", date: "Coming soon" },
  { cat: "Workshop & Event Announcements", title: "What to expect at Build Your Own AI Chatbot, August 27–29", date: "Coming soon" },
  { cat: "Funding & Grant Announcements", title: "Funding and grant updates will be published here as they're confirmed", date: "Coming soon" },
];

export default function NewsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">News & Blog</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            What we&apos;re building, thinking, and shipping.
          </h1>
          <div className="flex gap-2.5 flex-wrap mt-8">
            {CATEGORIES.map((c) => (
              <span key={c} className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <div key={p.title} className="border border-graphite-line rounded-2xl overflow-hidden hover:border-periwinkle/30 transition-colors">
              <div className="h-40 bg-gradient-to-br from-[#1a1830] to-[#232042] relative">
                <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,rgba(140,134,255,0.08)_0px,transparent_2px,transparent_40px)]" />
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] uppercase text-periwinkle tracking-[0.06em]">{p.cat}</span>
                <h3 className="font-display text-[17px] font-semibold mt-2.5 leading-snug">{p.title}</h3>
                <div className="text-[13px] text-text-low mt-3">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="More Stories" title="Impact stories from our projects." desc="Detailed case studies from the AI Research & Innovation Lab and the Community AI Literacy Programme." />
          <Button href="/case-studies" variant="ghost">View Impact Stories →</Button>
        </div>
      </section>
    </div>
  );
}
