import type { MetadataRoute } from "next";

// Required for output: "export" — sitemap.ts/robots.ts are normally fine
// without this, but since generation runs at build time either way,
// marking it explicit avoids any ambiguity for the static exporter.
export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/programs",
  "/events",
  "/community",
  "/resources",
  "/partners",
  "/news",
  "/contact",
  "/projects",
  "/ai-academy",
  "/research",
  "/solutions",
  "/services",
  "/case-studies",
  "/careers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://crocai.ng";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
