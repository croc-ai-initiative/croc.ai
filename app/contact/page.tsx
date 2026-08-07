import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CROC AI Initiative. Kaduna, Nigeria.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Contact</span>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-3xl">
            Let&apos;s talk.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-14">
          <div>
            <div className="space-y-8 mb-10">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-low">Office</div>
                <div className="text-[15px] font-semibold mt-1.5">Kaduna, Nigeria</div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-low">Email</div>
                <div className="text-[15px] font-semibold mt-1.5">hello@crocai.ng</div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-low">Social</div>
                <div className="flex gap-5 mt-2.5">
                  <a href="#" className="text-sm text-periwinkle font-medium">LinkedIn</a>
                  <a href="#" className="text-sm text-periwinkle font-medium">X</a>
                  <a href="#" className="text-sm text-periwinkle font-medium">Instagram</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-graphite-line h-64">
              <iframe
                title="CROC AI Initiative location - Kaduna, Nigeria"
                className="w-full h-full grayscale invert-0"
                loading="lazy"
                src="https://www.google.com/maps?q=Kaduna,+Nigeria&output=embed"
              />
            </div>
            <div className="bg-graphite border border-graphite-line rounded-2xl p-6 mt-6">
              <h3 className="font-display text-base font-semibold mb-2">Newsletter</h3>
              <p className="text-text-mid text-sm mb-4">Research, product updates, and workshop announcements.</p>
              <form className="flex gap-2">
                <input type="email" required placeholder="you@example.com" className="flex-1 bg-ink border border-graphite-line rounded-lg px-4 py-2.5 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" />
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-indigo text-white text-sm font-semibold hover:bg-periwinkle transition-colors">Subscribe</button>
              </form>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
