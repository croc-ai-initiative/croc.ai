import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-[72px] pb-24 md:pb-32">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-24">
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Legal</span>
        <h1 className="font-display font-bold text-4xl mb-6">Terms of Service</h1>
        <div className="bg-graphite border border-graphite-line rounded-2xl p-8 mb-8">
          <p className="text-text-mid text-[15px] leading-relaxed">
            This page is a placeholder. Before launch, replace this with
            terms of service reviewed by legal counsel, covering acceptable
            use of CROC AI&apos;s projects and programmes, workshop
            participation terms, liability limitations, and intellectual
            property ownership for any collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}
