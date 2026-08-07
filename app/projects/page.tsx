import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Projects",
  description: "The AI Research & Innovation Lab and the Community AI Literacy Programme. Flagship initiatives built and run by CROC AI Initiative.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Projects</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            The mission, in motion.
          </h1>
        </div>
      </section>

      <section id="research-lab" className="pb-24 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="bg-graphite border border-graphite-line rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-dim flex items-center justify-center text-periwinkle font-display font-bold text-xl mb-7">Rl</div>
              <h2 className="font-display text-3xl font-bold mb-2">AI Research & Innovation Lab</h2>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-periwinkle mb-5">
                Applied Research for African Contexts
              </p>
              <p className="text-text-mid text-[17px] leading-relaxed mb-6">
                Our applied research initiative, developing homegrown AI
                models and tools for African languages, education,
                agriculture, and public service delivery. Every project is
                designed to work under real infrastructure and connectivity
                constraints, not lab conditions.
              </p>
              <ul className="list-disc list-inside space-y-3 text-[15px] text-text-mid mb-8 marker:text-periwinkle">
                <li>Trustworthy, auditable AI systems for high-stakes settings</li>
                <li>Retrieval-Augmented Generation grounded in local data and languages</li>
                <li>Agentic systems that plan, execute, and correct their own work</li>
                <li>Open research feeding directly into public sector and community tools</li>
              </ul>
              <Button href="/contact">Collaborate With Us</Button>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {["Trustworthy AI", "RAG", "Agentic AI", "African Languages", "Open Research"].map((t) => (
                <span key={t} className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="literacy" className="pb-24 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="bg-graphite border border-graphite-line rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-dim flex items-center justify-center text-periwinkle font-display font-bold text-xl mb-7">Cl</div>
              <h2 className="font-display text-3xl font-bold mb-4">Community AI Literacy Programme</h2>
              <p className="text-text-mid text-[17px] leading-relaxed mb-6">
                A public education initiative teaching students, educators,
                and civil servants across Nigeria how to use, and build, AI
                responsibly. Its flagship offering is the CROC AI Workshop
                Series, delivered in official collaboration with the Kaduna
                State Government.
              </p>
              <ul className="list-disc list-inside space-y-3 text-[15px] text-text-mid mb-8 marker:text-periwinkle">
                <li>Hands-on workshops training first-time AI builders, not just users</li>
                <li>Annual Cyber Hygiene Day: public sensitisation on ethical, safe AI use</li>
                <li>University collaborations bringing applied AI into the classroom</li>
                <li>Corporate and institutional training cohorts</li>
              </ul>
              <Button href="/ai-academy">View the Workshop Series</Button>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {["Workshops", "Digital Literacy", "Ethical AI", "Community Outreach"].map((t) => (
                <span key={t} className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="border border-dashed border-graphite-line rounded-3xl p-14 text-center">
            <h3 className="font-display text-2xl font-semibold mb-3">Future projects</h3>
            <p className="text-text-mid max-w-md mx-auto">More initiatives are in active planning as our first cohort and research streams get underway. Subscribe to our newsletter to hear first.</p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner
            title="Want to partner on one of our projects?"
            desc="We'll walk you through what's underway, what's planned, and how to get involved."
            primaryLabel="Start a Conversation"
          />
        </div>
      </section>
    </div>
  );
}
