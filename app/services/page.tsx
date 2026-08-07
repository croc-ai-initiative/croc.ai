import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description: "AI training, technical advisory, research collaboration, and cybersecurity awareness programmes from CROC AI Initiative.",
};

const SERVICES = [
  { title: "AI Training & Workshops", desc: "Hands-on programmes teaching students, professionals, and institutions to build real AI systems, not just use them." },
  { title: "Technical Advisory", desc: "Strategy and feasibility guidance for government and institutions exploring AI adoption." },
  { title: "Cybersecurity Awareness", desc: "Public sensitisation and training on digital trust, online safety, and ethical AI use.", id: "cybersecurity" },
  { title: "Research Collaboration", desc: "Joint research projects and publications with universities and research institutions." },
  { title: "AI Integration Support", desc: "Guidance on embedding AI capabilities responsibly into existing institutional workflows." },
  { title: "Curriculum & Capacity Building", desc: "Designing AI literacy curricula and training-of-trainers programmes for schools and public bodies." },
];

export default function ServicesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Services</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Capacity building and collaboration, from one team.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} id={s.id} className="bg-graphite border border-graphite-line rounded-2xl p-8 scroll-mt-24">
                <h3 className="font-display text-lg font-semibold mb-2.5">{s.title}</h3>
                <p className="text-text-mid text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Have a project or partnership in mind?" desc="Tell us about it. We'll respond within one business day." />
        </div>
      </section>
    </div>
  );
}
