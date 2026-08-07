import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
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

