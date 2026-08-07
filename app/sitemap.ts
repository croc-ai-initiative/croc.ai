import type { MetadataRoute } from "next";

const routes = [
  "",
  "/solutions",
  "/projects",
  "/ai-academy",
  "/research",
  "/government",
  "/partners",
  "/services",
  "/case-studies",
  "/company",
  "/careers",
  "/blog",
  "/contact",
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
