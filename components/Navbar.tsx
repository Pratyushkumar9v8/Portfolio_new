"use client";
import { useState, useEffect } from "react";

const navLinks = ["Home", "Projects", "About", "Resume", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#010409]/90 backdrop-blur-md border-b border-[#30363d]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
            <span className="text-[#00ff88] font-mono text-sm font-bold">&gt;_</span>
          </div>
          <span className="font-mono text-[#00ff88] font-semibold tracking-wider text-sm">
            dev<span className="text-white">.portfolio</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative px-4 py-2 font-mono text-sm transition-all duration-200 rounded ${
                active === link
                  ? "text-[#00ff88]"
                  : "text-[#8b949e] hover:text-white"
              }`}
            >
              {active === link && (
                <span className="absolute inset-0 bg-[#00ff88]/5 border border-[#00ff88]/20 rounded" />
              )}
              <span className="relative">
                {active === link && <span className="text-[#00ff88]/60 mr-1">./</span>}
                {link.toLowerCase()}
              </span>
            </button>
          ))}
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#30363d] bg-[#161b22]">
          <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-mono text-xs text-[#8b949e]">available for hire</span>
        </div>
      </div>
    </nav>
  );
}
