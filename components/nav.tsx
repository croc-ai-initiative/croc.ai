"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/ai-academy", label: "AI Academy" },
  { href: "/research", label: "Research" },
  { href: "/partners", label: "Partners" },
  { href: "/company", label: "Company" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-ink/72 backdrop-blur-md border-b border-graphite-line">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight">
          <img src="/croc-ai-icon-white.png" alt="" className="w-7 h-7 shrink-0" />
          <span className="flex items-baseline">
            <span className="text-text-hi">CROC</span>
            <span className="text-indigo ml-1.5">AI</span>
          </span>
          <span className="font-mono font-normal text-[10px] tracking-[0.18em] text-text-low ml-1 uppercase hidden sm:inline">
            Initiative
          </span>
        </Link>

        <nav className="hidden md:flex gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-mid font-medium hover:text-text-hi transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-graphite-line text-text-hi hover:border-periwinkle/40 hover:bg-indigo-dim transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            href="/careers"
            className="hidden sm:inline text-sm text-text-mid font-medium hover:text-text-hi transition-colors"
          >
            Careers
          </Link>
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Contact
          </Button>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-text-hi"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-graphite-line bg-ink px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base text-text-hi font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/careers" className="text-base text-text-hi font-medium" onClick={() => setOpen(false)}>
            Careers
          </Link>
          <Button href="/contact" className="mt-2">
            Contact
          </Button>
        </div>
      )}
    </header>
  );
}
