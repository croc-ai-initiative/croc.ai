import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Partners",
  description: "CROC AI Initiative's government, academic, and ecosystem partners in Kaduna, Nigeria and beyond.",
};

const ECOSYSTEM = [
  { name: "Kaduna State University", logo: "/partners/kasu.png" },
  { name: "Nigerian Defence Academy", logo: "/partners/nda.png" },
  { name: "Carnegie Mellon University Africa", logo: "/partners/cmu-africa.png" },
];

export default function PartnersPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">
            Startup & Government Partnerships
          </span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Collaborate with CROC AI to build practical AI for Africa.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            Join our government and academic partners pioneering applied AI.
            Discover what works, when, and why, with some of Kaduna&apos;s most
            ambitious researchers and builders.
          </p>
          <div className="mt-8">
            <Button href="/contact">Start a Partnership Discussion</Button>
          </div>
        </div>
      </section>

      {/* Core Partner tile, flagship callout style */}
      <section className="pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">
            Core Government Partner
          </span>
          <div className="border border-graphite-line rounded-2xl p-14 flex flex-col items-center justify-center bg-graphite gap-6">
            <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center p-3">
              <Image src="/partners/kaduna-state.png" alt="Kaduna State Government coat of arms" width={200} height={146} className="w-full h-full object-contain" />
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold">Kaduna State Government</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-periwinkle mt-3">
                Supported & Co-Hosted the CROC AI Workshop Series
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem wall, bordered logo grid */}
      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">
            Ecosystem Partners
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-graphite-line border border-graphite-line rounded-2xl overflow-hidden">
            {ECOSYSTEM.map((p) => (
              <div
                key={p.name}
                className="bg-ink h-40 flex flex-col items-center justify-center gap-3 px-6 text-center hover:bg-graphite transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                  <Image src={p.logo} alt={`${p.name} logo`} width={64} height={64} className="w-full h-full object-contain" />
                </div>
                <span className="font-display font-semibold text-[13px] text-text-mid hover:text-text-hi transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-text-low text-sm mt-6">
            Growing this list is a priority. As new collaborations launch, they&apos;ll appear here too.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold mb-2.5">Government</h3>
            <p className="text-text-mid text-sm leading-relaxed mb-4">Digital transformation, AI adoption, and capacity building programmes for public institutions.</p>
            <Button href="/government" variant="ghost" size="sm">View Government Partnerships</Button>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold mb-2.5">Academic</h3>
            <p className="text-text-mid text-sm leading-relaxed mb-4">Research collaboration, student programmes, and joint publications with universities.</p>
            <Button href="/research" variant="ghost" size="sm">View Research</Button>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold mb-2.5">Industry</h3>
            <p className="text-text-mid text-sm leading-relaxed mb-4">Enterprise AI consulting, integration, and joint go-to-market opportunities.</p>
            <Button href="/services" variant="ghost" size="sm">View Services</Button>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner
            title="Want to be listed as a CROC AI partner?"
            desc="If you're building AI capacity in Nigeria or beyond, let's talk about how we can work together."
          />
        </div>
      </section>
    </div>
  );
}
