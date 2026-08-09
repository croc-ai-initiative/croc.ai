import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Partners",
  description: "CROC AI Initiative's university, government, and ecosystem partners advancing AI education, research, and innovation in Kaduna, Nigeria.",
};

type Partner = {
  name: string;
  logo?: string;
  desc: string;
  nature: string;
};

const UNIVERSITIES: Partner[] = [
  { name: "Kaduna State University", logo: "/partners/kasu.png", desc: "A leading state university in northern Nigeria, home to CROC AI's leadership and lead researcher.", nature: "Academic host of the CROC AI Workshop Series; research and faculty collaboration" },
  { name: "Nigerian Defence Academy", logo: "/partners/nda.png", desc: "Nigeria's premier military academy, with a dedicated Cyber Security department.", nature: "Cybersecurity advisory, curriculum input, and shared research faculty" },
  { name: "Carnegie Mellon University Africa", logo: "/partners/cmu-africa.png", desc: "CMU's Kigali campus, training engineering leaders for the continent.", nature: "Alumni network and academic advisory ties through leadership education" },
];

const GOVERNMENT: Partner[] = [
  { name: "Kaduna State Government", logo: "/partners/kaduna-state.png", desc: "The state government, supporting digital transformation and AI capacity building for public institutions.", nature: "Co-hosts and supports the CROC AI Workshop Series; state-level capacity building partner" },
];

const TECH_NGO_SPONSORS: { label: string; note: string }[] = [
  { label: "Technology Companies", note: "Open to integration, tooling, and infrastructure partnerships as our projects scale." },
  { label: "NGOs", note: "Open to collaboration on community outreach, digital literacy, and AI-for-good initiatives." },
  { label: "Sponsors", note: "Open to sponsors for workshops, bootcamps, and the Innovation Lab's research streams." },
];

function PartnerCard({ p }: { p: Partner }) {
  return (
    <div className="bg-ink border border-graphite-line rounded-2xl p-7 flex flex-col hover:border-periwinkle/30 transition-colors">
      {p.logo && (
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 mb-5">
          <Image src={p.logo} alt={`${p.name} logo`} width={56} height={56} className="w-full h-full object-contain" />
        </div>
      )}
      <h3 className="font-display font-semibold text-base mb-2">{p.name}</h3>
      <p className="text-text-mid text-sm leading-relaxed mb-4">{p.desc}</p>
      <span className="mt-auto font-mono text-[11px] uppercase tracking-[0.05em] text-periwinkle leading-relaxed">{p.nature}</span>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Partners</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Collaborate with CROC AI to build practical AI for Africa.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            Join our university, government, and ecosystem partners
            advancing AI education, research, and innovation across Nigeria.
          </p>
          <div className="mt-8">
            <Button href="/contact">Start a Partnership Discussion</Button>
          </div>
        </div>
      </section>

      <section id="government" className="pb-16 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">Government Agencies</span>
          <div className="grid md:grid-cols-1 gap-6">
            {GOVERNMENT.map((p) => <PartnerCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">Universities</span>
          <div className="grid md:grid-cols-3 gap-6">
            {UNIVERSITIES.map((p) => <PartnerCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">Technology Companies · NGOs · Sponsors</span>
          <div className="grid md:grid-cols-3 gap-6">
            {TECH_NGO_SPONSORS.map((t) => (
              <div key={t.label} className="border border-dashed border-graphite-line rounded-2xl p-8 text-center flex flex-col items-center">
                <h3 className="font-display text-base font-semibold mb-2.5">{t.label}</h3>
                <p className="text-text-mid text-sm leading-relaxed mb-5">{t.note}</p>
                <Button href="/contact" variant="ghost" size="sm">Partner With Us</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold mb-2.5">Government</h3>
            <p className="text-text-mid text-sm leading-relaxed mb-4">Digital transformation, AI adoption, and capacity building programmes for public institutions.</p>
            <Button href="/programs" variant="ghost" size="sm">View Programs</Button>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold mb-2.5">Academic</h3>
            <p className="text-text-mid text-sm leading-relaxed mb-4">Research collaboration, student programmes, and joint publications with universities.</p>
            <Button href="/research" variant="ghost" size="sm">View Research</Button>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold mb-2.5">Industry</h3>
            <p className="text-text-mid text-sm leading-relaxed mb-4">Advisory, training, and integration support for organisations adopting AI.</p>
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
