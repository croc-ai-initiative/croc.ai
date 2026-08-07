import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Calendar } from "lucide-react";
import { SectionHead } from "@/components/section-head";
import { RegisterForm } from "@/components/register-form";

export const metadata: Metadata = {
  title: "AI Academy",
  description: "CROC AI Workshop Series. Training Kaduna's youth to become AI builders. Register for Build Your Own AI Chatbot.",
};

const TIMELINE = [
  { num: "DAY 01", title: "Foundations of Generative AI", desc: "How large language models work, where they fail, and why retrieval changes the equation." },
  { num: "DAY 02", title: "Building with RAG", desc: "Hands-on: connecting a knowledge base to a model, chunking, embeddings, and retrieval pipelines." },
  { num: "DAY 03", title: "Ship Your Chatbot", desc: "Each participant deploys a working AI chatbot, grounded in real data, and presents it live." },
];

export default function AiAcademyPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">AI Academy</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            From AI users to AI builders.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            The CROC AI Workshop Series trains students, professionals, and
            institutions to build real AI systems, grounded in their own data,
            starting with our flagship programme in Kaduna.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-br from-[#14131f] via-[#1a1830] to-[#211c3d] border border-periwinkle/20 rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <span className="inline-flex items-center gap-2.5 bg-white/6 border border-white/12 px-4 py-2 rounded-full font-mono text-xs text-white/70 mb-6">
              <Handshake size={14} className="text-periwinkle" strokeWidth={2} />
              In official collaboration with the Kaduna State Government
            </span>
            <h2 className="font-display text-[clamp(26px,3.2vw,38px)] font-bold max-w-2xl leading-[1.1] text-white">
              Workshop 01: Build Your Own AI Chatbot
            </h2>
            <p className="text-white/70 text-base max-w-xl mt-5 leading-relaxed">
              A practical workshop, run over three days, teaching
              Retrieval-Augmented Generation (RAG), generative AI, and AI
              chatbot development. Held on campus at Kaduna State University,
              August 27–29, 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
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
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead
            tag="Events"
            title="Bringing together builders and government."
            desc="Our flagship workshop series, our annual Cyber Hygiene Day, and what comes next."
          />
          <div className="divide-y divide-graphite-line border-t border-b border-graphite-line">
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-8">
              <div className="flex items-center gap-2 text-text-low text-sm font-mono">
                <Calendar size={14} />
                Aug 27–29, 2026
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2.5">
                  Build Your Own AI Chatbot: Cohort 1
                </h3>
                <p className="text-text-mid text-[15px] leading-relaxed mb-4 max-w-2xl">
                  Our flagship workshop runs three days at Kaduna State University,
                  teaching RAG and generative AI to Kaduna&apos;s first
                  cohort of AI builders through practical, guided sessions.
                </p>
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-text-low mb-2">With</div>
                <div className="flex gap-3 flex-wrap mb-4">
                  <span className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">Kaduna State Government</span>
                  <span className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">Kaduna State University</span>
                </div>
                <Link href="#register" className="inline-flex items-center gap-1.5 text-periwinkle text-sm font-semibold">
                  Register Now <span>↗</span>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-8">
              <div className="flex items-center gap-2 text-text-low text-sm font-mono">
                <Calendar size={14} />
                Every August 6
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2.5">
                  Cyber Hygiene Day
                </h3>
                <p className="text-text-mid text-[15px] leading-relaxed mb-4 max-w-2xl">
                  Held every year on CROC AI&apos;s founding anniversary, Cyber
                  Hygiene Day is a public sensitization programme, including a street
                  walk, teaching youths about online threats and the
                  ethical, responsible use of AI.
                </p>
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-text-low mb-2">Focus</div>
                <div className="flex gap-3 flex-wrap">
                  <span className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">Cybersecurity Awareness</span>
                  <span className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">Ethical AI Use</span>
                  <span className="font-mono text-xs text-text-mid bg-white/4 border border-graphite-line px-3 py-1.5 rounded-md">Community Outreach</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-8">
              <div className="flex items-center gap-2 text-text-low text-sm font-mono">
                <Calendar size={14} />
                Future
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2.5 text-text-mid">
                  Workshop Series: Future Cohorts
                </h3>
                <p className="text-text-mid text-[15px] leading-relaxed max-w-2xl">
                  Additional workshops and corporate training cohorts are in
                  planning as the first programme concludes. Subscribe to our
                  newsletter to be notified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="pb-24 md:pb-32 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-14">
          <div>
            <SectionHead
              tag="Registration"
              title="Reserve your seat."
              desc="Spaces in the first cohort are limited. Tell us a bit about yourself and we'll confirm your place."
            />
            <div className="space-y-6 mt-10">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-low">Venue</div>
                <div className="text-[15px] font-semibold mt-1">Kaduna State University, Kaduna</div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-low">Format</div>
                <div className="text-[15px] font-semibold mt-1">3 days, on site, fully practical</div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-low">Partners</div>
                <div className="text-[15px] font-semibold mt-1">Kaduna State Government &middot; Kaduna State University</div>
              </div>
            </div>
          </div>
          <RegisterForm />
        </div>
      </section>

      <section id="corporate" className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold mb-2.5">Corporate AI Training</h3>
              <p className="text-text-mid text-sm leading-relaxed">Custom programmes for teams adopting AI in their workflows.</p>
            </div>
            <div className="bg-graphite border border-graphite-line rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold mb-2.5">Student Programmes</h3>
              <p className="text-text-mid text-sm leading-relaxed">University collaborations bringing applied AI into the classroom.</p>
            </div>
            <div id="certification" className="bg-graphite border border-graphite-line rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold mb-2.5">Certification</h3>
              <p className="text-text-mid text-sm leading-relaxed">Verifiable completion credentials for every workshop cohort.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
