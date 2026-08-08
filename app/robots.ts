import type { MetadataRoute } from "next";

// See note in sitemap.ts — explicit for the static exporter.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://crocai.ng/sitemap.xml",
  };
}
