import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free AI learning resources from CROC AI Initiative: roadmaps, courses, books, datasets, slides, research guides, toolkits, and career advice.",
};

const RESOURCES = [
  { title: "Learning Roadmaps", desc: "Step-by-step paths for going from AI-curious to AI-capable, tailored by starting point." },
  { title: "AI Courses", desc: "Curated and original course content covering AI fundamentals through applied systems." },
  { title: "Books", desc: "A reading list spanning foundational theory, applied ML, and responsible AI." },
  { title: "Datasets", desc: "Open datasets relevant to African languages, education, and public service contexts." },
  { title: "Presentation Slides", desc: "Slide decks from our workshops and talks, free to reuse for teaching and outreach." },
  { title: "Research Guides", desc: "Practical guides on reading, structuring, and conducting applied AI research." },
  { title: "Toolkits", desc: "Starter code, templates, and tooling for RAG, agentic AI, and evaluation." },
  { title: "Career Advice", desc: "Guidance on breaking into AI research and engineering roles from our own team's experience." },
];

export default function ResourcesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Resources</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Free, and built to actually be used.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            Educational and professional development material, freely
            accessible to anyone learning or teaching AI.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {RESOURCES.map((r) => (
              <div key={r.title} className="bg-graphite border border-graphite-line rounded-2xl p-7 flex flex-col">
                <h3 className="font-display text-base font-semibold mb-2.5">{r.title}</h3>
                <p className="text-text-mid text-sm leading-relaxed mb-4">{r.desc}</p>
                <span className="mt-auto font-mono text-[11px] uppercase tracking-[0.05em] text-text-low">Library in progress</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Where to start" title="Most resources go live alongside our first programmes." desc="Roadmaps, slides, and toolkits are being published as our AI Academy, Innovation Lab, and Bootcamps run — join as a member to be notified as each drops." />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Have a resource worth sharing?" desc="If you've built something useful for African AI learners, we'd love to feature it here." primaryLabel="Suggest a Resource" secondaryLabel="Join the Community" secondaryHref="/community" />
        </div>
      </section>
    </div>
  );
}
