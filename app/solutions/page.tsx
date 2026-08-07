import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Solutions",
  description: "AI, machine learning, LLMs, agentic AI, RAG, software engineering, cybersecurity, cloud, and digital transformation. CROC AI's core solution areas.",
};

const SOLUTIONS = [
  {
    title: "Artificial Intelligence",
    desc: "Applied AI systems designed for real operating conditions, not lab demos. We build models and pipelines that hold up in production, even where connectivity and computing resources are limited, as is common across Africa.",
  },
  {
    title: "Machine Learning",
    desc: "Predictive models, classification systems, and decision engines built on real data, with rigorous evaluation and ongoing monitoring after deployment.",
  },
  {
    title: "Large Language Models",
    desc: "Fine tuning, prompt engineering, evaluation, and deployment of LLMs tailored to your organisation's vocabulary and constraints.",
  },
  {
    title: "Agentic AI Systems",
    desc: "Autonomous agents that plan, execute, and correct their own work, engineered with auditability and guardrails so autonomy stays trustworthy.",
  },
  {
    title: "Retrieval-Augmented Generation",
    desc: "AI that answers from your organisation's own data, reducing hallucination and keeping answers current without retraining.",
  },
  {
    title: "Software Engineering",
    desc: "Production-grade platforms built on modern, maintainable architecture, from Next.js frontends to NestJS and PostgreSQL backends, containerised and ready for continuous deployment.",
  },
  {
    title: "Cybersecurity",
    desc: "Security and digital trust engineering advised by defence sector cybersecurity leadership. Threat modelling, secure architecture, and incident readiness.",
  },
  {
    title: "Cloud",
    desc: "Cloud native infrastructure design, deployment automation, and efficient scaling for platforms that need to grow without a rebuild.",
  },
  {
    title: "Digital Transformation",
    desc: "Full modernisation for institutions and governments, from process digitisation to complete AI adoption roadmaps.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Solutions</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            The full stack of applied AI, grounded in African context.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            From research to running systems, CROC AI Initiative advances
            work across the intelligence layer for institutions,
            governments, and communities across Africa.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s, i) => (
              <div key={s.title} className="bg-graphite border border-graphite-line rounded-2xl p-9 hover:border-periwinkle/30 transition-colors">
                <span className="font-mono text-xs text-text-low">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-semibold mt-3 mb-3">{s.title}</h3>
                <p className="text-text-mid text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner
            title="Not sure which solution fits your problem?"
            desc="Tell us what you're trying to solve. We'll help you figure out the right approach, no obligation."
            primaryLabel="Talk to Our Team"
          />
        </div>
      </section>
    </div>
  );
}
