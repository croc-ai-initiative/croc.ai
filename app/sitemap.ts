import type { MetadataRoute } from "next";

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
