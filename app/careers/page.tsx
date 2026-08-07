import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Jobs, internships, and graduate programmes at CROC AI Initiative.",
};

const ROLES = [
  { title: "AI/ML Engineer", type: "Full-time", location: "Kaduna, Nigeria" },
  { title: "Full-Stack Software Engineer", type: "Full-time", location: "Kaduna, Nigeria" },
  { title: "Cybersecurity Analyst", type: "Full-time", location: "Kaduna, Nigeria" },
  { title: "Software Engineering Intern", type: "Internship", location: "Kaduna, Nigeria" },
];

export default function CareersPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Careers</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Build Africa&apos;s AI future with us.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Open roles" title="Current opportunities." />
          <div className="divide-y divide-graphite-line border-t border-b border-graphite-line">
            {ROLES.map((r) => (
              <div key={r.title} className="flex flex-wrap items-center justify-between gap-4 py-6">
                <div>
                  <div className="font-display font-semibold text-lg">{r.title}</div>
                  <div className="text-sm text-text-mid mt-1">{r.type} · {r.location}</div>
                </div>
                <Button href="/contact" variant="ghost" size="sm">Apply</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
              <h3 className="font-display text-lg font-semibold mb-2.5">Graduate Programmes</h3>
              <p className="text-text-mid text-sm leading-relaxed">Structured pathways for recent graduates entering AI and software engineering roles.</p>
            </div>
            <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
              <h3 className="font-display text-lg font-semibold mb-2.5">Don&apos;t see your role?</h3>
              <p className="text-text-mid text-sm leading-relaxed mb-4">We&apos;re always open to meeting exceptional people. Reach out anyway.</p>
              <Button href="/contact" size="sm">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
