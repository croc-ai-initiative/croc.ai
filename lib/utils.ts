import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes a root-relative asset path with the app's basePath (set when
 * deploying to GitHub Pages under a repo sub-path). Needed anywhere a
 * plain <img src="/foo.png"> is used, since Next.js only auto-applies
 * basePath to next/image, next/link, and similar built-ins — never to
 * raw <img> tags.
 */
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
