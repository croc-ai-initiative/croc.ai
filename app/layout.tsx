import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

// Self-hosted variable Inter font — avoids depending on Google Fonts being
// reachable at build time (fonts.googleapis.com can be blocked or rate
// limited in some CI/sandboxed environments, which fails next/font/google
// builds outright). This file ships with the repo, so builds are fully
// offline-capable and slightly faster too.
const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CROC AI Initiative | Advancing AI Innovation in Africa",
    template: "%s | CROC AI Initiative",
  },
  description:
    "CROC AI Initiative is a single-mission organisation based in Kaduna, Nigeria, advancing and inspiring AI innovation across Nigeria and Africa through research, capacity building, and homegrown AI systems.",
  metadataBase: new URL("https://crocai.ng"),
  openGraph: {
    title: "CROC AI Initiative",
    description:
      "Advancing and inspiring AI innovation across Nigeria and Africa.",
    type: "website",
  },
};

// Runs before paint to avoid a flash of the wrong theme on load.
const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('croc-ai-theme');
    var theme = stored || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

