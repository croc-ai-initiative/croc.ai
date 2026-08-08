import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the CROC AI community as a member or volunteer. Connect with AI practitioners, students, researchers, educators, and innovators across Nigeria.",
};

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Community</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            An active community of AI builders, growing across Nigeria.
          </h1>
          <p className="text-text-mid text-lg max-w-2xl mt-6 leading-relaxed">
            Students, researchers, educators, and practitioners — CROC AI is
            building a network of people who both use and build AI
            responsibly, together.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-graphite border border-graphite-line rounded-2xl p-9 flex flex-col">
            <span className="font-mono text-xs uppercase text-periwinkle mb-3">Become a Member</span>
            <h2 className="font-display text-2xl font-bold mb-4">Join the community</h2>
            <p className="text-text-mid text-[15px] leading-relaxed mb-6">
              Membership connects you to workshops, AI Fridays, our mailing
              list, and a growing network of AI practitioners and students
              across Kaduna and beyond. Free to join, open to anyone
              genuinely interested in AI.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-text-mid mb-8 marker:text-periwinkle">
              <li>Early access to workshop and event registration</li>
              <li>Invitations to AI Fridays and meetups</li>
              <li>Access to the resource library as it grows</li>
              <li>Community newsletter with programme updates</li>
            </ul>
            <Button href="/contact" className="mt-auto self-start">Become a Member</Button>
          </div>
          <div className="bg-graphite border border-graphite-line rounded-2xl p-9 flex flex-col">
            <span className="font-mono text-xs uppercase text-periwinkle mb-3">Volunteer</span>
            <h2 className="font-display text-2xl font-bold mb-4">Give your time and skill</h2>
            <p className="text-text-mid text-[15px] leading-relaxed mb-6">
              We run on people who show up — facilitating workshops,
              mentoring participants, helping with outreach, or supporting
              events behind the scenes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-text-mid mb-8 marker:text-periwinkle">
              <li>Workshop facilitation and mentorship</li>
              <li>Community outreach and event support</li>
              <li>Content, design, and communications help</li>
              <li>Technical contributions to open research tools</li>
            </ul>
            <Button href="/contact" variant="ghost" className="mt-auto self-start">Volunteer With Us</Button>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionHead tag="Where the Community Meets" title="Ongoing ways to connect." />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "AI Fridays", desc: "Weekly informal community sessions — discussion, demos, and open Q&A." },
              { title: "Workshops", desc: "Hands-on cohorts, starting with the flagship CROC AI Workshop Series." },
              { title: "Cyber Hygiene Day", desc: "Our annual public sensitisation day on ethical, safe AI and digital trust." },
            ].map((c) => (
              <div key={c.title} className="border-t-2 border-graphite-line pt-5">
                <h4 className="font-display font-semibold text-base mb-2">{c.title}</h4>
                <p className="text-text-mid text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <CtaBanner title="Ready to get involved?" desc="Membership is free. Volunteering is welcomed. Both start with one message." />
        </div>
      </section>
    </div>
  );
}
