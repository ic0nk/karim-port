import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/ProjectsSection";
import WelcomeOverlay from "@/components/WelcomeOverlay";




export const metadata: Metadata = {
  title: "karim",
  description: "karim's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Prevent theme flash: set initial theme class before hydration */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          (() => {
            try {
              const s = localStorage.getItem('theme');
              const m = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const t = s || (m ? 'dark' : 'light');
              const el = document.documentElement;
              if (t === 'dark') el.classList.add('dark');
              else el.classList.remove('dark');
            } catch {}
          })();
        `}</Script>
      </head>
      <body className="overflow-x-hidden">
        <WelcomeOverlay />
        <Header />
        <main>
          {children}
        </main>
        <Projects />
        <Footer />
      </body>
    </html>
  );
}
