import { Button } from "@/components/ui/button";

export function CtaBanner({
  title,
  desc,
  primaryLabel = "Start a Partnership",
  primaryHref = "/contact",
  secondaryLabel = "Talk to Our Team",
  secondaryHref = "/contact",
}: {
  title: string;
  desc: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="rounded-[28px] bg-gradient-to-br from-indigo to-[#4640c4] px-7 py-12 md:px-14 md:py-18 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <h2 className="relative font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight text-white">
        {title}
      </h2>
      <p className="relative text-white/85 mt-4 text-[17px] max-w-xl mx-auto">
        {desc}
      </p>
      <div className="relative flex gap-4 justify-center mt-8 flex-wrap">
        <Button href={primaryHref} variant="white">
          {primaryLabel}
        </Button>
        <Button
          href={secondaryHref}
          variant="ghost"
          className="border-white/40 text-white hover:bg-white/12"
        >
          {secondaryLabel}
        </Button>
      </div>
    </div>
  );
}
