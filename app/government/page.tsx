import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Government Partnerships",
  description: "CROC AI's collaboration with the Kaduna State Government on AI capacity building, digital transformation, and the AI Workshop Series.",
};

export default function GovernmentPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Government Partnerships</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Partnering with government to build AI capacity.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            CROC AI works directly with state government to design and deliver
            AI adoption, digital transformation, and capacity building programmes.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-br from-[#14131f] via-[#1a1830] to-[#211c3d] border border-periwinkle/20 rounded-3xl p-8 md:p-14">
            <span className="inline-flex items-center gap-2.5 bg-white/6 border border-white/12 px-4 py-2 rounded-full font-mono text-xs text-white/70 mb-6">
              Active Partnership
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">Kaduna State Government</h2>
            <p className="text-white/70 text-base max-w-2xl leading-relaxed mb-6">
              Our current collaboration centres on the CROC AI Workshop
              Series, our flagship capacity building programme, training
              Kaduna&apos;s youth to become AI builders, delivered on
              campus at Kaduna State University.
            </p>
            <Button href="/ai-academy">View the Workshop Series</Button>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="What we offer" title="Programmes for public institutions." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold mb-2.5">Workshop Series</h3>
              <p className="text-text-mid text-sm leading-relaxed">Structured, practical AI training delivered directly into communities.</p>
            </div>
            <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold mb-2.5">Digital Transformation</h3>
              <p className="text-text-mid text-sm leading-relaxed">Modernising public sector processes and systems for the digital era.</p>
            </div>
            <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold mb-2.5">AI Adoption</h3>
              <p className="text-text-mid text-sm leading-relaxed">Roadmaps and pilot programmes for responsible government AI adoption.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner
            title="Exploring a partnership with your institution?"
            desc="We work with state governments, universities, and public agencies across Nigeria."
            primaryLabel="Start a Conversation"
          />
        </div>
      </section>
    </div>
  );
}
