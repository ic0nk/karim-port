import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "@/components/ProfileCard.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/ProjectsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MantisLoader from "@/components/MantisLoader";




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
    <html lang="en" suppressHydrationWarning className="bg-[var(--background)] dark">
      <head>
        {/* Prevent theme flash: set initial theme class before hydration */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          (() => {
            try {
              const s = localStorage.getItem('theme');
              const t = s ?? 'dark';
              const el = document.documentElement;
              if (t === 'dark') el.classList.add('dark');
              else el.classList.remove('dark');
            } catch {}
          })();
        `}</Script>
      </head>
      <body className="bg-[var(--background)] relative">
        {/* Decorative blur background elements */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* Top left accent blur */}
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          
          {/* Top right accent blur */}
          <div className="absolute -right-20 top-[10%] h-96 w-96 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          
          {/* Middle left white blur */}
          <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-white/8 blur-[140px]" />
          
          {/* Middle right accent blur */}
          <div className="absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-[var(--accent)]/18 blur-3xl" />
          
          {/* Bottom left accent blur */}
          <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          
          {/* Bottom right white blur */}
          <div className="absolute -right-20 bottom-[5%] h-96 w-96 rounded-full bg-white/10 blur-[140px]" />
        </div>
        
        <div className="relative z-10">
          <MantisLoader />
          <Header />
          <main>
            {children}
          </main>
          <Projects />
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
