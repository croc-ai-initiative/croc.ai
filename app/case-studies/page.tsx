import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Impact Stories",
  description: "How the AI Research & Innovation Lab and the Community AI Literacy Programme are advancing AI innovation across Nigeria.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Impact Stories</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Real problems, real impact.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
            <span className="font-mono text-xs uppercase text-periwinkle">Research</span>
            <h3 className="font-display text-xl font-semibold mt-3 mb-3">AI Research & Innovation Lab</h3>
            <p className="text-text-mid text-[15px] leading-relaxed">Detailed impact report in progress, covering our first research streams and their real-world applications.</p>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
            <span className="font-mono text-xs uppercase text-periwinkle">Community</span>
            <h3 className="font-display text-xl font-semibold mt-3 mb-3">Community AI Literacy Programme</h3>
            <p className="text-text-mid text-[15px] leading-relaxed">Detailed impact report in progress, covering our first workshop cohort and its outcomes for participants.</p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Want to be our next impact story?" desc="Let's build something worth writing about." primaryLabel="Start a Project" />
        </div>
      </section>
    </div>
  );
}
