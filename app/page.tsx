import Link from "next/link";
import Image from "next/image";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { HeroCanvas } from "@/components/hero-canvas";
import { CtaBanner } from "@/components/cta-banner";

const PARTNERS = [
  { name: "Kaduna State Government", logo: "/partners/kaduna-state.png" },
  { name: "Kaduna State University", logo: "/partners/kasu.png" },
  { name: "Nigerian Defence Academy", logo: "/partners/nda.png" },
  { name: "Carnegie Mellon University Africa", logo: "/partners/cmu-africa.png" },
];

const PROJECTS = [
  {
    initials: "Rl",
    name: "AI Research & Innovation Lab",
    tagline:
      "An applied research initiative developing homegrown AI tools for African languages, education, agriculture, and public service delivery.",
    tags: ["Applied Research", "African Languages", "Open Tools"],
    href: "/projects#research-lab",
  },
  {
    initials: "Cl",
    name: "Community AI Literacy Programme",
    tagline:
      "A public education initiative teaching students, educators, and civil servants across Nigeria how to use, and build, AI responsibly.",
    tags: ["Public Education", "Digital Literacy", "Outreach"],
    href: "/projects#literacy",
  },
];

const TIMELINE = [
  {
    num: "DAY 01",
    title: "Foundations of Generative AI",
    desc: "How large language models work, where they fail, and why retrieval changes the equation.",
  },
  {
    num: "DAY 02",
    title: "Building with RAG",
    desc: "Hands-on: connecting a knowledge base to a model, chunking, embeddings, and retrieval pipelines.",
  },
  {
    num: "DAY 03",
    title: "Ship Your Chatbot",
    desc: "Each participant deploys a working AI chatbot, grounded in real data, and presents it live.",
  },
];

const SOLUTIONS = [
  { title: "Artificial Intelligence & ML", desc: "Applied AI and machine learning systems designed for real operating conditions." },
  { title: "Large Language Models", desc: "Fine-tuning, evaluation, and deployment of LLMs for domain-specific use." },
  { title: "Retrieval-Augmented Generation", desc: "AI that answers from your own data, not just its training." },
  { title: "Agentic AI Systems", desc: "Autonomous, tool-using agents built for trustworthy, auditable execution." },
  { title: "Software Engineering", desc: "Production-grade platforms, from architecture to deployment." },
  { title: "Cybersecurity", desc: "Security and digital trust engineering, advised by defence-sector experts." },
];

const LEADERS = [
  { initials: "NI", name: "Nasiru Iliya", role: "CEO & President", cred: "MSc AI, Carnegie Mellon University Africa. Assistant Lecturer, Cyber Security, Nigerian Defence Academy." },
  { initials: "HS", name: "Haruna Saidu", role: "Co-Founder & CTO", cred: "Senior System Analyst. Full-stack software engineer, Kaduna State University." },
  { initials: "MA", name: "Prof. Muhammad Aminu Ahmad", role: "Chief Scientific & Innovation Advisor", cred: "Professor, Kaduna State University." },
  { initials: "MI", name: "Dr Mohammed Ibrahim", role: "Chief Cybersecurity & Digital Trust Advisor", cred: "Head, Department of Cyber Security, Nigerian Defence Academy." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
        <HeroCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent_0%,var(--ink)_88%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-8 w-full">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase text-periwinkle bg-indigo-dim border border-indigo/30 px-3.5 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-periwinkle animate-pulse" />
            Kaduna, Nigeria. Building in public
          </span>
          <h1 className="font-display font-bold tracking-tight text-[clamp(40px,6vw,84px)] leading-[1.02] max-w-4xl">
            Advancing and <span className="text-indigo">inspiring AI innovation,</span>{" "}
            across Nigeria and Africa.
          </h1>
          <p className="text-[19px] text-text-mid max-w-xl mt-7 leading-relaxed">
            CROC AI Initiative exists for a single mission: growing research,
            capacity, and homegrown AI systems that solve real problems, and
            training the next generation of African AI builders to do the same.
          </p>
          <div className="flex gap-4 mt-10 flex-wrap">
            <Button href="/solutions">Explore Our Work</Button>
            <Button href="/ai-academy" variant="ghost">
              Join the AI Workshop →
            </Button>
          </div>
          <div className="flex gap-12 mt-21 flex-wrap">
            {[
              ["02", "Flagship Projects"],
              ["6", "Team Members"],
              ["1", "State Govt. Partner"],
              ["3", "Day Flagship Workshop"],
            ].map(([num, label]) => (
              <div key={label} className="font-mono">
                <span className="text-[28px] font-medium text-text-hi block">{num}</span>
                <span className="text-xs text-text-low uppercase tracking-[0.06em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER WALL */}
      <div className="border-t border-b border-graphite-line py-14 bg-ink-soft">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-low">
              Working alongside
            </span>
            <Link href="/partners" className="text-sm text-periwinkle font-medium hover:text-indigo transition-colors">
              All partners →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-graphite-line border border-graphite-line rounded-2xl overflow-hidden">
            {PARTNERS.map((p) => (
              <div key={p.name} className="bg-ink h-28 flex flex-col items-center justify-center gap-2 px-3 text-center hover:bg-graphite transition-colors">
                <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center p-1.5">
                  <Image src={p.logo} alt={`${p.name} logo`} width={44} height={44} className="w-full h-full object-contain" />
                </div>
                <span className="font-display font-semibold text-[11px] text-text-mid hover:text-text-hi transition-colors leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead
            tag="Projects"
            title="Where the mission becomes real."
            desc="Two flagship initiatives, advancing applied AI research and AI literacy across Nigeria today."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="group bg-graphite border border-graphite-line rounded-[20px] p-10 flex flex-col gap-5 hover:border-periwinkle/35 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-dim flex items-center justify-center text-periwinkle font-display font-bold text-lg">
                  {p.initials}
                </div>
                <div className="font-display text-2xl font-semibold">{p.name}</div>
                <p className="text-text-mid text-[15px] leading-relaxed">{p.tagline}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-text-low bg-white/4 border border-graphite-line px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={p.href} className="inline-flex items-center gap-1.5 text-periwinkle text-sm font-semibold mt-2">
                  View project{" "}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP (flagship) */}
      <section id="workshop" className="py-24 md:py-30 bg-ink-soft border-t border-b border-graphite-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#14131f] via-[#1a1830] to-[#211c3d] border border-periwinkle/20 p-8 md:p-14 mb-18">
            <div className="absolute -top-[40%] -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(140,134,255,0.18)_0%,transparent_70%)] pointer-events-none" />
            <span className="relative inline-flex items-center gap-2.5 bg-white/6 border border-white/12 px-4 py-2 rounded-full font-mono text-xs text-white/70 mb-6">
              <Handshake size={14} className="text-periwinkle" strokeWidth={2} />
              In official collaboration with the Kaduna State Government
            </span>
            <h3 className="relative font-display text-[clamp(28px,3.4vw,42px)] font-bold max-w-2xl leading-[1.1] tracking-tight text-white">
              CROC AI Workshop Series: <span className="text-periwinkle">Build Your Own AI Chatbot</span>
            </h3>
            <p className="relative text-white/70 text-base max-w-xl mt-5 leading-relaxed">
              From AI users to AI builders. A three day, fully practical
              programme teaching Retrieval-Augmented Generation, generative
              AI, and real chatbot development, training Kaduna&apos;s youth
              to build AI systems grounded in real data, not just use them.
            </p>
            <div className="relative flex gap-4 mt-8 flex-wrap">
              <Button href="/ai-academy#register">Register Now</Button>
              <Button href="/ai-academy" variant="ghost" className="border-white/20 text-white hover:border-white/40 hover:bg-white/5">
                Workshop Overview
              </Button>
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                ["Venue", "Kaduna State University"],
                ["Dates", "Aug 27–29, 2026"],
                ["Duration", "3 Days, Fully Practical"],
                ["Focus", "RAG & Generative AI"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-white/12 pt-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">{label}</div>
                  <div className="text-[15px] font-semibold text-white mt-1.5">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <SectionHead tag="Programme" title="Three days. Zero to builder." />
          <div className="grid md:grid-cols-3 gap-6">
            {TIMELINE.map((t) => (
              <div key={t.num} className="border-t-2 border-graphite-line pt-5">
                <span className="font-mono text-[13px] text-periwinkle block mb-3">{t.num}</span>
                <div className="font-display text-xl font-semibold mb-2.5">{t.title}</div>
                <p className="text-text-mid text-[14.5px] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-18">
            {[
              ["1st", "Cohort launching in Kaduna"],
              ["3", "Days, fully practical"],
              ["2", "Government & academic partners"],
              ["100%", "Project-based, ship something real"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-[46px] font-bold text-text-hi">{num}</div>
                <div className="text-sm text-text-mid mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead
            tag="Solutions"
            title="Where we build."
            desc="CROC AI operates across the full stack of applied AI, from research to production systems."
          />
          <div className="grid md:grid-cols-3 gap-px bg-graphite-line border border-graphite-line rounded-3xl overflow-hidden">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="bg-ink p-9 hover:bg-graphite transition-colors">
                <h4 className="font-display text-lg font-semibold mb-2.5">{s.title}</h4>
                <p className="text-sm text-text-mid leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHead
              tag="Team"
              title="Built by researchers and engineers."
              desc="Leadership grounded in both academia and defence-sector cybersecurity."
            />
            <Button href="/company#leadership" variant="ghost">
              Meet the full team →
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-graphite-line border border-graphite-line rounded-2xl overflow-hidden">
            {LEADERS.map((l) => (
              <div key={l.initials} className="bg-ink p-7 hover:bg-graphite transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo to-periwinkle flex items-center justify-center font-display font-bold text-white text-lg mb-5">
                  {l.initials}
                </div>
                <div className="font-display font-semibold text-base">{l.name}</div>
                <div className="text-[13px] text-indigo mt-1 font-semibold">{l.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner
            title="Building Kaduna's AI talent pipeline, together."
            desc="Partner with CROC AI to bring AI capacity building, research, and digital transformation to your institution."
          />
        </div>
      </section>
    </>
  );
}
