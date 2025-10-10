'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="flex justify-between items-center p-4 mx-6 fixed w-full">
      <div className="text-lg font-bold z-20">
        <Link href="/">
          <Image src="/assets/K.svg" alt="Logo" width={35} height={35} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-20 font-bold">
          <li>
            <Link href="/USER EXPERIENCE" className="nav-link">
              USER EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-link">
              MY PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/ABOUT" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/CONTACT" className="nav-link">
              CONTACT
            </Link>
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
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <nav>
          <ul className="flex flex-col items-center gap-10 font-bold text-2xl">
            <li>
              <Link
                href="/USER EXPERIENCE"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                USER EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                MY PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="/ABOUT"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/CONTACT"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;