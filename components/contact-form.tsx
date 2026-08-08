"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // NOTE: wire this to /api/contact (or your CMS/CRM backend) before launch.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
        <h3 className="font-display text-xl font-semibold mb-2">Message sent.</h3>
        <p className="text-text-mid text-[15px]">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-graphite border border-graphite-line rounded-2xl p-9 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Full name</label>
          <input id="name" required type="text" className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Email</label>
          <input id="email" required type="email" className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">What can we help with?</label>
        <div className="relative">
          <select id="reason" className="w-full appearance-none bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi focus:outline-none focus:border-periwinkle/60 cursor-pointer">
            <option>General enquiry</option>
            <option>Partnership enquiry</option>
            <option>Programs / Workshop registration</option>
            <option>Community membership</option>
            <option>Volunteering</option>
            <option>Careers</option>
            <option>Press</option>
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-low" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Message</label>
        <textarea id="message" required rows={5} className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="Tell us a bit about what you need..." />
      </div>
      <Button type="submit" className="w-full justify-center">Send Message</Button>
    </form>
  );
}
