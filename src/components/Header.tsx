"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const projectsBtnRef = useRef<HTMLButtonElement | null>(null);
  const projectsMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close desktop submenu on outside click or Esc
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isProjectsOpen) return;
      const target = e.target as Node;
      if (projectsBtnRef.current?.contains(target) || projectsMenuRef.current?.contains(target)) return;
      setIsProjectsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProjectsOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isProjectsOpen]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Logo click: if on home, scroll to hero; otherwise navigate home
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (pathname === "/") {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  const isWhiteHeader = pathname?.startsWith("/project-Owen-Bryce");

  return (
    <header suppressHydrationWarning className={`flex justify-between items-center p-6 px-30 fixed w-full z-100 ${isWhiteHeader ? "text-white" : ""}`}>
      <div className="text-lg font-bold z-20">
        <button suppressHydrationWarning onClick={handleLogoClick} aria-label="Go home or scroll to hero" className="cursor-pointer group relative inline-flex items-center gap-2">
          <Image src={isWhiteHeader ? "/assets/K (W).svg" : "/assets/K.svg"} alt="Logo" width={35} height={35} />
          {/* Hover-reveal full name next to logo */}
          <span
            className={`absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm tracking-wider opacity-0 -translate-x-1 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${isWhiteHeader ? 'text-white' : 'text-[var(--accent)]'}`}
          >
            KARIM MASSAOUD
          </span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-10 font-bold relative">
          <li>
            <button suppressHydrationWarning
              onClick={() => scrollToSection('user-experience')} 
              className="nav-link cursor-pointer"
            >
              USER EXPERIENCE
            </button>
          </li>
          <li className="relative">
                <button
              ref={projectsBtnRef}
              suppressHydrationWarning
              onClick={() => setIsProjectsOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={isProjectsOpen}
                  title="Open submenu"
                  className="nav-link cursor-pointer relative group"
            >
              MY PROJECTS
                  {/* Hover hint: small text below to indicate submenu */}
                  <span
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1 text-[10px] tracking-wide text-[var(--secondary-text)] bg-[var(--background)]/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition"
                  >
                    submenu
                  </span>
            </button>
            {/* Dropdown submenu */}
            <div
              ref={projectsMenuRef}
              role="menu"
              aria-label="My Projects submenu"
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-white/10 bg-[var(--background)]/80 backdrop-blur-md shadow-xl ring-1 ring-black/5 transition-all duration-200 ease-out origin-top z-50 p-1 ${isProjectsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
            >
              {/* caret */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-[var(--background)]/80 backdrop-blur-md border-l border-t border-white/10 ring-1 ring-black/5 rounded-sm" />

              <ul className="py-1 text-sm">
                <li>
                  <Link
                    href="/project-details"
                    role="menuitem"
                    tabIndex={isProjectsOpen ? 0 : -1}
                    className={`block px-3 py-2 rounded-lg transition-colors ${pathname === '/project-details' ? 'bg-[var(--Secondary-Background)]/70 text-[var(--text)] font-semibold' : 'text-[var(--text)]/90 hover:bg-[var(--Secondary-Background)]/60'}`}
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Travel World
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project-Triple-Wave"
                    role="menuitem"
                    tabIndex={isProjectsOpen ? 0 : -1}
                    className={`block px-3 py-2 rounded-lg transition-colors ${pathname === '/project-Triple-Wave' ? 'bg-[var(--Secondary-Background)]/70 text-[var(--text)] font-semibold' : 'text-[var(--text)]/90 hover:bg-[var(--Secondary-Background)]/60'}`}
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Triple WAVE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project-Owen-Bryce"
                    role="menuitem"
                    tabIndex={isProjectsOpen ? 0 : -1}
                    className={`block px-3 py-2 rounded-lg transition-colors ${pathname === '/project-Owen-Bryce' ? 'bg-[var(--Secondary-Background)]/70 text-[var(--text)] font-semibold' : 'text-[var(--text)]/90 hover:bg-[var(--Secondary-Background)]/60'}`}
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Owen Bryce
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button suppressHydrationWarning
              onClick={() => scrollToSection('contact')} 
              className="nav-link cursor-pointer"
            >
              CONTACT
            </button>
          </li>
           <li>
            <button suppressHydrationWarning
              onClick={() => scrollToSection('about')} 
              className="nav-link cursor-pointer"
            >
              ABOUT
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-20">
        <button suppressHydrationWarning
          className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger-line" style={isWhiteHeader ? { background: '#ffffff' } : undefined}></div>
          <div className="hamburger-line" style={isWhiteHeader ? { background: '#ffffff' } : undefined}></div>
          <div className="hamburger-line" style={isWhiteHeader ? { background: '#ffffff' } : undefined}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <nav>
          <ul className="flex flex-col items-center gap-10 font-bold text-2xl">
            <li>
              <button suppressHydrationWarning
                onClick={() => scrollToSection('user-experience')}
                className="nav-link cursor-pointer"
              >
                USER EXPERIENCE
              </button>
            </li>
            <li>
              <button suppressHydrationWarning
                onClick={() => setIsMobileProjectsOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={isMobileProjectsOpen}
                className="nav-link cursor-pointer"
              >
                MY PROJECTS
              </button>
              <div className={`pl-4 mt-2 transition duration-200 ${isMobileProjectsOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <ul className="flex flex-col gap-2 text-lg rounded-xl border border-white/10 bg-[var(--background)]/70 backdrop-blur-md p-2">
                  <li>
                    <Link href="/project-details" className="block px-3 py-2 rounded-md hover:bg-[var(--Secondary-Background)]/60" onClick={() => { setIsMenuOpen(false); setIsMobileProjectsOpen(false); }}>
                      Travel World
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-Triple-Wave" className="block px-3 py-2 rounded-md hover:bg-[var(--Secondary-Background)]/60" onClick={() => { setIsMenuOpen(false); setIsMobileProjectsOpen(false); }}>
                      Triple WAVE
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-Owen-Bryce" className="block px-3 py-2 rounded-md hover:bg-[var(--Secondary-Background)]/60" onClick={() => { setIsMenuOpen(false); setIsMobileProjectsOpen(false); }}>
                      Owen Bryce
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button suppressHydrationWarning
                onClick={() => scrollToSection('about')}
                className="nav-link cursor-pointer"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button suppressHydrationWarning
                onClick={() => scrollToSection('contact')}
                className="nav-link cursor-pointer"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;