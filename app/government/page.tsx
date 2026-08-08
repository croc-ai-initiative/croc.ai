"use client";

import { useEffect } from "react";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

// This route moved — Government Partnerships content now lives inside
// /partners. Static export (GitHub Pages) has no server to run a real
// HTTP redirect, so this does a client-side one instead, with a visible
// fallback link in case JS hasn't run yet.
export default function GovernmentRedirect() {
  useEffect(() => {
    window.location.replace(assetPath("/partners#government"));
  }, []);

  return (
    <div className="pt-[72px] min-h-[60vh] flex items-center justify-center">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
        <p className="text-text-mid">
          This page has moved.{" "}
          <Link href="/partners#government" className="text-periwinkle font-semibold">
            View Government Partnerships →
          </Link>
        </p>
      </div>
    </div>
  );
}
