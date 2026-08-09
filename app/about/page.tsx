import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description: "CROC AI Initiative's story, mission, vision, core values, and leadership team. A single-mission AI initiative built in Kaduna, Nigeria.",
};

const SUPPORT_TEAM = [
  {
    initials: "NI",
    name: "Nasiru Iliya",
    role: "Founder & Initiative Lead",
    sub: "Assistant Lecturer, Cyber Security, Nigerian Defence Academy",
    cred: "MSc Engineering, Artificial Intelligence, Carnegie Mellon University, Kigali, Rwanda. MSc Computing and BSc Computer Science (First Class), Kaduna State University.",
  },
  {
    initials: "HS",
    name: "Haruna Saidu",
    role: "Co-Lead, Technology & Engineering",
    sub: "Senior System Analyst",
    cred: "MSc Computer Science and BSc Computer Science, Kaduna State University.",
  },
  {
    initials: "MA",
    name: "Prof. Muhammad Aminu Ahmad",
    role: "Scientific & Research Advisor",
    sub: "Professor, Kaduna State University",
    cred: "PhD and MSc Network and Information Security, University of Greenwich, UK. BSc Computer Science, Usmanu Danfodiyo University Sokoto.",
  },
  {
    initials: "MI",
    name: "Dr. Mohammed Ibrahim",
    role: "Cybersecurity & Digital Trust Advisor",
    sub: "Head, Cyber Security Dept., Nigerian Defence Academy",
    cred: "PhD and MEng, Universiti Putra Malaysia. BEng, Federal University of Technology, Minna.",
  },
];

const RESEARCHERS = [
  {
    initials: "AA",
    name: "Abdulqahar Mukhtar Abubakar",
    role: "Language & Data Engineer",
    sub: "Trustworthy Computing · GenAI · Agentic AI · Knowledge Graphs",
    cred: "MTech Data Science (First Class with Distinction), Amrita Vishwa Vidyapeetham. BSc Computer Science (First Class), Yusuf Maitama Sule University, Kano.",
    linkedin: "https://www.linkedin.com/in/abdulqahar47/",
  },
  {
    initials: "SS",
    name: "Saifullahi Sadi Shitu",
    role: "Researcher & Engineer",
    sub: "",
    cred: "MEng, Universiti Teknologi Malaysia (UTM). BEng, Bayero University, Kano.",
  },
];

const VALUES = [
  { title: "Innovation", desc: "We pursue original, locally grounded approaches to AI, not imported templates." },
  { title: "Collaboration", desc: "The mission is bigger than any one team — we build with universities, government, and industry." },
  { title: "Excellence", desc: "Rigour in research and engineering, held to a global standard from day one." },
  { title: "Inclusivity", desc: "AI capability should reach every background, region, and institution across Nigeria." },
  { title: "Integrity", desc: "Honest about what our systems can and can't do, and transparent in how we build." },
  { title: "Community Impact", desc: "Every programme is measured by the real difference it makes, not just its reach." },
];

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">About</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            A single mission: advancing and inspiring AI innovation across Africa.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead
            tag="Our Story"
            title="Why CROC AI exists."
            desc="Africa's AI talent and research output are growing fast, but too much AI capability built for the continent is still designed elsewhere, for other contexts. CROC AI Initiative was founded in Kaduna to close that gap: to train people locally who can build AI systems for African languages, institutions, and problems, grounded in African research rather than borrowed assumptions."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
            <span className="font-mono text-xs uppercase text-indigo">Mission</span>
            <p className="font-display text-2xl font-semibold mt-4 leading-snug">
              To advance and inspire AI innovation in Nigeria, and across
              Africa, through applied research, capacity building, and
              locally relevant AI systems.
            </p>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
            <span className="font-mono text-xs uppercase text-indigo">Vision</span>
            <p className="font-display text-2xl font-semibold mt-4 leading-snug">
              To become Africa&apos;s leading AI innovation initiative,
              growing a generation of homegrown AI researchers and
              builders solving the continent&apos;s own problems.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Core Values" title="What we hold to." />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t-2 border-graphite-line pt-5">
                <h4 className="font-display font-semibold text-base mb-2">{v.title}</h4>
                <p className="text-text-mid text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="pb-24 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead
            tag="Leadership Team"
            title="Researchers, engineers, and builders."
            desc="Leadership grounded in both academia and defence-sector cybersecurity. Agency, ownership, and trust are part of how we work."
          />

          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">Support Team</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-graphite-line border border-graphite-line rounded-2xl overflow-hidden mb-16">
            {SUPPORT_TEAM.map((l) => (
              <div key={l.initials} className="bg-ink p-7 hover:bg-graphite transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo to-periwinkle flex items-center justify-center font-display font-bold text-white text-lg mb-5">
                  {l.initials}
                </div>
                <div className="font-display font-semibold text-base">{l.name}</div>
                <div className="text-[13px] text-indigo mt-1 font-semibold">{l.role}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-low mt-2">{l.sub}</div>
                {l.cred && <p className="text-[12.5px] text-text-mid mt-3 leading-relaxed">{l.cred}</p>}
              </div>
            ))}
          </div>

          <span className="font-mono text-xs tracking-[0.12em] uppercase text-text-low mb-6 block">Researchers</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-graphite-line border border-graphite-line rounded-2xl overflow-hidden">
            {RESEARCHERS.map((l) => (
              <div key={l.initials} className="bg-ink p-7 hover:bg-graphite transition-colors">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo to-periwinkle flex items-center justify-center font-display font-bold text-white text-lg">
                    {l.initials}
                  </div>
                  {l.linkedin && (
                    <a
                      href={l.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${l.name} on LinkedIn`}
                      className="text-text-low hover:text-periwinkle transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <div className="font-display font-semibold text-base">{l.name}</div>
                <div className="text-[13px] text-indigo mt-1 font-semibold">{l.role}</div>
                {l.sub && <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-text-low mt-2">{l.sub}</div>}
                {l.cred && <p className="text-[12.5px] text-text-mid mt-3 leading-relaxed">{l.cred}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Want to build with us?" desc="We're always looking for engineers, researchers, and partners who share the mission." primaryLabel="View Careers" primaryHref="/careers" />
        </div>
      </section>
    </div>
  );
}
