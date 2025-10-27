import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/ProjectsSection";




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
      <body className="overflow-x-hidden">
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
