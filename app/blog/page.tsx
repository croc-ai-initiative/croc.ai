import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "AI, technology, research, cybersecurity, and company news from CROC AI Initiative.",
};

const POSTS = [
  { cat: "Government Partnership", title: "CROC AI partners with Kaduna State Government to launch first AI Workshop", date: "Coming soon" },
  { cat: "Research", title: "Trustworthy AI and RAG: our approach to grounded, auditable systems", date: "Coming soon" },
  { cat: "Projects", title: "Inside the AI Research & Innovation Lab: what we're building first", date: "Coming soon" },
  { cat: "Company News", title: "CROC AI Initiative: our mission and why we started", date: "Coming soon" },
  { cat: "Cybersecurity", title: "Building digital trust into AI systems from day one", date: "Coming soon" },
  { cat: "Workshop Updates", title: "What to expect at Build Your Own AI Chatbot", date: "Coming soon" },
];

export default function BlogPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Blog & News</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            What we&apos;re building, thinking, and shipping.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
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
    </div>
  );
}
