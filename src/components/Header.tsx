'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
    <header className={`flex justify-between items-center p-6 px-30 fixed w-full z-100 ${isWhiteHeader ? "text-white" : ""}`}>
      <div className="text-lg font-bold z-20">
        <button onClick={handleLogoClick} aria-label="Go home or scroll to hero" className="cursor-pointer">
          <Image src={isWhiteHeader ? "/assets/K (W).svg" : "/assets/K.svg"} alt="Logo" width={35} height={35} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-10 font-bold">
          <li>
            <button 
              onClick={() => scrollToSection('user-experience')} 
              className="nav-link cursor-pointer"
            >
              USER EXPERIENCE
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="nav-link cursor-pointer"
            >
              MY PROJECTS
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link cursor-pointer"
            >
              CONTACT
            </button>
          </li>
           <li>
            <button 
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
        <button
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
              <button
                onClick={() => scrollToSection('user-experience')}
                className="nav-link cursor-pointer"
              >
                USER EXPERIENCE
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="nav-link cursor-pointer"
              >
                MY PROJECTS
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link cursor-pointer"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
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