import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-[72px] pb-24 md:pb-32">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-24">
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 block">Legal</span>
        <h1 className="font-display font-bold text-4xl mb-6">Privacy Policy</h1>
        <div className="bg-graphite border border-graphite-line rounded-2xl p-8 mb-8">
          <p className="text-text-mid text-[15px] leading-relaxed">
            This page is a placeholder. Before launch, replace this with a
            privacy policy reviewed by legal counsel, covering what data
            CROC AI collects (e.g. workshop registrations, contact form
            submissions, newsletter sign-ups), how it&apos;s stored and used,
            data retention, and how people can request deletion, particularly
            important given Nigeria&apos;s NDPR (Nigeria Data Protection
            Regulation) requirements and any government-partnership data
            handling obligations.
          </p>
        </div>
      </div>
    </div>
  );
}
