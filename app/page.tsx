import Link from "next/link";
import Image from "next/image";
import { Handshake, Calendar, MapPin } from "lucide-react";
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

const FEATURED_PROGRAMS = [
  { name: "AI Innovation Lab", desc: "Applied research developing homegrown AI for African languages, education, agriculture, and public service.", href: "/programs#innovation-lab" },
  { name: "Workshops", desc: "Hands-on training, starting with the flagship CROC AI Workshop Series — from AI users to AI builders.", href: "/programs#workshops" },
  { name: "Fellowship Program", desc: "A research fellowship pairing emerging researchers with the Innovation Lab on real applied problems.", href: "/programs#fellowship" },
  { name: "Community Outreach", desc: "Public AI literacy and digital-safety sensitisation, including our annual Cyber Hygiene Day.", href: "/programs#community-outreach" },
];

const NEWS_PREVIEW = [
  { cat: "Partnership Announcements", title: "CROC AI partners with Kaduna State Government to launch the AI Workshop Series" },
  { cat: "Research Highlights", title: "Trustworthy AI and RAG: our approach to grounded, auditable systems" },
  { cat: "Workshop & Event Announcements", title: "What to expect at Build Your Own AI Chatbot, August 27–29" },
];

const IMPACT = [
  ["1", "Workshops Delivered"],
  ["1", "Universities Engaged"],
  ["6", "Community Members"],
  ["2", "Strategic Partnerships"],
  ["1", "Countries Reached"],
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
            <Button href="/community">Get Involved</Button>
            <Button href="/programs" variant="ghost">
              Explore Programs →
            </Button>
          </div>
          <div className="flex gap-12 mt-21 flex-wrap">
            {[
              ["8", "Flagship Programs"],
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

      {/* MISSION STATEMENT */}
      <section className="py-24 md:py-30 bg-ink-soft border-t border-b border-graphite-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-5 block">Our Mission</span>
          <p className="font-display font-semibold text-[clamp(24px,3.4vw,38px)] leading-[1.25] tracking-tight max-w-3xl mx-auto">
            To advance and inspire AI innovation in Nigeria, and across
            Africa, through applied research, capacity building, and
            locally relevant AI systems, growing a generation of homegrown
            AI researchers and builders solving the continent&apos;s own problems.
          </p>
          <Link href="/about" className="inline-flex items-center gap-1.5 text-periwinkle text-sm font-semibold mt-7">
            More on our story and vision →
          </Link>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHead
              tag="Featured Programs"
              title="Eight programs, one pipeline."
              desc="From first exposure to applied research — every programme feeds the next."
            />
            <Button href="/programs" variant="ghost">All Programs →</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_PROGRAMS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-graphite border border-graphite-line rounded-2xl p-8 hover:border-periwinkle/35 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-display text-xl font-semibold mb-2.5">{p.name}</h3>
                <p className="text-text-mid text-[14.5px] leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-periwinkle text-sm font-semibold">
                  Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS (flagship workshop) */}
      <section id="workshop" className="py-24 md:py-30 bg-ink-soft border-t border-b border-graphite-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHead tag="Upcoming Events" title="What's next." />
            <Button href="/events" variant="ghost">All Events →</Button>
          </div>
          <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#14131f] via-[#1a1830] to-[#211c3d] border border-periwinkle/20 p-8 md:p-14">
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

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {[
              { cat: "AI Fridays", title: "AI Fridays — weekly community session", date: "Schedule to be announced", venue: "Kaduna / Online" },
              { cat: "Hackathons", title: "First CROC AI Hackathon", date: "Date to be announced", venue: "Kaduna, Nigeria" },
            ].map((e) => (
              <div key={e.title} className="bg-graphite border border-graphite-line rounded-2xl p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-periwinkle">{e.cat}</span>
                <h4 className="font-display text-base font-semibold mt-2 mb-3">{e.title}</h4>
                <div className="flex items-center gap-2 text-text-mid text-sm mb-1.5">
                  <Calendar size={13} className="text-text-low shrink-0" /> {e.date}
                </div>
                <div className="flex items-center gap-2 text-text-mid text-sm">
                  <MapPin size={13} className="text-text-low shrink-0" /> {e.venue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHead tag="Latest News" title="What we're building, thinking, and shipping." />
            <Button href="/news" variant="ghost">All News →</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS_PREVIEW.map((n) => (
              <div key={n.title} className="border border-graphite-line rounded-2xl overflow-hidden hover:border-periwinkle/30 transition-colors">
                <div className="h-32 bg-gradient-to-br from-[#1a1830] to-[#232042] relative">
                  <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,rgba(140,134,255,0.08)_0px,transparent_2px,transparent_40px)]" />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[11px] uppercase text-periwinkle tracking-[0.06em]">{n.cat}</span>
                  <h3 className="font-display text-[15px] font-semibold mt-2.5 leading-snug">{n.title}</h3>
                  <div className="text-[13px] text-text-low mt-3">Coming soon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 md:py-30 bg-ink-soft border-t border-b border-graphite-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Impact" title="Measured by what actually changes." />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {IMPACT.map(([num, label]) => (
              <div key={label} className="border-t-2 border-graphite-line pt-5">
                <div className="font-display text-[40px] font-bold text-text-hi">{num}</div>
                <div className="text-sm text-text-mid mt-2">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-text-low text-sm mt-8">
            These numbers reflect where we are today, at launch. We&apos;ll update them as every programme runs.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 md:py-30">
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
      </section>

      {/* GET INVOLVED */}
      <section className="py-24 md:py-30">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Get Involved" title="Join, volunteer, partner, or support." desc="However you want to contribute, there's a place for you in this mission." />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Become a Member", desc: "Join our growing community of AI practitioners and students.", href: "/community" },
              { title: "Volunteer", desc: "Facilitate, mentor, or support our programmes and events.", href: "/community" },
              { title: "Partner", desc: "Universities, government, NGOs, and companies advancing AI together.", href: "/partners" },
              { title: "Support", desc: "Sponsor a workshop, cohort, or research stream.", href: "/contact" },
            ].map((g) => (
              <Link key={g.title} href={g.href} className="group bg-graphite border border-graphite-line rounded-2xl p-7 hover:border-periwinkle/35 transition-colors">
                <h4 className="font-display text-base font-semibold mb-2">{g.title}</h4>
                <p className="text-text-mid text-sm leading-relaxed mb-4">{g.desc}</p>
                <span className="text-periwinkle text-sm font-semibold inline-flex items-center gap-1.5">
                  Get started <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </Link>
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
