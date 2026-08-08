import type { NextConfig } from "next";

// GitHub Pages serves project sites from a sub-path:
// https://<user>.github.io/<repo>/ — so every asset URL needs that
// sub-path prefixed, or images/CSS/JS all 404 in production.
// Locally (`npm run dev`) this stays empty so http://localhost:4000
// still works exactly as before.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "croc.ai"; // must match your GitHub repository name exactly

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    // GitHub Pages is static hosting — there's no server to run Next's
    // image optimization API, so it must be disabled.
    unoptimized: true,
  },
  env: {
    // basePath only auto-applies to next/image, next/link, etc. — plain
    // <img src="/..."> tags need it prefixed manually. Exposed here so
    // components can read it at build time via process.env.
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
};

export default nextConfig;
