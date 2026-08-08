import Link from "next/link";
import { assetPath } from "@/lib/utils";

const COLUMNS = [
  {
    heading: "About",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/about", label: "Mission & Vision" },
      { href: "/about#leadership", label: "Leadership Team" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { href: "/programs", label: "All Programs" },
      { href: "/projects#research-lab", label: "AI Innovation Lab" },
      { href: "/ai-academy", label: "Workshops" },
      { href: "/services", label: "Institutional Services" },
    ],
  },
  {
    heading: "Events & Community",
    links: [
      { href: "/events", label: "All Events" },
      { href: "/community", label: "Become a Member" },
      { href: "/community", label: "Volunteer" },
      { href: "/research", label: "Research & Publications" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/resources", label: "Resource Library" },
      { href: "/case-studies", label: "Impact Stories" },
      { href: "/news", label: "News & Blog" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-graphite-line pt-20 pb-8">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              {/* eslint-disable-next-line @next/next/no-img-element -- next/image doesn't respect basePath when unoptimized (required for static export); see lib/utils.ts assetPath() */}
              <img src={assetPath("/croc-ai-icon-white.png")} alt="" className="w-6 h-6 shrink-0" />
              <span className="flex items-baseline">
                <span className="text-text-hi">CROC</span>
                <span className="text-indigo ml-1.5">AI</span>
              </span>
            </div>
            <p className="text-text-mid text-sm mt-5 max-w-[280px] leading-relaxed">
              A single-mission initiative based in Kaduna, Nigeria, advancing
              and inspiring AI innovation across Nigeria and Africa.
            </p>
            <p className="text-text-low text-[13px] mt-5 leading-relaxed">
              Kaduna, Nigeria
              <br />
              hello@crocai.ng
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h5 className="font-mono text-xs uppercase tracking-[0.08em] text-text-low mb-5">
                {col.heading}
              </h5>
              <ul className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-mid hover:text-text-hi transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-graphite-line">
          <p className="text-[13px] text-text-low">
            © {new Date().getFullYear()} CROC AI Initiative. Kaduna, Nigeria.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[13px] text-text-mid hover:text-periwinkle">
              LinkedIn
            </a>
            <a href="#" className="text-[13px] text-text-mid hover:text-periwinkle">
              X
            </a>
            <a href="#" className="text-[13px] text-text-mid hover:text-periwinkle">
              Instagram
            </a>
            <span className="text-[13px] text-text-low font-mono ml-2">Est. August 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
