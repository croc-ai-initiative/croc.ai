import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Programs",
  description: "CROC AI Initiative's flagship programs: AI education, the Innovation Lab, workshops, bootcamps, summer schools, fellowships, and internships.",
};

const PROGRAMS = [
  {
    id: "ai-education",
    name: "AI Education & Training",
    overview: "Structured curricula teaching AI fundamentals through applied systems, for students and professionals with no prior AI background.",
    objectives: ["Build foundational AI/ML literacy at scale", "Teach responsible, ethical AI use alongside technical skill", "Create a pipeline into deeper programmes (Bootcamps, Fellowship)"],
    participants: "Undergraduates, early-career professionals, educators",
    status: "Ongoing — curriculum in active development",
    cta: { label: "Learn More", href: "/resources" },
  },
  {
    id: "innovation-lab",
    name: "AI Innovation Lab",
    overview: "Our applied research initiative developing homegrown AI models and tools for African languages, education, agriculture, and public service delivery.",
    objectives: ["Publish applied research grounded in African data and context", "Build open tools usable by other researchers and institutions", "Feed innovations directly into public-sector and community projects"],
    participants: "Researchers, graduate students, technical partners",
    status: "Active — first research streams underway",
    cta: { label: "View the Lab", href: "/projects#research-lab" },
  },
  {
    id: "workshops",
    name: "Workshops",
    overview: "Hands-on, practical sessions — our flagship being the CROC AI Workshop Series — training first-time builders on real AI systems, not just AI use.",
    objectives: ["Teach Retrieval-Augmented Generation and generative AI hands-on", "Train participants to ship a working chatbot by day three", "Deliver in official collaboration with state institutions"],
    participants: "Students, young professionals, civil servants",
    status: "Registration open — August 27–29, 2026",
    cta: { label: "Register Now", href: "/ai-academy" },
  },
  {
    id: "community-outreach",
    name: "Community Outreach",
    overview: "Public sensitisation on AI literacy, digital trust, and online safety, including our annual Cyber Hygiene Day.",
    objectives: ["Raise baseline AI and digital-safety literacy publicly", "Reach underserved schools and community groups directly", "Run the annual Cyber Hygiene Day sensitisation event"],
    participants: "General public, secondary schools, community groups",
    status: "Ongoing — Cyber Hygiene Day held annually, August 6",
    cta: { label: "Get Involved", href: "/community" },
  },
  {
    id: "bootcamps",
    name: "AI Bootcamps",
    overview: "Intensive, multi-week cohort-based training taking participants from AI fundamentals to a shipped project.",
    objectives: ["Fast-track practical AI engineering skill", "Pair participants with mentors from our researcher network", "End every cohort with a portfolio-ready project"],
    participants: "Job-seeking developers, career-changers",
    status: "Planned — first cohort in design",
    cta: { label: "Join the Waitlist", href: "/contact" },
  },
  {
    id: "summer-schools",
    name: "Summer Schools",
    overview: "Short, intensive residential or on-campus programmes introducing AI to students during academic breaks, run with university partners.",
    objectives: ["Introduce pre-university and early-university students to AI", "Build a pipeline into our longer-form programmes", "Deepen university partnerships"],
    participants: "Secondary and early-year university students",
    status: "Planned — in partnership discussions",
    cta: { label: "Partner With Us", href: "/contact" },
  },
  {
    id: "fellowship",
    name: "Fellowship Program",
    overview: "A structured research fellowship pairing selected fellows with our Innovation Lab to work on real applied-AI research problems.",
    objectives: ["Give emerging researchers hands-on applied research experience", "Produce publishable, applied AI research for African contexts", "Grow a long-term pipeline of in-house researchers"],
    participants: "Graduate students, early-career researchers",
    status: "Planned — first cohort applications opening soon",
    cta: { label: "Express Interest", href: "/contact" },
  },
  {
    id: "internship",
    name: "Internship Program",
    overview: "Placements embedding students and recent graduates directly into our engineering and research teams for hands-on experience.",
    objectives: ["Provide real production and research experience", "Create a direct talent pipeline into our team", "Support participants with mentorship throughout"],
    participants: "Final-year students, recent graduates",
    status: "Planned — opening with our first project cycles",
    cta: { label: "Express Interest", href: "/contact" },
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Programs</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Eight programs, one pipeline: from AI curious to AI builder.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            Every programme feeds the next — from first exposure through
            AI Education & Training, to applied research inside the
            Innovation Lab and Fellowship.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 space-y-6">
          {PROGRAMS.map((p) => (
            <div key={p.id} id={p.id} className="bg-graphite border border-graphite-line rounded-2xl p-8 md:p-10 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold mb-3">{p.name}</h2>
                  <p className="text-text-mid text-[15px] leading-relaxed mb-5">{p.overview}</p>
                  <div className="grid sm:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle mb-2">Objectives</div>
                      <ul className="space-y-1.5 text-text-mid list-disc list-inside marker:text-periwinkle">
                        {p.objectives.map((o) => <li key={o}>{o}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle mb-2">Target Participants</div>
                      <p className="text-text-mid">{p.participants}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle mb-2">Current Status</div>
                      <p className="text-text-mid">{p.status}</p>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button href={p.cta.href} variant="ghost" size="sm">{p.cta.label} →</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Not sure which programme fits?" desc="Tell us where you're starting from and we'll point you to the right one." primaryLabel="Talk to Us" secondaryLabel="Explore Events" secondaryHref="/events" />
        </div>
      </section>
    </div>
  );
}
