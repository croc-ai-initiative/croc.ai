"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // NOTE: wire this to /api/register (or your CMS backend) before launch.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="bg-graphite border border-graphite-line rounded-2xl p-9">
        <h3 className="font-display text-xl font-semibold mb-2">You&apos;re on the list.</h3>
        <p className="text-text-mid text-[15px]">
          We&apos;ve received your registration and will email confirmation
          details closer to the workshop date.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-graphite border border-graphite-line rounded-2xl p-9 space-y-5">
      <div>
        <label htmlFor="name" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Full name</label>
        <input id="name" name="name" required type="text" className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="Amina Yusuf" />
      </div>
      <div>
        <label htmlFor="email" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Email address</label>
        <input id="email" name="email" required type="email" className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="phone" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Phone number</label>
        <input id="phone" name="phone" required type="tel" className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="+234 800 000 0000" />
      </div>
      <div>
        <label htmlFor="background" className="block font-mono text-[11px] font-medium text-text-low uppercase tracking-[0.08em] mb-2.5">Background (optional)</label>
        <textarea id="background" name="background" rows={3} className="w-full bg-ink border border-graphite-line rounded-lg px-4 py-3 text-sm text-text-hi placeholder:text-text-low focus:outline-none focus:border-periwinkle/60" placeholder="Student, developer, educator, business owner..." />
      </div>
      <Button type="submit" className="w-full justify-center">
        {loading ? "Submitting..." : "Register for the Workshop"}
      </Button>
    </form>
  );
}
