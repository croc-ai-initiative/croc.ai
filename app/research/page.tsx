import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description: "CROC AI's research areas, publications, and innovation lab. Trustworthy AI, agentic systems, and RAG for African contexts.",
};

const AREAS = [
  { title: "Trustworthy AI", desc: "Research into safe, auditable, and explainable AI systems for high-stakes deployment contexts." },
  { title: "Retrieval-Augmented Generation", desc: "Improving grounding, retrieval quality, and hallucination reduction for tasks that depend on accurate knowledge." },
  { title: "Agentic AI", desc: "Agents that plan, execute, and correct their own work under real world constraints." },
  { title: "AI for Low-Resource Settings", desc: "Systems designed to perform reliably under connectivity, data, and infrastructure constraints common across Africa." },
];

export default function ResearchPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Research & Innovation</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Research that ships, not just publishes.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            Our research is led by academic and defence-sector advisors, and
            feeds directly into the programmes and systems we build. See our{" "}
            <Link href="/solutions" className="text-periwinkle font-semibold">full technical stack →</Link>
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Research areas" title="What we're working on." />
          <div className="grid md:grid-cols-2 gap-6">
            {AREAS.map((a) => (
              <div key={a.title} className="bg-graphite border border-graphite-line rounded-2xl p-9">
                <h3 className="font-display text-xl font-semibold mb-3">{a.title}</h3>
                <p className="text-text-mid text-[15px] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-dashed border-graphite-line rounded-2xl p-9 text-center">
              <h4 className="font-display font-semibold text-lg mb-2">Publications</h4>
              <p className="text-text-mid text-sm">Coming soon</p>
            </div>
            <div className="border border-dashed border-graphite-line rounded-2xl p-9 text-center">
              <h4 className="font-display font-semibold text-lg mb-2">Open-Source Projects</h4>
              <p className="text-text-mid text-sm">Coming soon</p>
            </div>
            <div className="border border-dashed border-graphite-line rounded-2xl p-9 text-center">
              <h4 className="font-display font-semibold text-lg mb-2">Datasets</h4>
              <p className="text-text-mid text-sm">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner
            title="Collaborating on research?"
            desc="We partner with universities and institutions on applied AI research. Let's talk."
          />
        </div>
      </section>
    </div>
  );
}
